window
  .addEventListener(
    'resize', (evt) =>
    {
      if (
        document
          .body
            .contains(
              _xml.querySelector(
                `.item`
              )
            )
      ) {

        if (
          window.innerWidth <= 768
          ) {
          _display.style.display = `none`;
          display = `legacy`;
          displayLegacy();
        }

        else if (
          window.innerWidth >= 769
        ) {
          display = `flexBox`;
          displayFlex()

        }

        else if (
          window.innerWidth >= 1280

        ) {
          _center.style.cssText = `display:inline-flex;width:930px;left:340px;`;
          _display.style.cssText = `display:inline-block;`;

        }

        else if (
          viewport[cycleViewport] == `legacy` &&
          window.innerWidth < 1280
        )
          _display.style.display = `none`;

      }
    },
  {
    passive:
    true
  }
);

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
