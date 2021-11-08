var Attributes = function(empty, menuObject, pubIndex, src) {
  count.push(`null`);
  let k = 5420;
  let shrunk = 100;
  let maximum = 480;
  let jsonResponseScore;
  let item = _channel.querySelector(
    `[aria-object='${menuObject}'][aria-item='${pubIndex}']`
  );
  let itemClassic = _channel.querySelector(
    `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .classic`
  );
  let itemWrap = _channel.querySelector(
    `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .wrap`
  );
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
  } else if (
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
        item.remove();
      copyDownload.style.display = `none`;
      copyPicture.style.display = `none`;
      attribute.style.height = `74px`;
      itemPending.remove();
      count.shift();
    }
  }
  imageDuplicate.push(src);
  if (
    src &&
    src
    .match(
      /https?:\/\//g
    ) &&
    !src
    .match(
      /comments|feeds|fsdn|undefined|external-preview/g
    )
  ) {
    let newImg;
    newImg = new Image();
    newImg.setAttribute(`src`, src);
    newImg.onerror = function() {
      if (
        onlyImages
      )
        item.remove();
      itemPending.remove();
    };
    newImg.onload = function() {
      let Height;
      let Width;
      Height = newImg.naturlHeight
      Width = newImg.naturalWidth
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
                request.onload = function() {
                  var read = new FileReader();
                  read.readAsDataURL(request.response);
                  read.onload = function(e) {
                    if (
                      Width < maximum ||
                      Height < shrunk
                    ) {
                      itemContainer.style.backgroundImage = `url(${e.target.result})`;
                      copyDownload.style.display = `none`;
                      copyPicture.style.display = `none`;
                      copyPost.style.display = `block`;
                      attribute.style.height = `74px`;
                      itemPending.remove();
                  } else {
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
                    setTimeout(
                      function() {
                        if (
                          !cropImages
                        ) {
                          item.style
                            .cssText =
                            `height:${itemImage.clientHeight}px !important`
                          itemWrap.style
                            .cssText =
                            `height:${itemImage.clientHeight}px !important`
                          itemClassic.style
                            .cssText =
                            `height:${itemImage.clientHeight}px !important`
                        }
                      }, 1
                    )
                  };
                }
              }
                request.onerror = function(e) {
                  if (
                    onlyImages
                  )
                    item.remove();
                  itemPending.remove();
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
                request.onload = function() {
                  var read = new FileReader();
                  read.readAsDataURL(request.response);
                  read.onload = function(e) {
                    if (
                      Width < maximum ||
                      Height < shrunk
                    ) {
                      itemContainer.style.backgroundImage = `url(${e.target.result})`;
                      copyDownload.style.display = `none`;
                      copyPicture.style.display = `none`;
                      copyPost.style.display = `block`;
                      attribute.style.height = `74px`;
                      itemPending.remove();
                  } else {
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
                        if (
                          !cropImages
                        ) {

                          item.style
                            .cssText =
                            `height:${itemImage.clientHeight}px !important`
                          itemWrap.style
                            .cssText =
                            `height:${itemImage.clientHeight}px !important`
                          itemClassic.style
                            .cssText =
                            `height:${itemImage.clientHeight}px !important`
                        }
                      }, 1
                    )
                  };
                }
              }
                request.onerror = function(e) {
                  if (
                    onlyImages
                  )
                    item.remove();
                  itemPending.remove();
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
      ) { //safeSearch false
        var request = new XMLHttpRequest();
        request.open("GET", cors + src, true);
        request.setRequestHeader(`Access-Control-Allow-Origin`, `*`);
        request.setRequestHeader(`X-Requested-With`, `*`);
        request.responseType = "blob";
        request.onload = function() {
          var read = new FileReader();
          read.readAsDataURL(request.response);
          read.onload = function(e) {
            if (
              menu[id].id.match(/Youtube/g)
            )
              itemImage.classList.add(`youtube`)
              if (
                Width < maximum ||
                Height < shrunk
              ) {
                itemContainer.style.backgroundImage = `url(${e.target.result})`;
                copyDownload.style.display = `none`;
                copyPicture.style.display = `none`;
                copyPost.style.display = `block`;
                attribute.style.height = `74px`;
                itemPending.remove();
            } else {
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
                if (
                  !cropImages
                ) {

                  item.style
                    .cssText =
                    `height:${itemImage.clientHeight}px !important`
                  itemWrap.style
                    .cssText =
                    `height:${itemImage.clientHeight}px !important`
                  itemClassic.style
                    .cssText =
                    `height:${itemImage.clientHeight}px !important`
                }
              }, 1
            )
          }
        }
      }
        request.onerror = function(e) {
          if (
            onlyImages
          )
            item.remove();
          itemPending.remove();
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
    newImg.onerror = function() {
      if (
        onlyImages
      )
        item.remove();
      copyDownload.style.display = `none`;
      copyPicture.style.display = `none`;
      attribute.style.height = `74px`;
      itemPending.remove();
    };
  } else {
    if (
      onlyImages
    )
      item.remove();
    copyDownload.style.display = `none`;
    copyPicture.style.display = `none`;
    copyPost.style.display = `none`;
    attribute.style.height = `35px`;
    itemPending.remove();
  };
}
