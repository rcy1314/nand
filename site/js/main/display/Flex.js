let Flex = function() {
  display == `flexBox`;
  offset = 999999999;
  if (
    !document
    .body
    .contains(
      _xml
      .querySelector(
        `#bottom`
      )
    )
      &&
    !Reader
  )
    _channel.append(
      footerBuild(id)
    );
  if (
    window.innerWidth > 425 &&
    document
    .body
    .contains(
      _xml
      .querySelector(
        `#bottom`
      )
    )
  )
    _channel.querySelector(`#bottom`).style.cssText = min;

  else if (
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
    if (
      id &&
      menu[id].id.match(/Youtube/g)
    )
      _channel
      .querySelectorAll(
        `.item`
      )
      .forEach(
        (a) =>
        a.style.height =
        `80px`
      );
    _center.style.cssText = `display:inline-flex;width:930px`;
  } else _center.style.cssText = `display:inline-flex;width:930px`;

  _channel.classList.remove(`sideChannel`);
  _center.classList.remove(`sideChannel`);
  _channel.classList.add(`flexbox`);
  _channel
    .querySelectorAll(
      `.item`
    )
    .forEach(
      (a) =>
      a.style.marginLeft =
      `0`
    );

  _channel
    .querySelectorAll(
      `.header`
    )
    .forEach(
      (a) =>
      a
      .style
      .cssText =
      `position: absolute !important`
    )

  if (
    window.innerWidth > 1280
  )
    _display.style.display = `inline-block`;

  else
    _display.style.display = `none`;

}
