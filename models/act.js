'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class act extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  act.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    start_time: {
      type:DataTypes.DATE,
      allowNull: false
    },
    end_time:  {
      type:DataTypes.DATE,
      allowNull: false 
    },
    video: DataTypes.STRING,
    description: DataTypes.STRING,
    day:  {
      type:DataTypes.INTEGER,
      allowNull: false 
    }
  }, {
    sequelize,
    modelName: 'act',
  });
  return act;
};