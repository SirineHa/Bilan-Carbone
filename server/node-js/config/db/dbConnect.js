const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
const dbConnect = async () => {
  try {
    await mongoose.connect(
      process.env.MONGOOSE_CONNECTION_STRING,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Db is Connected Successfully");
  } catch (error) {
    console.log(`Error ${error.message}`);
  }
};

module.exports = dbConnect;