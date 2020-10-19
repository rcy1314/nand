if (location.href.split("?")[1] && !location.search.split("?q=")[1] && !location.href.match("\\?\\#")) {
  var uri = location.href.split("?")[1];
  if (location.href.match("\\+1")) {
    uri = uri.replace(/\?\+1|\+1/, "");
    console.log(uri)
    if (!uri.match(/^[a-zA-Z0-9]+$/i)) {
      contrast = contrast != true;
      op = op != true;
      i = -1;

    } else {
      contrast = contrast != true;
      op = op != true;

    }
  }

  if (uri.match(/^[a-zA-Z0-9]+$/i)) {
    var id = uri.slice(0, 2);
    var i = menu.findIndex((item) => item.hash === id);
    post = parseInt(uri.slice(2), 36);
  }

  if (i === -1)
    ready(() => {
      document.querySelector("#visit").style.visibility = "visible";
      document.querySelector("#toggle").style.display = "block";
    });
  else {
    ready(() => {
      init();
      onScreen = false;
      document.querySelector("#top").style.display = "none";
      document.querySelector("#toggle").style.display = "none";
      filterInputResponse(true, false, menu[i].id.space(), false);
    });
  }
}

if (location.href.match("\\+1") && !i) {
  contrast = contrast != true;
  op = op != true;
}

if (location.search.split("?q=")[1]) {
  var uri = location.search.split("?q=")[1];
  uri = uri.replace(/\?\+1|\+1/, "");
  uri = uri.match(/[^&]+/g);
  if (location.hash.substr(1).match(/\+1/g))
    post = location.hash.substr(1).replace(/\+1/g, "");
  else post = location.hash.substr(1);

  ready(() => {
    init();
    document.querySelector("#toggle").style.display = "none";
    document.querySelector("#top").style.display = "block";
    var width = document.querySelector("#main").clientWidth / 30;
    if (!uri[1] && location.href.match("\\&"))
      filterInputResponse(true, false, uri[0], false);
    else if (!uri[1]) filterInputResponse(false, false, uri[0], true);
    else if (uri[1]) filterInputResponse(true, uri[0], uri[1], false);
  });
} else if (!location.search.split("?")[1]) {
  ready(() => {
    document.querySelector("#visit").style.visibility = "visible";
  });
}
