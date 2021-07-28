_page
  .addEventListener(
    'click', (evt) =>
    {
      if (
        event.target.classList.contains(`buttonSearch`) ||
        event.target.classList.contains(`button`)
      ) {
        if (_guest.value.length > 0) {
          filterInputResponse(_guest.value);
          topMenuBarDisplay(topBar);
        }
      }
      event.preventDefault();
    },
    {
      passive: false
    }
);



_top
  .addEventListener(
    'click', (evt) =>
    {
      if (event.target.id == `view`) {
        _match.style.display = `none`;
        while (
          _match.querySelector(".listing").firstChild
        ) {
          _match
            .querySelector(".listing")
            .removeChild(_match.querySelector(".listing").lastChild);
        }
        _main.querySelector(`#input .icon`).classList.add(`slide`);
        _view.setAttribute(`placeholder`, `Search`);
        event.target.style.paddingLeft = `20px`;
        event.target.style.textAlign = `left`;
        event.target.value = ``;
      }
      event.preventDefault();
    },
    {
      passive: false
    }
);

_container
  .addEventListener(
    'click', (evt) =>
    {
      if (event.target.classList.contains(`sideFilter`))
        event.target.value = ``;
      if (
        event.target.classList.contains(`textMatch`) ||
        event.target.classList.contains(`buffer`) ||
        event.target.classList.contains(`detail`) ||
        event.target.classList.contains(`input`) ||
        event.target.classList.contains(`hover`)
    ) {
      if (
        document.body.contains(
          _first.querySelector(`.hover`)
        )
      )
        first = true;
      else if (
        flexBox == false
      )
        first = false;
        _xml.style.display = `block`;
        _xml.style.zIndex = `1`;
        touchmove = true;
        Request(
          event.target.closest(`.index`).getAttribute(`aria-object`)
        );
          _visit.style.display = `none`;
          topMenuBarDisplay(topBar);
        _match.style.display = `none`;
        _first.style.display = `none`;
      }
      event.preventDefault();
    },
    {
      passive: false
    }
);
