_sidebar
  .addEventListener(
    'click', (evt) => {

      if (
        evt.target.classList.contains(
          `sscroll`
        )
      ) {
        display = `sideScroll`;
        notifyOption(`Side Scroll`, `fa-check-circle`)
        let leaveOff = _main.scrollTop +
          (
            (
              parseInt(
                document.querySelectorAll(
                  `.item`
                )
                .length
              ) *
              parseInt(
                100
              )
            )
          );
        Sidescroll();
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
          _channel.scrollLeft = leaveOff;
        if (
          document
          .body
          .contains(
            _center.querySelector(`#bottom`)
          )
        )
          _center.querySelector(`#bottom`).remove();
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
          !Reader
        )
          _channel.append(
            footerBuild(id)
          );
        Star(evt.target, true);
        Star(_sidebar.querySelector(`.flex`), false);
        Star(_sidebar.querySelector(`.dual`), false);
        Star(_sidebar.querySelector(`.legacy`), false);
      }


    }, {
      passive: false
    }
  );
