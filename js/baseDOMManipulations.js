var groupBuild = function () {
  let main = document.querySelector(`#main`);
  let group = document.createElement(`div`);
  group.innerHTML = `<div class='result'></div>`;
  group.id = `group`;
  main.append(group);
};

var stageBuild = function () {
  let object = document.createElement(`div`);
  let center = document.createElement(`div`);
  let channel = document.createElement(`div`);
  object.id = `xml`;
  center.classList.add(`center`);
  channel.classList.add(`channel`);
  center.append(channel);
  object.append(center);
  let status = document.createElement(`div`);
  status.classList.add(`status`);
  let content = document.createElement(`div`);
  content.classList.add(`content`);
  let suggestions = document.createElement(`div`);
  suggestions.classList.add(`suggestions`);
  content.append(status);
  content.append(suggestions);
  object.append(content);
  return object;
};

var footerBuild = function () {
  let object = document.createElement(`div`);
  object.id = `bottom`;
  let previous = document.createElement(`div`);
  previous.classList.add(`btn`, `back`);
  previous.setAttribute(`aria-item`, back());
  let span = document.createElement(`span`);
  span.classList.add(`front`);
  previous.append(span);
  let front = document.createElement(`span`);
  front.classList.add(`flip-front`);
  front.innerHTML = `Previous`;
  previous.append(front);
  let backward = document.createElement(`span`);
  backward.classList.add(`flip-back`);
  backward.innerHTML = `${String(menu[back()].id.match(/[^\/]+$/g)).substring(
    0,
    13
  )}...`;
  previous.append(backward);
  let bottom = document.createElement(`div`);
  bottom.classList.add(`bottom`);
  bottom.innerHTML = `Return`;
  let next = document.createElement(`div`);
  next.classList.add(`btn`, `next`);
  next.setAttribute(`aria-item`, forward());
  let ahead = document.createElement(`span`);
  ahead.classList.add(`front`);
  next.append(ahead);
  let flip = document.createElement(`span`);
  flip.classList.add(`flip-front`);
  flip.innerHTML = `Next`;
  next.append(flip);
  let id = document.createElement(`span`);
  id.classList.add(`flip-back`);
  id.innerHTML = `${String(menu[forward()].id.match(/[^\/]+$/g)).substring(
    0,
    13
  )}...`;
  next.append(id);
  object.append(previous);
  object.append(bottom);
  object.append(next);
  return object;
};

var guideBuild = function (pubArray) {
  let blur = document.createElement(`div`);
  blur.classList.add(`blur`);
  let sticky = document.createElement(`div`);
  sticky.classList.add(`item`, `sticky`);
  let src = document.createElement(`div`);
  src.classList.add(`item`, `src`);
  src.setAttribute(`aria-item`, pubArray.id);
  src.setAttribute(`ext`, pubArray.externalURI);
  let image = document.createElement(`div`);
  image.classList.add(`image`);
  image.append(sideBarThemeBuild(`fa-heart`));
  let object = document.createElement(`img`);
  object.id = pubArray.element;
  object.classList.add(`guide`, `img`);
  image.append(object);
  src.append(image);
  let wrap = document.createElement(`div`);
  wrap.classList.add(`wrap`);
  wrap.setAttribute(`ext`, pubArray.externalURI);
  let head = document.createElement(`div`);
  head.classList.add(`header`);
  head.append(
    courtesyBuild(
      menu[pubArray.id].id.match(/([^\/]+)$/g),
      pubArray.image,
      pubArray.externalURI
    )
  );
  wrap.append(head);
  let publish = document.createElement(`div`);
  publish.classList.add(`pub`);
  publish.innerHTML = pubArray.title;
  wrap.append(publish);
  let ago = document.createElement(`div`);
  ago.classList.add(`ago`);
  ago.innerHTML = pubArray.dst;
  wrap.append(ago);
  sticky.append(src);
  sticky.append(wrap);
  wrap.append(
    copyInputAttribute(pubArray.src, pubArray.share, pubArray.externalURI)
  );
  return sticky;
};

