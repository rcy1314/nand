window
  .addEventListener(
    'resize', (evt) =>
    {
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
          window.innerWidth <= 768
          ) {
          _display.style.display = `none`;
          display = `legacy`;
          displayLegacy();
        }

        else if (
          window.innerWidth >= 769
        ) {
          display = `flexBox`;
          displayFlex()

        }

        else if (
          window.innerWidth >= 1280

        ) {
          _center.style.cssText = `display:inline-flex;width:930px;left:340px;`;
          _display.style.cssText = `display:inline-block;`;

        }

        else if (
          viewport[cycleViewport] == `legacy` &&
          window.innerWidth < 1280
        )
          _display.style.display = `none`;

      }
    },
  {
    passive:
    true
  }
);
