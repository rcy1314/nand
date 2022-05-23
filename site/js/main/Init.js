/* Init.js does some handling of location.

  * Translation Example
  > /?q=[translation]

  * Feed Example
  > /?q=[unique+id] fails to search.

  * Hash Example
  > /?[hash] fails to search.

*/

setTimeout(

  () => {
   
    Home();

    Feed(quickFeeds);

    Check();

    Options();

    Viewport();

    Background();

    adj = menu.slice();
    randomizeAssets(adj);

    Loading();

    Bootup();

    URI();

    document.title = doc;

  }, 750

)
