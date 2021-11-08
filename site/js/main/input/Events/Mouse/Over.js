_main
  .addEventListener(
    'mouseover', (evt) => {
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
    }, {
      passive: false
    }
