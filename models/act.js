'use strict';
const {
  Model
} = require('sequelize');
const user = require('./user');
module.exports = (sequelize, DataTypes) => {
  class act extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      act.belongsToMany(models.user, { through: 'plans', foreignKey: 'actId' })
      act.belongsTo(models.stage)

    }
  };
  act.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    start_time: {
      type:DataTypes.INTEGER,
      allowNull: false
    },
    end_time:  {
      type:DataTypes.INTEGER,
      allowNull: false 
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    video: DataTypes.STRING,
    description: DataTypes.STRING,
    day:  {
      type:DataTypes.INTEGER,
      allowNull: false 
    },
    stageId:{
      type: DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'act',
  });
  return act;
};