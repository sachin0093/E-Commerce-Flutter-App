// IMPORTS FROM PACKAGES
const express = require("express");
const mongoose = require("mongoose");

// INIT
const PORT = process.env.PORT || 3000;
const app = express();

const DB =
  "mongodb+srv://sachinminde:Sachinraj0093@cluster1.xyowdc6.mongodb.net/test";

app.get("/", (req, res) => {
  res.send("Hii");
});

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`connected at port ${PORT}`);
});
