var guideDisplay = function (pubArray) {
  _guide.innerHTML = `
  <svg class='checkmark' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'>
    <circle class='checkmark__circle' cx='26' cy='26' r='25' fill='none' />
    <path class='checkmark__check' fill='none' d='M16 16 36 36 M36 16 16 36' />
  `;
  _guide.append(
    guideBuild(
      pubArray[0]
    )
  );
  guideImageAttributes(
    pubArray[0]
  );
  _guide.classList.add(`blur`);
  _guide.style.zIndex = `11`;
};

var guideDisplayYoutube = function (pubArray) {
  _guide.innerHTML = `
  <svg class='checkmark' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'>
    <circle class='checkmark__circle' cx='26' cy='26' r='25' fill='none' />
    <path class='checkmark__check' fill='none' d='M16 16 36 36 M36 16 16 36' />
  `;
  _guide.append(
    guideBuildYoutube(
      pubArray[0]
    )
  );
  _guide.classList.add(`blur`);
  _guide.style.zIndex = `11`;
};

var contentStatusDisplay = function (
  menuIndex,
  recentPost,
  oldestPost,
  postsCount
) {
    let status = _main.querySelector(`#xml .status`);
    _status.append(
      contentBuild(
        oldestPost,
        recentPost,
        postsCount,
        menuIndex)
      );
};

