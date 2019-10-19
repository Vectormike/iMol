class UserMiddlewares {
  static validateName(req, res, next) {
    try {
      const { name } = req.body;
      const nameRegEx = /\d+/;

      if (nameRegEx.test(name)) {
        throw new Error();
      }
      next();
    } catch (error) {
      return res.status(400).json({
        message: "Enter a name without digits"
      });
    }
  }

  static validateEmail(req, res, next) {
    try {
      const { email } = req.body;
      const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!emailRegEx.test(email)) {
        throw new Error();
      }
      next();
    } catch (error) {
      return res.status(400).json({
        message: "Enter a valid email address"
      });
    }
  }

  static validatePassword(req, res, next) {
    try {
      const { password } = req.body;
      if (password.length < 6) {
        throw new Error();
      }
      next();
    } catch (error) {
      return res.status(400).json({
        message: "Passwords must be more than 6 characters"
      });
    }
  }
}

export default UserMiddlewares;
