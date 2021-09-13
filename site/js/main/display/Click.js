_container
  .addEventListener(
    'click', (evt) =>
    {
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
                    )
                    *
                    parseInt(
                      100
                    )
                  )
                );
            Legacy();
            _main.scrollTop = leaveOff;
          }

          else if (
            viewport[cycleViewport] == `flexBox`
          ) {

              display = `flexBox`;
              notifyOption(`Flex Box`, `fa-times-circle`)
              let leaveOff = _main.scrollTop -
                (
                  (parseInt(
                    document.querySelectorAll(
                      `.item`
                    )
                    .length
                  )
                  *
                  parseInt(
                    100
                  )
                )
              );
              Flex();
              _main.scrollTop = leaveOff;
          }

          if (
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
                  )
                  *
                  parseInt(
                    100
                  )
                )
              );
            Sidescroll();
            _channel.scrollLeft = leaveOff;
            (function () {
              function checkPosition() {
                let elements = _channel.querySelectorAll(`.image`);
                for (
                  let i = 0;
                  i < elements.length;
                  i++) {
                  if (
                    elements[i].querySelector(`.img`) &&
                    elements[i].getBoundingClientRect().left -
                    _channel.clientWidth
                    <= _channel.clientWidth - _channel.clientWidth
                  ) {
                    elements[i].querySelector(`.img`).classList.add(`fade-in-element`);
                    elements[i].querySelector(`.img`).classList.remove(`hidden`);
                  }
                }
              }
              _channel.addEventListener(
                `scroll`,
                checkPosition
              );
            })();
            if (
              document
                .body
                .contains(
                  _center.querySelector(`#bottom`)
                )
            )
              _center.querySelector(`#bottom`).remove();
            if (
              !Reader
            )
              _channel.append(
                footerBuild(id)
              );
          }

        }
      },
    {
      passive:
      false
    }
  );
