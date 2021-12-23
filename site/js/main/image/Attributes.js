var Attributes = function(empty, menuObject, pubIndex, src) {
  console.log(images)
  count.push(`null`);
  let k = 5420;
  let shrunk = 200;
  let maximum = 280;
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
      images.shift();
      if (
        images.length
      )
      Attributes(
        false,
        images[0].id,
        images[0].element,
        images[0].src
      );
  } else if (
    !src ||
    src == `null` ||
    src.match(/\.webm|\.mp4|\.gif/g)
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
      images.shift();
      if (
        images.length
      )
      Attributes(
        false,
        images[0].id,
        images[0].element,
        images[0].src
      );
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
                      Height < shrunk ||
                      Reader
                    ) {
                      itemContainer.style.backgroundImage = `url(${e.target.result})`;
                      itemPending.remove();
                    } else {
                      item.classList.add(`i`);
                      itemImage.setAttribute(`src`, e.target.result);
                      itemContainer.style.position = `absolute`;
                      itemImage.style.position = `absolute`;
                      itemPending.remove();
                      itemFilter.classList.add(`blur`);
                      setTimeout(
                        () => {
                          if (
                            itemImage.clientHeight > shrunk &&
                            itemImage.clientWidth > maximum
                          ) {
                            item.style
                              .height =
                              `${itemImage.clientHeight}px`
                            itemClassic.style
                              .height =
                              `${itemImage.clientHeight}px`
                            itemContainer.style
                              .height =
                              `${itemImage.clientHeight}px`
                          } else {
                            itemContainer.style.backgroundImage = `url(${e.target.result})`;
                            itemPending.remove();
                          }
                        }, 50
                      )
                    }
                    images.shift();
                    if (
                      images.length
                    )
                    Attributes(
                      false,
                      images[0].id,
                      images[0].element,
                      images[0].src
                    );
                  }
                }
                request.onerror = function(e) {
                  itemPending.remove();
                  if (
                    onlyImages
                  )
                    item.remove();
                  copyDownload.style.display = `none`;
                  copyPicture.style.display = `none`;
                  copyPost.style.display = `none`;
                  attribute.style.height = `35px`;
                };
                if (
                  !src.match(/4cdn/g)
                )
                  request.send();
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
                      Height < shrunk ||
                      Reader
                    ) {
                      itemContainer.style.backgroundImage = `url(${e.target.result})`;
                      itemPending.remove();
                    } else {
                      item.classList.add(`i`);
                      itemPending.remove();
                      itemImage.setAttribute(`src`, e.target.result);
                      setTimeout(
                        () => {
                          if (
                            itemImage.clientHeight > shrunk &&
                            itemImage.clientWidth > maximum
                          ) {
                            item.style
                              .height =
                              `${itemImage.clientHeight + 2}px`
                            itemClassic.style
                              .height =
                              `${itemImage.clientHeight}px`
                            itemContainer.style
                              .height =
                              `${itemImage.clientHeight}px`
                          } else {
                            itemContainer.style.backgroundImage = `url(${e.target.result})`;
                            itemPending.remove();
                          }
                        }, 50
                      )
                    }
                    images.shift();
                    if (
                      images.length
                    )
                    Attributes(
                      false,
                      images[0].id,
                      images[0].element,
                      images[0].src
                    );
                  }
                }
                request.onerror = function(e) {
                  itemPending.remove();
                  if (
                    onlyImages
                  )
                    item.remove();
                  copyDownload.style.display = `none`;
                  copyPicture.style.display = `none`;
                  copyPost.style.display = `none`;
                  attribute.style.height = `35px`;
                }
                if (
                  !src.match(/4cdn/g)
                )
                  request.send();
              }
            });
          })
          .catch((response) => {
            itemPending.remove();
            if (
              onlyImages
            )
              item.remove();
          });
      } else if (
        document
        .body
        .contains(
          itemImage
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
            item.classList.add(`i`);
            if (
              menu[id].id.match(/Youtube/g)
            )
              itemImage.classList.add(`youtube`)
            if (
              Width < maximum ||
              Height < shrunk ||
              Reader
            ) {
              itemContainer.style.backgroundImage = `url(${e.target.result})`;
              itemPending.remove();
            } else {
              itemImage.setAttribute(`src`, e.target.result);
              itemPending.remove();
              setTimeout(
                () => {
                  if (
                    itemImage.clientHeight > shrunk &&
                    itemImage.clientWidth > maximum
                  ) {
                    item.style
                      .height =
                      `${itemImage.clientHeight}px`
                    itemClassic.style
                      .height =
                      `${itemImage.clientHeight}px`
                    itemContainer.style
                      .height =
                      `${itemImage.clientHeight}px`
                  } else {
                    itemContainer.style.backgroundImage = `url(${e.target.result})`;
                    itemPending.remove();
                  }
                }, 50
              )
            }
            images.shift();
            if (
              images.length
            )
            Attributes(
              false,
              images[0].id,
              images[0].element,
              images[0].src
            );
          }
        }
        request.onerror = function(e) {
          itemPending.remove();
          if (
            onlyImages
          )
            item.remove();
          copyDownload.style.display = `none`;
          copyPicture.style.display = `none`;
          copyPost.style.display = `none`;
          attribute.style.height = `35px`;
        };
        if (
          !src.match(/4cdn/g)
        )
          request.send();
      }; //END NEWIMG.ONLOAD
      if (
        document
        .body
        .contains(
          itemFilter
        )
      )
        itemFilter.classList.add(`default`);

      if (
        document
        .body
        .contains(
          itemImage
        )
      )
        itemImage.classList.add(`default`);
    };
    newImg.onerror = function() {
      itemPending.remove();
      if (
        onlyImages
      )
        item.remove();
      copyDownload.style.display = `none`;
      copyPicture.style.display = `none`;
      copyPost.style.display = `none`;
      attribute.style.height = `35px`;
    };
  } else { //no src or exempt
    itemPending.remove();
    if (
      onlyImages
    )
      item.remove();
    copyDownload.style.display = `none`;
    copyPicture.style.display = `none`;
    copyPost.style.display = `none`;
    attribute.style.height = `35px`;
    images.shift();
    if (
      images.length
    )
    Attributes(
      false,
      images[0].id,
      images[0].element,
      images[0].src
    );
  };
}
