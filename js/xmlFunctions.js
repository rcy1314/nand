var next = function () {
  if (filter.length > 1)
    var plus = filter.indexOf(menu.indexOf(menu[parseInt(id)]));
  else var plus = parseInt(id);
  if (filter[plus + +1]) var next = filter[plus + +1];
  else if (id == menu.length - 1) var next = 1 + +1;
  else var next = parseInt(id) + +1;

  return parseInt(next);
};

var back = function () {
  if (filter.length > 1)
    var plus = filter.indexOf(menu.indexOf(menu[parseInt(id)]));
  if (filter[plus - +1]) var back = filter[plus - +1];
  else if (id == 0) var back = menu.length - 1;
  else var back = parseInt(id) - +1;

  return parseInt(back);
};

var xmlImageSource = function (xhr) {
  if (xhr.getElementsByTagName("content").length > 0) {
    if (
      xhr
        .getElementsByTagName("content")[0]
        .childNodes[0].nodeValue.match(
          /https:\/\/i\.redd\.it\/.+?(gif|png|jpg|mp4)/g
        )
    )
      src = String(
        xhr
          .getElementsByTagName("content")[0]
          .childNodes[0].nodeValue.match(
            /https:\/\/i\.redd\.it\/.+?(gif|png|jpg|mp4)/g
          )
      );
    else if (
      xhr
        .getElementsByTagName("content")[0]
        .childNodes[0].nodeValue.match(
          /https:\/\/.\.thumbs\.redditmedia\.com\/.+?(gif|png|jpg|mp4)/g
        )
    )
      src = String(
        xhr
          .getElementsByTagName("content")[0]
          .childNodes[0].nodeValue.match(
            /https:\/\/.\.thumbs\.redditmedia\.com\/.+?(gif|png|jpg|mp4)/g
          )
      );
    else if (Array.isArray(xhr.getElementsByTagName("content")))
      src = String(
        xhr
          .getElementsByTagName("content")[0]
          .childNodes[0].nodeValue.match(
            /\b(https?:\/\/\S*?\.(?:png|jpe?g|gif))/g
          )[0]
      );
    else src = null;
  } else if (
    xhr.getElementsByTagName("media:content").length > 0 &&
    xhr.getElementsByTagName("media:content")[0].attributes["url"]
  ) {
    if (
      xhr
        .getElementsByTagName("media:content")[0]
        .getAttribute("url")
        .match(/youtube\.com/)
    )
      src =
        "https://www.youtube.com/embed/" +
        xhr
          .getElementsByTagName("media:content")[0]
          .getAttribute("url")
          .match(/[a-zA-Z0-9\_\-]{11}/g);
    else
      src = String(
        xhr
          .getElementsByTagName("media:content")[0]
          .getAttribute("url")
          .match(/\b(https?:\/\/\S*?\..+)/g)
      );
  } else if (xhr.getElementsByTagName("media:thumbnail").length > 0)
    src = String(
      xhr.getElementsByTagName("media:thumbnail")[0].getAttribute("url")
    );
  else if (
    xhr.getElementsByTagName("enclosure").length > 0 &&
    xhr.getElementsByTagName("media:thumbnail").length <= 0
  )
    src = String(xhr.getElementsByTagName("enclosure")[0].getAttribute("url"));
  else if (xhr.getElementsByTagName("content:encoded").length > 0) {
    if (
      xhr
        .getElementsByTagName("content:encoded")[0]
        .innerHTML.match(/\b(https?:\/\/\S*?\.(?:png|jpe?g|gif))/g)
    )
      src = xhr
        .getElementsByTagName("content:encoded")[0]
        .innerHTML.match(/\b(https?:\/\/\S*?\.(?:png|jpe?g|gif))/g)[0];
    else
      src = String(
        xhr
          .getElementsByTagName("content:encoded")[0]
          .childNodes[0].nodeValue.match(
            /\b(https?:\/\/\S*?\.(?:png|jpe?g|gif))/g
          )
      );
  } else if (xhr.getElementsByTagName("image").length > 0)
    src = String(
      xhr
        .getElementsByTagName("image")[0]
        .childNodes[0].nodeValue.match(
          /\b(https?:\/\/\S*?\.(?:png|jpe?g|gif))/g
        )
    );
  else if (xhr.getElementsByTagName("link")[0].attributes["href"])
    src = String(xhr.getElementsByTagName("link")[0].getAttribute("href"));
  else if (
    (xhr
      .getElementsByTagName("description")[0]
      .innerHTML.match(/a.href|src/g) &&
      xhr.getElementsByTagName("author").length <= 0) ||
    (xhr.getElementsByTagName("description")[0].length > 0 &&
      Array.isArray(xhr.getElementsByTagName("description")))
  ) {
    if (
      xhr
        .getElementsByTagName("description")[0]
        .innerHTML.match(/(https?:\/\/\S*?[a-zA-Z0-9\-\.\/\_\,]+)/g)
    )
      src = xhr
        .getElementsByTagName("description")[0]
        .innerHTML.match(/(https?:\/\/\S*?[a-zA-Z0-9\-\.\/\_\,]+)/g)[0];
    else if (xhr.getElementsByTagName("description")[0].childNodes[1])
      src = String(
        xhr
          .getElementsByTagName("description")[0]
          .childNodes[1].nodeValue.match(
            /(https?:\/\/\S*?[a-zA-Z0-9\-\.\/\_\,]+)/g
          )
      );
    else if (xhr.getElementsByTagName("description")[0].childNodes[0])
      src = String(
        xhr
          .getElementsByTagName("description")[0]
          .childNodes[0].nodeValue.match(
            /\b(https?:\/\/\S*?\.(?:png|jpe?g|gif))/g
          )
      );
  } else if (xhr.getElementsByTagName("link").length > 0)
    src = String(
      xhr
        .getElementsByTagName("link")[0]
        .childNodes[0].nodeValue.match(/https:\/\/.+?(gif|png|jpg|mp4)/g)
    );
  else if (xhr.getElementsByTagName("media:content").length > 0)
    src = String(
      xhr.getElementsByTagName("media:content")[0].getAttribute("url")
    );
  else if (xhr.getElementsByTagName("figure").length > 0)
    src = String(
      xhr
        .getElementsByTagName("figure")
        .childNodes[0].nodeValue.match(
          /\b(https:\/\/\S*?[a-zA-Z0-9\-\.\/\_\,]+)/g
        )
    );
  else if (xhr.getElementsByTagName("url").length > 0)
    src = String(
      xhr
        .getElementsByTagName("url")
        .innerHTML.match(/\b(https?:\/\/\S*?\.(?:png|jpe?g|gif))/g)[0]
    );
  else src = null;
  console.log(src);
  return src;
};

