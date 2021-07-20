window.addEventListener('resize', (evt) => {
    if (
      document.body.contains(
        _xml.querySelector(`.item`)
      )
    ) {
      if (_main.clientWidth <= 768) {
        _display.style.display = `none`;
        displayLegacy();
      } else if (_main.clientWidth >= 769)
        displayFlex()
      else if (_main.clientWidth >= 1280) {
        _center.style.cssText = `display:inline-flex;width:930px;left:340px;`;
        _display.style.cssText = `display:inline-block;`;
      } else if (
        _main.clientWidth < 1280 &&
        viewport[cycleViewport] == `legacy`
      )
        _display.style.display = `none`;
    }
  },
  { passive: true }
);

_container.addEventListener('click', (evt) => {
  if (
    evt.target.classList.contains(`fa-camera-retro`)
  ) {
      cycleViewport = cycleViewport + 1
      if (
        cycleViewport == viewport.length
      )
        cycleViewport = 0
      if (
        viewport[cycleViewport] == `legacy`
      ) {
        display = `legacy`;
        sideScroll = false;
        flexBox = false;
        legacy = true;
        let leaveOff = document.querySelector(`.channel`).scrollLeft +
          ((parseInt(document.querySelectorAll(`.item`).length) * parseInt(100)));
        displayLegacy();
        _main.scrollTop = leaveOff;
      } else if (
        viewport[cycleViewport] == `flexBox` &&
        _main.clientWidth >= 768
      ) {
        display = `flexBox`;
        sideScroll = false;
        flexBox = true;
        legacy = false;
        let leaveOff = _main.scrollTop -
          ((parseInt(document.querySelectorAll(`.item`).length) * parseInt(100)));
        displayFlex();
        _main.scrollTop = leaveOff;
      } else if (
        viewport[cycleViewport] == `sideScroll`
      ) {
        display = `sideScroll`;
        sideScroll = true;
        flexBox = false;
        legacy = false;
        let leaveOff = _main.scrollTop -
          ((parseInt(document.querySelectorAll(`.item`).length) * parseInt(100)));
        displaySideScroll();
        _channel.scrollLeft = leaveOff;
      }
    }
  },
  false
);
