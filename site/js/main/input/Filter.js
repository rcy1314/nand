let filterInputResponse = function (filterURI) {
  if (
    translations.includes(
      filterURI.toString().capitalize()
    )
  ) {
    setTimeout(
      function() {
        populateCategoryGroup(filterURI.toString().capitalize());
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
    stageGroup();
    for (
      let i = 0;
      i <= description.length - 1;
      i++
    )
      writeFilterResponse(
        menu.indexOf(
          description[i]
        )
      );
    populateAssets();
    displayExpand(expand);
    unloading();
  } else if (exact > -1) Request(exact)
  else return false;
};
