/*

### Init.js Unique URI Identifying.

  Init.js does some handling of location.

  * Contrast Example
  > /?+1 [root]

  >  /[uri]+1

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

  >  /?[uX]aZjk1+1 loads guide with contrast to op.

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

if (
  !location.search.split("?q=")[1] &&
  !location.href.match("\\?\\+1") &&
  !location.href.match("\\?\\#") &&
  location.href.split("?")[1]
) {
  var uri = location.href.split("?")[1];
  if (location.href.match("\\+1")) {
    uri = uri.replace(/\?\+1|\+1/, "");
    if (!uri.match(/^[a-zA-Z0-9]+$/i)) {
      let i = -1;
    }
  }
  if (uri.match(/^[a-zA-Z0-9]+$/i)) {
    let id = uri.slice(0, 2);
    post = parseInt(uri.slice(2), 36);
    let i = menu.findIndex((item) => item.hash === id);

    if (!i === -1) {
      _toggle.style.display = "block";
      _visit.style.display = "flex";
    } else {
      init();
      guideOnScreen = onScreen;
      onScreen = false;
      filterInputResponse(true, false, menu[i].id.space(), false);
      _toggle.style.display = "none";
      _top.style.display = "none";
    }
  }
} else if (location.href.match("\\?\\+1")) _visit.style.display = "flex";
  else if (location.search.split("?q=")[1]) {
  var uri = location.search.split("?q=")[1];
  var uri = uri.replace(/\?\+1|\+1/, "");
  var uri = uri.match(/[^&]+/g);
  if (location.hash.substr(1).match(/\+1/g))
    post = location.hash.substr(1).replace(/\+1/g, "");
  else post = location.hash.substr(1);
  init();
  _toggle.style.display = "none";
  _top.style.display = "block";
  setTimeout(function() {
    if (!uri[1] && location.href.match("\\&"))
      filterInputResponse(true, false, uri[0], false);
    else if (!uri[1]) filterInputResponse(false, false, uri[0], true);
    else if (uri[1]) filterInputResponse(true, uri[0], uri[1], false);
  }, 250)
} else if (!location.href.match("\\?") || location.href.match("\\?#"))
  _visit.style.display = "flex";
