_container
  .addEventListener(
    'click', (evt) => {
      if (
        evt
        .target
        .classList
        .contains(
          `sideFilter`
        )
      )
        evt
        .target
        .value =
        ``;
      if (
        evt
        .target
        .classList
        .contains(
          `detail`
        )
      ) {
        if (
          document
          .body
          .contains(
            _first
            .querySelector(
              `.hover`
            )
          )
        )
          first = true;

        else if (
          display !== `flexBox`
        )
          first = false;

        _xml
          .style
          .display =
          `block`;
        _xml
          .style
          .zIndex =
          `1`;
        touchmove = true;
        Cleanup();
        Request(
          evt
          .target
          .closest(
            `.hover`
          )
          .getAttribute(
            `aria-object`
          )
        );
        _visit
          .style
          .display =
          `none`;
        _match
          .style
          .display =
          `none`;
        _first
          .style
          .display =
          `none`;
        Topbar(topBar);
        _main.scrollTop = 0;
      }
    }, {
      passive: false
    }
  );
