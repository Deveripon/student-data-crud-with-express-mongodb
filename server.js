//load dependencies
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import path from "path";
import { _404Handler, applictionErrorHandler } from "./controllers/errorHandlers.js";
import publicRouter from "./routes/publicRoutes.js";
import studentRouter from "./routes/studentRoutes.js";
import { connectToMongoDB } from "./config/mongodbConfig.js";
dotenv.config();
//environment Variables
const PORT = process.env.PORT || 6060;

//Initialize express
const app = express();

//use support middleware
app.use(express.static(path.resolve("public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//<!-- ==========  Start From Here ========== -->//
//use application public router
app.use(publicRouter);
//use student router
app.use("/students", studentRouter);

//<!-- ==========  End From Here ========== -->//

//use error handler middleware
app.use(_404Handler);
app.use(applictionErrorHandler);

//server listening on port
app.listen(PORT, () => {
    connectToMongoDB();
    console.log(` Server listening on port ${PORT} `.bgGreen.blue.bold);
});

