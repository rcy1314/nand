_container
  .addEventListener(
    'click', (evt) => {
      if (
        evt.target.classList.contains(`fa-ellipsis-h`) ||
        evt.target.classList.contains(`fa-ellipsis-v`) ||
        evt.target.classList.contains(`copy`)
      ) {
        if (
          evt.target.closest(`.copy`).querySelector(`.fa-ellipsis-v`)
        ) {
          evt.target
            .closest(`.copy`)
            .querySelector(`.fa-ellipsis-v`)
            .classList.add(`fa-ellipsis-h`);
          evt.target
            .closest(`.copy`)
            .querySelector(`.fa-ellipsis-h`)
            .classList.remove(`fa-ellipsis-v`);
          evt.target
            .closest(`.copy`)
            .querySelector(`.attribute`).style.display = `none`;
        } else if (
          evt.target.closest(`.copy`).querySelector(`.fa-ellipsis-h`)
        ) {
          evt.target
            .closest(`.copy`)
            .querySelector(`.fa-ellipsis-h`)
            .classList.add(`fa-ellipsis-v`);
          evt.target
            .closest(`.copy`)
            .querySelector(`.fa-ellipsis-v`)
            .classList.remove(`fa-ellipsis-h`);
          evt.target
            .closest(`.copy`)
            .querySelector(`.attribute`).style.display = `block`;
        }
        evt.stopPropagation();
      }

    }, {
      passive: false
    }
  );
