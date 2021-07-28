_sidebar
  .addEventListener(
    'click', (evt) =>
    {
      if (
        evt
          .target
            .classList
              .contains(
                `theme`
              )
      ) {
        set =
          evt
            .target
              .getAttribute(
                `aria-object`
              );
        window[set]();
      }

      else if (
        evt
          .target
            .classList
              .contains(
                `border`
              )
      ) {
        expandVisual = expandVisual != true
        if (
          !expandVisual
        ) {
          _sidebar
            .querySelector(
              `.themes`
            )
              .style
                .height
                  =
                `31px`;
        }

        else if (
          expandVisual
        ) {
          _sidebar
            .querySelector(
              `.themes`
            )
              .style
                .height
                  =
                `${(themes.length + 1) * 36}px`;
        }
      }

      evt.preventDefault();
    },
    {
      passive:
      false
    }
);
