const express = require("express");

const app = express();

app.get("/", (req, res) => {
  app.send("Hello world!");
});

app.listen(3003);
