_sidebar
  .addEventListener(
    'click', (evt) => {
      if (
        evt
        .target
        .classList
        .contains(
          `cropImages`
        )
      ) {
        cropImages = cropImages != true;
        Cleanup();
        stop = true;
        first = true;
        if (
          showSplash
        )
          _check.style.display = `block`;
        while (
          _status.firstChild
        )
          _status.removeChild(
            _status.lastChild
          );
        while (
          _suggestions.firstChild
        )
          _suggestions.removeChild(
            _suggestions.lastChild
          );
        Request(id);
        Star(
          evt
          .target,
          cropImages
        );
      }

    }, {
      passive: false
    }
  );
