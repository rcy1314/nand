let Bootup = function() {
  if (
    bootup
  ) {
    if (
      !location.href.split(`?`)[1] &&
      !Reader
    ) {
      _container.style.display = `block`;
      _visit.style.display = `none`;
      _visit.style.zIndex = `-1`;
      _check.style.display = `block`;
      _check.style.opacity = `0`;
      _sb.style.display = `none`;
      setTimeout(
        function () {

          _check.style.display = `block`;
          _check.style.opacity = `1`;

          setTimeout(
            function () {
              _visit.style.display = `flex`;
              _check.style.opacity = `1`;
              _check.classList.add(`margin`);
              _trademark.classList.add(`bootup`);

              setTimeout(
                function () {
                  _visit.style.zIndex = `1`;
                  _visit.style.opacity = `1`;
                  _guest.setAttribute(`tabindex`, -1);
                  _check.style.opacity = `0`;
                  Sidebar(onScreen);

                  setTimeout(
                    function() {
                      _trademark.classList.remove(`bootup`);
                      _check.classList.remove(`margin`);
                      _check.style.display = `none`;
                      if (
                        window.innerWidth <= 425
                      )
                        _main
                          .querySelector(
                            `#option`
                          )
                            .style.cssText = `display:flex`;
                      if (
                        !document
                          .body
                            .contains(
                              _group
                                .querySelector(
                                  `.select`
                                )
                            )
                          &&
                        !document
                          .body
                            .contains(
                              _xml
                                .querySelector(
                                  `.item`
                                )
                            )
                      )
                        _sb.style.display = `block`;
                      else
                        _sb.style.display = `none`;
                      _check.style.opacity = `1`
                    }, 2500
                  )

                  _guest.focus();
                }, 4000
              )

            }, 2000
          )
        }, 1250
      )
    }
    else {
      _container.style.display = `block`;
      _check.style.display = `none`;
      _check.style.opacity = `1`;
    }

  }
  else {
    _container.style.display = `block`;
    _check.style.display = `none`;
    _visit.style.display = `flex`;
    _check.style.opacity = `1`;
    _visit.style.opacity = `1`;
    _guest.focus();
  }
}
