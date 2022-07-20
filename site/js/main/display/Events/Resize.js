window
  .addEventListener(
    'resize', (evt) => {
      if (
        document
        .body
        .contains(
          _channel
          .querySelector(
            `.item`
          )
        ) &&
        _channel
        .querySelectorAll(
          `.item`
        )
        .length > 5000 &&
        Reader
      ) {
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
        setTimeout(
          () => {
            let index = anyRandomMenuObject();
            if (
              httpRequest.readyState == 4 &&
              typeof(index !== undefined) &&
              random.includes(index)
            )
              Request(index);
            else {
              let index = anyRandomMenuObject();
              if (
                httpRequest.readyState == 4 &&
                typeof(index !== undefined) &&
                random.includes(index)
              )
                Request(index);
              _main.scrollTop = 0;
            }
          }, 500
        )
      } else if (
        document
        .body
        .contains(
          _channel
          .querySelector(
            `.item`
          )
        ) &&
        _channel
        .querySelectorAll(
          `.item`
        )
        .length > 5000 &&
        !Reader
      ) {
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
        _main.scrollTop = 0;
      }
    }, {
      passive: true
    });
