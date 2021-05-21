'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Movies', [{
      "title": "Goodbye Again",
      "summary": "Poisoning by monoamine-oxidase-inhibitor antidepressants, accidental (unintentional), sequela",
      "rating": 4,
      "releaseDate": "1989-04-14 11:43:56",
      "directorId": 19,
      "createdAt": "2021-02-21 04:31:30",
      "updatedAt": "2020-12-06 00:13:31"
    }, {
      "title": "Madam Satan",
      "summary": "Corrosion of other parts of alimentary tract, subsequent encounter",
      "rating": 4,
      "releaseDate": "1965-06-09 20:15:32",
      "directorId": 16,
      "createdAt": "2020-11-28 23:39:58",
      "updatedAt": "2020-08-09 18:55:22"
    }, {
      "title": "Chan Is Missing",
      "summary": "Exposure to industrial wiring, appliances and electrical machinery, sequela",
      "rating": 2,
      "releaseDate": "1960-08-17 16:50:08",
      "directorId": 14,
      "createdAt": "2020-08-17 15:31:16",
      "updatedAt": "2020-05-29 17:55:10"
    }, {
      "title": "Bye Bye Brazil (Bye Bye Brasil)",
      "summary": "Other specified spondylopathies, cervical region",
      "rating": 4,
      "releaseDate": "1989-11-07 19:48:34",
      "directorId": 20,
      "createdAt": "2020-12-31 07:20:53",
      "updatedAt": "2020-05-30 20:04:57"
    }, {
      "title": "Our Little Girl",
      "summary": "Other specified deforming dorsopathies, lumbosacral region",
      "rating": 1,
      "releaseDate": "1985-11-23 11:37:12",
      "directorId": 4,
      "createdAt": "2020-12-21 11:50:46",
      "updatedAt": "2020-09-15 12:15:03"
    }, {
      "title": "Jawbreaker",
      "summary": "External constriction of unspecified back wall of thorax, initial encounter",
      "rating": 4,
      "releaseDate": "2021-05-06 20:53:14",
      "directorId": 16,
      "createdAt": "2020-10-30 01:25:47",
      "updatedAt": "2020-09-09 11:02:17"
    }, {
      "title": "Corvette Summer",
      "summary": "Nondisplaced oblique fracture of shaft of unspecified ulna, subsequent encounter for closed fracture with delayed healing",
      "rating": 4,
      "releaseDate": "1998-07-17 22:15:16",
      "directorId": 6,
      "createdAt": "2020-05-24 20:14:48",
      "updatedAt": "2021-02-08 22:35:49"
    }, {
      "title": "Garage, The",
      "summary": "Other and unspecified injury of lumbar and sacral spinal cord",
      "rating": 2,
      "releaseDate": "1992-10-19 07:07:02",
      "directorId": 16,
      "createdAt": "2020-11-19 20:57:36",
      "updatedAt": "2020-11-04 06:45:53"
    }, {
      "title": "Halloween 4: The Return of Michael Myers",
      "summary": "Gallstone ileus",
      "rating": 1,
      "releaseDate": "1991-12-24 06:10:24",
      "directorId": 1,
      "createdAt": "2020-07-26 12:59:21",
      "updatedAt": "2020-08-30 07:02:02"
    }, {
      "title": "Crimson Rivers 2: Angels of the Apocalypse (Rivières pourpres II - Les anges de l'apocalypse, Les)",
      "summary": "Pathological fracture in other disease, unspecified femur, sequela",
      "rating": 1,
      "releaseDate": "1990-04-13 12:12:40",
      "directorId": 13,
      "createdAt": "2020-07-18 11:31:49",
      "updatedAt": "2020-11-01 11:35:14"
    }, {
      "title": "Storage 24",
      "summary": "Displaced spiral fracture of shaft of right femur, subsequent encounter for open fracture type I or II with routine healing",
      "rating": 1,
      "releaseDate": "1953-04-04 18:19:15",
      "directorId": 10,
      "createdAt": "2020-11-19 22:42:52",
      "updatedAt": "2020-07-21 05:21:35"
    }, {
      "title": "Chastity Bites",
      "summary": "Puncture wound without foreign body of left back wall of thorax without penetration into thoracic cavity, sequela",
      "rating": 5,
      "releaseDate": "1981-06-27 21:09:57",
      "directorId": 5,
      "createdAt": "2020-09-13 12:28:43",
      "updatedAt": "2021-02-11 18:31:17"
    }, {
      "title": "Le ultime ore di una vergine",
      "summary": "War operations involving gasoline bomb, military personnel",
      "rating": 2,
      "releaseDate": "1964-12-11 18:08:28",
      "directorId": 17,
      "createdAt": "2020-08-23 22:22:58",
      "updatedAt": "2020-08-08 18:41:07"
    }, {
      "title": "Muck",
      "summary": "Esophagitis",
      "rating": 4,
      "releaseDate": "1975-11-08 03:36:05",
      "directorId": 1,
      "createdAt": "2021-05-03 03:08:36",
      "updatedAt": "2020-06-22 18:00:51"
    }, {
      "title": "Absence of Malice",
      "summary": "Carcinoma in situ of skin of unspecified lower limb, including hip",
      "rating": 3,
      "releaseDate": "1965-11-26 10:49:43",
      "directorId": 17,
      "createdAt": "2021-01-25 00:24:51",
      "updatedAt": "2020-08-13 11:08:51"
    }, {
      "title": "Kingsman: The Secret Service",
      "summary": "Disorders of tryptophan metabolism",
      "rating": 2,
      "releaseDate": "2003-05-07 03:21:22",
      "directorId": 16,
      "createdAt": "2020-07-27 20:11:10",
      "updatedAt": "2020-11-07 17:09:03"
    }, {
      "title": "Black Eagle",
      "summary": "Burn of first degree of left elbow, initial encounter",
      "rating": 5,
      "releaseDate": "1964-02-24 13:21:22",
      "directorId": 14,
      "createdAt": "2020-12-02 05:35:01",
      "updatedAt": "2020-06-28 01:45:22"
    }, {
      "title": "King of the Zombies",
      "summary": "Unspecified foreign body in other parts of respiratory tract",
      "rating": 1,
      "releaseDate": "1999-04-04 15:03:04",
      "directorId": 20,
      "createdAt": "2021-04-20 07:03:27",
      "updatedAt": "2020-09-11 20:03:21"
    }, {
      "title": "My Sassy Girl (Yeopgijeogin geunyeo)",
      "summary": "Displaced segmental fracture of shaft of right femur, subsequent encounter for closed fracture with nonunion",
      "rating": 5,
      "releaseDate": "1951-03-24 16:44:39",
      "directorId": 1,
      "createdAt": "2020-10-15 10:27:23",
      "updatedAt": "2021-01-17 14:00:06"
    }, {
      "title": "Mad Detective (Sun taam)",
      "summary": "Premature rupture of membranes, onset of labor more than 24 hours following rupture, unspecified weeks of gestation",
      "rating": 1,
      "releaseDate": "1983-07-21 13:44:49",
      "directorId": 2,
      "createdAt": "2020-08-04 16:13:10",
      "updatedAt": "2020-06-09 08:17:18"
    }, {
      "title": "Slacker 2011",
      "summary": "Unspecified injury of thoracic aorta, subsequent encounter",
      "rating": 3,
      "releaseDate": "1968-02-12 09:55:24",
      "directorId": 8,
      "createdAt": "2021-01-28 05:44:34",
      "updatedAt": "2021-04-11 16:49:18"
    }, {
      "title": "Fever Pitch",
      "summary": "Displaced midcervical fracture of unspecified femur, subsequent encounter for open fracture type I or II with routine healing",
      "rating": 3,
      "releaseDate": "1984-01-10 09:57:47",
      "directorId": 15,
      "createdAt": "2020-08-28 21:35:29",
      "updatedAt": "2021-02-16 08:59:18"
    }, {
      "title": "Sexmission (Seksmisja)",
      "summary": "Primary open-angle glaucoma, unspecified eye, indeterminate stage",
      "rating": 5,
      "releaseDate": "1988-11-05 17:02:39",
      "directorId": 10,
      "createdAt": "2020-06-19 21:22:26",
      "updatedAt": "2020-11-06 16:06:41"
    }, {
      "title": "Brazil: In the Shadow of the Stadiums",
      "summary": "Subluxation of distal radioulnar joint of left wrist",
      "rating": 1,
      "releaseDate": "2020-09-29 10:31:55",
      "directorId": 20,
      "createdAt": "2021-03-13 20:22:21",
      "updatedAt": "2021-03-11 16:16:42"
    }, {
      "title": "Extraterrestrial",
      "summary": "Insect bite (nonvenomous), right knee, initial encounter",
      "rating": 1,
      "releaseDate": "1951-10-22 15:15:57",
      "directorId": 2,
      "createdAt": "2021-04-20 06:20:46",
      "updatedAt": "2020-11-05 19:54:46"
    }, {
      "title": "Architecture of Doom, The (Undergångens arkitektur)",
      "summary": "Displaced unspecified fracture of right great toe, subsequent encounter for fracture with delayed healing",
      "rating": 3,
      "releaseDate": "1981-11-14 13:30:38",
      "directorId": 13,
      "createdAt": "2020-11-02 12:45:05",
      "updatedAt": "2021-03-02 09:03:29"
    }, {
      "title": "Doulos, Le",
      "summary": "Displacement of muscle and tendon graft, initial encounter",
      "rating": 1,
      "releaseDate": "2009-11-18 10:22:12",
      "directorId": 14,
      "createdAt": "2020-05-28 23:28:03",
      "updatedAt": "2020-11-21 01:58:19"
    }, {
      "title": "I Bury the Living",
      "summary": "Unspecified physeal fracture of lower end of humerus, left arm, subsequent encounter for fracture with delayed healing",
      "rating": 3,
      "releaseDate": "1957-08-01 01:57:47",
      "directorId": 8,
      "createdAt": "2021-02-17 09:33:03",
      "updatedAt": "2020-12-18 02:14:57"
    }, {
      "title": "Let's Get Harry",
      "summary": "Salter-Harris Type III physeal fracture of phalanx of unspecified toe, subsequent encounter for fracture with routine healing",
      "rating": 4,
      "releaseDate": "1989-03-16 12:52:50",
      "directorId": 16,
      "createdAt": "2020-09-15 04:09:59",
      "updatedAt": "2021-04-10 23:52:28"
    }, {
      "title": "The Hunger Games: Mockingjay - Part 1",
      "summary": "Unspecified superficial injury of right wrist",
      "rating": 1,
      "releaseDate": "2011-12-01 02:43:19",
      "directorId": 11,
      "createdAt": "2021-03-22 01:13:30",
      "updatedAt": "2020-12-24 08:48:04"
    }, {
      "title": "Shaggy Dog, The",
      "summary": "Corrosion of second degree of unspecified foot",
      "rating": 4,
      "releaseDate": "1959-12-29 23:24:07",
      "directorId": 11,
      "createdAt": "2020-07-19 09:35:20",
      "updatedAt": "2020-07-12 06:48:16"
    }, {
      "title": "Taking Care of Business",
      "summary": "Other specified disorders of gingiva and edentulous alveolar ridge",
      "rating": 2,
      "releaseDate": "1982-06-18 01:42:41",
      "directorId": 9,
      "createdAt": "2021-02-20 03:08:21",
      "updatedAt": "2020-12-14 01:59:53"
    }, {
      "title": "Spring is Here",
      "summary": "Fall into swimming pool striking wall causing drowning and submersion",
      "rating": 3,
      "releaseDate": "2002-02-05 18:21:45",
      "directorId": 12,
      "createdAt": "2020-07-14 03:23:17",
      "updatedAt": "2020-11-06 07:21:20"
    }, {
      "title": "Xtro",
      "summary": "Unspecified disorder of synovium and tendon, left hand",
      "rating": 1,
      "releaseDate": "1974-03-02 21:44:03",
      "directorId": 18,
      "createdAt": "2020-12-17 06:13:33",
      "updatedAt": "2020-06-30 18:01:56"
    }, {
      "title": "The Left Handed Gun",
      "summary": "Unspecified injury of quadriceps muscle, fascia and tendon",
      "rating": 1,
      "releaseDate": "2016-05-27 06:27:44",
      "directorId": 13,
      "createdAt": "2020-11-15 18:14:25",
      "updatedAt": "2020-12-03 19:20:36"
    }, {
      "title": "Tale of Despereaux, The",
      "summary": "Nondisplaced transcondylar fracture of unspecified humerus, subsequent encounter for fracture with delayed healing",
      "rating": 5,
      "releaseDate": "1974-10-27 04:08:00",
      "directorId": 1,
      "createdAt": "2020-10-16 12:51:30",
      "updatedAt": "2021-04-08 00:22:06"
    }, {
      "title": "Below the Belt",
      "summary": "Acute hepatitis C",
      "rating": 5,
      "releaseDate": "2010-01-13 10:35:07",
      "directorId": 5,
      "createdAt": "2021-04-24 18:15:07",
      "updatedAt": "2020-06-28 10:01:05"
    }, {
      "title": "I Even Met Happy Gypsies (Skupljaci perja)",
      "summary": "Pathological fracture, right fibula, subsequent encounter for fracture with nonunion",
      "rating": 2,
      "releaseDate": "1987-08-07 06:34:45",
      "directorId": 18,
      "createdAt": "2020-12-24 03:51:25",
      "updatedAt": "2020-06-05 16:29:22"
    }, {
      "title": "Scarlet Letter, The",
      "summary": "Contact with powered woodworking and forming machines, sequela",
      "rating": 3,
      "releaseDate": "2003-04-10 13:59:53",
      "directorId": 9,
      "createdAt": "2020-10-07 15:13:48",
      "updatedAt": "2020-06-22 23:18:07"
    }, {
      "title": "Manon of the Spring (Manon des sources)",
      "summary": "Military training ground as the place of occurrence of the external cause",
      "rating": 3,
      "releaseDate": "2019-09-07 22:38:09",
      "directorId": 3,
      "createdAt": "2020-11-02 12:28:24",
      "updatedAt": "2021-04-23 23:01:13"
    }, {
      "title": "Primeval",
      "summary": "Kaschin-Beck disease, wrist",
      "rating": 5,
      "releaseDate": "1997-05-01 23:20:23",
      "directorId": 1,
      "createdAt": "2021-03-30 11:26:51",
      "updatedAt": "2021-01-30 12:45:18"
    }, {
      "title": "Mod Squad, The",
      "summary": "External constriction of upper arm",
      "rating": 5,
      "releaseDate": "1992-08-23 04:05:53",
      "directorId": 19,
      "createdAt": "2021-04-30 13:02:26",
      "updatedAt": "2021-04-24 02:37:08"
    }, {
      "title": "L'enfance nue (Naked Childhood)",
      "summary": "Injury of sciatic nerve at hip and thigh level",
      "rating": 2,
      "releaseDate": "1950-06-28 15:49:21",
      "directorId": 15,
      "createdAt": "2020-06-02 04:26:29",
      "updatedAt": "2021-02-25 10:00:51"
    }, {
      "title": "Violette",
      "summary": "Vibratory urticaria",
      "rating": 1,
      "releaseDate": "1960-03-20 17:54:39",
      "directorId": 10,
      "createdAt": "2020-06-09 22:37:16",
      "updatedAt": "2021-03-12 12:54:09"
    }, {
      "title": "Taxing Woman, A (Marusa no onna)",
      "summary": "Poisoning by tetracyclines, accidental (unintentional), subsequent encounter",
      "rating": 3,
      "releaseDate": "1996-09-03 13:01:45",
      "directorId": 5,
      "createdAt": "2020-08-27 23:00:09",
      "updatedAt": "2020-12-19 10:42:44"
    }, {
      "title": "Sherlock Jr.",
      "summary": "Pressure ulcer of unspecified buttock",
      "rating": 3,
      "releaseDate": "1997-04-27 17:58:34",
      "directorId": 13,
      "createdAt": "2020-09-19 16:57:11",
      "updatedAt": "2021-02-25 22:28:07"
    }, {
      "title": "Tin Men",
      "summary": "Generalized idiopathic epilepsy and epileptic syndromes, intractable",
      "rating": 1,
      "releaseDate": "1997-11-13 23:15:48",
      "directorId": 16,
      "createdAt": "2020-08-23 05:27:42",
      "updatedAt": "2021-02-24 19:32:21"
    }, {
      "title": "Klansman, The",
      "summary": "Unspecified open wound of unspecified wrist, subsequent encounter",
      "rating": 1,
      "releaseDate": "1983-12-22 22:53:52",
      "directorId": 4,
      "createdAt": "2020-08-27 03:34:29",
      "updatedAt": "2020-11-09 03:41:05"
    }, {
      "title": "Peepli Live",
      "summary": "Conjoined twin pregnancy, first trimester",
      "rating": 5,
      "releaseDate": "1973-11-30 09:32:11",
      "directorId": 17,
      "createdAt": "2021-03-10 05:51:25",
      "updatedAt": "2021-02-19 16:16:56"
    }, {
      "title": "Sting II, The",
      "summary": "Other physeal fracture of unspecified metatarsal, subsequent encounter for fracture with routine healing",
      "rating": 2,
      "releaseDate": "1974-11-28 09:43:17",
      "directorId": 1,
      "createdAt": "2020-08-20 10:16:52",
      "updatedAt": "2021-03-03 06:17:04"
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Movies', null, {});
  }
};