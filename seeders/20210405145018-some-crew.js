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
        {
          name: "Jemmy",
          job: "sound",
          stageId:3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Frankie",
          job: "sound",
          stageId:4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lisa",
          job: "stage_management",
          stageId:3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Robbie",
          job: "stage_management",
          stageId:4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sara",
          job: "stage_management",
          stageId:6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Danny",
          job: "lighting",
          stageId:2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tom",
          job: "lighting",
          stageId:4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jimbob",
          job: "lighting",
          stageId:5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kelly",
          job: "sound",
          stageId:6,
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
