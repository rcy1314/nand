_container
  .addEventListener(
    'click', (evt) =>
    {
      if (
        event.target.classList.contains(
          `favorite`
        )
      ) {
        if (location.href.split(`?`)[0]) location.href.split(`?`)[0].state();
        expandFavorites = expandFavorites != true
        if (!expandFavorites) {
          _sidebar.querySelector(`.fav`).style.height = `31px`;
        } else if (expandFavorites == true) {
          _sidebar.querySelector(`.fav`).style.height =
            `${(favorites.length + 1) * 36}px`;
        }
      }

      else if (
        event.target.classList.contains(
          `feed`
        )
      ) {
        while (_status.firstChild)
          _status.removeChild(_status.lastChild);
        while (_suggestions.firstChild)
          _suggestions.removeChild(_suggestions.lastChild);
        if (event.target.getAttribute(`aria-object`) === -1)
          filterInputResponse(event.target.innerHTML)
        else Request(event.target.getAttribute(`aria-object`))
        _toggle.style.display = `none`;
      }
      event.preventDefault();
    },
    {
      passive: false
    }
);
