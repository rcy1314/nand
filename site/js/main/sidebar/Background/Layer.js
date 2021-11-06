_sidebar
  .addEventListener(
    'click', (evt) =>
      {

        if (
          evt
            .target
              .classList
                .contains(
                  `containerBackground`
                )
        ) {
          if (
            _container
              .style
                .backgroundImage
                  !=
                ``
          ) {
            _main
              .style
                .backgroundImage
                  =
                `url(${backgroundImage[0].path})`
            _container
              .style
                .backgroundImage
                  =
                ``;
          }

          else if (
            _main
              .style
                .backgroundImage
                  !=
                ``
          ) {
            _container
              .style
                .backgroundImage
                  =
                `url(${backgroundImage[0].path})`
            _main
              .style
                .backgroundImage
                  =
                ``;
          }
        }

      },
      {
        passive:
        false
      }
  );
