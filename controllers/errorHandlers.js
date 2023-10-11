export const _404Handler = (req, res) => {
    res.status(404).send({
        message: "404 Not Found",
        statusCode: 404,
    });
};
export const applictionErrorHandler = (err, req, res, next) => {
    if (err.message) {
        res.status(501).send({
            message: err.message,
            statusCode: 501,
        });
    } else {
        res.status(501).send({
            message: "Their was a server side error",
            statusCode: 501,
        });
    }
};
