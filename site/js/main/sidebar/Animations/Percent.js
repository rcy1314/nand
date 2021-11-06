_sidebar
  .addEventListener(
    'click', (evt) => {

      if (
        evt
        .target
        .classList
        .contains(
          `Percent`
        )
      ) {
        loading = `percent`;
        Star(
          evt
          .target,
          _sidebar
          .querySelector(
            `.Percent`
          )
        );
        Star(
          _sidebar
          .querySelector(
            `.Progress`
          ),
          false
        );
      }

    }, {
      passive: false
    }
  );
