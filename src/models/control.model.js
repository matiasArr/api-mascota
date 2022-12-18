module.exports = (sequelize, DataTypes) => {

    const Control = sequelize.define("control", {
        id_control: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        mascota_id: {
            type: DataTypes.STRING,
        },
        vacuna_id: {
            type: DataTypes.INTEGER,
        },
        fecha_control: {
            type: DataTypes.DATEONLY,
        },
        
    },
        {
            timestamps: false
        }
        );
        

    return Control;
}