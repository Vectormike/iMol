import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { jwtSecret } from '../config/jwt';

// Model
import { User } from '../models/User';

class UserControllers {
  static async registerUser(req, res) {
    try {
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        res.status(400).json({
          message: 'Please, input all fields'
        });
        return;
      }
      const foundUser = await User.findOne({ email });
      if (foundUser) {
        res.status(400).json({
          message: 'Sorry, this user already exists'
        });
        return;
      }

      const newUser = new User({
        name,
        email,
        password
      });
      console.log(newUser.name);

      bcrypt.genSalt(10, (err, salt) => {
        if (err) throw err;
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save();
          if (newUser) {
            jwt.sign(
              {
                id: newUser.id
              },
              jwtSecret,
              { expiresIn: '1hr' },

              (err, token) => {
                if (err) throw err;
                res.status(200).json({
                  token,
                  user: {
                    id: newUser.id,
                    name: newUser.name,
                    email: newUser.email
                  },
                  message: 'Registration is successful'
                });
              }
            );
          }
        });
      });
    } catch (error) {
      res.status(500).json({
        error: error.message,
        message: 'Registration failed'
      });
    }
  }

  static async loginUser(req, res) {
    try {
      const { email, password } = req.body;
      if (!email || !password)
        return res.status(400).json({
          message: 'Please, enter all fields'
        });

      const foundUser = await User.findOne({ email });
      if (!foundUser) {
        return status(400).json({
          message: 'Sorry, user does not exist'
        });
      }

      const match = await bcrypt.compare(password, foundUser.password);
      if (!match) {
        return res.status(400).json({
          message: 'Invalid credentials'
        });
      }

      jwt.sign(
        {
          id: foundUser.id
        },
        jwtSecret,
        { expiresIn: '1hr' },

        (err, token) => {
          if (err) throw err;
          res.status(200).json({
            token,
            user: {
              id: foundUser.id,
              name: foundUser.name,
              email: foundUser.email
            },
            message: 'Login is successful'
          });
        }
      );
    } catch (error) {
      res.status(500).json({
        error: error.message,
        message: 'Login failed'
      });
    }
  }
}

export default UserControllers;
