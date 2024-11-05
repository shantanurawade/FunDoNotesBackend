import express from 'express';
import { createNote, getNotes, updateNote } from '../controllers/note.controller.js';

const noteRouter = express.Router();

noteRouter.post('/create', createNote)
noteRouter.get('/get', getNotes)
noteRouter.put('/update/:_id', updateNote)

export default noteRouter;