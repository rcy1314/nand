_container
  .addEventListener(
    'click', (evt) => {
      if (
        evt.target.classList.contains(`exit`) ||
        evt.target.classList.contains(`ext`)
      )
        evt
        .target
        .closest(
          `.courtesy`
        )
        .getAttribute(
          `ext`
        )
        .blank();

    }, {
      passive: false
    }
  );
