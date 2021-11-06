_sidebar
  .addEventListener(
    'click', (evt) => {
      if (
        evt
        .target
        .classList
        .contains(
          `choose`
        )
      ) {
        expandSettings = expandSettings != true
        if (
          !expandSettings
        ) {
          _sidebar
            .querySelector(
              `.set`
            )
            .style
            .height =
            `31px`;
        } else if (
          expandSettings
        ) {
          _sidebar
            .querySelector(
              `.set`
            )
            .style
            .height =
            `${(settings.length) * 38}px`;
        }
      }

    }, {
      passive: false
    }
  );
