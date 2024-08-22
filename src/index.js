import Usuarios from "./usuarios.js"
import database from './db.js'

(async () => {
    try {
        const resultado = await database.sync({ alter: true }); // Sincroniza o banco de dados com os modelos
        console.log('Sincronização bem-sucedida:', resultado);
    } catch (error) {
        console.error('Erro ao sincronizar o banco de dados:', error);
    }
})();
