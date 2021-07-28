_container
  .addEventListener(
    'click', (evt) =>
    {
      if (
        event.target.classList.contains(
          `choose`
        )
      ) {
        expandSettings = expandSettings != true
        if (!expandSettings) {
          _sidebar.querySelector(`.set`).style.height = `31px`;
        } else if (expandSettings == true) {
          _sidebar.querySelector(`.set`).style.height =
            `${(settings.length) * 36}px`;
        }
      }
      else if (
        event.target.classList.contains(
          `Dots`
        )
      ) {
        sideBarStar(_sidebar.querySelector(`.Percent`), false);
        sideBarStar(event.target, true);
        loading = `dots`;
      }
      else if (
        event.target.classList.contains(
          `Percent`
        )
      ) {
        loading = `percent`;
        sideBarStar(event.target, _sidebar.querySelector(`.Percent`));
        sideBarStar(document.querySelector(`.Dots`), false);
      }
      else if (
        event.target.classList.contains(
          `sideBarBackdrop`
        )
      ) {
        sideBarBackdrop = sideBarBackdrop != true;
        if (sideBarBackdrop == true) {
          _sidebar.classList.add(`blur`);
          _sidebar.style.backgroundColor = `transparent`;
        } else if (sideBarBackdrop == false) {
          _sidebar.classList.remove(`blur`);
          _sidebar.style.backgroundColor = `var(--color-secondary)`;
        }
        sideBarStar(event.target, sideBarBackdrop);
      }
      else if (
        event.target.classList.contains(
          `cropImages`
        )
      ) {
        cropImages = cropImages != true;
        if (cropImages == true) {
          _main
            .querySelectorAll(`.img`).forEach(
              (a) => a.closest(`.image`).style.height = `160px`
            );
        } else if (cropImages == false) {
          _main
            .querySelectorAll(`.image`).forEach(
              (a) => a.style.height = `auto`
            );
        }
        if (flexBox == true) displayFlex(flexBox);
        sideBarStar(event.target, cropImages);
      }

      event.preventDefault();
    },
    {
      passive: false
    }
);
