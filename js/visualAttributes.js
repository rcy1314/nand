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
      "--bg-color-primary",
      "#0f0f0f"
    );
    document.documentElement.style.setProperty(
      "--bg-color-secondary",
      "#262626"
    );
    document.documentElement.style.setProperty(
      "--hover-background-color",
      "#0a0a0a"
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
      "#1f1f1f"
    );
    document.documentElement.style.setProperty(
      "--progress-background",
      "#f7426C"
    );
    document.documentElement.style.setProperty(
      "--sticky-background",
      "rgba(0,0,0,.2)"
    );
    document.documentElement.style.setProperty(
      "--hue-rotate",
      "hue-rotate(110deg)"
    );
    document.querySelectorAll("input")
      .forEach((a) => a.style.color = 'var(--fill-color-primary)');
    if (document.body.contains(document.querySelector("#group .populate"))) {
        document.querySelectorAll("#group .populate")
        .forEach((a) => a.style.backgroundColor = 'var(--bg-color-primary)');
      document.querySelector('#group')
        .style.backgroundColor = 'var(--bg-color-primary)'
    }
    if (document.body.contains(document.querySelector("#feed")))
    document.querySelector('#feed').style.backgroundColor =
      'var(--bg-color-primary)'
    document.querySelector("#match .listing").classList.add("oppositeScrollbar");
    document.querySelector("#first .listing").classList.add("oppositeScrollbar");
    document.querySelector("#sidebar #content")
      .classList.add("oppositeScrollbar");
    document.querySelector("#favicon")
      .setAttribute("href", "images/Opposite.ico");
    document.querySelector('#visit')
      .style.backgroundImage = 'url(images/MIT.webp)'
    document.querySelector('#visit')
      .style.backgroundColor = 'var(--bg-color-primary)'
    document.querySelector('#container')
      .style.backgroundColor = 'var(--bg-color-primary)'
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
      "--bg-color-primary",
      "#ffffff"
    );
    document.documentElement.style.setProperty(
      "--bg-color-secondary",
      "#f7f7f7"
    );
    document.documentElement.style.setProperty(
      "--hover-background-color",
      "#f6f8fa"
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
      "#f2f2f2"
    );
    document.documentElement.style.setProperty(
      "--progress-background",
      "#eeeeee"
    );
    document.documentElement.style.setProperty(
      "--sticky-background",
      "rgba(255,255,255,.2)"
    );
    document.documentElement.style.setProperty(
      "--hue-rotate",
      "hue-rotate(0deg)"
    );
    document.querySelectorAll("input")
      .forEach((a) => a.style.color = 'var(--fill-color-primary)');
    if (document.body.contains(document.querySelector("#group .populate"))) {
    if (groupType == "blocks")
      document
        .querySelectorAll(".populate")
        .forEach((a) => a.style.backgroundColor = 'var(--bg-color-secondary)');
    else if (groupType == "list")
      document
        .querySelectorAll(".populate")
        .forEach((a) => a.style.backgroundColor = 'var(--bg-color-primary)');
    document.querySelector('#group')
      .style.backgroundColor = 'var(--bg-color-secondary)'
    }
    if (document.body.contains(document.querySelector("#feed")))
    document.querySelector('#feed').style.backgroundColor =
      'var(--bg-color-secondary)'
    document.querySelector("#match .listing").classList.add("invertScrollbar");
    document.querySelector("#first .listing").classList.add("invertScrollbar");
    document
      .querySelector("#sidebar #content").classList.add("invertScrollbar");
    document.querySelector("#favicon").setAttribute("href", "favicon.ico");
    document.querySelector('#visit').style.backgroundImage = 'url(MIT.webp)'
    document.querySelector('#visit')
      .style.backgroundColor = 'var(--bg-color-secondary)'
    document.querySelector('#container')
      .style.backgroundColor = 'var(--bg-color-secondary)'
  }
};
