_sidebar
  .addEventListener(
    'click', (evt) => {
      if (
        evt
        .target
        .classList
        .contains(
          `removeBackground`
        )
      ) {
        _container.style.backgroundImage = `none`;
        _main.style.backgroundImage = `none`;
      }

      evt.preventDefault();
    }, {
      passive: false
    }
  );
