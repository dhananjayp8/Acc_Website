const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello Team");
});

app.listen(5050, () => {
  console.log("Server started !");
});
