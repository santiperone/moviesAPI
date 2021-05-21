'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Seasons', [{
      "number": 9,
      "title": "Miracle at Oxford (True Blue)",
      "summary": "Puncture wound with foreign body of unspecified thumb with damage to nail, subsequent encounter",
      "rating": 5,
      "releaseDate": "1990-08-17 00:49:38",
      "showId": 31,
      "createdAt": "2020-09-20 14:52:27",
      "updatedAt": "2020-05-25 11:59:22"
    }, {
      "number": 10,
      "title": "Camp",
      "summary": "Pain due to vascular prosthetic devices, implants and grafts, sequela",
      "rating": 3,
      "releaseDate": "1991-01-25 19:26:16",
      "showId": 32,
      "createdAt": "2020-11-26 16:02:25",
      "updatedAt": "2021-01-13 06:16:50"
    }, {
      "number": 10,
      "title": "Old Man Drinking a Glass of Beer",
      "summary": "Puncture wound without foreign body of left ear, sequela",
      "rating": 1,
      "releaseDate": "1982-08-18 23:43:51",
      "showId": 14,
      "createdAt": "2021-02-17 21:55:14",
      "updatedAt": "2021-03-12 22:43:12"
    }, {
      "number": 3,
      "title": "Adventures of Ford Fairlane, The",
      "summary": "Laceration of extensor muscle, fascia and tendon of right little finger at forearm level, subsequent encounter",
      "rating": 2,
      "releaseDate": "1990-07-17 10:18:10",
      "showId": 32,
      "createdAt": "2021-01-21 21:40:37",
      "updatedAt": "2020-11-18 13:49:54"
    }, {
      "number": 6,
      "title": "Only God Knows (Sólo Dios Sabe)",
      "summary": "Person on outside of pick-up truck or van injured in collision with pedestrian or animal in traffic accident, initial encounter",
      "rating": 5,
      "releaseDate": "1984-01-19 23:55:30",
      "showId": 21,
      "createdAt": "2020-11-27 21:27:34",
      "updatedAt": "2020-07-23 11:52:06"
    }, {
      "number": 6,
      "title": "Night of the Running Man",
      "summary": "Abrasion of abdominal wall, subsequent encounter",
      "rating": 4,
      "releaseDate": "1964-12-25 12:39:11",
      "showId": 17,
      "createdAt": "2020-12-07 10:12:24",
      "updatedAt": "2020-08-22 20:17:55"
    }, {
      "number": 1,
      "title": "Waterloo",
      "summary": "Corrosion of unspecified degree of right toe(s) (nail)",
      "rating": 5,
      "releaseDate": "1990-12-12 02:54:10",
      "showId": 49,
      "createdAt": "2021-04-25 01:43:04",
      "updatedAt": "2021-03-10 16:47:35"
    }, {
      "number": 6,
      "title": "Dreamboat",
      "summary": "Failed or difficult intubation for anesthesia during the puerperium",
      "rating": 4,
      "releaseDate": "1982-03-09 09:29:01",
      "showId": 7,
      "createdAt": "2021-05-04 20:56:00",
      "updatedAt": "2020-11-16 06:20:44"
    }, {
      "number": 1,
      "title": "North Avenue Irregulars, The",
      "summary": "Other disorders resulting from impaired renal tubular function",
      "rating": 1,
      "releaseDate": "1963-02-02 12:39:54",
      "showId": 26,
      "createdAt": "2020-09-15 13:36:34",
      "updatedAt": "2020-12-10 02:27:36"
    }, {
      "number": 6,
      "title": "Burrowing (Man tänker sitt)",
      "summary": "Sprain of unspecified ligament of right ankle, initial encounter",
      "rating": 5,
      "releaseDate": "1978-08-20 02:04:26",
      "showId": 11,
      "createdAt": "2020-08-12 20:08:27",
      "updatedAt": "2021-02-15 14:17:49"
    }, {
      "number": 2,
      "title": "Butcher's Wife, The",
      "summary": "Idiopathic chronic gout, left hand",
      "rating": 2,
      "releaseDate": "1979-08-23 06:35:03",
      "showId": 39,
      "createdAt": "2020-12-18 03:11:08",
      "updatedAt": "2021-03-15 17:18:50"
    }, {
      "number": 4,
      "title": "Fearful Symmetry: The Making of 'To Kill a Mockingbird'",
      "summary": "Autologous donor, other blood",
      "rating": 5,
      "releaseDate": "1993-02-20 14:06:07",
      "showId": 36,
      "createdAt": "2020-07-14 22:06:17",
      "updatedAt": "2021-04-18 02:09:52"
    }, {
      "number": 1,
      "title": "Loaded Weapon 1 (National Lampoon's Loaded Weapon 1)",
      "summary": "Corrosion of second degree of left wrist, initial encounter",
      "rating": 4,
      "releaseDate": "2000-12-28 20:36:10",
      "showId": 10,
      "createdAt": "2020-07-25 13:00:53",
      "updatedAt": "2021-02-23 11:57:40"
    }, {
      "number": 2,
      "title": "28 Weeks Later",
      "summary": "Other mechanical complication of other urinary devices and implants, subsequent encounter",
      "rating": 4,
      "releaseDate": "2005-01-30 02:29:59",
      "showId": 31,
      "createdAt": "2020-05-27 05:30:50",
      "updatedAt": "2020-09-13 17:09:48"
    }, {
      "number": 3,
      "title": "Captain America II: Death Too Soon",
      "summary": "Dislocation of metacarpal (bone), proximal end of unspecified hand, initial encounter",
      "rating": 2,
      "releaseDate": "1951-05-27 23:30:39",
      "showId": 30,
      "createdAt": "2020-10-26 20:50:07",
      "updatedAt": "2020-06-27 01:02:01"
    }, {
      "number": 2,
      "title": "Tribute",
      "summary": "Poisoning by, adverse effect of and underdosing of calcium-channel blockers",
      "rating": 3,
      "releaseDate": "1988-07-01 17:13:01",
      "showId": 47,
      "createdAt": "2020-09-24 21:04:50",
      "updatedAt": "2020-07-31 15:18:38"
    }, {
      "number": 4,
      "title": "Seed",
      "summary": "Sequelae of toxic polyneuropathy",
      "rating": 1,
      "releaseDate": "1951-03-22 08:22:26",
      "showId": 48,
      "createdAt": "2020-09-01 02:32:42",
      "updatedAt": "2020-09-20 15:22:03"
    }, {
      "number": 2,
      "title": "Beyond the Mind's Eye",
      "summary": "Complete traumatic transphalangeal amputation of unspecified thumb, initial encounter",
      "rating": 2,
      "releaseDate": "1983-10-18 01:53:30",
      "showId": 13,
      "createdAt": "2020-11-29 13:50:06",
      "updatedAt": "2020-10-21 15:11:16"
    }, {
      "number": 9,
      "title": "Murder by Numbers",
      "summary": "Nondisplaced transverse fracture of shaft of humerus, unspecified arm, initial encounter for closed fracture",
      "rating": 3,
      "releaseDate": "1966-04-19 17:21:51",
      "showId": 22,
      "createdAt": "2020-05-28 07:10:58",
      "updatedAt": "2020-10-31 20:29:36"
    }, {
      "number": 8,
      "title": "Hunt for Red October, The",
      "summary": "Osteonecrosis due to drugs, left humerus",
      "rating": 3,
      "releaseDate": "2005-10-29 04:12:56",
      "showId": 30,
      "createdAt": "2021-03-07 22:14:29",
      "updatedAt": "2021-01-22 12:15:30"
    }, {
      "number": 10,
      "title": "At the Earth's Core",
      "summary": "Anorexia nervosa, restricting type",
      "rating": 4,
      "releaseDate": "1987-03-09 22:41:38",
      "showId": 15,
      "createdAt": "2021-02-23 14:55:41",
      "updatedAt": "2020-11-03 03:07:30"
    }, {
      "number": 5,
      "title": "Raid on Rommel",
      "summary": "Muscle wasting and atrophy, not elsewhere classified, left forearm",
      "rating": 5,
      "releaseDate": "1993-06-14 07:01:20",
      "showId": 2,
      "createdAt": "2020-08-26 18:26:57",
      "updatedAt": "2021-04-02 01:20:28"
    }, {
      "number": 3,
      "title": "Orca: The Killer Whale",
      "summary": "Other paralytic syndrome following other cerebrovascular disease affecting right non-dominant side",
      "rating": 4,
      "releaseDate": "1973-01-27 14:19:30",
      "showId": 32,
      "createdAt": "2020-08-29 21:31:25",
      "updatedAt": "2021-02-23 05:39:10"
    }, {
      "number": 4,
      "title": "Train Ride to Hollywood",
      "summary": "Displaced longitudinal fracture of right patella, initial encounter for open fracture type I or II",
      "rating": 4,
      "releaseDate": "1958-06-23 18:15:47",
      "showId": 18,
      "createdAt": "2020-11-20 11:00:19",
      "updatedAt": "2021-05-15 06:45:45"
    }, {
      "number": 2,
      "title": "Eyes Wide Open (Einayim Petukhoth)",
      "summary": "Corrosion of unspecified eye and adnexa, part unspecified, sequela",
      "rating": 4,
      "releaseDate": "1996-06-12 04:59:34",
      "showId": 38,
      "createdAt": "2021-01-26 12:07:05",
      "updatedAt": "2021-03-17 14:52:04"
    }, {
      "number": 2,
      "title": "See No Evil, Hear No Evil",
      "summary": "Hyperkeratosis of yaws",
      "rating": 1,
      "releaseDate": "2012-11-21 10:30:15",
      "showId": 12,
      "createdAt": "2020-08-01 09:21:43",
      "updatedAt": "2020-08-18 10:12:29"
    }, {
      "number": 7,
      "title": "Man Hunt",
      "summary": "Newborn affected by other specified complications of labor and delivery",
      "rating": 1,
      "releaseDate": "1990-05-13 06:55:13",
      "showId": 8,
      "createdAt": "2020-07-23 16:54:36",
      "updatedAt": "2021-03-25 16:45:29"
    }, {
      "number": 4,
      "title": "Over Your Cities Grass Will Grow",
      "summary": "Myasthenia gravis with (acute) exacerbation",
      "rating": 3,
      "releaseDate": "1975-08-05 13:23:23",
      "showId": 8,
      "createdAt": "2020-12-19 21:55:29",
      "updatedAt": "2020-06-23 18:45:09"
    }, {
      "number": 8,
      "title": "Brazil",
      "summary": "Posterior dislocation of unspecified ulnohumeral joint",
      "rating": 2,
      "releaseDate": "1988-12-31 20:01:32",
      "showId": 28,
      "createdAt": "2020-07-10 23:52:12",
      "updatedAt": "2021-01-20 01:49:47"
    }, {
      "number": 4,
      "title": "The Chatterley Affair",
      "summary": "Type 1 diabetes mellitus with proliferative diabetic retinopathy without macular edema, right eye",
      "rating": 4,
      "releaseDate": "1988-05-24 14:46:38",
      "showId": 28,
      "createdAt": "2021-05-07 18:02:14",
      "updatedAt": "2021-05-20 10:54:42"
    }, {
      "number": 8,
      "title": "Eminem AKA ",
      "summary": "Infection of other part of genital tract in pregnancy",
      "rating": 4,
      "releaseDate": "1991-05-07 01:54:39",
      "showId": 31,
      "createdAt": "2021-03-18 02:38:08",
      "updatedAt": "2021-03-16 21:34:18"
    }, {
      "number": 1,
      "title": "Keys of the Kingdom, The",
      "summary": "Displaced fracture of lower epiphysis (separation) of right femur, sequela",
      "rating": 5,
      "releaseDate": "1984-04-02 09:44:07",
      "showId": 42,
      "createdAt": "2021-03-20 21:27:54",
      "updatedAt": "2021-05-01 04:11:37"
    }, {
      "number": 7,
      "title": "Buried Alive",
      "summary": "Nondisplaced fracture of glenoid cavity of scapula, unspecified shoulder, sequela",
      "rating": 5,
      "releaseDate": "1986-07-04 15:24:32",
      "showId": 10,
      "createdAt": "2021-03-21 07:50:05",
      "updatedAt": "2020-09-30 09:50:47"
    }, {
      "number": 10,
      "title": "Totally F***ed Up",
      "summary": "Injury of unspecified nerve at lower leg level, unspecified leg",
      "rating": 5,
      "releaseDate": "1978-06-02 19:32:08",
      "showId": 29,
      "createdAt": "2020-08-16 04:24:10",
      "updatedAt": "2020-06-07 07:13:31"
    }, {
      "number": 1,
      "title": "13 Rue Madeleine",
      "summary": "Blister (nonthermal) of unspecified wrist, subsequent encounter",
      "rating": 5,
      "releaseDate": "1975-05-01 04:07:44",
      "showId": 47,
      "createdAt": "2020-09-04 08:56:00",
      "updatedAt": "2021-04-19 05:48:34"
    }, {
      "number": 3,
      "title": "Bataan",
      "summary": "Burn of unspecified degree of neck, subsequent encounter",
      "rating": 2,
      "releaseDate": "1988-12-29 19:03:35",
      "showId": 46,
      "createdAt": "2020-11-15 11:26:11",
      "updatedAt": "2020-10-23 20:34:10"
    }, {
      "number": 7,
      "title": "Right Now (À tout de suite)",
      "summary": "Nondisplaced bimalleolar fracture of unspecified lower leg, subsequent encounter for closed fracture with delayed healing",
      "rating": 1,
      "releaseDate": "1996-11-15 15:09:53",
      "showId": 27,
      "createdAt": "2021-01-12 07:38:33",
      "updatedAt": "2020-10-14 00:36:23"
    }, {
      "number": 3,
      "title": "Power 98",
      "summary": "External constriction of unspecified back wall of thorax, initial encounter",
      "rating": 4,
      "releaseDate": "1980-06-07 15:08:50",
      "showId": 33,
      "createdAt": "2020-08-03 00:25:55",
      "updatedAt": "2020-10-26 10:32:16"
    }, {
      "number": 1,
      "title": "Fantastic Mr. Fox",
      "summary": "Abrasion of right hand",
      "rating": 5,
      "releaseDate": "1982-03-10 05:42:02",
      "showId": 35,
      "createdAt": "2020-12-09 19:18:44",
      "updatedAt": "2020-07-29 16:37:13"
    }, {
      "number": 10,
      "title": "Aliens in the Attic",
      "summary": "Unspecified blepharitis left eye, unspecified eyelid",
      "rating": 2,
      "releaseDate": "1969-02-26 11:29:57",
      "showId": 32,
      "createdAt": "2020-11-19 04:04:12",
      "updatedAt": "2021-02-09 15:09:50"
    }, {
      "number": 10,
      "title": "Unfinished Life, An",
      "summary": "Other specific joint derangements of unspecified foot, not elsewhere classified",
      "rating": 1,
      "releaseDate": "2003-11-30 22:06:13",
      "showId": 41,
      "createdAt": "2020-10-30 19:02:23",
      "updatedAt": "2020-11-22 16:30:58"
    }, {
      "number": 7,
      "title": "Something Wild",
      "summary": "Bent bone of left radius, initial encounter for open fracture type IIIA, IIIB, or IIIC",
      "rating": 4,
      "releaseDate": "1984-11-10 09:44:15",
      "showId": 22,
      "createdAt": "2021-01-19 14:54:43",
      "updatedAt": "2021-04-13 09:13:06"
    }, {
      "number": 9,
      "title": "Season of the Witch",
      "summary": "Adverse effect of macrolides, sequela",
      "rating": 1,
      "releaseDate": "1988-03-20 21:29:08",
      "showId": 23,
      "createdAt": "2020-10-22 12:11:23",
      "updatedAt": "2021-04-23 13:58:45"
    }, {
      "number": 10,
      "title": "Bachelor in Paradise",
      "summary": "Subluxation of proximal interphalangeal joint of unspecified thumb, subsequent encounter",
      "rating": 4,
      "releaseDate": "1987-05-13 17:13:56",
      "showId": 30,
      "createdAt": "2020-10-11 05:39:52",
      "updatedAt": "2021-03-12 09:40:20"
    }, {
      "number": 6,
      "title": "Lies My Father Told Me",
      "summary": "Other traumatic nondisplaced spondylolisthesis of seventh cervical vertebra, subsequent encounter for fracture with routine healing",
      "rating": 3,
      "releaseDate": "1996-12-19 14:24:21",
      "showId": 22,
      "createdAt": "2020-09-03 16:14:40",
      "updatedAt": "2020-06-23 17:51:38"
    }, {
      "number": 3,
      "title": "Task, The",
      "summary": "Lateral dislocation of proximal end of tibia, right knee, subsequent encounter",
      "rating": 3,
      "releaseDate": "1970-12-07 02:00:01",
      "showId": 40,
      "createdAt": "2021-04-24 09:12:52",
      "updatedAt": "2020-07-06 19:44:39"
    }, {
      "number": 2,
      "title": "Fighter in the Wind",
      "summary": "Third [oculomotor] nerve palsy, unspecified eye",
      "rating": 3,
      "releaseDate": "1993-03-01 01:59:40",
      "showId": 48,
      "createdAt": "2020-12-25 00:38:23",
      "updatedAt": "2021-03-19 04:02:53"
    }, {
      "number": 10,
      "title": "Flipper",
      "summary": "Other physeal fracture of lower end of right femur, initial encounter for closed fracture",
      "rating": 4,
      "releaseDate": "1959-01-10 14:32:49",
      "showId": 21,
      "createdAt": "2021-04-06 18:04:23",
      "updatedAt": "2020-06-11 07:53:43"
    }, {
      "number": 10,
      "title": "Toast of New Orleans, The",
      "summary": "Other tear of medial meniscus, current injury, right knee, sequela",
      "rating": 1,
      "releaseDate": "1978-01-06 01:21:41",
      "showId": 50,
      "createdAt": "2021-04-04 20:53:16",
      "updatedAt": "2020-06-10 11:02:36"
    }, {
      "number": 10,
      "title": "Two Women (Ciociara, La)",
      "summary": "Unspecified injury of unspecified muscles, fascia and tendons at thigh level",
      "rating": 3,
      "releaseDate": "1959-12-21 06:47:58",
      "showId": 50,
      "createdAt": "2020-12-14 15:26:19",
      "updatedAt": "2021-03-25 12:36:21"
    }, {
      "number": 10,
      "title": "Prince of Central Park, The",
      "summary": "Complete transverse atypical femoral fracture, right leg, subsequent encounter for fracture with nonunion",
      "rating": 1,
      "releaseDate": "1998-04-04 06:28:25",
      "showId": 47,
      "createdAt": "2021-02-07 00:37:25",
      "updatedAt": "2020-10-11 00:11:37"
    }, {
      "number": 7,
      "title": "Selfish Giant, The",
      "summary": "High grade squamous intraepithelial lesion on cytologic smear of vagina (HGSIL)",
      "rating": 4,
      "releaseDate": "1961-04-23 17:42:44",
      "showId": 25,
      "createdAt": "2021-05-20 01:47:21",
      "updatedAt": "2020-10-29 18:08:53"
    }, {
      "number": 5,
      "title": "Nurse Betty",
      "summary": "Central cord syndrome at C7 level of cervical spinal cord, subsequent encounter",
      "rating": 1,
      "releaseDate": "1995-12-14 17:59:16",
      "showId": 31,
      "createdAt": "2020-10-18 17:04:10",
      "updatedAt": "2021-03-10 03:08:20"
    }, {
      "number": 1,
      "title": "On the Riviera",
      "summary": "Nondisplaced fracture of shaft of other metacarpal bone, subsequent encounter for fracture with nonunion",
      "rating": 5,
      "releaseDate": "2017-10-17 04:54:33",
      "showId": 2,
      "createdAt": "2020-11-13 02:04:37",
      "updatedAt": "2020-06-17 23:14:23"
    }, {
      "number": 1,
      "title": "Crossroads",
      "summary": "War operations involving other destruction of aircraft, military personnel, initial encounter",
      "rating": 4,
      "releaseDate": "2016-10-09 08:09:00",
      "showId": 29,
      "createdAt": "2020-08-16 03:01:54",
      "updatedAt": "2020-10-27 22:18:02"
    }, {
      "number": 7,
      "title": "I Live in Fear (Ikimono no kiroku)",
      "summary": "Laceration without foreign body of right breast",
      "rating": 3,
      "releaseDate": "2005-02-19 17:10:17",
      "showId": 24,
      "createdAt": "2021-04-18 07:16:39",
      "updatedAt": "2020-05-31 15:44:46"
    }, {
      "number": 7,
      "title": "April Fool's Day",
      "summary": "Postpartum coagulation defects",
      "rating": 1,
      "releaseDate": "2002-03-03 05:53:35",
      "showId": 40,
      "createdAt": "2020-12-02 18:03:07",
      "updatedAt": "2020-05-30 00:47:06"
    }, {
      "number": 7,
      "title": "Jamilya",
      "summary": "Laceration with foreign body of abdominal wall, right lower quadrant with penetration into peritoneal cavity, subsequent encounter",
      "rating": 4,
      "releaseDate": "1982-09-29 06:06:17",
      "showId": 36,
      "createdAt": "2020-09-18 19:33:27",
      "updatedAt": "2021-05-11 01:14:23"
    }, {
      "number": 10,
      "title": "In A Day",
      "summary": "Local residential or business street as the place of occurrence of the external cause",
      "rating": 1,
      "releaseDate": "2009-01-29 11:38:05",
      "showId": 26,
      "createdAt": "2020-05-23 11:49:24",
      "updatedAt": "2020-09-19 02:08:15"
    }, {
      "number": 3,
      "title": "Zipper",
      "summary": "Displaced comminuted fracture of unspecified patella, subsequent encounter for open fracture type I or II with malunion",
      "rating": 3,
      "releaseDate": "1995-08-06 21:41:11",
      "showId": 27,
      "createdAt": "2020-06-20 17:54:51",
      "updatedAt": "2021-04-08 20:48:10"
    }, {
      "number": 2,
      "title": "C.S.A.: The Confederate States of America",
      "summary": "Pressure ulcer",
      "rating": 1,
      "releaseDate": "2020-05-16 18:24:46",
      "showId": 23,
      "createdAt": "2021-01-11 20:00:23",
      "updatedAt": "2021-05-08 05:12:17"
    }, {
      "number": 5,
      "title": "Slipper and the Rose, The",
      "summary": "Oligospermia due to extratesticular causes",
      "rating": 2,
      "releaseDate": "1997-08-31 17:15:45",
      "showId": 19,
      "createdAt": "2021-05-03 09:05:27",
      "updatedAt": "2020-09-20 20:14:03"
    }, {
      "number": 7,
      "title": "Five Fingers",
      "summary": "Unspecified asthma, uncomplicated",
      "rating": 2,
      "releaseDate": "1993-04-28 16:57:11",
      "showId": 23,
      "createdAt": "2020-10-18 07:19:47",
      "updatedAt": "2021-04-25 13:48:47"
    }, {
      "number": 6,
      "title": "Measuring the World (Die Vermessung der Welt)",
      "summary": "Unspecified injury of muscle and tendon of long flexor muscle of toe at ankle and foot level",
      "rating": 2,
      "releaseDate": "1985-11-22 08:08:08",
      "showId": 11,
      "createdAt": "2021-02-27 19:11:36",
      "updatedAt": "2020-06-24 19:24:32"
    }, {
      "number": 2,
      "title": "H.M. Pulham, Esq.",
      "summary": "Pathological fracture in other disease, unspecified tibia and fibula, initial encounter for fracture",
      "rating": 2,
      "releaseDate": "2010-06-29 22:00:27",
      "showId": 4,
      "createdAt": "2020-11-15 06:53:14",
      "updatedAt": "2021-04-05 02:47:09"
    }, {
      "number": 3,
      "title": "Don't Look Back (Ne te retourne pas)",
      "summary": "Other chronic osteomyelitis, right shoulder",
      "rating": 3,
      "releaseDate": "1979-04-12 04:11:57",
      "showId": 42,
      "createdAt": "2020-08-06 22:17:38",
      "updatedAt": "2020-11-01 09:16:22"
    }, {
      "number": 1,
      "title": "Nazis: A Warning from History, The",
      "summary": "Alcohol abuse with alcohol-induced psychotic disorder with delusions",
      "rating": 3,
      "releaseDate": "1980-08-08 03:09:39",
      "showId": 13,
      "createdAt": "2021-01-11 12:36:59",
      "updatedAt": "2021-03-27 07:38:02"
    }, {
      "number": 1,
      "title": "Birdwatchers (BirdWatchers - La terra degli uomini rossi)",
      "summary": "Single liveborn infant, born outside hospital",
      "rating": 4,
      "releaseDate": "1998-11-09 06:32:04",
      "showId": 24,
      "createdAt": "2021-01-12 21:13:18",
      "updatedAt": "2020-09-02 19:37:28"
    }, {
      "number": 8,
      "title": "Three Lives and Only One Death (Trois vies & une seule mort)",
      "summary": "Salter-Harris Type I physeal fracture of lower end of ulna, left arm, sequela",
      "rating": 4,
      "releaseDate": "2018-07-04 00:59:44",
      "showId": 11,
      "createdAt": "2020-09-20 13:53:10",
      "updatedAt": "2021-04-29 21:21:52"
    }, {
      "number": 3,
      "title": "Chump at Oxford, A",
      "summary": "Strain of muscle, fascia and tendon of the posterior muscle group at thigh level, right thigh",
      "rating": 4,
      "releaseDate": "1969-08-11 08:56:18",
      "showId": 4,
      "createdAt": "2020-09-04 02:17:57",
      "updatedAt": "2020-12-07 02:44:23"
    }, {
      "number": 2,
      "title": "Eerie Tales (Unheimliche Geschichten)",
      "summary": "Disorders of visual pathways in (due to) neoplasm, left side",
      "rating": 3,
      "releaseDate": "1957-02-17 18:28:44",
      "showId": 20,
      "createdAt": "2021-02-24 00:11:29",
      "updatedAt": "2020-10-22 12:34:18"
    }, {
      "number": 4,
      "title": "Thirst (Pyaasa)",
      "summary": "Minor laceration of greater saphenous vein at hip and thigh level, unspecified leg, subsequent encounter",
      "rating": 4,
      "releaseDate": "2013-07-04 23:25:08",
      "showId": 47,
      "createdAt": "2020-05-29 20:44:59",
      "updatedAt": "2020-07-10 21:50:41"
    }, {
      "number": 8,
      "title": "Comic Book: The Movie",
      "summary": "Open bite of thyroid gland, initial encounter",
      "rating": 1,
      "releaseDate": "1979-02-24 03:13:12",
      "showId": 27,
      "createdAt": "2021-02-27 20:41:33",
      "updatedAt": "2020-07-07 12:39:53"
    }, {
      "number": 2,
      "title": "Legally Blonde 2: Red, White & Blonde",
      "summary": "Arthritis due to other bacteria, wrist",
      "rating": 5,
      "releaseDate": "2001-03-27 19:02:46",
      "showId": 23,
      "createdAt": "2020-09-07 08:57:43",
      "updatedAt": "2020-08-08 08:34:48"
    }, {
      "number": 9,
      "title": "Desert Hearts",
      "summary": "Subacute osteomyelitis, other site",
      "rating": 1,
      "releaseDate": "1998-09-30 17:33:05",
      "showId": 46,
      "createdAt": "2020-05-24 06:26:38",
      "updatedAt": "2020-10-12 10:05:27"
    }, {
      "number": 1,
      "title": "Modesty Blaise",
      "summary": "Toxic effect of soaps",
      "rating": 3,
      "releaseDate": "1965-09-04 20:11:02",
      "showId": 22,
      "createdAt": "2020-11-04 05:38:26",
      "updatedAt": "2021-02-03 18:57:51"
    }, {
      "number": 1,
      "title": "Frenchman's Creek",
      "summary": "Unspecified pedal cyclist injured in noncollision transport accident in traffic accident",
      "rating": 1,
      "releaseDate": "2020-11-14 22:54:11",
      "showId": 30,
      "createdAt": "2020-06-29 10:00:28",
      "updatedAt": "2020-07-10 06:22:43"
    }, {
      "number": 2,
      "title": "Tu£sday",
      "summary": "Strain of unspecified muscles, fascia and tendons at forearm level, unspecified arm, subsequent encounter",
      "rating": 3,
      "releaseDate": "1994-10-23 21:42:44",
      "showId": 11,
      "createdAt": "2020-10-17 19:53:34",
      "updatedAt": "2020-10-18 04:04:09"
    }, {
      "number": 2,
      "title": "Frontière(s)",
      "summary": "Fracture of unspecified phalanx of unspecified thumb, subsequent encounter for fracture with malunion",
      "rating": 3,
      "releaseDate": "2004-04-17 20:22:29",
      "showId": 43,
      "createdAt": "2020-07-30 20:43:35",
      "updatedAt": "2020-11-28 03:59:30"
    }, {
      "number": 2,
      "title": "Nowhere Boy",
      "summary": "Insect bite (nonvenomous), left great toe, initial encounter",
      "rating": 5,
      "releaseDate": "2014-05-23 15:41:44",
      "showId": 43,
      "createdAt": "2020-10-02 15:22:52",
      "updatedAt": "2020-09-18 19:14:17"
    }, {
      "number": 6,
      "title": "Taxi to the Dark Side",
      "summary": "Contact with and (suspected) exposure to other communicable diseases",
      "rating": 4,
      "releaseDate": "1958-11-15 15:12:37",
      "showId": 11,
      "createdAt": "2020-09-05 12:50:06",
      "updatedAt": "2021-04-14 16:29:33"
    }, {
      "number": 1,
      "title": "In-Laws, The",
      "summary": "Other displaced fracture of base of first metacarpal bone, right hand, subsequent encounter for fracture with delayed healing",
      "rating": 1,
      "releaseDate": "1978-11-04 15:13:48",
      "showId": 45,
      "createdAt": "2020-08-18 06:12:43",
      "updatedAt": "2020-12-11 10:07:29"
    }, {
      "number": 7,
      "title": "Prestige, The",
      "summary": "Toxic effect of other tobacco and nicotine, assault, initial encounter",
      "rating": 5,
      "releaseDate": "1989-08-20 20:39:18",
      "showId": 19,
      "createdAt": "2020-11-30 16:42:55",
      "updatedAt": "2021-01-13 14:06:02"
    }, {
      "number": 9,
      "title": "Love with the Proper Stranger",
      "summary": "Duane's syndrome, right eye",
      "rating": 3,
      "releaseDate": "1986-05-26 16:07:09",
      "showId": 46,
      "createdAt": "2020-11-02 00:49:08",
      "updatedAt": "2021-01-17 23:21:59"
    }, {
      "number": 3,
      "title": "Scary Movie",
      "summary": "Dislocation of left acromioclavicular joint, greater than 200% displacement",
      "rating": 2,
      "releaseDate": "1963-01-24 18:37:00",
      "showId": 44,
      "createdAt": "2021-03-14 21:24:27",
      "updatedAt": "2021-04-08 12:39:40"
    }, {
      "number": 1,
      "title": "We Have a Pope (Habemus Papam)",
      "summary": "Unspecified injury of other muscles, fascia and tendons at forearm level, right arm, initial encounter",
      "rating": 3,
      "releaseDate": "2019-07-20 22:43:12",
      "showId": 31,
      "createdAt": "2020-06-15 18:45:46",
      "updatedAt": "2020-05-28 02:30:28"
    }, {
      "number": 7,
      "title": "Endgame",
      "summary": "Underdosing of glucocorticoids and synthetic analogues, sequela",
      "rating": 3,
      "releaseDate": "1997-11-02 03:59:38",
      "showId": 31,
      "createdAt": "2020-08-23 07:35:29",
      "updatedAt": "2020-05-28 22:45:34"
    }, {
      "number": 7,
      "title": "Tales of Ordinary Madness (Storie di Ordinaria Follia)",
      "summary": "Posterior subluxation of left ulnohumeral joint, subsequent encounter",
      "rating": 5,
      "releaseDate": "1961-06-26 17:44:48",
      "showId": 39,
      "createdAt": "2020-07-11 02:42:56",
      "updatedAt": "2020-09-05 09:15:49"
    }, {
      "number": 10,
      "title": "The Forgotten Faces",
      "summary": "Unspecified subluxation of right ulnohumeral joint",
      "rating": 4,
      "releaseDate": "1967-06-27 22:06:02",
      "showId": 15,
      "createdAt": "2020-10-14 16:26:52",
      "updatedAt": "2020-07-05 22:40:59"
    }, {
      "number": 4,
      "title": "Housewarming (Travaux, on sait quand ça commence...)",
      "summary": "Unspecified blood type, Rh negative",
      "rating": 2,
      "releaseDate": "1971-12-28 21:08:34",
      "showId": 24,
      "createdAt": "2021-04-16 09:37:18",
      "updatedAt": "2020-12-05 21:24:09"
    }, {
      "number": 9,
      "title": "Devil's Knot",
      "summary": "Other osteoporosis with current pathological fracture, unspecified site, initial encounter for fracture",
      "rating": 3,
      "releaseDate": "2012-10-26 12:41:56",
      "showId": 27,
      "createdAt": "2021-04-30 05:49:31",
      "updatedAt": "2021-01-29 03:42:50"
    }, {
      "number": 8,
      "title": "Nightmare Factory",
      "summary": "Other injury due to other accident to watercraft",
      "rating": 1,
      "releaseDate": "1970-07-20 01:55:41",
      "showId": 10,
      "createdAt": "2021-04-05 14:26:37",
      "updatedAt": "2020-07-20 15:44:19"
    }, {
      "number": 2,
      "title": "Dunwich Horror, The",
      "summary": "Underdosing of hemostatic drugs",
      "rating": 4,
      "releaseDate": "1990-02-11 10:37:00",
      "showId": 36,
      "createdAt": "2020-10-17 04:32:49",
      "updatedAt": "2020-07-25 07:46:07"
    }, {
      "number": 8,
      "title": "Donovan's Brain",
      "summary": "Displaced segmental fracture of shaft of unspecified tibia, subsequent encounter for closed fracture with delayed healing",
      "rating": 5,
      "releaseDate": "1999-08-02 09:58:18",
      "showId": 45,
      "createdAt": "2021-04-23 01:21:14",
      "updatedAt": "2021-05-06 19:52:06"
    }, {
      "number": 5,
      "title": "Kahaani",
      "summary": "Displaced transverse fracture of shaft of unspecified ulna, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with nonunion",
      "rating": 4,
      "releaseDate": "1998-05-18 20:37:18",
      "showId": 32,
      "createdAt": "2021-05-07 12:40:12",
      "updatedAt": "2020-09-19 07:22:16"
    }, {
      "number": 8,
      "title": "Macross Plus",
      "summary": "Other intraarticular fracture of lower end of unspecified radius, subsequent encounter for closed fracture with delayed healing",
      "rating": 1,
      "releaseDate": "2020-12-01 17:40:50",
      "showId": 46,
      "createdAt": "2020-09-15 08:00:24",
      "updatedAt": "2021-01-07 14:13:24"
    }, {
      "number": 6,
      "title": "Swing Kids",
      "summary": "Toxic effect of unspecified halogen derivatives of aliphatic and aromatic hydrocarbons, undetermined, subsequent encounter",
      "rating": 1,
      "releaseDate": "2003-04-17 10:59:03",
      "showId": 33,
      "createdAt": "2020-09-12 00:44:36",
      "updatedAt": "2020-07-20 00:36:04"
    }, {
      "number": 9,
      "title": "Come Dance with Me!",
      "summary": "Corrosion of unspecified degree of single left finger (nail) except thumb",
      "rating": 4,
      "releaseDate": "1951-12-06 14:10:36",
      "showId": 34,
      "createdAt": "2021-04-12 21:28:21",
      "updatedAt": "2020-05-29 14:31:31"
    }, {
      "number": 10,
      "title": "Cry of the Owl, The",
      "summary": "Laceration without foreign body of unspecified great toe without damage to nail, subsequent encounter",
      "rating": 1,
      "releaseDate": "2010-02-23 20:27:34",
      "showId": 46,
      "createdAt": "2021-01-30 13:53:13",
      "updatedAt": "2021-01-31 02:00:00"
    }, {
      "number": 1,
      "title": "Ride Lonesome",
      "summary": "Nondisplaced transcondylar fracture of right humerus, initial encounter for open fracture",
      "rating": 4,
      "releaseDate": "2010-07-17 12:54:38",
      "showId": 14,
      "createdAt": "2020-07-29 02:57:05",
      "updatedAt": "2020-12-11 06:22:36"
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Seasons', null, {});
  }
};