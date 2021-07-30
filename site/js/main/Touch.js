_container
  .addEventListener(
    'touchstart', (evt) =>
    {
      touchmove = false;
      touchstartX = evt.changedTouches[0].screenX;
  },
  {
    passive:
      true
  }
);

_container
  .addEventListener(
    'touchend', (evt) =>
    {
      if (
        window.innerWidth > 425
      )
        Swipe();
      touchendX = evt.changedTouches[0].screenX;
      let isScrolling;

      // Clear our timeout throughout the scroll
      window.clearTimeout( isScrolling );

      // Set a timeout to run after scrolling ends
      isScrolling =
        setTimeout(
          function() {

            // Run the callback
            touchmove = true;

          },
        4000);
    if (
      _guide.style.display != `flex` &&
      display !== `sideSroll`
    )
      Swipe();
  },
  {
    passive:
    true
  }
);
