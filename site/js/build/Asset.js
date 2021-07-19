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
  img.src = assetImage;
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
