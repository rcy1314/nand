document
  .addEventListener(
    'submit', (evt) => {
      _toggle.style.display = `none`
      if (
        evt
        .target
        .classList
        .contains(
          `sideBasic`
        )
      ) {
        if (
          _sidebar
          .querySelector(
            `.sideFilter`
          )
          .value
          .length
        ) {
          Filter(
            _sidebar
            .querySelector(
              `.sideFilter`
            )
            .value
            .space(),
          );
          _toggle
            .style
            .display =
            `none`;
          Topbar(topBar);
        }

      }


      evt.preventDefault();
    }, {
      passive: false
    }
  );
