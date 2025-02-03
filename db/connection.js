const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to mongoDB successfully.");
  } catch (err) {
    console.error("MongoDB connection:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

// ainadipo13
// 8gQCVzbTlDPfXK9c
// mongodb+srv://ainadipo13:8gQCVzbTlDPfXK9c@cluster0.sfu19.mongodb.net/Baby-Toys?retryWrites=true&w=majority&appName=Cluster0
