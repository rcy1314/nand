_main
  .addEventListener(
    'ontouchmove', (evt) => {
      let isScrolling;
      // Clear our timeout throughout the scroll
      window.clearTimeout(isScrolling);
      touchmove = false;
      // Set a timeout to run after scrolling ends
      isScrolling =
        setTimeout(
          () => {
            // Run the callback
            touchmove = true;
          }, 2600
        );
      if (
        (
          _main.scrollHeight -
          _main.scrollTop -
          _main.clientHeight <=
          offset &&
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
    }, {
      passive: true
    }
  );

_channel
  .addEventListener(
    'ontouchmove', (evt) => {
      let isScrolling;
      // Clear our timeout throughout the scroll
      window.clearTimeout(isScrolling);
      touchmove = false;
      // Set a timeout to run after scrolling ends
      isScrolling =
        setTimeout(
          () => {
            // Run the callback
            touchmove = true;
          }, 2600
        );
      if (
        (
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
