const mongoose = require('mongoose');

const MONGODB_URL = "mongodb+srv://ashwanijha04:Ashwani%40911@cluster0.1affu4j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

const connectDB = async () => {
  console.log("Trying to connect to MongoDB Atlas")
  try {
    await mongoose.connect(MONGODB_URL, clientOptions);
    console.log('MongoDB Connected...');
  } catch (err) {3
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
