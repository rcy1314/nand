let sideBarStar = function (Elem, Value) {
  if (Value) {
    Elem.nextElementSibling.classList.remove(`fa-minus`)
    Elem.nextElementSibling.classList.add(`fa-splotch`)
  } else if (!Value) {
    Elem.nextElementSibling.classList.remove(`fa-splotch`)
    Elem.nextElementSibling.classList.add(`fa-minus`)
  }
}

let cleanup = function () {
  while (_air.firstChild)
    _air.removeChild(_air.lastChild);
  while (_result.firstChild)
    _result.removeChild(_result.lastChild);
  while (_channel.firstChild)
    _channel.removeChild(_channel.lastChild);
  while (_status.firstChild)
    _status.removeChild(_status.lastChild);
  while (_suggestions.firstChild)
    _suggestions.removeChild(_suggestions.lastChild);
}

let stageVisit = function () {
  _visit.style.display = `block`;
  _group.style.display = `none`;
  _xml.style.display = `none`;
  _group.style.zIndex = `-1`;
  _visit.style.opacity = `1`;
  _visit.style.zIndex = '1';
  _xml.style.zIndex = `-1`;
  cleanup();
}

let stageGroup = function () {
  _group.style.display = `block`;
  _visit.style.display = `none`;
  _xml.style.display = `none`;
  _group.style.zIndex = `1`;
  _xml.style.zIndex = `-1`
  cleanup();
}

let stageXML = function () {
  _visit.style.display = `none`;
  _group.style.display = `none`;
  _xml.style.display = `block`;
  _group.style.zIndex = `-1`
  _xml.style.zIndex = `1`;
  cleanup();
}

let displayLegacy = function () {
  _center.style.cssText = `justify-content:center !important`;
  _center.classList.add(`sideChannel`);
  _center.style.display = `inline-block`;
  _channel.classList.remove(`sideChannel`);
  _channel.style.height = `fit-content`;
  _channel.classList.remove(`flexbox`);
  _channel
    .querySelectorAll(`.item`)
    .forEach(
      (a) => a.classList.remove(`sideItem`)
    );
  _channel
    .querySelectorAll(`.item`)
    .forEach(
      (a) => a.classList.remove(`flexbox`)
    );
  _channel
    .querySelectorAll(`.item`)
    .forEach(
      (a) => a.style.width = `425px`
    );
  _xml.style.top = `60px`;
}

let displayFlex = function () {
  setTimeout(
    function () {
      var height = 0;
      var second = 0;
      var groups = 0;
      var column = _channel.querySelectorAll(`.item:nth-child(3n+1)`);
      for (i = 0; i < column.length - 1; i++) height += column[i].clientHeight;
      var column = _channel.querySelectorAll(`.item:nth-child(3n+2)`);
      for (i = 0; i < column.length - 1; i++) second += column[i].clientHeight;
      var column = _channel.querySelectorAll(`.item:nth-child(3n+3)`);
      for (i = 0; i < column.length - 1; i++) groups += column[i].clientHeight;
      var max = Math.max(height, second, groups);
      var min = Math.min(height, second, groups);
      if (height == min) var min = none;
      else if (second == min) var min = 1;
      else if (groups == min) var min = 2;
      _channel.querySelector(`#bottom`).style.order = min;
      _channel.style.height = `${(max + 1000).toString()}px`
    }, 200
  )
  _center.classList.remove(`sideChannel`);
  _center.style.cssText = `display:inline-flex;width:930px;left:320px`;
  _channel.classList.remove(`sideChannel`);
  _channel.classList.add(`flexbox`);
  _channel
    .querySelectorAll(`.item`)
    .forEach(
      (a) => a.classList.add(`flexbox`)
    );
  _channel
    .querySelectorAll(`.item`)
    .forEach(
      (a) => a.style.marginLeft = `0`
    );
  if (_main.clientWidth < 1280) {
    _display.style.display = `none`;
  }
}

