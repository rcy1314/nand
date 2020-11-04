var visual = function (toggleOption) {
  if (toggleOption == "op") op = op != true;
  else if (toggleOption == 1 || toggleOption == 0) op = toggleOption;
  if (op == 1) {
    document.documentElement.style.setProperty(
      "--box-shadow",
      "8px 8px 16px #060606"
    );
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
      "--fill-color-secondary",
      "#f54e75"
    );
    document.documentElement.style.setProperty("--bg-color-primary", "#0f0f0f");
    document.documentElement.style.setProperty(
      "--bg-color-secondary",
      "#262626"
    );
    document.documentElement.style.setProperty(
      "--hover-background-color",
      "rgba(10, 10, 10, .4)"
    );
    document.documentElement.style.setProperty(
      "--not-hover-border-color",
      ".3px solid #0f0f0f"
    );
    document.documentElement.style.setProperty(
      "--hover-border-color",
      ".3px solid #0a0a0a"
    );
    document.documentElement.style.setProperty(
      "--borderless-hover-color",
      "rgb(31,31,31,.4)"
    );
    document.documentElement.style.setProperty(
      "--progress-background",
      "#f7426C"
    );
    document.documentElement.style.setProperty(
      "--sticky-background",
      "rgba(0,0,0,.4)"
    );
    document.documentElement.style.setProperty(
      "--hue-rotate",
      "hue-rotate(110deg)"
    );
    if (document.body.contains(document.querySelector("#feed")))
      document.querySelector("#feed").style.backgroundColor =
        "var(--bg-color-primary)";
    document
      .querySelector("#match .listing")
      .classList.add("oppositeScrollbar");
    document
      .querySelector("#first .listing")
      .classList.add("oppositeScrollbar");
    document
      .querySelector("#sidebar #content")
      .classList.add("oppositeScrollbar");
    document
      .querySelector("#favicon")
      .setAttribute("href", "images/Opposite.ico");
    document.querySelectorAll("#visit, #container, #sidebar, #hide")
      .forEach(
        (a) => (a.style.backgroundColor = "var(--bg-color-primary)"))
    document.querySelectorAll("#content")
      .forEach(
        (a) => (a.style.backgroundColor = "var(--hover-background-color)"))
    document.querySelector('#main .check').style.filter = 'saturate(3)'
  } else if (op == 0) {
    document.documentElement.style.setProperty(
      "--box-shadow",
      "8px 8px 16px #eeeeee"
    );
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
      "--fill-color-secondary",
      "rgb(212,212,212,.9)"
    );
    document.documentElement.style.setProperty(
      "--bg-color-primary",
      "rgb(255,255,255,.3)"
    );
    document.documentElement.style.setProperty(
      "--bg-color-secondary",
      "#f7f7f7"
    );
    document.documentElement.style.setProperty(
      "--hover-background-color",
      "rgba(246, 248, 250, .3)"
    );
    document.documentElement.style.setProperty(
      "--not-hover-border-color",
      ".3px solid transparent"
    );
    document.documentElement.style.setProperty(
      "--hover-border-color",
      ".3px solid #dddddd"
    );
    document.documentElement.style.setProperty(
      "--borderless-hover-color",
      "rgb(212,212,212,.5)"
    );
    document.documentElement.style.setProperty(
      "--progress-background",
      "rgba(238, 238, 238, .4)"
    );
    document.documentElement.style.setProperty(
      "--sticky-background",
      "rgba(255,255,255,.4)"
    );
    document.documentElement.style.setProperty(
      "--hue-rotate",
      "hue-rotate(0deg)"
    );
    document.querySelector("#favicon").setAttribute("href", "favicon.ico");
    document.querySelectorAll("#container, #sidebar, #visit")
      .forEach(
        (a) => (a.style.backgroundColor = "var(--bg-color-secondary)"))
    document.querySelectorAll("#content")
      .forEach(
        (a) => (a.style.backgroundColor = "var(--progress-background)"))
    document.querySelector('#main .check').style.filter = 'saturate(1)'
  }
};
