_channel
  .addEventListener(
    'scroll', (evt) => {
      let isScrolling;
      // Clear our timeout throughout the scroll
      window.clearTimeout(isScrolling);
      touchmove = false;
      // Set a timeout to run after scrolling ends
      isScrolling =
        setTimeout(
          function() {
            // Run the callback
            touchmove = true;
          }, 7500
        );
      if (
        (
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
        while (
          _air.firstChild
        )
          _air.removeChild(
            _air.lastChild
          );
        while (
          _result.firstChild
        )
          _result.removeChild(
            _result.lastChild
          );
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
        Request(anyRandomMenuObject());
      }
    }, {
      passive: true
    }
  );
