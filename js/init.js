/*

### Init.js Unique URI Identifying.

  Init.js does some handling of location.


  * Translation Example
  > /?q=[translations]

  > /?q=technology


  * Query Example
  > /?q=example+query

  >  filter response without passthrough from init.js fails to search results.


  * Hash Example
  > /?[hash] in headXML.js

  > /?[uX] Used in Copy Post appends time converted to base 36.

  > /?[uX]aZjk1 loads guide with progress and guideImage in baseFunctions.js


  * Feed Example
  > /?q=&unique-identifier fallback to query fails to bing search.

  >/?q=&[hash] not supported filter response.

  >/?q=&tech menu objects found filter response.

  >/?q=&technology translation found populate.

  > /?q=&abc-technology found one, unique passthrough.

  > /?q=&jquery not found pass through xml search.<br>

    * Query Feed Example

     /?q=example+query&unique-identifier

     /?q=california&abc-fresno

      will load feed return to query.

*/

setTimeout(function() {

    let directory = `js/themes/`;
    let extension = `.js`;

    for (var visual of visuals) {
      let path = directory + visual + extension;
      let script = document.createElement(`script`);
      script.type = `text/javascript`;
      script.src = path;
      document.getElementsByTagName(`head`)[0].appendChild(script);
      if (set === visual) script.onload =
      (function () {
        let startup = setInterval(function () {
          setTimeout(function() {
            if (typeof eval(visual) === `function`) {
                window[set]();
                clearInterval(startup);
            }
          }, 5)
        }, 10);
      })();
    }

    for (i = 0; i <= themes.length - 1; i++) {
      (function (i) {
        var theme = themes[i].name;
        document.addEventListener(
          `click`,
          function (event) {
            if (event.target.classList.contains(theme)) {
              initial = theme;
              window[theme]();
            }
          },
          false
        );
      })(i);
    }

  if (
    !location.href.match(`\\?fbclid`) &&
    !location.search.split(`?q=`)[1] &&
    !location.href.match(`\\?\\+1`) &&
    !location.href.match(`\\?\\#`) &&
    location.href.split(`?`)[1]
  ) {
    var uri = location.href.split(`?`)[1];
    if (uri.match(/^[a-zA-Z0-9]+$/i)) {
      let id = uri.slice(0, 2);
      post = parseInt(uri.slice(2), 36);
      let i = menu.findIndex((item) => item.hash === id);

      if (!i === -1) {
        _toggle.style.display = `block`;
        _visit.style.display = `flex`;
      } else {
        guideOnScreen = onScreen;
        onScreen = false;
        sideBarDisplay(onScreen);
        _toggle.style.display = `none`;
        _visit.style.display = `none`;
        _guide.style.display = `flex`;
        _main.classList.add(`guide`)
        _top.style.display = `none`;
        setTimeout(function () {
          filterInputResponse(true, false, menu[i].id.space(), false);
        }, 250);
      }
    }
  }
  else if (location.search.split(`?q=`)[1]) {
    var uri = location.search.split(`?q=`)[1];
    var uri = uri.replace(/\?\+1|\+1/, ``);
    var uri = uri.match(/[^&]+/g);
    if (location.hash.substr(1).match(/\+1/g))
      post = location.hash.substr(1).replace(/\+1/g, ``);
    else post = location.hash.substr(1);
    setTimeout(function () {
      topMenuBarDisplay(topBar)
      if (!uri[1] && location.href.match(`\\&`))
        filterInputResponse(true, false, uri[0], false);
      else if (!uri[1]) filterInputResponse(false, false, uri[0], true);
      else if (uri[1]) filterInputResponse(true, uri[0], uri[1], false);
    }, 250);
  }

}, 5)
