_sidebar
  .addEventListener(
    'click', (evt) =>
    {
      if (
        evt
          .target
            .classList
              .contains(
                `excludeInput`
              )
      )
        evt
          .target
            .value
              =
            ``;

      else if (
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

      else if (
        evt
          .target
            .classList
              .contains(
                `option`
              )
      ) {
        if (
          tap === 0
        ) {
          tap = new Date().getTime();
          setTimeout(
            function () {
              tap = 0;
            }, 350
          );
        }

        else {
          if (
            new Date().getTime() - tap < 350
          ) {
            let i =
              exclude
                .indexOf(
                  evt
                    .target
                      .innerHTML
                    );
            exclude
              .splice(
                i,
                1
              );
            evt
              .target
                .remove();
            if (
              exclude.length === 0
            )
              _sidebar
                .querySelector(
                  `.exclude`
                )
                  .style
                    .height
                      =
                    `70px`;
            else
              _sidebar
                .querySelector(
                  `.exclude`
                )
                  .style
                    .height
                      =
                    `${exclude.length * 34.25 + 65}px`;
            tap = 0;
          }
        }
      }

    },
    {
      passive:
      false
    }
);
