import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = 5000;

app.use("/meusite", express.static(path.join(__dirname, "client")));

app.get("/", (request, response) => {
    response.send("<h1>hello world from GET</h1>");
});

app.post("/", (request, response) => {
    response.send("<h1>hello world from POST</h1>");
});

app.put("/", (request, response) => {
    response.send("<h1>hello world from PUT</h1>");
});

app.delete("/", (request, response) => {
    response.send("<h1>hello world from DELETE</h1>");
});

app.listen(port, () => {
    console.log(`Listening on port ${PORT}`);
});
