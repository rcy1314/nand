let handleSwipe = function () {
  if (
    touchendX - 75 >
    touchstartX
  ) {
    onScreen = true;
    sideBarDisplay(onScreen);
  }
  else if (
    touchendX + 75 <
    touchstartX
  ) {
    onScreen = false;
    if (
      !sideBarLock
    )
    sideBarDisplay(onScreen);
  }
}
