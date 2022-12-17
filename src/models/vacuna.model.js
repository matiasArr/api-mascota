module.exports = (sequelize, DataTypes) => {

    const Vacuna = sequelize.define('vacuna', {
        idVacuna: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombreVacuna: {
            type: DataTypes.STRING,
        },
        mesAplicacion: {
            type: DataTypes.INTEGER,
        },
        cantidadDosis: {
            type: DataTypes.INTEGER,
        },
        especie: {
            type: DataTypes.STRING,
        },
    },
        {
            timestamps: false
        }
    );
    return Vacuna
}