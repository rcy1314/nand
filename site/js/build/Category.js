let categoryBuild = function (
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
  object.src = objectImage;
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
