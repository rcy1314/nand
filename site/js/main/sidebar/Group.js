_container
  .addEventListener(
    'click', (evt) =>
    {
      if (
        event.target.classList.contains(
          `List`
        )
      ) {
        Group();
        expand = true;
        groupType = `list`;
        sideBarStar(_sidebar.querySelector(`.Blocks`), false);
        Category(category);
        sideBarStar(event.target, List);
        topMenuBarDisplay(topBar);
      }
      else if (
        event.target.classList.contains(
          `Blocks`
        )
      ) {
        Group();
        expand = false;
        groupType = `blocks`;
        sideBarStar(_sidebar.querySelector(`.List`), false);
        sideBarStar(event.target, true);
        Category(category);
        topMenuBarDisplay(topBar);
      }
    },
    {
      passive: false
    }
);
