"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Planner",
          email: "plan@er.com",
          password: bcrypt.hashSync("planner", SALT_ROUNDS),
          age:19,
          schedule:'1',
          isVIP:false,
          isPlanner:true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "vip",
          email: "vi@p.com",
          password: bcrypt.hashSync("vip", SALT_ROUNDS),
          age:21,
          schedule:'1',
          isVIP:true,
          isPlanner:false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "a",
          email: "a@a.com",
          password: bcrypt.hashSync("a", SALT_ROUNDS),
          age:28,
          schedule:'1',
          isVIP:false,
          isPlanner:false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
