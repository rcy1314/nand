let Write = function (menuObject) {
  let media;
  if (
    menu[menuObject].media
  )
    media = `<div class='media' style='display:none'>Images</div>`;
  else
    media = `<div class='blank'></div>`;
  _result.append(
    categoryBuild(
      menu[menuObject].id.match(/[^\/]+$/g),
      menu.indexOf(menu[menuObject]),
      menu[menuObject].image.image(),
      menu[menuObject].hash,
      menu[menuObject].description,
      media
    )
  );
};
