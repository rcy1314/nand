_guide
  .addEventListener(
    'click', (evt) =>
    {
      if (
        showSplash
      )
      _check.style.display = `none`;
      if (
        evt
          .target
            .classList
              .contains(
                `checkmark__circle`
              )
          ||
        evt
          .target
            .classList
              .contains(
                `checkmark__check`
              )
          ||
        evt
          .target
            .classList
              .contains(
                `checkmark`
              )
          ||
        evt
          .target
            .id
          ==
        `guide`
      ) {

        if (
          showSplash
        )
        _check.style.display = `none`;

        if (
          Array.isArray(
            pub
          )
            &&
          !Reader
        )
          Append(id);

        if (
          loading
            ==
          `percent`
        )
          _progress
            .style
              .width
            =
          `100%`;

        while (
          _guide
            .lastChild
        )
          _guide
            .removeChild(
              _guide
                .lastChild
            );

        if (
          sideBarLock
            ==
          true
        )
          onScreen = true;

        _main
          .classList
            .remove(
              `guide`
            );

        _guide
          .style
            .display
          =
        `none`;
        _main
          .setAttribute(
            `tabindex`,
            -1
          );

        guideOnScreen
          =
        onScreen;

        Sidebar(
          onScreen
        );

        Topbar(
          topBar
        );

        _main
          .focus();

        pub
          =
        null;

      }

    },
    {
      passive:
      false
    }
);
