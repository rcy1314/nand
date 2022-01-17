let Duo = function() {
  display == `flexBox`;
  offset = 999999999;
  var height = 0;
  var second = 0;
  var groups = 0;
  var column = _channel.querySelectorAll(`.item:nth-child(3n+1)`);
  for (
    let i = 0; i < column.length - 1; i++
  )
    height += column[i].clientHeight;
  var column = _channel.querySelectorAll(`.item:nth-child(3n+2)`);
  for (
    let i = 0; i < column.length - 1; i++
  )
    second += column[i].clientHeight;
  var max =
    Math.max(
      height,
      second,
    );
  var min =
    Math.min(
      height,
      second,
    );
  if (
    height == min
  )
    var min = `order:0`;
  else if (
    second == min
  )
    var min = `order:1`;

  if (
    !document
    .body
    .contains(
      _xml
      .querySelector(
        `#bottom`
      )
    ) &&
    document
    .body
    .contains(
      _channel
      .querySelector(
        `.item`
      )
    ) &&
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
    _center.style.cssText = `display:inline-flex;width:930px`;
  } else _center.style.cssText = `display:inline-flex;width:930px`;
  if (
    document
    .body
    .contains(
      _channel
      .querySelector(
        `.item`
      )
    )
  )
    _channel.style.height = `99999999px`
  _channel.classList.remove(`sideChannel`);
  _center.classList.remove(`sideChannel`);
  _channel.classList.remove(`flexbox`);
  _channel.classList.add(`duo`);
  _center.style.width = `930px`;

  if (
    window.innerWidth <
    1280
  )
    _display.style.display = `none`;

}
