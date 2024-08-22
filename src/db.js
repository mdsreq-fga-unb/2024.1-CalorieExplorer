import Sequelize from 'sequelize'

const sequelize = new Sequelize('calorie_counter_db', 'root', '1234',{
    dialect: 'mysql', 
    host: 'localhost'
})

export default sequelize