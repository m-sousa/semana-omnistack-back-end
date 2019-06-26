const express = require("express");

const routes = express.Router();

routes.get("/", (req, res) => {
  app.send("Hello world!");
});

module.exports = routes;
