_sidebar
  .addEventListener(
    'click', (evt) =>
    {
      if (
        evt
          .target
            .classList
              .contains(
                `animations`
              )
      ) {
        expandAnimations = expandAnimations != true
        if (
          !expandAnimations
        ) {
          _sidebar
            .querySelector(
              `.anim`
            )
              .style
                .height
                  =
                `31px`;
        }

        else if (
          expandAnimations
        ) {
          _sidebar
            .querySelector(
              `.anim`
            )
              .style
                .height
                  =
                `${(animations.length) * 40}px`;
        }
      }

    },
    {
      passive:
      false
    }
);
