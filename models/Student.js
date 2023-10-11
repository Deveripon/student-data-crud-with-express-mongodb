import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    name: {
        type: "String",
        required: true,
        trim: true,
    },
    age: {
        type: "Number",
        required: true,
        trim: true,
    },
    gender: {
        type: "String",
        trim: true,
        enum: ["male", "female"],
    },
    cell: {
        type: "String",
        required: true,
        trim: true,
        unique: true,
    },
    email: {
        type: "String",
        required: true,
        trim: true,
        unique: true,
    },
    photo: {
        type: "String",
        trim: true,
    },
    status: {
        type: "Boolean",
        default: true,
    },
});

export const Student = mongoose.model("student", studentSchema);
