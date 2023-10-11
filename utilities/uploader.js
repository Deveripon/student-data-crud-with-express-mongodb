//load dependencies
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        const extname = path.extname(file.originalname);
        const filename =
            file.originalname.replace(extname, "").split(" ").join("_").toLowerCase() +
            "_" +
            Date.now() +
            "_" +
            Math.floor(Math.random() * 1000) +
            extname;
        cb(null, filename);
    },
    destination: (req, file, cb) => {
        if (file.fieldname === "photo") {
            cb(null, path.resolve("public/assets/studentPhoto"));
        } else if (file.fieldname === "cv") {
            cb(null, path.resolve("public/assets/cv"));
        }
    },
});

export const profilePhotoUpload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.fieldname === "photo") {
            if (
                file.mimetype === "image/jpeg" ||
                file.mimetype === "image/jpg" ||
                file.mimetype === "image/png"
            ) {
                cb(null, true);
            } else {
                cb(new Error(`Unsupported file type for ${file.fieldname}: ${file.mimetype}`));
            }
        } else if (file.fieldname === "cv") {
            if (file.mimetype === "application/pdf") {
                cb(null, true);
            } else {
                cb(new Error(`Unsupported file type for ${file.fieldname}: ${file.mimetype}`));
            }
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 5, //5 mb
    },
}).single("photo");
