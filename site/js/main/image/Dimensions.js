var Dimensions = function (
  menuObject,
  pubIndex,
  Height,
  Width
) {
  let k = 5420;
  let shrunk = 100;
  let maximum = 480;
  let item = _channel.querySelector(
    `[aria-object='${menuObject}'][aria-item='${pubIndex}']`
  );
  let itemContainer = _channel.querySelector(
    `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .image`
  );
  let itemPending = _channel.querySelector(
    `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .pending`
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
    `[aria-item='${pubIndex}'][aria-item='${pubIndex}'] .post`
  );
  if (
    itemImage &&
    itemImage.clientHeight < shrunk &&
    display !== `flexBox`
  ) {
    setTimeout(
      function() {
        item.style.cssText = `height:${itemImage.clientHeight}px !important`;
      }, 300
    )
  }
  if (
    Width < maximum &&
    document.body.contains(
        _channel.querySelector(
          `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .img`
        )
    )
  ) {
    itemImage.closest(`.classic`).style.cssText = `align-items:center;position:relative`;
    if (
      display !== `sideScroll`
    )
      itemImage.closest(`.classic`).style.display = `flex`;
    else
      itemImage.closest(`.classic`).style.display = `block`;
    itemContainer.style.height = `fit-content`;
    itemImage.classList.remove(`hidden`);
    copyDownload.style.display = `none`;
    copyPicture.style.display = `none`;
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
    itemImage.style.width = `200px`;
    attribute.style.height = `74px`;
  } else {
    if (
      cropImages &&
      document.body.contains(
        _channel.querySelector(
          `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .image`
        )
      )
      ||
      menu[id].id.match(/Youtube/g) &&
      !youtubeMedia &&
      window.innerWidth > 425
    ) {
      itemContainer.style.height = `200px`;
      itemImage.style.height = `340px`;
      _channel.querySelectorAll(
        `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .classic,
        [aria-object='${menuObject}'][aria-item='${pubIndex}'] .wrap`
      )
        .forEach(
          (a) =>
            a
              .style
                .height
                  =
                `300px`
        )
      item.style.height = `300px`;
    } else if (
      window.innerWidth < 768 &&
      cropImages
    ) {
      itemContainer.style.height = `80px`;
      itemPending.style.height = `80px`;
      itemImage.style.height = `80px`;
    } else if (
      !cropImages
      &&
      document.body.contains(
        _channel.querySelector(
          `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .image`
        )
      )
    ) {
      itemContainer.style.height = `fit-content`;
    }
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
