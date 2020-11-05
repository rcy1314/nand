var Day = function() {
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
    "rgb(97, 121, 201)"
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
    "rgb(255,255,255,.8)"
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
