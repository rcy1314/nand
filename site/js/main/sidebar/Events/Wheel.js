if (sideBarMousewheel) {
  _main.addEventListener("wheel", function(evt) {
    if (
      onScreen == true &&
      window.innerWidth >= 769 &&
      Math.sign(evt.deltaY) == 1 &&
      sideBarLock == false
    ) {
      onScreen = false;
      Sidebar(onScreen);
    } else if (
      onScreen == false &&
      window.innerWidth >= 769 &&
      Math.sign(evt.deltaY) == -1
    ) {
      setTimeout(function() {
        onScreen = true;
        Sidebar(onScreen);
      }, 1250)
    }
  },
  {
    passive: true
  }
  );
}
