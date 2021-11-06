_sidebar
  .addEventListener(
    'click', (evt) => {
      if (
        evt
        .target
        .classList
        .contains(
          `onlyImages`
        )
      ) {
        onlyImages = onlyImages != true;
        if (
          document
          .body
          .contains(
            _xml
            .querySelector(
              `.item`
            )
          )
        )
          Request(id);
        Star(
          evt
          .target,
          onlyImages
        );
      }

    }, {
      passive: false
    }
  );
