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
        if (
          document
          .body
          .contains(
            _channel
            .querySelector(
              `.item`
            )
          ) &&
          _channel
          .querySelectorAll(
            `.item`
          )
          .length > 150 &&
          Reader
        ) {
          Cleanup();
          stop = true;
          first = true;
          if (
            showSplash
          )
            _check.style.display = `block`;
          while (
            _status.firstChild
          )
            _status.removeChild(
              _status.lastChild
            );
          while (
            _suggestions.firstChild
          )
            _suggestions.removeChild(
              _suggestions.lastChild
            );
          setTimeout(
            () => {
              let index = anyRandomMenuObject();
              if (
                httpRequest.readyState == 4 &&
                typeof(index !== undefined) &&
                random.includes(index)
              )
                Request(index);
              else {
                let index = anyRandomMenuObject();
                if (
                  httpRequest.readyState == 4 &&
                  typeof(index !== undefined) &&
                  random.includes(index)
                )
                  Request(index);
                _main.scrollTop = 0;
              }
            }, 500
          )
        } else if (
          document
          .body
          .contains(
            _channel
            .querySelector(
              `.item`
            )
          ) &&
          _channel
          .querySelectorAll(
            `.item`
          )
          .length > 150 &&
          !Reader
        ) {
          Cleanup();
          stop = true;
          first = true;
          if (
            showSplash
          )
            _check.style.display = `block`;
          while (
            _status.firstChild
          )
            _status.removeChild(
              _status.lastChild
            );
          while (
            _suggestions.firstChild
          )
            _suggestions.removeChild(
              _suggestions.lastChild
            );
          Request(id);
          _main.scrollTop = 0;
        }
        cycleViewport = cycleViewport + 1

        if (
          cycleViewport == viewport.length
        )
          cycleViewport = 0

        if (
          window.innerWidth <= 425 &&
          display == `legacy` &&
          !onlyImages
        ){
          display = `sideScroll`
          cycleViewport =
            viewport
            .findIndex(
              (item) =>
              item ==
              display
            )
        } else if (
          window.innerWidth <= 425 &&
          display == `sideScroll` &&
          !onlyImages
        ) {
          display = `legacy`
          cycleViewport =
            viewport
            .findIndex(
              (item) =>
              item ==
              display
            )
        }

        if (
          viewport[cycleViewport] == `duo`
        ) {
          display = `duo`;
          notifyOption(`Duo`, `fa-check-circle`)
          Duo();
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
          if (
            document
            .body
            .contains(
              _channel
              .querySelector(
                `.item`
              )
            ) &&
            window.innerWidth <= 425
          )
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
          Star(_sidebar.querySelector(`.dual`), true);
          Star(_sidebar.querySelector(`.flex`), false);
          Star(_sidebar.querySelector(`.sscroll`), false);
          Star(_sidebar.querySelector(`.legacy`), false);
        } else if (
          viewport[cycleViewport] == `flexBox`
        ) {
          display = `flexBox`;
          notifyOption(`Flex Box`, `fa-check-circle`)
          Flex();
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
          if (
            document
            .body
            .contains(
              _channel
              .querySelector(
                `.item`
              )
            ) &&
            window.innerWidth <= 425
          )
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
          notifyOption(`Side View`, `fa-check-circle`)
          if (
            document
            .body
            .contains(
              _center.querySelector(`#bottom`)
            )
          )
            _center.querySelector(`#bottom`).remove();
          _center.style.top = `60px`;
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
          Star(_sidebar.querySelector(`.dual`), false);
          Star(_sidebar.querySelector(`.flex`), false);
          Star(_sidebar.querySelector(`.sscroll`), true);
          Star(_sidebar.querySelector(`.legacy`), false);
        }

        if (
          document
          .body
          .contains(
            _channel
            .querySelector(
              `.item`
            )
          ) &&
          display != `sideScroll`
        )
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
    }, {
      passive: false
    }
  );
