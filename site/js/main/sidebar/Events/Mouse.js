_sidebar
  .addEventListener(
    'mousemove', (evt) =>
    {
      onScreen = true;
    },
    {
      passive: true
    }
);

if (sideBarMouse)
  _main
    .addEventListener(
      'mousemove', (evt) =>
      {
        if (
          event.pageX <= 100 &&
          !onScreen
        ) {
          onScreen = true;
          _sb.style.display = `none`;
          _min.style.display = `block`;
          setTimeout(function () {
            Sidebar(onScreen);
          }, 300)
        }
        if (
          event.pageX >= 180 &&
          !sideBarLock &&
          onScreen
        ){
          onScreen = false;
          setTimeout(function() {
            Sidebar(onScreen);
          }, 750)
        }
      },
      {
        passive: true
      }
    );
