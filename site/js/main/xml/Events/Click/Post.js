_container
  .addEventListener(
    'click', (evt) => {
      if (
        evt.target.classList.contains(`fa-share`) ||
        evt.target.classList.contains(`post`)
      ) {
        if (navigator.clipboard) {
          var myText =
            evt
            .target
            .closest(
              `.item`
            )
            .querySelector(
              `.share`
            ).value;
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
              `.share`
            )
            .select();
            evt
              .target
              .closest(
                `.item`
              )
              .querySelector(
                `.share`
              )
            .setSelectionRange(0, 99999);
          document.execCommand(`copy`);
          // Here's where you put the fallback code for older browsers.
        }
      }
      evt.stopPropagation();
    }

  }, {
    passive: false
  });
