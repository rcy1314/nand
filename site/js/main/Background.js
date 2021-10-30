let Background = function() {
  if (
    backgroundImage[0].element
      ===
    `container`
  )
    _container
      .style
        .backgroundImage
      =
    `url(${backgroundImage[0].path})`;

  else if (
    backgroundImage[0]
      .element
      ===
    `main`
  )
    _main
      .style
        .backgroundImage
      =
    `url(${backgroundImage[0].path})`;

  _container
    .style
      .backgroundPosition
    =
  `${backgroundImage[0].position}`;

  _main
    .style
      .backgroundPosition
    =
    `${backgroundImage[0].position}`;

  _container
    .style
      .backgroundSize
    =
  `${backgroundImage[0].size}`;

  _main
    .style
      .backgroundSize
    =
  `${backgroundImage[0].size}`;

}
