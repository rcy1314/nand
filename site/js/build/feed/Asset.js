let assetBuild = function (
  assetIndex,
  assetImage,
  assetId
) {
  let object = document.createElement(`div`);
  let ahref = document.createElement(`a`);
  let img = document.createElement(`img`);
  object.setAttribute(`aria-object`, assetIndex);
  ahref.setAttribute(`title`, assetId);
  object.classList.add(`asset`);
  ahref.classList.add(`query`);
  img.classList.add(`entity`);
  var src =
  `https://raw.githubusercontent.com/acktic/xml-publishers-images/master/${assetImage}`
  var request = new XMLHttpRequest();
  request.open("GET", cors + src, true);
  request.setRequestHeader(`Access-Control-Allow-Origin`, `*`);
  request.setRequestHeader(`X-Requested-With`, `*`);
  request.responseType = "blob";
  request.onload = function () {
      img.src = src;
  }
  request.onloadend = function() {
    if (request.status == 404){
      img.src = `site/images/webp/${assetImage}`
    }
  }
  request.setRequestHeader(`Content-Type`, `text/html; charset=utf-8`);
  request.setRequestHeader(`Accept`, `text/html; charset=utf-8`);
  request.setRequestHeader(`Access-Control-Allow-Origin`, `*`);
  request.setRequestHeader(`X-Requested-With`, `*`);
  request.send();
  ahref.innerHTML =
  `${
    truncate(
      String(
        assetId.match(/[^\/]+$/g
        )
      ),
      12,
      false
    )
  }`;
  object.append(img);
  object.append(ahref);
  return object;
};
