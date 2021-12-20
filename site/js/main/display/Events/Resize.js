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
                  `.item, .img, .wrap, .image, .classic`
                )
                .forEach(
                  function(a) {
                    a
                      .style
                      .cssText =
                      `height:80px`
                  }
                )
            }, 25
          )
        } else {
          setTimeout(
            function() {
              _channel
                .querySelectorAll(
                  `.item, .img, .wrap, .image, .classic`
                )
                .forEach(
                  function(a) {
                    if (a.closest(`.item`).querySelector(`.img`).clientHeight > 0)
                      a
                      .style
                      .cssText =
                      `height:${
                          a
                            .closest(
                              `.item`
                            ).querySelector(
                              `.img`
                            ).clientHeight
                        }px`
                  }
                )
            }, 25
          )
        }
      }
    }, {
      passive: true
    }
  );
