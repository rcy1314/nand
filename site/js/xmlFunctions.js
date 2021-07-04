var guideDisplay = function (pubArray) {
  _guide.innerHTML = `
  <svg class='checkmark' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'>
    <circle class='checkmark__circle' cx='26' cy='26' r='25' fill='none' />
    <path class='checkmark__check' fill='none' d='M16 16 36 36 M36 16 16 36' />
  `;
  _guide.append(guideBuild(pubArray[0]));
  guideImageAttributes(pubArray[0]);
  _guide.classList.add(`blur`);
  _guide.style.zIndex = `11`;
};

var guideDisplayYoutube = function (pubArray) {
  _guide.innerHTML = `
  <svg class='checkmark' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'>
    <circle class='checkmark__circle' cx='26' cy='26' r='25' fill='none' />
    <path class='checkmark__check' fill='none' d='M16 16 36 36 M36 16 16 36' />
  `;
  _guide.append(guideBuildYoutube(pubArray[0]));
  _guide.classList.add(`blur`);
  _guide.style.zIndex = `11`;
};

var xmlChannelFooter = function (id) {
  if (document.body.contains(document.querySelector(`.center`)))
    document.querySelector(`.channel`).append(footerBuild(id));
};

var forward = function (id) {
  let next = parseInt(id) + +1
  if (menu[next])
    return parseInt(next);
  else return 1
};

