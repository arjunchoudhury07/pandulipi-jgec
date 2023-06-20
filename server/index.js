import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import galleryRoutes from "./routes/gallery.js";
import blogRoutes from "./routes/blogs.js";
import libraryRoutes from "./routes/library.js";
import teamRoutes from "./routes/team.js";
import userRoutes from "./routes/user.js";
import homeRoutes from "./routes/home.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// app.use(cors());
app.use(cors({
    origin: ['https://pandulipijgec.in','http://localhost:3000'],
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
    credentials:true
}))
app.use("/gallery", galleryRoutes);
app.use("/blogs", blogRoutes);
app.use("/library", libraryRoutes);
app.use("/team", teamRoutes);
app.use("/user", userRoutes);
app.use("/", homeRoutes);

const PORT = process.env.PORT || 5000;
const DB_URI = process.env.DB_URI
mongoose.set('strictQuery',true);
mongoose
    .connect(`${DB_URI}`)
    .then(() =>
        app.listen(PORT, () =>
            console.log(`Server running on port : http://localhost:${PORT}`)
        )
    )
    .catch((error) => console.log(error.message));
