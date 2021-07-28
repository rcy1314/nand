_container
  .addEventListener(
    'click', (evt) =>
    {
      if (
        event.target.classList.contains(
          `hide`
        )
      ) {
        onScreen = false;
        Sidebar(onScreen);
        if (window.innerWidth <= 768) _sb.style.display = `block`;
        if (window.innerWidth >= 768) _bar.style.display = `none`;
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
        if (event.target.getAttribute(`aria-item`) === -1)
          filterInputResponse(event.target.innerHTML)
        else Request(event.target.getAttribute(`aria-object`))
        _toggle.style.display = `none`;
      }
      else if (
        event.target.classList.contains(
          `excludeInput`
        )
      ) {
        event.target.value = ``;
      }
      else if (
        event.target.classList.contains(
          `cat`
        )
      ) {
        first = true;
        Group();
        if (location.href.split(`?`)[0]) location.href.split(`?`)[0].state();
          onScreen = onScreen != true;
          Sidebar(onScreen);
        category = event.target.getAttribute(`aria-item`);
        if (Reader) Request(anyRandomMenuObject());
        else {
          _toggle.style.display = `none`;
          _visit.style.display = `none`;
          location.pathname.state();
          Category(
            event.target.getAttribute(`aria-item`)
          );
          topMenuBarDisplay(topBar);
          displayExpand(expand);
        }
      }
      else if (
        event.target.classList.contains(
          `fa-unlock`
        ) ||
        event.target.classList.contains(
          `fa-lock`
        )
      ) {
        sideBarLock = sideBarLock != true
        if (sideBarLock) {
          event.target.classList.remove(`fa-unlock`);
          event.target.classList.add(`fa-lock`);
        } else if (sideBarLock == false) {
          event.target.classList.remove(`fa-lock`);
          event.target.classList.add(`fa-unlock`);
        }
      }
      else if (
        event.target.classList.contains(
          `parse`
        )
      ) {
        expandFilter = expandFilter != true
        if (!expandFilter) {
          _sidebar.querySelector(`.exclude`).style.height = `31px`;
        } else if (expandFilter == true) {
          if (exclude.length == 0)
            document.querySelector(`.exclude`).style.height = `75px`;
          else {
            _sidebar.querySelector(`.exclude`).style.height = `${
              exclude.length * 34 + 80}px`;
          }
        }
      }
      else if (
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
          `border`
        )
      ) {
        expandVisual = expandVisual != true
        if (!expandVisual) {
          _sidebar.querySelector(`.themes`).style.height = `31px`;
        } else if (expandVisual == true) {
          _sidebar.querySelector(`.themes`).style.height =
            `${(themes.length + 1) * 36}px`;
        }
      }
        else if (
          evt.target.classList.contains(
            `bar`
          )
        ) {
          _min.style.display = `block`;
          onScreen = onScreen != true;
          Sidebar(onScreen);
          if (onScreen)
            _bar.style.display = `none`;
        }
        else if (
          evt.target.classList.contains(
            `show`
          )
        ) {
          onScreen = true
          Sidebar(onScreen);
          _sb.style.display = `none`;
        }
        else if (
          evt.target.classList.contains(
            `theme`
          )
        ) {
          set = evt.target.getAttribute(`aria-object`);
          window[set]();
        }
        else if (
          evt.target.classList.contains(
            `option`
          )
        ) {
          if (tap == 0) {
            tap = new Date().getTime();
            setTimeout(function () {
              tap = 0;
            }, 350);
          } else {
            if (new Date().getTime() - tap < 350) {
              let i = exclude.indexOf(evt.target.innerHTML);
              exclude.splice(i, 1);
              evt.target.remove();
              if (exclude.length == 0)
                document.querySelector(`.exclude`).style.height = `70px`;
              else
                document.querySelector(`.exclude`).style.height = `${
                  exclude.length * 34.25 + 65
                }px`;
              tap = 0;
            }
          }
        }
      event.preventDefault();
    },
    {
      passive: false
    }
);
