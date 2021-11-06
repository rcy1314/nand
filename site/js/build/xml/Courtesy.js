let courtesyBuild = function(
  objectId,
  objectImage,
  objectExternal
) {
  let courtesy = document.createElement(`div`);
  let object = document.createElement(`img`);
  let ahref = document.createElement(`a`);
  let bold = document.createElement(`b`);
  courtesy.setAttribute(
    `ext`,
    objectExternal
  );
  courtesy.classList.add(`courtesy`);
  object.classList.add(`ext`);
  ahref.classList.add(`exit`);
  bold.innerHTML = objectId;
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
  ahref.append(bold);
  courtesy.append(object);
  courtesy.append(ahref);
  courtesy.append(
    attributeBuild()
  );
  return courtesy;
};

let copyInputAttribute = function(
  src,
  share,
  externalURI
) {
  let construct = document.createElement(`div`);
  let sticky = document.createElement(`input`);
  let source = document.createElement(`input`);
  let url = document.createElement(`input`);
  source.classList.add(`source`);
  sticky.classList.add(`share`);
  url.classList.add(`url`);
  url.value = externalURI;
  sticky.value = share;
  source.value = src;
  construct.append(url);
  construct.append(sticky);
  construct.append(source);
  return construct;
};
