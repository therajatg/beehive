import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

/**
 * 1. Rajat: following: Elon, balaji
 *        followers: rick steves, ryan van
 *
 * 2. Elon: following: balaji, peter thiel, naval
 *       followers: Rajat, Garry
 *
 * 3. Ryan van: following: rajat, peter
 *           followers: rick, naval
 *
 * 4. Rick: following: ryan , rajat
 *       followers: peter
 *
 * 5. naval: following: ryan, garry
 *        followers: elon, balaji
 *
 * 6. balaji: following: naval
 *         followers: rajat, elon
 *
 * 7. Garry: following: elon
 *        followers: naval, peter
 *
 * 8. peter: following: rick, Garry
 *        followers: elon, ryan
 *
 */

const commonURL =
  "https://res.cloudinary.com/therajatg/image/upload/v1655625579/social%20media";

export const users = [
  {
    _id: uuid(),
    firstName: "Rajat",
    lastName: "Gupta",
    username: "rajat",
    password: "rajat123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatarURL: `${commonURL}/mypic_hejkou.jpg`,
    following: [
      {
        _id: uuid(),
        firstName: "Elon",
        lastName: "Musk",
        username: "elon",
        avatarURL: `${commonURL}/Elon_Musk_at8nqr.jpg`,
      },
      {
        _id: uuid(),
        firstName: "Balaji",
        lastName: "Srinivasan",
        username: "balaji",
        avatarURL: `${commonURL}/Balaji_Srinivasan_undgoo`,
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Rick",
        lastName: "Steves",
        username: "rick",
        avatarURL: `${commonURL}/Rick_Steves_gxlcrj`,
      },
      {
        _id: uuid(),
        firstName: "Ryan Van",
        lastName: "Duzer",
        username: "ryan",
        avatarURL: `${commonURL}/Ryan_Van_Duzer_dlpd9o`,
      },
    ],
    bookmarks: [],
    about:
      "The best thing about Elon Musk is that he makes me question if I'm thinking big enough with my life.",
    website: "https://rajatgupta.net/",
  },

  {
    _id: uuid(),
    firstName: "Elon",
    lastName: "Musk",
    username: "elon",
    password: "elonmusk",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatarURL: `${commonURL}/Elon_Musk_at8nqr.jpg`,
    following: [
      {
        _id: uuid(),
        firstName: "Balaji",
        lastName: "Srinivasan",
        username: "balaji",
        avatarURL: `${commonURL}/Balaji_Srinivasan_undgoo`,
      },
      {
        _id: uuid(),
        firstName: "Peter",
        lastName: "Thiel",
        username: "peter",
        avatarURL: `${commonURL}/Peter_Thiel_fl6dtq`,
      },
      {
        _id: uuid(),
        firstName: "Naval",
        lastName: "Ravikant",
        username: "naval",
        avatarURL: `${commonURL}/Naval_Ravikant_gd3c2m`,
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Rajat",
        lastName: "Gupta",
        username: "rajat",
        avatarURL: `${commonURL}/mypic_hejkou.jpg`,
      },
      {
        _id: uuid(),
        firstName: "Garry",
        lastName: "Tan",
        username: "garry",
        avatarURL: `${commonURL}/Garry_Tan_fxiool`,
      },
    ],
    bookmarks: [],
    about: "Let's go to Mars",
    website: "https://www.tesla.com/",
  },

  {
    _id: uuid(),
    firstName: "Ryan Van",
    lastName: "Duzer",
    username: "ryan",
    password: "ryanvanduzer",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatarURL: `${commonURL}/Ryan_Van_Duzer_dlpd9o`,
    following: [
      {
        _id: uuid(),
        firstName: "Rajat",
        lastName: "Gupta",
        username: "rajat",
        avatarURL: `${commonURL}/mypic_hejkou`,
      },
      {
        _id: uuid(),
        firstName: "Peter",
        lastName: "Thiel",
        username: "peter",
        avatarURL: `${commonURL}/Peter_Thiel_fl6dtq`,
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Rick",
        lastName: "Steves",
        username: "rick",
        avatarURL: `${commonURL}/Rick_Steves_gxlcrj`,
      },
      {
        _id: uuid(),
        firstName: "Naval",
        lastName: "Ravikant",
        username: "naval",
        avatarURL: `${commonURL}/Naval_Ravikant_gd3c2m`,
      },
    ],
    bookmarks: [],
    about: "Pedal the world",
    website: "https://www.youtube.com/duzertv/videos",
  },

  {
    _id: uuid(),
    firstName: "Rick",
    lastName: "Steves",
    username: "rick",
    password: "ricksteves",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatarURL: `${commonURL}/Rick_Steves_gxlcrj`,
    following: [
      {
        _id: uuid(),
        firstName: "Ryan Van",
        lastName: "Duzer",
        username: "ryan",
        avatarURL: `${commonURL}/Ryan_Van_Duzer_dlpd9o`,
      },
      {
        _id: uuid(),
        firstName: "Rajat",
        lastName: "Gupta",
        username: "rajat",
        avatarURL: `${commonURL}/mypic_hejkou`,
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Peter",
        lastName: "Thiel",
        username: "peter",
        avatarURL: `${commonURL}/Peter_Thiel_fl6dtq`,
      },
    ],
    bookmarks: [],
    about: "wanna experience life => come to Europe",
    website: "https://www.youtube.com/c/ricksteves/videos",
  },

  {
    _id: uuid(),
    firstName: "Naval",
    lastName: "Ravikant",
    username: "naval",
    password: "navalravikant",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatarURL: `${commonURL}/Naval_Ravikant_gd3c2m`,
    following: [
      {
        _id: uuid(),
        firstName: "Ryan Van",
        lastName: "Duzer",
        username: "ryan",
        avatarURL: `${commonURL}/Ryan_Van_Duzer_dlpd9o`,
      },
      {
        _id: uuid(),
        firstName: "Garry",
        lastName: "Tan",
        username: "garry",
        avatarURL: `${commonURL}/Garry_Tan_fxiool`,
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Elon",
        lastName: "Musk",
        username: "elon",
        avatarURL: `${commonURL}/mypic_hejkou.jpg`,
      },
      {
        _id: uuid(),
        firstName: "Balaji",
        lastName: "Srinivasan",
        username: "balaji",
        avatarURL: `${commonURL}/Balaji_Srinivasan_undgoo`,
      },
    ],
    bookmarks: [],
    about: "freedom is the biggest flex",
    website: "https://angel.co/",
  },

  {
    _id: uuid(),
    firstName: "Balaji",
    lastName: "Srinivasan",
    username: "balaji",
    password: "balajiSrinivasan",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatarURL: `${commonURL}/Balaji_Srinivasan_undgoo`,
    following: [
      {
        _id: uuid(),
        firstName: "Naval",
        lastName: "Ravikant",
        username: "naval",
        avatarURL: `${commonURL}/Naval_Ravikant_gd3c2m`,
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Rajat",
        lastName: "Gupta",
        username: "rajat",
        avatarURL: `${commonURL}/mypic_hejkou`,
      },
      {
        _id: uuid(),
        firstName: "Elon",
        lastName: "Musk",
        username: "elon",
        avatarURL: `${commonURL}/Elon_Musk_at8nqr`,
      },
    ],
    bookmarks: [],
    about: "Make your own state (using the power of community)",
    website: "https://balajis.com/",
  },

  {
    _id: uuid(),
    firstName: "Garry",
    lastName: "Tan",
    username: "garry",
    password: "garrytan",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatarURL: `${commonURL}/Garry_Tan_fxiool`,
    following: [
      {
        _id: uuid(),
        firstName: "Elon",
        lastName: "Musk",
        username: "elon",
        avatarURL: `${commonURL}/Elon_Musk_at8nqr.jpg`,
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Naval",
        lastName: "Ravikant",
        username: "naval",
        avatarURL: `${commonURL}/Naval_Ravikant_gd3c2m`,
      },
      {
        _id: uuid(),
        firstName: "Peter",
        lastName: "Thiel",
        username: "peter",
        avatarURL: `${commonURL}/Peter_Thiel_fl6dtq`,
      },
    ],
    bookmarks: [],
    about: "Funding the future of tech",
    website: "https://www.youtube.com/c/GarryTan",
  },

  {
    _id: uuid(),
    firstName: "Peter",
    lastName: "Thiel",
    username: "peter",
    password: "peterthiel",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatarURL: `${commonURL}/Peter_Thiel_fl6dtq`,
    following: [
      {
        _id: uuid(),
        firstName: "Rick",
        lastName: "Steves",
        username: "rick",
        avatarURL: `${commonURL}/Rick_Steves_gxlcrj`,
      },
      {
        _id: uuid(),
        firstName: "Garry",
        lastName: "Tan",
        username: "garry",
        avatarURL: `${commonURL}/Garry_Tan_fxiool`,
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Elon",
        lastName: "Musk",
        username: "elon",
        avatarURL: `${commonURL}/Elon_Musk_at8nqr`,
      },
      {
        _id: uuid(),
        firstName: "Ryan Van",
        lastName: "Duzer",
        username: "ryan",
        avatarURL: `${commonURL}/Ryan_Van_Duzer_dlpd9o`,
      },
    ],
    bookmarks: [],
    about: "funding one startup at a time",
    website: "https://foundersfund.com/team/peter-thiel/",
  },
];
