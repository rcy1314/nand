let displaySideScroll = function () {
  _channel.classList.add(`sideChannel`);
  _xml.style.justifyContent = `center`;
  _center.classList.add(`sideChannel`);
  _center.style.width = `35vw`;
  _xml.style.display = `flex`;
  _center.style.top = `60px`;
  _center.style.left = `0`;
  scrollIntoView = false;
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
  _display.style.display = `inline-block`;
  _channel.classList.remove(`flexbox`)
}
