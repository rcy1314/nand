/* Init.js does some handling of location.

  * Translation Example
  > /?q=[translation]

  * Hash Example
  > /?[hash] fails to bing search.

  * Feed Example
  > /?q=[id] multple filter fail search.
  > /?q=[tranlsation] translation found populate.

*/

setTimeout(function() {

  if (
    !location.href.match(`\\?fbclid`) &&
    !location.search.split(`?q=`)[1] &&
    !location.href.match(`\\?\\#`) &&
    location.href.split(`?`)[1]
  ) {
    let i;
    let id;
    var uri = location.href.split(`?`)[1];
    if (uri.match(/^[a-zA-Z0-9]+$/i)) {
      id = uri.slice(0, 2);
      post = parseInt(uri.slice(2), 36);
      setTimeout(function () {
        if (menu.findIndex((item) => item.hash === id))
          i = menu.findIndex((item) => item.hash === id);
        if (i !== -1 && isNaN(parseFloat(post)) && !isFinite(post))
          xmlRequestParsing(null, null, i);
        else if (i !== -1 && !isNaN(parseFloat(post)) && isFinite(post))
          filterInputResponse(menu[i].id.space());
        else if (i === -1)
          filterInputResponse(location.href.split(`?`)[1]);
        _toggle.style.display = `none`;
        _visit.style.display = `none`;
        guideOnScreen = onScreen;
        onScreen = false;
        topMenuBarDisplay(topBar);
        sideBarDisplay(onScreen);
      }, 250);
    }
  } else if (location.search.split(`?q=`)[1]) {
    var uri = location.search.split(`?q=`)[1];
    var uri = uri.toLowerCase().space();
    _toggle.style.display = `none`;
    setTimeout(function () {
      filterInputResponse(uri);
      topMenuBarDisplay(topBar);
    }, 250);
  } else if (!post) {
    setTimeout(function () {
      _visit.style.display = `flex`;
      _guest.focus();
    }, 250);
  }
  if (
    isNaN(parseFloat(post)) && !isFinite(post) &&
    window.clientWidth <= 425
  ) {
    sideBarDisplay(onScreen);
  } else if (!isNaN(parseFloat(post)) && isFinite(post) && showSplash == true) {
    _check.style.visibility = `visible`;
  } else if (window.clientWidth <= 425) {
    sideBarDisplay(false);
    Blocks = true;
    List = false;
  }
}, 50)
