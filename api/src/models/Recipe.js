const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id:{
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary:{
      type: DataTypes.TEXT,
      allowNull: false,
    },
    health_score:{
      type: DataTypes.INTEGER,
      allowNull: false,    
    },
    instructions:{
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image:{
      type: DataTypes.STRING,
      allowNull:false
    },
    dishTypes:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    data_base:{
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    }
  },{timestamps:false});
};
