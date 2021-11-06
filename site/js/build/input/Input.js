let listingIndexBuild = function(
  indexId,
  indexObject,
  indexImage,
  indexCategory,
  indexHash,
  suggested,
  index
) {
  let contentText;
  let buffer = document.createElement(`div`);
  let detail = document.createElement(`div`);
  let object = document.createElement(`img`);
  let match = document.createElement(`div`);
  let key = document.createElement(`div`);
  match.innerHTML = match.innerHTML =
    `&emsp;${indexCategory}<br>&emsp;${indexId}`;
  key.setAttribute(`aria-object`, indexObject);
  match.classList.add(`textMatch`);
  detail.classList.add(`detail`);
  buffer.classList.add(`buffer`);
  if (suggested) contentText = `suggested...`;
  else contentText = `${indexHash}`;
  buffer.innerHTML = contentText;
  object.classList.add(`input`);
  key.classList.add(`index`);
  var src =
    `https://raw.githubusercontent.com/acktic/xml-publishers-images/master/${indexImage}`
  var request = new XMLHttpRequest();
  request.open("GET", cors + src, true);
  request.setRequestHeader(`Access-Control-Allow-Origin`, `*`);
  request.setRequestHeader(`X-Requested-With`, `*`);
  request.responseType = "blob";
  request.onload = function() {
    object.src = src;
  }
  request.onloadend = function() {
    if (request.status == 404) {
      object.src = `site/images/webp/${indexImage}`
    }
  }
  request.setRequestHeader(`Content-Type`, `text/html; charset=utf-8`);
  request.setRequestHeader(`Accept`, `text/html; charset=utf-8`);
  request.setRequestHeader(`Access-Control-Allow-Origin`, `*`);
  request.setRequestHeader(`X-Requested-With`, `*`);
  request.send();
  detail.append(object);
  detail.append(match);
  detail.append(buffer);
  key.append(detail);
  return key;
};
