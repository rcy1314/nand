var Solarized = function () {
  document.documentElement.style.setProperty(
    `--box-shadow`,
    `4px 4px 16px rgba(255, 215, 103, .1)`
  );
  document.documentElement.style.setProperty(
    `--loader-color`,
    `rgb(255, 215, 103)`
  );
  document.documentElement.style.setProperty(
    `--fill-color`,
    `rgb(255, 215, 103)`
  );
  document.documentElement.style.setProperty(
    `--color-primary`,
    `rgba(36, 47, 70, .2)`
  );
  document.documentElement.style.setProperty(
    `--color-secondary`,
    `rgba(46, 57, 80, .3)`
  );
  document.documentElement.style.setProperty(
    `--hover-background-color`,
    `rgba(63, 92, 136, .2)`
  );
  document.documentElement.style.setProperty(
    `--border-color`,
    `.3px solid transparent`
  );
  document.documentElement.style.setProperty(
    `--borderless-color`,
    `rgba(63, 92, 136, .9)`
  );
  /*
  if (backgroundImage[0].path != `https://raw.githubusercontent.com/acktic/.dotfiles/main/d453ae624e3d5e58b9890a998ec441b9.jpg`)
    backgroundImage[0].path = `https://raw.githubusercontent.com/acktic/.dotfiles/main/d453ae624e3d5e58b9890a998ec441b9.jpg`
  document.querySelector(`#${backgroundImage[0].element}`)
    .style.backgroundImage = `url(${backgroundImage[0].path})`
  */
};
