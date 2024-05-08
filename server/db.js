const mongoose = require("mongoose");

module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useunifiedTopology: true,
  };
  try {
    mongoose.connect(process.env.DB, connectionParams);
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.log(error);
    console.log("Failed to connect to MongoDB!");
  }
};
