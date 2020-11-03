var Roses = function() {

  document.documentElement.style.setProperty(
    "--box-shadow",
    "8px 8px 16px rgba(151, 41, 59, .2)"
  );
  document.documentElement.style.setProperty(
    "--loader-color-primary",
    "rgba(83, 94, 81, 1)"
  );
  document.documentElement.style.setProperty(
    "--loader-color-secondary",
    "rgba(83, 94, 81, 1)"
  );
  document.documentElement.style.setProperty(
    "--fill-color-primary",
    "#eeeeee"
  );
  document.documentElement.style.setProperty(
    "--fill-color-secondary",
    "rgba(83, 94, 81, 1)"
  );
  document.documentElement.style.setProperty(
    "--bg-color-primary",
    "rgba(83, 94, 81, .3)"
  );
  document.documentElement.style.setProperty(
    "--bg-color-secondary",
    "rgba(13, 29, 40, 1)"
  );
  document.documentElement.style.setProperty(
    "--hover-background-color",
    "rgba(151, 41, 59, .4)"
  );
  document.documentElement.style.setProperty(
    "--not-hover-border-color",
    ".3px solid transparent"
  );
  document.documentElement.style.setProperty(
    "--hover-border-color",
    ".3px solid #eeeeee"
  );
  document.documentElement.style.setProperty(
    "--borderless-hover-color",
    "rgba(151, 41, 59, .5)"
  );
  document.documentElement.style.setProperty(
    "--progress-background",
    "rgba(151, 41, 59, .1)"
  );
  document.documentElement.style.setProperty(
    "--sticky-background",
    "rgba(151, 41, 59, .4)"
  );
  document.documentElement.style.setProperty(
    "--hue-rotate",
    "hue-rotate(110deg)"
  );
  document
    .querySelectorAll("input")
    .forEach((a) => (a.style.color = "var(--fill-color-primary)"));
  document.querySelectorAll("#container,#visit")
    .forEach(
      (a) => (a.style.backgroundColor = "var(--bg-color-secondary)"))
  document.querySelectorAll("#sidebar, #content")
    .forEach(
      (a) => (a.style.backgroundColor = "var(--bg-color-primary)"))
  document.querySelector('#hide').style.background =
  "var(--progress-background)"
  document.querySelector("#match .listing").classList.add("oppositeScrollbar");
  document.querySelector("#first .listing").classList.add("oppositeScrollbar");
  document
    .querySelector("#sidebar #content")
    .classList.add("oppositeScrollbar");

}
