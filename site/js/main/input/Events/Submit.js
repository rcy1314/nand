document
  .addEventListener(
    'submit', (evt) =>
    {
      _toggle.style.display = `none`
      if (
        evt
          .target
            .classList
              .contains(
                `min`
              )
      ) {
        if (
          _sidebar
            .querySelector(
              `.excludeInput`
            )
              .value
                .length
        ) {
          exclude
            .push(
              _sidebar
                .querySelector(
                  `.excludeInput`
                )
                  .value
          );
          const has = exclude.map((a) => a.toLowerCase());
          if (
            document
              .body
                .contains(
                  _xml
                )
          ) {
            _channel
              .querySelectorAll(
                  `.pub`
                )
                  .forEach(
                    (a) =>
                      has.filter(
                        function (obj) {
                          if (
                            a
                              .innerHTML
                                .toLowerCase()
                                  .match(
                                    obj
                                  )
                          )
                            a
                              .closest(
                                `.item`
                              )
                                .remove();
                        }
                      )
                  );
          }
          if (
            !_sidebar
              .querySelector(
                `.option`
              )
          ) {
            let option =
              document
                .createElement(
                  `div`
                );
            option
              .classList
                .add(
                  `option`
                );
            option
              .innerHTML
                =
              _sidebar
                .querySelector(
                  `.excludeInput`
                )
                  .value;
            evt
              .target
                .parentNode
                  .insertBefore(
                    option,
                    evt.target
                  );
          }

          else {
            let option
              =
            document
              .createElement(
                `div`
              );
            option
              .innerHTML
                =
              _sidebar
                .querySelector(
                  `.excludeInput`
                )
                  .value;
            option
              .classList
                .add(
                  `option`
                );
            _sidebar
              .querySelector(
                `.parse`
              )
                .parentNode
                  .insertBefore(
                    option,
                    _sidebar
                      .querySelector(
                        `.option`
                      )
                  );
          }
          _sidebar
            .querySelector(
              `.excludeInput`
            )
              .value
                =
              ``;
          _sidebar
            .querySelector(
              `.exclude`
            )
              .style
                .height
                  =
                `
                  ${
                    exclude.length * 35 + 70
                  }px
                `;
          }
      }

      else if (
        evt
          .target
            .classList
              .contains(
                `url`
              )
      ) {
        if (
          _sidebar
            .querySelector(
              `.imageURL`
            )
              .value
                .length
        ) {
          if (
            _sidebar
              .querySelector(
                `.imageURL`
              )
                .value
                  .match(
                    /\b(?:png|jpe?g|gif|webp)/g
                  )
          ) {
            if (
              backgroundImage[0]
                .element
                  ==
                `container`
            ) {
              _container
                .style
                  .backgroundImage
                    =
                  `url(
                    ${
                    _sidebar.querySelector(`.imageURL`).value
                    }
                  )`;
              _main
                .style
                  .backgroundImage
                    =
                  `url()`;
            }

            else if (
              backgroundImage[0]
                .element
                  ==
                `main`
            ) {
              _main
                .style
                  .backgroundImage
                    =
                  `url(
                    ${
                    _sidebar.querySelector(`.imageURL`).value
                    }
                  )`;
              _container
                .style
                  .backgroundImage
                    =
                  `url()`;
            }
          }
        }
      }

      else if (
        evt
          .target
            .classList
              .contains(
                `sideBasic`
              )
      ) {
        if (
          _sidebar
            .querySelector(
              `.sideFilter`
            )
              .value
                .length
        ) {
          Group();
          Filter(
            _sidebar
              .querySelector(
                `.sideFilter`
              )
                .value
                  .space(),
          );
          _toggle
            .style
              .display
                =
              `none`;
          Topbar(topBar);
        }

      }
      else if (
        evt
          .target
            .id
              ==
            `search`
      ) {
        if (
          document
            .body
              .contains(
                _result
                  .querySelector(
                    `.populate`
                  )
              )
        ) {
          first = true;
        }
        if (
          document
            .body
              .contains(
                _match
                  .querySelector(
                    `.hover`
                  )
              )
        ) {
          touchmove = true;
          _xml
            .style
              .display
                =
              `block`;
          _xml
            .style
              .zIndex
                =
              `1`;
          Cleanup();
          Request(
            _match
              .querySelector(
                `.hover`
              )
                .getAttribute(
                  `aria-object`
                )
          )
          _match
            .style
              .display
                =
              `none`;
        }

        else if (
          _view
            .value
              .length
        ) {
          if (
            location
              .href
                .split(
                  `?`
                )[0]
          )
            location
              .href
                .split(
                  `?`
                )[0]
                  .state();
          Filter(
            _view.value
          );
        }
        _match
          .style
            .display
              =
            `none`;
      }
      else if (
        evt
          .target
            .id
              ===
            `front`
      ) {
        if (
          _guest
            .value
              ===
            ``
          )
            inputListingIndex(
              ``,
              `#first`
            );
        if (
          document
            .body
              .contains(
                _first
                  .querySelector(
                    `.hover`
                  )
              )
        ) {
          first = true;
          _label
            .style
              .visibility
                =
              `visible`;
          _quick
            .style
              .visibility
                =
              `visible`;
          _show
            .style
              .visibility
                =
              `visible`;
          _link
            .style
              .visibility
                =
              `visible`;
          _first
            .style
              .display
                =
              `none`;
          _xml
            .style
              .display
                =
              `block`;
          _xml
            .style
              .zIndex
                =
              `1`;
          Cleanup();
          Topbar(topBar);
          Request(
            _first
              .querySelector(
                `.hover`
              )
                .getAttribute(
                  `aria-object`
                )
          );
        }
        else if (
          _guest
            .value
              .length
                >
              0
          )
        Filter(_guest.value);
        _visit
          .style
            .display
              =
            `none`;
        _first
          .style
            .display
              =
            `none`;
      }

      evt.preventDefault();
    },
    {
      passive:
      false
    }
);
