const express = require("express");
const app = express();
require("dotenv").config();
const MongoDbConfig = require("./config/MongoDbConfig");

app.use(express.json());
const usersRoute = require("./routes/usersRoute");

app.use("/api/users", usersRoute);
const port = process.env.PORT || 8888;
app.listen(port, () => console.log("Server listeing on port " + port + "!"));
