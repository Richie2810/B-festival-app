'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "stages",
      [
        {
          name: "Main Stage",
          isVIP: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pyramid Stage",
          isVIP: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fire Stage",
          isVIP: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Maritim Stage",
          isVIP: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Disco Tent",
          isVIP: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Circus Tent",
          isVIP: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("stages", null, {});
  }
};
