_container
  .addEventListener(
    'click', (evt) => {
      if (
        evt.target.classList.contains(`btn`)
      ) {
        if (
          location.href.split(`?`)[0]
        )
          location.href.split(`?`)[0].state();
        if (
          document
          .body
          .contains(
            _center
            .querySelector(
              `#bottom`
            )
          )
        )
          _center
          .querySelector(
            `#bottom`
          )
          .remove();
        first = false;
        touchmove = true;

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
            `.btn`
          )
          .getAttribute(
            `aria-object`
          )
        );
      }

    }, {
      passive: false
    }
  );
