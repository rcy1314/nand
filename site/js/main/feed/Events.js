_quick.addEventListener('touchstart', (evt) => {
    quickFeedAsset(8);
  },
  { passive: true }
);

_container.addEventListener('click', (evt) => {
    if (
      evt.target.classList.contains(`fa-plus`) ||
      evt.target.classList.contains(`right`)
    ) {
      quickFeedAsset(6);
      let leftPos = _feed.scrollLeft;
      _feed.scrollLeft = leftPos + _feed.clientWidth;
      if (_feed.scrollLeft >= 0)
        document.querySelector(`.left`).style.display = `block`;
    }
    else if (
      evt.target.classList.contains(`fa-minus`) ||
      evt.target.classList.contains(`left`)
    ) {
      let leftPos = _feed.scrollLeft;
      _feed.scrollLeft = leftPos - _feed.clientWidth;
      if (_feed.scrollLeft - _feed.clientWidth <= 0)
        document.querySelector(`.left`).style.display = `none`;
    }
    else if (
      evt.target.classList.contains(
        `asset`
      )
    )
      Request(evt.target.getAttribute(`aria-object`));
      else if (
        evt.target.classList.contains(
          `option`
        )
      ) {
        if (tap == 0) {
          tap = new Date().getTime();
          setTimeout(function () {
            tap = 0;
          }, 350);
        } else {
          if (new Date().getTime() - tap < 350) {
            let i = exclude.indexOf(evt.target.innerHTML);
            exclude.splice(i, 1);
            evt.target.remove();
            if (exclude.length == 0)
              document.querySelector(`.exclude`).style.height = `70px`;
            else
              document.querySelector(`.exclude`).style.height = `${
                exclude.length * 34.25 + 65
              }px`;
            tap = 0;
          }
        }
      }
      else if (
        evt.target.classList.contains(`fa-angle-up`) ||
        evt.target.id == `link` ||
        evt.target.id == `show`
      ) {
        quickFeeds = quickFeeds != true;
        quickFeedDisplay(quickFeeds);
      }
  },
  false
);
