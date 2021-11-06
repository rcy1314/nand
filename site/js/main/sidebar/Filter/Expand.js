_sidebar
  .addEventListener(
    'click', (evt) =>
    {
      if (
        evt
          .target
            .classList
              .contains(
                `parse`
              )
      ) {
        expandFilter = expandFilter != true
        if (
          !expandFilter
        ) {
          _sidebar
            .querySelector(
              `.exclude`
            )
              .style
                .height
                  =
                `31px`;
        }

        else if (
          expandFilter
        ) {
          if (
            exclude.length == 0
          )
            _sidebar
              .querySelector(
                `.exclude`
              )
                .style
                  .height
                    =
                  `75px`;
          else {
            _sidebar
              .querySelector(
                `.exclude`
              )
                .style
                  .height
                    =
                  `${exclude.length * 34 + 80}px`;
          }
        }
      }

    },
    {
      passive:
      false
    }
);
