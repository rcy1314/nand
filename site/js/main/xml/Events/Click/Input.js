_container
  .addEventListener(
    'click', (evt) => {
      if (
        evt.target.classList.contains(
          `select`
        )
	&&
	  menu[
          evt
          .target
          .closest(
            `.populate`
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
            `.populate`
          )
          .getAttribute(
            `aria-object`
          )].uri.blank()
	return false
	}
      else if (
        evt.target.classList.contains(
          `select`
        )
      ) {
        if (
          _match.style.display === `block`
        ) {
          _match.style.display = `none`;
          _view.blur();
          return false;
        }
        first = true;
        Request(
          evt
          .target
          .closest(
            `.populate`
          )
          .getAttribute(
            `aria-object`
          )
        );
      }

    }, {
      passive: false
    }
  );
