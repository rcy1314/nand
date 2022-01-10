_container
  .addEventListener(
    'click', (evt) => {
      if (
        evt.target.classList.contains(
          `fa-expand-alt`
        )
      ) {
        Reader = false;
        _main
          .querySelectorAll(`.joi`)
          .forEach(
            (a) => a.classList.remove(`luv`)
          );
        Group();
        _channel.style.height = `0`;

        if (
          category == `Assets`
        )
          setTimeout(
            () => {
              Topbar(topBar);
              Assets();
              Expand(expand);
              unloading();
            },
            25
          )
        else
          Category(category);
      }
      if (
        window.innerWidth <= 425 &&
        onScreen == false &&
        !sideBarDock
      )
        _bar.style.display = `block`;
    },

    {
      passive: false
    }

  );
