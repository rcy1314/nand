var Sticky = function (pubArray) {
  let maximum = 480;
  let newImg = new Image();
  newImg.setAttribute(
    `src`,
    pubArray.src
  );
  newImg.onload = function () {
    if (
      safeSearchIDs.includes(menu[id].id) &&
      guideSafeSearch == true
    ) {
      fetch(
        `${cors}${api}${pubArray.src}`,
        {
          method: "GET",
          headers: {
            Origin: "*",
            Accept: "application/json",
            "X-Requested-With": "*",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
      })
        .then(
          (response) => {
            response
              .json()
                .then(
                  (jsonResponse) =>
                  {
                    if (
                      jsonResponse.score >= safeSearchScore
                    ) {
                      if (
                        document
                          .body
                            .contains(
                              _guide
                                .querySelector(
                                  `[aria-item='${pubArray.menuObject}'][aria-object='${pubArray.pubIndex}'] .filterBlur`
                                )
                              )
                      )
                        _guide
                          .querySelector(
                            `[aria-item='${pubArray.menuObject}'][aria-object='${pubArray.pubIndex}'] .filterBlur`
                          )
                            .classList.add(`blur`);
                    }
                }
            );
          _guide
            .querySelector(`.img`)
              .setAttribute(
                `src`,
                pubArray.src
              );
          document.querySelector(`.sticky`).style.display = `block`;
          if (
            showSplash
          )
            _check.style.display = `none`;
          _guide.style.display = `flex`;
        }
      )
        .catch(
          (response) =>
            {
              while (
                _guide.lastChild
              )
                _guide.removeChild(_guide.lastChild);
              _check.style.display = `none`;
              _guide.style.display = `none`;
              local = null;
              post = null;
            }
        );
    }

    if (
      window.innerWidth <= 425
    ) {
      _guide.querySelector(`.sticky .header`).style.position = `absolute`;
      _guide.querySelector(`.sticky .src`).style.display = `block`;
      _guide.querySelector(`.sticky .image`).style.margin = `0`;
      _main.classList.add(`guide`);

      if (
        newImg.naturalWidth >= newImg.naturalHeight
      ) {
        _guide
          .querySelectorAll(
            `.img, .filterBlur`
          )
            .forEach(
              (a) => a.style.maxHeight = `65vh`
            );
        _guide
          .querySelectorAll(
            `.img, .filterBlur`
          )
            .forEach(
              (a) => a.style.maxWidth = `100vw`
            );
        _guide.querySelector(`.header`).style.top = newImg.clientHeight - 60;
        _guide.querySelector(`.header`).style.width = `100vw`;

        if (
          guideSafeSearch == true
        )
          _guide.querySelector(`.filterBlur`).style.width = newImg.naturalWidth;

      }

      else if (newImg.naturalHeight >= newImg.naturalWidth) {
        _guide
          .querySelectorAll(
            `.img, .filterBlur`
          )
            .forEach(
              (a) => a.style.maxHeight = `55vh`
            );
        _guide
          .querySelectorAll(
            `.img, .filterBlur`
          )
            .forEach(
              (a) => a.style.maxWidth = `100vw`
            );
      }
      _guide.querySelector(`.header`).style.top = newImg.clientHeight - 60;
      _guide.querySelector(`.ago`).style.position = `relative`;
      _guide.querySelector(`.header`).style.backgroundColor =
        `var(--color-primary)`
      _guide.querySelector(`.header`).style.width = `100vw`;
      _guide.style.paddingTop = `40px`;

      if (
        guideSafeSearch == true
      ) {
        _guide.querySelector(`.filterBlur`).style.height = newImg.naturalHeight;
        _guide.querySelector(`.filterBlur`).style.top = `0`;
      }

    }
    else {
      _main.classList.add(`guide`);

      if (
        newImg.naturalWidth <= maximum
      )
        _guide.querySelector(`.sticky .image`).style.margin = `25px`;

      if (
        newImg.naturalWidth >= newImg.naturalHeight
      ) {
        _guide
          .querySelectorAll(
            `.img, .filterBlur`
          )
            .forEach(
              (a) => a.style.maxHeight = `90vh`
            );
        _guide
          .querySelectorAll(
            `.img, .filterBlur`
          )
            .forEach(
              (a) => a.style.maxWidth = `calc(80vw - 220px)`
            );
      }
      else if (
        newImg.naturalHeight >= newImg.naturalWidth
      ) {
        _guide
          .querySelectorAll(
            `.img, .filterBlur`
          )
            .forEach(
              (a) => a.style.maxHeight = `90vh`
            );
        _guide
          .querySelectorAll(
            `.img, .filterBlur`
          )
            .forEach(
              (a) => a.style.maxWidth = `calc(55vw - 220px)`
            );
      }
    }
    if (
      !safeSearchIDs.includes(menu[id].id) ||
      guideSafeSearch == false
    ) {
      _guide
        .querySelector(
          `.img`
        )
          .setAttribute(
            `src`,
            pubArray.src
          );
      _guide
        .querySelector(
          `.img`
        ).classList.add(`youtube`);

      document.querySelector(`.sticky`).style.display = `block`;
      _guide.style.display = `flex`;

    }

    if (
      showSplash
    )
      _check.style.display = `none`;
  };
};
