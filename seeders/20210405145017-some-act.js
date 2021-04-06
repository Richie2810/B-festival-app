'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "acts",
      [
        {
          name: "Red Hot Chilli Peppers",
          start_time: new Date(),
          end_time: new Date(),
          image: 'https://img.gva.be/8PZBjgQ5SwFDrUY3iYoJq7h6ZFA=/1280x853/smart/https%3A%2F%2Fstatic.gva.be%2FAssets%2FImages_Upload%2F2016%2F09%2F13%2Fred.jpg',
          video: 'https://www.youtube.com/watch?v=WZiVsL1k2Aw&ab_channel=DiegoClavijo',
          description:"Cali Funk Rock Band",
          day:1,
          stageId:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Queen",
          start_time: new Date(),
          end_time: new Date(),
          image: 'https://static.wikia.nocookie.net/disney/images/3/35/Queen_band.jpg/revision/latest/scale-to-width-down/800?cb=20160825024847',
          video: 'https://www.youtube.com/watch?v=UI07IaAjBpE&ab_channel=QueenOfficial',
          description:"Pop Rock",
          day:1,
          stageId:2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Metallica",
          start_time: new Date(),
          end_time: new Date(),
          image: 'https://pbs.twimg.com/profile_images/766360293953802240/kt0hiSmv_400x400.jpg',
          video: 'https://www.youtube.com/watch?v=VjcDHVg-u-c&ab_channel=Metallica',
          description:"Metallica is an American heavy metal band.",
          day:2,
          stageId:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vulpeck",
          start_time: new Date(),
          end_time: new Date(),
          image: 'https://qwest.tv/media/wp-content/uploads/2018/12/qwest-tv-the-vulfpeck-phenomenon.jpg',
          video: 'https://www.youtube.com/watch?v=le0BLAEO93g&ab_channel=Vulf',
          description:"Metallica is an American heavy metal band.",
          day:2,
          stageId:2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The Divine Comedy",
          start_time: new Date(),
          end_time: new Date(),
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Neil_1.jpg/1024px-Neil_1.jpg',
          video: 'https://www.youtube.com/watch?v=p_GLSgJ39Dc&ab_channel=TheDivineComedy%28Official%29',
          description:"The Divine Comedy are a pop band from Northern Ireland,",
          day:3,
          stageId:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "king gizzard & the lizard wizard",
          start_time: new Date(),
          end_time: new Date(),
          image: 'https://blog.discogs.com/en/best-of-the-decade-king-gizzard-the-lizard-wizard/',
          video: 'https://www.youtube.com/watch?v=MtDOSIIDGPM&ab_channel=FlightlessRecords',
          description:"King Gizzard & the Lizard Wizard are an Australian rock band formed in 2010 in Melbourne, Victoria.",
          day:3,
          stageId:2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Childish Gambino",
          start_time: new Date(),
          end_time: new Date(),
          image: 'https://img.gva.be/8PZBjgQ5SwFDrUY3iYoJq7h6ZFA=/1280x853/smart/https%3A%2F%2Fstatic.gva.be%2FAssets%2FImages_Upload%2F2016%2F09%2F13%2Fred.jpg',
          video: 'https://www.youtube.com/watch?v=WZiVsL1k2Aw&ab_channel=DiegoClavijo',
          description:"Rapper",
          day:1,
          stageId:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("acts", null, {});
  }
};
