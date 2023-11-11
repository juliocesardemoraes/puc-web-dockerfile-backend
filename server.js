const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, this is my Express.js backend!");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
