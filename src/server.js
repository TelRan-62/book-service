import {dbConnection} from "./config/database.js";
import dotenv from 'dotenv';
import express from 'express';
import {syncModels} from "./model/index.js";

dotenv.config();
const app = express();

const startServer = async () => {
    await dbConnection();
    await syncModels();
    app.listen(process.env.PORT || 8080, () => {
        console.log(`Server is running on port ${process.env.PORT || 8080}`);
    })
}

startServer()