var back = function (id) {
  let back = parseInt(id) - +1
  if (menu[back])
    return parseInt(back);
  else return menu.length - 1
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
        randomMenuObject !== 0 &&
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
        _guide.querySelector(`.header`).style.top = newImg.clientHeight - 60;
        _guide.querySelector(`.header`).style.width = `100vw`;
        if (guideSafeSearch == true)
          _guide.querySelector(`.filterBlur`).style.width = newImg.naturalWidth;
      } else if (newImg.naturalHeight >= newImg.naturalWidth) {
        _guide
          .querySelectorAll(`.img, .filterBlur`)
          .forEach((a) => (a.style.maxHeight = `55vh`));
        _guide
          .querySelectorAll(`.img, .filterBlur`)
          .forEach((a) => (a.style.maxWidth = `100vw`));
      }
      _guide.querySelector(`.ago`).style.position = `relative`;
      _guide.querySelector(`.header`).style.top = newImg.clientHeight - 60;
      _guide.querySelector(`.header`).style.backgroundColor =
        `var(--color-primary)`
      _guide.querySelector(`.header`).style.width = `100vw`;
      _guide.style.paddingTop = `40px`;
      if (guideSafeSearch == true) {
        _guide.querySelector(`.filterBlur`).style.top = `0`;
        _guide.querySelector(`.filterBlur`).style.height = newImg.naturalHeight;
      }
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
      if (category == `Youtube` && youtubeMedia == false) {
      _guide
        .querySelectorAll(
          `[aria-item='${pubArray.menuObject}'][aria-object='${pubArray.pubIndex}'] .image`
        )
        .forEach((a) => (a.style.height = `269px`));
      }
    }
    if (guideSafeSearch == false || !safeSearchIDs.includes(menu[id].id)) {
      _guide.querySelector(`.img`).setAttribute(`src`, pubArray.src);
      _guide.querySelector(`.sticky .image`).style.margin = `25px`;
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
          /https:\/\/i\.redd\.it\/.+?(gif|png|jpg)/g
        )
    )
      src = String(
        xhr
          .getElementsByTagName(`content`)[0]
          .childNodes[0].nodeValue.match(
            /https:\/\/i\.redd\.it\/.+?(gif|png|jpg)/g
          )
      );
    else if (
      xhr
        .getElementsByTagName(`content`)[0]
        .childNodes[0].nodeValue.match(
          /https:\/\/.\.thumbs\.redditmedia\.com\/.+?(gif|png|jpg)/g
        )
    )
      src = String(
        xhr
          .getElementsByTagName(`content`)[0]
          .childNodes[0].nodeValue.match(
            /https:\/\/.\.thumbs\.redditmedia\.com\/.+?(gif|png|jpg)/g
          )
      );
    else if (
      xhr
        .getElementsByTagName(`content`)[0]
        .childNodes[0].nodeValue.match(
          /https:\/\/external-preview\.redd.it\/.+?(gif|png|jpg)/g
        )
    )
      src = String(
        xhr
          .getElementsByTagName(`content`)[0]
          .childNodes[0].nodeValue.match(
            /https:\/\/external-preview\.redd.it\/.+?(gif|png|jpg)/g
          )
      );
    else if (xhr.getElementsByTagName(`content`))
      src = String(
        xhr
          .getElementsByTagName(`content`)[0]
          .childNodes[0].nodeValue.match(
            /\b(https?:\/\/\S*?\.(?:png|jpe?g|gif))/g
          )
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
    !menu[id].id.match(/4Chan/g) &&
    typeof xhr.getElementsByTagName(`description`)[0] === `object` ||
    Array.isArray(xhr.getElementsByTagName(`description`))
  ) {
    if (
      xhr
        .getElementsByTagName(`description`)[0]
        .innerHTML.match(/\b(https?:\/\/\S*?[a-zA-Z0-9\-\.\/\_\,]+)/g)
    ) {
      src = xhr
        .getElementsByTagName(`description`)[0]
        .innerHTML.match(/\b(https?:\/\/\S*?[a-zA-Z0-9\-\.\/\_\,]+)/g)[0];
    }
    else src = null;
  } else if (
    typeof xhr.getElementsByTagName(`description`) !== `object` ||
    typeof xhr.getElementsByTagName(`description`)[0] === `object`
  ) {
    if (
      (xhr.getElementsByTagName(`description`)[0]
        .innerHTML.match(/a.href|src/g) ||
        xhr.getElementsByTagName(`author`).length <= 0) ||
      (xhr.getElementsByTagName(`description`)[0].length > 0 &&
        Array.isArray(xhr.getElementsByTagName(`description`)))
  ) {
    if (
      xhr
        .getElementsByTagName(`description`)[0]
        .innerHTML.match(/\b(https?:\/\/\S*?\.(^rss?:png|jpe?g|gif))/g)
    )
      src = xhr
        .getElementsByTagName(`description`)[0]
        .innerHTML.match(/\b(https?:\/\/\S*?\.(^rss?:png|jpe?g|gif))/g)[0];
    }
  } else if (xhr.getElementsByTagName(`link`).length > 0)
    src = String(
      xhr
        .getElementsByTagName(`link`)[0]
        .childNodes[0].nodeValue.match(/https:\/\/.+?(gif|png|jpg)/g)
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
    if (
      dateTime.getElementsByTagName(`updated`).length == 1
    ) {
      var dst = dateTime
        .getElementsByTagName(`updated`)[0]
        .childNodes[0].nodeValue.zulu();
      var since = new Date(
        dateTime.getElementsByTagName(`updated`)[0].childNodes[0].nodeValue
      ).getTime();
      var gen = dateTime
        .getElementsByTagName(`updated`)[0]
        .childNodes[0].nodeValue.toLocaleString();
      gen = parseInt(
        gen
          .match(/([0-9]+\:[0-9]+\:[0-9]+)/g)
          .toString()
          .replace(/\:/g, ``)
      ).toString(36);
    } else if (
      dateTime.getElementsByTagName(`pubDate`).length == 1
    ) {
      var dst = dateTime
        .getElementsByTagName(`pubDate`)[0]
        .childNodes[0].nodeValue.zulu();
      var since = new Date(
        dateTime.getElementsByTagName(`pubDate`)[0].childNodes[0].nodeValue
        );
      var gen = dateTime
        .getElementsByTagName(`pubDate`)[0]
        .childNodes[0].nodeValue.toLocaleString();
      gen = parseInt(
        gen
          .match(/([0-9]+\:[0-9]+\:[0-9]+)/g)
          .toString()
          .replace(/\:/g, ``)
      ).toString(36);
    }
    parse.push({
      since: since,
      dst: dst[0],
      cyrb53: `${cyrb53(gen.toString())}-${cyrb53(channel.toString())}-${cyrb53(dateTime.toString())}-${menu[id].title}`,
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
        cyrb53: `${cyrb53(gen.toString())}-${cyrb53(channel.toString())}-${cyrb53(dateTime.toString())}-${menu[id].title}`,
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
        cyrb53: `${cyrb53(gen.toString())}-${cyrb53(channel.toString())}-${cyrb53(dateTime.toString())}-${menu[id].title}`,
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
        cyrb53: `${cyrb53(gen.toString())}-${cyrb53(channel.toString())}-${cyrb53(dateTime.toString())}-${menu[id].title}`,
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
  let itemContainer = document.querySelector(
    `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .image`
  );
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
  let copyDownload = document.querySelector(
    `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .download`
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
    itemImage.closest(`.classic`).style.alignItems = `center`;
    if (sideScroll == false)
      itemImage.closest(`.classic`).style.display = `flex`;
    else if (flexBox == false && sideScroll == true)
      itemImage.closest(`.classic`).style.display = `block`;
    itemContainer.style.height = `fit-content`;
    itemImage.classList.remove(`hidden`);
    copyPicture.style.display = `none`;
    copyDownload.style.display = `none`;
    if (
      document.body.contains(
        document.querySelector(
          `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .filterBlur`
        )
      )
    )
    itemFilter.classList.add(`leave`);
    itemImage.classList.add(`leave`);
    copyPost.style.display = `block`;
    itemImage.style.width = `180px`;
    itemImage.style.margin = `12px`;
    attribute.style.height = `74px`;
  } else {
    if (
      newImg.naturalHeight >= newImg.naturalWidth &&
      document.body.contains(
        document.querySelector(
          `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .image`
        )
      ) &&
        cropImages == true &&
        menu[id].id.match(/Youtube/g)
    )
    itemContainer.style.height = `160px`;
    else if (
      cropImages == true &&
      document.body.contains(
        document.querySelector(
          `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .image`
        )
      ) && newImg.naturalHeight <= newImg.naturalWidth
    ) itemContainer.style.height = `fit-content`;
    else if (
      cropImages == false &&
      document.body.contains(
        document.querySelector(
          `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .image`
        )
      ) && newImg.naturalHeight >= newImg.naturalWidth
    ) itemContainer.style.height = `auto`;
    else if (
      cropImages == false &&
      document.body.contains(
        document.querySelector(
          `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .image`
        )
      ) && newImg.naturalHeight <= newImg.naturalWidth
    ) itemContainer.style.height = `fit-content`;
    if (
      document.body.contains(
        document.querySelector(
          `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .filterBlur`
        )
      )
    )
    itemFilter.classList.add(`default`);
    if (
      document.body.contains(
        document.querySelector(
          `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .img`
        )
      )
    )
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
  let attribute = document.querySelector(
    `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .attribute`
  );
  let copyPicture = document.querySelector(
    `[aria-item='${pubIndex}'] .picture`
  );
  let copyDownload = document.querySelector(
    `[aria-item='${pubIndex}'] .download`
  );
  let copyPost = document.querySelector(
    `[aria-item='${pubIndex}'] .post`
  );
  if (
    src &&
    src != `null` &&
    imageDuplicate.includes(src)
  ) {
    document
      .querySelectorAll(`[aria-object='${menuObject}'][aria-item='${pubIndex}']`)
      .forEach((a) => a.remove());
  } else if (
    !src ||
    src == `null` ||
    src.match(/\.webm|\.mp4/g)
  ) {
    if (
      document.body.contains(
        document.querySelector(
          `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .image`
        )
      )
    ) {
      if (onlyImages == true) {
        document.querySelector(
         `[aria-object='${menuObject}'][aria-item='${pubIndex}']`
        ).remove();
      } else {
        itemContainer.style.height = `0px`;
        copyDownload.style.display = `none`;
        copyPicture.style.display = `none`;
        attribute.style.height = `74px`;
        itemPending.remove();
        itemImage.remove();
        count.shift();
      }
    }
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
      if (onlyImages == true) {
        document.querySelector(
         `[aria-object='${menuObject}'][aria-item='${pubIndex}']`
        ).remove();
      } else {
        itemPending.remove();
        itemImage.remove();
      }
    };
    newImg.onload = function () {
      if (
          src.match(/ytimg/g) &&
          youtubeMedia == false
        ) {
        document
          .querySelector(
            `[aria-object='${menuObject}'][aria-item='${pubIndex}']`
          )
          .classList.add(`yt`);
        itemPending.style.display = `none`;
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
              if (
                jsonResponse.score >= safeSearchScore
                ) {
                  var request = new XMLHttpRequest();
                  request.open("GET", cors + src, true);
                  request.setRequestHeader(`Access-Control-Allow-Origin`, `*`);
                  request.setRequestHeader(`X-Requested-With`, `*`);
                  request.responseType = "blob";
                  request.onload = function () {
                    var read = new FileReader();
                    read.readAsDataURL(request.response);
                    read.onload = function (e) {
                      xmlImageDimensions(menuObject, pubIndex, newImg)
                      itemFilter.style.transform = `scale(4)`
                      itemFilter.classList.add(`blur`);
                      itemImage.setAttribute(`src`, e.target.result);
                      itemPending.style.display = `none`;
                      itemImage.style.display = `block`;
                    };
                  }
                  request.onerror = function (e) {
                    if (onlyImages == true) {
                      document.querySelector(
                       `[aria-object='${menuObject}'][aria-item='${pubIndex}']`
                      ).remove();
                    } else {
                      itemPending.remove();
                      itemImage.remove();
                    }
                  };
                  if (!src.match(/4cdn/g)) request.send();
                  else {
                    xmlImageDimensions(menuObject, pubIndex, newImg)
                    copyDownload.classList.add(`picture`);
                    copyPicture.classList.add(`download`);
                    itemFilter.style.transform = `scale(4)`
                    itemFilter.classList.add(`blur`);
                    itemImage.setAttribute(`src`, src);
                    itemPending.style.display = `none`;
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
              request.setRequestHeader(`Access-Control-Allow-Origin`, `*`);
              request.setRequestHeader(`X-Requested-With`, `*`);
              request.responseType = "blob";
              request.onload = function () {
                var read = new FileReader();
                read.readAsDataURL(request.response);
                read.onload = function (e) {
                  xmlImageDimensions(menuObject, pubIndex, newImg)
                  itemImage.setAttribute(`src`, e.target.result);
                  itemPending.style.display = `none`;
                  itemImage.style.display = `block`;
                };
              }
              request.onerror = function (e) {
                if (onlyImages == true) {
                  document.querySelector(
                   `[aria-object='${menuObject}'][aria-item='${pubIndex}']`
                  ).remove();
                } else {
                  itemPending.remove();
                  itemImage.remove();
                };
              }
              if (!src.match(/4cdn/g)) request.send();
              else {
                xmlImageDimensions(menuObject, pubIndex, newImg)
                itemImage.setAttribute(`src`, src);
                itemPending.style.display = `none`;
                itemImage.style.display = `block`;
                }
              }
            });
          })
          .catch((response) => {
            itemContainer.remove();
            itemPending.style.display = `none`;
          });
      } else if (
            document.body.contains(
              document.querySelector(
                `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .image`
              )
            )
          )
        { //safeSearch false
        var request = new XMLHttpRequest();
        request.open("GET", cors + src, true);
        request.setRequestHeader(`Access-Control-Allow-Origin`, `*`);
        request.setRequestHeader(`X-Requested-With`, `*`);
        request.responseType = "blob";
        request.onload = function () {
          var read = new FileReader();
          read.readAsDataURL(request.response);
          read.onload = function (e) {
            xmlImageDimensions(menuObject, pubIndex, newImg);
            if (category == `Youtube` && youtubeMedia == false)
              itemContainer.style.paddingBottom = `56.25%`;
            itemImage.setAttribute(`src`, e.target.result);
            itemPending.style.display = `none`;
            itemImage.style.display = `block`;
            }
            }
            request.onerror = function (e) {
              if (onlyImages == true) {
                document.querySelector(
                 `[aria-object='${menuObject}'][aria-item='${pubIndex}']`
                ).remove();
              } else {
                itemPending.remove();
                itemImage.remove();
              }
            };
          if (!src.match(/4cdn/g)) request.send();
          else {
            xmlImageDimensions(menuObject, pubIndex, newImg)
            itemImage.setAttribute(`src`, src);
            itemPending.style.display = `none`;
            itemImage.style.display = `block`;
        }
      };
    };
    newImg.onerror = function () {
      if (onlyImages == true) {
        document.querySelector(
         `[aria-object='${menuObject}'][aria-item='${pubIndex}']`
        ).remove();
      } else {
        itemContainer.style.height = `0px`;
        copyDownload.style.display = `none`;
        copyPicture.style.display = `none`;
        attribute.style.height = `74px`;
        itemContainer.remove();
      }
    };
  };
}

