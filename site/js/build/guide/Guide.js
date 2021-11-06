let guideBuild = function(pubArray) {
  let filterBlur = document.createElement(`div`);
  let publish = document.createElement(`div`);
  let sticky = document.createElement(`div`);
  let object = document.createElement(`img`);
  let image = document.createElement(`div`);
  let blur = document.createElement(`div`);
  let wrap = document.createElement(`div`);
  let head = document.createElement(`div`);
  let src = document.createElement(`div`);
  let ago = document.createElement(`div`);
  sticky.setAttribute(`aria-item`, pubArray.menuObject);
  sticky.setAttribute(`aria-object`, pubArray.pubIndex);
  sticky.setAttribute(`ext`, pubArray.externalURI);
  filterBlur.classList.add(`filterBlur`);
  sticky.classList.add(`item`, `sticky`);
  object.classList.add(`guide`, `img`);
  sticky.style.display = `none`;
  head.classList.add(`header`);
  image.classList.add(`image`);
  publish.classList.add(`pub`);
  blur.classList.add(`blur`);
  wrap.classList.add(`wrap`);
  src.classList.add(`src`);
  ago.classList.add(`ago`);
  image.append(
    sideBarThemeBuild(`fa-heart`)
  );
  if (
    safeSearchIDs.includes(menu[id].id)
  )
    image.append(filterBlur);
  image.append(object);
  src.append(image);
  head.append(
    courtesyBuild(
      menu[pubArray.menuObject].id.match(/([^\/]+)$/g),
      pubArray.image,
      pubArray.externalURI
    )
  );
  publish.innerHTML = pubArray.title;
  ago.innerHTML = pubArray.dst;
  wrap.append(head);
  wrap.append(publish);
  wrap.append(ago);
  wrap.append(
    copyInputAttribute(
      pubArray.src,
      pubArray.share,
      pubArray.externalURI
    )
  );
  sticky.append(src);
  sticky.append(wrap);
  return sticky;
};
