import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

export const connectDb = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_Name}`);
        console.log("DB connected...");
    }
    catch {
        (error) => {
            console.log("Error in connecting db : ", error);
        }
    }
} 