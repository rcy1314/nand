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

          else if (
            viewport[cycleViewport] == `sideScroll`
          ) {
            display = `sideScroll`;
            notifyOption(viewport[cycleViewport], `fa-times-circle`)
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
