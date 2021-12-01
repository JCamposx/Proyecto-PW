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
      {nombre : "Alianza Lima"},
      {nombre : "Cristal"}
    ])

    await queryInterface.bulkInsert('Partida',[
      {
        fecha : new Date().getTime(),
        hora_inicio : "12:40",
        duracion : 60,
        factor_local : 1.2,
        factor_visita : 2.4,
        factor_empate : 0.6,
        resultado : 1,
        estado : 2,
        id_local : 1,
        id_visita : 2
      },
      {
        
        fecha : new Date().getTime(),
        hora_inicio : "14:40",
        duracion : 90,
        factor_local : 1.1,
        factor_visita : 2.6,
        factor_empate : 0.7,
        resultado : 2,
        estado : 3,
        id_local : 3,
        id_visita : 4
      }
    ])

    await queryInterface.bulkInsert('Apuesta',[
      {
        id_partida : 1,
        id_cliente : 1,
        ganancia : 20,
        decision : 2,
        dinero_apostado : 50
    },
      {
        id_partida : 2,
        id_cliente : 2,
        ganancia : 24,
        decision : 1,
        dinero_apostado : 100
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
