import express from "express"
import https from "https";
import fs from "fs";
import cors from "cors";
import apiRouter from "./api/index.js"

const app = express();
const port = 3000;

const config = {
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem"),
}

app.use(cors())
app.use("/api", apiRouter);

https.createServer(config, app).listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})