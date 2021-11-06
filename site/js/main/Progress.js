let Progress = function(done) {
  let width;
  let length;
  let complete;
  if (
    !done &&
    loading == `percent`
  ) {
    complete =
      setInterval(
        function() {
          if (
            !width ||
            width == `Infinity` &&
            count.length <= 0
          )
            width = _container.clientWidth / 12;
          if (
            _progress.clientWidth >= _container.clientWidth
          ) {
            _progress.style.transition = `0`;
            _progress.style.width = `100%`;
            setTimeout(
              function() {
                _progress.style.transition = `all 1600ms ease-in-out`;
                _progress.style.opacity = `0`;
              },
              350)
            setTimeout(
              function() {
                _progress.style.transition = `none`;
                _progress.style.width = `0%`;
              },
              1600);
            clearInterval(complete);
          } else {
            _progress.style.width = _progress.clientWidth + width;
            _progress.style.transition = `all 750ms ease-in-out`;
            _progress.style.opacity = `1`;
          }
        },
        500);
  }
  if (
    document.body.contains(
      _channel.querySelector(
        `.item`
      )
    )
  ) {
    if (
      first &&
      scrollIntoView
    ) {
      _channel.classList.add(`scroll-into-view`)
      setTimeout(
        function() {
          _channel.classList.remove(`scroll-into-view`);
        }, 1750
      )
    }

    if (
      showSplash
    )
      _check.style.display = `none`;

    if (
      fadeIntoView
    ) {
      (function() {
        function checkPosition() {
          let elements = _channel.querySelectorAll(`.hidden`);
          for (
            let i = 0; i < elements.length; i++) {
            if (
              display !== `sideScroll` &&
              elements[i] &&
              !elements[i].classList.contains(`guide`) &&
              elements[i].getBoundingClientRect().top -
              _main.clientHeight <=
              0
            ) {
              elements[i].classList.add(`fade-in-element`);
              elements[i].classList.remove(`hidden`);
            } else if (
              display == `sideScroll` &&
              elements[i] &&
              elements[i].getBoundingClientRect().left -
              _channel.clientWidth <=
              _channel.clientWidth
            ) {
              elements[i].classList.add(`fade-in-element`);
              elements[i].classList.remove(`hidden`);
            }
          }
        }
        if (
          display == `sideScroll`
        )
          _channel.addEventListener(
            `scroll`,
            checkPosition
          );
        else if (
          display !== `sideScroll`
        )
          _main.addEventListener(
            `scroll`,
            checkPosition
          );
        if (
          scrollIntoView
        )
          setTimeout(
            function() {
              checkPosition();
            },
            1000)
        else checkPosition();
      })();
    }
    if (
      !fadeIntoView
    ) {
      _channel
        .querySelectorAll(`.img`)
        .forEach(
          (a) => a.classList.remove(`hidden`)
        );
      _main.removeEventListener(`scroll`, checkPosition);
      _main.removeEventListener(`resize`, init);
    }
    if (
      display == `sideScroll`
    ) {
      _center.classList.remove(`scroll-into-view`);
      _channel.classList.add(`sideChannel`);
      _center.style.top = `60px`;
      _channel
        .querySelectorAll(`.item`)
        .forEach(
          (a) => a.classList.add(`sideItem`)
        );
    }
  }
  if (
    document
    .body
    .contains(
      _group
      .querySelector(
        `.populate`
      )
    )
  ) {
    scrollIntoView = scrollIntoViewBuffer
    if (
      scrollIntoView
    ) {
      console.log(_main.scrolltop + ` group ` + _group.scrollTop + ` result` + _result.scrollTop)
      _group.classList.add(`scroll-into-view`)
      if (
        !onlyImages
      )
        setTimeout(
          function() {
            _main.scrollTop = _air.clientHeight;
          }, 300
        )
      setTimeout(
        function() {
          _group.classList.remove(`scroll-into-view`)
          _main.scrollTop = _result.offsetTop;
        }, 1250
      )
    } else _main.scrollTop = 60;
  }
  if (
    showSplash
  )
    _check.style.display = `none`;
};
