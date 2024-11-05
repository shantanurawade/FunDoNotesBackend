import mongoose from "mongoose";


const noteScheme = new mongoose.Schema({
    userId: {
        type: String,
        default: "670d5fbef338cfede1352680"
    },
    noteTitle: {
        type: String
    },
    noteDescription: {
        type: String
    },
    isPinned: {
        type: Boolean,
        default: false
    },
    isRecycled: {
        type: Boolean,
        default: false
    },
    isArchive: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

export default mongoose.model("Note", noteScheme);