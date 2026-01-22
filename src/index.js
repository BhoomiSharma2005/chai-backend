// require('dotenv').config({path: './.env'});
import dotenv from "dotenv";


// import mongoose from "mongoose";
// import {DB_NAME} from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
    path: './.env'
});

// SECOND APPROACH --> alag se file le DB folder m ya connection folder m and vaha se function export kraye aur index file m bass uss function ko import karaye aue usko execute krde.




connectDB()





/* FIRST APPROACH 

import express from "express";
const app = express();

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.error("ERROR:", error);
            throw error;
        });
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        });

    } catch (error) {
        console.error("ERROR:", error);
        throw error;
    }

}) ();

*/