var visual = function (toggleOption) {
  if (toggleOption == "op") op = op != true;
  else if (toggleOption == 1 || toggleOption == 0) op = toggleOption;
  if (op == 1) {
    document
      .querySelectorAll("div")
      .forEach((a) =>
        a.classList.remove(
          "blurDay",
          "pageInput",
          "indexInvert",
          "indexInvertOver",
          "invert",
          "invertAlt",
          "invertOver",
          "invertScrollbar",
          "invertOverBorderless",
          "indexOppositeOverBorderless",
          "responseInvert"
        )
      );
    document.querySelector("#progressBar").classList.add('responseOpposite');
    document.querySelector("#container").classList.add("opposite");
    document.querySelectorAll("input")
      .forEach((a) => a.style.color = '#f7f7f7');
    if (document.body.contains(document.querySelector(".status .filter")))
      document.querySelector('.status .filter').classList.add('oppositeOver')
    if (document.body.contains(document.querySelector("#feed"))) {
      document.querySelectorAll("#feed .item .classic")
        .forEach((a) => a.classList.add("oppositeOverBorderless"));
      document.querySelectorAll("#feed .item")
        .forEach((a) => a.classList.add("oppositeOver"));
      document.querySelectorAll("#feed .item")
        .forEach((a) => a.style.boxShadow = '8px 8px 16px #060606');
    }
    if (document.body.contains(document.querySelector(".listing .buffer")))
      document.querySelectorAll(".listing .buffer")
        .forEach((a) => (a.style.color = "#f7426C"));
    if (document.body.contains(document.querySelector(".listing .hover")))
      document.querySelector(".listing .hover").classList.add(
        'indexOppositeOverBorderless'
      )
    if (document.body.contains(document.querySelector(".listing .hue")))
      document.querySelectorAll(".listing .hue")
        .forEach((a) => (a.style.filter = "hue-rotate(110deg)"));
    if (document.body.contains(document.querySelector("#group .populate"))) {
      document.querySelectorAll("#group .populate")
        .forEach((a) => a.classList.add("oppositeOver"));
      if (groupType == "blocks")
        document.querySelectorAll("#group .populate")
          .forEach((a) => a.style.backgroundColor = 'var(--bg-color-primary)');
      else {
        document.querySelector('#group').style.backgroundColor =
          'var(--bg-color-primary)'
        document.querySelectorAll("#group .populate")
        .forEach((a) => a.style.backgroundColor = 'var(--bg-color-secondary)');
      }
    }
    document.querySelector("#first").style.border = ".3px solid #2f2f2f";
    if (
      document.body.contains(document.querySelector("#match .listing .index"))
    )
      document.querySelector("#match").style.border = ".3px solid #0e0e0e";
    if (document.body.contains(document.querySelector("#guide .sticky")))
      document.querySelector("#guide .blur").classList.add("blurNight");
    document.querySelector(".quick .right")
      .classList.add("oppositeOverBorderless");
    document.documentElement.style.setProperty(
      "--loader-color-primary",
      "#f7426C"
    );
    document.documentElement.style.setProperty(
      "--loader-color-secondary",
      "#f54e75"
    );
    document.documentElement.style.setProperty(
      "--fill-color-primary",
      "#ffffff"
    );
    document.documentElement.style.setProperty(
      "--bg-color-primary",
      "#0f0f0f"
    );
    document.documentElement.style.setProperty(
      "--bg-color-secondary",
      "#262626"
    );
    if (
      document.body.contains(document.querySelector(".quick .feed .translation"))
    ) {
      document.querySelectorAll(".feed .translation")
        .forEach((a) => a.classList.add("oppositeOver"));
      document.querySelectorAll(".feed .translation")
        .forEach((a) => (a.style.filter = "hue-rotate(110deg)"));
    }
    document.querySelector("#label .link")
      .classList.add("oppositeOverBorderless");
    if (document.body.contains(document.querySelector(".quick .feed .asset")))
      document.querySelectorAll("#main .asset")
        .forEach((a) => a.classList.add("oppositeOverBorderless"));
    document.querySelector(".quick .left")
      .classList.add("oppositeOverBorderless");
    document.querySelector(".view").classList.add("oppositeOverBorderless");
    if (
      document.body.contains(document.querySelector("#sidebar #category .webp"))
    )
    document.querySelectorAll("#sidebar #category .webp")
      .forEach((a) => (a.style.filter = "hue-rotate(110deg)"));
      document.querySelector("#hide").style.background =
        "-webkit-linear-gradient(left, var(--bg-color-primary) 70%, #262626 100%)";
    document.querySelector("#sidebar #content")
      .classList.add("oppositeScrollbar");
    document.querySelector("#match .listing")
      .classList.add("oppositeScrollbar");
    document.querySelector("#first .listing")
      .classList.add("oppositeScrollbar");
    document.querySelector("#favicon")
      .setAttribute("href", "images/Opposite.ico");
    document.querySelector("#sidebar").style.backgroundColor =
      "var(--bg-color-primary)";
    document.querySelector('#visit')
      .style.backgroundImage = 'url(images/MIT.webp)'
  } else if (op == 0) {
    document
      .querySelectorAll("div")
      .forEach((a) =>
        a.classList.remove(
          "blurNight",
          "indexOpposite",
          "indexInvertOverBorderless",
          "opposite",
          "oppositeAlt",
          "oppositeOver",
          "oppositeScrollbar",
          "oppositeOverBorderless",
          "responseOpposite"
        )
      );
    document.querySelector("#progressBar").classList.add('responseInvert');
    document.querySelectorAll("input")
      .forEach((a) => a.style.color = '#444444');
      document.querySelector("#label .link")
        .classList.add("invertOverBorderless");
    document.querySelector(".view").classList.add("invertOverBorderless");
    document.querySelector(".focus").classList.add("pageInput");
    if (document.body.contains(document.querySelector("#group .populate"))) {
      document.querySelectorAll("#group .populate")
        .forEach((a) => a.classList.add("invertOver"));
      if (groupType == "blocks")
        document.querySelectorAll("#group .populate")
          .forEach((a) => a.style.backgroundColor = 'var(--bg-color-secondary)');
      else {
        document.querySelector('#group').style.backgroundColor =
          'var(--bg-color-secondary)'
        document.querySelectorAll("#group .populate")
        .forEach((a) => a.style.backgroundColor = 'var(--bg-color-primary)');
      }
    }
    document.querySelector(".quick .right")
      .classList.add("invertOverBorderless");
    document.querySelector(".quick .left")
      .classList.add("invertOverBorderless");
    document.querySelector("#first").style.border = ".3px solid #dddddd";
    document.querySelector("#match").style.border = ".3px solid #dddddd";
    document.documentElement.style.setProperty(
      "--loader-color-primary",
      "#0078D4"
    );
    document.documentElement.style.setProperty(
      "--loader-color-secondary",
      "#1683D8"
    );
    document.documentElement.style.setProperty(
      "--fill-color-primary",
      "#555555"
    );
    document.documentElement.style.setProperty(
      "--bg-color-primary",
      "#ffffff"
    );
    document.documentElement.style.setProperty(
      "--bg-color-secondary",
      "#f7f7f7"
    );
    if (
      document.body.contains(document.querySelector(".quick .feed .translation"))
    )
      document.querySelectorAll(".feed .translation")
        .forEach((a) => (a.style.filter = "hue-rotate(0deg)"));
    if (document.body.contains(document.querySelector(".quick .feed .asset")))
      document.querySelectorAll(".feed .asset")
        .forEach((a) => a.classList.add("invertOverBorderless"));
    if (
      document.body.contains(document.querySelector("#sidebar #category .webp"))
    )
      document.querySelectorAll("#sidebar #category .webp")
        .forEach((a) => (a.style.filter = "hue-rotate(0deg)"));
    document.querySelector("#hide").style.background =
      "-webkit-linear-gradient(left, var(--bg-color-secondary) 70%, #eaeaea 100%)";
    if (document.body.contains(document.querySelector(".listing .buffer")))
    document.querySelectorAll(".listing .buffer")
      .forEach((a) => (a.style.color = "steelblue"));
    if (document.body.contains(document.querySelector(".listing .hover")))
      document.querySelector(".listing .hover")
        .classList.add('indexInvertOverBorderless')
    if (document.body.contains(document.querySelector(".listing .hue")))
      document.querySelectorAll(".listing .hue")
        .forEach((a) => (a.style.filter = "hue-rotate(0deg)"));
    if (document.body.contains(document.querySelector(".status .filter")))
      document.querySelector('.content .status .filter')
        .classList.add('invertOver')
    if (document.body.contains(document.querySelector("#feed .item"))) {
      document.querySelectorAll("#feed .item")
        .forEach((a) => a.classList.add("invertOver"));
      document.querySelectorAll("#feed .item .classic")
        .forEach((a) => a.classList.add("invertOverBorderless"));
      document.querySelectorAll("#feed .item")
        .forEach((a) => a.style.boxShadow = '8px 8px 16px #eeeeee');
    }
    document
      .querySelector("#sidebar #content").classList.add("invertScrollbar");
    if (document.body.contains(document.querySelector("#match .listing")))
    document.querySelector("#match .listing").classList.add("invertScrollbar");
    if (document.body.contains(document.querySelector("#first .listing")))
    document.querySelector("#first .listing").classList.add("invertScrollbar");
    document.querySelector("#favicon").setAttribute("href", "favicon.ico");
    if (document.body.contains(document.querySelector("#guide .sticky")))
      document.querySelector("#guide .blur").classList.add("blurDay");
    document.querySelector("#sidebar").style.backgroundColor =
      "var(--bg-color-secondary)";
    document.querySelector('#visit').style.backgroundImage = 'url(MIT.webp)'
  }
};