let displaySideScroll = function () {
  scrollIntoView = false;
  _channel.classList.add(`sideChannel`);
  _center.classList.add(`sideChannel`);
  _xml.style.justifyContent = `center`;
  _center.style.width = `35vw`;
  _xml.style.display = `flex`;
  _center.style.top = `60px`;
  _center.style.left = `0`;
  _xml.style.top = `0`;
  _channel
    .querySelectorAll(`.item`)
    .forEach(
      (a) => a.classList.remove(`flexbox`)
    );
  _channel
    .querySelectorAll(`.item`)
    .forEach((a) => (a.classList.add(`sideItem`)));
  _channel
    .querySelectorAll(`.item`)
    .forEach((a) => (a.classList.add(`sideItem`)));
  _channel
    .querySelectorAll(`.classic`)
    .forEach((a) => (a.style.display = `block`));
  _channel.classList.remove(`flexbox`)
  _display.style.display = `inline-block`;
}

let displayExpand = function (Value) {
  if (Value) {
    groupType = `list`;
    if (
      document.body.contains(
        _group.querySelector(`.populate`)
      )
    ) {
      _group
        .querySelectorAll(`.populate`)
        .forEach(
          (a) => a.classList.add(`expand`)
        );
			_group
        .querySelectorAll(`.populate`)
        .forEach(
          (a) => a.classList.remove(`block`)
        );
    }
  } else if (!Value) {
    groupType = `blocks`;
    if (
      document.body.contains(
        _group.querySelector(`.populate`)
      )
    ) {
			_group
        .querySelectorAll(`.populate`)
        .forEach(
          (a) => a.classList.add(`block`)
        );
      _group
        .querySelectorAll(`.populate`)
        .forEach(
          (a) => a.classList.remove(`expand`)
        );
    }
  }
};

let appendSideBarLists = function (Elem, Class, Arrays) {
  let list = _sidebar.querySelector(Elem);
  for (
    i = 0;
    i <= Arrays.length - 1;
    i++
  ) {
    let option = document.createElement(`div`);
    if (
      Class == `option` ||
      Class == `feed`
    ) option.classList.add(Class);
    else option.classList.add(
      Class,
      Arrays[i].class
    );
    if (
      Class == `feed`
    ) option.setAttribute(
        `aria-object`,
        menu.findIndex((item) => item.id === Arrays[i])
      )
    if (
      Class == `background` ||
      Class == `sel`
    )
      option.innerHTML = Arrays[i].name;
    if (
      Class == `option` ||
      Class == `feed`
    )
			option.innerHTML = Arrays[i].space().capitalize();
    if (Class == `theme`) option.innerHTML = Arrays[i].obFn;
    list.append(option);
    if (
      translations.includes(
        Arrays[i]
      )
    ) {
      option.setAttribute(`aria-item`, Arrays[i])
      option.innerHTML = Arrays[i];
      list.append(option);
      list.append(sideBarThemeBuild(`fa-redo`))
    } if (
      !translations.includes(Arrays[i]) ||
      Class != `option` &&
      Class != `feed`
    )
			list.append(sideBarThemeBuild(Arrays[i].icon));
  }
};

let appendSettings = function (Elem, Class, Arrays) {
  let list = _sidebar.querySelector(Elem);
  for (
    i = 0;
    i <= Arrays.length - 1;
    i++
  ) {
    let option = document.createElement(`div`);
    option.classList.add(
      Class,
      Arrays[i].class
    );
    option.innerHTML = Arrays[i].name;
    list.append(option);
    if (eval(Arrays[i].class) == true) {
      _sidebar
        .querySelector(`.` + Arrays[i].class)
        .parentNode.insertBefore(
          sideBarThemeBuild(`fa-splotch`),
          document.querySelector(`.` + Arrays[i].class).nextSibling
        );
    } else {
      _sidebar
        .querySelector(`.` + Arrays[i].class)
        .parentNode.insertBefore(
          sideBarThemeBuild(`fa-minus`),
          document.querySelector(`.` + Arrays[i].class).nextSibling
        );
    }
  }
};

