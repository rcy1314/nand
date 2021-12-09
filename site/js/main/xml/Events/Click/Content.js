_container
  .addEventListener(
    'click', (evt) => {
      if (
        evt.target.classList.contains(`combine`) ||
        evt.target.classList.contains(`suggest`) ||
        evt.target.classList.contains(`circle`) ||
        evt.target.classList.contains(`random`) ||
        evt.target.classList.contains(`bold`)
      ) {
        first = false;
        if (
          location.href.split(`?`)[0]
        )
          location.href.split(`?`)[0].state();

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
        Request(
          evt
          .target
          .closest(
            `.suggest`
          )
          .getAttribute(
            `aria-object`
          )
        );
        touchmove = true
        setTimeout(
          () => {
            if (
              display !== `sideScroll` &&
              document
              .body
              .contains(
                _channel.querySelector(`[aria-object='${evt.target.closest(`.suggest`).getAttribute(`aria-object`)}']`)
              )
            )
              scrollToElm(
                touchmove,
                _main,
                _channel.querySelector(`[aria-object='${evt.target.closest(`.suggest`).getAttribute(`aria-object`)}']`),
                250
              );
            else if (
              document
              .body
              .contains(
                _channel.querySelector(`[aria-object='${evt.target.closest(`.suggest`).getAttribute(`aria-object`)}']`)
              )
            )
              sideScrollToElm(touchmove,
                _channel,
                _channel.querySelector(`[aria-object='${evt.target.closest(`.suggest`).getAttribute(`aria-object`)}']`),
                250
              );
          }, 1000
        )
      }

    }, {
      passive: false
    });
