var rippleBuild = function(ev, Elem) {
  const button = Elem.getBoundingClientRect();
  const circle = document.createElement(`span`);
  const diameter = Math.max(
    Elem.clientWidth,
    Elem.clientHeight
  );
  const radius = diameter / 2;
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${ev.clientX - button.left - radius}px`;
  circle.style.top = `${ev.clientY - button.top - radius}px`;
  circle.classList.add(`ripple`);
  setTimeout(function() {
  if (document.querySelector(`.ripple`))
    document.querySelector(`.ripple`).remove();
  }, 500)
  Elem.appendChild(circle);
}
var sideBarTranslationBuild = function (translation) {
  let category = document.createElement(`div`);
  category.setAttribute(`aria-item`, translation);
  category.classList.add(`cat`, translation);
  category.innerHTML = translation;
  return category;
}

var groupBuild = function () {
  let result = document.createElement(`div`);
  let group = document.createElement(`div`);
  result.classList.add(`result`);
  group.append(result);
  group.id = `group`;
  _main.append(group);
};

var stageBuild = function () {
  let suggestions = document.createElement(`div`);
  let channel = document.createElement(`div`);
  let content = document.createElement(`div`);
  let center = document.createElement(`div`);
  let status = document.createElement(`div`);
  let xml = document.createElement(`div`);
  xml.id = `xml`;
  channel.classList.add(`channel`);
  center.classList.add(`center`);
  center.append(channel);
  xml.append(center);
  suggestions.classList.add(`suggestions`);
  content.classList.add(`content`);
  status.classList.add(`status`);
  content.append(status);
  content.append(suggestions);
  xml.append(content);
  return xml;
};

var footerBuild = function () {
  let backward = document.createElement(`span`);
  let previous = document.createElement(`div`);
  let object = document.createElement(`div`);
  let front = document.createElement(`span`);
  let span = document.createElement(`span`);
  object.id = `bottom`;
  previous.setAttribute(`aria-item`, back());
  previous.classList.add(`btn`, `back`);
  front.classList.add(`flip-front`);
  span.classList.add(`front`);
  front.innerHTML = `Previous`;
  backward.classList.add(`flip-back`);
  backward.innerHTML = `${String(menu[back()].id.match(/[^\/]+$/g)).substring(
    0,
    13
  )}...`;
  previous.append(span);
  previous.append(front);
  previous.append(backward);
  let ahead = document.createElement(`span`);
  let bottom = document.createElement(`div`);
  let flip = document.createElement(`span`);
  let next = document.createElement(`div`);
  let id = document.createElement(`span`);
  next.setAttribute(`aria-item`, forward());
  next.classList.add(`btn`, `next`);
  flip.classList.add(`flip-front`);
  bottom.classList.add(`bottom`);
  id.classList.add(`flip-back`);
  ahead.classList.add(`front`);
  bottom.innerHTML = `Return`;
  flip.innerHTML = `Next`;
  next.append(ahead);
  next.append(flip);
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
  filterBlur.classList.add(`filterBlur`);
  sticky.classList.add(`item`, `sticky`);
  object.classList.add(`guide`, `img`);
  src.classList.add(`item`, `src`);
  head.classList.add(`header`);
  image.classList.add(`image`);
  publish.classList.add(`pub`);
  blur.classList.add(`blur`);
  wrap.classList.add(`wrap`);
  ago.classList.add(`ago`);
  wrap.setAttribute(`ext`, pubArray.externalURI);
  src.setAttribute(`ext`, pubArray.externalURI);
  image.append(sideBarThemeBuild(`fa-heart`));
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
  sticky.append(src);
  sticky.append(wrap);
  wrap.append(
    copyInputAttribute(pubArray.src, pubArray.share, pubArray.externalURI)
  );
  return sticky;
};

var guideBuildYoutube = function (pubArray) {
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
  publish.innerHTML = pubArray.title;
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
    copyInputAttribute(pubArray.src, pubArray.share, pubArray.externalURI)
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

var contentBuild = function (oldestPost, recentPost, postsCount, menuIndex) {
  let display = document.createElement(`div`);
  let filter = document.createElement(`div`);
  let select = document.createElement(`div`);
  let object = document.createElement(`img`);
  object.src = menu[menuIndex].image.image();
  let info = document.createElement(`div`);
  let des = document.createElement(`div`);
  let ahref = document.createElement(`a`);
  ahref.innerHTML = menu[menuIndex].id.match(/[^\/]+$/g);
  ahref.setAttribute(`title`, menu[menuIndex].id);
  let construct = document.createElement(`div`);
  construct.classList.add(`construct`);
  display.classList.add(`display`);
  filter.classList.add(`filter`);
  select.classList.add(`select`);
  object.classList.add(`webp`);
  ahref.classList.add(`tag`);
  info.classList.add(`info`);
  des.classList.add(`about`);
  des.innerHTML = `&emsp;${menu[menuIndex].description}<br>`;
  des.innerHTML += `<br>Most Recent<div style='float:right'>${recentPost}</div>`;
  des.innerHTML += `<br>Oldest post<div style='float:right'>${oldestPost}</div>`;
  des.innerHTML += `<br>Posts<div style='float:right'>${postsCount}</div>`;
  if (showDescription == false) des.style.visibility = `hidden`
  filter.append(object);
  filter.append(ahref);
  info.append(des);
  construct.append(filter);
  construct.append(info);
  return construct;
};

var translationBuild = function (translation) {
  let object = document.createElement(`div`);
  object.classList.add(`translation`);
  object.setAttribute(`aria-item`, translation);
  //let img = document.createElement(`img`)
  //img.classList.add(`quickTranslation`)
  //img.src = `images/${translation}.webp`
  let ahref = document.createElement(`a`)
  ahref.setAttribute(`ext`, translation)
  ahref.classList.add(`category`)
  ahref.innerHTML = translation
  //object.append(img)
  object.append(ahref)
  return object;
};

var assetBuild = function (assetIndex, assetImage, assetId) {
  let object = document.createElement(`div`);
  let ahref = document.createElement(`a`)
  let img = document.createElement(`img`)
  object.setAttribute(`aria-item`, assetIndex);
  ahref.setAttribute(`title`, assetId)
  object.classList.add(`asset`);
  ahref.classList.add(`query`)
  img.classList.add(`entity`)
  img.src = assetImage
  ahref.innerHTML = `${String(assetId.match(/[^\/]+$/g)).substring(0, 9)}...`
  object.append(img)
  object.append(ahref)
  return object;
};

var suggestBuild = function (
  objectMedia,
  objectIndex,
  objectImage,
  objectId,
  objectCategory
) {
  let suggest = document.createElement(`div`);
  let object = document.createElement(`div`);
  let circle = document.createElement(`img`);
  let define = document.createElement(`div`);
  let bold = document.createElement(`b`);
  let category = document.createElement(`a`);
  suggest.setAttribute(`aria-item`, objectIndex);
  category.setAttribute(`aria-item`, objectCategory);
  suggest.classList.add(`suggest`);
  object.classList.add(`combine`);
  circle.classList.add(`circle`);
  define.classList.add(`random`);
  bold.classList.add(`bold`);
  circle.src = objectImage;
  suggest.title = objectId;
  bold.innerHTML = `${String(objectId.match(/[^\/]+$/g)).substring(
    0,
    19
  )}...<br>`;
  category.innerHTML = objectCategory;
  category.title = objectCategory;
  define.innerHTML = objectMedia;
  object.append(circle);
  suggest.append(bold);
  object.append(suggest);
  suggest.append(define);
  object.append(category);
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
  let display = document.createElement(`div`);
  let select = document.createElement(`div`);
  let object = document.createElement(`img`);
  let media = document.createElement(`div`);
  let hash = document.createElement(`div`);
  let des = document.createElement(`div`);
  let id = document.createElement(`div`);
  populate.setAttribute(`aria-item`, objectIndex);
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
  select.append(id);
  select.append(media);
  select.append(hash);
  select.append(des);
  populate.append(select);
  return populate;
};

let attributeBuild = function () {
  let attribute = document.createElement(`div`);
  let picture = document.createElement(`div`);
  let object = document.createElement(`div`);
  let attr = document.createElement(`div`);
  let site = document.createElement(`div`);
  let copy = document.createElement(`div`);
  attr.classList.add(`attr`, `fa-ellipsis-h`);
  attribute.classList.add(`attribute`);
  picture.classList.add(`picture`);
  object.classList.add(`copy`);
  site.classList.add(`site`);
  copy.classList.add(`post`);
  site.innerHTML = `Copy Url`;
  copy.innerHTML = `Copy Post`;
  picture.innerHTML = `Copy Source`;
  object.append(attr);
  attr.append(attribute);
  site.append(sideBarThemeBuild(`fa-at`));
  attribute.append(site);
  copy.append(sideBarThemeBuild(`fa-share`));
  attribute.append(copy);
  picture.append(sideBarThemeBuild(`fa-camera`));
  attribute.append(picture);
  return object;
};

var courtesyBuild = function (objectId, objectImage, objectExternal) {
  let courtesy = document.createElement(`div`);
  let object = document.createElement(`img`);
  let ahref = document.createElement(`a`);
  let bold = document.createElement(`b`);
  courtesy.setAttribute(`ext`, objectExternal);
  courtesy.classList.add(`courtesy`);
  object.classList.add(`ext`)
  ahref.classList.add(`exit`)
  object.src = objectImage;
  bold.innerHTML = objectId;
  ahref.append(bold);
  courtesy.append(object);
  courtesy.append(ahref);
  courtesy.append(attributeBuild());
  return courtesy;
};

let copyInputAttribute = function (src, share, externalURI) {
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

var youtubeHTMLBuild = function (htmlArray) {
  let object = document.createElement(`iframe`);
  let youtube = document.createElement(`div`);
  let publish = document.createElement(`div`);
  let item = document.createElement(`div`);
  let head = document.createElement(`div`);
  let ago = document.createElement(`div`);
  publish.innerHTML += htmlArray.truncate + htmlArray.more;
  item.setAttribute(`aria-object`, htmlArray.menuObject);
  item.setAttribute(`aria-item`, htmlArray.pubIndex);
  item.setAttribute(`ext`, htmlArray.externalURI);
  publish.setAttribute(`text`, htmlArray.title);
  youtube.innerHTML += htmlArray.views;
  object.src = htmlArray.videoSource;
  ago.innerHTML = htmlArray.dst;
  head.classList.add(`header`);
  publish.classList.add(`pub`);
  youtube.classList.add(`yt`);
  item.classList.add(`item`);
  ago.classList.add(`ago`);
  item.id = `yt`;
  head.append(htmlArray.courtesy);
  item.append(head);
  youtube.append(object);
  item.append(youtube);
  item.append(publish);
  item.append(ago);
  item.append(
    copyInputAttribute(htmlArray.src, htmlArray.share, htmlArray.externalURI)
  );
  return item;
};

var xmlHTMLBuild = function (htmlArray) {
  let filterBlur = document.createElement(`div`);
  let publish = document.createElement(`div`);
  let classic = document.createElement(`div`);
  let pending = document.createElement(`div`);
  let loader = document.createElement(`div`);
  let object = document.createElement(`img`);
  let image = document.createElement(`div`);
  let wrap = document.createElement(`div`);
  let item = document.createElement(`div`);
  let head = document.createElement(`div`);
  let ago = document.createElement(`div`);
  item.setAttribute(`aria-object`, htmlArray.menuObject);
  item.setAttribute(`aria-item`, htmlArray.pubIndex);
  item.setAttribute(`ext`, htmlArray.externalURI);
  publish.innerHTML = htmlArray.truncate + htmlArray.more;
  if (fadeIntoView == true) object.classList.add(`hidden`)
  loader.classList.add(`loader`, `double-circle`);
  publish.setAttribute(`text`, htmlArray.title);
  wrap.innerHTML += htmlArray.searchExternal;
  pending.classList.add(`blink`, `pending`);
  filterBlur.classList.add(`filterBlur`);
  classic.classList.add(`classic`);
  ago.classList.add(`ago`, `zulu`);
  object.id = htmlArray.pubIndex;
  publish.classList.add(`pub`);
  head.classList.add(`header`);
  image.classList.add(`image`);
  object.classList.add(`img`);
  item.classList.add(`item`);
  wrap.classList.add(`wrap`);
  ago.innerHTML = htmlArray.dst;
  head.append(htmlArray.courtesy);
  item.append(head);
  pending.append(loader);
  classic.append(pending);
  image.append(sideBarThemeBuild(`fa-heart`));
  image.append(filterBlur);
  image.append(object);
  classic.append(image);
  wrap.append(publish);
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
  let buffer = document.createElement(`div`);
  let detail = document.createElement(`div`);
  let object = document.createElement(`img`);
  let match = document.createElement(`div`);
  let key = document.createElement(`div`);
  match.innerHTML = match.innerHTML = `&emsp;${indexCategory}<br>&emsp;${indexId}`;
  key.setAttribute(`aria-item`, indexObject);
  match.classList.add(`textMatch`);
  detail.classList.add(`detail`);
  buffer.classList.add(`buffer`);
  if (suggested == true) var contentText = `suggested...`;
  else var contentText = ``;
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

var sideBarListBuild = function (Elem, Class, Icon, Text) {
  let option = document.createElement(`div`);
  option.classList.add(Elem, `mainTransition`);
  option.innerHTML = `
  <div class='${Class}'>
    ${Text}
    <div class='fa ${Icon}'></div>
   </div>
  `;
  _content.append(option);
};

var excludeFormBuild = function () {
  let object = document.createElement(`input`);
  let form = document.createElement(`form`);
  let min = document.createElement(`div`);
  object.setAttribute(`placeholder`, `filter`);
  object.classList.add("excludeInput")
  object.setAttribute(`type`, `text`);
  form.setAttribute(`action`, `#`);
  min.classList.add("filter");
  form.classList.add(`min`);
  min.id = `filter`;
  form.append(object);
  min.append(form);
  return min;
};

var urlFormBuild = function () {
  let object = document.createElement(`input`);
  let form = document.createElement(`form`);
  let url = document.createElement(`div`);
  object.setAttribute("value", backgroundImage[0].path)
  object.setAttribute(`placeholder`, `url`);
  object.setAttribute(`type`, `text`);
  form.setAttribute(`action`, `#`);
  object.classList.add("urlInput")
  object.classList.add(`imageURL`);
  url.classList.add("background");
  object.classList.add(`text`);
  form.classList.add(`url`);
  url.id = `url`;
  form.append(object);
  url.append(form);
  return url;
};

var basicFormBuild = function () {
  let object = document.createElement(`input`);
  object.setAttribute(`placeholder`, `search`);
  object.setAttribute(`autocomplete`, `off`)
  let basic = document.createElement(`div`);
  let form = document.createElement(`form`);
  object.setAttribute(`type`, `text`);
  object.classList.add(`sideFilter`);
  form.setAttribute(`action`, `#`);
  form.classList.add(`sideBasic`);
  object.classList.add(`text`);
  basic.id = `basic`;
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
