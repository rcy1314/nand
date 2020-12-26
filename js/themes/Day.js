var Day = function () {
  document.documentElement.style.setProperty(
    `--box-shadow`,
    `8px 8px 16px rgb(212,212,212,.2)`
  );
  document.documentElement.style.setProperty(
    `--loader-color`,
    `rgba(123, 192, 236, 1)`
  );
  document.documentElement.style.setProperty(`--fill-color`, `#555555`);
  document.documentElement.style.setProperty(
    `--color-primary`,
    `rgb(255,255,255,.1)`
  );
  document.documentElement.style.setProperty(`--color-secondary`, `#f7f7f7`);
  document.documentElement.style.setProperty(
    `--hover-background-color`,
    `rgb(212,212,212,.2)`
  );
  document.documentElement.style.setProperty(
    `--border-color`,
    `.3px solid #cccccc`
  );
  document.documentElement.style.setProperty(
    `--borderless-color`,
    `rgb(255,255,255,.4)`
  );
  document.querySelector(`#favicon`).setAttribute(`href`, `favicon.ico`);
  if (backgroundImage[0].path != `images/b453ae624e3d5e58b9890a998ec441b8.webp`)
    backgroundImage[0].path = `images/b453ae624e3d5e58b9890a998ec441b8.webp`
  document.querySelector(`#${backgroundImage[0].element}`)
    .style.backgroundImage = `url(${backgroundImage[0].path})`
};
