let Sidescroll = function() {
  display == `sideScroll`;
  offset = 1000;
  scrollIntoViewBuffer = scrollIntoView;
  scrollIntoView = false;

  _channel.style.height = `fit-content`;
  _channel.classList.add(`sideChannel`);
  _center.classList.add(`sideChannel`);
  _xml.style.justifyContent = `center`;

  if (
    window.innerWidth >= 768
  )

    _center.style.right = `130px`;
  _center.style.width = `35vw`;
  _xml.style.display = `flex`;
  _center.style.left = `0`;
  _xml.style.top = `0`;

  if (
    document
    .body
    .contains(
      _channel
      .querySelector(
        `.item`
      )
    )
  ) {
    _channel
    .querySelectorAll(
      `.item`
    ).forEach(
      (a) => {
        a.classList.add(
          `sideItem`
        )
      }
    )

  }

  if (
    document.body.contains(
      _center.querySelector(`.bottom`)
    )
  )
    _center.querySelector(`.bottom`).style.left = `0`;

  _channel.classList.remove(`flexbox`)
  _channel.classList.remove(`duo`)

  if (
    window.innerWidth <= 425 &&
    document
    .body
    .contains(
      _xml
      .querySelector(
        `#bottom`
      )
    )
  ) {
    _channel.querySelector(`#bottom`).style.cssText = `position:fixed;bottom:0`;
  }
  if (
    window.innerWidth
    >
    768
  )
    _display.style.display = `inline-block`;

}
