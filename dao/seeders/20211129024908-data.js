'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
	await queryInterface.bulkInsert('Categoria', [
		{
			nombre_cat: 'Futbol',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			nombre_cat: 'Basket',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			nombre_cat: 'Voleibol',
			createdAt: new Date(),
			updatedAt: new Date()
		}
	])

	await queryInterface.bulkInsert('Juego', [
		{
			nombre_jue: 'UEFA Champions League',
			createdAt: new Date(),
			updatedAt: new Date(),
			id_categoria: 1
		},
		{
			nombre_jue: 'Copa Libertadores',
			createdAt: new Date(),
			updatedAt: new Date(),
			id_categoria: 1
		},
		{
			nombre_jue: 'Liga ACB',
			createdAt: new Date(),
			updatedAt: new Date(),
			id_categoria: 2
		},
		{
			nombre_jue: 'Liga NBA',
			createdAt: new Date(),
			updatedAt: new Date(),
			id_categoria: 2
		},
		{
			nombre_jue: 'LNVS Perú',
			createdAt: new Date(),
			updatedAt: new Date(),
			id_categoria: 3
		},
		{
			nombre_jue: 'RVSL Rusia',
			createdAt: new Date(),
			updatedAt: new Date(),
			id_categoria: 3
		},
	])

	await queryInterface.bulkInsert('Equipo', [
		{
			nombre: 'Real Madrid',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			nombre: 'Barcelona',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			nombre: 'Sheriff Tiraspol',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			nombre: 'Bayern Munich',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			nombre: 'Atletico Mineiro',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			nombre: 'Boca Juniors',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			nombre: 'River Plate',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			nombre: 'Internacional',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			nombre: 'Valencia Basket',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			nombre: 'Saski Baskonia',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			nombre: 'San Pablo Burgos',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			nombre: 'Basket Zaragoza',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			nombre: 'Angeles Lakers',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			nombre: 'Chicago Bulls',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			nombre: 'Brooklyn Nets',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			nombre: 'Toronto Raptors',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			nombre: 'Alianza Lima',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			nombre: 'USMP',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			nombre: 'Molivoleibol',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			nombre: 'Jaamsa',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			nombre: 'Zenit-Kazan',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			nombre: 'Zenit SP',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			nombre: 'Kuzbass',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			nombre: 'Fakel',
			createdAt: new Date(),
			updatedAt: new Date()
		}
	])

	await queryInterface.bulkInsert('Juego_Equipo', [
		{
			id_juego: 1,
			id_equipo_j: 1,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id_juego: 1,
			id_equipo_j: 2,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id_juego: 1,
			id_equipo_j: 3,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id_juego: 1,
			id_equipo_j: 4,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id_juego: 2,
			id_equipo_j: 5,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id_juego: 2,
			id_equipo_j: 6,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id_juego: 2,
			id_equipo_j: 7,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id_juego: 2,
			id_equipo_j: 8,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id_juego: 3,
			id_equipo_j: 9,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id_juego: 3,
			id_equipo_j: 10,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id_juego: 3,
			id_equipo_j: 11,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id_juego: 3,
			id_equipo_j: 12,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id_juego: 4,
			id_equipo_j: 13,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id_juego: 4,
			id_equipo_j: 14,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id_juego: 4,
			id_equipo_j: 15,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id_juego: 4,
			id_equipo_j: 16,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id_juego: 5,
			id_equipo_j: 17,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id_juego: 5,
			id_equipo_j: 18,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id_juego: 5,
			id_equipo_j: 19,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id_juego: 5,
			id_equipo_j: 20,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id_juego: 6,
			id_equipo_j: 21,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id_juego: 6,
			id_equipo_j: 22,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id_juego: 6,
			id_equipo_j: 23,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id_juego: 6,
			id_equipo_j: 24,
			createdAt: new Date(),
			updatedAt: new Date()
		},
	])

	await queryInterface.bulkInsert('Partida', [
		{
			fecha: new Date(2022, 0, 8),
			hora_inicio: '15:30',
			duracion: 90,
			factor_local: 1.3,
			factor_visita: 21.3,
			factor_empate: 2.5,
			resultado: 0,
			estado: 0,
			id_local: 1,
			id_visita: 3,
			createdAt: new Date(),
			updatedAt: new Date(),
			id_juego: 1
		},
		{
			fecha: new Date(2021, 11, 11),
			hora_inicio: '15:00',
			duracion: 90,
			factor_local: 1.2,
			factor_visita: 5.1,
			factor_empate: 2.3,
			resultado: 0,
			estado: 0,
			id_local: 10,
			id_visita: 11,
			createdAt: new Date(),
			updatedAt: new Date(),
			id_juego: 3
		},
		{
			fecha: new Date(2021, 10, 4),
			hora_inicio: '17:40',
			duracion: 40,
			factor_local: 1.3,
			factor_visita: 1.7,
			factor_empate: 2.6,
			resultado: 1,
			estado: 2,
			id_local: 14,
			id_visita: 13,
			createdAt: new Date(),
			updatedAt: new Date(),
			id_juego: 4
		},
		{
			fecha: new Date(2021, 9, 31),
			hora_inicio: '08:05',
			duracion: 90,
			factor_local: 1.1,
			factor_visita: 3.1,
			factor_empate: 2.1,
			resultado: 3,
			estado: 2,
			id_local: 5,
			id_visita: 6,
			createdAt: new Date(),
			updatedAt: new Date(),
			id_juego: 2
		},
		{
			fecha: new Date(2021, 11, 3),
			hora_inicio: '13:20',
			duracion: 90,
			factor_local: 1.5,
			factor_visita: 2.1,
			factor_empate: 1.7,
			resultado: 0,
			estado: 0,
			id_local: 8,
			id_visita: 7,
			createdAt: new Date(),
			updatedAt: new Date(),
			id_juego: 2
		},
		{
			fecha: new Date(2021, 9, 4),
			hora_inicio: '15:00',
			duracion: 40,
			factor_local: 1.3,
			factor_visita: 2.1,
			factor_empate: 1.8,
			resultado: 1,
			estado: 2,
			id_local: 15,
			id_visita: 16,
			createdAt: new Date(),
			updatedAt: new Date(),
			id_juego: 4
		}
	])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
	 await queryInterface.bulkDelete('Categoria', null, {})
	 await queryInterface.bulkDelete('Juego', null, {})
	 await queryInterface.bulkDelete('Equipo', null, {})
	 await queryInterface.bulkDelete('Juego_Equipo', null, {})
	 await queryInterface.bulkDelete('Partida', null, {})

  }
};
