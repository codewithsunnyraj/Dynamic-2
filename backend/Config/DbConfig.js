import mongoose from "mongoose";

export const DbConfig = async () => {
  const MongoUrl = process.env.MONGO_URL;
  try {
    const connect = await mongoose.connect(MongoUrl);
    console.log(`Database Connected Successfully`);
  } catch (error) {
    console.log(`Error while connecting to database`);
  }
};
