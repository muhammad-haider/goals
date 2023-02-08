const errorHandler = (req, res, err, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);

  res.json({
    messasge: err.messasge,
  });
};

module.exports = {
  errorHandler,
};
