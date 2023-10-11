import { sendWelcomeEmail } from "../emails/welcomeEmail.js";
import { Student } from "../models/Student.js";

//This function will return all the student from database and will show the all students page by ejs
export const getAllStudentInStudentPage = async (req, res) => {
    const data = await Student.find();
    const dataCount = await Student.estimatedDocumentCount();
    await res.status(200).json({
        message: "All Student Page",
        statusCode: 200,
        dataCount,
        data,
    });
};

//This function will return a single student depending on the ID of the student which will be provided in Routes
export const getSingleStudentWithIDInSingleStudentPage = async (req, res) => {
    const { id } = req.params;
    const data = await Student.findOne({ _id: id });
    await res.status(200).json({
        message: "Single Student Page",
        statusCode: 200,
        data,
    });
};

//this function will show a student create page by using ejs
export const showStudentCreatePage = (req, res) => {
    res.status(200).json({
        message: "Create Student Page",
        statusCode: 200,
    });
};

//this function will create a student and store student data in the database
export const createNewStudent = async (req, res) => {
    const photo = req.file.filename;
    await Student.create({
        ...req.body,
        photo,
    });
    sendWelcomeEmail(req, res);
    await res.status(200).json({
        message: "Student created successfully",
        statusCode: 200,
        data: { ...req.body, photo },
    });
};

//this function will find a single student from the database by ID and update
export const getSingleStudentAndUpdate = async (req, res) => {
    // const data = await Student.updateOne({ _id: req.params.id }, { $set: { ...req.body } });
    const data = await Student.findByIdAndUpdate(
        req.params.id,
        { $set: { ...req.body } },
        { new: true }
    );
    await res.status(200).json({
        message: "Single Student Successfully Found",
        statusCode: 200,
        data,
    });
};

//this function will delete a single student by matching ID from URL
export const deleteSingleStudentByID = async (req, res) => {
    const data = await Student.findByIdAndDelete(req.params.id);
    await res.status(202).json({
        message: "Single Student deleted successfully",
        statusCode: 202,
        data,
    });
};

//this function will clear all students data from database
export const deleteAllStudent = async (req, res) => {
    const data = await Student.deleteMany({});
    await res.status(202).json({
        message: "All Student deleted successfully",
        statusCode: 202,
        data,
    });
};
