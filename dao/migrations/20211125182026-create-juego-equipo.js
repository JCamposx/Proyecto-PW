'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Juego_Equipo', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_juego: {
        type: Sequelize.INTEGER
      },
      id_equipo_j: {
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

	await queryInterface.addConstraint('Juego_Equipo', {
		fields: ['id_juego'],
		type: 'FOREIGN KEY',
		name: 'FK_JUEGO-EQUIPO_JUEGO',
		references: {
			table: 'Juego',
			field: 'id'
		}
	})

	await queryInterface.addConstraint('Juego_Equipo', {
		fields: ['id_equipo_j'],
		type: 'FOREIGN KEY',
		name: 'FK_JUEGO-EQUIPO_EQUIPO',
		references: {
			table: 'Equipo',
			field: 'id'
		}
	})
  },
  down: async (queryInterface, Sequelize) => {
	await queryInterface.removeConstraint('Juego_Equipo', 'FK_JUEGO-EQUIPO_JUEGO')
	await queryInterface.removeConstraint('Juego_Equipo', 'FK_JUEGO-EQUIPO_EQUIPO')
    await queryInterface.dropTable('Juego_Equipo');
  }
};