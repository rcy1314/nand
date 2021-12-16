let Options = function() {
  sideBarListBuild(`anim`, `animations`, `fa-sync`, `Animations`);
  appendAnimations(`.anim`, `animate`, animations);

  sideBarListBuild(`port`, `viewport`, `fa-columns`, `View`);
  appendViews(`.port`, `view`, view);

  sideBarListBuild(`themes`, `border`, `fa-braille`, `Themes`);
  appendSideBarLists(`.themes`, `theme`, themes);

  sideBarListBuild(`fav`, `favorite`, `fa-hashtag`, `Favorites`);
  appendSideBarLists(`.fav`, `feed`, favorites);

  sideBarListBuild(`bg`, `adjust`, `fa-adjust`, `Background`);
  appendSideBarLists(`.bg`, `background`, background);

  document.querySelector(`.bg`).append(urlFormBuild());
  sideBarListBuild(`exclude`, `parse`, `fa-tint`, `Filter`);

  appendSideBarLists(`.exclude`, `option`, exclude);
  document.querySelector(`.exclude`).append(excludeFormBuild());

  sideBarListBuild(`set`, `choose`, `fa-cube`, `Settings`);
  appendSettings(`.set`, `settings`, settings);

  _content.append(basicFormBuild());

  if (
    sideBarLock
  )
    _content.append(sideBarThemeBuild(`fa-lock`))
  else if (
    !sideBarLock
  )
    _content.append(sideBarThemeBuild(`fa-unlock`))

  if (
    sideBarCenter
  )
    _content.style.position = `absolute`;
  else
    _content.style.position = `relative`;

  if (
    window.innerWidth > 425 &&
    sideBarBackdrop
  ) {
    _sidebar
      .classList
      .add(
        `blur`
      );
    _sidebar
      .style
      .cssText = `background-color: var(--color-secondary)`
  }

  if (
    topBarBackdrop
  )
    _top.style.cssText = `backdrop-filter: blur(10px)`

  if (
    window.innerWidth < 768
  )
    sideBarMouse = false

  if (
    window.innerWidth <= 425
  ) {
    guideOnScreen = onScreen;
    Sidebar(onScreen);
    onScreen = false;
    Generate(28);
  } else Generate(8);
}
