//import cloudinary
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

export const uploadToCloudinary = async (path) => {
    const fileUrl = await cloudinary.uploader.upload(
        path,
        {
            public_id: Date.now() + "_" + Math.floor(Math.random() * 1000000),
            folder: "student-photos",
        },
        (err, res) => {
            if (err) {
                throw new Error(err.message);
            } else {
                console.log(res);
            }
        }
    );
    return fileUrl.secure_url;
};
