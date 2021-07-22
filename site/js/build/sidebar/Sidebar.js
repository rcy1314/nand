let appendSideBarLists = function (Elem, Class, Arrays) {
  let list = _sidebar.querySelector(Elem);
  for (
    i = 0;
    i <= Arrays.length - 1;
    i++
  ) {
    let option = document.createElement(`div`);
    if (
      Class == `option` ||
      Class == `feed`
    ) option.classList.add(Class);
    else option.classList.add(
      Class,
      Arrays[i].class
    );
    if (
      Class == `feed`
    ) option.setAttribute(
        `aria-object`,
        menu.findIndex((item) => item.id === Arrays[i])
      )
    if (
      Class == `background` ||
      Class == `sel`
    )
      option.innerHTML = Arrays[i].name;
    if (
      Class == `option` ||
      Class == `feed`
    )
			option.innerHTML = Arrays[i].space().capitalize();
    if (Class == `theme`) {
      option.innerHTML = Arrays[i].obFn;
      option.setAttribute(`aria-object`, Arrays[i].obFn)
    }
    list.append(option);
    if (
      !translations.includes(Arrays[i]) ||
      Class != `option` &&
      Class != `feed`
    )
			list.append(sideBarThemeBuild(Arrays[i].icon));
  }
};
