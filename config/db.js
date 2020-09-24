require("dotenv").config({ path: ".env" });
const mongoose = require("mongoose"),
  db = process.env.mongoURI;
console.log(db);
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log("mongodb connected");
  } catch (error) {
    console.log(error);

    // in case of error, exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
