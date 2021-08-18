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
          Assets();

        else
          Category(evt.target.getAttribute(`aria-object`));
      }

      else if (
        evt.target.getAttribute(`aria-object`) === `Assets`
      )
        Assets();

      else if (
        evt.target.classList.contains(
          `fa-expand-alt`
        )
      ) {
        Group();
        _sb.style.display = `none`;
        _channel.style.height = `0`;

        if (
          category == `Assets`
        )
          setTimeout(
            function () {
              Topbar(topBar);
              Assets();
              displayExpand(expand);
              unloading();
            },
            25
          )
        else
          Category(category);
      }
    },

    {
      passive: false
    }

);
