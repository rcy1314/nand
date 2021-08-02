_sidebar
  .addEventListener(
    'click', (evt) =>
    {
      if (
        evt
          .target
            .classList
              .contains(
                `choose`
              )
      ) {
        expandSettings = expandSettings != true
        if (
          !expandSettings
        ) {
          _sidebar
            .querySelector(
              `.set`
            )
              .style
                .height
                  =
                `31px`;
        }

        else if (
          expandSettings
        ) {
          _sidebar
            .querySelector(
              `.set`
            )
              .style
                .height
                  =
                `${(settings.length) * 36}px`;
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

      else if (
        evt
          .target
            .classList
              .contains(
                `sideBarBackdrop`
              )
      ) {
        sideBarBackdrop = sideBarBackdrop != true;
        if (
          sideBarBackdrop
        ) {
          _sidebar
            .classList
              .add(
                `blur`
              );
        }

        else if (
          !sideBarBackdrop
        ) {
          _sidebar
            .classList
              .remove(
                `blur`
              );
        }
        sideBarStar(
          evt
            .target,
          sideBarBackdrop
        );
      }

      else if (
        evt
          .target
            .classList
              .contains(
                `cropImages`
              )
      ) {
        cropImages = cropImages != true;
        if (
          cropImages
        ) {
          _main
            .querySelectorAll(
              `.img`
            )
              .forEach(
                (a) =>
                  a
                    .closest(
                      `.image`
                    )
                      .style
                        .height
                          =
                        `160px`
            );
        }
        else if (
          !cropImages
        ) {
          _main
            .querySelectorAll(
              `.image`
            )
              .forEach(
                (a) =>
                  a
                    .style
                      .height
                        =
                      `auto`
            );
        }
        if (
          display == `flexBox`
        )
          displayFlex(flexBox);
        sideBarStar(
          evt
            .target,
          cropImages
        );
      }

      else if (
        evt.target.classList.contains(
          `sideBarDock`
        )
      ) {
        sideBarDock = sideBarDock != true
        if (
          sideBarDock
        ) {
          sideBarStar(
            evt
              .target,
            sideBarDock
          );
        } else if (sideBarDock == false) {
          sideBarStar(
            evt
              .target,
            sideBarDock
          );
        }
      }

      else if (
        evt.target.classList.contains(
          `onlySearch`
        )
      ) {
        onlySearch = onlySearch != true
        if (
          onlySearch
        ) {
          _options.style.display = `none`;
          _social.style.display = `none`;
          _under.style.display = `none`;
          _show.style.display = `none`;
          _link.style.display = `none`;
          sideBarStar(
            evt
              .target,
            onlySearch
          );
        } else if (onlySearch == false) {
          _under.style.display = `inline-flex`;
          _options.style.display = `block`;
          _social.style.display = `block`;
          _show.style.display = `block`;
          _link.style.display = `block`;
          sideBarStar(
            evt
              .target,
            onlySearch
          );
        }
      }
      evt.preventDefault();
    },
    {
      passive:
      false
    }
);
