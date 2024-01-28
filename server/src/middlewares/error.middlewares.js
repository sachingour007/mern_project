const errorMiddleware = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "BACKEND ERROR";
  const extraDetails = err.extraDetails || "Error from Backend";

  //   console.log("Line no 6:", err);

  return res.status(status).json({ message, extraDetails });
};

module.exports = errorMiddleware;
