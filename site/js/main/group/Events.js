_container.addEventListener('click', (evt) => {
    if (
      evt.target.classList.contains(`under`)
    ) {
      stageGroup();
      category = evt.target.getAttribute(`aria-item`);
      if (evt.target.getAttribute(`aria-item`) == `Assets`)
        populateAssets();
      else populateCategoryGroup(evt.target.getAttribute(`aria-item`));
  } else if (
    evt.target.getAttribute(`aria-item`) == `Assets`
  )
    populateAssets();
    else if (
      evt.target.classList.contains(
        `fa-expand-alt`
      )
    ) {
      _sb.style.display = `none`;
      stageGroup();
      if (category == `Assets`)
        setTimeout(function () {
          populateAssets();
          topMenuBarDisplay(topBar);
          displayExpand(expand);
          unloading();
        }, 25)
      else populateCategoryGroup(category);
    }
  },
  false
);
