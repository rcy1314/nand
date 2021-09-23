var Dimensions = function (
  menuObject,
  pubIndex,
  Height,
  Width
) {
  let k = 5420;
  let maximum = 480;
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
    Width < maximum &&
    document.body.contains(
        _channel.querySelector(
          `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .img`
        )
    )
  ) {
    itemImage.closest(`.classic`).style.alignItems = `center`;
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
    itemImage.style.width = `180px`;
    itemImage.style.margin = `12px`;
    attribute.style.height = `74px`;
  } else {
    if (
      cropImages &&
      document.body.contains(
        _channel.querySelector(
          `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .image`
        )
      )
      &&
      menu[id].id.match(/Youtube/g) &&
      !youtubeMedia
    ) {
      itemContainer.style.height = `160px`;
      itemPending.style.height = `160px`;
      itemImage.style.height = `160px`;
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
