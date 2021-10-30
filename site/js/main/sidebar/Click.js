_container
  .addEventListener(
    'click', (evt) =>
    {
      if (
        evt.target.classList.contains(
          `hide`
        )
      ) {
        onScreen = false;
        Sidebar(onScreen);
        if (window.innerWidth <= 768) _sb.style.display = `block`;
        if (window.innerWidth >= 768) _bar.style.display = `none`;
      }

      else if (
        evt.target.classList.contains(
          `show`
        )
        ||
        evt.target.classList.contains(
          `sb`
        )
      ) {
        onScreen = true;
        Sidebar(onScreen);
        _sb.style.display = `none`;
      }

      else if (
        evt.target.classList.contains(
          `bar`
        )
      ) {
        _min.style.display = `block`;
        onScreen = onScreen != true;
        Sidebar(onScreen);
        if (
          onScreen
        )
          _bar.style.display = `none`;
      }

      else if (
        evt.target.classList.contains(
          `fa-unlock`
        ) ||
        evt.target.classList.contains(
          `fa-lock`
        )
      ) {
        sideBarLock = sideBarLock != true
        if (
          sideBarLock
        ) {
          evt.target.classList.remove(`fa-unlock`);
          evt.target.classList.add(`fa-lock`);
        } else if (sideBarLock == false) {
          evt.target.classList.remove(`fa-lock`);
          evt.target.classList.add(`fa-unlock`);
        }
      }

      evt.preventDefault();
    },
    {
      passive:
      false
    }
);
