_container
  .addEventListener(
    'click', (evt) => {
      if (
        evt.target.classList.contains(
          `download`
        )
      ) {
        var menuObject =
          evt.target.closest(`.item`).getAttribute(`aria-object`);
        var pubIndex =
          evt.target.closest(`.item`).getAttribute(`aria-item`);
        var xhr = new XMLHttpRequest();
        var url =
          document
          .querySelector(
            `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .source`
          ).value
        xhr.responseType = "arraybuffer";
        xhr.open("GET", cors + url, true);

        xhr.onreadystatechange = function() {
          if (xhr.readyState == xhr.DONE) {
            var file = new Blob([xhr.response], {
              type: "image"
            });
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

    }, {
      passive: false
    }
  );
