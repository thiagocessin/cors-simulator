const express = require("express");
const { index:listarTodos,store, find:buscarCurso } = require("./controllers/cursos");

const app = express();

app.use(express.json());

app.get("/cursos", listarTodos);
app.get("/cursos/:cursoId", buscarCurso);


app.post("/cursos",store);



module.exports = app;