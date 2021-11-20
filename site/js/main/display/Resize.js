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
          display = `flexBox`;
          Flex();
          setTimeout(
            function() {
              _channel
                .querySelectorAll(
                  `.item, .wrap, .image, .classic`
                )
                .forEach(
                  function(a) {
                    if (a.closest(`.item`).querySelector(`.img`).clientHeight > 0)
                      a
                      .style
                      .height =
                      `${
                              a
                                .closest(
                                  `.item`
                                ).querySelector(
                                  `.img`
                                ).clientHeight
                            }px`
                  }
                )
            }, 1
          )
        }

      } else if (
        window.innerWidth >= 1280

      ) {
        _center.style.cssText = `display:inline-flex;width:930px`;
        _display.style.cssText = `display:inline-block;`;

      } else if (
        viewport[cycleViewport] == `legacy` &&
        window.innerWidth < 1280
      )
        _display.style.display = `none`;

    }, {
      passive: true
    }
  );
