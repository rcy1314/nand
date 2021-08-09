let Swipe = function () {
  if (
    display !== `sideScroll` &&
    window.innerWidth <= 768 &&
    touchendX - 75 >
    touchstartX
  ) {
    onScreen = true;
    Sidebar(onScreen);
  }
  else if (
    touchendX + 75 <
    touchstartX
  ) {
    onScreen = false;
    if (
      !sideBarLock
    )
    Sidebar(onScreen);
  }
}
