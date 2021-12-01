'use strict';

const { TIME } = require("sequelize");

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
    //Equipo
    await queryInterface.bulkInsert('Equipo',[
      {nombre : "AlianzaLima", createdAt : new Date(), updatedAt : new Date()},
      {nombre : "Cristal", createdAt : new Date(), updatedAt : new Date()}
    ])

    await queryInterface.bulkInsert('Partida',[
      {
        fecha: '12/03/21',
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
        fecha: '14/04/21',
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
      }
    ])

    await queryInterface.bulkInsert('Apuesta',[
      {
        id_partida : 1,
        id_cliente : 1,
        ganancia : 20,
        decision : 2,
        dinero_apostado : 50,
        createdAt : new Date(), updatedAt : new Date()
    },
      {
        id_partida : 2,
        id_cliente : 2,
        ganancia : 24,
        decision : 1,
        dinero_apostado : 100,
        createdAt : new Date(), updatedAt : new Date()
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
    await queryInterface.bulkInsert('Equipo',null, {})
    await queryInterface.bulkInsert('Partida',null, {})
    await queryInterface.bulkInsert('Apuesta',null, {})
  }
};
