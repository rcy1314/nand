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
          window.innerWidth <= 425 &&
          !onlyImages
        ) {
          display = `legacy`
          Star(_sidebar.querySelector(`.legacy`), true);
          Star(_sidebar.querySelector(`.flex`), false);
          Star(_sidebar.querySelector(`.sscroll`), false);
          Star(_sidebar.querySelector(`.dual`), false);
        }
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
