'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Partida_Equipo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
	  Partida_Equipo.belongsTo(models.Partida, {
		  foreignKey: {
			  name: 'id_partida'
		  }
	  })
	  
	  Partida_Equipo.belongsTo(models.Equipo, {
		  foreignKey: {
			  name: 'id_equipo'
		  }
	  })
    }
  };
  Partida_Equipo.init({
    id_partida: DataTypes.INTEGER,
    id_equipo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Partida_Equipo',
	freezeTableName: true
  });
  return Partida_Equipo;
};