let Legacy = function () {
  display == `legacy`;
  _center.style.cssText = `justify-content:center !important`;
  _channel.classList.remove(`sideChannel`);
  _center.style.display = `inline-block`;
  _channel.style.height = `fit-content`;
  _center.classList.add(`sideChannel`);
  _channel.classList.remove(`flexbox`);
  _channel
    .querySelectorAll(
      `.item`
    )
      .forEach(
        (a) =>
          a.classList.remove(
            `sideItem`
          )
      );
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
          a.style.width =
            `425px`
      );
  _xml.style.top = `60px`;

  if (
    document
      .body
        .contains(
          _center
            .querySelector(
              `.bottom`
            )
          )
  ) {
    _center.querySelector(`.bottom`).style.display = `block`;
    _center.querySelector(`.bottom`).style.left = `0`;
  }

  _channel
    .querySelectorAll(
      `.item, .classic`
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

    _channel
      .querySelectorAll(
        `.header`
      )
        .forEach(
          (a) =>
            a
              .style
                .cssText
              =
              `position: relative !important`
        )

}
