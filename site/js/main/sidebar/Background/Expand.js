_sidebar
  .addEventListener(
    'click', (evt) => {
      if (
        evt
        .target
        .classList
        .contains(
          `adjust`
        )
      ) {
        expandBackground = expandBackground != true
        if (
          !expandBackground
        ) {
          _sidebar
            .querySelector(
              `.bg`
            )
            .style
            .height =
            `31px`;
        } else if (
          expandBackground
        ) {
          _sidebar
            .querySelector(
              `.bg`
            )
            .style
            .height =
            `${(background.length + 1) * 35 + 35}px`;
        }
      }

    }, {
      passive: false
    }
  );
