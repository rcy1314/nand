let displaySideScroll = function () {
  _channel.classList.add(`sideChannel`);
  _xml.style.justifyContent = `center`;
  _center.classList.add(`sideChannel`);
  if (
    _main.clientWidth >= 768
  )
  _center.style.right = `130px`;
  _center.style.width = `35vw`;
  _xml.style.display = `flex`;
  _center.style.left = `0`;
  _xml.style.top = `60px`;
  scrollIntoView = false;
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
      _main.clientWidth >= 768
    )
      _display.style.display = `inline-block`;
    else
      _display.style.display = `none`;
  _channel.classList.remove(`flexbox`)
}
