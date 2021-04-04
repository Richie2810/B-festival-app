'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class crew extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  crew.init({
    name: { type:
      DataTypes.STRING,
      allowNull:false
    },
    job: { 
      type: DataTypes.ENUM,
      values: ['lighting', 'sound', 'stage_management', 'security'],
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'crew',
  });
  return crew;
};