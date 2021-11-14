_container
  .addEventListener(
    'click', (evt) => {
      if (
        evt.target.classList.contains(
          `construct`
        )
      ) {
        let url =
          menu[id].uri.match(
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.([a-z]{2,6}){1}/g
          );
        url.toString().blank();
      }

    }, {
      passive: false
    }
  );
