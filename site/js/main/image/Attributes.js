var Attributes = function (empty, menuObject, pubIndex, src) {
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
      .querySelectorAll(
        `[aria-object='${menuObject}'][aria-item='${pubIndex}']`
      )
        .forEach(
          (a) => a.remove()
        );
  }
  else if (
    !src ||
    src == `null` ||
    src.match(/\.webm|\.mp4/g)
  ) {
    if (
      itemContainer
    ) {
      if (
        onlyImages
      )
        itemContainer.remove();
      else if (
          window.innerWidth <= 425
      ) {
        _channel
          .querySelectorAll(
            `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .pub,
             [aria-object='${menuObject}'][aria-item='${pubIndex}'] .ago`
          )
            .forEach(
              (a) =>
                a.style.cssText = `display:block !important`
            )
          itemPending.remove();
          copyDownload.style.display = `none`;
          copyPicture.style.display = `none`;
          attribute.style.height = `74px`;
          count.shift();
        }
      }
    }
  imageDuplicate.push(src);
  if (
    src &&
    src
      .match(
        /https?:\/\//g
      )
    &&
    !src
      .match(
        /comments|feeds|fsdn|undefined|external-preview/g
      )
  ) {
    let newImg;
    newImg = new Image();
    newImg.setAttribute(`src`, src);
    newImg.onerror = function ()
      {
        if (
          onlyImages
        )
          itemContainer.remove();
        else if (
            window.innerWidth <= 425
        ) {
          _channel
            .querySelectorAll(
              `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .pub,
               [aria-object='${menuObject}'][aria-item='${pubIndex}'] .ago`
            )
              .forEach(
                (a) =>
                  a.style.cssText = `display:block !important`
              )
          itemPending.remove();
        }
    };
    newImg.onload = function () {
      let Height;
      let Width;
      Height = newImg.naturlHeight
      Width = newImg.naturalWidth
      if (
          src.match(/ytimg/g) &&
          youtubeMedia == false
        ) {
          itemContainer
            .classList
              .add(
                `yt`
              );
        itemPending.remove();
      }
      if (
        safeSearchIDs.includes(menu[id].id) &&
        safeSearch
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
                jsonResponse.score >= safeSearchScore &&
                _channel.querySelector(
                  `[aria-object='${menuObject}'][aria-item='${pubIndex}']`
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
                      Dimensions(
                        menuObject,
                        pubIndex,
                        Height,
                        Width
                      )
                      itemImage.setAttribute(`src`, e.target.result);
                      itemFilter.style.transform = `scale(4)`
                      itemPending.style.display = `none`;
                      itemImage.style.display = `block`;
                      itemFilter.classList.add(`blur`);
                      _channel
                        .querySelector(
                          `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .classic`
                        )
                          .style
                            .cssText
                              =
                            `height:${itemImage.clientHeight}px !important`
                    };
                  }
                  request.onerror = function (e) {
                    if (
                      onlyImages
                    )
                      itemContainer.remove();
                      else if (
                          window.innerWidth <= 425
                      ) {
                        _channel
                          .querySelectorAll(
                            `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .pub,
                             [aria-object='${menuObject}'][aria-item='${pubIndex}'] .ago`
                          )
                            .forEach(
                              (a) =>
                                a.style.cssText = `display:block !important`
                            )
                        itemPending.remove();
                      }
                  };
                  if (
                    !src.match(/4cdn/g)
                  )
                    request.send();
                  else {
                    Dimensions(
                      menuObject,
                      pubIndex,
                      Height,
                      Width
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
                  Dimensions(
                    menuObject,
                    pubIndex,
                    Height,
                    Width
                  )
                  itemImage.setAttribute(`src`, e.target.result);
                  itemPending.style.display = `none`;
                  itemImage.style.display = `block`;
                  setTimeout(
                    function() {
                  _channel
                    .querySelector(
                      `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .classic`
                    )
                      .style
                        .cssText
                          =
                        `height:${itemImage.clientHeight}px !important`
                      }, 300
                    )
                };
              }
              request.onerror = function (e) {
                if (
                  onlyImages
                )
                  itemContainer.remove();
                else if (
                    window.innerWidth <= 425
                ) {
                  _channel
                    .querySelectorAll(
                      `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .pub,
                       [aria-object='${menuObject}'][aria-item='${pubIndex}'] .ago`
                    )
                      .forEach(
                        (a) =>
                          a.style.cssText = `display:block !important`
                      )
                  itemPending.remove();
                }
              }
              if (
                !src.match(/4cdn/g)
              )
                request.send();
              else {
                Dimensions(
                  menuObject,
                  pubIndex,
                  Height,
                  Width
                )
                itemImage.setAttribute(`src`, src);
                itemPending.style.display = `none`;
                itemImage.style.display = `block`;
                }
              }
            });
          })
          .catch((response) => {
            itemPending.remove();
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
            Dimensions(
              menuObject,
              pubIndex,
              Height,
              Width
            );
            itemImage.setAttribute(`src`, e.target.result);
            itemImage.style.display = `block`;
            itemPending.remove();
            setTimeout(
              function() {
                _channel
                  .querySelector(
                    `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .classic`
                  )
                    .style
                      .cssText
                    =
                      `height:${itemImage.clientHeight}px !important`
                }, 300
              )
            }
          }
            request.onerror = function (e) {
              if (
                onlyImages
              )
                itemContainer.remove();
              else if (
                  window.innerWidth <= 425
              ) {
                _channel
                  .querySelectorAll(
                    `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .pub,
                     [aria-object='${menuObject}'][aria-item='${pubIndex}'] .ago`
                  )
                    .forEach(
                      (a) =>
                        a.style.cssText = `display:block !important`
                    )
                itemPending.remove();
              }
            };
          if (
            !src.match(/4cdn/g)
          )
            request.send();
          else {
            Dimensions(
              menuObject,
              pubIndex,
              Height,
              Width
            )
            itemImage.setAttribute(`src`, src);
            itemPending.style.display = `none`;
            itemImage.style.display = `block`;
        }
      };
    };
    newImg.onerror = function () {
      if (
        onlyImages
      )
        itemContainer.remove();
      else if (
        window.innerWidth <= 425
      ) {
        _channel
          .querySelectorAll(
            `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .pub,
             [aria-object='${menuObject}'][aria-item='${pubIndex}'] .ago`
          )
            .forEach(
              (a) =>
                a.style.cssText = `display:block !important`
            )
        copyDownload.style.display = `none`;
        copyPicture.style.display = `none`;
        attribute.style.height = `74px`;
        itemPending.remove();
      }
    };
  }
  else {
    if (
      onlyImages
    )
      itemContainer.remove();
      else if (
          window.innerWidth <= 425
      ) {
        _channel
          .querySelectorAll(
            `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .pub,
             [aria-object='${menuObject}'][aria-item='${pubIndex}'] .ago`
          )
            .forEach(
              (a) =>
                a.style.cssText = `display:block !important`
            )
        itemPending.remove();
    }
      itemPending.remove();
    };
  }
