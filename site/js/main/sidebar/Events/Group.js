_sidebar
  .addEventListener(
    'click', (evt) =>
    {
      if (
        evt
          .target
            .classList
              .contains(
                `List`
              )
      ) {
        Group();
        expand = true;
        groupType = `list`;
        Category(category);
        Star(
          _sidebar
            .querySelector(
              `.Blocks`
            ),
            false
          );
        Star(
          evt
            .target,
          List
        );
        topMenuBarDisplay(topBar);
      }
      else if (
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
        topMenuBarDisplay(topBar);
      }
    },
    {
      passive:
      false
    }
);
