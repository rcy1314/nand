let Flex = function() {
  display == `flexBox`;
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
  var column = _channel.querySelectorAll(`.item:nth-child(3n+3)`);
  for (
    let i = 0; i < column.length - 1; i++
  )
    groups += column[i].clientHeight;
  var max =
    Math.max(
      height,
      second,
      groups
    );
  var min =
    Math.min(
      height,
      second,
      groups
    );
  if (
    height == min
  )
    var min = `order:1`;
  else if (
    second == min
  )
    var min = `order:2`;
  else if (
    groups == min
  )
    var min = `order:3`;
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
  }

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
    _channel.style.height = `${(max + 4000).toString()}px`
  _channel.classList.remove(`sideChannel`);
  _center.classList.remove(`sideChannel`);
  _channel.classList.add(`flexbox`);
  _channel
    .querySelectorAll(
      `.item`
    )
    .forEach(
      (a) =>
      a.classList.add(`flex`)
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
