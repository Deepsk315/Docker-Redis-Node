const express = require("express");
const PORT = 4000;

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello from server");
});

app.listen(PORT, (req, res) => {
  console.log(`Server started on port : ${PORT}`);
});
