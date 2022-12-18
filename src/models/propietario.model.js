module.exports = (sequelize, DataTypes) => {

    const Propietario = sequelize.define("propietario", {
        id_propietario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
        },
        direccion: {
            type: DataTypes.STRING,
        },
        telefono: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        }
    },
        {
            timestamps: false
        }
    );

    return Propietario
}
