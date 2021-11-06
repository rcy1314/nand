window
  .addEventListener(
    'resize', (evt) => {
      if (
        document
        .body
        .contains(
          _xml.querySelector(
            `.item`
          )
        )
      ) {
        if (
          window.innerWidth <= 425
        ) {
          _main
            .querySelector(
              `#option`
            )
            .style
            .display = `inline-flex`;
          display = `flexBox`;
          Flex();
        }

        if (
          window.innerWidth <= 768 &&
          window.innerWidth > 425
        ) {
          _display.style.display = `none`;
          display = `legacy`;
          Legacy();
        }

        if (
          window.innerWidth >= 769
        ) {
          _main
            .querySelector(
              `#option`
            )
            .style
            .display = `none`;
          display = `flexBox`;
          Flex()

        } else if (
          window.innerWidth >= 1280

        ) {
          _center.style.cssText = `display:inline-flex;width:930px;left:340px;`;
          _display.style.cssText = `display:inline-block;`;

        } else if (
          viewport[cycleViewport] == `legacy` &&
          window.innerWidth < 1280
        )
          _display.style.display = `none`;

      }
    }, {
      passive: true
    }
  );
