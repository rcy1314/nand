let Reverse = function(translation) {
  let media;
  _air.style.visibility = `hidden`;
  _air.style.paddingBottom = 60;

  for (
    let i = 0; i <= menu.length - 1; i++) {
    if (
      !onlyImages
    ) {
      if (
        category == menu[i].category
      ) {
        if (
          menu[i].media
        )
          media = `<div class='media' style='display:none'>Images</div>`;

        else
          media = `<div class='blank'></div>`;

        _air.append(
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
      onlyImages
    ) {
      if (
        translation == menu[i].category &&
        menu[i].media
      ) {
        media = `<div class='media' style='display:none'>Images</div>`;

        _air.append(
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
  setTimeout(
    () => {
      _air.style.visibility = `visible`;
    }, 1750
  )
  Expand(expand);
  unloading();
};
