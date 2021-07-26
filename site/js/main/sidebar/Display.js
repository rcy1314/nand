let sideBarDisplay = function (Value) {
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
      _main.clientWidth >= 769 &&
      sideBarMouse == false
    )
      _hide.style.display = `none`;
    else if (
        sideBarMouse == false ||
        _main.clientWidth <= 425 &&
        sideScroll == true
      )
      _min.style.cssText = `display: block !important;`
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
    if (
      _guide.style.display != `flex`
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
      _sidebar.style.left = `-250px`;
      _sb.style.display = `none`;
    }
    else _sidebar.style.left = `-280px`;
  }
};
