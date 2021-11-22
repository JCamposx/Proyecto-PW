'use strict';
const {
  Model, QueryInterface
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Apuesta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
	  Apuesta.belongsTo(models.Partida, {
		  foreignKey: {
			  name: 'id_partida'
		  }
	  })

	  Apuesta.belongsTo(models.Cliente, {
		foreignKey: {
			name: 'id_cliente'
		}
	  })
    }
  };
  Apuesta.init({
    id_partida: DataTypes.INTEGER,
    id_cliente: DataTypes.INTEGER,
    ganancia: DataTypes.FLOAT,
    decision: DataTypes.INTEGER,
    dinero_apostado: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Apuesta',
	freezeTableName: true
  });
  return Apuesta;
};