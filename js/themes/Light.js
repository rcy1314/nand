var Light = function () {
  document.querySelector(`#${backgroundImage[0].element}`)
    .style.backgroundImage = `url(${backgroundImage[0].path})`
    document.documentElement.style.setProperty(
      `--box-shadow`,
      `8px 8px 16px rgba(63, 92, 136, .4)`
    );
    document.documentElement.style.setProperty(
      `--loader-color`,
      `rgba(106, 66, 194, 1)`
    );
    document.documentElement.style.setProperty(`--fill-color`, `#ffffff`);
    document.documentElement.style.setProperty(
      `--color-primary`,
      `rgba(255, 255, 255, .1)`
    );
    document.documentElement.style.setProperty(
      `--color-secondary`,
      `rgba(106, 66, 194, 1)`
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
    if (backgroundImage[0].path != `images/b453ae624e3d5e58b9890a998ec441b8.webp`)
      backgroundImage[0].path = `images/b453ae624e3d5e58b9890a998ec441b8.webp`
    document.querySelector(`#${backgroundImage[0].element}`)
      .style.backgroundImage = `url(${backgroundImage[0].path})`
};
