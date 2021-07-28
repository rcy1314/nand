_container
  .addEventListener(
    'click', (evt) =>
    {
      if (
        evt.target.classList.contains(
          `theme`
        )
      ) {
        set = evt.target.getAttribute(`aria-object`);
        window[set]();
      }

      else if (
        event.target.classList.contains(
          `border`
        )
      ) {
        expandVisual = expandVisual != true
        if (!expandVisual) {
          _sidebar.querySelector(`.themes`).style.height = `31px`;
        } else if (expandVisual == true) {
          _sidebar.querySelector(`.themes`).style.height =
            `${(themes.length + 1) * 36}px`;
        }
      }

      event.preventDefault();
    },
    {
      passive: false
    }
);
