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

    },
    {
      passive:
      false
    }
);
