_container
  .addEventListener(
    'click', (evt) => {
      if (
        evt.target.classList.contains(`fa-at`) ||
        evt.target.classList.contains(`site`)
      ) {
        if (navigator.clipboard) {
          var myText =
            evt
            .target
            .closest(
              `.item`
            )
            .querySelector(
              `.url`
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
              `.url`
            )
            .select();
            evt
              .target
              .closest(
                `.item`
              )
              .querySelector(
                `.url`
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
