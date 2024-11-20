import express from "express";
import aluno from "./routes/aluno.js";
const app = express();
const PORT = 3000;

app.use(express.urlencoded());
app.use("/aluno", aluno);

app.get("/", (req, res) => {
    res.send("hello world");
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
