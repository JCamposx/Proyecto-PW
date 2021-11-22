'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Partida extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
	  Partida.belongsTo(models.Juego, {
		  foreignKey: 'id_juego'
	  })

	  Partida.hasMany(models.Partida_Equipo, {
		foreignKey: 'id_partida'
	  })

	  Partida.hasMany(models.Apuesta, {
		  foreignKey: 'id_partida'
	  })
    }
  };
  Partida.init({
    fecha: DataTypes.DATE,
    hora_inicio: DataTypes.STRING,
    duracion: DataTypes.INTEGER,
    factor_local: DataTypes.FLOAT,
    factor_visita: DataTypes.FLOAT,
    factor_empate: DataTypes.FLOAT,
    resultado: DataTypes.INTEGER,
    estado: DataTypes.INTEGER,
    id_local: DataTypes.INTEGER,
    id_visita: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Partida',
	freezeTableName: true
  });
  return Partida;
};