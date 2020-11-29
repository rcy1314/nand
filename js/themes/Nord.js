var Nord = function () {
  document.documentElement.style.setProperty(
    `--box-shadow`,
    `none`
  );
  document.documentElement.style.setProperty(
    `--loader-color-primary`,
    `rgba(218, 222, 232, 1)`
  );
  document.documentElement.style.setProperty(
    `--loader-color-secondary`,
    `rgba(48, 52, 63, .7)`
  );
  document.documentElement.style.setProperty(
    `--fill-color-primary`,
    `rgba(218, 222, 232, 1)`
  );
  document.documentElement.style.setProperty(
    `--fill-color-secondary`,
    `rgba(48, 52, 63, 1)`
  );
  document.documentElement.style.setProperty(
    `--bg-color-primary`,
    `rgba(80, 86, 105, .4)`
  );
  document.documentElement.style.setProperty(
    `--bg-color-secondary`,
    `rgba(48, 52, 63, 1)`
  );
  document.documentElement.style.setProperty(
    `--hover-background-color`,
    `rgba(218, 222, 232, .05)`
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
    `rgba(48, 52, 63, .8)`
  );
  document.documentElement.style.setProperty(
    `--sticky-background`,
    `rgba(218, 222, 232, .4)`
  );
  document.documentElement.style.setProperty(`--filter`, `grayscale(100%)`);
  document.querySelector(`#favicon`).setAttribute(`href`, `favicon.ico`);
  if (backgroundImage[0].path != `images/e54430a6cf0248fa8d1d5961e02a71e4.webp`)
    backgroundImage[0].path = `images/e54430a6cf0248fa8d1d5961e02a71e4.webp`
  document.querySelector(`#${backgroundImage[0].element}`).style.backgroundImage =
    `url(${backgroundImage[0].path})`
};
