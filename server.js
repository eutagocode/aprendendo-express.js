import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = 5000;

const consoleBody = (request, response, next) => {
    console.log(request.body);
    next();
};

const hello = (request, response) => {
    response.send("hello world");
};

app.use("/", express.json());
app.use("/", consoleBody);

app.get("/", hello);
app.post("/", hello);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
