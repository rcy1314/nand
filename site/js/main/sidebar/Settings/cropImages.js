_sidebar
  .addEventListener(
    'click', (evt) => {
      if (
        evt
        .target
        .classList
        .contains(
          `cropImages`
        )
      ) {
        cropImages = cropImages != true;
        if (
          cropImages
        ) {
          _channel
            .querySelectorAll(
              `.item, .classic`
            )
            .forEach(
              (a) => {
                a
                  .style
                  .cssText =
                  `height:180px !important`
              }
            )
        } else if (
          display != `sideScroll` &&
          !cropImages
        ) {
          _main
            .querySelectorAll(
              `.image`
            )
            .forEach(
              (a) =>
              a
              .style
              .height =
              `auto`
            );
        }
        if (
          document
          .body
          .contains(
            _center
            .querySelector(
              `.item`
            )
          ) &&
          display == `flexBox`
        )
          Flex();
        Star(
          evt
          .target,
          cropImages
        );
      }

    }, {
      passive: false
    }
  );
