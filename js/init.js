if (
  !location.search.split("?q=")[1] &&
  location.href.split("?")[1] &&
  !location.href.match("\\?\\#")
) {
  var uri = location.href.split("?")[1];
  if (location.href.match("\\+1")) {
    uri = uri.replace(/\?\+1|\+1/, "");
    if (!uri.match(/^[a-zA-Z0-9]+$/i)) {
      contrast = contrast != true;
      op = op != true;
      let i = -1;
    } else {
      contrast = contrast != true;
      op = op != true;
    }
  }

  if (uri.match(/^[a-zA-Z0-9]+$/i)) {
    let id = uri.slice(0, 2);
    post = parseInt(uri.slice(2), 36);
    let i = menu.findIndex((item) => item.hash === id);

    if (!i === -1) {
      document.querySelector("#visit").style.visibility = "visible";
      document.querySelector("#toggle").style.display = "block";
    } else {
      init();
      guideOnScreen = onScreen;
      onScreen = false;
      filterInputResponse(true, false, menu[i].id.space(), false);
      document.querySelector("#toggle").style.display = "none";
      document.querySelector("#top").style.display = "none";
    }
  }
} else if (location.href.match("\\+1")) {
  contrast = contrast != true;
  op = op != true;
} else if (location.search.split("?q=")[1]) {
  var uri = location.search.split("?q=")[1];
  var uri = uri.replace(/\?\+1|\+1/, "");
  var uri = uri.match(/[^&]+/g);
  if (location.hash.substr(1).match(/\+1/g))
    post = location.hash.substr(1).replace(/\+1/g, "");
  else post = location.hash.substr(1);
  init();
  let width = document.querySelector("#main").clientWidth / 30;
  document.querySelector("#toggle").style.display = "none";
  document.querySelector("#top").style.display = "block";
  if (!uri[1] && location.href.match("\\&"))
    filterInputResponse(true, false, uri[0], false);
  else if (!uri[1]) filterInputResponse(false, false, uri[0], true);
  else if (uri[1]) filterInputResponse(true, uri[0], uri[1], false);
}
