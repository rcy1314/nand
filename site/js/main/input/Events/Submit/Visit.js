document
  .addEventListener(
    'submit', (evt) => {
      _toggle.style.display = `none`
      if (
        evt
        .target
        .id ===
        `front`
      ) {
        if (
          _guest
          .value ===
          ``
        )
          return false;
        else
          Filter(
            _guest.value
          );
        if (
          document
          .body
          .contains(
            _first
            .querySelector(
              `.hover`
            )
          )
        ) {
          first = true;
          _label
            .style
            .visibility =
            `visible`;
          _quick
            .style
            .visibility =
            `visible`;
          _show
            .style
            .visibility =
            `visible`;
          _link
            .style
            .visibility =
            `visible`;
          _first
            .style
            .display =
            `none`;
          _xml
            .style
            .display =
            `block`;
          _xml
            .style
            .zIndex =
            `1`;
          Cleanup();
          Topbar(topBar);
          Request(
            _first
            .querySelector(
              `.hover`
            )
            .getAttribute(
              `aria-object`
            )
          );
        } else if (
          _guest
          .value
          .length >
          0
        )
          Filter(_guest.value);
        _visit
          .style
          .display =
          `none`;
        _first
          .style
          .display =
          `none`;
      }

      evt.preventDefault();
    }, {
      passive: false
    }
  );
