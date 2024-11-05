import express from 'express';
import { createUser, deleteUser, getUser, resetPassword, userLogin } from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.post('/register', createUser);
userRouter.get('/get', getUser);
userRouter.post('/login', userLogin);
userRouter.put('/reset-password', resetPassword);
userRouter.delete('/delete-user', deleteUser)

export default userRouter;
