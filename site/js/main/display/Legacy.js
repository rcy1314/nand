let Legacy = function() {
  display == `legacy`;
  offset = 1000;
  _center.style.cssText = `justify-content:center !important`;
  _channel.classList.remove(`sideChannel`);
  _center.classList.remove(`sideChannel`);
  _center.style.display = `inline-block`;
  _channel.style.height = `fit-content`;
  _channel.classList.remove(`flexbox`);
  _channel.style.height = `fit-content`;
  _channel
    .querySelectorAll(
      `.header`
    )
    .forEach(
      (a) => {
        setTimeout(
          () => {
            a
            .style
            .position =
            `relative`;
            a.closest(`.item`)
              .style
              .width =
              `425px`;
            a.closest(`.item`).classList.remove(
              `sideItem`
            );
            a.closest(`.item`).classList.remove(
              `flexbox`
            );
          }, 50
        )
      }
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

}
