'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Actors', [{
      "firstName": "Shawna",
      "lastName": "Mixworthy",
      "age": 59,
      "createdAt": "2020-07-01 03:15:11",
      "updatedAt": "2021-01-13 14:00:31"
    }, {
      "firstName": "Lennard",
      "lastName": "Leeming",
      "age": 47,
      "createdAt": "2021-03-17 08:13:25",
      "updatedAt": "2021-03-08 22:38:12"
    }, {
      "firstName": "Brien",
      "lastName": "Barwack",
      "age": 39,
      "createdAt": "2020-11-28 07:04:52",
      "updatedAt": "2020-07-13 16:09:00"
    }, {
      "firstName": "Ky",
      "lastName": "Cockill",
      "age": 54,
      "createdAt": "2021-03-30 00:31:27",
      "updatedAt": "2020-12-12 12:32:47"
    }, {
      "firstName": "Alisun",
      "lastName": "Carman",
      "age": 54,
      "createdAt": "2020-12-29 21:53:57",
      "updatedAt": "2020-07-05 02:29:50"
    }, {
      "firstName": "Cacilie",
      "lastName": "Seifenmacher",
      "age": 30,
      "createdAt": "2021-02-08 08:09:50",
      "updatedAt": "2021-05-04 18:01:13"
    }, {
      "firstName": "Any",
      "lastName": "Pettiward",
      "age": 21,
      "createdAt": "2021-04-25 10:36:30",
      "updatedAt": "2021-04-18 13:20:47"
    }, {
      "firstName": "Sven",
      "lastName": "Weins",
      "age": 16,
      "createdAt": "2021-01-18 16:33:27",
      "updatedAt": "2021-03-25 09:05:44"
    }, {
      "firstName": "Hanan",
      "lastName": "Tabourin",
      "age": 30,
      "createdAt": "2020-10-06 12:22:00",
      "updatedAt": "2020-07-10 19:02:59"
    }, {
      "firstName": "Minne",
      "lastName": "Tupper",
      "age": 67,
      "createdAt": "2021-04-15 23:37:47",
      "updatedAt": "2020-10-11 23:38:45"
    }, {
      "firstName": "Shana",
      "lastName": "Glaves",
      "age": 23,
      "createdAt": "2020-05-27 17:36:25",
      "updatedAt": "2020-08-04 05:31:24"
    }, {
      "firstName": "Renata",
      "lastName": "Duiguid",
      "age": 70,
      "createdAt": "2021-03-04 13:22:30",
      "updatedAt": "2021-02-25 08:24:25"
    }, {
      "firstName": "Cobb",
      "lastName": "Barlee",
      "age": 69,
      "createdAt": "2020-09-18 03:58:15",
      "updatedAt": "2021-03-12 18:38:58"
    }, {
      "firstName": "Prudence",
      "lastName": "Peto",
      "age": 51,
      "createdAt": "2020-10-20 02:17:04",
      "updatedAt": "2021-01-03 00:46:27"
    }, {
      "firstName": "Harv",
      "lastName": "Perkinson",
      "age": 29,
      "createdAt": "2021-05-14 01:16:18",
      "updatedAt": "2020-12-09 07:42:19"
    }, {
      "firstName": "Rebe",
      "lastName": "Mayhead",
      "age": 64,
      "createdAt": "2021-04-07 05:47:40",
      "updatedAt": "2020-12-07 01:53:02"
    }, {
      "firstName": "Lucinda",
      "lastName": "Mix",
      "age": 33,
      "createdAt": "2020-09-30 07:39:15",
      "updatedAt": "2020-10-06 02:04:40"
    }, {
      "firstName": "Lidia",
      "lastName": "Raden",
      "age": 43,
      "createdAt": "2021-04-22 23:43:30",
      "updatedAt": "2020-10-13 09:53:26"
    }, {
      "firstName": "Bria",
      "lastName": "Harling",
      "age": 26,
      "createdAt": "2021-01-26 12:40:14",
      "updatedAt": "2021-05-10 11:57:59"
    }, {
      "firstName": "Corbett",
      "lastName": "Corker",
      "age": 22,
      "createdAt": "2020-06-03 01:06:48",
      "updatedAt": "2021-01-13 21:06:39"
    }, {
      "firstName": "Mathias",
      "lastName": "Harvie",
      "age": 62,
      "createdAt": "2020-09-08 23:29:36",
      "updatedAt": "2020-09-07 00:24:47"
    }, {
      "firstName": "Meir",
      "lastName": "Standall",
      "age": 49,
      "createdAt": "2020-12-19 14:01:10",
      "updatedAt": "2020-05-28 10:32:08"
    }, {
      "firstName": "Miran",
      "lastName": "McVanamy",
      "age": 15,
      "createdAt": "2021-01-12 15:04:12",
      "updatedAt": "2020-12-17 18:33:50"
    }, {
      "firstName": "Farrell",
      "lastName": "Moyler",
      "age": 21,
      "createdAt": "2021-04-18 17:26:30",
      "updatedAt": "2020-08-05 05:57:47"
    }, {
      "firstName": "Guillermo",
      "lastName": "Finnie",
      "age": 35,
      "createdAt": "2021-01-19 17:50:06",
      "updatedAt": "2021-03-23 07:33:49"
    }, {
      "firstName": "Pieter",
      "lastName": "Eschalotte",
      "age": 69,
      "createdAt": "2020-10-24 00:03:54",
      "updatedAt": "2021-02-17 12:58:21"
    }, {
      "firstName": "Ange",
      "lastName": "Navarijo",
      "age": 36,
      "createdAt": "2021-02-20 02:07:40",
      "updatedAt": "2021-04-14 14:36:50"
    }, {
      "firstName": "Sheri",
      "lastName": "Rama",
      "age": 28,
      "createdAt": "2020-07-23 06:22:50",
      "updatedAt": "2020-12-09 07:41:00"
    }, {
      "firstName": "Hurleigh",
      "lastName": "Haxby",
      "age": 51,
      "createdAt": "2020-06-11 05:18:22",
      "updatedAt": "2021-02-12 16:30:00"
    }, {
      "firstName": "Mitchel",
      "lastName": "Bucktharp",
      "age": 29,
      "createdAt": "2020-11-15 23:54:58",
      "updatedAt": "2020-07-10 06:24:28"
    }, {
      "firstName": "Alicea",
      "lastName": "Roy",
      "age": 18,
      "createdAt": "2020-10-31 17:38:21",
      "updatedAt": "2020-08-11 22:01:11"
    }, {
      "firstName": "Wilfred",
      "lastName": "Quarrington",
      "age": 27,
      "createdAt": "2020-09-18 05:02:07",
      "updatedAt": "2020-05-28 20:08:18"
    }, {
      "firstName": "Elton",
      "lastName": "Lubomirski",
      "age": 56,
      "createdAt": "2020-11-09 19:00:16",
      "updatedAt": "2021-01-02 22:31:54"
    }, {
      "firstName": "Kora",
      "lastName": "Patrick",
      "age": 55,
      "createdAt": "2020-10-27 20:20:53",
      "updatedAt": "2020-09-19 19:56:25"
    }, {
      "firstName": "Phelia",
      "lastName": "Soldner",
      "age": 50,
      "createdAt": "2021-04-25 10:36:52",
      "updatedAt": "2020-11-10 15:58:11"
    }, {
      "firstName": "Patrizio",
      "lastName": "Deason",
      "age": 22,
      "createdAt": "2020-12-17 01:14:24",
      "updatedAt": "2020-11-20 19:27:59"
    }, {
      "firstName": "Harland",
      "lastName": "Kroch",
      "age": 36,
      "createdAt": "2020-06-25 21:33:00",
      "updatedAt": "2020-06-25 13:58:16"
    }, {
      "firstName": "Romona",
      "lastName": "Dragon",
      "age": 31,
      "createdAt": "2021-04-15 22:20:07",
      "updatedAt": "2021-02-19 13:09:13"
    }, {
      "firstName": "Dominik",
      "lastName": "MacVagh",
      "age": 65,
      "createdAt": "2020-11-19 23:50:38",
      "updatedAt": "2020-06-08 17:29:42"
    }, {
      "firstName": "Tim",
      "lastName": "Elgie",
      "age": 52,
      "createdAt": "2020-08-23 03:00:24",
      "updatedAt": "2021-01-28 16:51:28"
    }, {
      "firstName": "Dasi",
      "lastName": "Ridding",
      "age": 40,
      "createdAt": "2020-11-15 14:11:24",
      "updatedAt": "2020-09-16 21:14:24"
    }, {
      "firstName": "Catlee",
      "lastName": "Wooton",
      "age": 42,
      "createdAt": "2020-10-19 09:36:29",
      "updatedAt": "2020-11-05 22:14:34"
    }, {
      "firstName": "Keary",
      "lastName": "Brickner",
      "age": 59,
      "createdAt": "2020-08-13 23:19:32",
      "updatedAt": "2021-03-14 12:47:35"
    }, {
      "firstName": "Andre",
      "lastName": "Tregien",
      "age": 63,
      "createdAt": "2020-05-21 08:23:15",
      "updatedAt": "2021-04-11 09:31:27"
    }, {
      "firstName": "Malena",
      "lastName": "Vitall",
      "age": 18,
      "createdAt": "2021-04-05 04:54:55",
      "updatedAt": "2021-01-11 11:02:34"
    }, {
      "firstName": "Thomasine",
      "lastName": "Stuchbery",
      "age": 32,
      "createdAt": "2020-12-22 18:41:04",
      "updatedAt": "2020-08-08 03:58:04"
    }, {
      "firstName": "Conni",
      "lastName": "Billson",
      "age": 42,
      "createdAt": "2020-12-07 00:19:38",
      "updatedAt": "2020-10-06 21:02:02"
    }, {
      "firstName": "Charmaine",
      "lastName": "McMillan",
      "age": 70,
      "createdAt": "2020-10-03 08:36:34",
      "updatedAt": "2020-11-03 16:59:29"
    }, {
      "firstName": "Emma",
      "lastName": "Perkinson",
      "age": 45,
      "createdAt": "2020-07-28 14:08:01",
      "updatedAt": "2021-03-28 06:41:49"
    }, {
      "firstName": "Dulce",
      "lastName": "Pridham",
      "age": 42,
      "createdAt": "2020-07-04 15:03:40",
      "updatedAt": "2021-02-13 14:20:15"
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Actors', null, {});
  }
};