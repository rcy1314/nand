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
        } else if (
          display == `duo` &&
          window.innerWidth > 425
        ) {
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
                      `height:169px`
                  }
                )
            }, 25
          )
        } else if (
          display == `sideScroll` ||
          display == `legacy` &&
          window.innerWidth > 425
        ) {
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
                      `height:340px`
                  }
                )
            }, 25
          )
        } else if (
          display == `flexBox` &&
          window.innerWidth > 425
        ) {
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
                      `height:160px`
                  }
                )
            }, 25
          )
        }
      }
    }, {
      passive: true
    });
