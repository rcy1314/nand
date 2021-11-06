_sidebar
  .addEventListener(
    'click', (evt) => {
      if (
        evt.target.classList.contains(
          `sideBarDock`
        )
      ) {
        sideBarDock = sideBarDock != true
        if (
          sideBarDock
        ) {
          Star(
            evt
            .target,
            sideBarDock
          );
        } else if (sideBarDock == false) {
          Star(
            evt
            .target,
            sideBarDock
          );
        }
      }

    }, {
      passive: false
    }
  );
