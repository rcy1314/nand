var Alpenglow = function () {
  document.documentElement.style.setProperty(
    `--box-shadow`,
    `8px 8px 16px rgba(63, 92, 136, .4)`
  );
  document.documentElement.style.setProperty(
    `--loader-color-primary`,
    `rgba(106, 66, 194, 1)`
  );
  document.documentElement.style.setProperty(
    `--loader-color-secondary`,
    `rgba(253, 115, 136, .7)`
  );
  document.documentElement.style.setProperty(`--fill-color-primary`, `#eeeeee`);
  document.documentElement.style.setProperty(
    `--fill-color-secondary`,
    `#eeeeee`
  );
  document.documentElement.style.setProperty(
    `--bg-color-primary`,
    `linear-gradient(right, rgba(106, 66, 194, .4) 50%,` +
      `rgba(253, 115, 136, .4) 100%)`
  );
  document.documentElement.style.setProperty(
    `--bg-color-secondary`,
    `rgba(106, 66, 194, 1)`
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
    `--hue-rotate`,
    `hue-rotate(110deg)`
  );
  backgroundImage[0].path = `url(images/ffe869c642be33cbb2c3e609e27beb29.webp)`
  document.querySelector(`#${backgroundImage[0].element}`).style.backgroundImage =
    backgroundImage[0].path
};
