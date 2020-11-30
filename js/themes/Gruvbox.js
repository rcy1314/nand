var Gruvbox = function () {
  document.documentElement.style.setProperty(
    `--box-shadow`,
    `8px 8px 16px rgba(169, 121, 62, .15)`
  );
  document.documentElement.style.setProperty(
    `--loader-color-primary`,
    `rgba(169, 121, 62, 1)`
  );
  document.documentElement.style.setProperty(
    `--loader-color-secondary`,
    `rgba(169, 121, 62, .7)`
  );
  document.documentElement.style.setProperty(`--fill-color-primary`, `#eeeeee`);
  document.documentElement.style.setProperty(
    `--fill-color-secondary`,
    `rgba(169, 121, 62, 1)`
  );
  document.documentElement.style.setProperty(
    `--bg-color-primary`,
    `rgba(171, 119, 86, .4)`
  );
  document.documentElement.style.setProperty(
    `--bg-color-secondary`,
    `rgba(169, 121, 62, .2)`
  );
  document.documentElement.style.setProperty(
    `--hover-background-color`,
    `rgba(169, 121, 62, .2)`
  );
  document.documentElement.style.setProperty(
    `--not-hover-border-color`,
    `.3px solid transparent`
  );
  document.documentElement.style.setProperty(
    `--hover-border-color`,
    `.3px solid #dddddd`
  );
  document.documentElement.style.setProperty(
    `--borderless-hover-color`,
    `rgba(169, 121, 62, .4)`
  );
  document.documentElement.style.setProperty(
    `--sticky-background`,
    `rgba(169, 121, 62, .8)`
  );
  document.documentElement.style.setProperty(
    `--filter`,
    `hue-rotate(160deg)`
  );
  document.querySelector(`#favicon`).setAttribute(`href`, `favicon.ico`);
  if (backgroundImage[0].path != `images/e54430a6cf0248fa8d1d5961e02a71e4.webp`)
    backgroundImage[0].path = `images/e54430a6cf0248fa8d1d5961e02a71e4.webp`
  document.querySelector(`#${backgroundImage[0].element}`).style.backgroundImage =
    `url(${backgroundImage[0].path})`
};
