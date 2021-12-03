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
            () => {
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
      }
    }, {
      passive: true
    }
  );