var guideBuildYoutube = function (pubArray) {
  let blur = document.createElement(`div`);
  blur.classList.add(`blur`);
  let sticky = document.createElement(`div`);
  sticky.classList.add(`yt`, `item`, `sticky`);
  let youtube = document.createElement(`div`);
  youtube.classList.add(`src`);
  youtube.id = `yt`;
  youtube.style.width = `60vw`;
  youtube.setAttribute(`aria-item`, pubArray.id);
  youtube.setAttribute(`ext`, pubArray.re);
  let yt = document.createElement(`div`);
  yt.classList.add(`yt`);
  let object = document.createElement(`iframe`);
  object.src = pubArray.src;
  yt.append(object);
  youtube.append(yt);
  let wrap = document.createElement(`div`);
  wrap.classList.add(`wrap`);
  wrap.setAttribute(`ext`, pubArray.externalURI);
  let head = document.createElement(`div`);
  head.classList.add(`header`);
  head.append(
    courtesyBuild(
      menu[pubArray.id].id.match(/([^\/]+)$/g),
      pubArray.image,
      pubArray.externalURI
    )
  );
  wrap.append(head);
  let publish = document.createElement(`div`);
  publish.classList.add(`pub`);
  publish.innerHTML = pubArray.title;
  wrap.append(publish);
  let ago = document.createElement(`div`);
  ago.classList.add(`ago`);
  ago.innerHTML = pubArray.dst;
  wrap.append(ago);
  youtube.append(wrap);
  head.append(
    copyInputAttribute(pubArray.src, pubArray.share, pubArray.externalURI)
  );
  sticky.append(youtube);
  return sticky;
};

var contentBuild = function (oldestPost, recentPost, postsCount, menuIndex) {
  let filter = document.createElement(`div`);
  filter.classList.add(`filter`);
  filter.setAttribute(`aria-item`, menu[menuIndex].ext);
  let select = document.createElement(`div`);
  select.classList.add(`select`);
  let display = document.createElement(`div`);
  display.classList.add(`display`);
  let object = document.createElement(`img`);
  object.classList.add(`webp`);
  object.src = menu[menuIndex].image.image();
  filter.append(object);
  let ahref = document.createElement(`a`);
  ahref.classList.add(`tag`);
  ahref.setAttribute(`title`, menu[menuIndex].id);
  ahref.innerHTML = menu[menuIndex].id.match(/[^\/]+$/g);
  filter.append(ahref);
  let info = document.createElement(`div`);
  info.classList.add(`info`);
  let des = document.createElement(`div`);
  des.classList.add(`about`);
  des.innerHTML = `&emsp;${menu[menuIndex].description}<br>`;
  des.innerHTML += `<br>Most Recent<div style='float:right'>${recentPost}</div>`;
  des.innerHTML += `<br>Oldest post<div style='float:right'>${oldestPost}</div>`;
  des.innerHTML += `<br>Posts<div style='float:right'>${postsCount}</div>`;
  info.append(des);
  if (showDescription == false) des.style.visibility = `hidden`
  let construct = document.createElement(`div`);
  construct.classList.add(`construct`);
  construct.append(filter);
  construct.append(info);
  return construct;
};

var translationBuild = function (translation) {
  let object = document.createElement(`div`);
  object.classList.add(`translation`);
  object.setAttribute(`aria-item`, translation);
  object.innerHTML = `<img class='quickTranslation' src='images/${translation}.webp'>
   <a class='category' ext='${translation}'>
    ${translation}
   </a>
  `;
  return object;
};

var assetBuild = function (assetIndex, assetImage, assetId) {
  let object = document.createElement(`div`);
  object.classList.add(`asset`);
  object.setAttribute(`aria-item`, assetIndex);
  object.innerHTML = `<img class='entity' src='${assetImage}'>
   <a class='query' title='${assetId}'>
    ${String(assetId.match(/[^\/]+$/g)).substring(0, 9)}...
   </a>
  `;
  return object;
};

var suggestBuild = function (
  objectMedia,
  objectIndex,
  objectImage,
  objectId,
  objectCategory
) {
  let object = document.createElement(`div`);
  object.classList.add(`combine`);
  let circle = document.createElement(`img`);
  circle.classList.add(`circle`);
  circle.src = objectImage;
  object.append(circle);
  let suggest = document.createElement(`div`);
  suggest.classList.add(`suggest`);
  suggest.setAttribute(`aria-item`, objectIndex);
  suggest.title = objectId;
  let bold = document.createElement(`b`);
  bold.classList.add(`bold`);
  bold.innerHTML = `${String(objectId.match(/[^\/]+$/g)).substring(
    0,
    19
  )}...<br>`;
  suggest.append(bold);
  object.append(suggest);
  let define = document.createElement(`div`);
  define.classList.add(`random`);
  define.innerHTML = objectMedia;
  suggest.append(define);
  let cat = document.createElement(`a`);
  cat.setAttribute(`aria-item`, objectCategory);
  cat.title = objectCategory;
  cat.innerHTML = objectCategory;
  object.append(cat);
  return object;
};

