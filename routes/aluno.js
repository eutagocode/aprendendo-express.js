import express from "express";
const router = express.Router();

let alunos = [
    { id: 0, name: "Jose" },
    { id: 1, name: "Maria" },
    { id: 2, name: "Joao" },
    { id: 3, name: "Marcos" },
];

router.get("/", (req, res, next) => {
    console.log(req.body);

    let aluno = alunos[req.body.id];
    if (aluno) {
        res.json(aluno);
    } else {
        next();
    }
});

router.get("/", (req, res, next) => {
    console.log(req.query);

    let aluno = alunos[req.query.id];
    if (aluno) {
        res.json(aluno);
    } else {
        res.send("Aluno não encontrado!");
    }
});

router.get("/all", (req, res) => {
    res.json(JSON.stringify(alunos));
});

router.get("/:id", (req, res) => {
    console.log(req.params.id);
    let aluno = alunos.filter((aluno) => aluno.id == req.params.id);
    res.json(aluno);
});

export default router;
