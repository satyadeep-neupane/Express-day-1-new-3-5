module.exports = (req, res, next) => {
    console.log("Request Logger : ", req.url);
    res.send('403');
    next();
}