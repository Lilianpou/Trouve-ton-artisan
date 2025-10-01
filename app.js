var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

// Routes API
var artisansRouter = require("./routes/api/artisans");
var categoriesRouter = require("./routes/api/categories");

var app = express();

// Configuration CORS
app.use(
  cors({
    origin: "http://localhost:3000", // URL du frontend React
    credentials: true,
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes API uniquement
app.use("/api/artisans", artisansRouter);
app.use("/api/categories", categoriesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error("API endpoint not found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // Send JSON error response instead of rendering a view
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get("env") === "development" ? err : {},
  });
});

module.exports = app;
