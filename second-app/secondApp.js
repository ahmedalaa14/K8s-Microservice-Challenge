import express from "express";
import dotenv from "dotenv";
import superagent from "superagent";

dotenv.config({ path: "./config.env" });

const app = express();

console.log(process.env.API_URL);

const fetchData = async (req, res) => {
    try {
        const API_URL = process.env.API_URL || "http://localhost:8081/json";
        const jsonData = await superagent.get(API_URL);
        res.status(200).json({
            status: "success",
            data: {
                jsonData,
            },
        });
    } catch (error) {
        res.status(401).json({
            status: "fail",
            message: error.message,
        });
    }
};

app.route("/fetch").get(fetchData);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});