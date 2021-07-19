let listingIndexBuild = function (
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
  object.src = indexImage;
  detail.append(object);
  detail.append(match);
  detail.append(buffer);
  key.append(detail);
  return key;
};
