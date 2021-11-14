_container
  .addEventListener(
    'click', (evt) => {
      if (
        evt.target.classList.contains(
          `joi`
        ) ||
        evt.target.classList.contains(
          `mobileJoi`
        )
      ) {
        Topbar(topBar);
        Reader = Reader != true;
        if (
          !Reader
        ) {
          cropImages = cropImagesBuffer;
          onlyImages = onlyImagesBuffer;
          notifyOption(`Reading`, `fa-times-circle`);
          _main
            .querySelectorAll(`.joi`)
            .forEach(
              (a) => a.classList.remove(`luv`)
            );

        } else if (
          Reader
        ) {
          if (
            document
            .body
            .contains(
              _channel
              .querySelector(
                `.item`
              )
            )
          ) {
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
            first = false;
          } else {
            first = true;
            _main.scrollTop = 0;
          }
          touchmove = true;
          onlyImages = true;
          if (
            window.innerWidth > 425
          )
            cropImages = true;
          Random();
          randomDuplicate = [];
          notifyOption(`Reading`, `fa-check-circle`);
          if (
            showSplash
          )
            _check.style.display = `Block`;
          _sb.style.display = `none`;
          if (
            document
            .body
            .contains(
              _center
              .querySelector(
                `#bottom`
              )
            )
          )
            _center
            .querySelector(
              `#bottom`
            )
            .remove();

          _main
            .querySelectorAll(
              `.joi`
            )
            .forEach(
              (a) => a.classList.add(`luv`)
            );
          Request(anyRandomMenuObject());
        }
      }
    }, {
      passive: false
    }
  );
