_view
  .addEventListener(
    'keyup', (evt) =>
    {
      if (event.target.value.length >= 1 && event.target.value != `Search`)
      return false
      else {
        _match.style.display = `none`;
        while (_match.querySelector(".listing").firstChild) {
          _match
            .querySelector(".listing")
            .removeChild(_match.querySelector(".listing").lastChild);
        }
        document.querySelector(`#input .icon`).classList.add(`slide`);
        _view.setAttribute(`placeholder`, `Search`);
        event.target.style.paddingLeft = `25px`;
        event.target.style.textAlign = `left`;
        event.target.value = ``;
      }
    event.preventDefault();
    },
    {
      passive: false
    }
);

_main
  .addEventListener(
    'keyup', (evt) =>
    {
      if (event.target.id == `guest`) inputListingKeyup(`#first`, event.keyCode);
      if (event.target.id == `view`) inputListingKeyup(`#match`, event.keyCode);
      event.preventDefault();
    },
    {
      passive: false
    }
);
