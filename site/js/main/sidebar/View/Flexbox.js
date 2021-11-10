_sidebar
  .addEventListener(
    'click', (evt) => {

      if (
        evt.target.classList.contains(
          `flex`
        )
      ) {
        display = `flexBox`;
        notifyOption(`Flex Box`, `fa-times-circle`)
        Flex();
        setTimeout(
          function() {
            _channel
              .querySelectorAll(
                `.item, .wrap, .classic`
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
                        }px !important`
                }
              )
          }, 1
        )
        if (
          document
          .body
          .contains(
            _channel
            .querySelector(
              `.item`
            )
          )
        )
          _main.scrollTop = 0;
        Star(evt.target, true);
        Star(_sidebar.querySelector(`.dual`), false);
        Star(_sidebar.querySelector(`.sscroll`), false);
        Star(_sidebar.querySelector(`.legacy`), false);
      }


    }, {
      passive: false
    }
  );
