'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "trackers",
      [
        {
          longitude: 5.674725466674707,
          latitude: 51.971169799718865,
          crewId: 2,
          isEnabled: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          longitude: 5.675493196942891,
          latitude: 51.97112085236985,
          crewId: 1,
          isEnabled: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          longitude: 5.675045373931888,
          latitude: 51.97066252459555,
          crewId: null,
          isEnabled: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("trackers", null, {});
  }
};
