_container
  .addEventListener(
    'click', (evt) => {
      if (
        evt.target.classList.contains(`fa-camera`) ||
        evt.target.classList.contains(`picture`)
      ) {
        if (navigator.clipboard) {
          var myText =
          evt
            .target
            .closest(
              `.item`
            )
            .querySelector(
              `.source`
            ).value
          ;
          navigator.clipboard.writeText(myText).then(function() {
            notifyOption(`Copied`, `fa-check-circle`);
          }).catch(function() {
            notifyOption(`Failed`, `fa-times-circle`);
            // Do something to indicate the copy failed
          });
        } else {
          evt
            .target
            .closest(
              `.item`
            )
            .querySelector(
              `.source`
            )
            .select();
          document.execCommand(`copy`);
          // Here's where you put the fallback code for older browsers.
        }      }
    }, {
      passive: false
    }
  );
