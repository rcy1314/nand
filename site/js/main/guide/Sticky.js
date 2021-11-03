var Sticky = function (pubArray) {
  let guide = _guide
    .querySelector(
      `[aria-item='${pubArray.menuObject}'][aria-object='${pubArray.pubIndex}']`
    );
  let guideFilter = _guide
    .querySelector(
      `[aria-item='${pubArray.menuObject}'][aria-object='${pubArray.pubIndex}'] .filterBlur`
    );
  let guideContainer = _guide
    .querySelector(
      `[aria-item='${pubArray.menuObject}'][aria-object='${pubArray.pubIndex}'] .image`
    );
  let guideSource = _guide
    .querySelector(
      `[aria-item='${pubArray.menuObject}'][aria-object='${pubArray.pubIndex}'] .src`
    );
  let guideImage = _guide
    .querySelector(
      `[aria-item='${pubArray.menuObject}'][aria-object='${pubArray.pubIndex}'] .img`
    );
  let guideHeader = _guide
    .querySelector(
      `[aria-item='${pubArray.menuObject}'][aria-object='${pubArray.pubIndex}'] .header`
    );
  let guidePub = _guide
    .querySelector(
      `[aria-item='${pubArray.menuObject}'][aria-object='${pubArray.pubIndex}'] .pub`
    );
  let guideAgo = _guide
    .querySelector(
      `[aria-item='${pubArray.menuObject}'][aria-object='${pubArray.pubIndex}'] .ago`
    );
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
                              guideFilter
                            )
                      )
                        guideFilter.classList.add(`blur`);
                    }
                }
            );
              guideImage
              .setAttribute(
                `src`,
                pubArray.src
              );
          _guide
            .querySelector(
              `.sticky`
            ).style.display = `block`;
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
      guideHeader.style.position = `absolute`;
      guideSource.style.display = `block`;
      guideContainer.style.margin = `0`;
      _main.classList.add(`guide`);

      if (
        newImg.naturalWidth >= newImg.naturalHeight
      ) {
        guideImage.style.maxHeight = `65vh`
        guideImage.style.maxWidth = `100vw`
        guideHeader.style.top = newImg.clientHeight - 60;
        guideHeader.style.width = `100vw`;
        if (
          document
            .body
              .contains(
                guideFilter
              )
        ) {
          guideFilter.style.maxWidth = `100vw`
          guideFilter.style.maxHeight = `65vh`
        }

        if (
          guideSafeSearch == true
        )
          guideFilter.style.width = newImg.naturalWidth;

      }

      else if (newImg.naturalHeight >= newImg.naturalWidth) {
        guideImage.style.maxHeight = `55vh`
        guideImage.style.maxWidth = `100vw`
        if (
          document
            .body
              .contains(
                guideFilter
              )
        ) {
          guideFilter.style.maxHeight = `55vh`
          guideFilter.style.maxWidth = `100vw`
        }
      }
      guideHeader.style.top = newImg.clientHeight - 60;
      guideAgo.style.position = `relative`;
      guideHeader.style.backgroundColor = `var(--color-primary)`
      guideHeader.style.width = `100vw`;
      _guide.style.paddingTop = `40px`;

      if (
        guideSafeSearch == true
      ) {
        guideFilter.style.height = newImg.naturalHeight;
        guideFilter.style.top = `0`;
      }

    }
    else {
      _main.classList.add(`guide`);

      if (
        newImg.naturalWidth <= maximum
      )
        guideContainer.style.margin = `25px`;

      if (
        newImg.naturalWidth >= newImg.naturalHeight
      ) {
        guideImage.style.maxHeight = `90vh`
        guideImage.style.maxWidth = `calc(80vw - 220px)`
        if (
          document
            .body
              .contains(
                guideFilter
              )
        ) {
          guideFilter.style.maxHeight = `90vh`
          guideFilter.style.maxWidth = `calc(80vw - 220px)`
        }
      }
      else if (
        newImg.naturalHeight >= newImg.naturalWidth
      ) {
        guideImage.style.maxHeight = `90vh`
        guideImage.style.maxWidth = `calc(55vw - 220px)`
        if (
          document
            .body
              .contains(
                guideFilter
              )
        ) {
          guideFilter.style.maxHeight = `90vh`
          guideFilter.style.maxWidth = `calc(55vw - 220px)`
        }
      }
    }
    if (
      !safeSearchIDs.includes(menu[id].id) ||
      guideSafeSearch == false
    ) {
      guideImage
        .setAttribute(
            `src`,
            pubArray.src
          );
      _guide
        .querySelector(
          `.sticky`
        ).style.display = `block`;
      _guide.style.display = `flex`;

    }
    if (
      menu[id].id.match(/Youtube/g)
    )
      guideImage.classList.add(`youtube`);

    if (
      showSplash
    )
      _check.style.display = `none`;
  };
};
