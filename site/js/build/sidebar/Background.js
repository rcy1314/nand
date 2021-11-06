let urlFormBuild = function () {
  let object = document.createElement(`input`);
  let form = document.createElement(`form`);
  let url = document.createElement(`div`);
  object.setAttribute(
    `value`,
    backgroundImage[0].path
  );
  object.setAttribute(
    `placeholder`,
    `tap paste url`
  );
  object.setAttribute(
    `type`,
    `text`
  );
  form.setAttribute(
    `action`,
    `#`
  );
  object
    .addEventListener(
      'dblclick', (evt) =>
        {
          navigator.clipboard.readText()
          .then((result) => {
            onScreen = true;
            sideBarLock = true;
              object.value = result;
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
            setTimeout(
              function() {
                sideBarLock = sideBarLockBuffer;
              }, 7000
            )
          })
          .catch((error) => {
              //console.log(error);
          });
        },
        {
          passive:
          false
        }
    );

  object.classList.add("urlInput");
  object.classList.add(`imageURL`);
  url.classList.add("background");
  object.classList.add(`text`);
  form.classList.add(`url`);
  form.append(object);
  url.append(form);
  url.id = `url`;
  return url;
};
