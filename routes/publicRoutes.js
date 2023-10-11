//load dependencies
import express from "express";

//make public routes
const publicRouter = express.Router();
publicRouter.route("/").get((req, res) => {
    res.status(200).json({
        message: "This is application Home Page",
        statusCode: 200,
    });
});

export default publicRouter;
