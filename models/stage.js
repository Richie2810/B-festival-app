'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      stage.hasMany(models.act)
      stage.hasMany(models.crew)
    }
  };
  stage.init({
    name:  {
      type:DataTypes.STRING,
      allowNull: false 
    },
    isVIP:  {
      type:DataTypes.BOOLEAN,
      defaultValue: false 
    }
  }, {
    sequelize,
    modelName: 'stage',
  });
  return stage;
};