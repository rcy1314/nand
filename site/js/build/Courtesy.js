let courtesyBuild = function (
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
  object.src = objectImage;
  ahref.append(bold);
  courtesy.append(object);
  courtesy.append(ahref);
  if (
    menu[id].id.match(/Youtube/g) && youtubeMedia
  )
    courtesy.append(
      youtubeAttributeBuild()
    );
  else courtesy.append(
    attributeBuild()
  );
  return courtesy;
};

let copyInputAttribute = function (
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
