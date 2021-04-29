'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "stages",
      [
        {
          name: "Main Stage",
          isVIP: false,
          background: 'http://www.dinpattern.com/wp-content/uploads/2013/06/EE-gatsby-wallpaper.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pyramid Stage",
          isVIP: true,
          background: 'http://www.dinpattern.com/images/iPad-wallpaper-07.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fire Stage",
          isVIP: false,
          background: 'http://www.dinpattern.com/images/iPad-wallpaper-11.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Maritim Stage",
          isVIP: false,
          background: 'http://www.dinpattern.com/images/iPad-wallpaper-06.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Disco Tent",
          isVIP: false,
          background: 'https://www.wowpatterns.com/assets/files/resource_images/hand-painted-alcohol-ink-texture.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Circus Tent",
          isVIP: false,
          background: 'https://www.wowpatterns.com/assets/files/resource_images/decorative-embroidery-flowers-pattern-seamless-floral-background-texture.jpg',
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