let sideBarDisplay = function (Value) {
  sideBarFirst = true;
  let content = document.querySelector(`#content`);
  if (Value) {
    setTimeout(
      function () {
        _sidebar.style.left = `0`;
      }, 300
    );
    if (
      _main.clientWidth >= 769 &&
      sideBarMouse == false
    )
      _hide.style.display = `none`;
    else if (
        sideBarMouse == false ||
        _main.clientWidth <= 425 &&
        sideScroll == true
      )
      _min.style.cssText = `display: block !important;`
      setTimeout(
        function () {
          _sidebar.querySelector(`.sideFilter`).style.visibility = `visible`;
          _sidebar.querySelector(`#basic`).style.visibility = `visible`;
          _sidebar.style.left = `0`;
        }, 300
      );
  } else if (!Value) {
    if (_main.clientWidth >= 768) {
      _sidebar.querySelector(`.bg`).style.height = `31px`;
      expandBackground = false;
      _sidebar.querySelector(`.set`).style.height = `31px`;
      expandSettings = false;
      _sidebar.querySelector(`.fav`).style.height = `31px`;
      expandFavorites = false;
      _sidebar.querySelector(`.themes`).style.height = `31px`;
      expandVisual = false;
      _sidebar.querySelector(`.exclude`).style.height = `31px`;
      expandFilter = false;
      _sidebar.querySelector(`.sideFilter`).style.visibility = `hidden`;
      _sidebar.querySelector(`#basic`).style.visibility = `hidden`;
      _sidebar.style.left = `-250px`;
      _sb.style.display = `none`;
    } else _sidebar.style.left = `-280px`;
  }
};

let topMenuBarDisplay = function (Value) {
  if (Value) {
    _view.style.display = `block`;
    _top.style.display = `block`;
  } else if (
    !Value
  )
    _top.style.display = `none`;
};

let quickFeedDisplay = function (Value) {
  if (Value) {
    _quick.style.zIndex = `1`;
    _quick
      .querySelectorAll(`.feed`)
      .forEach(
        (a) => a.style.display = `block`
      );
    _link.querySelector(`.fa-angle-up`).classList.remove(`rotateReverse`);
    _link.querySelector(`.fa-angle-up`).classList.add(`rotate`);
    _quick.classList.remove(`invisible`);
    _front.classList.add(`toggleHidden`);
    _options.classList.add(`invisible`);
    _social.classList.add(`invisible`);
    _front.classList.remove(`toggle`);
    _quick.classList.add(`visible`);
    _show.style.visibility=`hidden`;
    _under.style.display = `none`;
    if (
      _main.clientWidth <= 425
    )
    _sb.style.top = `-10px`;
  } else if (!Value) {
    _options.classList.remove(`invisible`);
    _social.classList.remove(`invisible`);
    _quick.style.zIndex = `-1`;
    _quick
      .querySelectorAll(`.feed`)
      .forEach(
        (a) => a.style.display = `none`
      );
    _link.querySelector(`.fa-angle-up`).classList.add(`rotateReverse`);
    _link.querySelector(`.fa-angle-up`).classList.remove(`rotate`);
    _front.classList.remove(`toggleHidden`);
    _under.style.display = `inline-flex`;
    _quick.classList.remove(`visible`);
    _quick.classList.add(`invisible`);
    _show.style.visibility=`visible`;
    _front.classList.add(`toggle`);
    if (
      _main.clientWidth <= 425
    )
      _sb.style.top = `7px`;
  }
};

