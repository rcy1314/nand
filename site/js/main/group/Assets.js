let Assets = function() {
  let media;
  _container.style.display = `block`;
  _toggle.style.display = `none`;
  _visit.style.display = `none`;
  _sb.style.display = `none`;
  if (
    window.innerWidth >= 768 &&
    !sideBarLock
  )
    _bar.style.display = `block`;
  else _bar.style.display = `none`;
  location.href.split(`?`)[0].state();
  if (
    showSplash
  )
    _check.style.display = `block`;
  for (
    let i = 0; i <= adj.length - 1; i++
  ) {
    if (
      onlyImages
    ) {
      if (
        id != menu.indexOf(adj[i]) &&
        adj[i].media
      ) {
        media = `<div class='media' style='display:none'>Images</div>`;
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
  }
  main.setAttribute(`tabindex`, -1);
  Expand(expand);
  Topbar(topBar);
  main.focus();
  unloading();
};
