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
            notifyOption(viewport[cycleViewport], `fa-times-circle`)
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
            displayLegacy();
            _main.scrollTop = leaveOff;
          }

          else if (
            viewport[cycleViewport] == `flexBox`
          ) {

            if (
              window.innerWidth > 915
            ) {
              display = `flexBox`;
              notifyOption(viewport[cycleViewport], `fa-times-circle`)
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
              displayFlex();
              _main.scrollTop = leaveOff;
            }
            else
              cycleViewport = cycleViewport + 1
          }

          if (
            viewport[cycleViewport] == `sideScroll`
          ) {
            display = `sideScroll`;
            notifyOption(viewport[cycleViewport], `fa-check-circle`)
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
            displaySideScroll();
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
