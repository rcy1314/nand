let guideBuildYoutube = function (pubArray) {
  let object = document.createElement(`iframe`);
  let publish = document.createElement(`div`);
  let youtube = document.createElement(`div`);
  let sticky = document.createElement(`div`);
  let blur = document.createElement(`div`);
  let wrap = document.createElement(`div`);
  let head = document.createElement(`div`);
  let ago = document.createElement(`div`);
  let yt = document.createElement(`div`);
  youtube.setAttribute(`aria-item`, pubArray.menuObject);
  wrap.setAttribute(`ext`, pubArray.externalURI);
  sticky.classList.add(`yt`, `item`, `sticky`);
  youtube.setAttribute(`ext`, pubArray.re);
  publish.innerHTML = pubArray.publish;
  sticky.style.display = `none`;
  ago.innerHTML = pubArray.dst;
  youtube.style.width = `60vw`;
  youtube.classList.add(`src`);
  head.classList.add(`header`);
  publish.classList.add(`pub`);
  blur.classList.add(`blur`);
  wrap.classList.add(`wrap`);
  object.src = pubArray.src;
  ago.classList.add(`ago`);
  yt.classList.add(`yt`);
  youtube.id = `yt`;
  head.append(
    courtesyBuild(
      menu[pubArray.menuObject].id.match(/([^\/]+)$/g),
      pubArray.image,
      pubArray.externalURI
    )
  );
  head.append(
    copyInputAttribute(
      pubArray.src,
      pubArray.share,
      pubArray.externalURI
    )
  );
  yt.append(object);
  youtube.append(yt);
  wrap.append(head);
  wrap.append(publish);
  wrap.append(ago);
  youtube.append(wrap);
  sticky.append(youtube);
  return sticky;
};
