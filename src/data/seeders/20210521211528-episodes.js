'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Episodes', [{
      "number": 8,
      "title": "Inside Llewyn Davis",
      "summary": "Injury of optic tract and pathways, unspecified eye, subsequent encounter",
      "rating": 1,
      "releaseDate": "1963-10-08 03:06:03",
      "seasonId": 266,
      "directorId": 6,
      "createdAt": "2020-12-24 10:36:33",
      "updatedAt": "2020-10-28 16:14:02"
    }, {
      "number": 10,
      "title": "Holy Rollers",
      "summary": "Toxic effect of other halogen derivatives of aromatic hydrocarbons, intentional self-harm",
      "rating": 5,
      "releaseDate": "2005-10-18 07:48:06",
      "seasonId": 292,
      "directorId": 8,
      "createdAt": "2020-09-29 16:44:46",
      "updatedAt": "2020-12-25 08:00:16"
    }, {
      "number": 10,
      "title": "Death of a Nation - The Timor Conspiracy",
      "summary": "Other intraarticular fracture of lower end of right radius, initial encounter for open fracture type I or II",
      "rating": 2,
      "releaseDate": "1973-12-11 23:50:39",
      "seasonId": 159,
      "directorId": 5,
      "createdAt": "2020-09-01 16:19:56",
      "updatedAt": "2020-06-24 13:18:22"
    }, {
      "number": 8,
      "title": "California",
      "summary": "Displaced segmental fracture of shaft of left fibula, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with malunion",
      "rating": 4,
      "releaseDate": "2001-02-07 16:37:35",
      "seasonId": 164,
      "directorId": 17,
      "createdAt": "2020-07-04 03:07:55",
      "updatedAt": "2020-12-08 19:12:12"
    }, {
      "number": 5,
      "title": "Flower of My Secret, The (La flor de mi secreto)",
      "summary": "Nondisplaced oblique fracture of shaft of right radius",
      "rating": 4,
      "releaseDate": "2020-07-25 09:19:10",
      "seasonId": 264,
      "directorId": 12,
      "createdAt": "2020-09-23 21:43:40",
      "updatedAt": "2020-07-30 04:41:36"
    }, {
      "number": 9,
      "title": "Carla's Song",
      "summary": "Exposure of graft of urinary organ, sequela",
      "rating": 2,
      "releaseDate": "1997-06-21 08:34:26",
      "seasonId": 262,
      "directorId": 8,
      "createdAt": "2021-03-06 03:37:01",
      "updatedAt": "2020-08-15 04:34:25"
    }, {
      "number": 8,
      "title": "London Boulevard",
      "summary": "Pauciarticular juvenile rheumatoid arthritis, hip",
      "rating": 4,
      "releaseDate": "1967-12-26 07:22:54",
      "seasonId": 236,
      "directorId": 20,
      "createdAt": "2021-04-24 08:33:05",
      "updatedAt": "2020-11-13 15:00:10"
    }, {
      "number": 7,
      "title": "Sparrow (a.k.a. Cultured Bird) (Man jeuk)",
      "summary": "Other fracture of lower end of unspecified ulna, subsequent encounter for closed fracture with delayed healing",
      "rating": 1,
      "releaseDate": "2019-01-09 12:43:14",
      "seasonId": 28,
      "directorId": 18,
      "createdAt": "2020-09-08 04:18:21",
      "updatedAt": "2021-01-26 03:41:43"
    }, {
      "number": 8,
      "title": "State of Siege (État de siège)",
      "summary": "Displaced oblique fracture of shaft of left radius, initial encounter for closed fracture",
      "rating": 5,
      "releaseDate": "1973-08-27 09:49:26",
      "seasonId": 284,
      "directorId": 20,
      "createdAt": "2020-05-25 13:11:14",
      "updatedAt": "2020-07-18 00:45:08"
    }, {
      "number": 6,
      "title": "Zatoichi at Large (Zatôichi goyô-tabi) (Zatôichi 23)",
      "summary": "Breakdown (mechanical) of internal fixation device of right femur",
      "rating": 3,
      "releaseDate": "2021-04-27 06:19:40",
      "seasonId": 253,
      "directorId": 8,
      "createdAt": "2021-04-22 14:24:00",
      "updatedAt": "2020-05-30 16:16:35"
    }, {
      "number": 6,
      "title": "Van Helsing",
      "summary": "Anaphylactic reaction due to fruits and vegetables",
      "rating": 2,
      "releaseDate": "2010-11-15 15:14:38",
      "seasonId": 78,
      "directorId": 3,
      "createdAt": "2021-01-06 22:12:51",
      "updatedAt": "2020-05-24 15:22:28"
    }, {
      "number": 3,
      "title": "Basket Case 2",
      "summary": "Nondisplaced comminuted fracture of shaft of left tibia, initial encounter for open fracture type IIIA, IIIB, or IIIC",
      "rating": 4,
      "releaseDate": "1973-03-15 20:12:13",
      "seasonId": 114,
      "directorId": 12,
      "createdAt": "2020-05-28 02:36:22",
      "updatedAt": "2021-04-15 11:07:31"
    }, {
      "number": 5,
      "title": "Deep, The",
      "summary": "Occlusion and stenosis of cerebellar arteries",
      "rating": 5,
      "releaseDate": "1960-09-08 12:52:19",
      "seasonId": 222,
      "directorId": 10,
      "createdAt": "2020-07-04 05:20:50",
      "updatedAt": "2021-01-04 21:04:49"
    }, {
      "number": 2,
      "title": "Such Is Life (Así es la vida...)",
      "summary": "Pleural condition, unspecified",
      "rating": 3,
      "releaseDate": "2009-08-18 09:17:24",
      "seasonId": 247,
      "directorId": 19,
      "createdAt": "2021-01-30 17:27:34",
      "updatedAt": "2021-02-20 11:00:28"
    }, {
      "number": 3,
      "title": "Bloody Angels (1732 Høtten: Marerittet har et postnummer)",
      "summary": "Toxic effect of carbon dioxide, accidental (unintentional), sequela",
      "rating": 1,
      "releaseDate": "1953-06-13 10:01:02",
      "seasonId": 83,
      "directorId": 13,
      "createdAt": "2020-11-02 03:11:37",
      "updatedAt": "2020-06-07 14:02:46"
    }, {
      "number": 10,
      "title": "My Mom's New Boyfriend",
      "summary": "Contusion and laceration of cerebrum, unspecified, with loss of consciousness of unspecified duration",
      "rating": 1,
      "releaseDate": "1968-08-05 11:22:20",
      "seasonId": 73,
      "directorId": 17,
      "createdAt": "2021-01-14 03:02:14",
      "updatedAt": "2021-04-30 20:21:19"
    }, {
      "number": 7,
      "title": "Trouble with Harry, The",
      "summary": "Other disorders of bone development and growth, right fibula",
      "rating": 2,
      "releaseDate": "1959-10-27 13:11:43",
      "seasonId": 156,
      "directorId": 4,
      "createdAt": "2020-08-16 23:03:35",
      "updatedAt": "2020-11-17 13:31:07"
    }, {
      "number": 6,
      "title": "White Shadow, The",
      "summary": "Contusion of little finger without damage to nail",
      "rating": 4,
      "releaseDate": "2001-12-22 03:03:13",
      "seasonId": 173,
      "directorId": 7,
      "createdAt": "2021-01-17 09:40:25",
      "updatedAt": "2020-07-01 16:57:20"
    }, {
      "number": 4,
      "title": "Jackass 3D",
      "summary": "Unspecified fracture of upper end of right tibia, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with nonunion",
      "rating": 2,
      "releaseDate": "2009-12-31 00:26:37",
      "seasonId": 228,
      "directorId": 1,
      "createdAt": "2020-12-30 04:46:49",
      "updatedAt": "2021-03-08 17:32:35"
    }, {
      "number": 8,
      "title": "In the Shadow of Doubt (Epäilyksen varjossa)",
      "summary": "Unspecified cord compression",
      "rating": 1,
      "releaseDate": "1981-08-14 06:47:26",
      "seasonId": 12,
      "directorId": 11,
      "createdAt": "2020-06-11 02:22:08",
      "updatedAt": "2020-10-17 19:10:59"
    }, {
      "number": 6,
      "title": "Steamboat Round the Bend",
      "summary": "Frostbite with tissue necrosis of other part of head",
      "rating": 1,
      "releaseDate": "1972-04-21 13:42:48",
      "seasonId": 300,
      "directorId": 12,
      "createdAt": "2020-08-06 06:38:10",
      "updatedAt": "2021-01-15 01:24:54"
    }, {
      "number": 5,
      "title": "Park Is Mine, The",
      "summary": "Non-Hodgkin lymphoma, unspecified, extranodal and solid organ sites",
      "rating": 3,
      "releaseDate": "1987-07-22 08:38:45",
      "seasonId": 252,
      "directorId": 11,
      "createdAt": "2020-09-02 17:37:23",
      "updatedAt": "2021-01-01 19:52:53"
    }, {
      "number": 2,
      "title": "Mortician, The",
      "summary": "Toxic effect of carbon monoxide from unspecified source, intentional self-harm, sequela",
      "rating": 1,
      "releaseDate": "1967-11-17 07:12:37",
      "seasonId": 246,
      "directorId": 10,
      "createdAt": "2020-10-14 13:40:20",
      "updatedAt": "2020-12-25 23:07:27"
    }, {
      "number": 1,
      "title": "Moscow Laughs",
      "summary": "Crohn's disease, unspecified, with intestinal obstruction",
      "rating": 1,
      "releaseDate": "1963-01-04 10:34:05",
      "seasonId": 229,
      "directorId": 20,
      "createdAt": "2020-05-22 04:40:26",
      "updatedAt": "2020-11-24 15:08:50"
    }, {
      "number": 7,
      "title": "Beyond the Time Barrier",
      "summary": "Dislocation of C4/C5 cervical vertebrae",
      "rating": 1,
      "releaseDate": "1956-06-18 15:07:48",
      "seasonId": 226,
      "directorId": 17,
      "createdAt": "2021-02-28 02:38:21",
      "updatedAt": "2020-11-01 08:09:23"
    }, {
      "number": 3,
      "title": "In Secret",
      "summary": "Displaced spiral fracture of shaft of right femur, subsequent encounter for closed fracture with delayed healing",
      "rating": 3,
      "releaseDate": "1988-09-27 13:14:24",
      "seasonId": 24,
      "directorId": 19,
      "createdAt": "2020-10-07 19:44:25",
      "updatedAt": "2020-12-15 09:05:42"
    }, {
      "number": 6,
      "title": "Mermaids",
      "summary": "Gammaherpesviral mononucleosis with polyneuropathy",
      "rating": 3,
      "releaseDate": "2005-01-22 18:51:17",
      "seasonId": 154,
      "directorId": 20,
      "createdAt": "2020-07-24 19:39:38",
      "updatedAt": "2021-04-02 11:27:27"
    }, {
      "number": 6,
      "title": "Rock of Ages",
      "summary": "Nondisplaced fracture of epiphysis (separation) (upper) of left femur",
      "rating": 3,
      "releaseDate": "2014-12-02 19:14:39",
      "seasonId": 169,
      "directorId": 5,
      "createdAt": "2020-08-19 17:24:46",
      "updatedAt": "2020-12-02 11:34:04"
    }, {
      "number": 5,
      "title": "Hands of the Ripper",
      "summary": "Other specified injury of other blood vessels at wrist and hand level of right arm, sequela",
      "rating": 5,
      "releaseDate": "2016-08-26 16:41:22",
      "seasonId": 98,
      "directorId": 1,
      "createdAt": "2021-01-15 04:07:15",
      "updatedAt": "2020-11-29 17:31:52"
    }, {
      "number": 3,
      "title": "The Bloody Olive",
      "summary": "Glaucoma secondary to eye inflammation, left eye, severe stage",
      "rating": 1,
      "releaseDate": "1957-02-08 20:42:57",
      "seasonId": 113,
      "directorId": 11,
      "createdAt": "2020-07-27 23:33:03",
      "updatedAt": "2021-05-06 09:15:53"
    }, {
      "number": 3,
      "title": "Captivity",
      "summary": "Visuospatial deficit",
      "rating": 1,
      "releaseDate": "2015-01-04 18:44:25",
      "seasonId": 145,
      "directorId": 6,
      "createdAt": "2020-11-26 12:09:27",
      "updatedAt": "2021-01-08 15:28:43"
    }, {
      "number": 2,
      "title": "Skin Game, The",
      "summary": "Crushing injury of right thigh, initial encounter",
      "rating": 1,
      "releaseDate": "2014-12-31 05:27:26",
      "seasonId": 235,
      "directorId": 7,
      "createdAt": "2020-11-06 08:54:48",
      "updatedAt": "2021-05-05 17:06:06"
    }, {
      "number": 9,
      "title": "Hatchet III",
      "summary": "Toxic effect of other specified substances",
      "rating": 3,
      "releaseDate": "2021-04-08 02:02:57",
      "seasonId": 5,
      "directorId": 4,
      "createdAt": "2020-07-21 14:42:53",
      "updatedAt": "2020-06-21 17:37:07"
    }, {
      "number": 10,
      "title": "Odd Couple II, The",
      "summary": "Monoplegia of upper limb following cerebral infarction affecting right dominant side",
      "rating": 1,
      "releaseDate": "2001-02-01 18:54:08",
      "seasonId": 92,
      "directorId": 20,
      "createdAt": "2021-01-30 00:22:21",
      "updatedAt": "2020-07-05 16:39:58"
    }, {
      "number": 1,
      "title": "Wrestling for Jesus: The Tale of T-Money",
      "summary": "Assault by other specified means, sequela",
      "rating": 3,
      "releaseDate": "2007-11-15 05:43:44",
      "seasonId": 174,
      "directorId": 9,
      "createdAt": "2021-05-11 02:16:12",
      "updatedAt": "2021-02-18 00:49:43"
    }, {
      "number": 2,
      "title": "César",
      "summary": "Superficial foreign body, left great toe",
      "rating": 1,
      "releaseDate": "1979-04-25 12:53:57",
      "seasonId": 185,
      "directorId": 2,
      "createdAt": "2020-07-20 20:32:44",
      "updatedAt": "2020-06-02 06:56:19"
    }, {
      "number": 6,
      "title": "Cockleshell Heroes, The",
      "summary": "Burn of unspecified degree of forehead and cheek",
      "rating": 5,
      "releaseDate": "1987-04-11 16:58:12",
      "seasonId": 18,
      "directorId": 19,
      "createdAt": "2020-12-21 01:02:28",
      "updatedAt": "2020-06-30 04:12:41"
    }, {
      "number": 1,
      "title": "Buying the Cow",
      "summary": "Displaced comminuted fracture of shaft of left fibula, sequela",
      "rating": 1,
      "releaseDate": "1961-11-21 12:57:31",
      "seasonId": 5,
      "directorId": 13,
      "createdAt": "2021-04-29 12:25:41",
      "updatedAt": "2021-01-11 11:39:14"
    }, {
      "number": 6,
      "title": "Prozac Nation",
      "summary": "Displaced fracture of glenoid cavity of scapula, unspecified shoulder",
      "rating": 2,
      "releaseDate": "2019-08-21 23:07:16",
      "seasonId": 166,
      "directorId": 16,
      "createdAt": "2020-06-27 11:43:24",
      "updatedAt": "2020-12-15 08:24:04"
    }, {
      "number": 2,
      "title": "Tribute",
      "summary": "Corrosion of second degree of left forearm, sequela",
      "rating": 5,
      "releaseDate": "1960-09-13 20:42:33",
      "seasonId": 226,
      "directorId": 2,
      "createdAt": "2021-03-14 06:59:06",
      "updatedAt": "2020-08-18 13:09:32"
    }, {
      "number": 4,
      "title": "Quai des Orfèvres (Jenny Lamour)",
      "summary": "Complete lesion at T2-T6 level of thoracic spinal cord, sequela",
      "rating": 3,
      "releaseDate": "1994-07-17 19:28:32",
      "seasonId": 108,
      "directorId": 10,
      "createdAt": "2020-08-11 08:30:04",
      "updatedAt": "2020-12-14 09:00:37"
    }, {
      "number": 7,
      "title": "Confessor Caressor",
      "summary": "Stress fracture, hand and fingers",
      "rating": 1,
      "releaseDate": "1967-05-23 05:17:41",
      "seasonId": 221,
      "directorId": 8,
      "createdAt": "2021-02-09 02:30:22",
      "updatedAt": "2020-08-30 12:16:56"
    }, {
      "number": 1,
      "title": "Finding Forrester",
      "summary": "Unspecified abnormalities of breathing",
      "rating": 2,
      "releaseDate": "1999-09-25 10:21:18",
      "seasonId": 122,
      "directorId": 13,
      "createdAt": "2020-06-03 05:01:53",
      "updatedAt": "2021-01-06 18:34:10"
    }, {
      "number": 4,
      "title": "Strip-tease",
      "summary": "Traumatic hemorrhage of right cerebrum with loss of consciousness of 6 hours to 24 hours, initial encounter",
      "rating": 3,
      "releaseDate": "1977-05-13 23:05:24",
      "seasonId": 263,
      "directorId": 11,
      "createdAt": "2021-04-17 04:53:33",
      "updatedAt": "2021-03-23 22:33:08"
    }, {
      "number": 2,
      "title": "Regular Lovers (Amants réguliers, Les)",
      "summary": "Displacement of surgically created arteriovenous fistula, initial encounter",
      "rating": 1,
      "releaseDate": "2020-05-22 16:23:13",
      "seasonId": 97,
      "directorId": 10,
      "createdAt": "2021-04-15 11:45:48",
      "updatedAt": "2021-02-15 08:39:51"
    }, {
      "number": 4,
      "title": "2001: A Space Odyssey",
      "summary": "Fracture of unspecified part of scapula, right shoulder, sequela",
      "rating": 5,
      "releaseDate": "1975-08-28 00:30:52",
      "seasonId": 185,
      "directorId": 20,
      "createdAt": "2020-06-11 12:14:29",
      "updatedAt": "2020-10-28 16:45:42"
    }, {
      "number": 3,
      "title": "Pool Without Water, A (Mizu no nai puuru)",
      "summary": "Rheumatoid bursitis, unspecified hand",
      "rating": 2,
      "releaseDate": "1988-04-07 09:08:41",
      "seasonId": 45,
      "directorId": 20,
      "createdAt": "2020-09-17 21:35:07",
      "updatedAt": "2021-03-01 14:59:38"
    }, {
      "number": 2,
      "title": "Chocolate",
      "summary": "Osteonecrosis due to drugs, left hand",
      "rating": 3,
      "releaseDate": "1971-06-04 22:16:43",
      "seasonId": 249,
      "directorId": 15,
      "createdAt": "2020-12-19 07:32:44",
      "updatedAt": "2021-02-13 22:21:52"
    }, {
      "number": 10,
      "title": "Last Taboo, The",
      "summary": "Toxic effect of venom of other snake, assault, subsequent encounter",
      "rating": 1,
      "releaseDate": "2015-09-24 07:13:28",
      "seasonId": 272,
      "directorId": 7,
      "createdAt": "2021-03-01 00:45:17",
      "updatedAt": "2020-08-25 13:29:07"
    }, {
      "number": 4,
      "title": "Camp Hell",
      "summary": "Animal-rider injured in collision with other animal being ridden, subsequent encounter",
      "rating": 2,
      "releaseDate": "2020-01-14 21:05:28",
      "seasonId": 293,
      "directorId": 15,
      "createdAt": "2020-07-15 22:07:12",
      "updatedAt": "2020-11-29 19:58:08"
    }, {
      "number": 5,
      "title": "Get on the Bus",
      "summary": "Other injury of bronchus, unilateral, sequela",
      "rating": 3,
      "releaseDate": "1961-07-23 14:03:38",
      "seasonId": 73,
      "directorId": 10,
      "createdAt": "2021-01-18 16:22:37",
      "updatedAt": "2020-07-09 10:46:59"
    }, {
      "number": 3,
      "title": "Shattered",
      "summary": "Retained (nonmagnetic) (old) foreign body in anterior chamber, bilateral",
      "rating": 4,
      "releaseDate": "1961-12-19 15:41:57",
      "seasonId": 216,
      "directorId": 14,
      "createdAt": "2021-03-06 19:50:51",
      "updatedAt": "2020-08-22 15:06:31"
    }, {
      "number": 5,
      "title": "Jack the Bear",
      "summary": "Contusion of unspecified finger without damage to nail, subsequent encounter",
      "rating": 3,
      "releaseDate": "1962-10-29 08:30:49",
      "seasonId": 91,
      "directorId": 17,
      "createdAt": "2021-03-07 17:21:31",
      "updatedAt": "2020-07-14 02:01:02"
    }, {
      "number": 7,
      "title": "Strayed (égarés, Les)",
      "summary": "Continuing pregnancy after intrauterine death of one fetus or more, second trimester, fetus 2",
      "rating": 2,
      "releaseDate": "2001-04-05 11:59:41",
      "seasonId": 172,
      "directorId": 17,
      "createdAt": "2020-09-09 11:11:44",
      "updatedAt": "2021-05-19 04:38:48"
    }, {
      "number": 10,
      "title": "Bikini Carwash Company, The",
      "summary": "Poisoning by antirheumatics, not elsewhere classified, intentional self-harm, initial encounter",
      "rating": 2,
      "releaseDate": "1964-07-29 11:52:51",
      "seasonId": 159,
      "directorId": 4,
      "createdAt": "2020-06-15 06:58:02",
      "updatedAt": "2020-10-21 16:05:45"
    }, {
      "number": 10,
      "title": "French Twist (Gazon maudit)",
      "summary": "Nondisplaced fracture of anterior wall of right acetabulum, subsequent encounter for fracture with nonunion",
      "rating": 4,
      "releaseDate": "1965-08-20 03:46:04",
      "seasonId": 95,
      "directorId": 17,
      "createdAt": "2020-09-13 01:56:59",
      "updatedAt": "2020-08-10 22:13:53"
    }, {
      "number": 8,
      "title": "Vantage Point",
      "summary": "Displaced other fracture of tuberosity of right calcaneus",
      "rating": 4,
      "releaseDate": "1963-01-26 08:17:57",
      "seasonId": 268,
      "directorId": 17,
      "createdAt": "2020-06-08 22:48:48",
      "updatedAt": "2020-09-02 01:47:35"
    }, {
      "number": 9,
      "title": "Persona non grata",
      "summary": "Arthropathies in other specified diseases classified elsewhere, ankle and foot",
      "rating": 2,
      "releaseDate": "1961-05-14 07:40:18",
      "seasonId": 119,
      "directorId": 10,
      "createdAt": "2020-10-21 02:07:49",
      "updatedAt": "2020-06-28 05:33:37"
    }, {
      "number": 5,
      "title": "Pink Floyd: The Wall",
      "summary": "Poisoning by predominantly alpha-adrenoreceptor agonists, undetermined, initial encounter",
      "rating": 5,
      "releaseDate": "2012-08-10 18:11:51",
      "seasonId": 207,
      "directorId": 7,
      "createdAt": "2021-02-06 21:34:14",
      "updatedAt": "2020-09-18 17:03:51"
    }, {
      "number": 4,
      "title": "Megiddo: The Omega Code 2",
      "summary": "Other acute osteomyelitis, left tibia and fibula",
      "rating": 3,
      "releaseDate": "1986-09-03 05:24:01",
      "seasonId": 22,
      "directorId": 17,
      "createdAt": "2020-10-29 07:35:14",
      "updatedAt": "2020-12-22 14:00:27"
    }, {
      "number": 5,
      "title": "Blackout",
      "summary": "Poisoning by insulin and oral hypoglycemic [antidiabetic] drugs, accidental (unintentional)",
      "rating": 1,
      "releaseDate": "1955-10-13 02:23:15",
      "seasonId": 174,
      "directorId": 14,
      "createdAt": "2021-03-11 11:03:45",
      "updatedAt": "2020-10-04 03:36:17"
    }, {
      "number": 7,
      "title": "Countdown to Zero",
      "summary": "Glasgow coma scale score 3-8",
      "rating": 4,
      "releaseDate": "2005-05-14 23:52:29",
      "seasonId": 115,
      "directorId": 2,
      "createdAt": "2020-12-15 15:51:53",
      "updatedAt": "2021-01-26 08:24:28"
    }, {
      "number": 1,
      "title": "Grandfather, The (Abuelo, El)",
      "summary": "Adverse effect of local anesthetics",
      "rating": 1,
      "releaseDate": "1956-07-14 21:30:29",
      "seasonId": 34,
      "directorId": 6,
      "createdAt": "2020-08-08 12:04:13",
      "updatedAt": "2021-01-10 00:42:29"
    }, {
      "number": 9,
      "title": "Out Cold",
      "summary": "Swimming-pool in single-family (private) house or garden as the place of occurrence of the external cause",
      "rating": 5,
      "releaseDate": "2002-10-18 10:21:36",
      "seasonId": 134,
      "directorId": 19,
      "createdAt": "2020-10-01 19:22:34",
      "updatedAt": "2020-10-31 01:46:52"
    }, {
      "number": 1,
      "title": "Wall Street: Money Never Sleeps",
      "summary": "Other specified injury of peroneal artery",
      "rating": 5,
      "releaseDate": "1992-11-01 05:05:34",
      "seasonId": 39,
      "directorId": 15,
      "createdAt": "2020-07-08 12:29:28",
      "updatedAt": "2020-07-04 20:52:48"
    }, {
      "number": 3,
      "title": "Texas Chainsaw Massacre, The",
      "summary": "Sedative, hypnotic or anxiolytic dependence with sedative, hypnotic or anxiolytic-induced psychotic disorder with delusions",
      "rating": 1,
      "releaseDate": "1980-08-12 15:07:55",
      "seasonId": 107,
      "directorId": 7,
      "createdAt": "2021-05-12 04:03:13",
      "updatedAt": "2021-01-27 06:52:26"
    }, {
      "number": 3,
      "title": "The Mask You Live In",
      "summary": "Laceration with foreign body of unspecified great toe with damage to nail, initial encounter",
      "rating": 4,
      "releaseDate": "1990-06-05 23:39:49",
      "seasonId": 197,
      "directorId": 20,
      "createdAt": "2021-02-28 11:51:51",
      "updatedAt": "2021-03-10 14:37:05"
    }, {
      "number": 4,
      "title": "Invasion of the Body Snatchers",
      "summary": "Superficial foreign body of other part of head, subsequent encounter",
      "rating": 4,
      "releaseDate": "1979-05-24 09:43:40",
      "seasonId": 125,
      "directorId": 20,
      "createdAt": "2020-06-03 08:29:25",
      "updatedAt": "2020-08-06 21:43:39"
    }, {
      "number": 5,
      "title": "History of the World: Part I",
      "summary": "Toxoplasmosis with other organ involvement",
      "rating": 2,
      "releaseDate": "2016-11-23 00:50:13",
      "seasonId": 202,
      "directorId": 10,
      "createdAt": "2020-10-30 19:54:43",
      "updatedAt": "2020-07-21 05:45:52"
    }, {
      "number": 7,
      "title": "Best Exotic Marigold Hotel, The",
      "summary": "Primary angle closure without glaucoma damage",
      "rating": 3,
      "releaseDate": "1971-01-23 14:41:49",
      "seasonId": 184,
      "directorId": 8,
      "createdAt": "2020-06-26 16:00:37",
      "updatedAt": "2020-06-18 09:14:23"
    }, {
      "number": 2,
      "title": "Expendables 2, The",
      "summary": "Passenger on bus injured in collision with fixed or stationary object in traffic accident, sequela",
      "rating": 5,
      "releaseDate": "1999-08-19 10:02:06",
      "seasonId": 42,
      "directorId": 16,
      "createdAt": "2020-11-16 16:55:45",
      "updatedAt": "2020-10-21 11:17:55"
    }, {
      "number": 6,
      "title": "Pilgrimage",
      "summary": "Anterior corneal pigmentations, unspecified eye",
      "rating": 5,
      "releaseDate": "1953-07-22 06:07:37",
      "seasonId": 286,
      "directorId": 18,
      "createdAt": "2020-08-13 15:33:24",
      "updatedAt": "2021-02-11 03:51:13"
    }, {
      "number": 5,
      "title": "Heaven's Prisoners",
      "summary": "Derangement of anterior horn of lateral meniscus due to old tear or injury, left knee",
      "rating": 4,
      "releaseDate": "2006-01-18 19:32:29",
      "seasonId": 1,
      "directorId": 15,
      "createdAt": "2021-04-13 06:20:23",
      "updatedAt": "2020-09-04 11:56:53"
    }, {
      "number": 6,
      "title": "Slipper and the Rose, The",
      "summary": "Other idiopathic scoliosis, cervicothoracic region",
      "rating": 3,
      "releaseDate": "1982-07-16 06:04:19",
      "seasonId": 282,
      "directorId": 5,
      "createdAt": "2020-06-27 13:17:16",
      "updatedAt": "2020-07-04 03:10:26"
    }, {
      "number": 8,
      "title": "Reincarnation of Peter Proud, The",
      "summary": "Burn of first degree of multiple sites of unspecified shoulder and upper limb, except wrist and hand, subsequent encounter",
      "rating": 5,
      "releaseDate": "1994-09-08 23:41:00",
      "seasonId": 236,
      "directorId": 12,
      "createdAt": "2020-08-17 12:26:13",
      "updatedAt": "2021-02-10 02:38:07"
    }, {
      "number": 4,
      "title": "Classe Tous Risques (Big Risk, The)",
      "summary": "Incomplete lesion of sacral spinal cord, subsequent encounter",
      "rating": 4,
      "releaseDate": "2006-09-16 22:50:42",
      "seasonId": 266,
      "directorId": 3,
      "createdAt": "2020-10-03 02:32:17",
      "updatedAt": "2020-07-08 06:36:18"
    }, {
      "number": 2,
      "title": "Classmates",
      "summary": "Phlebitis and thrombophlebitis of unspecified popliteal vein",
      "rating": 4,
      "releaseDate": "1981-09-20 23:19:50",
      "seasonId": 48,
      "directorId": 4,
      "createdAt": "2021-03-17 20:35:06",
      "updatedAt": "2021-03-21 15:11:21"
    }, {
      "number": 7,
      "title": "Ida",
      "summary": "Unspecified injury of muscle, fascia and tendon of the posterior muscle group at thigh level, unspecified thigh, sequela",
      "rating": 1,
      "releaseDate": "2014-11-09 06:11:53",
      "seasonId": 102,
      "directorId": 10,
      "createdAt": "2020-12-21 08:48:32",
      "updatedAt": "2021-01-11 08:10:34"
    }, {
      "number": 9,
      "title": "Get Bruce",
      "summary": "Other specified injury of intercostal blood vessels, left side, initial encounter",
      "rating": 1,
      "releaseDate": "2021-03-13 22:53:08",
      "seasonId": 41,
      "directorId": 13,
      "createdAt": "2020-10-19 18:00:15",
      "updatedAt": "2020-08-18 04:59:18"
    }, {
      "number": 4,
      "title": "Mummy Returns, The",
      "summary": "Frostbite with tissue necrosis of thorax",
      "rating": 1,
      "releaseDate": "2001-10-25 08:03:09",
      "seasonId": 221,
      "directorId": 18,
      "createdAt": "2021-05-19 17:18:48",
      "updatedAt": "2020-11-27 05:50:45"
    }, {
      "number": 5,
      "title": "Extra Man, The",
      "summary": "Other specified injury of unspecified blood vessel at shoulder and upper arm level, left arm, initial encounter",
      "rating": 5,
      "releaseDate": "1985-04-12 14:53:39",
      "seasonId": 192,
      "directorId": 15,
      "createdAt": "2020-09-25 07:57:34",
      "updatedAt": "2020-08-02 03:58:12"
    }, {
      "number": 5,
      "title": "Tycoon (Oligarkh)",
      "summary": "Other specified disorders of bone",
      "rating": 3,
      "releaseDate": "1981-11-21 07:57:31",
      "seasonId": 107,
      "directorId": 18,
      "createdAt": "2020-08-25 22:52:10",
      "updatedAt": "2020-12-24 20:43:33"
    }, {
      "number": 8,
      "title": "Bachelor, The",
      "summary": "Other mechanical complication of internal fixation device of other bones",
      "rating": 4,
      "releaseDate": "1966-02-23 09:11:47",
      "seasonId": 247,
      "directorId": 16,
      "createdAt": "2020-09-20 12:49:11",
      "updatedAt": "2020-12-21 15:44:34"
    }, {
      "number": 8,
      "title": "Panic",
      "summary": "Benign neoplasm of mesothelial tissue of other sites",
      "rating": 3,
      "releaseDate": "1994-06-10 02:11:38",
      "seasonId": 80,
      "directorId": 1,
      "createdAt": "2021-03-20 03:17:11",
      "updatedAt": "2020-05-29 09:04:45"
    }, {
      "number": 5,
      "title": "Twilight's Last Gleaming",
      "summary": "Corrosion with resulting rupture and destruction of right eyeball, sequela",
      "rating": 2,
      "releaseDate": "1955-05-29 01:16:41",
      "seasonId": 96,
      "directorId": 8,
      "createdAt": "2020-10-04 10:47:50",
      "updatedAt": "2020-06-03 08:37:02"
    }, {
      "number": 5,
      "title": "Oh Boy (A Coffee in Berlin)",
      "summary": "Unspecified injury of other specified blood vessels at shoulder and upper arm level, left arm, subsequent encounter",
      "rating": 2,
      "releaseDate": "2015-03-05 23:46:50",
      "seasonId": 114,
      "directorId": 20,
      "createdAt": "2020-11-12 17:59:18",
      "updatedAt": "2020-06-11 09:50:43"
    }, {
      "number": 2,
      "title": "Maskerade",
      "summary": "Type 2 diabetes mellitus with other specified complications",
      "rating": 4,
      "releaseDate": "1969-01-12 13:20:30",
      "seasonId": 196,
      "directorId": 1,
      "createdAt": "2020-07-21 07:04:29",
      "updatedAt": "2020-09-02 00:29:52"
    }, {
      "number": 2,
      "title": "Robinson in Space",
      "summary": "Striking against wall of swimming pool causing drowning and submersion, sequela",
      "rating": 3,
      "releaseDate": "1971-07-26 00:30:04",
      "seasonId": 125,
      "directorId": 13,
      "createdAt": "2020-06-10 17:01:39",
      "updatedAt": "2020-07-11 15:40:06"
    }, {
      "number": 9,
      "title": "Mama",
      "summary": "Stable burst fracture of T9-T10 vertebra, subsequent encounter for fracture with routine healing",
      "rating": 5,
      "releaseDate": "2002-03-23 02:05:35",
      "seasonId": 255,
      "directorId": 14,
      "createdAt": "2020-09-19 11:46:53",
      "updatedAt": "2020-11-03 10:35:25"
    }, {
      "number": 10,
      "title": "Getting Even with Dad",
      "summary": "Excessive, frequent and irregular menstruation",
      "rating": 5,
      "releaseDate": "1993-07-07 15:50:12",
      "seasonId": 2,
      "directorId": 13,
      "createdAt": "2020-06-15 17:52:46",
      "updatedAt": "2020-07-24 18:19:30"
    }, {
      "number": 10,
      "title": "Best Friends",
      "summary": "Encounter for fitting and adjustment of external prosthetic device",
      "rating": 5,
      "releaseDate": "2011-11-28 11:06:25",
      "seasonId": 37,
      "directorId": 10,
      "createdAt": "2020-12-05 11:14:37",
      "updatedAt": "2020-10-24 16:38:25"
    }, {
      "number": 1,
      "title": "Secret Admirer",
      "summary": "Major osseous defect, left ankle and foot",
      "rating": 5,
      "releaseDate": "1967-05-05 15:53:09",
      "seasonId": 130,
      "directorId": 6,
      "createdAt": "2020-10-22 22:29:06",
      "updatedAt": "2020-12-01 14:45:26"
    }, {
      "number": 5,
      "title": "Harry Potter and the Deathly Hallows: Part 2",
      "summary": "Nondisplaced subtrochanteric fracture of left femur, subsequent encounter for closed fracture with nonunion",
      "rating": 4,
      "releaseDate": "1954-10-31 17:57:05",
      "seasonId": 252,
      "directorId": 14,
      "createdAt": "2021-03-19 03:45:17",
      "updatedAt": "2020-05-30 23:46:00"
    }, {
      "number": 1,
      "title": "Slacker",
      "summary": "Unspecified fracture of sternum, sequela",
      "rating": 1,
      "releaseDate": "1998-10-03 02:52:23",
      "seasonId": 100,
      "directorId": 3,
      "createdAt": "2021-03-31 08:19:53",
      "updatedAt": "2021-03-10 03:44:22"
    }, {
      "number": 3,
      "title": "Gods and Generals",
      "summary": "Unspecified car occupant injured in collision with sport utility vehicle in traffic accident, sequela",
      "rating": 3,
      "releaseDate": "1978-05-16 17:00:49",
      "seasonId": 50,
      "directorId": 3,
      "createdAt": "2021-02-05 15:11:36",
      "updatedAt": "2020-07-13 12:14:27"
    }, {
      "number": 7,
      "title": "Southland Tales",
      "summary": "Other sprain of left elbow, sequela",
      "rating": 1,
      "releaseDate": "1951-07-08 11:44:02",
      "seasonId": 164,
      "directorId": 14,
      "createdAt": "2021-02-05 05:45:05",
      "updatedAt": "2021-05-19 23:11:18"
    }, {
      "number": 6,
      "title": "Centurion",
      "summary": "Displaced fracture of lateral malleolus of left fibula",
      "rating": 2,
      "releaseDate": "1995-07-21 16:51:04",
      "seasonId": 86,
      "directorId": 14,
      "createdAt": "2020-09-02 12:23:15",
      "updatedAt": "2020-05-30 05:22:48"
    }, {
      "number": 9,
      "title": "Neptune's Daughter",
      "summary": "Other injury of ascending [right] colon, initial encounter",
      "rating": 1,
      "releaseDate": "2020-08-10 00:39:30",
      "seasonId": 270,
      "directorId": 9,
      "createdAt": "2020-08-14 22:02:23",
      "updatedAt": "2021-05-16 07:00:12"
    }, {
      "number": 6,
      "title": "David Cross: Let America Laugh",
      "summary": "Postprocedural seroma of a nervous system organ or structure following a nervous system procedure",
      "rating": 3,
      "releaseDate": "1996-01-16 11:12:06",
      "seasonId": 198,
      "directorId": 20,
      "createdAt": "2020-09-27 01:12:17",
      "updatedAt": "2020-05-28 22:02:20"
    }, {
      "number": 5,
      "title": "Barney's Great Adventure",
      "summary": "Acute eczematoid otitis externa, unspecified ear",
      "rating": 2,
      "releaseDate": "1963-12-16 17:37:28",
      "seasonId": 123,
      "directorId": 14,
      "createdAt": "2020-10-14 21:25:48",
      "updatedAt": "2021-05-20 12:43:57"
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Episodes', null, {});
  }
};