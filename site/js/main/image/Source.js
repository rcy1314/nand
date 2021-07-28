let Source =
  function (xhr) {
    if (
        xhr.getElementsByTagName(`content`).length > 0
      ) {
      if (
        xhr
          .getElementsByTagName(`content`)[0]
          .childNodes[0].nodeValue.match(
            /https:\/\/i\.redd\.it\/.+?(gif|png|jpg)/g
          )
      )
        src = String(
          xhr
            .getElementsByTagName(`content`)[0]
            .childNodes[0].nodeValue.match(
              /https:\/\/i\.redd\.it\/.+?(gif|png|jpg)/g
            )
        );
      else if (
        xhr
          .getElementsByTagName(`content`)[0]
          .childNodes[0].nodeValue.match(
            /https:\/\/.\.thumbs\.redditmedia\.com\/.+?(gif|png|jpg)/g
          )
      )
        src = String(
          xhr
            .getElementsByTagName(`content`)[0]
            .childNodes[0].nodeValue.match(
              /https:\/\/.\.thumbs\.redditmedia\.com\/.+?(gif|png|jpg)/g
            )
        );
      else if (
        xhr
          .getElementsByTagName(`content`)[0]
          .childNodes[0].nodeValue.match(
            /https:\/\/external-preview\.redd.it\/.+?(gif|png|jpg)/g
          )
      )
        src = String(
          xhr
            .getElementsByTagName(`content`)[0]
            .childNodes[0].nodeValue.match(
              /https:\/\/external-preview\.redd.it\/.+?(gif|png|jpg)/g
            )
        );
      else if (xhr.getElementsByTagName(`content`))
        src = String(
          xhr
            .getElementsByTagName(`content`)[0]
            .childNodes[0].nodeValue.match(
              /\b(https?:\/\/\S*?\.(?:png|jpe?g|gif))/g
            )
        );
      else src = null;
    }
    else if (
      xhr.getElementsByTagName(`media:thumbnail`).length > 0 &&
      youtubeMedia == false
    )
      src = String(
        xhr.getElementsByTagName(`media:thumbnail`)[0].getAttribute(`url`)
      );
    else if (
      xhr.getElementsByTagName(`media:content`).length > 0 &&
      xhr.getElementsByTagName(`media:content`)[0].attributes[`url`]
    ) {
      if (
        xhr
          .getElementsByTagName(`media:content`)[0]
          .getAttribute(`url`)
          .match(
            /youtube\.com/
          )
      )
        src =
          `https://www.youtube.com/embed/` +
          xhr
            .getElementsByTagName(`media:content`)[0]
            .getAttribute(`url`)
            .match(
              /[a-zA-Z0-9\_\-]{11}/g
            );
      else
        src = String(
          xhr
            .getElementsByTagName(`media:content`)[0]
            .getAttribute(`url`)
            .match(
              /\b(https?:\/\/\S*?\..+)/g
            )
        );
    }
    else if (
      xhr.getElementsByTagName(`media:thumbnail`).length > 0
    )
      src = String(
        xhr.getElementsByTagName(`media:thumbnail`)[0].getAttribute(`url`)
      );
    else if (
      xhr.getElementsByTagName(`media:thumbnail`).length <= 0 &&
      xhr.getElementsByTagName(`enclosure`).length > 0
    )
      src = String(xhr.getElementsByTagName(`enclosure`)[0].getAttribute(`url`));
    else if (
      xhr.getElementsByTagName(`content:encoded`).length > 0
    ) {
      if (
        xhr
          .getElementsByTagName(`content:encoded`)[0]
          .innerHTML.match(
            /\b(https?:\/\/\S*?\.(?:png|jpe?g|gif))/g
          )
      )
        src = xhr
          .getElementsByTagName(`content:encoded`)[0]
          .innerHTML.match(
            /\b(https?:\/\/\S*?\.(?:png|jpe?g|gif))/g
          )[0];
      else
        src = String(
          xhr
            .getElementsByTagName(`content:encoded`)[0]
            .childNodes[0].nodeValue.match(
              /\b(https?:\/\/\S*?\.(?:png|jpe?g|gif))/g
            )
        );
    }
    else if (
      xhr.getElementsByTagName(`image`).length > 0
    )
      src = String(
        xhr
          .getElementsByTagName(`image`)[0]
          .childNodes[0].nodeValue.match(
            /\b(https?:\/\/\S*?\.(?:png|jpe?g|gif))/g
          )
      );
    else if (
      xhr.getElementsByTagName(`link`)[0].attributes[`href`]
    )
      src = String(xhr.getElementsByTagName(`link`)[0].getAttribute(`href`));
    else if (
      typeof xhr.getElementsByTagName(`description`)[0] === `object` ||
      Array.isArray(xhr.getElementsByTagName(`description`)) &&
      !menu[id].id.match(/4Chan/g)
    ) {
      if (
        xhr
          .getElementsByTagName(`description`)[0]
          .innerHTML.match(
            /\b(https?:\/\/\S*?[a-zA-Z0-9\-\.\/\_\,]+)/g
          )
      ) {
        src = xhr
          .getElementsByTagName(`description`)[0]
          .innerHTML.match(
            /\b(https?:\/\/\S*?[a-zA-Z0-9\-\.\/\_\,]+)/g
          )[0];
      }
      else src = null;
    }
    else if (
      typeof xhr.getElementsByTagName(`description`)[0] === `object` ||
      typeof xhr.getElementsByTagName(`description`) !== `object`
    ) {
      if (
        (xhr.getElementsByTagName(`description`)[0]
          .innerHTML.match(/a.href|src/g)
        ||
          xhr.getElementsByTagName(`author`).length <= 0
        )
        ||
        (
          xhr.getElementsByTagName(`description`)[0].length > 0 &&
          Array.isArray(xhr.getElementsByTagName(`description`)
        )
      )
    ) {
      if (
        xhr
          .getElementsByTagName(`description`)[0]
          .innerHTML.match(
            /\b(https?:\/\/\S*?\.(^rss?:png|jpe?g|gif))/g
          )
      )
        src = xhr
          .getElementsByTagName(`description`)[0]
          .innerHTML.match(
            /\b(https?:\/\/\S*?\.(^rss?:png|jpe?g|gif))/g
          )[0];
      }
    }
    else if (
      xhr.getElementsByTagName(`link`).length > 0
    )
      src = String(
        xhr
          .getElementsByTagName(`link`)[0]
          .childNodes[0].nodeValue.match(
            /https:\/\/.+?(gif|png|jpg)/g
          )
      );
    else if (
      xhr.getElementsByTagName(`media:content`).length > 0
    )
      src = String(
        xhr.getElementsByTagName(`media:content`)[0].getAttribute(`url`)
      );
    else if (
      xhr.getElementsByTagName(`figure`).length > 0
    )
      src = String(
        xhr
          .getElementsByTagName(`figure`)
          .childNodes[0].nodeValue.match(
            /\b(https:\/\/\S*?[a-zA-Z0-9\-\.\/\_\,]+)/g
          )
      );
    else if (
      xhr.getElementsByTagName(`url`).length > 0
    )
      src = String(
        xhr
          .getElementsByTagName(`url`)
          .innerHTML.match(
            /\b(https?:\/\/\S*?\.(?:png|jpe?g|gif))/g
          )[0]
      );
    else src = null;
    return src;
  };
