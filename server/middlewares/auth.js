class UserMiddlewares {
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
