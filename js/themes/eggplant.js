var Eggplant = function() {

  document.documentElement.style.setProperty(
    "--box-shadow",
    "8px 8px 16px rgba(45, 38, 54, .2)"
  );
  document.documentElement.style.setProperty(
    "--loader-color-primary",
    "rgba(45, 38, 54, .8)"
  );
  document.documentElement.style.setProperty(
    "--loader-color-secondary",
    "rgba(75, 68, 84, .4)"
  );
  document.documentElement.style.setProperty(
    "--fill-color-primary",
    "#aaaaaa"
  );
  document.documentElement.style.setProperty(
    "--bg-color-primary",
    "rgba(75, 68, 84, .4)"
  );
  document.documentElement.style.setProperty(
    "--bg-color-secondary",
    "rgba(45, 38, 54, 1)"
  );
  document.documentElement.style.setProperty(
    "--hover-background-color",
    "rgba(75, 68, 84, .1)"
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
    "rgba(45, 38, 54, .5)"
  );
  document.documentElement.style.setProperty(
    "--progress-background",
    "rgba(45, 38, 54, .1)"
  );
  document.documentElement.style.setProperty(
    "--sticky-background",
    "rgba(45, 38, 54, .4)"
  );
  document.documentElement.style.setProperty(
    "--hue-rotate",
    "hue-rotate(45deg)"
  );
  document
    .querySelectorAll("input")
    .forEach((a) => (a.style.color = "var(--fill-color-primary)"));
  document.querySelectorAll("#container, #sidebar, #visit")
    .forEach(
      (a) => (a.style.backgroundColor = "var(--bg-color-secondary)"))
  document.querySelectorAll("#content")
    .forEach(
      (a) => (a.style.backgroundColor = "var(--bg-color-primary)"))
  document.querySelector('#hide').style.background =
  "var(--progress-background)"

}