var categoryBuild = function (
  objectId,
  objectIndex,
  objectImage,
  objectHash,
  objectDescription,
  objectMedia
) {
  let populate = document.createElement(`div`);
  populate.classList.add(`populate`);
  populate.setAttribute(`aria-item`, objectIndex);
  let select = document.createElement(`div`);
  select.classList.add(`select`);
  let display = document.createElement(`div`);
  display.classList.add(`display`);
  let object = document.createElement(`img`);
  object.classList.add(`webp`);
  object.src = objectImage;
  display.append(object);
  let hash = document.createElement(`div`);
  hash.classList.add(`hash`);
  hash.innerHTML = objectHash;
  let media = document.createElement(`div`);
  media.classList.add(`media`);
  media.innerHTML = objectMedia;
  let id = document.createElement(`div`);
  id.classList.add(`title`);
  id.innerHTML = objectId;
  let des = document.createElement(`div`);
  des.classList.add(`description`);
  des.innerHTML = objectDescription;
  display.append(object);
  select.append(display);
  select.append(media);
  select.append(hash);
  select.append(id);
  select.append(des);
  populate.append(select);
  return populate;
};

let attributeBuild = function () {
  let object = document.createElement(`div`);
  object.classList.add(`copy`);
  let attr = document.createElement(`div`);
  attr.classList.add(`attr`, `fa-ellipsis-h`);
  let attribute = document.createElement(`div`);
  attribute.classList.add(`attribute`);
  object.append(attr);
  attr.append(attribute);
  let site = document.createElement(`div`);
  site.classList.add(`site`);
  site.innerHTML = `Copy Url`;
  site.append(sideBarThemeBuild(`fa-at`));
  attribute.append(site);
  let copy = document.createElement(`div`);
  copy.classList.add(`post`);
  copy.innerHTML = `Copy Post`;
  copy.append(sideBarThemeBuild(`fa-share`));
  attribute.append(copy);
  let picture = document.createElement(`div`);
  picture.classList.add(`picture`);
  picture.innerHTML = `Copy Source`;
  picture.append(sideBarThemeBuild(`fa-camera`));
  attribute.append(picture);
  return object;
};

var courtesyBuild = function (objectId, objectImage, objectExternal) {
  let courtesy = document.createElement(`div`);
  courtesy.classList.add(`courtesy`);
  let object = document.createElement(`img`);
  object.src = objectImage;
  let ahref = document.createElement(`a`);
  ahref.setAttribute(`ext`, objectExternal);
  let bold = document.createElement(`b`);
  bold.innerHTML = objectId;
  ahref.append(bold);
  courtesy.append(object);
  courtesy.append(ahref);
  courtesy.append(attributeBuild());
  return courtesy;
};

let copyInputAttribute = function (src, share, externalURI) {
  let url = document.createElement(`input`);
  url.classList.add(`url`);
  url.value = externalURI;
  let sticky = document.createElement(`input`);
  sticky.classList.add(`share`);
  sticky.value = share;
  let source = document.createElement(`input`);
  source.classList.add(`source`);
  source.value = src;
  let construct = document.createElement(`div`);
  construct.append(url);
  construct.append(sticky);
  construct.append(source);
  return construct;
};

var youtubeHTMLBuild = function (htmlArray) {
  let item = document.createElement(`div`);
  item.id = `yt`;
  item.classList.add(`item`);
  item.setAttribute(`aria-object`, htmlArray.menuObject);
  item.setAttribute(`aria-item`, htmlArray.pubIndex);
  item.setAttribute(`ext`, htmlArray.externalURI);
  let head = document.createElement(`div`);
  head.classList.add(`header`);
  head.append(htmlArray.courtesy);
  item.append(head);
  let youtube = document.createElement(`div`);
  youtube.classList.add(`yt`);
  let object = document.createElement(`iframe`);
  object.src = htmlArray.videoSource;
  youtube.append(object);
  youtube.innerHTML += htmlArray.views;
  item.append(youtube);
  let publish = document.createElement(`div`);
  publish.classList.add(`pub`);
  publish.setAttribute(`text`, htmlArray.title);
  publish.innerHTML += htmlArray.truncate + htmlArray.more;
  let ago = document.createElement(`div`);
  ago.classList.add(`ago`);
  ago.innerHTML = htmlArray.dst;
  item.append(publish);
  item.append(ago);
  item.append(
    copyInputAttribute(htmlArray.src, htmlArray.share, htmlArray.externalURI)
  );
  return item;
};