var xmlTimeStampParsing = function (channel, dateTime) {
  let parse = [];
  if (channel == "entry") {
    let re = dateTime.getElementsByTagName("link")[0].getAttribute("href");
    let dst = dateTime
      .getElementsByTagName("updated")[0]
      .childNodes[0].nodeValue.zulu();
    let since = new Date(
      dateTime.getElementsByTagName("updated")[0].childNodes[0].nodeValue
    ).getTime();
    let gen = dateTime
      .getElementsByTagName("updated")[0]
      .childNodes[0].nodeValue.toLocaleString();
    gen = parseInt(
      gen
        .match(/([0-9]+\:[0-9]+\:[0-9]+)/g)
        .toString()
        .replace(/\:/g, "")
    ).toString(36);
    parse.push({
      since: since,
      dst: dst[0],
      gen: gen,
      re: re.trim(),
    });
  } else {
    if (dateTime.getElementsByTagName("datetime").length > 0) {
      let re = dateTime.getElementsByTagName("link")[0].childNodes[0].nodeValue;
      let ts = parseInt(
        dateTime.getElementsByTagName("datetime")[0].childNodes[0].nodeValue
      );
      let ts_ms = ts * 1000;
      let date = new Date(ts_ms);
      let year = date.getFullYear();
      let mon = ("0" + (date.getMonth() + 1)).slice(-2);
      let min = ("0" + date.getMinutes()).slice(-2);
      let sec = ("0" + date.getSeconds()).slice(-2);
      let hour = ("0" + date.getHours()).slice(-2);
      date = ("0" + date.getDate()).slice(-2);
      let def =
        year + "-" + mon + "-" + date + " " + hour + ":" + min + ":" + sec;
      let dst = def.zulu();
      let since = new Date(
        parseInt(
          dateTime.getElementsByTagName("datetime")[0].childNodes[0].nodeValue
        )
      );
      let gen = parseInt(
        dateTime.getElementsByTagName("datetime")[0].childNodes[0].nodeValue
      ).toString(36);
      parse.push({
        since: since,
        dst: dst[0],
        gen: gen,
        re: re.trim(),
      });
    } else if (dateTime.getElementsByTagName("pubDate").length > 0) {
      let re = dateTime.getElementsByTagName("link")[0].childNodes[0].nodeValue;
      let dst = dateTime
        .getElementsByTagName("pubDate")[0]
        .childNodes[0].nodeValue.zulu();
      let since = new Date(
        dateTime.getElementsByTagName("pubDate")[0].childNodes[0].nodeValue
      );
      let gen = new Date(
        dateTime.getElementsByTagName("pubDate")[0].childNodes[0].nodeValue
      ).toLocaleString();
      gen = parseInt(
        gen
          .match(/([0-9]+\:[0-9]+\:[0-9]+)/g)
          .toString()
          .replace(/\:/g, "")
      ).toString(36);
      parse.push({
        since: since,
        dst: dst[0],
        gen: gen,
        re: re.trim(),
      });
    } else if (dateTime.getElementsByTagName("dc:date").length > 0) {
      let re = dateTime.getElementsByTagName("dc:date")[0].childNodes[0]
        .nodeValue;
      let dst = dateTime
        .getElementsByTagName("dc:date")[0]
        .childNodes[0].nodeValue.zulu();
      let since = new Date(
        dateTime.getElementsByTagName("dc:date")[0].childNodes[0].nodeValue
      );
      let gen = new Date(
        dateTime.getElementsByTagName("dc:date")[0].childNodes[0].nodeValue
      ).getTime();
      gen = gen.toString(36);
      parse.push({
        since: since,
        dst: dst[0],
        gen: gen,
        re: re.trim(),
      });
    } else parse.push("");
  }
  return parse[0];
};

