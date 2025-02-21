_sidebar
  .addEventListener(
    'mousemove', (evt) => {
      onScreen = true;
    }, {
      passive: true
    }
  );

if (
  window.innerWidth > 768 &&
  sideBarMouse
)
  _container
  .addEventListener(
    'mousemove', (evt) => {
      if (
        event.pageX <= 180 &&
        !onScreen
      ) {
        onScreen = true;
        _min.style.display = `block`;
        _sb.style.display = `none`;
        setTimeout(
          function() {
            Sidebar(onScreen);
          }, 300
        )
      }
      else if (
        event.pageX >= 280 &&
        !sideBarLock &&
        onScreen
      ) {
        onScreen = false;
        setTimeout(
          function() {
            Sidebar(onScreen);
            if (
              _visit.style.display === `flex`
            )
              _sb.style.display = `block`;
            if (
              sideBarDock
            ) {
              _bar.style.display = `none`;
              _sb.style.display = `none`;
            }
          }, 750
        )
      }
    }, {
      passive: true
    }
  );
