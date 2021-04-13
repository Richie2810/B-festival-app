'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("plans", "userId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addColumn("plans", "actId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "acts",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addColumn("acts", "stageId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "stages",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addColumn("crews", "stageId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "stages",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addColumn("trackers", "crewId", {
      type: Sequelize.INTEGER,
      references: {
        model: "crews",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },
  

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("plans", "userId");
    await queryInterface.removeColumn("plans", "actId");
    await queryInterface.removeColumn("acts", "stageId");
    await queryInterface.removeColumn("crews", "stageId");
    await queryInterface.removeColumn("trackers", "crewId");
  }
};
