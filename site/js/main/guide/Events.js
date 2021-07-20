_guide.addEventListener('touchstart', (evt) => {
    touchstartX = evt.changedTouches[0].screenX
    touchstartY = evt.changedTouches[0].screenY;
  },
  {
    passive: true
  }
);

_guide.addEventListener('touchend', (evt) => {
    touchendX = evt.changedTouches[0].screenX;
    touchendY = evt.changedTouches[0].screenY;
    handleGuide();
  },
  {
    passive: true
  }
);

_guide.addEventListener('click', (evt) => {
    if (
      event.target.classList.contains(`checkmark__circle`) ||
      event.target.classList.contains(`checkmark__check`) ||
      event.target.classList.contains(`checkmark`) ||
      evt.target.id == `guide`
    ) {
      if (
        Array.isArray(pub)
      )
        Append(id);
        _main.classList.remove(`guide`);
      if (loading == `percent`) _progress.style.width = `100%`;
      while (_guide.lastChild) _guide.removeChild(_guide.lastChild);
      if (sideBarLock == true) onScreen = true;
      _guide.style.display = `none`;
      _check.style.display = `none`;
      topMenuBarDisplay(topBar);
      sideBarDisplay(onScreen);
      guideOnScreen = true;
      _main.focus();
      pub = null;
    }
  },
  false
);
