const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("IT WORKED");
});
app.get("/new", function (req, res) {
  res.send("It really worked");
});

app.listen(process.env.PORT || 8000);
module.exports = app;
