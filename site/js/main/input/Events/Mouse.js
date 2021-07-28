_main
  .addEventListener(
    'mouseout', (evt) =>
    {
      if (event.target.classList.contains(`detail`))
        _main
          .querySelectorAll(`.listing .index, .listing .index`)
          .forEach(
            (a) => a.classList.remove(`hover`)
          );
    },
    {
      passive: false
    }
);

_main
  .addEventListener(
    'mouseover', (evt) =>
    {
      if (event.target.classList.contains(`detail`))
        event.target.closest(`.index`).classList.add(`hover`);
    },
    {
      passive: false
    }
);
