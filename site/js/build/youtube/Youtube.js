let youtubeHTMLBuild = function (htmlArray) {
  let object = document.createElement(`iframe`);
  let youtube = document.createElement(`div`);
  let publish = document.createElement(`div`);
  let item = document.createElement(`div`);
  let head = document.createElement(`div`);
  let view = document.createElement(`div`);
  let ago = document.createElement(`div`);
  publish.innerHTML += htmlArray.truncate + htmlArray.more;
  item.setAttribute(`aria-object`, htmlArray.menuObject);
  item.setAttribute(`aria-item`, htmlArray.pubIndex);
  item.setAttribute(`ext`, htmlArray.externalURI);
  publish.setAttribute(`text`, htmlArray.title);
  object.setAttribute(`allowfullscreen`, true);
  object.src = htmlArray.videoSource;
  view.innerHTML = htmlArray.views
  ago.innerHTML = htmlArray.dst;
  head.classList.add(`header`);
  publish.classList.add(`pub`);
  youtube.classList.add(`yt`);
  view.classList.add(`views`);
  item.classList.add(`item`);
  ago.classList.add(`ago`);
  item.id = `yt`;
  head.append(htmlArray.courtesy);
  item.append(head);
  youtube.append(object);
  item.append(youtube);
  item.append(publish);
  item.append(ago);
  item.append(view);
  item.append(
    copyInputAttribute(
      htmlArray.src,
      htmlArray.share,
      htmlArray.externalURI
    )
  );
  return item;
};
