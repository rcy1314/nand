var Informative = function () {
  document.documentElement.style.setProperty(
    `--box-shadow`,
    `8px 8px 16px rgba(212, 212, 212, .2)`
  );
  document.documentElement.style.setProperty(
    `--loader-color`,
    `rgba(123, 192, 236, 1)`
  );
  document.documentElement.style.setProperty(`--fill-color`, `#555555`);
  document.documentElement.style.setProperty(
    `--color-primary`,
    `rgba(255, 255, 255, .4)`
  );
  document.documentElement.style.setProperty(
    `--color-secondary`,
    `rgba(247, 247, 247, 1)`
  );
  document.documentElement.style.setProperty(
    `--hover-background-color`,
    `rgba(255, 255, 255, .4)`
  );
  document.documentElement.style.setProperty(
    `--border-color`,
    `.3px solid #777777`
  );
  document.documentElement.style.setProperty(
    `--borderless-color`,
    `rgba(220, 220, 220, .6)`
  );
  document.querySelector(`#favicon`).setAttribute(`href`, `favicon.ico`);
  if (backgroundImage[0].path != `https://ackti.files.wordpress.com/2020/12/7cl8j1tegr261-1.jpg`)
    backgroundImage[0].path = `https://ackti.files.wordpress.com/2020/12/7cl8j1tegr261-1.jpg`
  document.querySelector(`#${backgroundImage[0].element}`)
    .style.backgroundImage = `url(${backgroundImage[0].path})`
};
