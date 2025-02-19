const mongoose = require("mongoose");
require('dotenv').config();


const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL_PROD || "mongodb+srv://21bd1a665dcsmc:FaisaL123@t-m.auj79.mongodb.net/?retryWrites=true&w=majority&appName=T-M", {
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Db is Connected Successfully");
  } catch (error) {
    console.log(`Error ${error.message}`);
  }
};

module.exports = dbConnect;
