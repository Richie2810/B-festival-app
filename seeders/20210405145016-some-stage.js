'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "stages",
      [
        {
          name: "Stage 1",
          isVIP: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Stage 2",
          isVIP: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Stage 3",
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
