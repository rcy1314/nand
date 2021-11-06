_sidebar
  .addEventListener(
    'click', (evt) => {

      if (
        evt
        .target
        .classList
        .contains(
          `resetBackground`
        )
      ) {
        if (
          backgroundImage[0].element ===
          `container`
        ) {
          _container
            .style
            .backgroundImage =
            `url(${backgroundImage[0].path})`;
          _main
            .style
            .backgroundImage =
            `url()`;
        } else if (
          backgroundImage[0].element ===
          `main`
        ) {
          _main
            .style
            .backgroundImage =
            `url(${backgroundImage[0].path})`;
          _container
            .style
            .backgroundImage =
            `url()`;
        }
      }

    }, {
      passive: false
    }
  );
