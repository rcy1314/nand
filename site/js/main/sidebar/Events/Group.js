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
        sideBarStar(
          _sidebar
            .querySelector(
              `.Blocks`
            ),
            false
          );
        sideBarStar(
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
        sideBarStar(
          _sidebar
            .querySelector(
              `.List`
            ),
            false
          );
        sideBarStar(
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
