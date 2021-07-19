let handleGuide = function () {
  if (
    touchendX - 75 > touchstartX ||
    touchendX + 75 < touchstartX ||
    touchendY - 75 > touchstartY ||
    touchendY + 75 < touchstartY
  ) {
    if (
      Array.isArray(pub)
    )
      xmlAppendPublication(id);
    setTimeout(function () {
      if (complete) _progress.style.width = `100%`;
      _main.classList.remove(`guide`);
      while (_guide.lastChild)
        _guide.removeChild(_guide.lastChild);
      _guide.style.display = `none`;
      _check.style.display = `none`;
      topMenuBarDisplay(topBar);
      if (sideBarLock)
        onScreen = true;
      sideBarDisplay(onScreen);
      guideOnScreen = true;
      pub = null;
    }, 750)
  }
}
