let Category = function (translation) {
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
  if (
    id &&
    !location.href.match(`\\?q=`)
  ) {
    if (menu[id].media)
      media = `<div class='media' style='display:none'>Images</div>`;
    else media = `<div class='blank'></div>`;
    _result.append(
      categoryBuild(
        menu[id].id.match(/[^\/]+$/g),
        menu.indexOf(menu[id]),
        menu[id].image.image(),
        menu[id].hash,
        menu[id].description,
        media
      )
    );
  }
  for (
    let i = 0;
    i <= menu.length - 1;
    i++
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
        id != menu.indexOf(menu[i]) &&
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
        translation == menu[i].category &&
        id != menu.indexOf(menu[i])
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

  if (
    !onlyImages
  )
    Reverse(translation);

  else {
    _air.style.paddingBottom = 0;
    unloading();
  }

  main.setAttribute(`tabindex`, -1);
  Topbar(topBar);
  main.focus();
};
