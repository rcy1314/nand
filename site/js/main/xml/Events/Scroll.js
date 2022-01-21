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
            scrollTop < _main.scrollTop
          ) {
            for (
              let y = assets.indexOf(id); y > 0; y--) {
              let elements = _channel.querySelectorAll(`[aria-object='${assets[y]}']`);
              for (
                let i = 0; i < elements.length; i++) {
                if (
                  elements[i].getBoundingClientRect().top
                   <
                   0
                ) {
                  elements[i].style.visibility = `hidden`;
                }
              }
            }
          }
          if (
            scrollTop > _main.scrollTop
          ) {
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
              scrollTop < _main.scrollTop &&
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
