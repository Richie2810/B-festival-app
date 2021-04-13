'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tracker extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      tracker.belongsTo(models.crew)
    }
  };
  tracker.init({
    geoLocator: {
      type:DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'tracker',
  });
  return tracker;
};