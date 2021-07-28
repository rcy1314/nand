let Input = function (
  inputFilter,
  listingWrapper
) {
  let matches = [];
  let suggest = [];
  let listing = _main.querySelector(listingWrapper + ` .listing`);
  while (listing.lastChild)
    listing.removeChild(listing.lastChild);
  _main.querySelector(listingWrapper).style.display = `block`;
  if (
    inputFilter != ``
  )
    for (
      var i = menu.length - 1;
      i >= 1;
      i--
    ) {
      if (
        menu[i].description.toString().toLowerCase().match(inputFilter)
      ) {
        if (
          suggest.length - 1 === suggestionBuffer
        )
        return false;

        listing.append(
          listingIndexBuild(
            menu[i].id.match(/[^\/]+$/g),
            menu.indexOf(menu[i]),
            menu[i].image.image(),
            menu[i].category,
            menu[i].hash,
            false,
            false,
            i
          )
        );
        suggest.push(
          menu.indexOf(
            menu[i]
          )
        );
      }
    }
  for (
    let i = 1;
    i <= menu.length - 1;
    i++
  ) {
    let randomMenuObject =
    menu.indexOf(
      menu[
        Math.floor(
          Math.random() * menu.length - 1
        )
      ]
    );
    if (
      menu[randomMenuObject] &&
      menu[randomMenuObject].media == true &&
      !matches.includes(randomMenuObject)
    ) {
      matches.push(randomMenuObject);
      if (
        suggest.length - 1 +
        (matches.length - 1) ===
        suggestionBuffer
      )
        return false;
      listing.append(
        listingIndexBuild(
          menu[randomMenuObject].id.match(/[^\/]+$/g),
          menu.indexOf(menu[randomMenuObject]),
          menu[randomMenuObject].image.image(),
          menu[randomMenuObject].category,
          menu[randomMenuObject].hash,
          true,
          i
        )
      );
    }
  }
};
