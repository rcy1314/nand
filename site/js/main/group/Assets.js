let Assets = function () {
  let media;
  _container.style.display = `block`;
  _toggle.style.display = `none`;
  _visit.style.display = `none`;
  _bar.style.display = `block`;
  _sb.style.display = `none`;
  location.href.split(`?`)[0].state();
  if (
    showSplash
  )
    _check.style.display = `block`;
  if (
    id &&
    !location.href.match(`\\?q=`)
  ) {
    if (
      menu[id].media
    )
      media = `<div class='media' style='display:none'>Images</div>`;
    else
      media = `<div class='blank'></div>`;
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
    i <= adj.length - 1;
    i++
  ) {
    if (
      adj[i].media
    )
      media = `<div class='media' style='display:none'>Images</div>`;
    else
      media = `<div class='blank'></div>`;
      if (
        id != menu.indexOf(adj[i])
      ) {
        _result.append(
          categoryBuild(
            adj[i].id.match(/[^\/]+$/g),
            menu.indexOf(adj[i]),
            adj[i].image.image(),
            adj[i].hash,
            adj[i].description,
            media
          )
        );
      }
    }
  main.setAttribute(`tabindex`, -1);
  displayExpand(expand);
  Topbar(topBar);
  main.focus();
  unloading();
};
