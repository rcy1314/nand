let Viewport = function() {
  if (
    display == `flexBox`
  )
    offset = 3000
  else
    offset = 550

  cycleViewport =
    viewport
    .findIndex(
      (item) =>
      item ==
      display
    )

  display == viewport[cycleViewport]

  if (
    display == `sideScroll`
  )
    cropImages == true;
}
