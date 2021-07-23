let displayLegacy = function () {
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
          `540px`
    );
  _xml.style.top = `60px`;
}
