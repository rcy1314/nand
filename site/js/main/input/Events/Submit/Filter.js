document
  .addEventListener(
    'submit', (evt) => {
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
                  function(obj) {
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
              .innerHTML =
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
          } else {
            let option =
              document
              .createElement(
                `div`
              );
            option
              .innerHTML =
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
            .value =
            ``;
          _sidebar
            .querySelector(
              `.exclude`
            )
            .style
            .height =
            `
                  ${
                    exclude.length * 35 + 70
                  }px
                `;
        }
      }


      evt.preventDefault();
    }, {
      passive: false
    }
  );
