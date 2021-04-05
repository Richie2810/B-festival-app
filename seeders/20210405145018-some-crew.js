'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "crews",
      [
        {
          name: "Robert",
          job: "stage_management",
          stageId:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jimmy",
          job: "sound",
          stageId:2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Billy",
          job: "lighting",
          stageId:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("crews", null, {});
  }
};
