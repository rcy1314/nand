let categoryBuild = function(
  objectId,
  objectIndex,
  objectImage,
  objectHash,
  objectDescription,
  objectMedia
) {
  let populate = document.createElement(`div`);
  let display = document.createElement(`div`);
  let select = document.createElement(`div`);
  let object = document.createElement(`img`);
  let media = document.createElement(`div`);
  let hash = document.createElement(`div`);
  let des = document.createElement(`div`);
  let id = document.createElement(`div`);
  populate.setAttribute(`aria-object`, objectIndex);
  populate.classList.add(`populate`);
  display.classList.add(`display`);
  select.classList.add(`select`);
  object.classList.add(`webp`);
  media.classList.add(`media`);
  hash.classList.add(`hash`);
  id.classList.add(`title`);
  des.classList.add(`des`);
  des.innerHTML = objectDescription;
  media.innerHTML = objectMedia;
  hash.innerHTML = objectHash;
  var src =
    `https://raw.githubusercontent.com/acktic/xml-publishers-images/master/${objectImage}`
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
      object.src = `site/images/webp/${objectImage}`
    }
  }
  request.setRequestHeader(`Content-Type`, `text/html; charset=utf-8`);
  request.setRequestHeader(`Accept`, `text/html; charset=utf-8`);
  request.setRequestHeader(`Access-Control-Allow-Origin`, `*`);
  request.setRequestHeader(`X-Requested-With`, `*`);
  request.send();
  id.innerHTML = objectId;
  display.append(object);
  select.append(display);
  display.append(id);
  select.append(media);
  select.append(hash);
  select.append(des);
  populate.append(select);
  return populate;
};
