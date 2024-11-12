import dotenv from "dotenv";
import { connectDb } from "./db/index.js";
import morgan from 'morgan';
import { app } from "./app.js";
import { json } from 'express';
import routers from "./routes/index.js";
import { API_VERSION } from "./constants.js";
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc';
// import swaggerDoc from './swagger.yaml'

dotenv.config({ path: './.env' });


const options = {

    definition: {
        openapi: "3.0.0",
        info: {
            title: "This is documentation for FunDooNotes api's",
            version: "0.0.1", 
            description: "API documentation for FunDooNotes"
        },
        servers: [
            {
                url: "http://localhost:8000/"
            },

        ]
    },
    apis: ["./src/swagger.js"]
}
connectDb().
    then(() => {
        const specs = swaggerJsdoc(options);
        app.use('/api-docs',
            swaggerUi.serve,
            swaggerUi.setup(specs));   
        app.listen(8000, (req, res) => { 
            console.log("Port is listening to : ",8000);
        })
    }).catch((error) => {
        console.log("Error while connecting db", error);
    });


app.use(morgan('tiny'));
app.use(json());
app.use(`/api/${API_VERSION}`, routers());
