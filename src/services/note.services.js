import { Note } from "../models/index.js";

export const createUser = async (body) => {

    const note = await Note({
        userId: body.userId,
        noteTitle: body.noteTitle,
        noteDescription: body.noteDescription,
        isPinned: body.isPinned,
        isRecycled: body.isRecycled,
        isArchive: body.isArchive
    })
    await note.save();
}

export const getNotes = async () => {
    const data = Note.find();
    return data;
}

export const updateNote = async (id, body) => {
    const updateNote = await Note.findByIdAndUpdate(id, body, { new: true });
    return updateNote;
}