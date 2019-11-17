class UserMiddlewares {
  static validateName(req, res, next) {
    try {
      const { name } = req.body;
      const nameRegEx = /\d+/;

      if (nameRegEx.test(name)) {
        throw new Error();
      }
      return next();
    } catch (error) {
      return res.status(400).json({
        message: 'Enter a name without digits'
      });
    }
  }

  static validateEmail(req, res, next) {
    const { email } = req.body;
    const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegEx.test(email)) {
      return res.status(400).json({
        message: 'Enter a valid email address'
      });
    }
    return next();
  }

  static validatePassword(req, res, next) {
    const { password } = req.body;

    if (password.length < 6) {
      return res.status(400).json({
        message: 'Password must be more than 6 characters'
      });
    }
    return next();
  }
}

export default UserMiddlewares;
