var Light = function() {
  document.documentElement.style.setProperty(
    `--box-shadow`,
    `8px 8px 16px rgba(212, 212, 212, .2)`
  );
  document.documentElement.style.setProperty(
    `--loader-color`,
    `rgba(123, 192, 236, .3)`
  );
  document.documentElement.style.setProperty(`--fill-color`, `#555555`);
  document.documentElement.style.setProperty(
    `--color-primary`,
    `rgba(255, 255, 255, 1)`
  );
  document.documentElement.style.setProperty(
    `--color-secondary`,
    `rgba(247, 247, 247, .3)`
  );
  document.documentElement.style.setProperty(
    `--hover-background-color`,
    `rgba(212, 212, 212, .2)`
  );
  document.documentElement.style.setProperty(
    `--border-color`,
    `.3px solid #cccccc`
  );
  document.documentElement.style.setProperty(
    `--borderless-color`,
    `rgba(255, 255, 255, .9)`
  );
  /*
  if (backgroundImage[0].path != `https://raw.githubusercontent.com/acktic/.dotfiles/main/d453ae624e3d5e58b9890a998ec441b9.jpg`)
    backgroundImage[0].path = `https://raw.githubusercontent.com/acktic/.dotfiles/main/d453ae624e3d5e58b9890a998ec441b9.jpg`
  document.querySelector(`#${backgroundImage[0].element}`)
    .style.backgroundImage = `url(${backgroundImage[0].path})`
  */
};
