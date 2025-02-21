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
          viewport[cycleViewport] == `duo`
        ) {
          display = `duo`;
          notifyOption(`Duo`, `fa-times-circle`)
          Duo();
          setTimeout(
            function() {
              _channel
                .querySelectorAll(
                  `.item, .wrap, .image, .classic`
                )
                .forEach(
                  function(a) {
                    if (a.closest(`.item`).querySelector(`.img`).clientHeight > 0 &&
                    a.closest(`.item`).querySelector(`.image`).style.backgroundImage == ``)
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
          Star(_sidebar.querySelector(`.dual`), true);
          Star(_sidebar.querySelector(`.flex`), false);
          Star(_sidebar.querySelector(`.sscroll`), false);
          Star(_sidebar.querySelector(`.legacy`), false);
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
          Star(_sidebar.querySelector(`.dual`), false);
          Star(_sidebar.querySelector(`.flex`), true);
          Star(_sidebar.querySelector(`.sscroll`), false);
          Star(_sidebar.querySelector(`.legacy`), false);
        } else if (
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
            _main.scrollTop = leaveOff;
          Star(_sidebar.querySelector(`.dual`), false);
          Star(_sidebar.querySelector(`.flex`), false);
          Star(_sidebar.querySelector(`.sscroll`), false);
          Star(_sidebar.querySelector(`.legacy`), true);
        } else if (
          viewport[cycleViewport] == `sideScroll`
        ) {
          display = `sideScroll`;
          notifyOption(`Side Scroll`, `fa-check-circle`)
          if (
            document
            .body
            .contains(
              _center.querySelector(`#bottom`)
            )
          )
            _center.querySelector(`#bottom`).remove();
          Sidescroll();
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
          Star(_sidebar.querySelector(`.dual`), false);
          Star(_sidebar.querySelector(`.flex`), false);
          Star(_sidebar.querySelector(`.sscroll`), true);
          Star(_sidebar.querySelector(`.legacy`), false);
        }
      }

    }, {
      passive: false
    }
  );
