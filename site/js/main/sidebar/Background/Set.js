_sidebar
  .addEventListener(
    'click', (evt) => {
      if (
        evt
        .target
        .classList
        .contains(
          `setBackground`
        )
      ) {
        let input =
          document
          .createElement(
            `input`
          );
        input
          .type =
          `file`;
        input
          .setAttribute(
            `accept`,
            `image/*`
          );
        input
          .onchange = (e) => {
            // getting a hold of the file reference
            var file =
              e
              .target
              .files[0];
            // setting up the reader
            var reader =
              new FileReader();
            reader
              .readAsDataURL(
                file
              ); // this is reading as data url

            // here we tell the reader what to do when it`s done reading...
            reader
              .onload = (readerEvent) => {
                let content =
                  readerEvent
                  .target
                  .result; // this is the content!
                if (
                  typeof backgroundImage[0].path === `string` &&
                  backgroundImage[0].element === `container` &&
                  Array.isArray(backgroundImage)
                ) {
                  _container.style.backgroundImage = `url(${content})`;
                  _main.style.backgroundImage = `url()`;
                  backgroundImage[0].path = content
                } else if (
                  typeof backgroundImage[0].path == "string" &&
                  backgroundImage[0].element == `main` &&
                  Array.isArray(backgroundImage)
                ) {
                  _main.style.backgroundImage = `url(${content})`;
                  _container.style.backgroundImage = `url()`;
                  backgroundImage[0].path = content
                }
              };
          };
        input.click();
      }

    }, {
      passive: false
    }
  );
