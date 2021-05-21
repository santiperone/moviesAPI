'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Actor, { through: 'ActorMovies' });
      this.belongsTo(models.Director)
    }
  };
  Movie.init({
    title: DataTypes.STRING,
    summary: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    releaseDate: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};