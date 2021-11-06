_sidebar
  .addEventListener(
    'click', (evt) => {
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
        Topbar(topBar);
      }

    }, {
      passive: false
    }
  );
