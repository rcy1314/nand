_sidebar
  .addEventListener(
    'click', (evt) =>
    {

      if (
        evt
          .target
            .classList
              .contains(
                `scrollIntoView`
              )
      ) {
        scrollIntoView = scrollIntoView != true;
        Star(
          evt
            .target,
          scrollIntoView
        );
      }
    },
    {
      passive:
      false
    }
);
