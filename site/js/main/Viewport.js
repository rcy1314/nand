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

  if (
    window.innerWidth <= 425 &&
    !onlyImages
  ) {
    display = defaultText;
    if (
      defaultText == `sideScroll`
    )
      sscroll = true;
    else
      sscroll = false;
    if (
      defaultText == `legacy`
    )
      legacy = true;
    else
      legacy = false;
    dual = false;
    flex = false;
  }
  
}
