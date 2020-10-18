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
          "visual",
          "visual.hover",
          "invert",
          "invertAlt",
          "invertOver",
          "invertScrollbar",
          "invertOverBorderless"
        )
      );
    document.querySelector(".view").style.color = "#f7f7f7";
    document.querySelector(".guest").style.color = "#f7f7f7";
    document.querySelector(".sideFilter").style.color = "#f7f7f7";
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
          .forEach((a) => a.style.boxShadow = 'non');
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
      document
        .querySelectorAll(".listing .index")
        .forEach((a) => a.classList.add("oppositeOverBorderless"));
    }
    if (document.body.contains(document.querySelector(".listing .hue")))
      document
        .querySelectorAll(".listing .hue")
        .forEach((a) => (a.style.filter = "hue-rotate(110deg)"));
    if (document.body.contains(document.querySelector("#group .populate"))) {
      document
        .querySelectorAll("#group .result")
        .forEach((a) => a.classList.add("opposite"));
      document
        .querySelectorAll("#group .populate")
        .forEach((a) => a.classList.add("oppositeOver"));
    }
    if (document.body.contains(document.querySelector("#group .air")))
      document.querySelector("#group .air").classList.add("opposite");
    document.querySelector("#container #guide").classList.add("oppositeAlt");
    if (document.body.contains(document.querySelector("#guide .sticky"))) {
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
    }
    if (document.body.contains(document.querySelector("#sidebar .selected")))
      document.querySelector("#category .selected").style.backgroundColor =
        "#0e0e0e";
    document
      .querySelector("#sidebar #content")
      .classList.add("oppositeScrollbar");
    document.querySelector("#match .listing").classList.add("oppositeScrollbar");
    document.querySelector("#match .listing").classList.add("opposite");
    document.querySelector("#first .listing").classList.add("oppositeScrollbar");
    document.querySelector("#first .listing").classList.add("opposite");
    document
      .querySelector("#favicon")
      .setAttribute("href", "images/Opposite.ico");
    document.documentElement.style.setProperty(
      "--fill-color-primary",
      "#ffffff"
    );
    document.querySelector("#hide").style.backgroundColor = "#070707";
    document.querySelector("#sidebar").style.backgroundColor = "#070707";
  } else if (op == 0) {
    document
      .querySelectorAll("div")
      .forEach((a) =>
        a.classList.remove(
          "buttonOpposite",
          "contrast",
          "contrast.hover",
          "opposite",
          "oppositeAlt",
          "oppositeOver",
          "oppositeScrollbar",
          "oppositeOverBorderless"
        )
      );
    document.querySelector(".view").classList.remove("oppositeOverBorderless");
    document.querySelector(".view").style.color = "#444444";
    document.querySelector(".focus .guest").style.color = "#444444";
    document.querySelector(".focus .guest").classList.add("invert");
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
      document.querySelector("#group .result").classList.add("invertAlt");
    }
    if (document.body.contains(document.querySelector("#group .air")))
      document.querySelector("#group .air").classList.add("invertAlt");
    document.querySelector(".quick .right").classList.add("invertAlt");
    document.querySelector(".quick .left").classList.add("invertAlt");
    document.querySelector("#container").classList.add("invertAlt");
    document.querySelector("#container #main").classList.add("invertAlt");
    document.querySelector("#container #visit").classList.add("invertAlt");
    document.querySelector(".quick .feed").classList.add("invertAlt");
    document.documentElement.style.setProperty(
      "--loader-color-primary",
      "#5BAFF0"
    );
    document.documentElement.style.setProperty(
      "--loader-color-secondary",
      "#0078D4"
    );
    document
      .querySelector("#label .link")
      .classList.add("invertOverBorderless");
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
    if (
      document.body.contains(
        document.querySelector(".quick .feed .asset")
      )
    )
      document
        .querySelectorAll(".feed .asset")
        .forEach((a) => a.classList.add("invertOverBorderless"));
    if (document.body.contains(document.querySelector("#sidebar .cat"))) {
      document
        .querySelectorAll("#sidebar .cat")
        .forEach((a) => a.classList.add("invertOverBorderless"));
      document
        .querySelectorAll("#sidebar .cat")
        .forEach((a) => (a.style.backgroundColor = "#eeeeee"));
      document
        .querySelectorAll("#sidebar .cat")
        .forEach((a) => (a.style.filter = "hue-rotate(0deg)"));
    }
    if (document.body.contains(document.querySelector(".listing .index"))) {
      if (document.body.contains(document.querySelector(".listing .buffer")))
        document
          .querySelectorAll(".listing .buffer")
          .forEach((a) => (a.style.color = "steelblue"));
      document
        .querySelectorAll(".listing .index")
        .forEach((a) => a.classList.add("invert"));
      document
        .querySelectorAll(".listing .index")
        .forEach((a) => a.classList.add("invertOverBorderless"));
    }
    if (document.body.contains(document.querySelector(".listing .hue")))
      document
        .querySelectorAll(".listing .hue")
        .forEach((a) => (a.style.filter = "hue-rotate(0deg)"));
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
    document.querySelector("#match .listing").classList.add("invertScrollbar");
    document.querySelector("#first .listing").classList.add("invertScrollbar");
    document.querySelector(".focus .button").classList.add("buttonInvert");
    document.querySelector("#front .focus").classList.add("pageInput");
    document.documentElement.style.setProperty(
      "--fill-color-primary",
      "#555555"
    );
    document.querySelector("#favicon").setAttribute("href", "favicon.ico");
    if (document.body.contains(document.querySelector("#guide .sticky"))) {
      document.querySelector(".sticky .wrap").classList.add("invert");
      document.querySelector("#guide .blur").classList.add("blurDay");
    }
    document.querySelector("#hide").style.backgroundColor = "#eeeeee";
    document.querySelector("#sidebar").style.backgroundColor = "#eeeeee";
    if (document.body.contains(document.querySelector("#sidebar .selected")))
      document.querySelector("#category .selected").style.backgroundColor =
        "#f7f7f7";
  }
};
