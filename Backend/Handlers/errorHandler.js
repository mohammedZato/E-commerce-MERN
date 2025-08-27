const errorHandler = (error, req, res, next) => {
  if (error) {
    if (error.message) {
      res.status(500).json({
        status: "failed",
        message: error.message,
      });
    } else {
      res.status(500).json({
        status: "failed",
        message: error,
      });
    }
  } else {
    next();
  }
};

module.exports = errorHandler;
