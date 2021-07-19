var Request = function (index) {
  init();
  pub = [];
  let html;
  count = [];
  id = index;
  stop = true;
  images = [];
  let inline = [];
  imageDuplicate = [];
  console.log(menu[index].id);
  _toggle.style.display = `none`
  document.title = menu[index].id.space();
  let state = `?q=${menu[index].id.hyphen()}`
  state.state();
  if (!readPrevious) random = [];
  if (
    !document.body.contains(
      _channel.querySelector(`.item`)
    ) &&
    first ||
      document.body.contains(
        _channel.querySelector(`[aria-object='${id}']`)
      )
  ) stageXML();
  uri = `${cors}${menu[index].uri}`;
  category = menu[index].category;
  _visit.style.display = `none`;
  if (_main.clientWidth >= 768)
    _bar.style.display = `none`;
  _sb.style.display = `none`;
  if (
    first &&
    showSplash ||
    !Reader &&
    first &&
    showSplash
  )
    _check.style.display = `block`;
  httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState == 4) {
      // 4 = `loaded`
      if (httpRequest.status == 200 && this.responseXML) {
        // 200 = OK
        let xhr = this.responseXML;
        console.log(xhr);
        if (xhr.getElementsByTagName(`entry`).length > 0) var channel = `entry`;
        else var channel = `item`;

        if (Reader == false) quit = 30;
        else quit = 16;
        for (
          let i = 2;
          i <= xhr.getElementsByTagName(channel).length - 1;
          i++
        ) {
          if (i === quit) break;

          let data = xhr.getElementsByTagName(channel)[i];

          if (data.childNodes.length > 1) var title = Title(data);

          if (title == postDuplicate || title == ``) continue;

          var postDuplicate = title;

          let trun =
            truncate(
              title,
              titleTruncate,
              true
            );

          parse =
            Hash(
              channel,
              data
            );

          if (
            trun.match(/\w+/g)
          )
            var uri = trun.toLowerCase().match(/\w+/g).join(`-`)

          else var uri = trun.toLowerCase()

          let share = menu[index].title;

          if (hash == `long`)
            share =
              `${location.href.split(`?`)[0]}?${parse.cyrb53}`;
          else if (hash == `short`)
            share =
              `${location.href.split(`?`)[0]}?${menu[index].hash}${parse.base36}`;
          else if (hash == `title`)
            share =
            `${location.href.split(`?`)[0]}?${uri}-${share}`;
          let src = Source(data);

          let courtesy = courtesyBuild(
            menu[index].id.match(/([^\/]+)$/g),
            menu[index].image.image(),
            menu[index].uri.match(
              /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.([a-z]{2,6}){1}/g
            )
          );

          if (title.length > titleTruncate)
            var more = `<div class='more'>more</div>`;
          else var more = ``;

          if (search == `search`)
            var cat = `<div class='external'>${parse.externalURI}</div>`;

          if (
            src &&
            src.match(/youtube\.com/g) &&
            youtubeMedia == true
          ) {
            if (data.getElementsByTagName(`media:statistics`).length > 0)
              var views =
                `views ${data.getElementsByTagName(`media:statistics`)[0].getAttribute(`views`).replace(/\B(?=(\d{3})+(?!\d))/g, `,`)}`;
            else var views = ``;

            inline = [];
            inline.push({
              id: menu[index].id.match(/([^\/]+)$/g),
              image: menu[index].image.image(),
              externalURI: parse.externalURI,
              courtesy: courtesy,
              menuObject: index,
              videoSource: src,
              dst: parse.dst,
              truncate: trun,
              share: share,
              title: title,
              views: views,
              more: more,
              pubIndex: i,
              uri: uri
            });
            html = youtubeHTMLBuild(inline[0]);
          } else {
            if (!cat) cat = ``;

            inline = [];
            inline.push({
              externalURI: parse.externalURI,
              searchExternal: cat,
              courtesy: courtesy,
              menuObject: index,
              dst: parse.dst,
              truncate: trun,
              title: title,
              share: share,
              more: more,
              src: src,
              pubIndex: i,
              uri: uri
            });
            html = xmlHTMLBuild(inline[0]);
          }
          pub.push({
            title: title,
            enc: parse.cyrb53.slice(0, parse.cyrb53.length - 17),
            re: parse.externalURI,
            courtesy: courtesy,
            since: parse.since,
            gen: parse.base36,
            dst: parse.dst,
            share: share,
            more: more,
            element: i,
            post: html,
            src: src,
            uri: uri
          });
          pub.sort(
            function (a, b) {
              return b.since - a.since;
            }
          );
        }
        for (
          let i = 0;
          i < pub.length;
          i++) {
          if (
            pub[i].enc == post &&
            hash == `long`
          ) local = i;
          else if (
            parseInt(pub[i].gen, 36) == post &&
            hash == `short`
          ) local = i;
          else if (
            pub[i].uri == post &&
            hash == `title`
          ) local = i;
        }
        if (
          menu[index].id.match(/Youtube/g) &&
          !isNaN(parseFloat(local)) &&
          youtubeMedia == true &&
          isFinite(local)
        ) {
          _guide.style.display = `flex`;

          var sticky = [];
          sticky.push({
            title: menu[index].id.match(/([^\/]+)$/g),
            image: menu[index].image.image(),
            element: pub[local].element,
            externalURI: pub[local].re,
            share: pub[local].share,
            dst: pub[local].dst,
            src: pub[local].src,
            menuObject: index,
            pubIndex: local,
            publish: title,
            views: views,
          });
          Guide(sticky);
          document.querySelector(`.sticky`).style.display = `flex`;
          unloading();
        } else if (
          !isNaN(
            parseFloat(
              local
            )
          ) &&
          isFinite(
            local
          )
        ) {
          if (pub[local].src == null) {
            pub[local].re.exit()
            return false;
          }
          _guide.style.display = `flex`;

          var sticky = [];
          sticky.push({
            image: menu[index].image.image(),
            courtesy: pub[local].courtesy,
            element: pub[local].element,
            externalURI: pub[local].re,
            title: pub[local].title,
            share: pub[local].share,
            dst: pub[local].dst,
            src: pub[local].src,
            menuObject: index,
            pubIndex: local,
          });
          Guide(sticky);
          unloading();
        } else if (
          Array.isArray(pub)
        ) {
          _guide.style.display = `none`;
          Append(index);
          unloading();
          pub = null;
        }
      } else {
        if (showSplash == true) _check.style.display = `none`;
        stageGroup();
        populateCategoryGroup(category);
        topMenuBarDisplay(topBar);
        displayExpand(expand);
        unloading();
      }
      _main.setAttribute(`tabindex`, -1);
      _main.focus();
    }
  };
  httpRequest.open(`GET`, uri);
  httpRequest.setRequestHeader(`Content-Type`, `text/html; charset=utf-8`);
  httpRequest.setRequestHeader(`Accept`, `text/html; charset=utf-8`);
  httpRequest.setRequestHeader(`Access-Control-Allow-Origin`, `*`);
  httpRequest.setRequestHeader(`X-Requested-With`, `*`);
  httpRequest.send();
};
