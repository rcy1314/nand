_guide
  .addEventListener(
    'touchstart', (evt) =>
    {
      touchstartX = evt.changedTouches[0].screenX
      touchstartY = evt.changedTouches[0].screenY;
    },
    {
      passive:
      true
    }
);

_guide
  .addEventListener(
    'touchend', (evt) =>
    {
      touchendX = evt.changedTouches[0].screenX;
      touchendY = evt.changedTouches[0].screenY;
      Touch();
    },
    {
      passive:
      true
    }
);

let Touch = function () {

  if (
    touchendX - 75 > touchstartX ||
    touchendX + 75 < touchstartX ||
    touchendY - 75 > touchstartY ||
    touchendY + 75 < touchstartY
  ) {

    if (
      Array.isArray(pub)
    )
      Append(id);

    setTimeout(
      function () {
        if (
          complete
        )
          _progress.style.width = `100%`;

        _main.classList.remove(`guide`);

        while (
          _guide.lastChild
        )
          _guide.removeChild(
            _guide.lastChild
          );

        _guide.style.display = `none`;
        _check.style.display = `none`;

        if (
          sideBarLock
        )
          onScreen = true;

        topMenuBarDisplay(topBar);
        guideOnScreen = onScreen;
        Sidebar(onScreen);
        pub = null;

      }, 750
    )
  }
}
