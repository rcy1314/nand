let Filter = function (filterURI) {
  if (
    translations.includes(
      filterURI.toString().capitalize()
    )
  ) {
    setTimeout(
      function() {
        Category(filterURI.toString().capitalize());
      }, 200
    )
    unloading();
    return false;
  }
  let exact =
    menu.findIndex(
      (item) =>
        item.id.toLowerCase().space() ===
          filterURI.toString().toLowerCase().space()
  );
  let match = menu.findIndex(
    (item) =>
      item.id.toLowerCase().space().match(
        filterURI.toString().toLowerCase().space()
      )
  );
  let description =
    menu.filter(
      function (item) {
        return item.description.space().toLowerCase()
          .match(filterURI.toString().toLowerCase().space()
        );
      }
    )
  if (
    description.length > 0 &&
    exact === -1 &&
    match
  ) {
    Group();
    for (
      let i = 0;
      i <= description.length - 1;
      i++
    )
      Write(
        menu.indexOf(
          description[i]
        )
      );
    Assets();
    displayExpand(expand);
    unloading();
  } else if (exact > -1) Request(exact)
  else return false;
};
