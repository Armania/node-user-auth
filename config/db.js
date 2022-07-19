
const DBURL = ""

const mongoose = require("mongoose");

const MONGOURI = "mongodb+srv://db-admin:admin@cluster0.d4klr.mongodb.net/Sandbox?retryWrites=true&w=majority";

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true
    });
    console.log("DB connected");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;