var xmlTitleParsing = function (xhr) {
  if (xhr.getElementsByTagName(`title`)[0].childNodes[1])
    var title = xhr.getElementsByTagName(`title`)[0].childNodes[1].nodeValue;
  else var title = xhr.getElementsByTagName(`title`)[0].childNodes[0].nodeValue;
  if ( // <[CDATA Title]> fix
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
      let channel = document.createElement(`div`);
      channel.classList.add(`channel`);
      channel.style.position = `fixed`;
      if (document.body.contains(document.querySelector(`#xml`))) {
        let append = document.querySelectorAll(`.channel`);
        append[append.length - 1].append(pub[i].post)
        images.push({ element: pub[i].element, src: pub[i].src });
      }
    } else if (omitGuide == false) {
      let channel = document.createElement(`div`);
      channel.classList.add(`channel`);
      channel.style.position = `fixed`;
      if (document.body.contains(document.querySelector(`#xml`))) {
        let append = document.querySelectorAll(`.channel`);
        append[append.length - 1].append(pub[i].post)
        images.push({ element: pub[i].element, src: pub[i].src });
      }
    }
  }
  if (safeSearch == true || safeSearchIDs.includes(menu[id].id)) {
    for (i = 0; i <= images.length - 1; i++) {
      xmlImageAttributes(false, id, images[i].element, images[i].src);
    }
  } else if (!safeSearchIDs.includes(menu[id].id)) {
    for (i = 0; i <= images.length - 1; i++) {
      xmlImageAttributes(false, id, images[i].element, images[i].src);
    }
  }
  if (Reader == true && flexBox == false && id !== 0) {
    _main
      .querySelectorAll(`.joi`)
      .forEach((a) => a.classList.add(`luv`));
    if (document.body.contains(document.querySelector(`#xml`))) {
      if (sideScroll == false)
        scrollToElm(touchmove,
          _main,
          document.querySelector(`[aria-object='${id}']`),
          250
        );
      else if (sideScroll == true && first != true) {
        touchmove = true;
        sideScrollToElm(touchmove,
          document.querySelector(`.channel`),
          document.querySelector(`[aria-object='${id}']`),
          250
        );
      }
    }
  }
  if (pub.length > 1) {
    if (pub[pub.length - 1].dst) var oldest = pub[pub.length - 1].dst;
    if (pub[pub.length - 1]) var posts = pub.length - 1;
    if (pub[0]) var recent = pub[0].dst;
    if (document.body.contains(document.querySelector(`.content`))) {
      var status = document.querySelector(`.status`);
      while (status.firstChild) status.removeChild(status.lastChild);
      var suggestions = document.querySelector(`.suggestions`);
      while (suggestions.firstChild)
        suggestions.removeChild(suggestions.lastChild);
    }
  }
  if (Reader == false) {
    if (id !== 0 && pub[pub.length - 1].dst) var oldest = pub[pub.length - 1].dst;
    if (id !== 0 && pub[pub.length - 1]) var posts = pub.length - 1;
    if (id !== 0 && pub[0]) var recent = pub[0].dst;
    //document.querySelector(`.channel`).append(footerBuild(id));
  }
  if (
    document.body.contains(document.querySelector(`#xml`))
  ) {
    if (showSplash == true) _check.style.display = `none`;
    contentStatusDisplay(id, recent, oldest, posts);
    if (flexBox == true && _main.clientWidth >= 426) displayFlex(displayFlex);
    topMenuBarDisplay(topBar);
    xmlStatusSuggestions();
    local = null;
    stop = false;
    images = [];
    post = null;
    unloading();
  }
}

