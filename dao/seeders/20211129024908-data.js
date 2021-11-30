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
	
	const fecha1 = new Date(2022, 0, 8); fecha1.setHours(15 - 5, 30);
	const fecha2 = new Date(2021, 11, 11); fecha2.setHours(15 - 5, 0);
	const fecha3 = new Date(2021, 10, 4); fecha3.setHours(17 - 5, 40);
	const fecha4 = new Date(2021, 9, 31); fecha4.setHours(8 - 5, 5);
	const fecha5 = new Date(2021, 11, 3); fecha5.setHours(13 - 5, 20);
	const fecha6 = new Date(2021, 9, 4); fecha6.setHours(15 - 5, 0);
	await queryInterface.bulkInsert('Partida', [
		{
			fecha: fecha1,
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
			fecha: fecha2,
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
			fecha: fecha3,
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
			fecha: fecha4,
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
			fecha: fecha5,
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
			fecha: fecha6,
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

	await queryInterface.bulkInsert('Partida_Equipo', [
		{
			id_partida: 1,
			id_equipo: 1,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id_partida: 1,
			id_equipo: 3,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id_partida: 2,
			id_equipo: 10,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id_partida: 2,
			id_equipo: 11,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id_partida: 3,
			id_equipo: 14,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id_partida: 3,
			id_equipo: 13,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id_partida: 4,
			id_equipo: 5,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id_partida: 4,
			id_equipo: 6,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id_partida: 5,
			id_equipo: 8,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id_partida: 5,
			id_equipo: 7,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id_partida: 6,
			id_equipo: 15,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id_partida: 6,
			id_equipo: 16,
			createdAt: new Date(),
			updatedAt: new Date()
		},
	])
	
	await queryInterface.bulkInsert('Banner', [
		{
			nombre: 'UEFA Champions League',
			imagen: 'https://editorial.uefa.com/resources/026b-12b6a5dc8f16-3eee5dbb0cd4-1000/ucl_logo_20210701155513.jpg',
			url: '/apuestas/1',
			estado: '1',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			nombre: 'Copa Libertadores',
			imagen: 'https://www.conmebol.com/sites/default/files/sin-titulo-1_17.jpg',
			url: '/apuestas/2',
			estado: '1',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			nombre: 'Liga ABC',
			imagen: 'https://cadenaser00.epimg.net/emisora/imagenes/2017/07/05/radio_san_sebastian/1499268719_903532_1499268761_noticia_normal.jpg',
			url: '/apuestas/3',
			estado: '0',
			createdAt: new Date(),
			updatedAt: new Date()
		}
	])

	await queryInterface.bulkInsert('Cliente', [
		{
			dni:'94858350',
			nombre: 'Jose',
			apellidos:'Diaz',
			foto:'aaa.jpg',
			correo:'example@example.com',
			contraseña:'$2a$05$4ZG3DlnzUtthI0vO4Czhbu7r2taQ6zbWCsAHU0BrUBRJKI.bzzXhO',
			esPEP:'1',
			telefono:'483849583',
			estado:'1',
			direccion:'ejemplo ejemplo ejemplo 123',
			distrito:'Ate',
			provincia:'Lima',
			departamento:'Lima',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			dni:'39285068',
			nombre: 'Rafael',
			apellidos:'Alvarez',
			foto:'bbb.jpg',
			correo:'example1@example.com',
			contraseña:'$2a$05$X9w2x6W4BS.aXKsVTbD4xeTjddCUnHvLVSoUHEz7/qERyvRBPy766',
			esPEP:'1',
			telefono:'294050603',
			estado:'1',
			direccion:'ejemplo ejemplo ejemplo 223',
			distrito:'Surco',
			provincia:'Lima',
			departamento:'Lima',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			dni:'38274957',
			nombre: 'Daniel',
			apellidos:'Zegarra',
			foto:'ccc.jpg',
			correo:'example2@example.com',
			contraseña:'$2a$05$IAbRRpt.SrP4/VzFza/uleoBIaWnhJknDvQ6TSYu7/kTxBlf1yCN2',
			esPEP:'0',
			telefono:'392840596',
			estado:'0',
			direccion:'ejemplo ejemplo ejemplo 133',
			distrito:'Huanchaco',
			provincia:'Trujillo',
			departamento:'La Libertad',
			createdAt: new Date(),
			updatedAt: new Date()
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
	 await queryInterface.bulkDelete('Partida_Equipo', null, {})
	 await queryInterface.bulkDelete('Banner', null, {})
	 await queryInterface.bulkDelete('Cliente', null, {})
  }
};
