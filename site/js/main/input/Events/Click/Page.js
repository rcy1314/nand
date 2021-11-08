_page
  .addEventListener(
    'click', (evt) => {
      if (
        event.target.classList.contains(`buttonSearch`) ||
        event.target.classList.contains(`button`)
      ) {
        if (
          _guest.value.length > 0
        ) {
          Filter(_guest.value);
          Topbar(topBar);
        }
      }
      event.preventDefault();
    }, {
      passive: false
    }
  );
