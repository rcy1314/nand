var visual = function (opDefine) {
  if (opDefine == "op") op = op != true;
  else if (opDefine == 1 || opDefine == 0) op = opDefine;
  if (op == 1) {
    document
      .querySelectorAll("div")
      .forEach((a) =>
        a.classList.remove(
          "blurDay",
          "pageInput",
          "buttonInvert",
          "indexOppositeOver",
          "indexInvert",
          "indexInvertOver",
          "invert",
          "invertAlt",
          "invertOver",
          "invertScrollbar",
          "invertOverBorderless"
        )
      );
    document.querySelector("#progressBar").classList.add('responseOpposite');
    document.querySelector("#progressBar").classList.remove('responseInvert');
    document.querySelector(".view").style.color = "#f7f7f7";
    document.querySelector(".guest").style.color = "#f7f7f7";
    document.querySelector(".sideFilter").style.color = "#f7f7f7";
    if (document.body.contains(document.querySelector(".status .filter")))
      document.querySelector('.status .filter').classList.add('oppositeOver')
    if (document.body.contains(document.querySelector("#feed"))) {
      document
        .querySelectorAll(".attribute")
        .forEach((a) => a.classList.add("opposite"));
      document
        .querySelectorAll(".attribute div")
        .forEach((a) => a.classList.add("opposite"));
      document
        .querySelectorAll(".attribute div")
        .forEach((a) => a.classList.add("oppositeOver"));
      document
        .querySelectorAll("#feed .item .classic")
        .forEach((a) => a.classList.add("oppositeOverBorderless"));
      document
        .querySelectorAll("#feed .item")
        .forEach((a) => a.classList.add("oppositeOver"));
      document
        .querySelectorAll("#feed .item")
        .forEach((a) => (a.style.boxShadow = "none"));
      document
        .querySelectorAll(".combine a")
        .forEach((a) => (a.style.color = "#f7426C"));
    }
    document.querySelector("#container").classList.add("opposite");
    document.querySelector("#container #main").classList.add("opposite");
    document.querySelector(".quick .feed").classList.add("opposite");
    if (document.body.contains(document.querySelector(".listing .index"))) {
      document
        .querySelectorAll(".listing .buffer")
        .forEach((a) => (a.style.color = "#f7426C"));
      document
        .querySelectorAll(".listing .index")
        .forEach((a) => a.classList.add("opposite"));
    }
    if (document.body.contains(document.querySelector(".listing .hue")))
      document
        .querySelectorAll(".listing .hue")
        .forEach((a) => (a.style.filter = "hue-rotate(110deg)"));
    if (document.body.contains(document.querySelector("#group .populate"))) {
      document
        .querySelectorAll("#group .populate")
        .forEach((a) => a.classList.add("oppositeOver"));
    }
    document.querySelector("#container #guide").classList.add("oppositeAlt");
    if (
      document.body.contains(document.querySelector("#first .listing .index"))
    ) {
      document.querySelector("#first").style.border = ".3px solid #0e0e0e";
      document.querySelector("#first").style.boxShadow = "none";
    }
    if (
      document.body.contains(document.querySelector("#match .listing .index"))
    ) {
      document.querySelector("#match").style.border = ".3px solid #0e0e0e";
      document.querySelector("#match").style.boxShadow = "none";
    }
    if (document.body.contains(document.querySelector("#guide .sticky"))) {
      document.querySelector(".sticky .header").classList.add("oppositeAlt");
      document.querySelector(".sticky .wrap").classList.add("oppositeAlt");
      document.querySelector("#guide .blur").classList.add("blurNight");
    }
    document.querySelector(".focus .guest").classList.remove("invertAlt");
    document.querySelector(".focus .guest").classList.remove("invert");
    document.querySelector(".focus .guest").classList.add("oppositeAlt");
    document.querySelector(".quick .right").classList.add("oppositeAlt");
    document.querySelector(".quick .left").classList.add("oppositeAlt");
    document.documentElement.style.setProperty(
      "--loader-color-primary",
      "#f7426C"
    );
    document.documentElement.style.setProperty(
      "--loader-color-secondary",
      "#e86D8A"
    );
    if (
      document.body.contains(
        document.querySelector(".quick .feed .translation")
      )
    ) {
      document
        .querySelectorAll(".feed .translation")
        .forEach((a) => a.classList.add("oppositeOverBorderless"));
      document
        .querySelectorAll(".feed .translation")
        .forEach((a) => (a.style.filter = "hue-rotate(110deg)"));
    }
    if (document.body.contains(document.querySelector(".listing .hover"))) {
      document
        .querySelectorAll(".listing .hover")
        .forEach((a) => a.classList.add("indexOppositeOver"));
      document
        .querySelectorAll(".listing .hover")
        .forEach((a) => a.classList.add("indexOpposite"));
    }
    if (document.body.contains(document.querySelector(".quick .feed .asset")))
      document
        .querySelectorAll("#main .asset")
        .forEach((a) => a.classList.add("oppositeOverBorderless"));
    document
      .querySelector("#label .link")
      .classList.add("oppositeOverBorderless");
    document
      .querySelector(".quick .right")
      .classList.add("oppositeOverBorderless");
    document
      .querySelector(".quick .left")
      .classList.add("oppositeOverBorderless");
    document.querySelector(".view").classList.add("oppositeOverBorderless");
    document.querySelector(".focus .button").classList.add("buttonOpposite");
    if (document.body.contains(document.querySelector("#sidebar .cat"))) {
      document
        .querySelectorAll("#sidebar .cat")
        .forEach((a) => a.classList.add("oppositeOverBorderless"));
      document
        .querySelectorAll("#sidebar .cat")
        .forEach((a) => (a.style.backgroundColor = "#000000"));
      document
        .querySelectorAll("#sidebar .cat")
        .forEach((a) => (a.style.filter = "hue-rotate(110deg)"));
      document
        .querySelectorAll("#sidebar .sel")
        .forEach((a) => a.style.backgroundColor = '#070707');
    }
    document.querySelector(".sideFilter").style.backgroundColor = "#171717";
    document.querySelector("#hide").style.backgroundColor = "#171717";
    if (document.body.contains(document.querySelector("#sidebar .selected")))
      document.querySelector("#category .selected").style.backgroundColor =
        "#0a0a0a";
    document
      .querySelector("#sidebar #content")
      .classList.add("oppositeScrollbar");
    document
      .querySelector("#match .listing")
      .classList.add("oppositeScrollbar");
    document.querySelector("#match .listing").classList.add("opposite");
    document
      .querySelector("#first .listing")
      .classList.add("oppositeScrollbar");
    document.querySelector("#first .listing").classList.add("opposite");
    document
      .querySelector("#favicon")
      .setAttribute("href", "images/Opposite.ico");
    document.documentElement.style.setProperty(
      "--fill-color-primary",
      "#ffffff"
    );
    document.querySelector("#sidebar").style.backgroundColor = "#070707";
  } else if (op == 0) {
    document
      .querySelectorAll("div")
      .forEach((a) =>
        a.classList.remove(
          "buttonOpposite",
          "indexInvertOver",
          "indexOpposite",
          "indexOppositeOver",
          "opposite",
          "oppositeAlt",
          "oppositeOver",
          "oppositeScrollbar",
          "oppositeOverBorderless"
        )
      );
    document.querySelector("#progressBar").classList.add('responseInvert');
    document.querySelector("#progressBar").classList.remove('responseOpposite');
    document.querySelector(".view").classList.remove("oppositeOverBorderless");
    document.querySelector(".view").style.color = "#444444";
    if (document.body.contains(document.querySelector(".focus .guest"))){
      document
        .querySelector("#label .link")
        .classList.add("invertOverBorderless");
      document.querySelector(".focus .guest").style.color = "#444444";
      document.querySelector(".focus .guest").classList.add("invert");
      document.querySelector(".focus .button").classList.add("buttonInvert");
      document.querySelector("#front .focus").classList.add("pageInput");
    }
    document.querySelector(".sideFilter").classList.remove("invert");
    document.querySelector(".sideFilter").style.color = "#444444";
    if (document.body.contains(document.querySelector("#group .populate"))) {
      document
        .querySelectorAll("#group .populate")
        .forEach((a) => a.classList.add("invertOver"));
      if (groupType == "blocks")
        document
          .querySelectorAll("#group .populate")
          .forEach((a) => a.classList.add("invertAlt"));
      else
        document
          .querySelectorAll("#group .populate")
          .forEach((a) => a.classList.add("invert"));
    }
    document.querySelector(".quick .right").classList.add("invertAlt");
    document.querySelector(".quick .left").classList.add("invertAlt");
    document.querySelector("#container").classList.add("invertAlt");
    document.querySelector("#container #main").classList.add("invertAlt");
    document.querySelector("#container #visit").classList.add("invertAlt");
    document.querySelector(".quick .feed").classList.add("invertAlt");
    if (
      document.body.contains(document.querySelector("#first .listing .index"))
    ) {
      document.querySelector("#first").style.border = ".3px solid #dddddd";
      document.querySelector("#first").style.boxShadow = "none";
    }
    if (
      document.body.contains(document.querySelector("#match .listing .index"))
    ) {
      document.querySelector("#match").style.border = ".3px solid #dddddd";
      document.querySelector("#match").style.boxShadow = "none";
    }
    document.documentElement.style.setProperty(
      "--loader-color-primary",
      "#5BAFF0"
    );
    document.documentElement.style.setProperty(
      "--loader-color-secondary",
      "#0078D4"
    );
    document
      .querySelector(".quick .right")
      .classList.add("invertOverBorderless");
    document
      .querySelector(".quick .left")
      .classList.add("invertOverBorderless");
    document.querySelector(".view").classList.add("invertOverBorderless");
    document
      .querySelectorAll(".feed .translation")
      .forEach((a) => a.classList.add("invertAlt"));
    document
      .querySelectorAll(".feed .translation")
      .forEach((a) => (a.style.filter = "hue-rotate(0deg)"));
    document
      .querySelectorAll(".feed .translation")
      .forEach((a) => a.classList.add("invertOverBorderless"));
    if (document.body.contains(document.querySelector(".quick .feed .asset")))
      document
        .querySelectorAll(".feed .asset")
        .forEach((a) => a.classList.add("invertOverBorderless"));
    if (document.body.contains(document.querySelector("#sidebar .cat"))) {
      document
        .querySelectorAll("#sidebar .cat")
        .forEach((a) => a.classList.add("invertOverBorderless"));
      document
        .querySelectorAll("#sidebar .cat")
        .forEach((a) => (a.style.filter = "hue-rotate(0deg)"));
      document
        .querySelectorAll("#sidebar .cat")
        .forEach((a) => (a.style.backgroundColor = "#eeeeee"));
      document
        .querySelectorAll("#sidebar .sel")
        .forEach((a) => a.style.backgroundColor = '#eeeeee');
    }
    document.querySelector(".sideFilter").style.backgroundColor = "#ffffff";
    document.querySelector("#hide").style.backgroundColor = "#eaeaea";
    if (document.body.contains(document.querySelector(".listing .hover"))) {
      document
        .querySelectorAll(".listing .hover")
        .forEach((a) => a.classList.add("indexInvertOver"));
      document
        .querySelectorAll(".listing .hover")
        .forEach((a) => a.classList.add("indexInvert"));
    }
    if (document.body.contains(document.querySelector(".listing .index"))) {
      if (document.body.contains(document.querySelector(".listing .buffer")))
        document
          .querySelectorAll(".listing .buffer")
          .forEach((a) => (a.style.color = "steelblue"));
      document
        .querySelectorAll(".listing .index")
        .forEach((a) => a.classList.add("invert"));
    }
    if (document.body.contains(document.querySelector(".listing .hue")))
      document
        .querySelectorAll(".listing .hue")
        .forEach((a) => (a.style.filter = "hue-rotate(0deg)"));
    if (document.body.contains(document.querySelector(".status .filter"))) {
      document.querySelector('.content .status .filter').classList.add('invertAlt')
      document.querySelector('.content .status .filter').classList.add('invertOver')
    }
    if (document.body.contains(document.querySelector("#feed .item"))) {
      document
        .querySelectorAll(".attribute")
        .forEach((a) => a.classList.add("invert"));
      document
        .querySelectorAll(".attribute div")
        .forEach((a) => a.classList.add("invert"));
      document
        .querySelectorAll(".attribute div")
        .forEach((a) => a.classList.add("invertOver"));
      document
        .querySelectorAll("#feed .item")
        .forEach((a) => a.classList.add("invertOver"));
      document
        .querySelectorAll("#feed .item .classic")
        .forEach((a) => a.classList.add("invertOverBorderless"));
      document
        .querySelectorAll(".combine a")
        .forEach((a) => (a.style.color = "steelblue"));
    }
    document
      .querySelector("#sidebar #content")
      .classList.add("invertScrollbar");
    if (document.body.contains(document.querySelector("#match .listing")))
    document.querySelector("#match .listing").classList.add("invertScrollbar");
    if (document.body.contains(document.querySelector("#first .listing")))
    document.querySelector("#first .listing").classList.add("invertScrollbar");
    document.documentElement.style.setProperty(
      "--fill-color-primary",
      "#555555"
    );
    document.querySelector("#favicon").setAttribute("href", "favicon.ico");
    if (document.body.contains(document.querySelector("#guide .sticky"))) {
      document.querySelector("#guide .header").classList.add("invert");
      document.querySelector(".sticky .wrap").classList.add("invert");
      document.querySelector("#guide .blur").classList.add("blurDay");
    }
    document.querySelector("#sidebar").style.backgroundColor = "#eeeeee";
    if (document.body.contains(document.querySelector("#sidebar .selected")))
      document.querySelector("#category .selected").style.backgroundColor =
        "#e7e7e7";
  }
};
