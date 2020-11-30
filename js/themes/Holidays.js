var Holidays = function () {
  document.documentElement.style.setProperty(
    `--box-shadow`,
    `8px 8px 16px rgb(81, 10, 5, .4)`
  );
  document.documentElement.style.setProperty(
    `--loader-color-primary`,
    `rgb(81, 10, 5)`
  );
  document.documentElement.style.setProperty(
    `--loader-color-secondary`,
    `rgb(81, 10, 5)`
  );
  document.documentElement.style.setProperty(
    `--fill-color-primary`,
    `rgb(81, 10, 5)`
  );
  document.documentElement.style.setProperty(
    `--fill-color-secondary`,
    `rgb(81, 10, 5)`
  );
  document.documentElement.style.setProperty(
    `--bg-color-primary`,
    `transparent`
  );
  document.documentElement.style.setProperty(
    `--bg-color-secondary`,
    `rgba(120, 158, 121, .4)`
  );
  document.documentElement.style.setProperty(
    `--hover-background-color`,
    `rgba(109, 15, 9, .2)`
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
    `rgba(255,255,255, .7)`
  );
  document.documentElement.style.setProperty(
    `--sticky-background`,
    `rgba(255, 255, 255, .8)`
  );
  document.documentElement.style.setProperty(
    `--filter`,
    `hue-rotate(110deg)`
  );
  document.querySelector(`#favicon`).setAttribute(`href`, `favicon.ico`);
  if (backgroundImage[0].path != `images/61c54bbdc2c6527196e7009a87ff44bf.webp`)
    backgroundImage[0].path = `images/61c54bbdc2c6527196e7009a87ff44bf.webp`
  document.querySelector(`#${backgroundImage[0].element}`).style.backgroundImage =
    `url(${backgroundImage[0].path})`
};
