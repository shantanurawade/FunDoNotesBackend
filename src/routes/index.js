import express from 'express';
import userRouter from './user.routers.js';
import noteRouter from './notes.routes.js';

const routes = express.Router();

const routers = () => {
    routes.get('/getMsg', (req, res) => {
        res.json('Welcome');
    });
    routes.use('/user', userRouter);
    routes.use('/note', noteRouter);

    return routes;
};

export default routers;