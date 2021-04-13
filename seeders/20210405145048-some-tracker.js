'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "trackers",
      [
        {
          geoLocator: '52.388964,4.930184',
          crewId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          geoLocator: '52.38868,4.933711',
          crewId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          geoLocator: '52.389515,4.937768',
          crewId: null,
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
