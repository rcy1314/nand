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
              )
          &&
          _channel
            .querySelectorAll(
              `.item`
            )
              .length > 30
          &&
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
              }
            }, 500
          )
        }
        else if (
          document
            .body
              .contains(
                _channel
                  .querySelector(
                    `.item`
                  )
              )
          &&
          _channel
            .querySelectorAll(
              `.item`
            )
              .length > 30
          &&
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
        }
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
              )
              &&
              cropImages
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
                        `height:169px`
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
          notifyOption(`Flex Box`, `fa-times-circle`)
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
            if (
              document
              .body
              .contains(
                _channel
                .querySelector(
                  `.item`
                )
              )
              &&
              cropImages
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
      }

      if (
        document
          .body
            .contains(
              _channel
                .querySelector(
                  `.item`
                )
            )
        &&
          display != `sideScroll`
      )
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
        }, 25
      )
    }, {
      passive: false
    }
  );
