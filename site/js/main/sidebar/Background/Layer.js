_sidebar
  .addEventListener(
    'click', (evt) => {

      if (
        evt
        .target
        .classList
        .contains(
          `containerBackground`
        )
      ) {
        console.log(_container.style.backgroundImage)
        if (
          _container
          .style
          .backgroundImage !=
          ``
        ) {
          _main
            .style
            .backgroundImage =
            _container.style.backgroundImage
          _container
            .style
            .backgroundImage =
            ``;
        } else if (
          _main
          .style
          .backgroundImage !=
          ``
        ) {
          _container
            .style
            .backgroundImage =
            _main.style.backgroundImage
          _main
            .style
            .backgroundImage =
            ``;
        }
      }

    }, {
      passive: false
    }
  );
