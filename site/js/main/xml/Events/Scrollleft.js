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
            (
              scrollLeft < _channel.scrollLeft &&
              _channel.scrollWidth -
              _channel.scrollLeft -
              _channel.clientWidth <=
              _channel.clientWidth &&
              Reader &&
              !stop &&
              !document
              .body
              .contains(
                _channel.querySelector(`.pending`)
              )
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
