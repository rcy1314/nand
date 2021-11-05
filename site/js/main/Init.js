/* Init.js does some handling of location.

  * Translation Example
  > /?q=[translation]

  * Feed Example
  > /?q=[unique+id] fails to search.

  * Hash Example
  > /?[hash] fails to search.

*/

setTimeout(

  function() {

    URI();

    Home();

    Feed(quickFeeds);

    Check();

    Options();

    Viewport();

    adj = menu.slice();
    randomizeAssets(adj);

    Bootup();

    document.title = doc;

  }, 750

)
