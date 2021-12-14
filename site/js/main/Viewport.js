let Viewport = function() {
  if (
    display == `flexBox` ||
    display == `duo`
  )
    offset = 6000
  else
    offset = 1000

  cycleViewport =
    viewport
    .findIndex(
      (item) =>
      item ==
      display
    )

  display == viewport[cycleViewport]

  setTimeout(
    () => {
      if (
        window.innerWidth <= 425
      )
        cropImages = true;
        cropImagesBuffer = true;
      Star(
        _sidebar.querySelector(`.cropImages`),
        cropImages
      );
    }, 300
  )

}
