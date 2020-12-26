var Night = function () {
  document.documentElement.style.setProperty(
    `--box-shadow`,
    `8px 8px 16px rgba(10, 10, 10, 1)`
  );
  document.documentElement.style.setProperty(
    `--loader-color`,
    `rgba(0, 120, 212, .4)`
  );
  document.documentElement.style.setProperty(`--fill-color`, `#aaaaaa`);
  document.documentElement.style.setProperty(
    `--color-primary`,
    `rgba(0, 20, 12, .1)`
  );
  document.documentElement.style.setProperty(
    `--color-secondary`,
    `rgba(26, 26, 26, .1)`
  );
  document.documentElement.style.setProperty(
    `--hover-background-color`,
    `rgba(26,26,26, .4)`
  );
  document.documentElement.style.setProperty(
    `--border-color`,
    `.3px solid #262626`
  );
  document.documentElement.style.setProperty(
    `--borderless-color`,
    `rgba(7,7,7,.6)`
  );
  document
    .querySelector(`#favicon`)
    .setAttribute(`href`, `images/Opposite.ico`);
  if (backgroundImage[0].path != `images/a54430a6cf0248fa8d1d5961e02a71e4.webp`)
    backgroundImage[0].path = `images/a54430a6cf0248fa8d1d5961e02a71e4.webp`
  document.querySelector(`#${backgroundImage[0].element}`)
    .style.backgroundImage = `url(${backgroundImage[0].path})`
};
