_container.addEventListener('click', (evt) => {
    if (
      evt.target.classList.contains(`filterBlur`) ||
      evt.target.classList.contains(`img`)
    ) {
      let cid = evt.target.closest(`.item`).getAttribute(`aria-object`)
      if (loading == `percent`) _progress.style.width = `100%`;
      if (tap == 0) {
        tap = new Date().getTime();
        setTimeout(function () {
          if (
            new Date().getTime() - tap >= 350 &&
            new Date().getTime() - tap < 400
          )
            if (
              !evt.target
                .closest(`.item`)
                .querySelector(`.img`)
                .classList.contains(`guide`) &&
              evt.target
                .closest(`.item`)
                .querySelector(`.img`)
                .classList.contains(`default`)
            ) {
              count = [];
              let sticky = [];
              if (showSplash == true) _check.style.display = `block`;
              sticky.push({
                courtesy: evt.target.closest(`.item`).querySelector(`.header`)
                  .innerHTML,
                element: evt.target
                  .closest(`.item`)
                  .getAttribute(`aria-item`),
                image: menu[
                  evt.target.closest(`.item`).getAttribute(`aria-object`)
                ].image.image(),
                title: evt.target
                  .closest(`.item`)
                  .querySelector(`.pub`)
                  .getAttribute(`text`),
                share: evt.target.closest(`.item`).querySelector(`.share`)
                  .value,
                dst: evt.target
                  .closest(`.item`)
                  .querySelector(`.ago:last-child`).innerHTML,
                src: evt.target.closest(`.item`).querySelector(`.source`)
                  .value,
                externalURI: evt.target.closest(`.item`).getAttribute(`ext`),
                menuObject: evt.target
                  .closest(`.item`)
                  .getAttribute(`aria-object`),
                pubIndex: evt.target
                  .closest(`.item`)
                  .getAttribute(`aria-item`),
              });
              console.log(sticky[0])
              if (safeSearchIDs.includes(menu[id].id))
                if (showSplash == true) _check.style.display = `block`;
              Guide(sticky);
            } else if (
              evt.target
                .closest(`.item`)
                .querySelector(`.img`)
                .classList.contains(`guide`)
            )
              evt.target.closest(`.item`).getAttribute(`ext`).blank();
            else if (
              !evt.target
                .closest(`.item`)
                .querySelector(`.img`)
                .classList.contains(`default`)
            )
              evt.target.closest(`.item`).getAttribute(`ext`).blank();
          tap = 0;
        }, 350);
      } else {
        if (new Date().getTime() - tap < 350) {
          if (evt.target.classList.contains(`leave`)) {
            evt.target.closest(`.item`).getAttribute(`ext`).blank();
            return false;
          } else if (!evt.target.classList.contains(`blur`)) {
            evt.target
              .closest(`.image`)
              .querySelector(
                `.fa-heart`
              ).style.animation = `scale .7s ease-in-out .1s both`;
            evt.target
              .closest(`.image`)
              .querySelector(`.fa-heart`).style.display = `block`;
            evt.target
              .closest(`.image`)
              .querySelector(`.fa-heart`).style.zIndex = `12`;
            setTimeout(function () {
              evt.target
                .closest(`.image`)
                .querySelector(`.fa-heart`).style.animation = `none`;
              evt.target
                .closest(`.image`)
                .querySelector(`.fa-heart`).style.display = `none`;
              evt.target
                .closest(`.image`)
                .querySelector(`.fa-heart`).style.zIndex = `0`;
            }, 1500);
          }
          tap = 0;
        }
      }
      evt.stopPropagation();
    }
    else if (
      evt.target.classList.contains(
        `download`
      )
    ) {
      var menuObject = evt.target.closest(`.item`).getAttribute(`aria-object`);
      var pubIndex = evt.target.closest(`.item`).getAttribute(`aria-item`);
      var xhr = new XMLHttpRequest();
      var url =
      document
        .querySelector(
          `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .source`
        ).value
      xhr.responseType = "arraybuffer";
      xhr.open("GET", cors + url, true);

      xhr.onreadystatechange = function () {
        if (xhr.readyState == xhr.DONE) {
          var file = new Blob([xhr.response], { type: "image" });
          saveAs(
            file,
            _container
              .querySelector(
                `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .source`
              ).value
          )
        }
      };
      xhr.send();
    }
    else if (
      evt.target.classList.contains(`fa-at`) ||
      evt.target.classList.contains(`site`)
    ) {
      evt.target.closest(`.item`).querySelector(`.url`).select();
      document.execCommand(`copy`);
      evt.stopPropagation();
    }
    else if (
      evt.target.classList.contains(`fa-share`) ||
      evt.target.classList.contains(`post`)
    ) {
      evt.target.closest(`.item`).querySelector(`.share`).select();
      document.execCommand(`copy`);
      evt.stopPropagation();
    }
    else if (
      evt.target.classList.contains(`fa-camera`) ||
      evt.target.classList.contains(`picture`)
    ) {
      if (youtubeMedia == true && menu[id].id.match(/Youtube/g)) {
        evt.target.closest(`.item`).querySelector(`.url`).select();
        document.execCommand(`copy`);
      } else {
        evt.target.closest(`.item`).querySelector(`.source`).select();
        document.execCommand(`copy`);
      }
    }
  },
  false
);
