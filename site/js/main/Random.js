let Random = function() {
  random = [];
  for (
    i = 0;
    i <= menu.length - 1;
    i++
  ) {
    if (
      menu[i] &&
      onlyImages &&
      menu[i].media
    )
      random.push(
        menu.indexOf(
          menu[i]
        )
      );
    else if (
      !onlyImages
    )
      random.push(
        menu[i]
      );
  }
}
