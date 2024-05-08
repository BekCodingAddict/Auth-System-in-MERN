require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");

//database connectioon
connection();

// middleware
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server Listening on port ${port}...`);
});
