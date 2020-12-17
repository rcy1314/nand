var Solarized = function () {
  document.documentElement.style.setProperty(
    `--box-shadow`,
    `none`
  );
  document.documentElement.style.setProperty(
    `--loader-color`,
    `rgba(63, 73, 99, 1)`
  );
  document.documentElement.style.setProperty(
    `--fill-color`,
    `rgb(255, 215, 103)`
  );
  document.documentElement.style.setProperty(
    `--color-primary`,
    `rgba(36, 47, 70, .2)`
  );
  document.documentElement.style.setProperty(
    `--color-secondary`,
    `rgba(46, 57, 80, 1)`
  );
  document.documentElement.style.setProperty(
    `--hover-background-color`,
    `rgba(63, 92, 136, .2)`
  );
  document.documentElement.style.setProperty(
    `--border-color`,
    `.3px solid #eeeeee`
  );
  document.documentElement.style.setProperty(
    `--borderless-color`,
    `rgba(63, 92, 136, .4)`
  );
  document.querySelector(`#favicon`).setAttribute(`href`, `favicon.ico`);
  if (backgroundImage[0].path != `images/a54430a6cf0248fa8d1d5961e02a71e4.webp`)
    backgroundImage[0].path = `images/a54430a6cf0248fa8d1d5961e02a71e4.webp`
  document.querySelector(`#${backgroundImage[0].element}`)
    .style.backgroundImage = `url(${backgroundImage[0].path})`
};
