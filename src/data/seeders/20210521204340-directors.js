'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Directors', [{
      "firstName": "Catharina",
      "lastName": "Franklyn",
      "createdAt": "2020-06-04 14:40:19",
      "updatedAt": "2020-07-09 00:16:37"
    }, {
      "firstName": "Emma",
      "lastName": "Killingworth",
      "createdAt": "2020-08-26 23:10:47",
      "updatedAt": "2020-07-27 07:40:58"
    }, {
      "firstName": "Audy",
      "lastName": "Rodolico",
      "createdAt": "2020-07-25 20:21:48",
      "updatedAt": "2020-06-08 22:14:22"
    }, {
      "firstName": "Alexia",
      "lastName": "Umfrey",
      "createdAt": "2020-12-09 03:48:55",
      "updatedAt": "2021-01-30 04:27:11"
    }, {
      "firstName": "Sybyl",
      "lastName": "Rogliero",
      "createdAt": "2020-08-15 14:30:43",
      "updatedAt": "2021-01-25 12:48:45"
    }, {
      "firstName": "Dorita",
      "lastName": "Kidston",
      "createdAt": "2020-07-19 04:26:09",
      "updatedAt": "2020-12-25 16:39:23"
    }, {
      "firstName": "Wilt",
      "lastName": "Richold",
      "createdAt": "2020-09-06 11:06:33",
      "updatedAt": "2021-02-01 04:35:35"
    }, {
      "firstName": "Ewen",
      "lastName": "Gisbye",
      "createdAt": "2020-11-12 23:30:01",
      "updatedAt": "2021-01-03 11:01:42"
    }, {
      "firstName": "Dietrich",
      "lastName": "Breznovic",
      "createdAt": "2021-05-11 18:17:35",
      "updatedAt": "2020-10-18 07:56:53"
    }, {
      "firstName": "Biddy",
      "lastName": "Ceaser",
      "createdAt": "2020-06-24 14:40:20",
      "updatedAt": "2020-08-26 21:58:39"
    }, {
      "firstName": "Latrena",
      "lastName": "Murrie",
      "createdAt": "2021-02-04 14:58:08",
      "updatedAt": "2021-01-19 09:53:25"
    }, {
      "firstName": "Rhys",
      "lastName": "Sandal",
      "createdAt": "2020-11-01 10:35:35",
      "updatedAt": "2020-11-16 04:24:46"
    }, {
      "firstName": "Dierdre",
      "lastName": "Leader",
      "createdAt": "2020-12-19 20:12:58",
      "updatedAt": "2021-03-31 09:18:23"
    }, {
      "firstName": "Electra",
      "lastName": "Rishbrook",
      "createdAt": "2021-01-19 13:20:04",
      "updatedAt": "2021-05-05 09:29:29"
    }, {
      "firstName": "Ema",
      "lastName": "Poolton",
      "createdAt": "2021-03-25 23:56:02",
      "updatedAt": "2020-07-21 00:28:40"
    }, {
      "firstName": "Ruthi",
      "lastName": "Aggs",
      "createdAt": "2020-10-19 14:37:28",
      "updatedAt": "2020-10-05 02:37:03"
    }, {
      "firstName": "Cissy",
      "lastName": "Champion",
      "createdAt": "2020-10-03 22:33:57",
      "updatedAt": "2021-04-14 06:57:16"
    }, {
      "firstName": "Sharon",
      "lastName": "Waterdrinker",
      "createdAt": "2020-11-15 18:45:26",
      "updatedAt": "2021-04-29 09:22:34"
    }, {
      "firstName": "Gannie",
      "lastName": "Lemmers",
      "createdAt": "2020-12-26 19:18:53",
      "updatedAt": "2020-08-11 06:58:03"
    }, {
      "firstName": "Cathlene",
      "lastName": "Helbeck",
      "createdAt": "2020-12-09 01:57:08",
      "updatedAt": "2020-07-20 14:50:53"
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Directors', null, {});
  }
};
