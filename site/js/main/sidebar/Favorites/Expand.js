_sidebar
  .addEventListener(
    'click', (evt) => {
      if (
        evt
        .target
        .classList
        .contains(
          `favorite`
        )
      ) {
        if (
          location
          .href
          .split(
            `?`
          )[0]
        )
          location
          .href
          .split(
            `?`
          )[0]
          .state();

        expandFavorites = expandFavorites != true
        if (
          !expandFavorites
        )
          _sidebar
          .querySelector(
            `.fav`
          )
          .style
          .height =
          `31px`;

        else if (
          expandFavorites
        ) {
          _sidebar
            .querySelector(
              `.fav`
            )
            .style
            .height =
            `${(favorites.length + 1) * 36}px`;
        }
      }

    }, {
      passive: false
    }
  );
