let Viewport = function() {
  if (
    display == `flexBox` ||
    display == `duo`
  )
    offset = 999999999
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

  if (
    display == `sideScroll`
  )
    cropImages == true;
}
