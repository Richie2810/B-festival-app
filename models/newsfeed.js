'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class newsFeed extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  newsFeed.init({
    title: {
      type: DataTypes.STRING,
      allowNull:false 
    },
    description: DataTypes.STRING,
    link: DataTypes.STRING,
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'newsFeed',
  });
  return newsFeed;
};