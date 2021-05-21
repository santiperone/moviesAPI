'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      "username": "fcrutcher0",
      "email": "dnutley0@nydailynews.com",
      "password": "5urb603",
      "createdAt": "2021-03-27 18:05:10",
      "updatedAt": "2020-10-16 03:51:39"
    }, {
      "username": "scadwallader1",
      "email": "byoxen1@about.me",
      "password": "o3zKj66",
      "createdAt": "2021-03-04 15:16:25",
      "updatedAt": "2020-12-13 09:48:38"
    }, {
      "username": "erusse2",
      "email": "elidington2@wikispaces.com",
      "password": "KHwbuIUK0J",
      "createdAt": "2021-05-12 01:55:32",
      "updatedAt": "2021-01-30 08:15:51"
    }, {
      "username": "sstegell3",
      "email": "fottee3@senate.gov",
      "password": "CTx6ogV",
      "createdAt": "2020-07-06 10:24:22",
      "updatedAt": "2020-06-12 09:45:34"
    }, {
      "username": "mallaker4",
      "email": "iwenderoth4@hp.com",
      "password": "6jTb90",
      "createdAt": "2021-03-05 05:14:59",
      "updatedAt": "2020-07-07 09:48:01"
    }, {
      "username": "vrodolico5",
      "email": "sthorndycraft5@51.la",
      "password": "JnlcZte9y",
      "createdAt": "2020-10-18 17:17:20",
      "updatedAt": "2021-04-02 16:21:05"
    }, {
      "username": "scoudray6",
      "email": "mburtonshaw6@hugedomains.com",
      "password": "zx2nkVgKvZ55",
      "createdAt": "2021-05-10 22:47:01",
      "updatedAt": "2020-11-29 21:02:27"
    }, {
      "username": "cburghall7",
      "email": "aogden7@feedburner.com",
      "password": "d4o9LNbRW",
      "createdAt": "2020-07-29 20:01:22",
      "updatedAt": "2020-07-12 01:07:12"
    }, {
      "username": "gpaulig8",
      "email": "mwroughton8@apache.org",
      "password": "ZyjWxD3",
      "createdAt": "2020-10-04 19:50:07",
      "updatedAt": "2020-10-11 12:07:11"
    }, {
      "username": "bcordero9",
      "email": "gbridgeman9@is.gd",
      "password": "BsSgZxfm",
      "createdAt": "2021-03-30 09:39:26",
      "updatedAt": "2020-10-13 15:49:13"
    }, {
      "username": "ljenka",
      "email": "gmanharea@hp.com",
      "password": "9mThO73N92P",
      "createdAt": "2021-03-29 16:35:25",
      "updatedAt": "2020-06-14 21:19:40"
    }, {
      "username": "cthatcherb",
      "email": "alawryb@aboutads.info",
      "password": "BhKOu8B8F",
      "createdAt": "2021-04-20 13:56:53",
      "updatedAt": "2020-12-02 12:18:20"
    }, {
      "username": "bparmbyc",
      "email": "gcottellc@apache.org",
      "password": "9wvdE7mM",
      "createdAt": "2020-10-03 09:04:51",
      "updatedAt": "2021-02-10 04:54:43"
    }, {
      "username": "ttonepohld",
      "email": "sdionsettod@eventbrite.com",
      "password": "6LLl0bz",
      "createdAt": "2021-03-16 23:37:32",
      "updatedAt": "2020-10-26 19:39:03"
    }, {
      "username": "rrawstorne",
      "email": "bmacdavitte@stanford.edu",
      "password": "cJ4512Yr",
      "createdAt": "2020-10-26 22:10:09",
      "updatedAt": "2020-12-31 11:40:23"
    }, {
      "username": "kpayleyf",
      "email": "atrammelf@squarespace.com",
      "password": "rEWr7Ywh",
      "createdAt": "2020-12-22 03:47:42",
      "updatedAt": "2020-08-28 01:11:47"
    }, {
      "username": "owalklettg",
      "email": "hliebmanng@com.com",
      "password": "H1yKCUKR",
      "createdAt": "2021-05-07 14:53:52",
      "updatedAt": "2020-09-08 20:10:26"
    }, {
      "username": "cschadeh",
      "email": "cendriccih@taobao.com",
      "password": "TNsaq6DQxXJ",
      "createdAt": "2021-04-29 06:16:05",
      "updatedAt": "2021-04-28 00:10:31"
    }, {
      "username": "aluckhami",
      "email": "tnoyesi@flickr.com",
      "password": "5UG5ZpXuwPd",
      "createdAt": "2020-05-25 01:08:34",
      "updatedAt": "2020-09-09 06:25:36"
    }, {
      "username": "lgantleyj",
      "email": "atofflerj@yahoo.com",
      "password": "z3dTokoWwX",
      "createdAt": "2020-12-21 02:08:43",
      "updatedAt": "2020-12-12 02:09:38"
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};