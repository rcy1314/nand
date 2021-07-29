var Night = function () {
  document.documentElement.style.setProperty(
    `--box-shadow`,
    `8px 8px 16px rgba(10, 10, 10, 1)`
  );
  document.documentElement.style.setProperty(
    `--loader-color`,
    `rgba(140, 140, 140, .3)`
  );
  document.documentElement.style.setProperty(`--fill-color`, `#aaaaaa`);
  document.documentElement.style.setProperty(
    `--color-primary`,
    `rgba(0, 0, 0, .6)`
  );
  document.documentElement.style.setProperty(
    `--color-secondary`,
    `rgba(26, 26, 26, .3)`
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
    `rgba(7,7,7,.9)`
  );
  /*
  if (backgroundImage[0].path != `https://raw.githubusercontent.com/acktic/.dotfiles/main/d453ae624e3d5e58b9890a998ec441b9.jpg`)
    backgroundImage[0].path = `https://raw.githubusercontent.com/acktic/.dotfiles/main/d453ae624e3d5e58b9890a998ec441b9.jpg`
  document.querySelector(`#${backgroundImage[0].element}`)
    .style.backgroundImage = `url(${backgroundImage[0].path})`
  */
};
