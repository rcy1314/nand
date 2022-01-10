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
          !onlyImages &&
          window.innerWidth <= 425
        )
          display = `legacy`
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
