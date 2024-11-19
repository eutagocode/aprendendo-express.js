import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = 5000;

const consoleMethod = (request, response, next) => {
    console.log(request.method);
    next();
};

const hello = (request, response) => {
    response.send("hello world");
};

app.get("/", consoleMethod, hello);

app.post("/", consoleMethod, hello);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
