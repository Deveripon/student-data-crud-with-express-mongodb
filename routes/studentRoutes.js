//load dependencies
import express from "express";
import {
    createNewStudent,
    deleteAllStudent,
    deleteSingleStudentByID,
    getAllStudentInStudentPage,
    getSingleStudentAndUpdate,
    getSingleStudentWithIDInSingleStudentPage,
} from "../controllers/studentRouteHandler.js";
import { profilePhotoUpload } from "../utilities/uploader.js";

//make student routes
const studentRouter = express.Router();

//API routes
studentRouter.post("/add-new", profilePhotoUpload, createNewStudent);
studentRouter.get("/", getAllStudentInStudentPage);
studentRouter.get("/:id", getSingleStudentWithIDInSingleStudentPage);
studentRouter.patch("/:id", profilePhotoUpload, getSingleStudentAndUpdate);
studentRouter.delete("/:id", deleteSingleStudentByID);
studentRouter.delete("/", deleteAllStudent);

export default studentRouter;
