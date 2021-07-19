let displayLegacy = function () {
  _center.style.cssText = `justify-content:center !important`;
  _center.classList.add(`sideChannel`);
  _center.style.display = `inline-block`;
  _channel.classList.remove(`sideChannel`);
  _channel.style.height = `fit-content`;
  _channel.classList.remove(`flexbox`);
  _channel
    .querySelectorAll(`.item`)
    .forEach(
      (a) => a.classList.remove(`sideItem`)
    );
  _channel
    .querySelectorAll(`.item`)
    .forEach(
      (a) => a.classList.remove(`flexbox`)
    );
  _channel
    .querySelectorAll(`.item`)
    .forEach(
      (a) => a.style.width = `425px`
    );
  _xml.style.top = `60px`;
}
