_sidebar
  .addEventListener(
    'click', (evt) =>
      {
        if (
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

      },
      {
        passive:
        false
      }
  );
