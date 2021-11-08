_main
  .addEventListener(
    'keyup', (evt) => {
      if (
        evt
        .target
        .id ===
        `guest`
      )
        Listing(
          `#first`,
          evt
          .keyCode
        );

      else if (
        evt
        .target
        .id ===
        `view`
      )
        Listing(
          `#match`,
          evt
          .keyCode
        );

      evt.preventDefault();
    }, {
      passive: false
    }
  );
