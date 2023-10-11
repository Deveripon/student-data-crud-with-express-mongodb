import mongoose from "mongoose";

//create and connect mongodb by mongose

export const connectToMongoDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/devripon");
        console.log(` Mongodb connected successfully `.bgBlue.white.bold);
    } catch (err) {
        console.log(`   Connection error: ${err}`.red.bold);
    }
};
