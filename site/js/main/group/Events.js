_container
  .addEventListener(
    'click', (evt) =>
    {
      if (
        evt
          .target
            .classList
              .contains(
                `under`
              )
      ) {
        Group();
        category = evt.target.getAttribute(`aria-object`);

        if (
          evt.target.getAttribute(`aria-object`) === `Assets`
        )
          populateAssets();

        else
          populateCategoryGroup(evt.target.getAttribute(`aria-object`));
      }

      else if (
        evt.target.getAttribute(`aria-object`) === `Assets`
      )
        populateAssets();

      else if (
        evt.target.classList.contains(
          `fa-expand-alt`
        )
      ) {
        Group();
        _sb.style.display = `none`;

        if (
          category == `Assets`
        )
          setTimeout(
            function () {
              topMenuBarDisplay(topBar);
              populateAssets();
              displayExpand(expand);
              unloading();
            },
            25
          )
        else
          populateCategoryGroup(category);
      }
    },

    {
      passive: false
    }

);
