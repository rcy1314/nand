_sidebar
  .addEventListener(
    'click', (evt) => {
      if (
        evt
        .target
        .classList
        .contains(
          `sideBarBackdrop`
        )
      ) {
        sideBarBackdrop = sideBarBackdrop != true;
        if (
          sideBarBackdrop
        ) {
          _sidebar
            .classList
            .add(
              `blur`
            );
          _sidebar
            .style
            .backgroundColor = `var(--color-secondary)`;
        } else if (
          !sideBarBackdrop
        ) {
          _sidebar
            .classList
            .remove(
              `blur`
            );
          _sidebar
            .style
            .backgroundColor = `var(--color-primary)`;
        }
        Star(
          evt
          .target,
          sideBarBackdrop
        );
      }

    }, {
      passive: false
    }
  );
