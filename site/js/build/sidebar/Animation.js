let appendAnimations = function (Elem, Class, Arrays) {
  let list = _sidebar.querySelector(Elem);
  for (
    i = 0;
    i <= Arrays.length - 1;
    i++
  ) {
    let option = document.createElement(`div`);
    option.classList.add(
      Class,
      Arrays[i].class
    );
    option.innerHTML = Arrays[i].name;
    list.append(option);
    if (eval(Arrays[i].class) == true) {
      _sidebar
        .querySelector(`.` + Arrays[i].class)
        .parentNode.insertBefore(
          sideBarThemeBuild(`fa-plus`),
          document.querySelector(`.` + Arrays[i].class).nextSibling
        );
    } else {
      _sidebar
        .querySelector(`.` + Arrays[i].class)
        .parentNode.insertBefore(
          sideBarThemeBuild(`fa-minus`),
          document.querySelector(`.` + Arrays[i].class).nextSibling
        );
    }
  }
};
