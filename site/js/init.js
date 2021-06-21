/* Init.js does some handling of location.

  * Translation Example
  > /?q=[translation]

  * Feed Example
  > /?q=[unique+id] fails to search.

  * Hash Example
  > /?[hash] fails to search.

*/

setTimeout(function() {

  if (
    !location.href.match(`\\?fbclid`) &&
    !location.search.split(`?q=`)[1] &&
    !location.href.match(`\\?\\+1`) &&
    !location.href.match(`\\?\\#`) &&
    !location.href.match(`\\?mB`) &&
    location.href.split(`?`)[1]
  ) {
    let i;
    let uri = location.href.split(`?`)[1];
    id = uri.slice(uri.length - 9, uri.length);
    if (uri.match(/^[a-zA-Z0-9]+$/g)) {
      if (Reader == true) {
        justRead = true;
        onlyImages = true;
      }
      id = uri.slice(0, 2);
      post = parseInt(uri.slice(2), 36);
      setTimeout(function () {
        if (menu.findIndex((item) => item.hash === id))
          i = menu.findIndex((item) => item.hash === id);
        if (i !== -1) xmlRequestParsing(null, null, i);
      }, 250);
    } else if (id.match(/[0-9]/g)) {
        post =
          uri.slice(0, uri.length - 10);
      console.log(post)
      setTimeout(function () {
        if (menu.findIndex((item) => item.title === id))
          i = menu.findIndex((item) => item.title === id);
        if (i !== -1)
          xmlRequestParsing(null, null, i);
        else if (i === -1)
          filterInputResponse(location.href.split(`?`)[1]);
        _toggle.style.display = `none`;
        _visit.style.display = `none`;
        guideOnScreen = onScreen;
        onScreen = false;
        sideBarDisplay(onScreen);
      }, 250);
    }
  } else if (location.search.split(`?q=`)[1]) {
    var uri = location.search.split(`?q=`)[1];
    var uri = uri.toLowerCase().space();
    _toggle.style.display = `none`;
    guideOnScreen = true;
    setTimeout(function () {
      if (showSplash == true) _check.style.visibility = `visible`;
      topMenuBarDisplay(topBar);
      filterInputResponse(uri);
    }, 250);
  } else if (isNaN(parseFloat(post)) && !isFinite(post)) {
    setTimeout(function () {
      if (Reader == false) {
        _sb.style.display = `block`;
        _visit.style.display = `flex`;
        guideOnScreen = true;
        _guest.focus();
      } else if (Reader == true) {
        justRead = true;
        onlyImages = true;
        xmlRequestParsing(null, null, anyRandomMenuObject());
      }
    }, 250);
  }
  if (
    isNaN(parseFloat(post)) && !isFinite(post) &&
    _main.clientWidth >= 426
  ) {
    sideBarDisplay(onScreen);
  } else if (!isNaN(parseFloat(post)) && isFinite(post) && showSplash == true)
    if (showSplash == true) _check.style.visibility = `visible`;

  if (_main.clientWidth <= 425) {
    setTimeout(function () {
      guideOnScreen = onScreen;
      onScreen = false;
      sideBarDisplay(onScreen);
      sideBarCenter = false;
      sideBarStar(document.querySelector(`.sideBarCenter`), false)
      expand = false;
      Blocks = true;
      List = false;
    }, 250)
  }
}, 100)
