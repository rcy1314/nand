_sidebar
  .addEventListener(
    'click', (evt) =>
    {

      if (
        evt.target.classList.contains(
          `verticalbars`
        )
      ) {
        imageLoader = `v-bars`;
        _main
          .querySelectorAll(`.bars`)
            .forEach(
              (a) => a.style.display = `block`
            );
        _main
          .querySelectorAll(`.animation`)
            .forEach(
              (a) => a.style.display = `none`
            );
        _main
          .querySelectorAll(`.loader`)
            .forEach(
              (a) => a.style.display = `none`
            );
        _main
          .querySelectorAll(`#load`)
            .forEach(
              (a) => a.style.display = `none`
            );
        Star(_sidebar.querySelector(`.circleloader`), false);
        Star(_sidebar.querySelector(`.loaderfalse`), false);
        Star(_sidebar.querySelector(`.ringloader`), false);
        Star(_sidebar.querySelector(`.loadinganim`), false);
        Star(evt.target, true);
      }

    },
    {
      passive:
      false
    }
);
