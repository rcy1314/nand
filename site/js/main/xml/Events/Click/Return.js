_container
  .addEventListener(
    'click', (evt) => {
      if (
        evt.target.classList.contains(
          `bottom`
        )
      ) {
        if (
          location.href.split(`?`)[0]
        )
          location.href.split(`?`)[0].state();
        if (
          location.href.match(`\\?q=`)
        ) {
          var uri = location.search.split(`?q=`)[1].match(/[^&]+/g);
          let description =
            menu.filter(
              function(item) {
                return item.description.space().toLowerCase()
                  .match(uri.toString().toLowerCase().space());
              }
            )
          for (
            let i = 0; i <= description.length - 1; i++
          )
            writeFilterResponse(menu.indexOf(description[i]));
          Category(category);
          Expand(expand);
          unloading();
        } else
          Category(category);
        Expand(expand);
        _channel.style.height = `0`;
      }

    }, {
      passive: false
    }
  );
