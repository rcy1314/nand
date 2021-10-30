var Hash = function (channel, xhr) {
  let parse = [];
  if (
    channel == `entry`
  ) {
    let re =
      xhr
        .getElementsByTagName(
          `link`
        )[0]
          .getAttribute(
            `href`
          );

    if (
      xhr
        .getElementsByTagName(
          `updated`
        )
          .length
            ==
          1
    ) {

      var dst =
        xhr
          .getElementsByTagName(
            `updated`
          )[0]
            .childNodes[0]
              .nodeValue
                .zulu();

      var since =
        new Date(
          xhr
            .getElementsByTagName(
              `updated`
            )[0]
              .childNodes[0]
                .nodeValue
        )
          .getTime();

      var gen =
        xhr
          .getElementsByTagName(
            `updated`
          )[0]
            .childNodes[0]
              .nodeValue
                .toLocaleString();

      gen =
        parseInt(
          gen
            .match(/([0-9]+\:[0-9]+\:[0-9]+)/g)
              .toString()
                .replace(
                  /\:/g,
                  ``
                )
        )
          .toString(36);

    } else if (
      xhr
        .getElementsByTagName(
          `pubDate`
        )
          .length
            ==
          1
    ) {
      var dst =
        xhr
          .getElementsByTagName(
            `pubDate`
          )[0]
            .childNodes[0]
              .nodeValue
                .zulu();
      var since =
        new Date(
          xhr
            .getElementsByTagName(
              `pubDate`
            )[0]
              .childNodes[0]
                .nodeValue
        );
      var gen =
        xhr
          .getElementsByTagName(
            `pubDate`
          )[0]
            .childNodes[0]
              .nodeValue
                .toLocaleString();
      gen =
        parseInt(
          gen
            .match(/([0-9]+\:[0-9]+\:[0-9]+)/g)
              .toString()
                .replace(
                  /\:/g,
                  ``
                )
        )
          .toString(36);
    }

    parse.push(
      {
        since: since,
        dst: dst[0],
        cyrb53: `${cyrb53(gen.toString())}-${cyrb53(channel.toString())}-${cyrb53(xhr.toString())}-${menu[id].title}`,
        base36: gen,
        externalURI: re.trim(),
      }
    );

  }
  else {
    if (
      xhr
        .getElementsByTagName(
          `datetime`
        )
          .length
            >
          0
    ) {
      let re =
        xhr
          .getElementsByTagName(
            `link`
          )[0]
            .childNodes[0]
              .nodeValue;
      let ts =
        parseInt(
          xhr
            .getElementsByTagName(
              `datetime`
            )[0]
              .childNodes[0]
                .nodeValue
        );

      let ts_ms = ts * 1000;
      let date = new Date(ts_ms);
      let year = date.getFullYear();
      let mon = (`0` + (date.getMonth() + 1)).slice(-2);
      let min = (`0` + date.getMinutes()).slice(-2);
      let sec = (`0` + date.getSeconds()).slice(-2);
      let hour = (`0` + date.getHours()).slice(-2);
      date = (`0` + date.getDate()).slice(-2);
      let def = `${year}-${mon}-${date} ${hour}:${min}:${sec}`;
      let dst = def.zulu();

      let since =
        new Date(
          parseInt(
            xhr
              .getElementsByTagName(
                `datetime`
              )[0]
                .childNodes[0]
                  .nodeValue
          )
      );

      let gen =
        parseInt(
          xhr
            .getElementsByTagName(
              `datetime`
            )[0]
              .childNodes[0]
                .nodeValue
        )
          .toString(36);

      parse.push(
        {
          since: since,
          dst: dst[0],
          cyrb53: `${cyrb53(gen.toString())}-${cyrb53(channel.toString())}-${cyrb53(xhr.toString())}-${menu[id].title}`,
          base36: gen,
          externalURI: re.trim(),
        }
      );

    }
    else if (
      xhr
        .getElementsByTagName(
          `pubDate`
        )
          .length
            >
          0
    ) {
      let re =
        xhr
          .getElementsByTagName(
            `link`
          )[0]
            .childNodes[0]
              .nodeValue;
      let dst =
        xhr
          .getElementsByTagName(
            `pubDate`
          )[0]
            .childNodes[0]
              .nodeValue
                .zulu();

      let since =
        new Date(
          xhr
            .getElementsByTagName(
              `pubDate`
            )[0]
              .childNodes[0]
                .nodeValue
        );

      let gen =
        new Date(
          xhr
            .getElementsByTagName(
              `pubDate`
            )[0]
              .childNodes[0]
                .nodeValue
        )
          .toLocaleString();

      gen =
        parseInt(
          gen
            .match(/([0-9]+\:[0-9]+\:[0-9]+)/g)
            .toString()
            .replace(/\:/g, ``)
        )
          .toString(36);

      parse.push(
        {
          since: since,
          dst: dst[0],
          cyrb53: `${cyrb53(gen.toString())}-${cyrb53(channel.toString())}-${cyrb53(xhr.toString())}-${menu[id].title}`,
          base36: gen,
          externalURI: re.trim(),
        }
      );

    }
    else if (
      xhr
        .getElementsByTagName(
          `dc:date`
        )
          .length
            >
          0
    ) {
      let re =
        xhr
          .getElementsByTagName(
            `dc:date`
          )[0]
            .childNodes[0]
              .nodeValue;

      let dst =
        xhr
          .getElementsByTagName(
            `dc:date`
          )[0]
            .childNodes[0]
              .nodeValue
                .zulu();

      let since =
        new Date(
          xhr
            .getElementsByTagName(
              `dc:date`
            )[0]
              .childNodes[0]
                .nodeValue
        );

      let gen =
        new Date(
          xhr
            .getElementsByTagName(
              `dc:date`
            )[0]
              .childNodes[0]
                .nodeValue
        )
          .getTime();

      gen = gen.toString(36);

      parse.push(
        {
          since: since,
          dst: dst[0],
          cyrb53: `${cyrb53(gen.toString())}-${cyrb53(channel.toString())}-${cyrb53(xhr.toString())}-${menu[id].title}`,
          base36: gen,
          externalURI: re.trim(),
        }
      );
    }
    else parse.push(``);
  }
  return parse[0];
};