var xmlImageAttributes = function (empty, n, item, src) {
  let maximum = 799;
  let k = 5420;
  ready(() => {
    if (dupe.includes(src)) {
      if (
        document.body.contains(
          document.querySelector(".img-" + item + " .pending")
        )
      )
        document.querySelector(".img-" + item + " .pending").remove();
      if (
        empty == true ||
        (onlyImages == true &&
          document.querySelector(".item-" + n + " .src-" + item))
      )
        document
          .querySelector(".item-" + n + " .src-" + item)
          .closest(".item")
          .remove();
      return false;
    }
    dupe.push(src);
    if (
      src &&
      src.match(/https?:\/\//g) &&
      !src.match(/comments|feeds|fsdn|undefined/g)
    ) {
      var newImg = new Image();
      newImg.setAttribute("src", src);
      newImg.onerror = function () {
        if (
          document.body.contains(
            document.querySelector(".img-" + item + " .pending")
          )
        )
          document.querySelector(".img-" + item + " .pending").remove();
        if (
          document.body.contains(
            document.querySelector(".img-" + item + " .image")
          )
        )
        document.querySelector(".img-" + item + " .image").remove();
        document.querySelector(".img-" + item).style.paddingBottom = "30px";
      };
      newImg.onload = function () {
        if (
          document.body.contains(
            document.querySelector(".item-" + n + " .src-" + item)
          )
        ) {
          let itemImage = document.querySelector(
            ".item-" + n + " .src-" + item
          );
          let attribute = document.querySelector(
            ".img-" + item + " .attribute"
          );
          let copyPicture = document.querySelector(
            ".img-" + item + " .picture"
          );
          let copyPost = document.querySelector(".img-" + item + " .post");
          itemImage.setAttribute("src", src);
          if (document.querySelector("#main").clientWidth <= 425) {
            if (newImg.naturalHeight > k &&
              newImg.naturalHeight >= newImg.naturalWidth * 2) {
              itemImage.closest(".item").querySelector(".pending").remove();
              itemImage.closest(".image").remove();
            } else if (newImg.naturalWidth < maximum) {
              itemImage.style.width = "180px";
              itemImage.style.margin = "12px";
              itemImage.closest(".classic").style.display = "flex";
              itemImage.closest(".classic").style.alignItems = "center";
              itemImage.style.marginBottom = "30px";
            } else if (newImg.naturalHeight >= newImg.naturalWidth * 2) {
              itemImage.style.width = "30vh";
              itemImage.classList.add("default");
              copyPost.style.display = "block";
              copyPicture.style.display = "block";
              attribute.style.height = "110px";
            } else if (
              newImg.naturalWidth >= newImg.naturalHeight ||
              newImg.naturalHeight >= newImg.naturalWidth
            ) {
              itemImage.style.width = "100%";
              itemImage.classList.add("default");
              copyPost.style.display = "block";
              copyPicture.style.display = "block";
              attribute.style.height = "110px";
            }
          } else {
            if (newImg.naturalHeight > k &&
              newImg.naturalHeight >= newImg.naturalWidth * 2) {
              itemImage.closest(".item").querySelector(".pending").remove();
              itemImage.closest(".image").remove();
            } else if (newImg.naturalWidth < maximum) {
              itemImage.style.width = "180px";
              itemImage.closest(".image").style.margin = "12px";
              itemImage.closest(".classic").style.display = "flex";
              itemImage.closest(".classic").style.alignItems = "center";
              itemImage.style.marginBottom = "30px";
            } else if (newImg.naturalHeight >= newImg.naturalWidth * 2) {
              itemImage.style.width = "100%";
              itemImage.classList.add("default");
              copyPost.style.display = "block";
              copyPicture.style.display = "block";
              attribute.style.height = "110px";
            } else if (
              newImg.naturalWidth >= newImg.naturalHeight ||
              newImg.naturalHeight >= newImg.naturalWidth
            ) {
              itemImage.style.width = "100%";
              itemImage.classList.add("default");
              copyPost.style.display = "block";
              copyPicture.style.display = "block";
              attribute.style.height = "110px";
            }
          }
          if (
            document.body.contains(
              document.querySelector(".img-" + item + " .pending")
            )
          )
            document.querySelector(".img-" + item + " .pending").remove();
          if (
            document.body.contains(
              document.querySelector(".item-" + n + " .src-" + item)
            )
          )
            document.querySelector(
              ".item-" + n + " .src-" + item
            ).style.display = "block";
        }
      };
    } else if (
      document.body.contains(
        document.querySelector(".item-" + n + " .src-" + item)
      )
    )
      document
        .querySelector(".item-" + n + " .src-" + item)
        .closest(".item")
        .querySelector(".pending")
        .remove();
    visual();
  });
};

var xmlTitleParsing = function(xhr) {

  if (xhr.getElementsByTagName("title")[0].childNodes[1])
    var title = xhr.getElementsByTagName("title")[0].childNodes[1]
      .nodeValue;
  else
    var title = xhr.getElementsByTagName("title")[0].childNodes[0]
      .nodeValue;
  if (
    !title ||
    (title.length == 7 &&
      xhr.getElementsByTagName("title")[0].childNodes[0])
  )
    var title = xhr.getElementsByTagName("title")[0].childNodes[0]
      .nodeValue;

  return escape(title)

}

var xmlRequestParsing = function (search, string, index) {
  let local;
  let pub = [];
  let id = index;

  if (search == "search") {
    uri = cors + menu[index].uri + string + "&format=RSS";
    category = category;
  } else {
    uri = cors + menu[index].uri;
    category = menu[index].cat;
  }

  document.title = menu[index].id.space();
  document.querySelector("#visit").style.display = "none";
  document.querySelector("#toggle").style.display = "none";

  httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState == 4) {
      // 4 = "loaded"
      if (httpRequest.status == 200) {
        // 200 = OK
        let xhr = this.responseXML;
        if (op == 0) var style = "style='box-shadow:8px 8px 16px #eeeeee'";
        else if (op == 1) var style = "style='box-shadow: 8px 8px 16px #060606'";

        if (xhr.getElementsByTagName("entry").length > 0) var channel = "entry";
        else var channel = "item";

        var quit = 20;

        if (menu[index].id.match(/Imgur/g)) quit = 60;
        for (i = 2; i <= xhr.getElementsByTagName(channel).length - 1; i++) {
          if (i === quit) break;

          let data = xhr.getElementsByTagName(channel)[i];

          if (data.childNodes.length > 1) var title = xmlTitleParsing(data)

          if (title == postDuplicate || title == '') continue

          var postDuplicate = title

          let trun = truncate(title, titleTruncate, true);

          parse = xmlTimeStampParsing(channel, data);

          let share = menu[index].hash;
          share = window.location.origin + "/?" + share + parse.gen;

          let src = xmlImageSource(data);

          let courtesy = courtesyHeader(
            menu[index].id.match(/([^\/]+)$/g),
            menu[index].img.image(),
            menu[index].ext
          );

          if (title.length > titleTruncate) var more = "<div class='more'>more</div>";
          else var more = "";

          if (search == "search")
            var cat = "<div class='external'>" + parse.re + "</div>";

          if (src && src.match(/youtube\.com/g)) {
            if (data.getElementsByTagName("media:statistics").length > 0)
              var views =
                "<div class='ago views'>" +
                "  views " +
                data
                  .getElementsByTagName("media:statistics")[0]
                  .getAttribute("views")
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
                "</div>";
            else var views = "";

            html = youtubeHTMLBuild(
              menu[index].id.match(/([^\/]+)$/g),
              menu[index].img.image(),
              parse.dst,
              courtesy,
              parse.re,
              style,
              share,
              views,
              trun,
              more,
              src,
              index
            );
          } else {
            if (!cat) cat = "";

            html = xmlHTMLBuild(
              parse.dst,
              parse.re,
              courtesy,
              style,
              title,
              share,
              trun,
              more,
              cat,
              src,
              i,
              index
            );
          }

          pub.push({
            title: title,
            courtesy: courtesy,
            since: parse.since,
            dst: parse.dst,
            gen: parse.gen,
            re: parse.re,
            share: share,
            more: more,
            element: i,
            post: html,
            src: src,
          });
          pub.sort(function (a, b) {
            return b.since - a.since;
          });
          for (i = 0; i < pub.length; i++) {
            if (parseInt(pub[i].gen, 36) == post) local = i;
          }
        }
        if (first == true) {
          var main = document.querySelector("#main");
          main.innerHTML = main.innerHTML + stageBuild();
        } else {
          var status = document.querySelector("status");
          while (status.firstChild) {
            status.removeChild(status.lastChild);
          }
          var suggestions = document.getElementById("suggestions");
          while (suggestions.firstChild) {
            suggestions.removeChild(suggestions.lastChild);
          }
        }
        if (isNumeric(local) && menu[index].id.match(/Youtube/g)) {
          var sticky = [];
          sticky.push({
            title: menu[index].id.match(/([^\/]+)$/g),
            element: pub[local].element,
            image: menu[index].img.image(),
            share: pub[local].share,
            dst: pub[local].dst,
            src: pub[local].src,
            re: pub[local].re,
            views: views,
            id: index,
          });
          guideDisplayYoutube(sticky);
        } else if (isNumeric(local)) {
          var sticky = [];
          sticky.push({
            courtesy: pub[local].courtesy,
            element: pub[local].element,
            image: menu[index].img.image(),
            title: pub[local].title,
            share: pub[local].share,
            dst: pub[local].dst,
            src: pub[local].src,
            re: pub[local].re,
            id: index,
          });
          guideDisplay(sticky);
        }
        for (i = 0; i < pub.length; i++) {
          document.querySelector(".channel").innerHTML =
            document.querySelector(".channel").innerHTML + pub[i].post;
          if (
            menu[index].id.match(/Imgur/g) &&
            !menu[index].id.match(/Youtube/g)
          )
            xmlImageAttributes(true, index, pub[i].element, pub[i].src);
          else xmlImageAttributes(false, index, pub[i].element, pub[i].src);
        }
        let oldest = pub[pub.length - 1].dst;
        let posts = pub.length - 1;
        let recent = pub[0].dst;
        if (reader == false)
          document.querySelector(".channel").innerHTML =
            document.querySelector(".channel").innerHTML + footerBuild();
        contentStatusDisplay(index, recent, oldest, posts);
        topMenuBarDisplay(topBar);
        clearInterval(complete);
        xmlStatusSuggestions();
        document.querySelector("#main").setAttribute("tabindex", -1);
        document.querySelector("#main").focus();
        unloading();
      } else {
        let center;
        center.innerHTML = stageBuild();
        document.querySelector("#main").innerHTML =
          document.querySelector("#main").innerHTML + center;
        let channel = document.querySelector(".channel");
        channel.append("This site could not be reached.");
        unloading();
        visual();
      }
    }
  };
  httpRequest.open("GET", uri);
  httpRequest.setRequestHeader("Content-Type", "text/html; charset=utf-8");
  httpRequest.setRequestHeader("Accept", "text/html; charset=utf-8");
  httpRequest.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  httpRequest.send();
};
