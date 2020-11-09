var Solarized = function () {
  document.documentElement.style.setProperty(
    `--box-shadow`,
    `8px 8px 16px rgba(45, 38, 54, .2)`
  );
  document.documentElement.style.setProperty(
    `--loader-color-primary`,
    `rgba(63, 73, 99, 1)`
  );
  document.documentElement.style.setProperty(
    `--loader-color-secondary`,
    `rgba(63, 92, 136, 1)`
  );
  document.documentElement.style.setProperty(`--fill-color-primary`, `#eeeeee`);
  document.documentElement.style.setProperty(
    `--fill-color-secondary`,
    `rgba(63, 92, 136, 1)`
  );
  document.documentElement.style.setProperty(
    `--bg-color-primary`,
    `rgba(46, 57, 80, 1)`
  );
  document.documentElement.style.setProperty(
    `--bg-color-secondary`,
    `rgba(46, 57, 80, 1)`
  );
  document.documentElement.style.setProperty(
    `--hover-background-color`,
    `rgba(63, 92, 136, .4)`
  );
  document.documentElement.style.setProperty(
    `--not-hover-border-color`,
    `.3px solid transparent`
  );
  document.documentElement.style.setProperty(
    `--hover-border-color`,
    `.3px solid #eeeeee`
  );
  document.documentElement.style.setProperty(
    `--borderless-hover-color`,
    `rgba(63, 92, 136, .8)`
  );
  document.documentElement.style.setProperty(
    `--progress-background`,
    `rgba(63, 92, 136, .3)`
  );
  document.documentElement.style.setProperty(
    `--sticky-background`,
    `rgba(63, 92, 136, .4)`
  );
  document.documentElement.style.setProperty(
    `--hue-rotate`,
    `hue-rotate(0deg)`
  );
  document
    .querySelectorAll(`#container,#visit`)
    .forEach((a) => (a.style.backgroundColor = `var(--bg-color-secondary)`));
  document
    .querySelectorAll(`#sidebar, #content`)
    .forEach((a) => (a.style.backgroundColor = `var(--bg-color-primary)`));
  document.querySelector(`#hide`).style.background =
    `var(--progress-background)`;
};
