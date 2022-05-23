_sidebar
  .addEventListener(
    'click', (evt) => {
      if (
        evt
        .target
        .classList
        .contains(
          `pretty`
        )
      ) {
        pretty = pretty!= true;
        if (
		pretty == true
        ) {
		Pretty();
        } else {
		_container.style.backgroundImage = ``;
	  }
        Star(
          evt
          .target,
          pretty
        );
      }

    }, {
      passive: false
    }
  );