var xmlHTMLBuild = function (htmlArray) {
  let item = document.createElement(`div`);
  item.classList.add(`item`);
  item.setAttribute(`aria-object`, htmlArray.menuObject);
  item.setAttribute(`aria-item`, htmlArray.pubIndex);
  item.setAttribute(`ext`, htmlArray.externalURI);
  let head = document.createElement(`div`);
  head.classList.add(`header`);
  head.append(htmlArray.courtesy);
  item.append(head);
  let classic = document.createElement(`div`);
  classic.classList.add(`classic`);
  let pending = document.createElement(`div`);
  pending.classList.add(`blink`, `pending`);
  //let loader = document.createElement(`div`);
  //loader.classList.add(`loader`, `double-circle`);
  //pending.append(loader);
  classic.append(pending);
  let image = document.createElement(`div`);
  image.classList.add(`image`);
  image.append(sideBarThemeBuild(`fa-heart`));
  let filterBlur = document.createElement(`div`);
  filterBlur.classList.add(`filterBlur`);
  image.append(filterBlur);
  let object = document.createElement(`img`);
  object.id = htmlArray.pubIndex;
  object.classList.add(`img`);
  if (fadeIntoView == true) object.classList.add(`hidden`)
  image.append(object);
  classic.append(image);
  let wrap = document.createElement(`div`);
  wrap.classList.add(`wrap`);
  let publish = document.createElement(`div`);
  publish.classList.add(`pub`);
  publish.setAttribute(`text`, htmlArray.title);
  publish.innerHTML = htmlArray.truncate + htmlArray.more;
  wrap.append(publish);
  wrap.innerHTML += htmlArray.searchExternal;
  let ago = document.createElement(`div`);
  ago.classList.add(`ago`, `zulu`);
  ago.innerHTML = htmlArray.dst;
  wrap.append(ago);
  classic.append(wrap);
  item.append(classic);
  item.append(
    copyInputAttribute(htmlArray.src, htmlArray.share, htmlArray.externalURI)
  );
  return item;
};

var listingIndexBuild = function (
  indexId,
  indexObject,
  indexImage,
  indexCategory,
  suggested,
  index
) {
  let key = document.createElement(`div`);
  key.classList.add(`index`);
  key.setAttribute(`aria-item`, indexObject);
  if (suggested == true) var contentText = `suggested...`;
  else var contentText = ``;
  let detail = document.createElement(`div`);
  detail.classList.add(`detail`);
  let object = document.createElement(`img`);
  object.classList.add(`input`);
  object.src = indexImage;
  detail.append(object);
  let match = document.createElement(`div`);
  match.classList.add(`textMatch`);
  match.innerHTML = match.innerHTML = `&emsp;${indexCategory}<br>&emsp;${indexId}`;
  detail.append(match);
  let buffer = document.createElement(`div`);
  buffer.classList.add(`buffer`);
  buffer.innerHTML = contentText;
  detail.append(buffer);
  key.append(detail);
  return key;
};

var sideBarThemeListing = function () {
  let list = document.createElement(`div`);
  list.classList.add(`themes`, `mainTransition`);
  list.innerHTML = `<div class='border'>
    Visual
    <div class='fa fa-braille'></div>
   </div>
  `;
  return list;
};

var sideBarBackgroundListing = function () {
  let bg = document.createElement(`div`);
  bg.classList.add(`bg`, `mainTransition`);
  bg.innerHTML = `<div class='adjust'>
    Background
    <div class='fa fa-adjust'></div>
   </div>
  `;
  return bg;
};

var urlFormBuild = function () {
  let url = document.createElement(`div`);
  url.id = `url`;
  url.classList.add("background");
  let form = document.createElement(`form`);
  form.classList.add(`url`);
  form.setAttribute(`action`, `#`);
  let object = document.createElement(`input`);
  object.classList.add("urlInput")
  object.setAttribute("value", backgroundImage[0].path)
  object.setAttribute(`placeholder`, `url`);
  object.setAttribute(`type`, `text`);
  object.classList.add(`imageURL`);
  object.classList.add(`text`);
  form.append(object);
  url.append(form);
  return url;
};

var basicFormBuild = function () {
  let basic = document.createElement(`div`);
  basic.id = `basic`;
  let form = document.createElement(`form`);
  form.classList.add(`filter`);
  form.setAttribute(`action`, `#`);
  let object = document.createElement(`input`);
  object.setAttribute(`placeholder`, `filter`);
  object.setAttribute(`type`, `text`);
  object.classList.add(`sideFilter`);
  object.classList.add(`text`);
  form.append(object);
  basic.append(form);
  return basic;
};

var sideBarCategoryBuild = function (translation) {
  var webp = document.createElement(`img`);
  webp.classList.add(`webp`);
  webp.src = `images/${translation}.webp`;
  return webp;
};

var sideBarOptionBuild = function (name, classes) {
  let sel = document.createElement(`div`);
  sel.classList.add(`sel`, classes);
  sel.innerHTML = name;
  return sel;
};

var sideBarThemeBuild = function (icon) {
  let fontawesome = document.createElement(`div`);
  fontawesome.classList.add(`fa`, `fas`, icon);
  return fontawesome;
};
