import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

export const connectDb = async () => {
    try {
        await mongoose.connect(`mongodb://shantanurawade:1234@172.31.7.181:27017/admin`);
        console.log("DB connected...");
    }
    catch {
        (error) => {
            console.log("Error in connecting db : ", error);
        }
    }
} 
