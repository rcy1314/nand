var Solarized = function () {
  document.documentElement.style.setProperty(
    `--box-shadow`,
    `none`
  );
  document.documentElement.style.setProperty(
    `--loader-color-primary`,
    `rgba(63, 73, 99, 1)`
  );
  document.documentElement.style.setProperty(
    `--loader-color-secondary`,
    `rgba(63, 92, 136, .7)`
  );
  document.documentElement.style.setProperty(
    `--fill-color-primary`,
    `rgb(255, 215, 103)`
  );
  document.documentElement.style.setProperty(
    `--fill-color-secondary`,
    `rgb(255, 215, 103)`
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
    `rgba(63, 92, 136, .2)`
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
    `rgba(63, 92, 136, .4)`
  );
  document.documentElement.style.setProperty(
    `--sticky-background`,
    `rgba(63, 92, 136, .8)`
  );
  document.documentElement.style.setProperty(
    `--filter`,
    ``
  );
  document.querySelector(`#favicon`).setAttribute(`href`, `favicon.ico`);
  if (backgroundImage[0].path != `images/e54430a6cf0248fa8d1d5961e02a71e4.webp`)
    backgroundImage[0].path = `images/e54430a6cf0248fa8d1d5961e02a71e4.webp`
  document.querySelector(`#${backgroundImage[0].element}`).style.backgroundImage =
    `url(${backgroundImage[0].path})`
};
