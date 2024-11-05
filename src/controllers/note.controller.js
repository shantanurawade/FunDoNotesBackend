import { Note } from '../models/index.js';
import * as NoteServices from '../services/note.services.js'
import HttpStatus from 'http-status-codes'


export const createNote = async (req, res, next) => {
    try {
        const data = await NoteServices.createUser(req.body);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: "Note created successfully..."
        })
    }
    catch (error) {
        next(error);
    }
}

export const getNotes = async (req, res, next) => {
    try {
        const data = await NoteServices.getNotes();

        res.status(HttpStatus.OK).json({
            status: HttpStatus.OK,
            data: data,
            message: "Notes Fetched successfully..."
        })
    } catch (error) {
        next(error);
    }
}

export const updateNote = async (req, res, next) => {
    try {
        const updateNote = await NoteServices.updateNote(req.params._id, req.body);
        res.status(HttpStatus.OK).json({
            status: HttpStatus.OK,
            data: updateNote,
            message: 'Note updated successfully...'
        })
    }
    catch (error) {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
    }
} 