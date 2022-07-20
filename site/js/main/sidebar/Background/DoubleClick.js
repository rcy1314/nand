_sidebar
  .addEventListener(
    'dblclick', (evt) => {
      if (
        evt
        .target
        .classList
        .contains(
          `urlInput`
        )
      ) {
        onScreen = true;
        sideBarLock = true;
        navigator.clipboard.readText()
          .then((result) => {
            _sidebar
              .querySelector(
                `.urlInput`
              ).value = result;
            if (
              _sidebar
              .querySelector(
                `.imageURL`
              )
              .value
              .match(
                /\b(?:png|jpe?g|gif|webp)/g
              )
            ) {
              if (
                backgroundImage[0]
                .element ==
                `container`
              ) {
                _container
                  .style
                  .backgroundImage =
                  `url(
                      ${
                      _sidebar.querySelector(`.imageURL`).value
                      }
                    )`;
                _main
                  .style
                  .backgroundImage =
                  `url()`;
              } else if (
                backgroundImage[0]
                .element ==
                `main`
              ) {
                _main
                  .style
                  .backgroundImage =
                  `url(
                      ${
                      _sidebar.querySelector(`.imageURL`).value
                      }
                    )`;
                _container
                  .style
                  .backgroundImage =
                  `url()`;
              }
            }
            setTimeout(
              () => {
                sideBarLock = sideBarLockBuffer;
                Sidebar(onScreen);
              }, 7000
            )
          })
          .catch((error) => {
            setTimeout(
              () => {
                sideBarLock = sideBarLockBuffer;
                Sidebar(onScreen);
              }, 7000
            )
          });
      }
    }, {
      passive: false
    }
  );
