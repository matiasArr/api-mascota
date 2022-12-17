module.exports = (sequelize, DataTypes) => {

    const Propietario = sequelize.define("propietario", {
        idPropietario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombrePropietario: {
            type: DataTypes.STRING,
        },
        direccionPropietario: {
            type: DataTypes.STRING,
        },
        telefonoPropietario: {
            type: DataTypes.STRING,
        },
        emailPropietario: {
            type: DataTypes.STRING,
        }
    },
        {
            timestamps: false
        }
    );

    return Propietario
}
