const {listarTodos, adicionar, buscarPorId} = require('../services/cursos');


const index = async (req, res) =>{

    try{
        const cursos = await listarTodos();
        res.send(cursos);

    }catch(erro){
        console.error(erro);
    }


}


const store = async (req, res) =>{
    
    try{
        const body = req.body;
        const retorno = await adicionar(body);

        body.id = retorno.insertId;
        
        res.status(201).send(body);

    }catch(erro){
        console.error(erro);
    }


}


const find = async (req, res) =>{

    try{

        const {cursoId} = req.params;
        const [curso] = await buscarPorId(cursoId);

        if(!curso ) {
            return res.status(404).send({erro:'curso não encontrado'});
        }

        res.send(curso);

        

    }catch(erro){
        console.log(erro);
    }

}


const update = async (req, res) =>{
}


const exclude = async (req, res) =>{


}
module.exports = {index, store, find, update, exclude}