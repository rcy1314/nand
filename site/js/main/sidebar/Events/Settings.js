_sidebar
  .addEventListener(
    'click', (evt) =>
    {
      if (
        evt
          .target
            .classList
              .contains(
                `List`
              )
      ) {
        Group();
        expand
          =
        true;
        groupType
          =
        `list`;
        Category(
          category
        );
        Star(
          _sidebar
            .querySelector(
              `.Blocks`
            ),
          false
        );
        Star(
          evt
            .target,
          List
        );
        Topbar(
          topBar
        );
      }
      else if (
        evt
          .target
            .classList
              .contains(
                `Blocks`
              )
      ) {
        Group();
        expand
          =
        false;
        groupType
          =
        `blocks`;
        Star(
          _sidebar
            .querySelector(
              `.List`
            ),
          false
        );
        Star(
          evt
            .target
          ,
          true
        );
        Category(
          category
        );
        Topbar(
          topBar
        );
      }
      if (
        evt
          .target
            .classList
              .contains(
                `choose`
              )
      ) {
        expandSettings
          =
        expandSettings
          !=
        true
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
                `${(settings.length) * 38}px`;
        }
      }


      else if (
        evt
          .target
            .classList
              .contains(
                `sideBarBackdrop`
              )
      ) {
        sideBarBackdrop
          =
        sideBarBackdrop
          !=
        true;
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
        Star(
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
        cropImages
          =
        cropImages
          !=
        true;
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
          display
            !=
          `sideScroll`
            &&
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
          document
            .body
              .contains(
                _center
                  .querySelector(
                    `.item`
                  )
              )
            &&
          display
            ==
          `flexBox`
        )
          Flex();
        Star(
          evt
            .target,
          cropImages
        );
      }

      else if (
        evt
          .target
            .classList
              .contains(
                `sideBarDock`
              )
      ) {
        sideBarDock
          =
        sideBarDock
          !=
        true
        if (
          sideBarDock
        ) {
          Star(
            evt
              .target,
            sideBarDock
          );
        }
        else if (
          !sideBarDock
        ) {
          Star(
            evt
              .target,
            sideBarDock
          );
        }
      }

      else if (
        evt
          .target
            .classList
              .contains(
                `onlySearch`
              )
      ) {
        onlySearch
          =
        onlySearch
          !=
        true
        if (
          onlySearch
        ) {
          _options
            .style
              .display
            =
          `none`;
          _under
            .style
              .display
            =
          `none`;
          _show
            .style
              .display
            =
          `none`;
          _link
            .style
              .display
            =
          `none`;
          Star(
            evt
              .target,
            onlySearch
          );
        }
        else {
          _under
            .style
              .display
            =
          `inline-flex`;
          _show
            .style
              .display
            =
          `inline-block`;
          _link
            .style
              .display
            =
          `inline-block`;
          _options
            .style
              .display
            =
          `block`;
          Star(
            evt
              .target,
            onlySearch
          );
        }
      }

      if (
        evt
          .target
            .classList
              .contains(
                `fadeIntoView`
              )
      ) {
        fadeIntoView
          =
        fadeIntoView
          !=
        true;
        Star(
          evt
            .target,
          fadeIntoView
        );
        if (
          !fadeIntoView
        ) {
          _channel
            .querySelectorAll(`.img`)
              .forEach(
                (a) =>
                  a
                    .classList
                      .remove(
                        `hidden`
                      )
              );
        }

        else if (
          fadeIntoView
        ) {
          if (
            document
              .body
                .contains(
                  _channel
                    .querySelector(
                      `.img`
                    )
                )
          ) {
            _channel
              .querySelectorAll(
                `.img`
              )
                .forEach(
                  (a) =>
                    a
                      .classList
                        .remove(
                          `fade-in-element`
                        )
                );
            _channel
              .querySelectorAll(
                `.img`
              )
                .forEach(
                  (a) =>
                    a
                      .classList
                        .add(
                          `hidden`
                        )
                );
            (function () {
              function startPosition() {
                let elements
                  =
                _channel
                  .querySelectorAll(
                    '.img'
                  );
                for (
                  var i
                    =
                  0;
                  i
                    <
                  elements
                    .length
                    -
                  1;
                  i++
                ) {
                  if (
                    elements[i]
                      .getBoundingClientRect()
                        .top
                      -
                    _main
                      .clientHeight
                      <=
                    0
                  ) {
                    if (
                      fadeIntoView
                    ) {
                      elements[i]
                        .classList
                          .add(
                            'fade-in-element'
                          );
                      elements[i]
                        .classList
                          .remove(
                            'hidden'
                          );
                    }
                    if (
                      !fadeIntoView
                    ) {
                      _main
                        .querySelectorAll(
                          `.img`
                        )
                          .forEach(
                            (a) =>
                              a
                                .classList
                                  .remove(
                                    `hidden`
                                  )
                          );
                      _main
                        .removeEventListener(
                          'scroll',
                          startPosition
                        );
                    }
                  }
                }
              }
              if (
                !sideScroll
              )
                _main
                  .addEventListener(
                    'scroll',
                    startPosition
                  );
              else if (
                sideScroll
              )
                _channel
                  .addEventListener(
                    'scroll',
                    startPosition
                  );
              startPosition();
            })();
          }
        }
      }
      evt
        .preventDefault();
  },
  {
  passive: false
  }
);
