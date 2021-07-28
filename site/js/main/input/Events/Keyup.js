_view
  .addEventListener(
    'keyup', (evt) =>
    {
      if (
        evt
          .target
            .value
              .length
                >=
              1
        &&
        evt
          .target
            .value
              !=
            `Search`
      )
      return false

      else {
        _match
          .style
            .display
              =
            `none`;
        while (
          _match
            .querySelector(
              `.listing`
            )
              .firstChild
        )
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
              .paddingLeft
                =
              `25px`;
        evt
          .target
            .style
              .textAlign
                =
              `left`;
        evt
          .target
            .value
              =
            ``;
      }

    evt.preventDefault();
    },
    {
      passive:
      false
    }
);

_main
  .addEventListener(
    'keyup', (evt) =>
    {
      if (
        evt
          .target
            .id
              ===
            `guest`
      )
        Listing(
          `#first`,
          evt
            .keyCode
        );

      else if (
        evt
          .target
            .id
              ===
            `view`
      )
        Listing(
          `#match`,
          evt
            .keyCode
        );

      evt.preventDefault();
    },
    {
      passive:
      false
    }
);
