let Swipe = function () {
  if (
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
