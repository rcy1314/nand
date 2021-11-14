_container
  .addEventListener(
    'click', (evt) => {
      if (
        evt.target.id == `check`
      )
        repository.blank();

    }, {
      passive: false
    }
  );
