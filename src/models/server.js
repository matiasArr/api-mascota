const dbConfig = require('../config/dbConfig.js');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        define: {
            timestamps: false,
            freezeTableName: true
        },
        operatorsAliases: false,
        
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)
sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Error'+ err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.propietario = require('./propietario.model.js')(sequelize, DataTypes)
db.mascota = require('./mascota.model.js')(sequelize, DataTypes)
db.vacuna = require('./vacuna.model.js')(sequelize, DataTypes)
db.control = require('./control.model.js')(sequelize, DataTypes)


// --------------ESTO SE DEBE CAMBIAR A FALSE -------------

db.sequelize.sync({ alter: false }) // puede ser alter, para las columnas tabla
.then(() => {
    console.log('yes re-sync done!')
})
/**
  docs: https://sequelize.org/docs/v6/core-concepts/assocs/#:~:text=model%20(%20A%20).-,The%20A.,unless%20they%20are%20already%20present).
 */
db.propietario.hasMany(db.mascota, {
    foreignKey: 'propietario_id',
    as: 'mascota'
})

db.mascota.belongsTo(db.propietario, {
    foreignKey: 'propietario_id',
    as: 'propietario'
})

db.mascota.belongsToMany(db.vacuna, {
    through: db.control,
    foreignKey: 'mascota_id',
    otherKey: 'vacuna_id'
})

db.vacuna.belongsToMany(db.mascota, {
    through: db.control,
    foreignKey: 'vacuna_id',
    otherKey: 'mascota_id'
})

module.exports = db