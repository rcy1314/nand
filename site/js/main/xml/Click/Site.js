_container
  .addEventListener(
    'click', (evt) => {
      if (
        evt.target.classList.contains(`fa-at`) ||
        evt.target.classList.contains(`site`)
      ) {
        evt
          .target
          .closest(
            `.item`
          )
          .querySelector(
            `.url`
          )
          .select();
        document.execCommand(`copy`);
        evt.stopPropagation();
      }

    }, {
      passive: false
    }
  );
