const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("MobgoDB Connected...");
  } catch (err) {
    console.error(err.message);

    console.warn("zalupa");

    //Exit process with fail
    process.exit(1);
  }
};

module.exports = connectDB;
