const mongoose = require("mongoose");
const MONGODB_LIVE_URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@test.kq5jxjl.mongodb.net/?retryWrites=true&w=majority&appName=Test`;
// const MONGODB_LOCAL_URI = "mongodb://localhost:27017/sailmarket";

mongoose
  .connect(MONGODB_LIVE_URI)
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((error) => {
    console.log(error);
    console.log("Failed to connect to Database");
  });

module.exports = mongoose;
