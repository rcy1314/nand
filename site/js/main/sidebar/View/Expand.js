_sidebar
  .addEventListener(
    'click', (evt) => {
      if (
        evt
        .target
        .classList
        .contains(
          `viewport`
        )
      ) {
        expandSettings = expandSettings != true
        if (
          !expandSettings
        ) {
          _sidebar
            .querySelector(
              `.port`
            )
            .style
            .height =
            `31px`;
        } else if (
          expandSettings
        ) {
          _sidebar
            .querySelector(
              `.port`
            )
            .style
            .height =
            `${(view.length) * 42}px`;
        }
      }

    }, {
      passive: false
    }
  );
