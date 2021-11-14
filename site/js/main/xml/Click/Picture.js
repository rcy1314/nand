_container
  .addEventListener(
    'click', (evt) => {
      if (
        evt.target.classList.contains(`fa-camera`) ||
        evt.target.classList.contains(`picture`)
      ) {
        evt
          .target
          .closest(
            `.item`
          )
          .querySelector(
            `.source`
          )
          .select();
        document.execCommand(`copy`);
      }
    }, {
      passive: false
    }
  );
