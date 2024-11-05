import mongoose from "mongoose";

const userDetailSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: Buffer
}, { timestamps: true });

export default mongoose.model("UserInfo", userDetailSchema);
