var Arc = function () {
  document.documentElement.style.setProperty(
    `--box-shadow`,
    `none`
  );
  document.documentElement.style.setProperty(
    `--loader-color-primary`,
    `rgba(82, 148, 226, 1)`
  );
  document.documentElement.style.setProperty(
    `--loader-color-secondary`,
    `rgba(124, 129, 140, .7)`
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
    `rgba(75, 81, 98, 1)`
  );
  document.documentElement.style.setProperty(
    `--bg-color-secondary`,
    `rgba(56, 60, 74, 1)`
  );
  document.documentElement.style.setProperty(
    `--hover-background-color`,
    `rgba(82, 148, 226, .05)`
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
    `rgba(124, 129, 140, .8)`
  );
  document.documentElement.style.setProperty(
    `--sticky-background`,
    `rgba(75, 81, 98, .4)`
  );
  document.documentElement.style.setProperty(`--filter`, `grayscale(0%)`);
  document.querySelector(`#favicon`).setAttribute(`href`, `favicon.ico`);
  backgroundImage[0].path = `images/e54430a6cf0248fa8d1d5961e02a71e4.webp`
  document.querySelector(`#${backgroundImage[0].element}`).style.backgroundImage =
    `url(${backgroundImage[0].path})`
};
