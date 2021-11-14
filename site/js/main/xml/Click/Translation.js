_container
  .addEventListener(
    'click', (evt) => {
      if (
        evt.target.getAttribute(`aria-object`) != `Assets` &&
        evt.target.classList.contains(`translation`)
      ) {
        first = true;
        category =
          evt
          .target
          .closest(
            `.translation`
          )
          .getAttribute(
            `aria-object`
          );
        if (
          Reader
        ) {
          randomDuplicate = [];
          Request(anyRandomMenuObject());

        } else {
          let target = event;
          Category(
            evt
            .target
            .closest(
              `.translation`
            )
            .getAttribute(
              `aria-object`
            )
          );
          _toggle.style.display = `none`;
          _visit.style.display = `none`;
          Topbar(topBar);
          Expand(expand);
        }
      }

    }, {
      passive: false
    }
  );
