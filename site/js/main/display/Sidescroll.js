let Sidescroll = function () {
  scrollIntoView = false;
  display == `sideScroll`;
  _channel.classList.add(`sideChannel`);
  _channel.classList.remove(`flexbox`);
  _xml.style.justifyContent = `center`;
  _center.classList.add(`sideChannel`);
  _center.style.right = `130px`;
  _center.style.width = `35vw`;
  _xml.style.display = `flex`;
  _center.style.left = `0`;
  _xml.style.top = `0`;

  if (
    document
      .body
        .contains(
          _center
            .querySelector(
              `.bottom`
            )
        )
  )
    _center
      .querySelector(
        `.bottom`
      )
        .remove();

  if (
    window.innerWidth >= 768
  )
    _display.style.display = `inline-block`;
  else
    _display.style.display = `none`;

  _channel
    .querySelectorAll(
      `.item`
    )
      .forEach(
        (a) =>
          a.classList.remove(
            `flexbox`
          )
      );

  _channel
    .querySelectorAll(
      `.item`
    )
      .forEach(
        (a) =>
          a
            .classList
              .add(
                `sideItem`
              )
      );

  _channel
    .querySelectorAll(
      `.classic`
    )
      .forEach(
        (a) =>
          a
            .style
              .display
            =
              `block`
      );

  _channel
    .querySelectorAll(
      `.classic`
    )
      .forEach(
        (a) =>
          a
            .style
              .cssText
              =
            `height:${
              a
              .closest(
                `.item`
              )
                .querySelector(
                  `.img`
                )
                .clientHeight
            }px !important`
    )
}
