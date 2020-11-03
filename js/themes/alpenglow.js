var Alpenglow = function() {

  document.documentElement.style.setProperty(
    "--box-shadow",
    "8px 8px 16px rgba(45, 38, 54, .2)"
  );
  document.documentElement.style.setProperty(
    "--loader-color-primary",
    "linear-gradient(-45deg, rgba(106, 66, 194, 1) 50%," +
    "rgba(253, 115, 136, 1) 100%)"
  );
  document.documentElement.style.setProperty(
    "--loader-color-secondary",
    "linear-gradient(45deg, rgba(106, 66, 194, 1) 50%," +
    "rgba(253, 115, 136, 1) 100%)"
  );
  document.documentElement.style.setProperty(
    "--fill-color-primary",
    "#eeeeee"
  );
  document.documentElement.style.setProperty(
    "--fill-color-secondary",
    "rgba(253, 115, 136, 1)"
  );
  document.documentElement.style.setProperty(
    "--bg-color-primary",
    "linear-gradient(right, rgba(106, 66, 194, .4) 50%," +
    "rgba(253, 115, 136, .4) 100%)"
  );
  document.documentElement.style.setProperty(
    "--bg-color-secondary",
    "linear-gradient(45deg, rgba(106, 66, 194, 1) 50%," +
    "rgba(253, 115, 136, 1) 100%)"
  );
  document.documentElement.style.setProperty(
    "--hover-background-color",
    "rgba(63, 92, 136, .4)"
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
    "rgba(63, 92, 136, .5)"
  );
  document.documentElement.style.setProperty(
    "--progress-background",
    "rgba(63, 92, 136, .3)"
  );
  document.documentElement.style.setProperty(
    "--sticky-background",
    "rgba(63, 92, 136, .4)"
  );
  document.documentElement.style.setProperty(
    "--hue-rotate",
    "hue-rotate(110deg)"
  );
  document.querySelectorAll("#container, #visit")
    .forEach(
      (a) => (a.style.backgroundImage = "var(--bg-color-secondary)"))
  document.querySelectorAll("#sidebar, #content")
    .forEach(
      (a) => (a.style.backgroundImage = "var(--bg-color-primary)"))
  document.querySelector('#hide').style.background =
  "var(--progress-background)"

}
