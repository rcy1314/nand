document
  .addEventListener(
    'submit', (evt) => {
      _toggle.style.display = `none`
      if (
        evt
        .target
        .classList
        .contains(
          `url`
        )
      ) {
        if (
          _sidebar
          .querySelector(
            `.imageURL`
          )
          .value
          .length
        ) {
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
        }
      }


      evt.preventDefault();
    }, {
      passive: false
    }
  );
