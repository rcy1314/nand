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
      event.preventDefault();
    },
    {
      passive: false
    }
);
