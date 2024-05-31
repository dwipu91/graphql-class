import mongoose from "mongoose";

const mongoDBconnection = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log(`connected`.bgGreen);
  } catch (error) {
    console.log(`${error.message}`.bgRed);
  }
};

// export default
export default mongoDBconnection;
