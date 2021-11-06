_sidebar
  .addEventListener(
    'click', (evt) =>
      {

        if (
          evt
            .target
              .classList
                .contains(
                  `coverBackground`
                )
        ) {
          if (
            _container.style.backgroundSize === `auto 100%` ||
            _container.style.backgroundSize === `cover`  ||
            _main.style.backgroundSize === `auto 100%`||
            _main.style.backgroundSize === `cover`
          ) {
            _container.style.backgroundSize = `initial`;
            _main.style.backgroundSize = `initial`;
          } else {
            _container.style.backgroundSize = `cover`;
            _main.style.backgroundSize = `cover`;
          }
        }

      },
      {
        passive:
        false
      }
  );
