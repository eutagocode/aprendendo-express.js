import express from "express";
const app = express();
const PORT = 3000;

let alunos = [
    { id: 0, name: "Jose" },
    { id: 1, name: "Maria" },
    { id: 2, name: "Joao" },
    { id: 3, name: "Marcos" },
];

app.use(express.urlencoded());

app.get("/", (req, res) => {
    res.send("hello world");
});

app.get("/alunos", (req, res) => {
    res.json(JSON.stringify(alunos));
});

// Body
app.get("/aluno", (req, res) => {
    let aluno = alunos.filter((aluno) => aluno.id == req.body.id);
    res.json(aluno);
});

// Params
app.get("/aluno/:id", (req, res) => {
    let aluno = alunos.filter((aluno) => aluno.id == req.params.id);
    console.log(req.params.id);
    res.json(aluno);
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
