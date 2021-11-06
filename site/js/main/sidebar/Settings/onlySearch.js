_sidebar
  .addEventListener(
    'click', (evt) => {
      if (
        evt.target.classList.contains(
          `onlySearch`
        )
      ) {
        onlySearch = onlySearch != true
        if (
          onlySearch
        ) {
          _options.style.display = `none`;
          _under.style.display = `none`;
          _show.style.display = `none`;
          _link.style.display = `none`;
          Star(
            evt
            .target,
            onlySearch
          );
        } else if (onlySearch == false) {
          _under.style.display = `inline-flex`;
          _show.style.display = `inline-block`;
          _link.style.display = `inline-block`;
          _options.style.display = `block`;
          Star(
            evt
            .target,
            onlySearch
          );
        }
      }

    }, {
      passive: false
    }
  );
