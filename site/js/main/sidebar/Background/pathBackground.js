_sidebar
  .addEventListener(
    'click', (evt) =>
      {
        if (
          evt
            .target
              .classList
                .contains(
                  `urlInput`
                )
        )
          evt
            .target
              .select();

      },
      {
        passive:
        false
      }
  );
