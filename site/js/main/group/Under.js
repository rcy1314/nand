_container
  .addEventListener(
    'click', (evt) => {
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

      } else if (
        evt.target.getAttribute(`aria-object`) === `Assets`
      )
        Assets();

    },

    {
      passive: false
    }

  );
