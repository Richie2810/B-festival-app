'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "plans",
      [
        {
          userId: 2,
          actId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          actId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          actId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          actId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          actId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          actId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("plans", null, {});
  }
};