let footerBuild = function (id) {
  let backward = document.createElement(`span`);
  let previous = document.createElement(`div`);
  let object = document.createElement(`div`);
  let front = document.createElement(`span`);
  let span = document.createElement(`span`);
  object.id = `bottom`;
  previous.setAttribute(`aria-object`, back(id));
  previous.classList.add(`btn`, `back`);
  front.classList.add(`flip-front`);
  span.classList.add(`front`);
  front.innerHTML = `Previous`;
  backward.classList.add(`flip-back`);
  backward.innerHTML = `${String(menu[back(id)].id.match(/[^\/]+$/g)).substring(
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
  let index = document.createElement(`span`);
  next.setAttribute(`aria-object`, forward(id));
  next.classList.add(`btn`, `next`);
  flip.classList.add(`flip-front`);
  bottom.classList.add(`bottom`);
  index.classList.add(`flip-back`);
  ahead.classList.add(`front`);
  bottom.innerHTML = `Return`;
  flip.innerHTML = `Next`;
  next.append(ahead);
  next.append(flip);
  index.innerHTML = `${String(menu[forward(id)].id.match(/[^\/]+$/g)).substring(
    0,
    13
  )}...`;
  next.append(index);
  object.append(previous);
  object.append(bottom);
  object.append(next);
  return object;
};

let guideBuild = function (pubArray) {
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

let contentBuild = function (
  oldestPost,
  recentPost,
  postsCount,
  menuIndex
) {
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
  des.innerHTML += `<br>Hash<div style='float:right'>${menu[id].hash}</div>`;
  filter.append(object);
  filter.append(ahref);
  info.append(des);
  construct.append(filter);
  construct.append(info);
  return construct;
};

let translationBuild = function (translation) {
  let object = document.createElement(`div`);
  object.classList.add(`translation`);
  object.setAttribute(`aria-item`, translation);
  let ahref = document.createElement(`a`);
  ahref.setAttribute(`ext`, translation);
  ahref.classList.add(`category`);
  ahref.innerHTML = translation;
  object.append(ahref);
  return object;
};

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

let suggestBuild = function (
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
  let category = document.createElement(`a`);
  let bold = document.createElement(`b`);
  category.setAttribute(`aria-item`, objectCategory);
  suggest.setAttribute(`aria-item`, objectIndex);
  suggest.classList.add(`suggest`);
  object.classList.add(`combine`);
  circle.classList.add(`circle`);
  define.classList.add(`random`);
  bold.classList.add(`bold`);
  circle.src = objectImage;
  suggest.title = objectId;
  bold.innerHTML =
  `
    ${
      String(
        objectId.match(/[^\/]+$/g)
      ).substring(
        0,
        19
      )
    }...<br>
  `;
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

let attributeBuild = function () {
  let attribute = document.createElement(`div`);
  let download = document.createElement(`div`);
  let object = document.createElement(`div`);
  let picture = document.createElement(`div`);
  let attr = document.createElement(`div`);
  let site = document.createElement(`div`);
  let copy = document.createElement(`div`);
  attr.classList.add(
    `attr`,
    `fa-ellipsis-h`
  );
  attribute.classList.add(`attribute`);
  download.classList.add(`download`);
  picture.classList.add(`picture`);
  object.classList.add(`copy`);
  site.classList.add(`site`);
  copy.classList.add(`post`);
  download.innerHTML = `Download Image`;
  picture.innerHTML = `Copy Source`;
  copy.innerHTML = `Copy Post`;
  site.innerHTML = `Copy URL`;
  object.append(attr);
  attr.append(attribute);
  site.append(
    sideBarThemeBuild(`fa-at`)
  );
  attribute.append(site);
  copy.append(
    sideBarThemeBuild(`fa-share`)
  );
  attribute.append(copy);
  picture.append(
    sideBarThemeBuild(`fa-copy`)
  );
  attribute.append(picture);
  download.append(
    sideBarThemeBuild(`fa-camera`)
  );
  attribute.append(download);
  return object;
};

let youtubeAttributeBuild = function () {
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
  picture.innerHTML = `Copy Source`;
  copy.innerHTML = `Copy Post`;
  site.innerHTML = `Copy URL`;
  attribute.style.height = `115px`
  object.append(attr);
  attr.append(attribute);
  site.append(
    sideBarThemeBuild(`fa-at`)
  );
  attribute.append(site);
  copy.append(
    sideBarThemeBuild(`fa-share`)
  );
  attribute.append(copy);
  picture.append(
    sideBarThemeBuild(`fa-camera`)
  );
  attribute.append(picture);
  return object;
};

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

let xmlHTMLBuild = function (htmlArray) {
  let filterBlur = document.createElement(`div`);
  let original = document.createElement(`div`);
  let publish = document.createElement(`div`);
  let classic = document.createElement(`div`);
  let pending = document.createElement(`div`);
  let loader = document.createElement(`div`);
  let object = document.createElement(`img`);
  let circle = document.createElement(`div`);
  let image = document.createElement(`div`);
  let wrap = document.createElement(`div`);
  let item = document.createElement(`div`);
  let head = document.createElement(`div`);
  let bars = document.createElement(`div`);
  let ago = document.createElement(`div`);
  circle.classList.add(`circle`);
  original.append(circle.cloneNode(true));
  original.append(circle.cloneNode(true));
  original.append(circle.cloneNode(true));
  original.append(circle.cloneNode(true));
  original.append(circle.cloneNode(true));
  original.classList.add(`animation`);
  bars.classList.add(`bars`);
  if (fadeIntoView) object.classList.add(`hidden`);
  publish.innerHTML = htmlArray.truncate + htmlArray.more;
  item.setAttribute(`aria-object`, htmlArray.menuObject);
  if (!toggleBorders) item.style.border = `none`
  item.setAttribute(`aria-item`, htmlArray.pubIndex);
  if (flexBox) item.classList.add(`flexbox`);
  item.setAttribute(`ext`, htmlArray.externalURI);
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
  if (
    roundedEdge
  ) {
    object.style.borderRadius = `12px`;
    image.style.borderRadius = `12px`;
  }
  item.classList.add(`item`);
  wrap.classList.add(`wrap`);
  ago.innerHTML = htmlArray.dst;
  head.append(htmlArray.courtesy);
  item.append(head);
  if (imageLoader == `double-circle`) {
    original.style.display = `none`;
    bars.style.display = `none`;
  } else if (imageLoader == `ring-circle`) {
    loader.style.display = `none`;
    bars.style.display = `none`;
  } else if (imageLoader == `v-bars`) {
    original.style.display = `none`;
    loader.style.display = `none`;
  } else if (!imageLoader) {
    original.style.display = `none`;
    loader.style.display = `none`;
    bars.style.display = `none`;
  }
  pending.append(original);
  pending.append(loader);
  pending.append(bars)
  image.append(pending);
  image.append(sideBarThemeBuild(`fa-heart`));
  if (
    safeSearchIDs.includes(
      menu[id].id)
  )
    image.append(filterBlur);
  image.append(object);
  if (feedImages) classic.append(image);
  wrap.append(publish);
  wrap.append(ago);
  classic.append(wrap);
  item.append(classic);
  item.append(
    copyInputAttribute(
      htmlArray.src,
      htmlArray.share,
      htmlArray.externalURI
    )
  );
  return item;
};

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

let sideBarListBuild = function (
  Elem,
  Class,
  Icon,
  Text
) {
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

let excludeFormBuild = function () {
  let object = document.createElement(`input`);
  let form = document.createElement(`form`);
  let min = document.createElement(`div`);
  object.setAttribute(
    `placeholder`,
    `filter`
  );
  object.classList.add("excludeInput");
  object.setAttribute(
    `type`,
    `text`
  );
  form.setAttribute(
    `action`,
    `#`
  );
  min.classList.add("filter");
  form.classList.add(`min`);
  form.append(object);
  min.id = `filter`;
  min.append(form);
  return min;
};

