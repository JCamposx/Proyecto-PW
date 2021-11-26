'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Juego_Equipo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
	  Juego_Equipo.belongsTo(models.Juego, {
		  foreignKey: {
			  name: 'id_juego'
		  }
	  })

	  Juego_Equipo.belongsTo(models.Equipo, {
		  foreignKey: {
			  name: 'id_equipo_j'
		  }
	  })
    }
  };
  Juego_Equipo.init({
    id_juego: DataTypes.INTEGER,
    id_equipo_j: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Juego_Equipo',
	freezeTableName: true
  });
  return Juego_Equipo;
};