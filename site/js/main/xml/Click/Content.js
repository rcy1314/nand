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
      }

    }, {
      passive: false
    }
  );
