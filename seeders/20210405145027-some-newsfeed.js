'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "newsFeeds",
      [
        {
          title: "We got RHCP's",
          description: "somehow we got RHCPs to play at our festival... wow, check out the link to know more about them",
          link: 'https://en.wikipedia.org/wiki/Red_Hot_Chili_Peppers',
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkIvZUsKDcRWcAKzteqsooUPNSloduC2ox7PmeFNPw3aT4i1-C',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Wear a mask!",
          description: "let's stay safe and wear a mask during the pandemic!",
          link: 'https://en.wikipedia.org/wiki/Coronavirus',
          img:'https://upload.wikimedia.org/wikipedia/commons/8/82/SARS-CoV-2_without_background.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Who is your favouite Band at this festival?",
          description: "Leave a comment of your fav band",
          img:'https://festivalfans.nl/wp-content/uploads/2019/10/71748125_2448532212081834_2889379513978847232_o-665x250.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("newsFeeds", null, {});
  }
};
