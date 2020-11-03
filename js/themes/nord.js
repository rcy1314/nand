var Nord = function() {

  document.documentElement.style.setProperty(
    "--box-shadow",
    "8px 8px 16px rgba(45, 38, 54, .2)"
  );
  document.documentElement.style.setProperty(
    "--loader-color-primary",
    "rgba(218, 222, 232, 1)"
  );
  document.documentElement.style.setProperty(
    "--loader-color-secondary",
    "rgba(48, 52, 63, 1)"
  );
  document.documentElement.style.setProperty(
    "--fill-color-primary",
    "rgba(218, 222, 232, 1)"
  );
  document.documentElement.style.setProperty(
    "--fill-color-secondary",
    "rgba(48, 52, 63, 1)"
  );
  document.documentElement.style.setProperty(
    "--bg-color-primary",
    "rgba(80, 86, 105, .4)"
  );
  document.documentElement.style.setProperty(
    "--bg-color-secondary",
    "rgba(48, 52, 63, 1)"
  );
  document.documentElement.style.setProperty(
    "--hover-background-color",
    "rgba(218, 222, 232, .4)"
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
    "rgba(218, 222, 232, .5)"
  );
  document.documentElement.style.setProperty(
    "--progress-background",
    "rgba(218, 222, 232, 1)"
  );
  document.documentElement.style.setProperty(
    "--sticky-background",
    "rgba(218, 222, 232, .4)"
  );
  document.documentElement.style.setProperty(
    "--hue-rotate",
    "grayscale(100%)"
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

}
