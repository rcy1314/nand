_sidebar
  .addEventListener(
    'click', (evt) => {

      if (
        evt.target.classList.contains(
          `dual`
        )
      ) {
        display = `duo`;
        notifyOption(`Duo`, `fa-times-circle`)
        Duo();
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
        _main.scrollTop = 0;
        Star(evt.target, true);
        Star(_sidebar.querySelector(`.flex`), false);
        Star(_sidebar.querySelector(`.sscroll`), false);
        Star(_sidebar.querySelector(`.legacy`), false);
      } else if (
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
      } else if (
        evt.target.classList.contains(
          `legacy`
        )
      ) {
        display = `legacy`;
        notifyOption(`Mobile`, `fa-check-circle`)
        let leaveOff = _channel.scrollLeft +
          (
            (
              parseInt(
                document
                .querySelectorAll(
                  `.item`
                )
                .length
              ) *
              parseInt(
                100
              )
            )
          );
        Legacy();
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
        _main.scrollTop = leaveOff;
        Star(evt.target, true);
        Star(_sidebar.querySelector(`.flex`), false);
        Star(_sidebar.querySelector(`.sscroll`), false);
        Star(_sidebar.querySelector(`.dual`), false);
      } else if (
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
