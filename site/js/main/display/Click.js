_container
  .addEventListener(
    'click', (evt) => {
      if (
        evt
        .target
        .classList
        .contains(
          `fa-camera-retro`
        )
      ) {
        cycleViewport = cycleViewport + 1

        if (
          cycleViewport == viewport.length
        )
          cycleViewport = 0

        if (
          viewport[cycleViewport] == `legacy`
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
        } else if (
            viewport[cycleViewport] == `duo`
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
        } else if (
          viewport[cycleViewport] == `flexBox`
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
        } else if (
          viewport[cycleViewport] == `sideScroll`
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
        }

      }
    }, {
      passive: false
    }
  );
