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
                `Dots`
              )
      ) {
        sideBarStar(
          _sidebar
            .querySelector(
              `.Percent`
            ),
            false
          );
        sideBarStar(
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
        sideBarStar(
          evt
            .target,
          _sidebar
            .querySelector(
              `.Percent`
            )
          );
        sideBarStar(
          _sidebar
            .querySelector(
              `.Dots`
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
        sideBarStar(_sidebar.querySelector(`.verticalbars`), false);
        sideBarStar(_sidebar.querySelector(`.circleloader`), false);
        sideBarStar(_sidebar.querySelector(`.ringloader`), false);
        sideBarStar(evt.target, true);
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
        sideBarStar(_sidebar.querySelector(`.circleloader`), false);
        sideBarStar(_sidebar.querySelector(`.loaderfalse`), false);
        sideBarStar(_sidebar.querySelector(`.ringloader`), false);
        sideBarStar(evt.target, true);
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
        sideBarStar(_sidebar.querySelector(`.verticalbars`), false);
        sideBarStar(_sidebar.querySelector(`.loaderfalse`), false);
        sideBarStar(_sidebar.querySelector(`.ringloader`), false);
        sideBarStar(evt.target, true);
      }

      else if (
        evt.target.classList.contains(
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
        sideBarStar(evt.target, true);
        }
    },
    {
      passive:
      false
    }
);
