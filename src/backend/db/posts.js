import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

const commonURL =
  "https://res.cloudinary.com/therajatg/image/upload/v1655625579/social%20media";

export const posts = [
  {
    _id: uuid(),
    firstName: "Elon",
    lastName: "Musk",
    username: "elon",
    avatarURL: `${commonURL}/Elon_Musk_at8nqr.jpg`,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    content: "Falcon 5 found a completely new world below the surface of mars.",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Peter",
          lastName: "Thiel",
          username: "peter",
          avatarURL: `${commonURL}/Peter_Thiel_fl6dtq`,
        },
        {
          _id: uuid(),
          firstName: "Balaji",
          lastName: "Srinivasan",
          username: "balaji",
          avatarURL: `${commonURL}/Balaji_Srinivasan_undgoo`,
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Balaji",
        lastName: "Srinivasan",
        username: "balaji",
        avatarURL: `${commonURL}/Balaji_Srinivasan_undgoo`,
        text: "Bro this is so cool. Have you found anyone living there?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Rajat",
    lastName: "Gupta",
    username: "rajat",
    avatarURL: `${commonURL}/mypic_hejkou`,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    content:
      "(Small steps) x (Consistency) > Just sitting and thinking about changing our life.",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Balaji",
          lastName: "Srinivasan",
          username: "balaji",
          avatarURL: `${commonURL}/Balaji_Srinivasan_undgoo`,
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Balaji",
        lastName: "Srinivasan",
        username: "balaji",
        avatarURL: `${commonURL}/Balaji_Srinivasan_undgoo`,
        text: "This is so true",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Rick",
    lastName: "Steves",
    username: "rick",
    avatarURL: `${commonURL}/Rick_Steves_gxlcrj`,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    content: "New series dedicated to the remote places in spain coming soon.",
    likes: {
      likeCount: 2,
      likedBy: [
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
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "garry",
        firstName: "Garry",
        lastName: "Tan",
        text: "I would love to go to spain someday.",
        avatarURL: `${commonURL}/Garry_Tan_fxiool`,
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },

  {
    _id: uuid(),
    firstName: "Naval",
    lastName: "Ravikant",
    username: "naval",
    avatarURL: `${commonURL}/Naval_Ravikant_gd3c2m`,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    content:
      "A busy mind accelerates the perceived passage of time. Buy more time by cultivating peace of mind",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Peter",
          lastName: "Thiel",
          username: "peter",
          avatarURL: `${commonURL}/Peter_Thiel_fl6dtq`,
        },
        {
          _id: uuid(),
          firstName: "Rajat",
          lastName: "Gupta",
          username: "rajat",
          avatarURL: `${commonURL}/mypic_hejkou`,
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "elon",
        firstName: "Elon",
        lastName: "Musk",
        text: "and only a peaceful mind like yours can think this clearly.",
        avatarURL: `${commonURL}/Elon_Musk_at8nqr.jpg`,
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Garry",
    lastName: "Tan",
    username: "garry",
    avatarURL: `${commonURL}/Garry_Tan_fxiool`,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    content:
      "Recently we provided funding of 10 million USD to Cruise which is paving way for self driving cars.",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Rajat",
          lastName: "Gupta",
          username: "rajat",
          avatarURL: `${commonURL}/mypic_hejkou`,
        },
        {
          _id: uuid(),
          firstName: "Rick",
          lastName: "Steves",
          username: "rick",
          avatarURL: `${commonURL}/Rick_Steves_gxlcrj`,
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "rajat",
        firstName: "Rajat",
        lastName: "Gupta",
        text: "Awesome",
        avatarURL: `${commonURL}/mypic_hejkou`,
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Ryan Van",
    lastName: "Duzer",
    username: "ryan",
    avatarURL: `${commonURL}/Ryan_Van_Duzer_dlpd9o`,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    content:
      "Man! I love Mexico. Doesn't matter how many times I pedal on mexican roads, the kindness of strangers surprises me every single time.",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Rick",
          lastName: "Steves",
          username: "rick",
          avatarURL: `${commonURL}/Rick_Steves_gxlcrj`,
        },
        {
          _id: uuid(),
          firstName: "Balaji",
          lastName: "Srinivasan",
          username: "balaji",
          avatarURL: `${commonURL}/Balaji_Srinivasan_undgoo`,
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "rick",
        firstName: "Rick",
        lastName: "Steves",
        text: "I'll love to pedal on mexican roads with you.",
        avatarURL: `${commonURL}/Rick_Steves_gxlcrj`,
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },

  {
    _id: uuid(),
    firstName: "Balaji",
    lastName: "Srinivasan",
    username: "balaji",
    avatarURL: `${commonURL}/Balaji_Srinivasan_undgoo`,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    content: "Next week I am releasing my new book: The Network State.",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Elon",
          lastName: "Musk",
          username: "elon",
          avatarURL: `${commonURL}/Elon_Musk_at8nqr.jpg`,
        },
        {
          _id: uuid(),
          firstName: "Rajat",
          lastName: "Gupta",
          username: "rajat",
          avatarURL: `${commonURL}/mypic_hejkou`,
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "rajat",
        firstName: "Rajat",
        lastName: "Gupta",
        text: "Cool! I was waiting for this for so long.",
        avatarURL: `${commonURL}/mypic_hejkou`,
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
];
