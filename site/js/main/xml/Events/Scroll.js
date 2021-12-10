_main
  .addEventListener(
    'scroll', (evt) => {
      let isScrolling;
      let scrollTop = _main.scrollTop;
      // Clear our timeout throughout the scroll
      window.clearTimeout(isScrolling);
      touchmove = false;
      // Set a timeout to run after scrolling ends
      isScrolling =
        setTimeout(
          () => {
            // Run the callback
            touchmove = true;
          }, 7500);
      setTimeout(
        () => {
          if (
            (
              scrollTop < _main.scrollTop &&
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
                }
              }, 500
            )
          }
        }, 750
      )
    }, {
      passive: true
    }
  );
