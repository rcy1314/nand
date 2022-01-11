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
        .length > 150 &&
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
        .length > 150 &&
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
      } else if (
        document
        .body
        .contains(
          _xml.querySelector(
            `.item`
          )
        )
      ) {
        if (
          window.innerWidth <= 425
        ) {
          display = `flexBox`;
          Flex();
          setTimeout(
            function() {
              _channel
                .querySelectorAll(
                  `.item, .img, .wrap, .image, .classic`
                )
                .forEach(
                  function(a) {
                    a
                      .style
                      .cssText =
                      `height:80px`
                  }
                )
            }, 25
          )
        } else if (
          display == `duo` &&
          window.innerWidth > 425
        ) {
          setTimeout(
            function() {
              _channel
                .querySelectorAll(
                  `.item, .img, .wrap, .image, .classic`
                )
                .forEach(
                  function(a) {
                    a
                      .style
                      .cssText =
                      `height:169px`
                  }
                )
            }, 25
          )
        } else if (
          display == `sideScroll` ||
          display == `legacy` &&
          window.innerWidth > 425
        ) {
          setTimeout(
            function() {
              _channel
                .querySelectorAll(
                  `.item, .img, .wrap, .image, .classic`
                )
                .forEach(
                  function(a) {
                    a
                      .style
                      .cssText =
                      `height:340px`
                  }
                )
            }, 25
          )
        } else if (
          display == `flexBox` &&
          window.innerWidth > 425
        ) {
          setTimeout(
            function() {
              _channel
                .querySelectorAll(
                  `.item, .img, .wrap, .image, .classic`
                )
                .forEach(
                  function(a) {
                    a
                      .style
                      .cssText =
                      `height:160px`
                  }
                )
            }, 25
          )
        }
      }
    }, {
      passive: true
    });
