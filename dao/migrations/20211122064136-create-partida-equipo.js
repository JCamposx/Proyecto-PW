'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Partida_Equipo', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_partida: {
        type: Sequelize.INTEGER
      },
      id_equipo: {
        type: Sequelize.INTEGER
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

	await queryInterface.addConstraint('Partida_Equipo', {
		fields: ['id_partida'],
		type: 'FOREIGN KEY',
		name: 'FK_PARTIDA-EQUIPO_PARTIDA',
		references: {
			table: 'Partida',
			field: 'id'
		}
	})

	await queryInterface.addConstraint('Partida_Equipo', {
		fields: ['id_equipo'],
		type: 'FOREIGN KEY',
		name: 'FK_PARTIDA-EQUIPO_EQUIPO',
		references: {
			table: 'Equipo',
			field: 'id'
		}
	})
  },
  down: async (queryInterface, Sequelize) => {
	await queryInterface.removeConstraint('Partida_Equipo', 'FK_PARTIDA-EQUIPO_PARTIDA')
	await queryInterface.removeConstraint('Partida_Equipo', 'FK_PARTIDA-EQUIPO_EQUIPO')
	await queryInterface.dropTable('Partida_Equipo')
  }
};