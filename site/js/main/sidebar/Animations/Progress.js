_sidebar
  .addEventListener(
    'click', (evt) =>
    {
      if (
        evt
          .target
            .classList
              .contains(
                `Progress`
              )
      ) {
        Star(
          _sidebar
            .querySelector(
              `.Percent`
            ),
            false
          );
        Star(
          evt
            .target,
          true
        );
        loading = `dots`;
      }

    },
    {
      passive:
      false
    }
);
