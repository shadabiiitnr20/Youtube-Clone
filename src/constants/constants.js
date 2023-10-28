export const BTN_LIST_CATEGORIES = [
  {
    id: 1,
    name: "All",
  },
  {
    id: 2,
    name: "Gaming",
  },
  {
    id: 3,
    name: "Football",
  },
  {
    id: 4,
    name: "Cricket",
  },
  {
    id: 5,
    name: "Cooking",
  },
  {
    id: 6,
    name: "Anime",
  },
  {
    id: 7,
    name: "Funny Videos",
  },
  {
    id: 8,
    name: "Songs",
  },
  {
    id: 9,
    name: "Movies",
  },
  {
    id: 10,
    name: "News",
  },
  {
    id: 11,
    name: "JavaScript",
  },
  {
    id: 12,
    name: "React",
  },
];

export const SIDE_BAR_CONTENT = [
  {
    id: 1,
    name: "Home",
    haveSubContent: false,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWm0UQjVsCkz4v53dfIz4hxvnDK03SXyxzHA&usqp=CAU",
  },
  {
    id: 2,
    name: "WatchLater",
    haveSubContent: false,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMAqhLHkBGlXSFxvDDg_BxrsHuCPzfrcT3CA&usqp=CAU",
  },
  {
    id: 3,
    name: "Shorts",
    haveSubContent: true,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGmWiqtaUCBByiBg31zp4Ci2BGBmgBcd_ojQ&usqp=CAU",
    subContent: [
      {
        id: 6,
        name: "Music",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGmWiqtaUCBByiBg31zp4Ci2BGBmgBcd_ojQ&usqp=CAU",
      },
      {
        id: 7,
        name: "Videos",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGmWiqtaUCBByiBg31zp4Ci2BGBmgBcd_ojQ&usqp=CAU",
      },
      {
        id: 8,
        name: "Games",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGmWiqtaUCBByiBg31zp4Ci2BGBmgBcd_ojQ&usqp=CAU",
      },
      {
        id: 9,
        name: "Sports",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGmWiqtaUCBByiBg31zp4Ci2BGBmgBcd_ojQ&usqp=CAU",
      },
    ],
  },
  {
    id: 4,
    name: "Subscrptions",
    haveSubContent: true,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzqECEf1iidl5srRed6pXBtczliwJR3lGq6g&usqp=CAU",
    subContent: [
      {
        id: 10,
        name: "Music",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzqECEf1iidl5srRed6pXBtczliwJR3lGq6g&usqp=CAU",
      },
      {
        id: 11,
        name: "Videos",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzqECEf1iidl5srRed6pXBtczliwJR3lGq6g&usqp=CAU",
      },
      {
        id: 12,
        name: "Games",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzqECEf1iidl5srRed6pXBtczliwJR3lGq6g&usqp=CAU",
      },
      {
        id: 13,
        name: "Sports",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzqECEf1iidl5srRed6pXBtczliwJR3lGq6g&usqp=CAU",
      },
    ],
  },

  {
    id: 5,
    name: "Streaming",
    haveSubContent: false,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMAqhLHkBGlXSFxvDDg_BxrsHuCPzfrcT3CA&usqp=CAU",
  },
];

export const OFFSET_LIVE_CHAT = 10;

export const HAMBURGER_ICON =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png";
export const YOUTUBE_ICON =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRONuWvQHJt5ooi822FbtizsibO3m7cNHMHNg&usqp=CAU";
export const USER_ICON =
  "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png";

const GOOGLE_API_KEY = "Your API Key";

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const COMMENTS_DATA = [
  {
    name: "Shadab",
    text: "Lorem ipsum dolar sent just kidding hello how are you??",
    replies: [],
  },
  {
    name: "Shadab",
    text: "Lorem ipsum dolar sent just kidding hello how are you??",
    replies: [
      {
        name: "Shadab",
        text: "Lorem ipsum dolar sent just kidding hello how are you??",
        replies: [
          {
            name: "Shadab",
            text: "Lorem ipsum dolar sent just kidding hello how are you??",
            replies: [
              {
                name: "Shadab",
                text: "Lorem ipsum dolar sent just kidding hello how are you??",
                replies: [
                  {
                    name: "Shadab",
                    text: "Lorem ipsum dolar sent just kidding hello how are you??",
                    replies: [],
                  },
                ],
              },
            ],
          },
          {
            name: "Shadab",
            text: "Lorem ipsum dolar sent just kidding hello how are you??",
            replies: [],
          },
          {
            name: "Shadab",
            text: "Lorem ipsum dolar sent just kidding hello how are you??",
            replies: [],
          },
        ],
      },
      {
        name: "Shadab",
        text: "Lorem ipsum dolar sent just kidding hello how are you??",
        replies: [],
      },
      {
        name: "Shadab",
        text: "Lorem ipsum dolar sent just kidding hello how are you??",
        replies: [],
      },
    ],
  },
  {
    name: "Shadab",
    text: "Lorem ipsum dolar sent just kidding hello how are you??",
    replies: [],
  },
  {
    name: "Shadab",
    text: "Lorem ipsum dolar sent just kidding hello how are you??",
    replies: [],
  },
  {
    name: "Shadab",
    text: "Lorem ipsum dolar sent just kidding hello how are you??",
    replies: [],
  },
  {
    name: "Shadab",
    text: "Lorem ipsum dolar sent just kidding hello how are you??",
    replies: [],
  },
  {
    name: "Shadab",
    text: "Lorem ipsum dolar sent just kidding hello how are you??",
    replies: [],
  },
];
