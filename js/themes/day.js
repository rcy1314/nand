var Day = function () {
  document.documentElement.style.setProperty(
    `--box-shadow`,
    `8px 8px 16px rgb(212,212,212,.2)`
  );
  document.documentElement.style.setProperty(
    `--loader-color-primary`,
    `#0078D4`
  );
  document.documentElement.style.setProperty(
    `--loader-color-secondary`,
    `rgba(0, 120, 212, .5)`
  );
  document.documentElement.style.setProperty(`--fill-color-primary`, `#555555`);
  document.documentElement.style.setProperty(
    `--fill-color-secondary`,
    `rgb(212,212,212,.9)`
  );
  document.documentElement.style.setProperty(
    `--bg-color-primary`,
    `rgb(255,255,255,.8)`
  );
  document.documentElement.style.setProperty(`--bg-color-secondary`, `#f7f7f7`);
  document.documentElement.style.setProperty(
    `--hover-background-color`,
    `rgb(212,212,212,.2)`
  );
  document.documentElement.style.setProperty(
    `--not-hover-border-color`,
    `.3px solid transparent`
  );
  document.documentElement.style.setProperty(
    `--hover-border-color`,
    `.3px solid #cccccc`
  );
  document.documentElement.style.setProperty(
    `--borderless-hover-color`,
    `rgb(235,235,235,.8)`
  );
  document.documentElement.style.setProperty(
    `--progress-background`,
    `rgba(238, 238, 238, .4)`
  );
  document.documentElement.style.setProperty(
    `--sticky-background`,
    `rgba(255,255,255,.4)`
  );
  document.documentElement.style.setProperty(
    `--hue-rotate`,
    `hue-rotate(0deg)`
  );
  document.querySelector(`#favicon`).setAttribute(`href`, `favicon.ico`);
};
