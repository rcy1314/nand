_quick
  .addEventListener(
    'touchstart', (evt) =>
    {
      quickFeedAsset(8);
    },
    {
      passive: true
    }
);

_container
  .addEventListener(
    'click', (evt) =>
    {

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
  },
  {
    passive: false
  }
);
