var guideDisplay = function (pubArray) {
  _guide.append(guideBuild(pubArray[0]));
  guideImageAttributes(pubArray[0]);
  _guide.style.zIndex = `11`;
};

var guideDisplayYoutube = function (pubArray) {
  _guide.append(guideBuildYoutube(pubArray[0]));
  _guide.style.zIndex = `11`;
};

var xmlChannelFooter = function () {
  if (document.body.contains(document.querySelector(`.center`)))
    document.querySelector(`.channel`).append(footerBuild());
};

var forward = function () {
  if (filter.length > 1)
    var plus = filter.indexOf(menu.indexOf(menu[parseInt(id)]));
  else var plus = parseInt(id);
  if (filter[plus + +1]) var next = filter[plus + +1];
  else if (id == menu.length - 1) var next = 1 + +1;
  else var next = parseInt(id) + +1;

  return parseInt(next);
};

var back = function () {
  if (filter.length > 1)
    var plus = filter.indexOf(menu.indexOf(menu[parseInt(id)]));
  if (filter[plus - +1]) var back = filter[plus - +1];
  else if (id == 0) var back = menu.length - 1;
  else var back = parseInt(id) - +1;

  return parseInt(back);
};

var contentStatusDisplay = function (
  menuIndex,
  recentPost,
  oldestPost,
  postsCount
) {
  if (document.body.contains(document.querySelector(`#xml .status`))) {
    var status = document.querySelector(`#xml .status`);
    status.append(contentBuild(oldestPost, recentPost, postsCount, menuIndex));
  }
  displayDescription(showDescription);
};

var xmlStatusSuggestions = function () {
  let duplicate = [];
  if (document.body.contains(_main.querySelector(`.suggestions`))) {
    var suggestions = _main.querySelector(`.suggestions`);
    if (document.body.contains(_main.querySelector(`.combine`)))
      while (suggestions.firstChild)
        suggestions.removeChild(suggestions.lastChild);
    for (let i = 1; i <= contentStatusBuffer; i++) {
      let randomMenuObject = menu.indexOf(
        menu[Math.floor(Math.random() * menu.length - 1)]
      );
      if (
        menu[randomMenuObject] &&
        menu[randomMenuObject] !== 0 &&
        !duplicate.includes(randomMenuObject)
      ) {
        if (menu[randomMenuObject].media == true)
          var media = `feed contains images`;
        else if (menu[randomMenuObject].media == false)
          var media = `feed might not contain images`;
        duplicate.push(randomMenuObject);
        suggestions.append(
          suggestBuild(
            media,
            menu.indexOf(menu[randomMenuObject]),
            menu[randomMenuObject].image.image(),
            menu[randomMenuObject].id,
            menu[randomMenuObject].category
          )
        );
      }
    }
  }
};

