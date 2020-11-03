var Eggplant = function() {

  document.documentElement.style.setProperty(
    "--box-shadow",
    "8px 8px 16px rgba(113, 99, 232, .2)"
  );
  document.documentElement.style.setProperty(
    "--loader-color-primary",
    "rgba(113, 99, 232, .4)"
  );
  document.documentElement.style.setProperty(
    "--loader-color-secondary",
    "rgba(113, 99, 232, .2)"
  );
  document.documentElement.style.setProperty(
    "--fill-color-primary",
    "#555555"
  );
  document.documentElement.style.setProperty("--bg-color-primary", "#ffffff");
  document.documentElement.style.setProperty(
    "--bg-color-secondary",
    "#ffffff"
  );
  document.documentElement.style.setProperty(
    "--hover-background-color",
    "rgba(113, 99, 232, .05)"
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
    "rgba(113, 99, 232, .1)"
  );
  document.documentElement.style.setProperty(
    "--sticky-background",
    "rgba(255,255,255,.4)"
  );
  document.documentElement.style.setProperty(
    "--hue-rotate",
    "hue-rotate(45deg)"
  );
  document
    .querySelectorAll("input")
    .forEach((a) => (a.style.color = "var(--fill-color-primary)"));
  if (document.body.contains(document.querySelector("#group .populate"))) {
    if (groupType == "blocks")
      document
        .querySelectorAll(".populate")
        .forEach(
          (a) => (a.style.backgroundColor = "var(--bg-color-secondary)")
        );
    else if (groupType == "list")
      document
        .querySelectorAll(".populate")
        .forEach(
          (a) => (a.style.backgroundColor = "var(--bg-color-primary)")
        );
    document.querySelector("#group").style.backgroundColor =
      "var(--bg-color-secondary)";
  }
  if (document.body.contains(document.querySelector("#feed")))
    document.querySelector("#feed").style.backgroundColor =
      "var(--bg-color-secondary)";
  document.querySelector("#match .listing").classList.add("invertScrollbar");
  document.querySelector("#first .listing").classList.add("invertScrollbar");
  document
    .querySelector("#sidebar #content")
    .classList.add("invertScrollbar");
  document.querySelector("#favicon").setAttribute("href", "favicon.ico");
  document.querySelectorAll("#container, #visit")
    .forEach(
      (a) => (a.style.backgroundColor = "var(--bg-color-secondary)"))
  document.querySelectorAll("#sidebar")
    .forEach(
      (a) => (a.style.backgroundColor = "var(--progress-background)"))
  document.querySelector('#hide').style.background =
  "-webkit-linear-gradient(left, rgba(0,0,0,0) 90%, var(--progress-background) 100%)"
  document.querySelector('#main .check').style.filter = 'saturate(1)'

}
