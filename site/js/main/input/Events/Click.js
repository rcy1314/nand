_page
  .addEventListener(
    'click', (evt) =>
    {
      if (
        event.target.classList.contains(`buttonSearch`) ||
        event.target.classList.contains(`button`)
      ) {
        if (
          _guest.value.length > 0
        ) {
          filterInputResponse(_guest.value);
          topMenuBarDisplay(topBar);
        }
      }
      event.preventDefault();
    },
    {
      passive: false
    }
);



_view
  .addEventListener(
    'click', (evt) =>
    {
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
            .paddingLeft
              =
            `20px`;
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

      evt.preventDefault();
    },
    {
      passive:
      false
    }
);

_container
  .addEventListener(
    'click', (evt) =>
    {
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
            .value
              =
            ``;
      if (
        evt
          .target
            .classList
              .contains(
                `textMatch`
              )
        ||
        evt
          .target
            .classList
              .contains(
                `buffer`
              )
        ||
        evt
          .target
            .classList
              .contains(
                `detail`
              )
        ||
        evt
          .target
            .classList
              .contains(
                `input`
              )
        ||
        evt
          .target
            .classList
              .contains(
                `hover`
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
            .display
              =
            `block`;
        _xml
          .style
            .zIndex
              =
            `1`;
        touchmove = true;
        Request(
          evt
            .target
              .closest(
                `.index`
              )
                .getAttribute(
                  `aria-object`
                )
        );
        _visit
          .style
              .display
              =
            `none`;
        _match
          .style
            .display
              =
            `none`;
        _first
          .style
            .display
              =
            `none`;
        topMenuBarDisplay(topBar);
      }
      evt.preventDefault();
    },
    {
      passive:
      false
    }
);
