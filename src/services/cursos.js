const conexao = require('../infra/conexao');

const listarTodos = () => {

    const sql = "SELECT * FROM cursos";

    return new Promise((resolve, reject)=>{
        const query = conexao.format(sql);

        conexao.query(query,(erro, retorno)=>{
            if(erro){
                return reject(erro);
            }
            resolve(retorno);
        })
    })

}

const adicionar = (curso) => {

    const sql = "INSERT INTO cursos SET ?";

    return new Promise((resolve, reject)=>{
        const query = conexao.format(sql,curso);

        conexao.query(query,(erro, retorno)=>{
            if(erro){
                return reject(erro);
            }
            resolve(retorno);
        })
    })

}

const buscarPorId = (id) => {
    const sql = "SELECT * FROM cursos WHERE id = ?";

    return new Promise((resolve, reject)=>{
        const query = conexao.format(sql,id);

        conexao.query(query,(erro, retorno)=>{
            if(erro){
                return reject(erro);
            }
            resolve(retorno);
        })
    })

}


const atualizar = (curso) =>{

    const sql = "UPDATE cursos SET ? WHERE id = ?";

    return new Promise((resolve, reject)=>{
        const query = conexao.format(sql,[curso, curso.id]);

        conexao.query(query,(erro, retorno)=>{
            if(erro){
                return reject(erro);
            }
            resolve(retorno);
        })
    })

}

const deletar = (id) =>{

    const sql = "DELETE FROM cursos WHERE id = ?";

    return new Promise((resolve, reject)=>{
        const query = conexao.format(sql,id);

        conexao.query(query,(erro, retorno)=>{
            if(erro){
                return reject(erro);
            }
            resolve(retorno);
        })
    })
}


module.exports={listarTodos,adicionar,buscarPorId, atualizar, deletar};