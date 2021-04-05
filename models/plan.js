'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class plan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      plan.belongsTo(models.user)
      plan.belongsTo(models.act)
    }
  };
  plan.init({

  }, {
    sequelize,
    modelName: 'plan',
  });
  return plan;
};