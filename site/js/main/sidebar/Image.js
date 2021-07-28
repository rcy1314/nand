_container
  .addEventListener(
    'click', (evt) =>
    {
      if (
        event.target.classList.contains(
          `loaderfalse`
        )
      ) {
        imageLoader = false;
        _main
          .querySelectorAll(`.bars`)
          .forEach(
            (a) => a.style.display = `none`
          );
        _main
          .querySelectorAll(`.animation`)
          .forEach(
            (a) => a.style.display = `none`
          );
        _main
          .querySelectorAll(`.loader`)
          .forEach(
            (a) => a.style.display = `none`
          );
        sideBarStar(event.target, true);
        sideBarStar(_sidebar.querySelector(`.verticalbars`), false);
        sideBarStar(_sidebar.querySelector(`.circleloader`), false);
        sideBarStar(_sidebar.querySelector(`.ringloader`), false);
      }
      else if (
        event.target.classList.contains(
          `verticalbars`
        )
      ) {
        imageLoader = `v-bars`;
        _main
          .querySelectorAll(`.bars`)
          .forEach(
            (a) => a.style.display = `block`
          );
        _main
          .querySelectorAll(`.animation`)
          .forEach(
            (a) => a.style.display = `none`
          );
        _main
          .querySelectorAll(`.loader`)
          .forEach(
            (a) => a.style.display = `none`
          );
        sideBarStar(_sidebar.querySelector(`.circleloader`), false);
        sideBarStar(_sidebar.querySelector(`.loaderfalse`), false);
        sideBarStar(_sidebar.querySelector(`.ringloader`), false);
        sideBarStar(event.target, true);
      }
      else if (
        event.target.classList.contains(
          `circleloader`
        )
      ) {
        imageLoader = `double-circle`;
        _main
          .querySelectorAll(`.loader`)
          .forEach(
            (a) => a.style.display = `block`
          );
        _main
          .querySelectorAll(`.bars`)
          .forEach(
            (a) => a.style.display = `none`
          );
        _main
          .querySelectorAll(`.animation`)
          .forEach(
            (a) => a.style.display = `none`
          );
        sideBarStar(_sidebar.querySelector(`.verticalbars`), false);
        sideBarStar(_sidebar.querySelector(`.loaderfalse`), false);
        sideBarStar(_sidebar.querySelector(`.ringloader`), false);
        sideBarStar(event.target, true);
      }
      else if (
        event.target.classList.contains(
          `ringloader`
        )
      ) {
        imageLoader = `ring-circle`;
        _main
          .querySelectorAll(`.animation`)
          .forEach(
            (a) => a.style.display = `block`
          );
        _main
          .querySelectorAll(`.bars`)
          .forEach(
            (a) => a.style.display = `none`
          );
        _main
          .querySelectorAll(`.loader`)
          .forEach(
            (a) => a.style.display = `none`
          );
        sideBarStar(_sidebar.querySelector(`.verticalbars`), false);
        sideBarStar(_sidebar.querySelector(`.circleloader`), false);
        sideBarStar(_sidebar.querySelector(`.loaderfalse`), false);
        sideBarStar(event.target, true);
        }
        else if (
          event.target.classList.contains(
            `fadeIntoView`
          )
        ) {
          fadeIntoView = fadeIntoView != true;
          sideBarStar(event.target, fadeIntoView);
          if (fadeIntoView == false) {
            _channel
              .querySelectorAll(`.img`)
              .forEach(
                (a) => a.classList.remove(`hidden`)
              );
          } else if (fadeIntoView == true) {
            if (
              document.body.contains(
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
                      elements[i].getBoundingClientRect().top - _main.clientHeight <= 0
                    ) {
                      if (fadeIntoView) {
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
                if (!sideScroll)
                  _main.addEventListener("scroll", startPosition);
                else if (sideScroll) _main.addEventListener("scroll", startPosition);
                startPosition();
              })();
            }
          }
        }
        event.preventDefault();
    },
    {
      passive:
      false
    }
);
