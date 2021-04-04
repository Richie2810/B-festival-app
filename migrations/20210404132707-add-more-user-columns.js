'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users', 'age', {
      type: Sequelize.INTEGER,
      allowNull: false,
      onUpdate: "CASCADE",
      onDelete: "SET NULL"
    });

    await queryInterface.addColumn('users', 'schedule', {
      type: Sequelize.STRING,
      onUpdate: "CASCADE",
      onDelete: "SET NULL"
    });

    await queryInterface.addColumn('users', 'isVIP', {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      onUpdate: "CASCADE",
      onDelete: "SET NULL"
    });

    await queryInterface.addColumn('users', 'isPlanner', {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      onUpdate: "CASCADE",
      onDelete: "SET NULL"
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('users', 'age');
    await queryInterface.removeColumn('users', 'schedule');
    await queryInterface.removeColumn('users', 'isVIP');
    await queryInterface.removeColumn('users', 'isPlanner');
  }
};