var xmlStatusSuggestions = function () {
  let duplicate = [];
    for (
      let i = 1;
      i <= contentStatusBuffer;
      i++
    ) {
      let randomMenuObject = menu.indexOf(
        menu[
          Math.floor(
            Math.random() * menu.length - 1
          )
        ]
      );
      if (
        !duplicate.includes(randomMenuObject) &&
        menu[randomMenuObject] &&
        randomMenuObject !== 0
      ) {
        if (
          menu[
            randomMenuObject
          ].media == true
        )
          var media = `feed contains images`;
        else if (
          menu[
            randomMenuObject
          ].media == false
        )
          var media = `feed might not contain images`;
        duplicate.push(randomMenuObject);
        _suggestions.append(
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
  };

var guideImageAttributes = function (pubArray) {
  let maximum = 480;
  let newImg = new Image();
  newImg.setAttribute(
    `src`,
    pubArray.src
  );
  newImg.onload = function () {
    if (
      safeSearchIDs.includes(menu[id].id) &&
      guideSafeSearch == true
    ) {
      fetch(
        `${cors}${api}${pubArray.src}`,
        {
          method: "GET",
          headers: {
            Origin: "*",
            Accept: "application/json",
            "X-Requested-With": "*",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
      })
        .then(
          (response) => {
          response.json().then(
            (jsonResponse) => {
              if (jsonResponse.score >= safeSearchScore) {
                if (
                  document.body.contains(
                    _guide.querySelector(
                      `[aria-item='${pubArray.menuObject}']
                       [aria-object='${pubArray.pubIndex}']
                       .filterBlur
                      `
                    )
                  )
                )
                  _guide
                    .querySelector(
                      `[aria-item='${pubArray.menuObject}']
                       [aria-object='${pubArray.pubIndex}']
                       .filterBlur
                      `
                    )
                    .classList.add(`blur`);
              }
          });
          _guide
            .querySelector(`.img`).setAttribute(
              `src`,
              pubArray.src
            );
          document.querySelector(`.sticky`).style.display = `block`;
          _check.style.display = `none`;
          _guide.style.display = `flex`;
        })
        .catch(
          (response) => {
            while (_guide.lastChild) _guide.removeChild(_guide.lastChild);
            _check.style.display = `none`;
            _guide.style.display = `none`;
            local = null;
            post = null;
          }
        );
    }
    if (_main.clientWidth <= 425) {
      _main.classList.add(`guide`);
      _guide.querySelector(`.sticky .header`).style.position = `absolute`;
      _guide.querySelector(`.sticky .src`).style.display = `block`;
      _guide.querySelector(`.sticky .image`).style.margin = `0`;
      if (newImg.naturalWidth >= newImg.naturalHeight) {
        _guide
          .querySelectorAll(`.img, .filterBlur`).forEach(
            (a) => a.style.maxHeight = `65vh`
          );
        _guide
          .querySelectorAll(`.img, .filterBlur`).forEach(
            (a) => a.style.maxWidth = `100vw`
          );
        _guide.querySelector(`.header`).style.top = newImg.clientHeight - 60;
        _guide.querySelector(`.header`).style.width = `100vw`;
        if (guideSafeSearch == true)
          _guide.querySelector(`.filterBlur`).style.width = newImg.naturalWidth;
      } else if (newImg.naturalHeight >= newImg.naturalWidth) {
        _guide
          .querySelectorAll(`.img, .filterBlur`).forEach(
            (a) => a.style.maxHeight = `55vh`
          );
        _guide
          .querySelectorAll(`.img, .filterBlur`).forEach(
            (a) => a.style.maxWidth = `100vw`
          );
      }
      _guide.querySelector(`.header`).style.top = newImg.clientHeight - 60;
      _guide.querySelector(`.ago`).style.position = `relative`;
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
      if (newImg.naturalWidth <= maximum)
      _guide.querySelector(`.sticky .image`).style.margin = `25px`;
      if (newImg.naturalWidth >= newImg.naturalHeight) {
        _guide
          .querySelectorAll(`.img, .filterBlur`).forEach(
            (a) => a.style.maxHeight = `90vh`
          );
        _guide
          .querySelectorAll(`.img, .filterBlur`).forEach(
            (a) => a.style.maxWidth = `calc(80vw - 220px)`
          );
      } else if (newImg.naturalHeight >= newImg.naturalWidth) {
        _guide
          .querySelectorAll(`.img, .filterBlur`).forEach(
            (a) => a.style.maxHeight = `90vh`
          );
        _guide
          .querySelectorAll(`.img, .filterBlur`).forEach(
            (a) => a.style.maxWidth = `calc(55vw - 220px)`
          );
      }
      if (
        !youtubeMedia &&
        menu[id].id.match(/Youtube/g)
      ) {
      _guide
        .querySelectorAll(
          `[aria-item='${pubArray.menuObject}'][aria-object='${pubArray.pubIndex}'] .image`
        ).forEach(
          (a) => a.style.height = `269px`
        );
      }
    }
    if (
      !safeSearchIDs.includes(menu[id].id) ||
      guideSafeSearch == false
    ) {
      _guide.querySelector(`.img`).setAttribute(
        `src`,
        pubArray.src
      );
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
        .match(
          /youtube\.com/
        )
    )
      src =
        `https://www.youtube.com/embed/` +
        xhr
          .getElementsByTagName(`media:content`)[0]
          .getAttribute(`url`)
          .match(
            /[a-zA-Z0-9\_\-]{11}/g
          );
    else
      src = String(
        xhr
          .getElementsByTagName(`media:content`)[0]
          .getAttribute(`url`)
          .match(
            /\b(https?:\/\/\S*?\..+)/g
          )
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
        .innerHTML.match(
          /\b(https?:\/\/\S*?\.(?:png|jpe?g|gif))/g
        )
    )
      src = xhr
        .getElementsByTagName(`content:encoded`)[0]
        .innerHTML.match(
          /\b(https?:\/\/\S*?\.(?:png|jpe?g|gif))/g
        )[0];
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
        .innerHTML.match(
          /\b(https?:\/\/\S*?[a-zA-Z0-9\-\.\/\_\,]+)/g
        )
    ) {
      src = xhr
        .getElementsByTagName(`description`)[0]
        .innerHTML.match(
          /\b(https?:\/\/\S*?[a-zA-Z0-9\-\.\/\_\,]+)/g
        )[0];
    }
    else src = null;
  } else if (
    typeof xhr.getElementsByTagName(`description`)[0] === `object` ||
    typeof xhr.getElementsByTagName(`description`) !== `object`
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
        .innerHTML.match(
          /\b(https?:\/\/\S*?\.(^rss?:png|jpe?g|gif))/g
        )
    )
      src = xhr
        .getElementsByTagName(`description`)[0]
        .innerHTML.match(
          /\b(https?:\/\/\S*?\.(^rss?:png|jpe?g|gif))/g
        )[0];
    }
  } else if (xhr.getElementsByTagName(`link`).length > 0)
    src = String(
      xhr
        .getElementsByTagName(`link`)[0]
        .childNodes[0].nodeValue.match(
          /https:\/\/.+?(gif|png|jpg)/g
        )
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
        .innerHTML.match(
          /\b(https?:\/\/\S*?\.(?:png|jpe?g|gif))/g
        )[0]
    );
  else src = null;
  return src;
};

var xmlTimeStampParsing = function (channel, dateTime) {
  let parse = [];
  if (channel == `entry`) {
    let re = dateTime.getElementsByTagName(`link`)[0].getAttribute(`href`);
    if (dateTime.getElementsByTagName(`updated`).length == 1) {
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

var xmlImageDimensions = function (
  menuObject,
  pubIndex,
  newImg
) {
  let k = 5420;
  let maximum = 480;
  let itemContainer = _channel.querySelector(
    `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .image`
  );
  let itemImage = _channel.querySelector(
    `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .img`
  );
  let itemFilter = _channel.querySelector(
    `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .filterBlur`
  );
  let attribute = _channel.querySelector(
    `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .attribute`
  );
  let copyPicture = _channel.querySelector(
    `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .picture`
  );
  let copyDownload = _channel.querySelector(
    `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .download`
  );
  let copyPost = _channel.querySelector(
    `[aria-item='${pubIndex}'] .post`
  );
  if (
    newImg.naturalWidth < maximum &&
    document.body.contains(
        _channel.querySelector(
          `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .img`
        )
    )
  ) {
    itemImage.closest(`.classic`).style.alignItems = `center`;
    if (!sideScroll)
      itemImage.closest(`.classic`).style.display = `flex`;
    else if (!flexBox && sideScroll)
      itemImage.closest(`.classic`).style.display = `block`;
    itemContainer.style.height = `fit-content`;
    itemImage.classList.remove(`hidden`);
    copyPicture.style.display = `none`;
    copyDownload.style.display = `none`;
    if (
      document.body.contains(
        _channel.querySelector(
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
        _channel.querySelector(
          `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .image`
        )
      ) &&
        cropImages &&
        menu[id].id.match(/Youtube/g)
    )
    itemContainer.style.height = `160px`;
    else if (
      cropImages &&
      document.body.contains(
        _channel.querySelector(
          `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .image`
        )
      ) && newImg.naturalHeight <= newImg.naturalWidth
    ) itemContainer.style.height = `fit-content`;
    else if (
      !cropImages &&
      document.body.contains(
        _channel.querySelector(
          `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .image`
        )
      ) && newImg.naturalHeight >= newImg.naturalWidth
    ) itemContainer.style.height = `auto`;
    else if (
      !cropImages &&
      document.body.contains(
        _channel.querySelector(
          `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .image`
        )
      ) && newImg.naturalHeight <= newImg.naturalWidth
    ) itemContainer.style.height = `fit-content`;
    if (
      document.body.contains(
        _channel.querySelector(
          `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .filterBlur`
        )
      )
    )
    itemFilter.classList.add(`default`);
    if (
      document.body.contains(
        _channel.querySelector(
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
  let itemContainer = _channel.querySelector(
    `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .image`
  );
  let itemImage = _channel.querySelector(
    `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .img`
  );
  let itemPending = _channel.querySelector(
    `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .pending`
  );
  let itemFilter = _channel.querySelector(
    `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .filterBlur`
  );
  let attribute = _channel.querySelector(
    `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .attribute`
  );
  let copyPicture = _channel.querySelector(
    `[aria-item='${pubIndex}'] .picture`
  );
  let copyDownload = _channel.querySelector(
    `[aria-item='${pubIndex}'] .download`
  );
  let copyPost = _channel.querySelector(
    `[aria-item='${pubIndex}'] .post`
  );
  if (
    src &&
    src != `null` &&
    imageDuplicate.includes(src)
  ) {
    _channel
      .querySelectorAll(`[aria-object='${menuObject}'][aria-item='${pubIndex}']`)
      .forEach(
        (a) => a.remove()
      );
  } else if (
    !src ||
    src == `null` ||
    src.match(/\.webm|\.mp4/g)
  ) {
    if (
      document.body.contains(
        _channel.querySelector(
          `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .image`
        )
      )
    ) {
      if (onlyImages) {
        _channel.querySelector(
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
      if (onlyImages)
        _channel.querySelector(
         `[aria-object='${menuObject}'][aria-item='${pubIndex}']`
        ).remove();
      else {
        itemPending.remove();
        itemImage.remove();
      }
    };
    newImg.onload = function () {
      if (
          src.match(/ytimg/g) &&
          youtubeMedia == false
        ) {
        _channel
          .querySelector(
            `[aria-object='${menuObject}'][aria-item='${pubIndex}']`
          )
          .classList.add(`yt`);
        itemPending.style.display = `none`;
      }
      if (
        safeSearch &&
        safeSearchIDs.includes(menu[id].id)
      ) {
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
                      xmlImageDimensions(
                        menuObject,
                        pubIndex,
                        newImg
                      )
                      itemImage.setAttribute(`src`, e.target.result);
                      itemFilter.style.transform = `scale(4)`
                      itemPending.style.display = `none`;
                      itemImage.style.display = `block`;
                      itemFilter.classList.add(`blur`);
                    };
                  }
                  request.onerror = function (e) {
                    if (onlyImages == true) {
                      _main.querySelector(
                       `[aria-object='${menuObject}'][aria-item='${pubIndex}']`
                      ).remove();
                    } else {
                      itemPending.remove();
                      itemImage.remove();
                    }
                  };
                  if (!src.match(/4cdn/g)) request.send();
                  else {
                    xmlImageDimensions(
                      menuObject,
                      pubIndex,
                      newImg
                    )
                    itemFilter.style.transform = `scale(4)`
                    copyDownload.classList.add(`picture`);
                    copyPicture.classList.add(`download`);
                    itemImage.setAttribute(`src`, src);
                    itemPending.style.display = `none`;
                    itemImage.style.display = `block`;
                    itemFilter.classList.add(`blur`);
                  }
              } else if (
                jsonResponse.score <= safeSearchScore &&
                document.body.contains(
                    _channel.querySelector(
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
                  xmlImageDimensions(
                    menuObject,
                    pubIndex,
                    newImg
                  )
                  itemImage.setAttribute(`src`, e.target.result);
                  itemPending.style.display = `none`;
                  itemImage.style.display = `block`;
                };
              }
              request.onerror = function (e) {
                if (onlyImages)
                  _channel.querySelector(
                   `[aria-object='${menuObject}'][aria-item='${pubIndex}']`
                  ).remove();
                else {
                  itemPending.remove();
                  itemImage.remove();
                };
              }
              if (!src.match(/4cdn/g)) request.send();
              else {
                xmlImageDimensions(
                  menuObject,
                  pubIndex,
                  newImg
                )
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
              _channel.querySelector(
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
            xmlImageDimensions(
              menuObject,
              pubIndex,
              newImg
            );
            if (
              !flexBox &&
              !youtubeMedia &&
              menu[id].id.match(/Youtube/g)
            )
              itemContainer.style.paddingBottom = `56.25%`;
            itemImage.setAttribute(`src`, e.target.result);
            itemPending.style.display = `none`;
            itemImage.style.display = `block`;
            }
            }
            request.onerror = function (e) {
              if (onlyImages)
                _channel.querySelector(
                 `[aria-object='${menuObject}'][aria-item='${pubIndex}']`
                ).remove();
              else {
                itemPending.remove();
                itemImage.remove();
              }
            };
          if (!src.match(/4cdn/g)) request.send();
          else {
            xmlImageDimensions(
              menuObject,
              pubIndex,
              newImg
            )
            itemImage.setAttribute(`src`, src);
            itemPending.style.display = `none`;
            itemImage.style.display = `block`;
        }
      };
    };
    newImg.onerror = function () {
      if (onlyImages) {
        _channel.querySelector(
         `[aria-object='${menuObject}'][aria-item='${pubIndex}']`
        ).remove();
      } else {
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
  else if (xhr.getElementsByTagName(`title`)[0].childNodes[0])
    var title = xhr.getElementsByTagName(`title`)[0].childNodes[0].nodeValue;
  if (
    !title
    )
    var title = ``;
  else if  ( // <[CDATA Title]> fix
      xhr.getElementsByTagName(`title`)[0].childNodes[0] &&
      title.length == 7
  )
    var title = xhr.getElementsByTagName(`title`)[0].childNodes[0].nodeValue;

  return title.replace(/<.>/g, ``);
};

var xmlAppendPublication = function (id) {
  if (
    document.body.contains(
      _center.querySelector(`#bottom`)
    )
  )
  _center.querySelector(`#bottom`).remove();
  const has = exclude.map((a) => a.toLowerCase());
  for (i = 0; i < pub.length - 1; i++) {
    if (
      has.filter(function (obj) {
        return pub[i].title.toLowerCase().match(obj);
      }).length > 0
    )
      continue;
    if (
      omitGuide == true &&
      i != local
    ) {
        _channel.append(pub[i].post)
        images.push(
          {
            element: pub[i].element,
            src: pub[i].src
          }
        );
    } else if (omitGuide == false) {
        _channel.append(pub[i].post)
        images.push(
          {
            element: pub[i].element,
            src: pub[i].src
          }
        );
    }
  }
  if (
    safeSearch ||
    safeSearchIDs.includes(menu[id].id)
  ) {
    for (
      let i = 0;
      i <= images.length - 1;
      i++
    ) {
      xmlImageAttributes(
        false,
        id,
        images[i].element,
        images[i].src
      );
    }
  } else if (
    !safeSearchIDs.includes(
      menu[id].id
    )
  ) {
    for (
      let i = 0;
      i <= images.length - 1;
      i++
    ) {
      xmlImageAttributes(
        false,
        id,
        images[i].element,
        images[i].src
      );
    }
  }
  if (
    document.body.contains(
      _xml
    )
  ) {
    if (
      !sideScroll &&
      touchmove &&
      !Reader ||
      first ||
      document.body.contains(
        _channel.querySelector(`.item`)
      )
    ) {
      scrollToElm(
        touchmove,
        _main,
        _channel.querySelector(`[aria-object='${id}']`),
        250
      );
    } else if (
      sideScroll &&
      !Reader &&
      !first
    ) {
      touchmove = true;
      sideScrollToElm(touchmove,
        _channel,
        _channel.querySelector(`[aria-object='${id}']`),
        250
      );
    }
  }
  if (pub.length > 1) {
    if (pub[pub.length - 1].dst) var oldest = pub[pub.length - 1].dst;
    if (pub[pub.length - 1]) var posts = pub.length - 1;
    if (pub[0]) var recent = pub[0].dst;
  }
  if (
    pub.length > 1 &&
    !Reader
  ) {
    if (pub[pub.length - 1].dst) var oldest = pub[pub.length - 1].dst;
    if (pub[pub.length - 1]) var posts = pub.length - 1;
    if (pub[0]) var recent = pub[0].dst;
  }
    if (
      flexBox
    )
      displayFlex();
    else if (
      sideScroll
    )
      displaySideScroll();
    else if (
      legacy
    )
      displayLegacy();
    if (showSplash) _check.style.display = `none`;
    if (!Reader)
      _channel.append(
        footerBuild(id)
      );
    contentStatusDisplay(id, recent, oldest, posts);
    topMenuBarDisplay(topBar);
    xmlStatusSuggestions();
    local = null;
    stop = false;
    images = [];
    post = null;
    unloading();
    first = false;
}

var xmlRequestParsing = function (index) {
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
  document.title = menu[index].id.space();
  let state = `?q=${menu[index].id.hyphen()}`
  state.state();
  if (!readPrevious) random = [];
  if (
    !document.body.contains(
      _channel.querySelector(`.item`)
    ) &&
    first
  ) stageXML();
  uri = `${cors}${menu[index].uri}`;
  category = menu[index].category;
  _visit.style.display = `none`;
  if (_main.clientWidth >= 768)
    _bar.style.display = `none`;
  _sb.style.display = `none`;
  if (
    first &&
    showSplash ||
    !Reader &&
    first &&
    showSplash
  )
    _check.style.display = `block`;
  httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState == 4) {
      // 4 = `loaded`
      if (httpRequest.status == 200 && this.responseXML) {
        // 200 = OK
        let xhr = this.responseXML;
        console.log(xhr);
        if (xhr.getElementsByTagName(`entry`).length > 0) var channel = `entry`;
        else var channel = `item`;

        for (
          let i = 2;
          i <= xhr.getElementsByTagName(channel).length - 1;
          i++
        ) {
          if (i === quit) break;

          let data = xhr.getElementsByTagName(channel)[i];

          if (data.childNodes.length > 1) var title = xmlTitleParsing(data);

          if (title == postDuplicate || title == ``) continue;

          var postDuplicate = title;

          let trun =
            truncate(
              title,
              titleTruncate,
              true
            );

          parse =
            xmlTimeStampParsing(
              channel,
              data
            );

          var uri = trun.toLowerCase().match(/\w+/g).join(`-`);

          let share = menu[index].title;

          if (hash == `long`)
            share =
              `${location.href.split(`?`)[0]}?${parse.cyrb53}`;
          else if (hash == `short`)
            share =
              `${location.href.split(`?`)[0]}?${menu[index].hash}${parse.base36}`;
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

          if (
            src &&
            src.match(/youtube\.com/g) &&
            youtubeMedia == true
          ) {
            if (data.getElementsByTagName(`media:statistics`).length > 0)
              var views =
                `views ${data.getElementsByTagName(`media:statistics`)[0].getAttribute(`views`).replace(/\B(?=(\d{3})+(?!\d))/g, `,`)}`;
            else var views = ``;

            inline = [];
            inline.push({
              id: menu[index].id.match(/([^\/]+)$/g),
              image: menu[index].image.image(),
              externalURI: parse.externalURI,
              courtesy: courtesy,
              menuObject: index,
              videoSource: src,
              dst: parse.dst,
              truncate: trun,
              share: share,
              title: title,
              views: views,
              more: more,
              pubIndex: i,
              uri: uri
            });
            html = youtubeHTMLBuild(inline[0]);
          } else {
            inline = [];
            inline.push({
              externalURI: parse.externalURI,
              courtesy: courtesy,
              menuObject: index,
              dst: parse.dst,
              truncate: trun,
              title: title,
              share: share,
              more: more,
              src: src,
              pubIndex: i,
              uri: uri
            });
            html = xmlHTMLBuild(inline[0]);
          }
          pub.push({
            title: title,
            enc: parse.cyrb53.slice(0, parse.cyrb53.length - 17),
            re: parse.externalURI,
            courtesy: courtesy,
            since: parse.since,
            gen: parse.base36,
            dst: parse.dst,
            share: share,
            more: more,
            element: i,
            post: html,
            src: src,
            uri: uri
          });
          pub.sort(
            function (a, b) {
              return b.since - a.since;
            }
          );
        }
        for (
          let i = 0;
          i < pub.length;
          i++) {
          if (
            pub[i].enc == post &&
            hash == `long`
          ) local = i;
          else if (
            parseInt(pub[i].gen, 36) == post &&
            hash == `short`
          ) local = i;
          else if (
            pub[i].uri == post &&
            hash == `title`
          ) local = i;
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
            image: menu[index].image.image(),
            element: pub[local].element,
            externalURI: pub[local].re,
            share: pub[local].share,
            dst: pub[local].dst,
            src: pub[local].src,
            menuObject: index,
            pubIndex: local,
            publish: title,
            views: views,
          });
          guideDisplayYoutube(sticky);
          document.querySelector(`.sticky`).style.display = `flex`;
          unloading();
        } else if (
          !isNaN(
            parseFloat(
              local
            )
          ) &&
          isFinite(
            local
          )
        ) {
          if (pub[local].src == null) {
            pub[local].re.exit()
            return false;
          }
          _guide.style.display = `flex`;

          var sticky = [];
          sticky.push({
            image: menu[index].image.image(),
            courtesy: pub[local].courtesy,
            element: pub[local].element,
            externalURI: pub[local].re,
            title: pub[local].title,
            share: pub[local].share,
            dst: pub[local].dst,
            src: pub[local].src,
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
        stageGroup();
        populateCategoryGroup(category);
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