var guideImageAttributes = function (pubArray) {
  let newImg = new Image();
  newImg.setAttribute(`src`, pubArray.src);
  newImg.onload = function () {
    if (guideSafeSearch == true && safeSearchIDs.includes(menu[id].id)) {
      fetch(`${cors}${api}${pubArray.src}`, {
        method: "GET",
        headers: {
          Origin: "*",
          Accept: "application/json",
          "X-Requested-With": "*",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((response) => {
          response.json().then((jsonResponse) => {
            if (jsonResponse.score >= safeSearchScore) {
              if (
                document.body.contains(
                  document.querySelector(
                    `[aria-item='${pubArray.menuObject}'][aria-object='${pubArray.pubIndex}'] .filterBlur`
                  )
                )
              )
                document
                  .querySelector(
                    `[aria-item='${pubArray.menuObject}'][aria-object='${pubArray.pubIndex}'] .filterBlur`
                  )
                  .classList.add(`blur`);
            }
          });
          _guide.querySelector(`.img`).setAttribute(`src`, pubArray.src);
          document.querySelector(`.sticky`).style.display = `block`;
          _check.style.display = `none`;
          _guide.style.display = `flex`;
        })
        .catch((response) => {
          while (_guide.lastChild) _guide.removeChild(_guide.lastChild);
          _check.style.display = `none`;
          _guide.style.display = `none`;
          local = null;
          post = null;
        });
    }
    if (_main.clientWidth <= 425) {
      _main.classList.add(`guide`);
      _guide.querySelector(`.sticky .header`).style.position = `absolute`;
      _guide.querySelector(`.sticky .src`).style.display = `block`;
      _guide.querySelector(`.sticky .image`).style.margin = `0`;
      if (newImg.naturalWidth >= newImg.naturalHeight) {
        _guide
          .querySelectorAll(`.img, .filterBlur`)
          .forEach((a) => (a.style.maxHeight = `65vh`));
        _guide
          .querySelectorAll(`.img, .filterBlur`)
          .forEach((a) => (a.style.maxWidth = `100vw`));
        if (guideSafeSearch == true)
          _guide.querySelector(`.filterBlur`).style.width = newImg.naturalWidth;
        _guide.querySelector(`.wrap`).style.display = `block`;
        _guide.querySelector(`.wrap`).style.height = `fit-content`;
        _guide.querySelector(`.pub`).style.height = `fit-content`;
        _guide.querySelector(`.wrap`).style.maxWidth = `100vw`;
      } else if (newImg.naturalHeight >= newImg.naturalWidth) {
        _guide
          .querySelectorAll(`.img, .filterBlur`)
          .forEach((a) => (a.style.maxHeight = `65vh`));
        _guide
          .querySelectorAll(`.img, .filterBlur`)
          .forEach((a) => (a.style.maxWidth = `100vw`));
        _guide.querySelector(`.wrap`).style.maxWidth = `100vw`;
        _guide.querySelector(`.sticky`).style.top = `40px`;
      }
      _guide.querySelector(`.ago`).style.position = `relative`;
      if (guideSafeSearch == true) {
        _guide.querySelector(`.filterBlur`).style.top = `0`;
        _guide.querySelector(`.filterBlur`).style.height = newImg.naturalHeight;
      }
      _guide
        .querySelectorAll(`.img, .sticky .header`)
        .forEach(
          (a) =>
            (a.style.top = ~_guide.querySelector(`.img`).style.height - `60`)
        );
    } else {
      _main.classList.add(`guide`);
      if (newImg.naturalWidth >= newImg.naturalHeight) {
        _guide
          .querySelectorAll(`.img, .filterBlur`)
          .forEach((a) => (a.style.maxHeight = `90vh`));
        _guide
          .querySelectorAll(`.img, .filterBlur`)
          .forEach((a) => (a.style.maxWidth = `calc(80vw - 220px)`));
      } else if (newImg.naturalHeight >= newImg.naturalWidth) {
        _guide
          .querySelectorAll(`.img, .filterBlur`)
          .forEach((a) => (a.style.maxHeight = `90vh`));
        _guide
          .querySelectorAll(`.img, .filterBlur`)
          .forEach((a) => (a.style.maxWidth = `calc(55vw - 220px)`));
      }
    }
    if (guideSafeSearch == false || !safeSearchIDs.includes(menu[id].id)) {
      _guide.querySelector(`.img`).setAttribute(`src`, pubArray.src);
      document.querySelector(`.sticky`).style.display = `block`;
      _guide.style.display = `flex`;
    }
    _check.style.display = `none`;
  };
};

var xmlImageSource = function (xhr) {
  if (xhr.getElementsByTagName(`content`).length > 0) {
    if (
      xhr
        .getElementsByTagName(`content`)[0]
        .childNodes[0].nodeValue.match(
          /https:\/\/i\.redd\.it\/.+?(gif|png|jpg|mp4)/g
        )
    )
      src = String(
        xhr
          .getElementsByTagName(`content`)[0]
          .childNodes[0].nodeValue.match(
            /https:\/\/i\.redd\.it\/.+?(gif|png|jpg|mp4)/g
          )
      );
    else if (
      xhr
        .getElementsByTagName(`content`)[0]
        .childNodes[0].nodeValue.match(
          /https:\/\/.\.thumbs\.redditmedia\.com\/.+?(gif|png|jpg|mp4)/g
        )
    )
      src = String(
        xhr
          .getElementsByTagName(`content`)[0]
          .childNodes[0].nodeValue.match(
            /https:\/\/.\.thumbs\.redditmedia\.com\/.+?(gif|png|jpg|mp4)/g
          )
      );
    else if (Array.isArray(xhr.getElementsByTagName(`content`)))
      src = String(
        xhr
          .getElementsByTagName(`content`)[0]
          .childNodes[0].nodeValue.match(
            /\b(https?:\/\/\S*?\.(?:png|jpe?g|gif))/g
          )[0]
      );
    else src = null;
  } else if (
    youtubeMedia == false &&
    xhr.getElementsByTagName(`media:thumbnail`).length > 0
  )
    src = String(
      xhr.getElementsByTagName(`media:thumbnail`)[0].getAttribute(`url`)
    );
  else if (
    xhr.getElementsByTagName(`media:content`).length > 0 &&
    xhr.getElementsByTagName(`media:content`)[0].attributes[`url`]
  ) {
    if (
      xhr
        .getElementsByTagName(`media:content`)[0]
        .getAttribute(`url`)
        .match(/youtube\.com/)
    )
      src =
        `https://www.youtube.com/embed/` +
        xhr
          .getElementsByTagName(`media:content`)[0]
          .getAttribute(`url`)
          .match(/[a-zA-Z0-9\_\-]{11}/g);
    else
      src = String(
        xhr
          .getElementsByTagName(`media:content`)[0]
          .getAttribute(`url`)
          .match(/\b(https?:\/\/\S*?\..+)/g)
      );
  } else if (xhr.getElementsByTagName(`media:thumbnail`).length > 0)
    src = String(
      xhr.getElementsByTagName(`media:thumbnail`)[0].getAttribute(`url`)
    );
  else if (
    xhr.getElementsByTagName(`enclosure`).length > 0 &&
    xhr.getElementsByTagName(`media:thumbnail`).length <= 0
  )
    src = String(xhr.getElementsByTagName(`enclosure`)[0].getAttribute(`url`));
  else if (xhr.getElementsByTagName(`content:encoded`).length > 0) {
    if (
      xhr
        .getElementsByTagName(`content:encoded`)[0]
        .innerHTML.match(/\b(https?:\/\/\S*?\.(?:png|jpe?g|gif))/g)
    )
      src = xhr
        .getElementsByTagName(`content:encoded`)[0]
        .innerHTML.match(/\b(https?:\/\/\S*?\.(?:png|jpe?g|gif))/g)[0];
    else
      src = String(
        xhr
          .getElementsByTagName(`content:encoded`)[0]
          .childNodes[0].nodeValue.match(
            /\b(https?:\/\/\S*?\.(?:png|jpe?g|gif))/g
          )
      );
  } else if (xhr.getElementsByTagName(`image`).length > 0)
    src = String(
      xhr
        .getElementsByTagName(`image`)[0]
        .childNodes[0].nodeValue.match(
          /\b(https?:\/\/\S*?\.(?:png|jpe?g|gif))/g
        )
    );
  else if (xhr.getElementsByTagName(`link`)[0].attributes[`href`])
    src = String(xhr.getElementsByTagName(`link`)[0].getAttribute(`href`));
  else if (
    (xhr
      .getElementsByTagName(`description`)[0]
      .innerHTML.match(/a.href|src/g) &&
      xhr.getElementsByTagName(`author`).length <= 0) ||
    (xhr.getElementsByTagName(`description`)[0].length > 0 &&
      Array.isArray(xhr.getElementsByTagName(`description`)))
  ) {
    if (
      xhr
        .getElementsByTagName(`description`)[0]
        .innerHTML.match(/(https?:\/\/\S*?[a-zA-Z0-9\-\.\/\_\,]+)/g)
    )
      src = xhr
        .getElementsByTagName(`description`)[0]
        .innerHTML.match(/(https?:\/\/\S*?[a-zA-Z0-9\-\.\/\_\,]+)/g)[0];
    else if (xhr.getElementsByTagName(`description`)[0].childNodes[1])
      src = String(
        xhr
          .getElementsByTagName(`description`)[0]
          .childNodes[1].nodeValue.match(
            /(https?:\/\/\S*?[a-zA-Z0-9\-\.\/\_\,]+)/g
          )
      );
    else if (xhr.getElementsByTagName(`description`)[0].childNodes[0])
      src = String(
        xhr
          .getElementsByTagName(`description`)[0]
          .childNodes[0].nodeValue.match(
            /\b(https?:\/\/\S*?\.(?:png|jpe?g|gif))/g
          )
      );
  } else if (xhr.getElementsByTagName(`link`).length > 0)
    src = String(
      xhr
        .getElementsByTagName(`link`)[0]
        .childNodes[0].nodeValue.match(/https:\/\/.+?(gif|png|jpg|mp4)/g)
    );
  else if (xhr.getElementsByTagName(`media:content`).length > 0)
    src = String(
      xhr.getElementsByTagName(`media:content`)[0].getAttribute(`url`)
    );
  else if (xhr.getElementsByTagName(`figure`).length > 0)
    src = String(
      xhr
        .getElementsByTagName(`figure`)
        .childNodes[0].nodeValue.match(
          /\b(https:\/\/\S*?[a-zA-Z0-9\-\.\/\_\,]+)/g
        )
    );
  else if (xhr.getElementsByTagName(`url`).length > 0)
    src = String(
      xhr
        .getElementsByTagName(`url`)
        .innerHTML.match(/\b(https?:\/\/\S*?\.(?:png|jpe?g|gif))/g)[0]
    );
  else src = null;
  return src;
};

var xmlTimeStampParsing = function (channel, dateTime) {
  let parse = [];
  if (channel == `entry`) {
    let re = dateTime.getElementsByTagName(`link`)[0].getAttribute(`href`);
    let dst = dateTime
      .getElementsByTagName(`updated`)[0]
      .childNodes[0].nodeValue.zulu();
    let since = new Date(
      dateTime.getElementsByTagName(`updated`)[0].childNodes[0].nodeValue
    ).getTime();
    let gen = dateTime
      .getElementsByTagName(`updated`)[0]
      .childNodes[0].nodeValue.toLocaleString();
    gen = parseInt(
      gen
        .match(/([0-9]+\:[0-9]+\:[0-9]+)/g)
        .toString()
        .replace(/\:/g, ``)
    ).toString(36);
    parse.push({
      since: since,
      dst: dst[0],
      cyrb53: `${menu[id].hash}${cyrb53(menu[id].hash.toString())}-${cyrb53(gen.toString())}-${cyrb53(channel.toString())}-${cyrb53(dateTime.toString())}`,
      base36: gen,
      externalURI: re.trim(),
    });
  } else {
    if (dateTime.getElementsByTagName(`datetime`).length > 0) {
      let re = dateTime.getElementsByTagName(`link`)[0].childNodes[0].nodeValue;
      let ts = parseInt(
        dateTime.getElementsByTagName(`datetime`)[0].childNodes[0].nodeValue
      );
      let ts_ms = ts * 1000;
      let date = new Date(ts_ms);
      let year = date.getFullYear();
      let mon = (`0` + (date.getMonth() + 1)).slice(-2);
      let min = (`0` + date.getMinutes()).slice(-2);
      let sec = (`0` + date.getSeconds()).slice(-2);
      let hour = (`0` + date.getHours()).slice(-2);
      date = (`0` + date.getDate()).slice(-2);
      let def = `${year}-${mon}-${date} ${hour}:${min}:${sec}`;
      let dst = def.zulu();
      let since = new Date(
        parseInt(
          dateTime.getElementsByTagName(`datetime`)[0].childNodes[0].nodeValue
        )
      );
      let gen = parseInt(
        dateTime.getElementsByTagName(`datetime`)[0].childNodes[0].nodeValue
      ).toString(36);
      parse.push({
        since: since,
        dst: dst[0],
        cyrb53: `${menu[id].hash}${cyrb53(menu[id].hash.toString())}-${cyrb53(gen.toString())}-${cyrb53(channel.toString())}-${cyrb53(dateTime.toString())}`,
        base36: gen,
        externalURI: re.trim(),
      });
    } else if (dateTime.getElementsByTagName(`pubDate`).length > 0) {
      let re = dateTime.getElementsByTagName(`link`)[0].childNodes[0].nodeValue;
      let dst = dateTime
        .getElementsByTagName(`pubDate`)[0]
        .childNodes[0].nodeValue.zulu();
      let since = new Date(
        dateTime.getElementsByTagName(`pubDate`)[0].childNodes[0].nodeValue
      );
      let gen = new Date(
        dateTime.getElementsByTagName(`pubDate`)[0].childNodes[0].nodeValue
      ).toLocaleString();
      gen = parseInt(
        gen
          .match(/([0-9]+\:[0-9]+\:[0-9]+)/g)
          .toString()
          .replace(/\:/g, ``)
      ).toString(36);
      parse.push({
        since: since,
        dst: dst[0],
        cyrb53: `${menu[id].hash}${cyrb53(menu[id].hash.toString())}-${cyrb53(gen.toString())}-${cyrb53(channel.toString())}-${cyrb53(dateTime.toString())}`,
        base36: gen,
        externalURI: re.trim(),
      });
    } else if (dateTime.getElementsByTagName(`dc:date`).length > 0) {
      let re = dateTime.getElementsByTagName(`dc:date`)[0].childNodes[0]
        .nodeValue;
      let dst = dateTime
        .getElementsByTagName(`dc:date`)[0]
        .childNodes[0].nodeValue.zulu();
      let since = new Date(
        dateTime.getElementsByTagName(`dc:date`)[0].childNodes[0].nodeValue
      );
      let gen = new Date(
        dateTime.getElementsByTagName(`dc:date`)[0].childNodes[0].nodeValue
      ).getTime();
      gen = gen.toString(36);
      parse.push({
        since: since,
        dst: dst[0],
        cyrb53: `${menu[id].hash}${cyrb53(menu[id].hash.toString())}-${cyrb53(gen.toString())}-${cyrb53(channel.toString())}-${cyrb53(dateTime.toString())}`,
        base36: gen,
        externalURI: re.trim(),
      });
    } else parse.push(``);
  }
  return parse[0];
};

var xmlImageDimensions = function (menuObject, pubIndex, newImg) {
  let k = 5420;
  let maximum = 480;
  let itemImage = document.querySelector(
    `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .img`
  );
  let itemFilter = document.querySelector(
    `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .filterBlur`
  );
  let attribute = document.querySelector(
    `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .attribute`
  );
  let copyPicture = document.querySelector(
    `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .picture`
  );
  let copyPost = document.querySelector(
    `[aria-item='${pubIndex}'] .post`
  );
  if (
    newImg.naturalWidth < maximum &&
    document.body.contains(
        document.querySelector(
          `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .img`
        )
    )
  ) {
    itemFilter.classList.add(`leave`);
    itemImage.classList.add(`leave`);
    itemImage.style.width = `180px`;
    itemImage.style.margin = `12px`;
    itemImage.closest(`.classic`).style.display = `flex`;
    itemImage.closest(`.classic`).style.alignItems = `center`;
    copyPost.style.display = `none`;
    copyPicture.style.display = `none`;
    attribute.style.height = `37px`;
  } else if (
    document.body.contains(
        document.querySelector(
          `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .filterBlur`
        )
    )
  ) {
    itemFilter.classList.add(`default`);
    itemImage.classList.add(`default`);
  }
}

var xmlImageAttributes = function (empty, menuObject, pubIndex, src) {
  count.push(`null`);
  let jsonResponseScore;
  let itemContainer = document.querySelector(
    `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .image`
  );
  let itemImage = document.querySelector(
    `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .img`
  );
  let itemPending = document.querySelector(
    `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .pending`
  );
  let itemFilter = document.querySelector(
    `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .filterBlur`
  );
  if (
    src &&
    src != `null` &&
    imageDuplicate.includes(src)
  ) {
    count.shift()
    document
      .querySelectorAll(`[aria-object='${menuObject}'][aria-item='${pubIndex}']`)
      .forEach((a) => a.remove());
  } else if (
    !src ||
    src == `null` ||
    src.match(/.webm|.mp4/g)
  ) {
    itemPending.remove();
    itemImage.remove();
    count.shift()
  }
  imageDuplicate.push(src);
  if (
    src &&
    src.match(/https?:\/\//g) &&
    !src.match(/comments|feeds|fsdn|undefined/g)
  ) {
    var newImg = new Image();
    newImg.setAttribute(`src`, src);
    newImg.onerror = function () {
      itemPending.remove();
      itemImage.remove();
    };
    newImg.onload = function () {
      count.shift()
      if (
          src.match(/ytimg/g) &&
          youtubeMedia == false
        ) {
        document
          .querySelector(
            `[aria-object='${menuObject}'][aria-item='${pubIndex}']`
          )
          .classList.add(`yt`);
        itemPending.remove();
      }
      if (safeSearch == true && safeSearchIDs.includes(menu[id].id)) {
        fetch(`${cors}${api}${src}`, {
          method: "GET",
          headers: {
            Origin: "*",
            Accept: "application/json",
            "X-Requested-With": "*",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        })
          .then((response) => {
            response.json().then((jsonResponse) => {
              console.log(`${pubIndex} ${jsonResponse.score}`)
              if (
                jsonResponse.score >= safeSearchScore
                ) {
                  var request = new XMLHttpRequest();
                  request.open("GET", cors + src, true);
                  request.responseType = "blob";
                  request.onload = function () {
                    var read = new FileReader();
                    read.readAsDataURL(request.response);
                    read.onload = function (e) {
                      xmlImageDimensions(menuObject, pubIndex, newImg)
                      itemFilter.style.transform = `scale(4)`
                      itemFilter.classList.add(`blur`);
                      itemImage.setAttribute(`src`, e.target.result);
                      itemPending.remove();
                      itemImage.style.display = `block`;
                    };
                    read.onerror = function (e) {
                      itemPending.remove();
                    }
                  }
                  if (!src.match(/4cdn/g)) request.send();
                  else {
                    xmlImageDimensions(menuObject, pubIndex, newImg)
                    itemFilter.style.transform = `scale(4)`
                    itemFilter.classList.add(`blur`);
                    itemImage.setAttribute(`src`, src);
                    itemPending.remove();
                    itemImage.style.display = `block`;
                  }
              } else if (
                jsonResponse.score <= safeSearchScore &&
                document.body.contains(
                    document.querySelector(
                      `[aria-object='${menuObject}'][aria-item='${pubIndex}']`
                    )
                )
              ) {
              var request = new XMLHttpRequest();
              request.open("GET", cors + src, true);
              request.responseType = "blob";
              request.onload = function () {
                var read = new FileReader();
                read.readAsDataURL(request.response);
                read.onload = function (e) {
                  xmlImageDimensions(menuObject, pubIndex, newImg)
                  itemImage.setAttribute(`src`, e.target.result);
                  itemPending.remove();
                  itemImage.style.display = `block`;
                };
                read.onerror = function (e) {
                  itemPending.remove();
                }
              }
              if (!src.match(/4cdn/g)) request.send();
              else {
                xmlImageDimensions(menuObject, pubIndex, newImg)
                itemImage.setAttribute(`src`, src);
                itemPending.remove();
                itemImage.style.display = `block`;
                }
              }
            });
          })
          .catch((response) => {
            itemContainer.remove();
            itemPending.remove();
          });
      } else { //safeSearch false
        var request = new XMLHttpRequest();
        request.open("GET", cors + src, true);
        request.responseType = "blob";
        request.onload = function () {
          var read = new FileReader();
          read.readAsDataURL(request.response);
          read.onload = function (e) {
            xmlImageDimensions(menuObject, pubIndex, newImg);
            itemImage.setAttribute(`src`, e.target.result);
            itemPending.remove();
            itemImage.style.display = `block`;
            }
            read.onerror = function (e) {
              itemPending.remove();
            }
          };
          if (!src.match(/4cdn/g)) request.send();
          else {
            xmlImageDimensions(menuObject, pubIndex, newImg)
            itemImage.setAttribute(`src`, src);
            itemPending.remove();
            itemImage.style.display = `block`;
        }
      };
    };
  }
};

var xmlTitleParsing = function (xhr) {
  if (xhr.getElementsByTagName(`title`)[0].childNodes[1])
    var title = xhr.getElementsByTagName(`title`)[0].childNodes[1].nodeValue;
  else var title = xhr.getElementsByTagName(`title`)[0].childNodes[0].nodeValue;
  if (
    !title ||
    (title.length == 7 && xhr.getElementsByTagName(`title`)[0].childNodes[0])
  )
    var title = xhr.getElementsByTagName(`title`)[0].childNodes[0].nodeValue;

  return title.replace(/<.>/g, ``);
};

var xmlAppendPublication = function (id) {
  const has = exclude.map((a) => a.toLowerCase());
  for (i = 0; i < pub.length - 1; i++) {
    if (
      has.filter(function (obj) {
        return pub[i].title.toLowerCase().match(obj);
      }).length > 0
    )
      continue;
    if (omitGuide == true && i != local) {
      document.querySelector(`.channel`).append(pub[i].post);
      images.push({ element: pub[i].element, src: pub[i].src });
    } else if (omitGuide == false) {
      document.querySelector(`.channel`).append(pub[i].post);
      images.push({ element: pub[i].element, src: pub[i].src });
    }
  }
  if (safeSearch == true && safeSearchIDs.includes(menu[id].id)) {
    for (i = 0; i <= images.length - 1; i++) {
      xmlImageAttributes(false, id, images[i].element, images[i].src);
    }
  } else if (!safeSearchIDs.includes(menu[id].id)) {
    for (i = 0; i <= images.length - 1; i++) {
      xmlImageAttributes(false, id, images[i].element, images[i].src);
    }
  }
  unloading();
  let oldest = pub[pub.length - 1].dst;
  let posts = pub.length - 1;
  let recent = pub[0].dst;
  var status = document.querySelector(`.status`);
  while (status.firstChild) status.removeChild(status.lastChild);
  var suggestions = document.querySelector(`.suggestions`);
  while (suggestions.firstChild)
    suggestions.removeChild(suggestions.lastChild);
  if (Reader == false){
    document.querySelector(`.channel`).append(footerBuild());
  }
  contentStatusDisplay(id, recent, oldest, posts);
  topMenuBarDisplay(topBar);
  xmlStatusSuggestions();
  stop = false;
}

var xmlRequestParsing = function (search, string, index) {
  init();
  pub = [];
  let html;
  let local;
  count = [];
  id = index;
  stop = true;
  images = [];
  let inline = [];
  imageDuplicate = [];
  if (!document.body.contains(document.querySelector(`#xml`)))
    _main.append(stageBuild());
  if (search == `search`) {
    uri = `${cors}${menu[index].uri}${string}&format=RSS`;
    category = category;
  } else {
    uri = `${cors}${menu[index].uri}`;
    category = menu[index].category;
  }
  _visit.style.display = `none`;
  document.title = menu[index].id.space();
  if (
    justRead == true && first == true && showSplash == true ||
    Reader == false && first == true && showSplash == true
  )
    _check.style.display = `block`;

  httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState == 4) {
      // 4 = `loaded`
      if (httpRequest.status == 200 && this.responseXML) {
        // 200 = OK
        let xhr = this.responseXML;

        if (xhr.getElementsByTagName(`entry`).length > 0) var channel = `entry`;
        else var channel = `item`;

        var quit = 30;

        for (i = 2; i <= xhr.getElementsByTagName(channel).length - 1; i++) {
          if (i === quit) break;

          let data = xhr.getElementsByTagName(channel)[i];

          if (data.childNodes.length > 1) var title = xmlTitleParsing(data);

          if (title == postDuplicate || title == ``) continue;

          var postDuplicate = title;

          let trun = truncate(title, titleTruncate, true);

          parse = xmlTimeStampParsing(channel, data);

          let share = menu[index].hash;
          if (hash == true)
            share = `${location.href.split(`?`)[0]}?${parse.cyrb53}`;
          else if (hash == false)
            share = `${location.href.split(`?`)[0]}?${share}${parse.base36}`;

          let src = xmlImageSource(data);

          let courtesy = courtesyBuild(
            menu[index].id.match(/([^\/]+)$/g),
            menu[index].image.image(),
            menu[index].uri.match(
              /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.([a-z]{2,6}){1}/g
            )
          );

          if (title.length > titleTruncate)
            var more = `<div class='more'>more</div>`;
          else var more = ``;

          if (search == `search`)
            var cat = `<div class='external'>${parse.externalURI}</div>`;

          if (src && src.match(/youtube\.com/g) && youtubeMedia == true) {
            if (data.getElementsByTagName(`media:statistics`).length > 0)
              var views =
                `<div class='ago views'> views` +
                data
                  .getElementsByTagName(`media:statistics`)[0]
                  .getAttribute(`views`)
                  .replace(/\B(?=(\d{3})+(?!\d))/g, `,`) +
                `</div>`;
            else var views = ``;
            inline = [];
            inline.push({
              id: menu[index].id.match(/([^\/]+)$/g),
              image: menu[index].image.image(),
              dst: parse.dst,
              courtesy: courtesy,
              externalURI: parse.externalURI,
              share: share,
              title: title,
              views: views,
              truncate: trun,
              more: more,
              videoSource: src,
              pubIndex: i,
              menuObject: index,
            });
            html = youtubeHTMLBuild(inline[0]);
          } else {
            if (!cat) cat = ``;
            inline = [];
            inline.push({
              dst: parse.dst,
              externalURI: parse.externalURI,
              courtesy: courtesy,
              title: title,
              share: share,
              truncate: trun,
              more: more,
              searchExternal: cat,
              src: src,
              menuObject: index,
              pubIndex: i,
            });
            html = xmlHTMLBuild(inline[0]);
          }
          pub.push({
            title: title,
            courtesy: courtesy,
            since: parse.since,
            dst: parse.dst,
            gen: parse.base36,
            enc: parse.cyrb53,
            re: parse.externalURI,
            share: share,
            more: more,
            element: i,
            post: html,
            src: src,
          });
          pub.sort(function (a, b) {
            return b.since - a.since;
          });
        }
        console.log(pub);
        for (i = 0; i < pub.length; i++) {
          if (hash == false && parseInt(pub[i].gen, 36) == post) local = i;
          else if (hash == true && pub[i].enc.slice(2, 64) == post) local = i;
        }
        if (
          !isNaN(parseFloat(local)) &&
          youtubeMedia == true &&
          isFinite(local)
        ) {
          _guide.style.display = `flex`;
          var sticky = [];
          sticky.push({
            title: menu[index].id.match(/([^\/]+)$/g),
            element: pub[local].element,
            image: menu[index].image.image(),
            share: pub[local].share,
            dst: pub[local].dst,
            src: pub[local].src,
            externalURI: pub[local].re,
            views: views,
            menuObject: index,
            pubIndex: local,
          });
          guideDisplayYoutube(sticky);
        } else if (!isNaN(parseFloat(local)) && isFinite(local)) {
          _guide.style.display = `flex`;
          var sticky = [];
          sticky.push({
            courtesy: pub[local].courtesy,
            element: pub[local].element,
            image: menu[index].image.image(),
            title: pub[local].title,
            share: pub[local].share,
            dst: pub[local].dst,
            src: pub[local].src,
            externalURI: pub[local].re,
            menuObject: index,
            pubIndex: local,
          });
          guideDisplay(sticky);
        } else if (
          Array.isArray(pub)
        ) {
          _guide.style.display = `none`;
          xmlAppendPublication(index);
          pub = null;
        }
      } else {
        id = 0;
        document.title = category.capitalize();
        if (showSplash == true) _check.style.display = `none`;
        if (document.body.contains(document.querySelector(`#xml`)))
          document.querySelector(`#xml`).remove()
        if (document.body.contains(document.querySelector(`#group`)))
          document.querySelector(`#group`).remove()
        populateCategoryGroup(category);
        displayDescription(showDescription);
        topMenuBarDisplay(topBar);
        displayExpand(expand);
        unloading();
      }
      _main.setAttribute(`tabindex`, -1);
      _main.focus();
    }
  };
  httpRequest.open(`GET`, uri);
  httpRequest.setRequestHeader(`Content-Type`, `text/html; charset=utf-8`);
  httpRequest.setRequestHeader(`Accept`, `text/html; charset=utf-8`);
  httpRequest.setRequestHeader(`X-Requested-With`, `XMLHttpRequest`);
  httpRequest.send();
};
