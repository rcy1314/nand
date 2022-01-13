/*
  to use this file uncomment menu and add objects
  save image `site/images/webp`
  [convert to webp 100x100 image] https://redketchup.io/image-resizer

  >https://raw.githubusercontent.com/acktic/xml-sites-array/master/Assets.js

    ### Assets.js has multiple indices for objects.

      * These need to be fufilled to add an object.

      > id: unique stripped to plain text [indexed]

      > title: generated [indexed]

      > des: plain text [indexed by input]

      > category: translations

      > uri: endpoint used in Request()

      > hash: unique two char alphanumeric [indexed]

      > media: feed contains images boolean [indexed]

       [indexed] Filter() by Init.js

       *** Youtube uri
       userName: https://www.youtube.com/feeds/videos.xml?user=
       channel: https://www.youtube.com/feeds/videos.xml?channel_id=

       *** Example
       {id:`Test`,category:`Reddit`,title:``,description:`Reddit`,uri:`https//`,image:`Reddit`,hash:`QW`,media:!0},

       */

menu.unshift(

  {id:`4Chan/Sports`,category:`Reddit`,title:``,description:`4Chan Sports`,uri:`https://boards.4channel.org/sp/index.rss`,image:`4chan`,hash:`4S`,media:!0},
  {id:`4Chan/Gifs`,category:`Reddit`,title:``,description:`4Chan Gif`,uri:`https://boards.4channel.org/gif/index.rss`,image:`4chan`,hash:`4G`,media:!1},
  {id:`4Chan/High Resolution`,category:`Reddit`,title:``,description:`4Chan High Resolution`,uri:`https://boards.4channel.org/hr/index.rss`,image:`4chan`,hash:`4H`,media:!0},
  {id:`4Chan/Technology`,category:`Reddit`,title:``,description:`4Chan Technology`,uri:`https://boards.4channel.org/g/index.rss`,image:`4chan`,hash:`4T`,media:!0},

);
