_main
  .addEventListener(
    'mouseout', (evt) => {
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
    }, {
      passive: false
    }
  );
