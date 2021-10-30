_guide
  .addEventListener(
    'touchstart', (evt) =>
    {
      touchstartX = evt.changedTouches[0].screenX
      touchstartY = evt.changedTouches[0].screenY;
    },
    {
      passive:
      true
    }
);

_guide
  .addEventListener(
    'touchend', (evt) =>
    {
      touchendX = evt.changedTouches[0].screenX;
      touchendY = evt.changedTouches[0].screenY;
      Touch();
    },
    {
      passive:
      true
    }
);
