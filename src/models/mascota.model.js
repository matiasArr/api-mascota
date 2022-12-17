module.exports = (sequelize, DataTypes) => {

    const Mascota = sequelize.define("mascota", {
        numMicrochip: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: false,
        },
        nombreMascota: {
            type: DataTypes.STRING,
        },
        fechaNacimiento: {
            type: DataTypes.DATEONLY,
        },
        sexoMascota: {
            type: DataTypes.STRING,
        },
        especieMascota: {
            type: DataTypes.STRING,
        },
        razaMascota: {
            type: DataTypes.STRING,
        },
        icono: {
            type: DataTypes.STRING,
        },
        fotoMascota: {
            type: DataTypes.STRING,
        },
        enfermedad: {
            type: DataTypes.STRING,
        }
        
        
    },
        {
            timestamps: false
        }
        );
        
    return Mascota
}