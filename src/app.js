const express = require("express");
const { index:listarTodos,store, find:buscarCurso } = require("./controllers/cursos");

const app = express();

app.use(express.json());

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","http://localhost:8100");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, Content-Type, Accept"
    );

    next();
});

app.get("/cursos", listarTodos);
app.get("/cursos/:cursoId", buscarCurso);
app.post("/cursos",store);



module.exports = app;