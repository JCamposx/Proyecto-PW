'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Apuesta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_partida: {
        type: Sequelize.INTEGER
      },
      id_cliente: {
        type: Sequelize.INTEGER
      },
      ganancia: {
        type: Sequelize.FLOAT
      },
      decision: {
        type: Sequelize.INTEGER
      },
      dinero_apostado: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

	await queryInterface.addConstraint('Apuesta', {
		fields: ['id_partida'],
		type: 'FOREIGN KEY',
		name: 'FK_APUESTA_PARTIDA',
		references: {
			table: 'Partida',
			field: 'id'
		}
	})

	await queryInterface.addConstraint('Apuesta', {
	  fields: ['id_cliente'],
	  type: 'FOREIGN KEY',
	  name: 'FK_APUESTA_CLIENTE',
	  references: {
		  table: 'Cliente',
		  field: 'id'
	  }
	})
  },
  down: async (queryInterface, Sequelize) => {
	await queryInterface.removeConstraint('Apuesta', 'FK_APUESTA_PARTIDA')
	await queryInterface.removeConstraint('Apuesta', 'FK_APUESTA_CLIENTE')
    await queryInterface.dropTable('Apuesta');
  }
};