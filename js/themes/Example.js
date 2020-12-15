var Example = function () {
  color = `rgba(255, 255, 255, 1)`; //Particles (unused [baseDom.js])
  document.documentElement.style.setProperty(
    `--box-shadow`,
    `8px 8px 16px rgba(63, 92, 136, .4)`
  ); //not widely adapted
  document.documentElement.style.setProperty(
    `--loader-color-primary`,
    `rgba(106, 66, 194, 1)`
  ); // Pending circle
  document.documentElement.style.setProperty(
    `--loader-color-secondary`,
    `rgba(253, 115, 136, .7)`
  ); // Pending circle
  document.documentElement.style.setProperty(`--fill-color-primary`, `#ffffff`);
  document.documentElement.style.setProperty(
    `--fill-color-secondary`,
    `#eeeeee`
  ); // Fills text, icons
  document.documentElement.style.setProperty(
    `--bg-color-primary`,
    `transparent`
  ); // Inputs
  document.documentElement.style.setProperty(
    `--bg-color-secondary`,
    `rgba(106, 66, 194, .9)`
  ); // SideBar, Sticky
  document.documentElement.style.setProperty(
    `--hover-background-color`,
    `rgba(63, 92, 136, .2)`
  ); // Feed Assets, Buttons
  document.documentElement.style.setProperty(
    `--not-hover-border-color`,
    `.3px solid transparent`
  ); // Placeholder for --hover-border-color
  document.documentElement.style.setProperty(
    `--hover-border-color`,
    `.3px solid #eeeeee`
  ); // Populate, Buttons
  document.documentElement.style.setProperty(
    `--borderless-hover-color`,
    `rgba(63, 92, 136, .4)`
  ); // Main, TopBar Input, Left Right (feed)
  document.documentElement.style.setProperty(
    `--sticky-background`,
    `rgba(63, 92, 136, .8)`
  ); // Guide
  document.documentElement.style.setProperty(
    `--filter`,
    `invert(100%)`
  ); // Translations (Legacy)
  document.querySelector(`#favicon`).setAttribute(`href`, `favicon.ico`);
  if (backgroundImage[0].path != `images/ffe869c642be33cbb2c3e609e27beb29.webp`)
    backgroundImage[0].path = `images/ffe869c642be33cbb2c3e609e27beb29.webp`
  document.querySelector(`#${backgroundImage[0].element}`).style.backgroundImage =
    `url(${backgroundImage[0].path})`
};
