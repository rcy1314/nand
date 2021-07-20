_container.addEventListener('touchstart', (evt) => {
    touchmove = false;
    touchstartX = evt.changedTouches[0].screenX;
  },
  { passive: true }
);

_container.addEventListener('touchend', (evt) => {
  touchendX = evt.changedTouches[0].screenX;
  handleSwipe();
  let isScrolling;
  // Clear our timeout throughout the scroll
  window.clearTimeout( isScrolling );

  // Set a timeout to run after scrolling ends
  isScrolling = setTimeout(function() {

    // Run the callback
    touchmove = true;

  }, 4000);
    touchendX = evt.changedTouches[0].screenX;
    if (
      _guide.style.display != `flex` &&
      sideScroll == false
    )
      handleSwipe();
  },
  { passive: true }
);

_container.addEventListener('wheel', (e) => {
  if (
    document.body.contains(_channel) &&
    sideScroll
  )
    _channel.scrollLeft += e.deltaY /4;
})



_container.addEventListener('click', (evt) => {
    if (
      evt.target.classList.contains(`construct`) ||
      evt.target.classList.contains(`download`) ||
      evt.target.classList.contains(`picture`) ||
      evt.target.classList.contains(`source`) ||
      evt.target.classList.contains(`bottom`) ||
      evt.target.classList.contains(`header`) ||
      evt.target.classList.contains(`select`) ||
      evt.target.classList.contains(`result`) ||
      evt.target.classList.contains(`center`) ||
      evt.target.classList.contains(`post`) ||
      evt.target.classList.contains(`site`) ||
      evt.target.classList.contains(`wrap`) ||
      evt.target.classList.contains(`pub`) ||
      evt.target.classList.contains(`ago`) ||
      evt.target.classList.contains(`cat`) ||
      evt.target.classList.contains(`sel`) ||
      evt.target.classList.contains(`btn`) ||
      evt.target.id == `container` ||
      evt.target.id == `search` ||
      evt.target.id == `option` ||
      evt.target.id == `visit` ||
      evt.target.id == `group` ||
      evt.target.id == `main` ||
      evt.target.id == `hide` ||
      evt.target.id == `page` ||
      evt.target.id == `xml` ||
      evt.target.id == `air` ||
      evt.target.id == `top` ||
      evt.target.id == `arm`
    ) {
      if (
        _view.getAttribute(`placeholder`) == `Search` ||
        _match.style.display === `block`
      ) {
        _main.querySelector(`#input .icon`).classList.remove(`slide`);
        _view.setAttribute(`placeholder`, ``);
        _view.style.textAlign = `center`;
        _view.style.paddingLeft = `10px`;
        _match.style.display = `none`;
        _view.value = `Search`;
        _view.blur();
        return false;
      } else if (_first.style.display === `block`) {
        if (!quickFeeds) _show.style.visibility = `visible`;
        _options.style.visibility = `visible`;
        _social.style.visibility = `visible`;
        _under.style.visibility = `visible`;
        _label.style.visibility = `visible`;
        _quick.style.visibility = `visible`;
        _link.style.visibility = `visible`;
        _first.style.display = `none`;
        _guest.blur();
        return false;
      }
      evt.stopPropagation();
    }
    else if (
      evt.target.classList.contains(
        `notify`
      )
    ) {
      _notify.classList.remove(`notify`);
      _notify.style.display = `none`;
    }
    else if (
      evt.target.classList.contains(
        `fa-git`
      )
    )
      repository.blank();
    else if (
      evt.target.classList.contains(
        `fa-amazon`
      )
    )
      amazon.blank();
    else if (
      evt.target.classList.contains(
        `fa-reddit-alien`
      )
    )
      reddit.blank();
    else if (
      evt.target.classList.contains(
        `fa-twitter`
      )
    )
      twitter.blank();
    else if (
      evt.target.classList.contains(
        `fa-pinterest`
      )
    )
      pinterest.blank();
    else if (
      evt.target.classList.contains(
        `fa-instagram`
      )
    )
      instagram.blank();
    else if (
      evt.target.classList.contains(
        `fa-facebook-f`
      )
    )
      facebook.blank();
    else if (
      evt.target.classList.contains(
        `fa-youtube`
      )
    )
      youtube.blank();
    else if (
      evt.target.classList.contains(
        `fa-wordpress`
      )
    )
      wordpress.blank();
    else if (
      evt.target.classList.contains(
        `fa-github`
      )
    )
      repository.blank();
    else if (
      evt.target.classList.contains(`fa-sun`) ||
      evt.target.id == `toggle`
    ) {
      var iteration = themes.findIndex((item) => item.obFn === set);
      if (iteration == themes.length - 1) iteration = -1;
      iteration = iteration + 1;
      set = themes[iteration].obFn;
      window[set]();
      notifyOption(themes[iteration].obFn, `fa-check-circle`);
    }
    evt.stopPropagation();
    evt.preventDefault();
  },
  false
);
