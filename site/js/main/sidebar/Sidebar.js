let Sidebar = function (Value) {
  sideBarFirst = true;
  let content = document.querySelector(`#content`);
  if (
    Value
  ) {
    setTimeout(
      function () {
        _sidebar.style.left = `0`;
      }, 300
    );
    if (
        sideBarMouse == false ||
        window.innerWidth <= 425 &&
        display == `sideScroll`
      )
      _min.style.cssText = `display: block !important;`
      _bar.style.display = `none`;
      setTimeout(
        function () {
          _sidebar.querySelector(`.sideFilter`).style.visibility = `visible`;
          _sidebar.querySelector(`#basic`).style.visibility = `visible`;
          _sidebar.style.left = `0`;
        }, 300
      );
  } else if (
    !Value
  ) {
      _sidebar.querySelector(`.bg`).style.height = `31px`;
      expandBackground = false;
      _sidebar.querySelector(`.set`).style.height = `31px`;
      expandSettings = false;
      _sidebar.querySelector(`.fav`).style.height = `31px`;
      expandFavorites = false;
      _sidebar.querySelector(`.themes`).style.height = `31px`;
      expandVisual = false;
      _sidebar.querySelector(`.exclude`).style.height = `31px`;
      expandFilter = false;
      _sidebar.querySelector(`.sideFilter`).style.visibility = `hidden`;
      _sidebar.querySelector(`#basic`).style.visibility = `hidden`;
      _sidebar.style.left = `-280px`;
      _bar.style.display = `block`;
      if (
        !location.href.split(`?`)[0]
      )
        _sb.style.display = `block`;
    if (
      sideBarDock
    ) {
      _sidebar.style.left = `-250px`;
      _bar.style.display = `none`;
      _sb.style.display = `none`;
    }
  }
};
