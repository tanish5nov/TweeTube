import { } from "dotenv/config";
import mongoose from "mongoose";
import express from "express";
import connectDB from "./db/index.js";
import app from "./app.js";

connectDB()
    .then(
        () => {
            console.log("CONNECTED SUCCESSFULLY");
            app.listen(process.env.PORT || 8000, () => {
                console.log(`SERVER IS RUNNING ON PORT: ${process.env.PORT || 8000}`);
            });
        }
    )
    .catch((error) => {
        console.log("MONGO DB CONNECTION FAILED");
        console.log(error);
    })

