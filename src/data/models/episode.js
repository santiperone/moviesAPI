'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Episode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Director)
      this.belongsTo(models.Season)
    }
  };
  Episode.init({
    number: DataTypes.INTEGER,
    title: DataTypes.STRING,
    summary: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    releaseDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Episode',
  });
  return Episode;
};