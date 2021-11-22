'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
	  Cliente.hasMany(models.Apuesta, {
		  foreignKey: 'id_cliente'
	  })
    }
  };
  Cliente.init({
    dni: DataTypes.STRING,
    nombre: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    foto: DataTypes.STRING,
    correo: DataTypes.STRING,
    contraseña: DataTypes.STRING,
    esPEP: DataTypes.INTEGER,
    telefono: DataTypes.INTEGER,
    estado: DataTypes.INTEGER,
    direccion: DataTypes.STRING,
    distrito: DataTypes.STRING,
    provincia: DataTypes.STRING,
    departamento: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cliente',
	freezeTableName: true
  });
  return Cliente;
};