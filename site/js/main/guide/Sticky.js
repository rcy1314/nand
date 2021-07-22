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
          response.json().then(
            (jsonResponse) => {
              if (jsonResponse.score >= safeSearchScore) {
                if (
                  document.body.contains(
                    _guide.querySelector(
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
          });
          _guide
            .querySelector(`.img`).setAttribute(
              `src`,
              pubArray.src
            );
          document.querySelector(`.sticky`).style.display = `block`;
          _check.style.display = `none`;
          _guide.style.display = `flex`;
        })
        .catch(
          (response) => {
            while (_guide.lastChild) _guide.removeChild(_guide.lastChild);
            _check.style.display = `none`;
            _guide.style.display = `none`;
            local = null;
            post = null;
          }
        );
    }
    if (_main.clientWidth <= 425) {
      _main.classList.add(`guide`);
      _guide.querySelector(`.sticky .header`).style.position = `absolute`;
      _guide.querySelector(`.sticky .src`).style.display = `block`;
      _guide.querySelector(`.sticky .image`).style.margin = `0`;
      if (newImg.naturalWidth >= newImg.naturalHeight) {
        _guide
          .querySelectorAll(`.img, .filterBlur`).forEach(
            (a) => a.style.maxHeight = `65vh`
          );
        _guide
          .querySelectorAll(`.img, .filterBlur`).forEach(
            (a) => a.style.maxWidth = `100vw`
          );
        _guide.querySelector(`.header`).style.top = newImg.clientHeight - 60;
        _guide.querySelector(`.header`).style.width = `100vw`;
        if (guideSafeSearch == true)
          _guide.querySelector(`.filterBlur`).style.width = newImg.naturalWidth;
      } else if (newImg.naturalHeight >= newImg.naturalWidth) {
        _guide
          .querySelectorAll(`.img, .filterBlur`).forEach(
            (a) => a.style.maxHeight = `55vh`
          );
        _guide
          .querySelectorAll(`.img, .filterBlur`).forEach(
            (a) => a.style.maxWidth = `100vw`
          );
      }
      _guide.querySelector(`.header`).style.top = newImg.clientHeight - 60;
      _guide.querySelector(`.ago`).style.position = `relative`;
      _guide.querySelector(`.header`).style.backgroundColor =
        `var(--color-primary)`
      _guide.querySelector(`.header`).style.width = `100vw`;
      _guide.style.paddingTop = `40px`;
      if (guideSafeSearch == true) {
        _guide.querySelector(`.filterBlur`).style.top = `0`;
        _guide.querySelector(`.filterBlur`).style.height = newImg.naturalHeight;
      }
    } else {
      _main.classList.add(`guide`);
      if (newImg.naturalWidth <= maximum)
      _guide.querySelector(`.sticky .image`).style.margin = `25px`;
      if (newImg.naturalWidth >= newImg.naturalHeight) {
        _guide
          .querySelectorAll(`.img, .filterBlur`).forEach(
            (a) => a.style.maxHeight = `90vh`
          );
        _guide
          .querySelectorAll(`.img, .filterBlur`).forEach(
            (a) => a.style.maxWidth = `calc(80vw - 220px)`
          );
      } else if (newImg.naturalHeight >= newImg.naturalWidth) {
        _guide
          .querySelectorAll(`.img, .filterBlur`).forEach(
            (a) => a.style.maxHeight = `90vh`
          );
        _guide
          .querySelectorAll(`.img, .filterBlur`).forEach(
            (a) => a.style.maxWidth = `calc(55vw - 220px)`
          );
      }
      if (
        !youtubeMedia &&
        menu[id].id.match(/Youtube/g)
      ) {
      _guide
        .querySelectorAll(
          `[aria-item='${pubArray.menuObject}'][aria-object='${pubArray.pubIndex}'] .image`
        ).forEach(
          (a) => a.style.height = `269px`
        );
      }
    }
    if (
      !safeSearchIDs.includes(menu[id].id) ||
      guideSafeSearch == false
    ) {
      _guide.querySelector(`.img`).setAttribute(
        `src`,
        pubArray.src
      );
      document.querySelector(`.sticky`).style.display = `block`;
      _guide.style.display = `flex`;
    }
    _check.style.display = `none`;
  };
};
