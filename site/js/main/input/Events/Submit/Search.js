document
  .addEventListener(
    'submit', (evt) => {
      _toggle.style.display = `none`
      if (
        evt
        .target
        .id ==
        `search`
      ) {
        if (
          document
          .body
          .contains(
            _result
            .querySelector(
              `.populate`
            )
          )
        ) {
          first = true;
        }
        if (
          document
          .body
          .contains(
            _match
            .querySelector(
              `.hover`
            )
          )
        ) {
          touchmove = true;
          _xml
            .style
            .display =
            `block`;
          _xml
            .style
            .zIndex =
            `1`;
          Cleanup();
          Request(
            _match
            .querySelector(
              `.hover`
            )
            .getAttribute(
              `aria-object`
            )
          )
          _main.scrollTop = 0;
          _match
            .style
            .display =
            `none`;
        } else if (
          _view
          .value
          .length
        ) {
          if (
            location
            .href
            .split(
              `?`
            )[0]
          )
            location
            .href
            .split(
              `?`
            )[0]
            .state();
          Filter(
            _view.value
          );
        }
        _match
          .style
          .display =
          `none`;
      }


      evt.preventDefault();
    }, {
      passive: false
    }
  );
