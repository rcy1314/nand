/*
  to use this file uncomment menu and remove Assets script src in index.html
  >https://raw.githubusercontent.com/acktic/xml-sites-array/master/Assets.js

    ### Assets.js has multiple indices for objects.

      * These need to be fufilled to add an object.

      > id: unique stripped to plain text [indexed]

      > title: generated [indexed]

      > des: plain text [indexed]

      > category: translations

      > uri: endpoint used in Request()

      > hash: unique two char alphanumeric [indexed]

      > media: feed contains images boolean [indexed]

       [indexed] Filter() by Init.js

       *** Youtube uri
       userName: https://www.youtube.com/feeds/videos.xml?user=
       channel: https://www.youtube.com/feeds/videos.xml?channel_id=


var menu=[
{id:`CBS/Washington DC`,category:`News`,title:``,description:`WUSA Washington D.C. licensed to the Capital City of Washington, District of Columbia.`,uri:`http://rssfeeds.wusa9.com/wusa-news&x=1`,image:`WUSA9`,hash:`wa`,media:!1},
{id:`ABC/Fresno`,category:`News`,title:``,description:`KFSN Local Fresno and National News.`,uri:`https://abc30.com/feed`,image:`KFSNTV30`,hash:`fA`,media:!0},
{id:`NBC/Fresno`,category:`News`,title:``,description:`KSEE YourCentralValley in Fresno, California.`,uri:`https://yourcentralvalley.com/feed`,image:`KSEE24`,hash:`oF`,media:!0},
{id:`AOL`,category:`Media`,title:``,description:`AOL Headlines in Business, Entertainment, Politics, and Video.`,uri:`https://www.aol.com/rss`,image:`AOL`,hash:`mA`,media:!0},
{id:`Reddit/Hacker News`,category:`Reddit`,title:``,description:`Hacker News subreddit A mirror of Hacker News' best submissions.`,uri:`https://www.reddit.com/r/hackernews/.rss`,image:`Reddit`,hash:`nH`,media:!1},
{id:`Yahoo Sports`,category:`Sports`,title:``,description:`Yahoo Sports has Comprehensive Scores, Standings, Fantasy Games, Rumors, and more.`,uri:`https://sports.yahoo.com/rss`,image:`Yahoo`,hash:`oY`,media:!1},
{id:`WIRED`,category:`Tech`,title:``,description:`WIRED is where tomorrow is realized. It is the essential source of information.`,uri:`https://www.wired.com/feed/rss`,image:`WIRED`,hash:`wD`,media:!0},
{id:`Vox US`,category:`World`,title:``,description:`Vox is an American opinion website owned by Vox Media.`,uri:`https://www.vox.com/rss/index.xml`,image:`Vox`,hash:`xV`},
{id:`Youtube/The Verge`,category:`Youtube`,title:``,description:`The Verge Youtube videos, reviews, opinion, and technology.`,uri:`https://www.youtube.com/feeds/videos.xml?user=theverge`,image:`TheVerge`,hash:`vH`,media:!0},
];

*/
