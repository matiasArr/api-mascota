module.exports = (sequelize, DataTypes) => {

    const Vacuna = sequelize.define('vacuna', {
        id_vacuna: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre_vacuna: {
            type: DataTypes.STRING,
        },
        mes_aplicacion: {
            type: DataTypes.INTEGER,
        },
        cantidad_dosis: {
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