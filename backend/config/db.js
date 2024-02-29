import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb = async () => {
  // The old way.
  // mongoose
  //   .connect(process.env.MONGO_URI)
  //   .then(() => {
  //     console.log("Databases succesfully connected");
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Datbase connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDb;
