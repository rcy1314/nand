_guide
  .addEventListener(
    'click', (evt) =>
    {
      if (
        event.target.classList.contains(`checkmark__circle`) ||
        event.target.classList.contains(`checkmark__check`) ||
        event.target.classList.contains(`checkmark`) ||
        evt.target.id == `guide`
      ) {
        if (
          Array.isArray(pub)
        )
          Append(id);

        if (
          loading == `percent`
        )
          _progress.style.width = `100%`;

        while (
          _guide.lastChild
        )
          _guide.removeChild(
            _guide.lastChild
          );

        if (
          sideBarLock == true
        )
          onScreen = true;

        _main.classList.remove(`guide`);
        _guide.style.display = `none`;
        _check.style.display = `none`;
        _main.setAttribute(`tabindex`, -1);
        topMenuBarDisplay(topBar);
        guideOnScreen = onScreen;
        Sidebar(onScreen);
        _main.focus();
        pub = null;
      }
    },
    {
      passive:
      false
    }
);
