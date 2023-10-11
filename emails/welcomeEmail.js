//load dependencies
import nodemailer from "nodemailer";
import path from "path";

export const sendWelcomeEmail = (req, res) => {
    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
    });
    transporter.sendMail(
        {
            from: `devripon.io <${process.env.MAIL_USER}>`,
            to: req.body.email,
            cc: ["riponmiah858@gmail.com", "monymukta96@gmail.com"],
            bcc: ["devripon.dev.io@gmail.com", "monymukta96@gmail.com"],
            replyTo: "riponmiah858@gmail.com",
            sender: "riponmiah858@gmail.com",
            subject: "Testing Email",
            text: "This is a test email",
            html: `<h1>This is a testing email</h1>`,
            attachments: {
                filename: "stu.png",
                path: path.resolve("public/assets/images/stu.png"),
            },
        },
        (err, info) => {
            if (err) {
                console.log(err.message);
            } else {
                console.log(info);
            }
        }
    );
};
