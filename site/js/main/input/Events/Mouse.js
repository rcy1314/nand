_main
  .addEventListener(
    'mouseout', (evt) =>
    {
      if (
        evt
          .target
            .classList
              .contains(
                `detail`
              )
      )
        _main
          .querySelectorAll(
            `.listing .index, .listing .index`
          )
          .forEach(
            (a) =>
              a
                .classList
                  .remove(
                    `hover`
                  )
          );
    },
    {
      passive:
      false
    }
);

_main
  .addEventListener(
    'mouseover', (evt) =>
    {
      if (
        evt
          .target
            .classList
              .contains(
                `detail`
              )
      )
        evt
          .target
            .closest(
              `.index`
            )
              .classList
                .add(
                  `hover`
                );
    },
    {
      passive:
      false
    }
);