let urlFormBuild = function () {
  let object = document.createElement(`input`);
  let form = document.createElement(`form`);
  let url = document.createElement(`div`);
  object.setAttribute(
    `value`,
    backgroundImage[0].path
  );
  object.setAttribute(
    `placeholder`,
    `path`
  );
  object.setAttribute(
    `type`,
    `text`
  );
  form.setAttribute(
    `action`,
    `#`
  );
  object.classList.add("urlInput");
  object.classList.add(`imageURL`);
  url.classList.add("background");
  object.classList.add(`text`);
  form.classList.add(`url`);
  form.append(object);
  url.append(form);
  url.id = `url`;
  return url;
};

let basicFormBuild = function () {
  let object = document.createElement(`input`);
  object.setAttribute(`placeholder`, `search`);
  object.setAttribute(`autocomplete`, `off`);
  let basic = document.createElement(`div`);
  let form = document.createElement(`form`);
  object.setAttribute(`type`, `text`);
  object.classList.add(`sideFilter`);
  form.setAttribute(`action`, `#`);
  form.classList.add(`sideBasic`);
  object.classList.add(`text`);
  form.append(object);
  basic.id = `basic`;
  basic.append(form);
  return basic;
};

let underTranslation = function (Translation) {
  let div = document.createElement(`div`);
  div.setAttribute(`aria-item`, Translation)
  div.innerHTML = `${Translation}`;
  div.classList.add(`under`);
  return div
}

let sideBarOptionBuild = function (
  name,
  classes
) {
  let sel = document.createElement(`div`);
  sel.classList.add(`sel`, classes);
  sel.innerHTML = name;
  return sel;
};

let sideBarThemeBuild = function (icon) {
  let fontawesome = document.createElement(`div`);
  fontawesome.classList.add(`fa`, icon);
  return fontawesome;
};
