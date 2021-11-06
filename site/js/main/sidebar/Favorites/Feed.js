_sidebar
  .addEventListener(
    'click', (evt) => {
      if (
        evt.target.classList.contains(
          `feed`
        )
      ) {
        while (
          _status.firstChild
        )
          _status
          .removeChild(
            _status.lastChild
          );
        while (
          _suggestions.firstChild
        )
          _suggestions
          .removeChild(
            _suggestions.lastChild
          );

        if (
          evt
          .target
          .getAttribute(
            `aria-object`
          ) ===
          -1
        )
          Filter(evt.target.innerHTML)

        else
          Request(
            evt
            .target
            .getAttribute(
              `aria-object`
            )
          )
        _toggle.style.display = `none`;
      }
      evt.preventDefault();
    }, {
      passive: false
    }
  );
