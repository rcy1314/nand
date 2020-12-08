var Day = function () {
  color = `rgba(0, 120, 212, .4)`;
  document.documentElement.style.setProperty(
    `--box-shadow`,
    `8px 8px 16px rgb(212,212,212,.2)`
  );
  document.documentElement.style.setProperty(
    `--loader-color-primary`,
    `#f7f7f7`
  );
  document.documentElement.style.setProperty(
    `--loader-color-secondary`,
    `rgba(0, 120, 212, .4)`
  );
  document.documentElement.style.setProperty(`--fill-color-primary`, `#555555`);
  document.documentElement.style.setProperty(
    `--fill-color-secondary`,
    `rgb(145,145,145,.9)`
  );
  document.documentElement.style.setProperty(
    `--bg-color-primary`,
    `rgb(255,255,255,.8)`
  );
  document.documentElement.style.setProperty(`--bg-color-secondary`, `#f7f7f7`);
  document.documentElement.style.setProperty(
    `--hover-background-color`,
    `rgb(212,212,212,.2)`
  );
  document.documentElement.style.setProperty(
    `--not-hover-border-color`,
    `.3px solid transparent`
  );
  document.documentElement.style.setProperty(
    `--hover-border-color`,
    `.3px solid #cccccc`
  );
  document.documentElement.style.setProperty(
    `--borderless-hover-color`,
    `rgb(255,255,255,.75)`
  );
  document.documentElement.style.setProperty(
    `--sticky-background`,
    `rgba(255,255,255,.9)`
  );
  document.documentElement.style.setProperty(
    `--filter`,
    ``
  );
  document.querySelector(`#favicon`).setAttribute(`href`, `favicon.ico`);
  if (backgroundImage[0].path != `images/b453ae624e3d5e58b9890a998ec441b8.webp`)
    backgroundImage[0].path = `images/b453ae624e3d5e58b9890a998ec441b8.webp`
  document.querySelector(`#${backgroundImage[0].element}`).style.backgroundImage =
    `url(${backgroundImage[0].path})`
};
