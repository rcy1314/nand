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
        function() {

          _check.style.display = `block`;
          _check.style.opacity = `1`;

          setTimeout(
            function() {
              _visit.style.display = `flex`;
              _check.style.opacity = `1`;
              _check.classList.add(`margin`);
              _trademark.classList.add(`bootup`);

              setTimeout(
                function() {
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
                        !document
                        .body
                        .contains(
                          _group
                          .querySelector(
                            `.select`
                          )
                        ) &&
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
    } else {
      _container.style.display = `block`;
      _check.style.display = `none`;
      _check.style.opacity = `1`;
    }

  } else if (
    !location.search.split(`?`)[1]
  ) {
    _container.style.display = `block`;
    _check.style.display = `none`;
    _visit.style.display = `flex`;
    _check.style.opacity = `1`;
    _visit.style.opacity = `1`;
    _guest.focus();
  }
}

if (imageLoader == `v-bars`) {
  notifyOption(`Vertical Bars`, `fa-check-circle`);
  circleloader = false;
  ringloader = false;
  verticalbars = true;
  loadinganim = false;
  loaderfalse = false;
} else if (imageLoader == `double-circle`) {
  notifyOption(`Double Circle`, `fa-check-circle`);
  verticalbars = false;
  ringloader = false;
  circleloader = true;
  loadinganim = false;
  loaderfalse = false;
} else if (imageLoader == `ring-circle`) {
  notifyOption(`Ring Circle`, `fa-check-circle`);
  circleloader = false;
  verticalbars = false;
  ringloader = true;
  loadinganim = false;
  loaderfalse = false;
} else if (imageLoader == `loading`) {
  notifyOption(`Loading Animation`, `fa-check-circle`);
  circleloader = false;
  verticalbars = false;
  loaderfalse = false;
  ringloader = false;
  loadinganim = true;
} else if (imageLoader == false) {
  notifyOption(`No Animations`, `fa-check-circle`);
  circleloader = false;
  verticalbars = false;
  ringloader = false;
  loaderfalse = true;
  loadinganim = false;
}

if (display == `legacy`) {
  notifyOption(`Mobile`, `fa-check-circle`);
  dual = false;
  legacy = true;
  sscroll = false;
  flex = false;
} else if (display == `duo`) {
  notifyOption(`Duo`, `fa-check-circle`);
  dual = true;
  legacy = false;
  sscroll = false;
  flex = false;
} else if (display == `sideScroll`) {
  notifyOption(`Side Scroll`, `fa-check-circle`);
  dual = false;
  legacy = false;
  sscroll = true;
  flex = false;
} else if (display == `flexBox`) {
  notifyOption(`Flex Box`, `fa-check-circle`);
  dual = false;
  legacy = false;
  sscroll = false;
  flex = true;
}

if (loading == `percent`) {
  notifyOption(`Percent`, `fa-check-circle`);
  Dots = false;
  Percent = true;
} else {
  notifyOption(`Dots`, `fa-check-circle`);
  Dots = true;
  Percent = false;
}
if (expand == true) {
  notifyOption(`List`, `fa-check-circle`);
  Blocks = false;
  List = true;
} else {
  notifyOption(`Blocks`, `fa-check-circle`);
  Blocks = true;
  List = false;
}
