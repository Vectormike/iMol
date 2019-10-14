import bcrypt from "bcryptjs";

// Model
import { User } from "../models/User";

class UserControllers {
  static async registerUser(req, res) {
    try {
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        res.status(400).json({
          message: "Please, input all fields"
        });
        return;
      }
      const foundUser = await User.findOne({ email });
      if (foundUser) {
        res.status(400).json({
          message: "Sorry, this user already exists"
        });
        return;
      }

      const newUser = new User({
        name,
        email,
        password
      });

      bcrypt.genSalt(10, (err, salt) => {
        if (err) throw err;
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          const registeredUser = newUser.save();
          if (registeredUser) {
            res.status(200).json({
              user: {
                id: registeredUser.id,
                name: registeredUser.name,
                email: registeredUser.ema
              },
              message: "Registration is successful"
            });
          }
        });
      });
    } catch (error) {
      res.status(500).json({
        error: error.message,
        message: "Registration failed"
      });
    }
  }
}

export default UserControllers;
