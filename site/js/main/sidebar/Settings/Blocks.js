_sidebar
  .addEventListener(
    'click', (evt) =>
    {
      if (
        evt
          .target
            .classList
              .contains(
                `Blocks`
              )
      ) {
        Group();
        expand = false;
        groupType = `blocks`;
        Star(
          _sidebar
            .querySelector(
              `.List`
            ),
            false
          );
        Star(
          evt
            .target
          ,
          true
        );
        Category(category);
        Topbar(topBar);
      }

    },
    {
      passive:
      false
    }
);
