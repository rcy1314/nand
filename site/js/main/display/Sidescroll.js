let displaySideScroll = function () {
  display == `sideScroll`;
  scrollIntoView = false;
  
  _channel.classList.add(`sideChannel`);
  _xml.style.justifyContent = `center`;
  _center.classList.add(`sideChannel`);

  if (
    window.innerWidth >= 768
  )

  _center.style.right = `130px`;
  _center.style.width = `35vw`;
  _xml.style.display = `flex`;
  _center.style.left = `0`;
  _xml.style.top = `0`;

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
      .forEach((a) =>
        a.classList.add(
          `sideItem`
        )
      );
  _channel
    .querySelectorAll(
      `.classic`
    )
      .forEach((a) =>
        a.style.display = `block`
      );

    if (
      window.innerWidth >= 768
    )
      _display.style.display = `inline-block`;

    else
      _display.style.display = `none`;

    if (
      document.body.contains(
        _center.querySelector(`.bottom`)
      )
    )
      _center.querySelector(`.bottom`).style.left = `0`;

  _channel.classList.remove(`flexbox`)

}
