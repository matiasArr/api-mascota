module.exports = (sequelize, DataTypes) => {

    const Mascota = sequelize.define("mascota", {
        num_microchip: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: false,
        },
        nombre_mascota: {
            type: DataTypes.STRING,
        },
        fecha_nacimiento: {
            type: DataTypes.DATEONLY,
        },
        sexo_mascota: {
            type: DataTypes.STRING,
        },
        especie_mascota: {
            type: DataTypes.STRING,
        },
        raza_mascota: {
            type: DataTypes.STRING,
        },
        foto_mascota: {
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