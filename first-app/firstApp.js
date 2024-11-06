const express = require("express");
const app = express();

const getMethod = (req, res) => {
    console.log("Received a GET request on /json");
    res.status(200).json({
        id: "1",
        message: "Hello World",
    });
};

app.route("/json").get(getMethod);

const PORT = process.env.PORT || 8000;
app.listen(PORT, err => {
    if (err) {
        console.error("Error starting server:", err);
    } else {
        console.log(`Server is running on port ${PORT}`);
    }
});