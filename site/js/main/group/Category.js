let Category = function(translation) {
  let media;
  _container.style.display = `block`;
  _toggle.style.display = `none`;
  _sb.style.display = `none`;
  if (
    window.innerWidth >= 768 &&
    !sideBarLock
  )
    _bar.style.display = `block`;
  else _bar.style.display = `none`;
  if (
    showSplash
  )
    _check.style.display = `block`;
  Group()
  for (
    let i = 0; i <= menu.length - 1; i++
  ) {
    if (
      menu[i].media
    )
      media = `<div class='media' style='display:none'>Images</div>`;
    else
      media = `<div class='blank'></div>`;

    if (
      onlyImages
    ) {
      if (
        translation == menu[i].category &&
        menu[i].media
      ) {
        _result.append(
          categoryBuild(
            menu[i].id.match(/[^\/]+$/g),
            menu.indexOf(menu[i]),
            menu[i].image.image(),
            menu[i].hash,
            menu[i].description,
            media
          )
        );
      }
    } else if (
      !onlyImages
    ) {
      if (
        translation == menu[i].category
      ) {
        _result.append(
          categoryBuild(
            menu[i].id.match(/[^\/]+$/g),
            menu.indexOf(menu[i]),
            menu[i].image.image(),
            menu[i].hash,
            menu[i].description,
            media
          )
        );
      }
    }
  }

  Expand(expand);

  Reverse(translation);

  main.setAttribute(`tabindex`, -1);
  Topbar(topBar);
  main.focus();
};
