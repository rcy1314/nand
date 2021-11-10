let Viewport = function() {
  if (
    display == `flexBox` ||
    display == `duo`
  )
    offset = 6000
  else
    offset = 5000

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
