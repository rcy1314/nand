_container
  .addEventListener(
    'click', (evt) => {
      if (
        evt.target.classList.contains(`fa-share`) ||
        evt.target.classList.contains(`post`)
      ) {
        evt
          .target
          .closest(
            `.item`
          )
          .querySelector(
            `.share`
          )
          .select();
        document.execCommand(`copy`);
        evt.stopPropagation();
      }

    }, {
      passive: false
    }
  );
