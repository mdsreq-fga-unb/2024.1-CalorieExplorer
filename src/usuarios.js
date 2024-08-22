import Sequelize from "sequelize";
import database from './db.js'

const Usuarios = database.define('usuarios', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    senha:{
        type: Sequelize.STRING,
        allowNull: false
    },
    data_criacao:{
        type: Sequelize.DATE
    },
    perfil:{
        type: Sequelize.STRING
    }
},{
    freezeTableName: true,
    timestamps: false
})

Usuarios.sync({ alter: true })
    .then(() => {
        console.log('Tabela sincronizada com o modelo Usuarios.');
    })
    .catch(error => {
        console.error('Erro ao sincronizar a tabela com o modelo Usuarios:', error);
    });


export default Usuarios