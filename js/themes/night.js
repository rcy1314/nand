var Night = function() {
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
    "#0f0f0f"
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
}
