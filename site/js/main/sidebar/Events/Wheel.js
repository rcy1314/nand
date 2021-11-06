if (sideBarMousewheel)
  _main.addEventListener(
    `wheel`,
    function(evt) {
      if (
        Math.sign(evt.deltaY) === 1 &&
        window.innerWidth >= 769 &&
        !sideBarLock &&
        onScreen
      ) {
        onScreen = false;
        Sidebar(onScreen);
      } else if (
        Math.sign(evt.deltaY) === -1 &&
        window.innerWidth >= 769 &&
        !onScreen
      ) {
        setTimeout(
          function() {
            onScreen = true;
            Sidebar(onScreen);
          }, 1250
        )
      }
    }, {
      passive: true
    }
  );
