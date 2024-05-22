const express = require("express");
const dbConnect = require("./Config/dbConnect");
const app = express();
const dotEnv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
dbConnect();
app.use("/", (req, res) => {
  res.send("DigiTech Server is running");
});

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
