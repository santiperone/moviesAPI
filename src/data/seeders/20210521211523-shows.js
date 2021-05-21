'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Shows', [{
      "title": "Rahtree: Flower of the Night (Buppha Rahtree)",
      "summary": "Primary blast injury of rectum, initial encounter",
      "rating": 5,
      "releaseDate": "1981-06-02 08:32:31",
      "directorId": 14,
      "createdAt": "2020-12-15 20:36:23",
      "updatedAt": "2020-06-29 14:56:49"
    }, {
      "title": "Rudo y Cursi (Rough and Vulgar)",
      "summary": "Displaced transverse fracture of shaft of right radius, initial encounter for closed fracture",
      "rating": 5,
      "releaseDate": "1980-03-22 01:34:30",
      "directorId": 19,
      "createdAt": "2020-11-09 07:51:48",
      "updatedAt": "2020-11-25 23:12:06"
    }, {
      "title": "Jazz Singer, The",
      "summary": "Unspecified disorder of right ear",
      "rating": 5,
      "releaseDate": "1985-01-06 08:21:52",
      "directorId": 4,
      "createdAt": "2021-04-09 20:43:37",
      "updatedAt": "2020-06-08 10:46:37"
    }, {
      "title": "Code, The (Mentale, La)",
      "summary": "Corrosion of first degree of female genital region, initial encounter",
      "rating": 3,
      "releaseDate": "1977-05-19 06:11:42",
      "directorId": 18,
      "createdAt": "2021-01-18 16:28:17",
      "updatedAt": "2021-01-07 08:10:24"
    }, {
      "title": "Beach Party",
      "summary": "Toxic effect of organophosphate and carbamate insecticides, accidental (unintentional), subsequent encounter",
      "rating": 3,
      "releaseDate": "1985-07-19 14:45:57",
      "directorId": 1,
      "createdAt": "2021-02-13 15:41:35",
      "updatedAt": "2021-03-16 06:34:36"
    }, {
      "title": "Bring It On",
      "summary": "Displaced other extraarticular fracture of left calcaneus, subsequent encounter for fracture with routine healing",
      "rating": 3,
      "releaseDate": "1976-08-08 13:27:09",
      "directorId": 12,
      "createdAt": "2020-11-09 12:33:45",
      "updatedAt": "2020-05-22 09:18:35"
    }, {
      "title": "Thursday",
      "summary": "Congenital malformations of breast",
      "rating": 5,
      "releaseDate": "1978-02-28 16:44:10",
      "directorId": 5,
      "createdAt": "2020-09-01 00:16:07",
      "updatedAt": "2020-12-21 04:57:52"
    }, {
      "title": "How I Got Into College",
      "summary": "Monoarthritis, not elsewhere classified, left knee",
      "rating": 3,
      "releaseDate": "1995-09-11 00:55:47",
      "directorId": 17,
      "createdAt": "2020-09-17 18:48:37",
      "updatedAt": "2021-03-06 00:54:50"
    }, {
      "title": "A mí las mujeres ni fu ni fa",
      "summary": "Salter-Harris Type III physeal fracture of phalanx of right toe, sequela",
      "rating": 1,
      "releaseDate": "2010-06-03 22:52:44",
      "directorId": 16,
      "createdAt": "2020-09-22 04:25:09",
      "updatedAt": "2020-07-06 04:40:45"
    }, {
      "title": "Four Minutes (Vier Minuten)",
      "summary": "Other specified sprain of left wrist, subsequent encounter",
      "rating": 2,
      "releaseDate": "1955-12-14 05:21:36",
      "directorId": 2,
      "createdAt": "2020-09-07 19:05:08",
      "updatedAt": "2021-01-27 04:58:54"
    }, {
      "title": "ParaNorman",
      "summary": "Complete traumatic amputation of left lower leg, level unspecified, subsequent encounter",
      "rating": 3,
      "releaseDate": "1981-07-30 20:34:55",
      "directorId": 12,
      "createdAt": "2020-12-06 14:11:49",
      "updatedAt": "2020-08-20 21:59:09"
    }, {
      "title": "Such a Long Journey",
      "summary": "Monoarthritis, not elsewhere classified, wrist",
      "rating": 3,
      "releaseDate": "1963-04-02 01:39:47",
      "directorId": 4,
      "createdAt": "2020-08-12 18:40:16",
      "updatedAt": "2020-07-18 14:46:51"
    }, {
      "title": "RoboCop",
      "summary": "Other specified disorders of synovium and tendon, unspecified site",
      "rating": 3,
      "releaseDate": "1967-03-20 16:44:23",
      "directorId": 20,
      "createdAt": "2020-08-22 00:37:06",
      "updatedAt": "2020-12-03 01:13:56"
    }, {
      "title": "Austenland",
      "summary": "Poisoning by peripheral vasodilators, undetermined",
      "rating": 4,
      "releaseDate": "2008-04-21 02:27:14",
      "directorId": 7,
      "createdAt": "2020-05-21 13:17:34",
      "updatedAt": "2020-08-02 07:20:02"
    }, {
      "title": "Some Girl(s)",
      "summary": "Anterior subcapsular polar infantile and juvenile cataract, bilateral",
      "rating": 5,
      "releaseDate": "1953-06-20 03:28:21",
      "directorId": 2,
      "createdAt": "2020-10-10 22:41:38",
      "updatedAt": "2021-01-15 05:39:24"
    }, {
      "title": "Bay of Blood (a.k.a. Twitch of the Death Nerve) (Reazione a catena)",
      "summary": "Driver of special construction vehicle injured in traffic accident, sequela",
      "rating": 3,
      "releaseDate": "1953-08-12 16:06:10",
      "directorId": 7,
      "createdAt": "2020-12-14 04:27:48",
      "updatedAt": "2021-03-29 12:38:14"
    }, {
      "title": "Jane Eyre",
      "summary": "Military operations involving explosion of unspecified marine weapon, military personnel, subsequent encounter",
      "rating": 2,
      "releaseDate": "2011-08-03 05:22:32",
      "directorId": 9,
      "createdAt": "2020-08-22 16:05:38",
      "updatedAt": "2020-12-06 17:21:40"
    }, {
      "title": "Tarantella",
      "summary": "Benign paroxysmal vertigo",
      "rating": 4,
      "releaseDate": "1955-10-29 18:17:00",
      "directorId": 16,
      "createdAt": "2020-05-24 06:10:10",
      "updatedAt": "2020-09-06 23:06:56"
    }, {
      "title": "From the Orient with Fury",
      "summary": "Poisoning by, adverse effect of and underdosing of predominantly alpha-adrenoreceptor agonists",
      "rating": 4,
      "releaseDate": "1999-07-07 05:01:27",
      "directorId": 14,
      "createdAt": "2020-11-20 17:12:38",
      "updatedAt": "2021-03-03 15:31:22"
    }, {
      "title": "Just Ask My Children",
      "summary": "Poisoning by oxytocic drugs, accidental (unintentional), subsequent encounter",
      "rating": 4,
      "releaseDate": "1973-08-29 12:07:17",
      "directorId": 10,
      "createdAt": "2021-03-21 22:07:54",
      "updatedAt": "2021-01-09 02:04:14"
    }, {
      "title": "Love and Death",
      "summary": "Chronic giant papillary conjunctivitis",
      "rating": 4,
      "releaseDate": "1962-04-24 20:46:46",
      "directorId": 16,
      "createdAt": "2020-10-29 12:12:08",
      "updatedAt": "2021-04-26 22:37:14"
    }, {
      "title": "Second Skin (Segunda Piel)",
      "summary": "Other war operations occurring after cessation of hostilities, military personnel",
      "rating": 1,
      "releaseDate": "1953-07-11 11:09:35",
      "directorId": 15,
      "createdAt": "2021-05-14 17:54:28",
      "updatedAt": "2021-01-25 17:13:46"
    }, {
      "title": "Putzel",
      "summary": "Chronic diastolic (congestive) heart failure",
      "rating": 3,
      "releaseDate": "1963-10-25 06:44:04",
      "directorId": 18,
      "createdAt": "2020-09-14 05:02:47",
      "updatedAt": "2021-03-09 09:28:41"
    }, {
      "title": "Rocky Horror Picture Show, The",
      "summary": "Other specified injury of other specified blood vessels at shoulder and upper arm level, unspecified arm, subsequent encounter",
      "rating": 3,
      "releaseDate": "1997-03-06 06:28:40",
      "directorId": 7,
      "createdAt": "2021-03-30 03:12:36",
      "updatedAt": "2020-06-26 23:39:03"
    }, {
      "title": "Forgiveness of Blood, The (Falja e gjakut)",
      "summary": "Encounter for supervision of normal pregnancy, unspecified",
      "rating": 4,
      "releaseDate": "2013-11-30 14:49:33",
      "directorId": 1,
      "createdAt": "2021-03-26 04:21:25",
      "updatedAt": "2020-06-26 09:23:01"
    }, {
      "title": "The Old Gun",
      "summary": "Nondisplaced fracture of neck of first metacarpal bone, unspecified hand, subsequent encounter for fracture with nonunion",
      "rating": 4,
      "releaseDate": "1957-04-15 03:48:48",
      "directorId": 13,
      "createdAt": "2020-09-14 10:22:29",
      "updatedAt": "2020-08-03 08:43:12"
    }, {
      "title": "Bush Mama",
      "summary": "Burn of second degree of left foot",
      "rating": 1,
      "releaseDate": "2020-06-23 17:25:20",
      "directorId": 4,
      "createdAt": "2020-06-08 12:07:30",
      "updatedAt": "2020-08-18 03:37:15"
    }, {
      "title": "Millie",
      "summary": "Passenger on bus injured in collision with car, pick-up truck or van in nontraffic accident, sequela",
      "rating": 1,
      "releaseDate": "2020-05-06 13:02:54",
      "directorId": 5,
      "createdAt": "2021-02-25 01:11:47",
      "updatedAt": "2021-05-08 21:42:10"
    }, {
      "title": "Song of the South",
      "summary": "Other specified disorders of synovium, right knee",
      "rating": 1,
      "releaseDate": "2018-08-25 13:22:37",
      "directorId": 12,
      "createdAt": "2020-07-26 04:51:47",
      "updatedAt": "2020-07-31 20:57:04"
    }, {
      "title": "CBGB",
      "summary": "Malignant neoplasm of corpus uteri",
      "rating": 4,
      "releaseDate": "2018-02-02 19:03:11",
      "directorId": 16,
      "createdAt": "2021-03-07 01:30:52",
      "updatedAt": "2021-04-12 14:24:22"
    }, {
      "title": "Heart Condition",
      "summary": "Injury of radial nerve at upper arm level",
      "rating": 1,
      "releaseDate": "1995-05-05 19:14:11",
      "directorId": 16,
      "createdAt": "2020-08-11 08:49:03",
      "updatedAt": "2020-10-27 20:44:36"
    }, {
      "title": "Viking, The",
      "summary": "Person boarding or alighting a three-wheeled motor vehicle injured in collision with other nonmotor vehicle, sequela",
      "rating": 1,
      "releaseDate": "1967-06-24 20:11:57",
      "directorId": 3,
      "createdAt": "2021-01-16 19:37:54",
      "updatedAt": "2020-06-01 01:42:33"
    }, {
      "title": "Eye for an Eye, An (Oeil pour oeil) (Eyes of the Sahara)",
      "summary": "Legal intervention, means unspecified, bystander injured, subsequent encounter",
      "rating": 5,
      "releaseDate": "1992-03-25 14:45:57",
      "directorId": 19,
      "createdAt": "2020-09-06 15:26:15",
      "updatedAt": "2021-04-12 13:18:51"
    }, {
      "title": "Pippi on the Run (På rymmen med Pippi Långstrump)",
      "summary": "Chronic osteomyelitis with draining sinus, unspecified femur",
      "rating": 5,
      "releaseDate": "1984-09-14 21:31:19",
      "directorId": 9,
      "createdAt": "2020-11-22 19:10:08",
      "updatedAt": "2020-09-25 11:57:36"
    }, {
      "title": "Prince of the Sun: The Great Adventure of Horus (Taiyou no ouji Horusu no daibouken)",
      "summary": "Pathological fracture, left toe(s), subsequent encounter for fracture with delayed healing",
      "rating": 3,
      "releaseDate": "2020-04-25 01:13:53",
      "directorId": 1,
      "createdAt": "2020-06-14 16:41:50",
      "updatedAt": "2020-05-23 23:48:40"
    }, {
      "title": "Human Condition III, The (Ningen no joken III)",
      "summary": "Driver of heavy transport vehicle injured in collision with railway train or railway vehicle in nontraffic accident, subsequent encounter",
      "rating": 5,
      "releaseDate": "2005-03-20 20:02:11",
      "directorId": 17,
      "createdAt": "2020-11-18 03:48:07",
      "updatedAt": "2020-07-24 23:52:02"
    }, {
      "title": "The Pee-Wee Herman Show on Broadway",
      "summary": "Strain of intrinsic muscle, fascia and tendon of unspecified thumb at wrist and hand level, initial encounter",
      "rating": 4,
      "releaseDate": "1954-10-19 17:50:47",
      "directorId": 13,
      "createdAt": "2020-06-02 11:05:36",
      "updatedAt": "2020-12-03 23:32:48"
    }, {
      "title": "Bad 25",
      "summary": "Blister (nonthermal) of unspecified wrist, subsequent encounter",
      "rating": 2,
      "releaseDate": "2015-04-01 19:01:50",
      "directorId": 3,
      "createdAt": "2020-10-04 17:22:11",
      "updatedAt": "2020-09-20 01:53:38"
    }, {
      "title": "P.U.N.K.S",
      "summary": "Malignant neoplasm of overlapping sites of left bronchus and lung",
      "rating": 1,
      "releaseDate": "1988-06-07 16:25:39",
      "directorId": 18,
      "createdAt": "2021-02-08 01:55:42",
      "updatedAt": "2021-03-23 03:14:01"
    }, {
      "title": "Super Mario Bros.",
      "summary": "Pathological fracture, tibia and fibula",
      "rating": 3,
      "releaseDate": "2009-10-29 12:40:21",
      "directorId": 8,
      "createdAt": "2020-05-24 12:30:12",
      "updatedAt": "2020-08-23 10:18:29"
    }, {
      "title": "Confessions of a Window Cleaner",
      "summary": "Ankylosis, unspecified elbow",
      "rating": 5,
      "releaseDate": "1999-07-23 05:34:30",
      "directorId": 15,
      "createdAt": "2020-12-27 04:11:31",
      "updatedAt": "2020-05-21 04:10:31"
    }, {
      "title": "Gangsters",
      "summary": "Atherosclerosis of autologous vein bypass graft(s) of the extremities with rest pain, unspecified extremity",
      "rating": 2,
      "releaseDate": "1981-09-17 08:29:36",
      "directorId": 4,
      "createdAt": "2021-03-21 18:00:11",
      "updatedAt": "2021-04-19 21:36:24"
    }, {
      "title": "Wolf Creek 2",
      "summary": "War operations involving explosion of improvised explosive device [IED], military personnel, subsequent encounter",
      "rating": 4,
      "releaseDate": "1953-04-05 00:38:44",
      "directorId": 4,
      "createdAt": "2020-08-22 07:14:18",
      "updatedAt": "2020-09-27 22:45:38"
    }, {
      "title": "Joan of Arc",
      "summary": "Burn of first degree of unspecified multiple fingers (nail), not including thumb, initial encounter",
      "rating": 5,
      "releaseDate": "1984-01-28 01:25:06",
      "directorId": 5,
      "createdAt": "2020-08-22 20:21:32",
      "updatedAt": "2020-12-07 15:56:07"
    }, {
      "title": "O-Bi, O-Ba - The End of Civilization (O-bi, O-ba - Koniec cywilizacji)",
      "summary": "Other specified diabetes mellitus with moderate nonproliferative diabetic retinopathy without macular edema",
      "rating": 1,
      "releaseDate": "2011-07-13 12:17:01",
      "directorId": 11,
      "createdAt": "2021-03-28 18:14:54",
      "updatedAt": "2021-04-16 23:50:08"
    }, {
      "title": "Ping Pong Summer",
      "summary": "Unspecified open wound of right thumb without damage to nail, subsequent encounter",
      "rating": 4,
      "releaseDate": "2006-06-24 17:52:03",
      "directorId": 4,
      "createdAt": "2021-01-03 09:22:00",
      "updatedAt": "2020-08-18 20:49:34"
    }, {
      "title": "Riot On!",
      "summary": "Multiple defects of retina without detachment, unspecified eye",
      "rating": 3,
      "releaseDate": "2007-10-18 15:21:34",
      "directorId": 3,
      "createdAt": "2021-04-12 17:51:10",
      "updatedAt": "2020-10-26 00:09:20"
    }, {
      "title": "Big Hangover, The",
      "summary": "Chronic angle-closure glaucoma",
      "rating": 2,
      "releaseDate": "1974-03-17 03:37:16",
      "directorId": 20,
      "createdAt": "2020-06-19 05:28:04",
      "updatedAt": "2021-01-10 17:24:20"
    }, {
      "title": "Belphecor: Curse of the Mummy (Belphégor - Le fantôme du Louvre)",
      "summary": "Other fractures of lower end of right radius, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with delayed healing",
      "rating": 1,
      "releaseDate": "1983-11-07 11:47:50",
      "directorId": 3,
      "createdAt": "2020-09-07 03:16:06",
      "updatedAt": "2021-03-12 12:05:07"
    }, {
      "title": "Hierro ",
      "summary": "Unspecified fracture of shaft of right ulna, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with nonunion",
      "rating": 3,
      "releaseDate": "1967-10-06 05:58:17",
      "directorId": 18,
      "createdAt": "2021-03-05 00:39:00",
      "updatedAt": "2021-02-09 07:59:22"
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Shows', null, {});
  }
};