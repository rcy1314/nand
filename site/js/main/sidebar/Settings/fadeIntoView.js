_sidebar
  .addEventListener(
    'click', (evt) =>
    {

      if (
        evt.target.classList.contains(
          `fadeIntoView`
        )
      ) {
        fadeIntoView = fadeIntoView != true;
        Star(evt.target, fadeIntoView);
        if (
          !fadeIntoView
        ) {
          _channel
            .querySelectorAll(`.img`)
              .forEach(
                (a) => a.classList.remove(`hidden`)
              );
        }

        else if (
          fadeIntoView
        ) {
          if (
            document
              .body
                .contains(
                  _channel.querySelector(`.img`)
                )
          ) {
            _channel
              .querySelectorAll(`.img`)
                .forEach(
                  (a) => a.classList.remove(`fade-in-element`)
                );
            _channel
              .querySelectorAll(`.img`)
                .forEach(
                  (a) => a.classList.add(`hidden`)
                );
            (function () {
              function startPosition() {
                let elements = _channel.querySelectorAll(".img");
                for (var i = 0; i < elements.length - 1; i++) {
                  if (
                    elements[i].getBoundingClientRect().top
                      -
                    _main.clientHeight <= 0
                  ) {
                    if (
                      fadeIntoView
                    ) {
                      elements[i].classList.add("fade-in-element");
                      elements[i].classList.remove("hidden");
                    }
                    if (!fadeIntoView) {
                      _main
                        .querySelectorAll(`.img`)
                          .forEach(
                            (a) => a.classList.remove(`hidden`)
                          );
                      _main.removeEventListener("scroll", startPosition);
                    }
                  }
                }
              }
              if (
                !sideScroll
              )
                _main.addEventListener("scroll", startPosition);
              else if (
                sideScroll
              )
                _channel.addEventListener("scroll", startPosition);
              startPosition();
            })();
          }
        }
      }
      evt.preventDefault();
    },
    {
      passive:
      false
    }
);
