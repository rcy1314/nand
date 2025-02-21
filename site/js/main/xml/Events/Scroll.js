_main
  .addEventListener(
    'scroll', (evt) => {
      let isScrolling;
      // Clear our timeout throughout the scroll
      window.clearTimeout(isScrolling);
      touchmove = false;
      // Set a timeout to run after scrolling ends
      isScrolling = setTimeout(function() {
        // Run the callback
        touchmove = true;
      }, 7500);
      if (
        (
          _main.scrollHeight -
          _main.scrollTop -
          _main.clientHeight <=
          offset &&
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
        if (
          showSplash
        )
          _check.style.display = `block`;
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
        setTimeout(
          function() {
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
          }, 500
        )
      }
    }, {
      passive: true
    }
  );
