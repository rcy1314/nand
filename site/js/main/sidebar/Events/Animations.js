_sidebar
  .addEventListener(
    'click', (evt) =>
    {
      if (
        evt
          .target
            .classList
              .contains(
                `animations`
              )
      ) {
        expandAnimations = expandAnimations != true
        if (
          !expandAnimations
        ) {
          _sidebar
            .querySelector(
              `.anim`
            )
              .style
                .height
                  =
                `31px`;
        }

        else if (
          expandAnimations
        ) {
          _sidebar
            .querySelector(
              `.anim`
            )
              .style
                .height
                  =
                `${(animations.length) * 40}px`;
        }
      }

      else if (
        evt
          .target
            .classList
              .contains(
                `Progress`
              )
      ) {
        Star(
          _sidebar
            .querySelector(
              `.Percent`
            ),
            false
          );
        Star(
          evt
            .target,
          true
        );
        loading = `dots`;
      }

      else if (
        evt
          .target
            .classList
              .contains(
                `Percent`
              )
      ) {
        loading = `percent`;
        Star(
          evt
            .target,
          _sidebar
            .querySelector(
              `.Percent`
            )
          );
        Star(
          _sidebar
            .querySelector(
              `.Progress`
            ),
            false
          );
      }

      if (
        evt.target.classList.contains(
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
        _main
          .querySelectorAll(`#load`)
            .forEach(
              (a) => a.style.display = `none`
            );
        Star(_sidebar.querySelector(`.verticalbars`), false);
        Star(_sidebar.querySelector(`.circleloader`), false);
        Star(_sidebar.querySelector(`.ringloader`), false);
        Star(_sidebar.querySelector(`.loadinganim`), false);
        Star(evt.target, true);
      }

      else if (
        evt.target.classList.contains(
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
        _main
          .querySelectorAll(`#load`)
            .forEach(
              (a) => a.style.display = `none`
            );
        Star(_sidebar.querySelector(`.circleloader`), false);
        Star(_sidebar.querySelector(`.loaderfalse`), false);
        Star(_sidebar.querySelector(`.ringloader`), false);
        Star(_sidebar.querySelector(`.loadinganim`), false);
        Star(evt.target, true);
      }

      else if (
        evt.target.classList.contains(
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
        _main
          .querySelectorAll(`#load`)
            .forEach(
              (a) => a.style.display = `none`
            );
        Star(_sidebar.querySelector(`.verticalbars`), false);
        Star(_sidebar.querySelector(`.loaderfalse`), false);
        Star(_sidebar.querySelector(`.ringloader`), false);
        Star(_sidebar.querySelector(`.loadinganim`), false);
        Star(evt.target, true);
      }

      else if (
        evt.target.classList.contains(
          `ringloader`
        )
      ) {
        imageLoader = `ring-circle`;
        _main
          .querySelectorAll(`#load`)
            .forEach(
              (a) => a.style.display = `none`
            );
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
        Star(_sidebar.querySelector(`.verticalbars`), false);
        Star(_sidebar.querySelector(`.circleloader`), false);
        Star(_sidebar.querySelector(`.loaderfalse`), false);
        Star(_sidebar.querySelector(`.loadinganim`), false);
        Star(evt.target, true);
        }

        else if (
          evt.target.classList.contains(
            `loadinganim`
          )
        ) {
          imageLoader = `loading`;
          _main
            .querySelectorAll(`#load`)
              .forEach(
                (a) => a.style.display = `block`
              );
          _main
            .querySelectorAll(`.animation`)
              .forEach(
                (a) => a.style.display = `none`
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
          Star(_sidebar.querySelector(`.verticalbars`), false);
          Star(_sidebar.querySelector(`.circleloader`), false);
          Star(_sidebar.querySelector(`.loaderfalse`), false);
          Star(evt.target, true);
          }
    },
    {
      passive:
      false
    }
);
