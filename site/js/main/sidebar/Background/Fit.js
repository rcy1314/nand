_sidebar
  .addEventListener(
    'click', (evt) => {
      if (
        evt.target.classList.contains(
          `fitBackground`
        )
      ) {
        if (
          _container.style.backgroundSize === `cover` ||
          _container.style.backgroundSize === `initial` ||
          _main.style.backgroundSize === `cover` ||
          _main.style.backgroundSize === `initial`
        ) {
          _container.style.backgroundSize = `contain`;
          _main.style.backgroundSize = `contain`;
        } else if (
          _container.style.backgroundSize === `contain` ||
          _main.style.backgroundSize === `contain`
        ) {
          _container.style.backgroundSize = `cover`;
          _main.style.backgroundSize = `cover`;
        }
      }

    }, {
      passive: false
    }
  );
