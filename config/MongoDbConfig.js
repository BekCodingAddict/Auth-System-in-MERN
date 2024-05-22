const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URL);
const Db = mongoose.connection;

Db.on("connected", () => {
  console.log("MongoDB has been connected successfully!");
});

Db.on("error", () => {
  console.log("Failed to connect MongoDB!");
});
