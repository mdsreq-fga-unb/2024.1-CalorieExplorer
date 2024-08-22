import express from 'express'
import mysql from 'mysql2'

// //conectando ao banco de dados

// const connection = mysql.createPool({
//     host: "localhost",
//     user: "root",
//     password: '1234',
//     database: 'calorie_counter_db'
// })


const app = express()

app.use(express.json())

//testando conexão

connection.getConnection((err, conn) =>{
    if(err){
        console.log("deu bom não nengue")
    } else{
        console.log("deu bom sim nengue")
        conn.release()
    }
})

app.get('/usuarios', async(req, res) => {
    try {
        const data = await connection.promise().query(
            'SELECT * from usuarios'
        )
        res.status(202).json({
            users:data [0],
        })
    } catch (err){
        res.status(500).json({
            message: err,
        })
    }
})

app.listen(5000, ()=> {
    console.log('servidor escutando em https://localhost:5000')
})

app.post('/usuarios', async (req, res) => {
    try{
        const {nome, email, senha, data_criacao} = req.body
        const [{insertId}] = await connection.promise().query(
            'INSERT INTO usuarios (nome, email, senha, data_criacao) VALUES (?, ?, ?, ?)',
            [nome, email, senha, data_criacao]
        )
        res.status(202).json({
            message: "adicionado com sucesso"
        })    
    } catch(err){
        res.status(500).json({
            message: err
        })
    }
})


app.patch('/usuarios/:id', async(req, res) =>{
    try{
        const {id} = req.params
        const {nome, email, senha} = req.body
        const update = await connection
        .promise()
        .query(
            'UPDATE usuarios SET nome = ?, email = ?, senha =? where id = ?',
            [nome, email, senha, id]
        )
        res.status(200).json({
            message: "atualizado com sucesso"
        })
    } catch (err){
        res.status(500).json({
            message: err
        })
    }
})

app.delete("/usuarios/:id", async (req, res) => {
    try {
        const {id} = req.params
        const update = await connection
        .promise()
        .query(
            "DELETE FROM usuarios WHERE id = ?",
            [id]
        )
        res.status(200).json({
            message: "deletado com sucesso"
        })
    } catch (err){
        res.status(500).json({
            message: err
        })
    }
})