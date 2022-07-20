_sidebar
  .addEventListener(
    'click', (evt) => {

      if (
        evt.target.classList.contains(
          `dual`
        ) &&
        window.innerWidth > 425
          ||
          evt.target.classList.contains(
            `dual`
          ) &&
        window.innerWidth <= 425 &&
        onlyImages
      ) {
        display = `duo`;
        notifyOption(`Duo`, `fa-times-circle`)
        Duo();
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
          _main.scrollTop = 0;
        Star(evt.target, true);
        Star(_sidebar.querySelector(`.flex`), false);
        Star(_sidebar.querySelector(`.sscroll`), false);
        Star(_sidebar.querySelector(`.legacy`), false);
      }


    }, {
      passive: false
    }
  );
