_view
  .addEventListener(
    'click', (evt) => {
      _match.style.display = `none`;
      while (
        _match
        .querySelector(
          `.listing`
        )
        .firstChild
      ) {
        _match
          .querySelector(
            `.listing`
          )
          .removeChild(
            _match
            .querySelector(
              `.listing`
            )
            .lastChild
          );
      }
      _search
        .querySelector(
          `.icon`
        )
        .classList
        .add(
          `slide`
        );
      _view
        .setAttribute(
          `placeholder`,
          `Search`
        );
      evt
        .target
        .style
        .paddingLeft =
        `20px`;
      evt
        .target
        .style
        .textAlign =
        `left`;
      evt
        .target
        .value =
        ``;

      evt.preventDefault();
    }, {
      passive: false
    }
  );
