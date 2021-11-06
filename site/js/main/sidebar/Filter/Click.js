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

          },
          {
            passive:
            false
          }
      );
