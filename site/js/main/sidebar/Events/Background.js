_sidebar
  .addEventListener(
    'click', (evt) =>
      {
        if (
          evt
            .target
              .classList
                .contains(
                  `adjust`
                )
        ) {
          expandBackground = expandBackground != true
          if (
            !expandBackground
          ) {
            _sidebar
              .querySelector(
                `.bg`
              )
                .style
                  .height
                    =
                  `31px`;
          }

          else if (
            expandBackground
          ) {
            _sidebar
              .querySelector(
                `.bg`
              )
                .style
                  .height
                    =
                  `${(background.length + 1) * 35 + 35}px`;
          }
        }

        else if (
          evt
            .target
              .classList
                .contains(
                  `urlInput`
                )
        )
          evt
            .target
              .select();

        else if (
          evt
            .target
              .classList
                .contains(
                  `resetBackground`
                )
        ) {
          if (
            backgroundImage[0].element
              ===
            `container`
          ) {
            _container
              .style
                .backgroundImage
                  =
                `url(${backgroundImage[0].path})`;
            _main
              .style
                .backgroundImage
                  =
                `url()`;
          }

          else if (
            backgroundImage[0].element
              ===
            `main`
          ) {
            _main
              .style
                .backgroundImage
                  =
                `url(${backgroundImage[0].path})`;
            _container
              .style
                .backgroundImage
                  =
                `url()`;
          }
        }

        else if (
          evt
            .target
              .classList
                .contains(
                  `setBackground`
                )
        ) {
          let input =
            document
              .createElement(
                `input`
              );
          input
            .type
              =
            `file`;
          input
            .setAttribute(
              `accept`,
              `image/*`
            );
          input
            .onchange = (e) => {
              // getting a hold of the file reference
              var file =
                e
                  .target
                    .files[0];
              // setting up the reader
              var reader =
                new FileReader();
              reader
                .readAsDataURL(
                  file
                ); // this is reading as data url

              // here we tell the reader what to do when it`s done reading...
              reader
                .onload = (readerEvent) => {
                  let content =
                    readerEvent
                      .target
                        .result; // this is the content!
                  if (
                    typeof backgroundImage[0].path === `string` &&
                    backgroundImage[0].element === `container` &&
                    Array.isArray(backgroundImage)
                  ) {
                    _container.style.backgroundImage = `url(${content})`;
                    _main.style.backgroundImage = `url()`;
                    backgroundImage[0].path = content
                  }

                  else if (
                    typeof backgroundImage[0].path == "string" &&
                    backgroundImage[0].element == `main` &&
                    Array.isArray(backgroundImage)
                  ) {
                    _main.style.backgroundImage = `url(${content})`;
                    _container.style.backgroundImage = `url()`;
                    backgroundImage[0].path = content
                  }
              };
          };
          input.click();
        }

        else if (
          evt
            .target
              .classList
                .contains(
                  `saveBackground`
                )
          &&
          _sidebar
            .querySelector(
              `.urlInput`
            )
              .value
                .match(
                  /\b(https?:\/\/\S*?\.(?:png|jpe?g|gif|webp))/g
                )
        ) {
          let xhr
            =
          new XMLHttpRequest();
          let url
            =
          _sidebar
            .querySelector(
              `.urlInput`
            )
              .value;
          if (
            showSplash
          )
            _check.style.display = `block`;

          xhr
            .responseType
              =
            `arraybuffer`;
          xhr
            .open(
              `GET`,
              cors + url,
              true
            );

          xhr
            .onreadystatechange = function () {
              if (
                xhr.readyState === xhr.DONE
              ) {
                let file
                  =
                new Blob(
                  [xhr.response],
                  {
                    type:
                    `image`
                  }
                );
                saveAs(
                  file,
                  _sidebar
                    .querySelector(`.urlInput`)
                    .value
                      .match(
                        /\b(\/.+\.(?:png|jpe?g|gif|webp))/g
                      )
                );
                if (
                  showSplash
                )
                  _check
                    .style
                      .display
                        =
                      `none`;
              }
          };

          xhr.send();
        }

        else if (
          evt
            .target
              .classList
                .contains(
                  `containerBackground`
                )
        ) {
          if (
            _container
              .style
                .backgroundImage
                  !=
                ``
          ) {
            _main
              .style
                .backgroundImage
                  =
                `url(${backgroundImage[0].path})`
            _container
              .style
                .backgroundImage
                  =
                ``;
          }

          else if (
            _main
              .style
                .backgroundImage
                  !=
                ``
          ) {
            _container
              .style
                .backgroundImage
                  =
                `url(${backgroundImage[0].path})`
            _main
              .style
                .backgroundImage
                  =
                ``;
          }
        }

        else if (
          evt
            .target
              .classList
                .contains(
                  `coverBackground`
                )
        ) {
          if (
            _container.style.backgroundSize === `auto 100%` ||
            _container.style.backgroundSize === `cover`  ||
            _main.style.backgroundSize === `auto 100%`||
            _main.style.backgroundSize === `cover`
          ) {
            _container.style.backgroundSize = `initial`;
            _main.style.backgroundSize = `initial`;
          } else {
            _container.style.backgroundSize = `cover`;
            _main.style.backgroundSize = `cover`;
          }
        }

        else if (
          evt.target.classList.contains(
            `fitBackground`
          )
        ) {
          if (
            _container.style.backgroundSize === `cover` ||
            _main.style.backgroundSize === `cover`
          ) {
            _container.style.backgroundSize = `contain`;
            _main.style.backgroundSize = `contain`;
          }

          else if (
            _container.style.backgroundSize === `contain` ||
            _main.style.backgroundSize === `contain`
          ) {
            _container.style.backgroundSize = `cover`;
            _main.style.backgroundSize = `cover`;
          }
        }
        if (
          evt
            .target
              .classList
                .contains(
                  `removeBackground`
                )
        ) {
          _container.style.backgroundImage = `none`;
          _main.style.backgroundImage = `none`;
        }

        evt.preventDefault();
      },
      {
        passive:
        false
      }
  );
