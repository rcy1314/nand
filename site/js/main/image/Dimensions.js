var Dimensions = function(
  menuObject,
  pubIndex,
  Height,
  Width
) {
  let item = _channel.querySelector(
    `[aria-object='${menuObject}'][aria-item='${pubIndex}']`
  );
  let itemWrap = _channel.querySelector(
    `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .wrap`
  );
  let itemClassic = _channel.querySelector(
    `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .classic`
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
    if (
      cropImages &&
      document
        .body
          .contains(
            itemContainer
          )
        &&
      window.innerWidth >= 768
    ) {
      itemContainer.style.height = `180px`;
      itemImage.style.height = `180px`;
      item.style.height = `180px`;
      itemWrap.style.height = `180px`;
      itemClassic.style.height = `180px`;
    } else if (
      window.innerWidth < 768 &&
      cropImages
    ) {
      itemContainer.style.height = `80px`;
      itemPending.style.height = `80px`;
      itemImage.style.height = `80px`;
      item.style.height = `180px`;
      itemWrap.style.height = `180px`;
      itemClassic.style.height = `180px`;
    } else if (
      !cropImages &&
      document
        .body
          .contains(
            itemContainer
          )
    )
      itemContainer.style.height = `fit-content`;

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

  }
