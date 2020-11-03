var Gruvbox = function() {

  document.documentElement.style.setProperty(
    "--box-shadow",
    "8px 8px 16px rgba(169, 121, 62, .2)"
  );
  document.documentElement.style.setProperty(
    "--loader-color-primary",
    "rgba(169, 121, 62, 1)"
  );
  document.documentElement.style.setProperty(
    "--loader-color-secondary",
    "rgba(169, 121, 62, 1)"
  );
  document.documentElement.style.setProperty(
    "--fill-color-primary",
    "#aaaaaa"
  );
  document.documentElement.style.setProperty(
    "--fill-color-secondary",
    "rgba(169, 121, 62, 1)"
  );
  document.documentElement.style.setProperty(
    "--bg-color-primary",
    "rgba(38, 38, 38, .4)"
  );
  document.documentElement.style.setProperty(
    "--bg-color-secondary",
    "#262626"
  );
  document.documentElement.style.setProperty(
    "--hover-background-color",
    "rgba(169, 121, 62, .15)"
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
    "rgba(169, 121, 62, .5)"
  );
  document.documentElement.style.setProperty(
    "--progress-background",
    "rgba(169, 121, 62, .1)"
  );
  document.documentElement.style.setProperty(
    "--sticky-background",
    "rgba(169, 121, 62, .4)"
  );
  document.documentElement.style.setProperty(
    "--hue-rotate",
    "hue-rotate(160deg)"
  );
  document
    .querySelectorAll("input")
    .forEach((a) => (a.style.color = "var(--fill-color-primary)"));
  document.querySelectorAll("#container, #sidebar, #visit")
    .forEach(
      (a) => (a.style.backgroundColor = "var(--bg-color-secondary)"))
  document.querySelectorAll("#content")
    .forEach(
      (a) => (a.style.backgroundColor = "var(--progress-background)"))
  document.querySelector('#hide').style.background =
  "var(--progress-background)"

}
