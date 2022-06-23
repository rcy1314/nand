_feed
  .addEventListener(
    'click', (evt) => {
      if (
	  menu[
          evt
          .target
          .closest(
            `.asset`
          )
          .getAttribute(
            `aria-object`
          )].category
		===
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
      else {
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
