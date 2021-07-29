var Gentoo = function () {
  document.documentElement.style.setProperty(
    `--box-shadow`,
    `2px 2px 4px rgba(34, 37, 45, 1)`
  ); //not widely adapted
  document.documentElement.style.setProperty(
    `--loader-color`,
    `rgba(197, 197, 197, 1)`
  ); // Pending Circle                       //Text Color, Loading Color
  document.documentElement.style.setProperty(`--fill-color`, `rgba(197, 197, 197, 1)`);
  document.documentElement.style.setProperty(
    `--color-primary`,
    `rgba(42, 45, 53, .9)`
  ); // Inputs
  document.documentElement.style.setProperty(
    `--color-secondary`,
    `rgba(42, 45, 53, .1)`
  ); // SideBar, Sticky
  document.documentElement.style.setProperty(
    `--hover-background-color`,
    `rgba(247, 247, 247, .2)`
  ); // Feed Assets, Buttons
  document.documentElement.style.setProperty(
    `--border-color`,
    `transparent`
  ); // Populate, Buttons
  document.documentElement.style.setProperty(
    `--borderless-color`,
    `rgba(42, 45, 53, .6)`
  ); // Main, TopBar Input, Left Right (feed)
  /*
  if (backgroundImage[0].path != `https://raw.githubusercontent.com/acktic/.dotfiles/main/d453ae624e3d5e58b9890a998ec441b9.jpg`)
    backgroundImage[0].path = `https://raw.githubusercontent.com/acktic/.dotfiles/main/d453ae624e3d5e58b9890a998ec441b9.jpg`
  document.querySelector(`#${backgroundImage[0].element}`)
    .style.backgroundImage = `url(${backgroundImage[0].path})`
  */
};
