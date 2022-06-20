_container
  .addEventListener(
    'click', (evt) => {
      if (
        evt.target.classList.contains(`entity`) ||
        evt.target.classList.contains(`asset`) ||
        evt.target.classList.contains(`query`) &&
	  menu[
          evt
          .target
          .closest(
            `.asset`
          )
          .getAttribute(
            `aria-object`
          )].category
		==
		`Streams`
      ) {
	  menu[
          evt
          .target
          .closest(
            `.asset`
          )
          .getAttribute(
            `aria-object`
          )].uri.blank();
	  return false
	}
      else if (
        evt.target.classList.contains(`entity`) ||
        evt.target.classList.contains(`asset`) ||
        evt.target.classList.contains(`query`) &&
	  menu[
          evt
          .target
          .closest(
            `.asset`
          )
          .getAttribute(
            `aria-object`
          )].category
		!==
		`Streams`
      ) {
        init();
        first = true;
        Request(
          evt
          .target
          .closest(
            `.asset`
          )
          .getAttribute(
            `aria-object`
          )
        );
        Topbar(topBar);
        _toggle.style.display = `none`;
        _visit.style.display = `none`;
      }

    }, {
      passive: false
    }
  );
