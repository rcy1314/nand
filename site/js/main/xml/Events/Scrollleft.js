_channel
  .addEventListener(
    'scroll', (evt) => {
      let isScrolling;
      let scrollLeft = _channel.scrollLeft;
      // Clear our timeout throughout the scroll
      window.clearTimeout(isScrolling);
      touchmove = false;
      // Set a timeout to run after scrolling ends
      isScrolling =
        setTimeout(
          () => {
            // Run the callback
            touchmove = true;
          }, 7500
        );
      setTimeout(
        () => {
          if (
            scrollLeft < _main.scrollTop
          ) {
            for (
              let y = assets.indexOf(id); y > 0; y--) {
              let elements = _channel.querySelectorAll(`[aria-object='${assets[y]}']`);
              for (
                let i = 0; i < elements.length; i++) {
                if (
                  elements[i].getBoundingClientRect().left
                   <
                   0
                ) {
                  elements[i].style.visibility = `hidden`;
                }
              }
            }
          }
          if (
              scrollLeft > _main.scrollTop
          )
          {
            _channel.querySelectorAll(
              `.item`
            )
            .forEach(
              (a) => {
                a.style.visibility = `visible`;
              }
            )
          }
          if (
            (
              scrollLeft < _channel.scrollLeft &&
              _channel.scrollWidth -
              _channel.scrollLeft -
              _channel.clientWidth <=
              _channel.clientWidth &&
              Reader &&
              !stop &&
              _channel.querySelectorAll(`.pending`).length <= 3
            )
          ) {
            stop = true;
            first = false;
            if (showSplash) _check.style.display = `block`;
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
            }
          }
        }, 750
      )
    }, {
      passive: true
    }
  );
