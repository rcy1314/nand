_sidebar
  .addEventListener(
    'click', (evt) => {

      if (
        evt.target.classList.contains(
          `legacy`
        )
      ) {
        display = `legacy`;
        notifyOption(`Mobile`, `fa-check-circle`)
        let leaveOff = _channel.scrollLeft +
          (
            (
              parseInt(
                document
                .querySelectorAll(
                  `.item`
                )
                .length
              ) *
              parseInt(
                100
              )
            )
          );
        Legacy();
        if (
          document
          .body
          .contains(
            _channel
            .querySelector(
              `.item`
            )
          )
        )
          _main.scrollTop = leaveOff;
        Star(evt.target, true);
        Star(_sidebar.querySelector(`.flex`), false);
        Star(_sidebar.querySelector(`.sscroll`), false);
        Star(_sidebar.querySelector(`.dual`), false);
      }


    }, {
      passive: false
    }
  );
