let reverseCategoryGroup = function (translation) {
  _air.style.visibility = `hidden`;
  let media;
  for (
    let i = 0;
    i < menu.length - 1;
    i++) {
    if (category == menu[i].category) {
      if (menu[i].media)
        media = `<div class='media' style='display:none'>Images</div>`;
      else media = `<div class='blank'></div>`;
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
  setTimeout(function () {
    _air.style.visibility = `visible`;
  }, 1250)
  displayExpand(expand);
  unloading();
};
