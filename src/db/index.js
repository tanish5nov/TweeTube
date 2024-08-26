import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// console.log("THE CONNECTION STRING", process.env.MONGODB_URL);

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`MONGO DB CONNECTED !! ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log(`MONGO DB CONNECTION FAILED WITH ERROR: ${error}`);
        process.exit(1);
        throw error;
    }
}

export default connectDB;