var xmlRequestParsing = function (search, string, index) {
  init();
  pub = [];
  let html;
  count = [];
  id = index;
  stop = true;
  images = [];
  let inline = [];
  imageDuplicate = [];
  console.log(menu[index].id);
  _toggle.style.display = `none`
  let state = `?q=${menu[index].id.hyphen()}`
  state.state();
  if (readPrevious == false) random = [];
  if (
    !document.body.contains(document.querySelector(`#group`)) &&
    !document.body.contains(document.querySelector(`#xml`))
  )
    _main.append(stageBuild());
  if (search == `search`) {
    uri = `${cors}${menu[index].uri}${string.add()}&format=RSS`;
    category = category;
  } else {
    uri = `${cors}${menu[index].uri}`;
    category = menu[index].category;
  }
  _visit.style.display = `none`;
  _sb.style.display = `none`
  document.title = menu[index].id.space();
  if (
    justRead == true && first == true && showSplash == true ||
    Reader == false && first == true && showSplash == true
  )
    _check.style.display = `block`;
    if (
      !document.body.contains(document.querySelector(`#group`))
    ) httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState == 4) {
      // 4 = `loaded`
      if (httpRequest.status == 200 && this.responseXML) {
        // 200 = OK
        let xhr = this.responseXML;
        console.log(xhr);
        if (xhr.getElementsByTagName(`entry`).length > 0) var channel = `entry`;
        else var channel = `item`;

        if (Reader == false) quit = 30;
        else quit = 16;
        for (i = 2; i <= xhr.getElementsByTagName(channel).length - 1; i++) {
          if (i === quit) break;

          let data = xhr.getElementsByTagName(channel)[i];

          if (data.childNodes.length > 1) var title = xmlTitleParsing(data);

          if (title == postDuplicate || title == ``) continue;

          var postDuplicate = title;

          let trun = truncate(title, titleTruncate, true);

          parse = xmlTimeStampParsing(channel, data);

          if (trun.match(/\w+/g))
            var uri = trun.toLowerCase().match(/\w+/g).join(`-`)

          else var uri = trun.toLowerCase()

          let share = menu[index].title;

          if (hash == `long`)
            share = `${location.href.split(`?`)[0]}?${parse.cyrb53}`;
          else if (hash == `short`)
            share = `${location.href.split(`?`)[0]}?${menu[index].hash}${parse.base36}`;
          else if (hash == `title`)
            share =
            `${location.href.split(`?`)[0]}?${uri}-${share}`;

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
                `views ${data.getElementsByTagName(`media:statistics`)[0].getAttribute(`views`).replace(/\B(?=(\d{3})+(?!\d))/g, `,`)}`;
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
              uri: uri
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
              uri: uri
            });
            html = xmlHTMLBuild(inline[0]);
          }
          pub.push({
            title: title,
            courtesy: courtesy,
            since: parse.since,
            dst: parse.dst,
            gen: parse.base36,
            enc: parse.cyrb53.slice(0, parse.cyrb53.length - 10),
            re: parse.externalURI,
            share: share,
            more: more,
            element: i,
            post: html,
            src: src,
            uri: uri
          });
          pub.sort(function (a, b) {
            return b.since - a.since;
          });
        }
        for (i = 0; i < pub.length; i++) {
          if (hash == `long` && pub[i].enc == post) local = i;
          else if (hash == `short` && parseInt(pub[i].gen, 36) == post) local = i;
          else if (
            hash == `title` &&
            pub[i].uri == post) local = i;
        }
        if (
          menu[index].id.match(/Youtube/g) &&
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
            publish: title,
            views: views,
            menuObject: index,
            pubIndex: local,
          });
          guideDisplayYoutube(sticky);
          document.querySelector(`.sticky`).style.display = `flex`;
          unloading();
        } else if (!isNaN(parseFloat(local)) && isFinite(local)) {
          if (pub[local].src == null) {
            pub[local].re.exit()
            return false;
          }
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
          unloading();
        } else if (
          Array.isArray(pub)
        ) {
          _guide.style.display = `none`;
          xmlAppendPublication(index);
          unloading();
          pub = null;
        }
      } else {
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
  httpRequest.setRequestHeader(`Access-Control-Allow-Origin`, `*`);
  httpRequest.setRequestHeader(`X-Requested-With`, `*`);
  httpRequest.send();
};
