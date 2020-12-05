document.addEventListener(
  `click`,
  function (event) {
    if (
      event.target.classList.contains(`buttonSearch`) ||
      event.target.classList.contains(`button`)
    ) {
      if (_guest.value.length > 0) {
        topMenuBarDisplay(topBar);
        filterInputResponse(_guest);
      }
    }
    event.preventDefault();
  },
  false
);
document.addEventListener(
  `click`,
  function (event) {
    if (event.target.id == `view`) {
      _match.style.display = `none`;
      while (_match.querySelector(".listing").firstChild) {
        _match
          .querySelector(".listing")
          .removeChild(_match.querySelector(".listing").lastChild);
      }
      document.querySelector(`#input .icon`).classList.add(`slide`);
      _view.setAttribute(`placeholder`, `Search`);
      event.target.style.caretColor = `#e4e4e4`;
      event.target.style.paddingLeft = `30px`;
      event.target.style.textAlign = `left`;
      event.target.value = ``;
    }
    event.preventDefault();
  },
  false
);
document.addEventListener(
  `click`,
  function (event) {
    if (event.target.classList.contains(`sideFilter`)) {
      event.target.value = ``;
    }
    if (event.target.classList.contains(`detail`)) {
      if (_match.style.display === `block`) _match.style.display = `none`;
      if (_first.style.display === `block`) _first.style.display = `none`;
      if (
        translations.includes(
          event.target.closest(`.hover`).getAttribute(`aria-item`)
        )
      ) {
        id = 0;
        category = event.target.closest(`.hover`).getAttribute(`aria-item`);
        if (Reader == true) {
          if (document.body.contains(document.querySelector(`.channel`)))
            first = false;
          randomDuplicate = [];
          xmlRequestParsing(null, null, anyRandomMenuObject());
        } else {
          if (document.body.contains(document.querySelector(`#xml`)))
            document.querySelector(`#xml`).remove();
          if (document.body.contains(document.querySelector(`#group`)))
            document.querySelector(`#group`).remove();
          populateCategoryGroup(
            event.target.closest(`.index`).getAttribute(`aria-item`).toLowerCase()
          );
          topMenuBarDisplay(topBar);
          displayExpand(expand);
          unloading();
        }
      } else {
        if (document.body.contains(document.querySelector(`#xml`)))
          document.querySelector(`#xml`).remove();
        if (document.body.contains(document.querySelector(`#group`)))
          document.querySelector(`#group`).remove();
        category =
          menu[event.target.closest(`.hover`).getAttribute(`aria-item`)]
            .category;
        xmlRequestParsing(
          null,
          null,
          event.target.closest(`.hover`).getAttribute(`aria-item`)
        );
        _visit.style.display = `none`;
        topMenuBarDisplay(topBar);
      }
    }
    event.preventDefault();
  },
  false
);
document.addEventListener(
  `mouseout`,
  function (event) {
    if (event.target.classList.contains(`detail`))
      document
        .querySelectorAll(`.listing .index, .listing .index`)
        .forEach((a) => a.classList.remove(`hover`));
  },
  false
);
document.addEventListener(
  `mouseover`,
  function (event) {
    if (event.target.classList.contains(`detail`))
      event.target.closest(`.index`).classList.add(`hover`);
  },
  false
);
document.addEventListener(
  `keyup`,
  function (event) {
    if (event.target.id == `guest`) inputListingKeyup(`#first`, event.keyCode);
    if (event.target.id == `view`) inputListingKeyup(`#match`, event.keyCode);
    event.preventDefault();
  },
  false
);
document.addEventListener(
  `submit`,
  function (event) {
    if (event.target.classList.contains(`min`)) {
      if (document.querySelector(`.excludeInput`).value.length) {
        exclude.push(document.querySelector(`.excludeInput`).value);
        const has = exclude.map((a) => a.toLowerCase());
        if (document.body.contains(document.querySelector(`#xml`))) {
          _main.querySelectorAll(`.pub`).forEach((a) =>
            has.filter(function (obj) {
              if (a.innerHTML.toLowerCase().match(obj))
                a.closest(`.item`).remove();
            })
          );
        }
        if (!_sidebar.querySelector(`.option`)) {
          let option = document.createElement(`div`);
          option.classList.add(`option`);
          let parse = event.target;
          option.innerHTML = document.querySelector(`.excludeInput`).value;
          event.target.parentNode.insertBefore(option, parse);
        } else {
          let parse = document.querySelector(`.option`);
          let option = document.createElement(`div`);
          option.innerHTML = document.querySelector(`.excludeInput`).value;
          option.classList.add(`option`);
          parse.parentNode.insertBefore(option, parse);
        }
        document.querySelector(`.exclude`).style.height = `${
          exclude.length * 35 + 70
        }px`;
      }
    } else if (event.target.classList.contains(`url`)) {
      if (document.querySelector(`.imageURL`).value.length) {
        if (
          document
            .querySelector(`.imageURL`)
            .value.match(/\b(?:png|jpe?g|gif|webp)/g)
        ) {
          if (
            Array.isArray(backgroundImage) &&
            typeof backgroundImage[0].path == "string" &&
            backgroundImage[0].element == `container`
          ) {
            _container.style.backgroundImage = `url(${
              document.querySelector(`.imageURL`).value
            })`;
            _main.style.backgroundImage = `url()`;
          } else if (
            Array.isArray(backgroundImage) &&
            typeof backgroundImage[0].path == "string" &&
            backgroundImage[0].element == `main`
          ) {
            _main.style.backgroundImage = `url(${
              document.querySelector(`.imageURL`).value
            })`;
            _container.style.backgroundImage = `url()`;
          }

          backgroundImage[0].path = document.querySelector(`.imageURL`).value;
        }
      }
    } else if (event.target.classList.contains(`basic`)) {
      if (document.querySelector(`.sideFilter`).value.length) {
        if (document.body.contains(document.querySelector(`#xml`)))
          document.querySelector(`#xml`).remove();
        filterInputResponse(
          document.querySelector(`.sideFilter`).value.space(),
        );
        _toggle.style.display = `none`;
        _visit.style.display = `none`;
        topMenuBarDisplay(topBar);
      }
    } else if (event.target.id == `search`) {
      if (
        document.body.contains(_match.querySelector(`.hover`)) &&
        translations.includes(
          _match.querySelector(`.hover`).getAttribute(`aria-item`)
        )
      ) {
        if (document.body.contains(document.querySelector(`#xml`)))
          document.querySelector(`#xml`).remove();
        if (document.body.contains(document.querySelector(`#group`)))
          document.querySelector(`#group`).remove();
        category = _match.querySelector(`.hover`).getAttribute(`aria-item`);
        if (expand == true) var groupType = `list`;
        else var groupType = `blocks`;
        populateCategoryGroup(category);
        _match.style.display = `none`;
        document.title = category;
        displayExpand(expand);
      } else if (document.body.contains(_match.querySelector(`.hover`))) {
        if (document.body.contains(document.querySelector(`#xml`)))
          document.querySelector(`#xml`).remove();
        if (document.body.contains(document.querySelector(`#xml`)))
          document.querySelector(`#xml`).remove();
        if (document.body.contains(document.querySelector(`#group`)))
          document.querySelector(`#group`).remove();
        xmlRequestParsing(
          null,
          null,
          _match.querySelector(`.hover`).getAttribute(`aria-item`)
        );
        _match.style.display = `none`;
      } else if (_view.value.length) {
        if (document.body.contains(document.querySelector(`#xml`)))
          document.querySelector(`#xml`).remove();
        filterInputResponse(_view.value);
      }
      _match.style.display = `none`;
    } else if (event.target.id == `front`) {
      if (_guest.value == ``) inputListingIndex(``, `#first`);
      if (document.body.contains(_first.querySelector(`.hover`))) {
        _first.style.display = `none`;
        if (document.body.contains(document.querySelector(`#xml`)))
          document.querySelector(`#xml`).remove();
        if (document.body.contains(document.querySelector(`#group`)))
          document.querySelector(`#group`).remove();
        xmlRequestParsing(
          null,
          null,
          _first.querySelector(`.hover`).getAttribute(`aria-item`)
        );
      } else if (_guest.value.length > 0) {
        filterInputResponse(_guest.value);
        topMenuBarDisplay(topBar);
      }
    }
    event.preventDefault();
  },
  false
);

var inputListingKeyup = function (Elem, keycode) {
  if (keycode === 13) return false;
  if (event.target.value.length > 2) {
    _label.style.visibility = `hidden`;
    _quick.style.visibility = `hidden`;
    _show.style.visibility = `hidden`;
    _link.style.visibility = `hidden`;
    _just.style.visibility = `hidden`;
  }
  if (
    event.target.value.length > 2 &&
    keycode !== 40 &&
    keycode !== 34 &&
    keycode !== 33 &&
    keycode !== 38 &&
    keycode !== 27
  )
    inputListingIndex(event.target.value, Elem);
  else if (event.target.value.length > 2 && keycode === 8)
    inputListingIndex(event.target.value, Elem);
  else if (event.target.value.length < 2 && keycode === 8) {
    document.querySelector(Elem).style.display = `none`;
    _label.style.visibility = `visible`;
    _quick.style.visibility = `visible`;
    _show.style.visibility = `visible`;
    _link.style.visibility = `visible`;
    _just.style.visibility = `visible`;
  } else if (keycode === 40) {
    if (
      !document.body.contains(document.querySelector(`${Elem} .listing .hover`))
    ) {
      document
        .querySelector(`${Elem} .listing .index:first-child`)
        .classList.add(`hover`);
    } else if (
      document.body.contains(
        document.querySelector(`${Elem} .listing .hover`).nextElementSibling
      )
    ) {
      document
        .querySelector(`${Elem} .listing .hover`)
        .nextElementSibling.classList.add(`hover`);
      document
        .querySelector(`${Elem} .listing .hover`)
        .classList.remove(`hover`);
    }
  } else if (keycode === 33) {
    if (
      document.body.contains(
        document.querySelector(`${Elem} .listing .hover`)
      ) &&
      document.querySelector(`${Elem} .listing .hover`) !=
        document.querySelector(`${Elem} .listing .index:first-child`) &&
      document.querySelector(`${Elem} .listing .index:first-child`) &&
      document.querySelector(`${Elem} .listing .hover`)
        .previousElementSibling !=
        document.querySelector(`${Elem} .listing .index:first-child`) &&
      document.querySelector(`${Elem} .listing .hover`).previousElementSibling
        .previousElementSibling !=
        document.querySelector(`${Elem} .listing .index:first-child`) &&
      document.querySelector(`${Elem} .listing .hover`).previousElementSibling
        .previousElementSibling.previousElementSibling !=
        document.querySelector(`${Elem} .listing .index:first-child`) &&
      document.querySelector(`${Elem} .listing .hover`).previousElementSibling
        .previousElementSibling.previousElementSibling.previousElementSibling !=
        document.querySelector(`${Elem} .listing .index:first-child`) &&
      document.querySelector(`${Elem} .listing .hover`).previousElementSibling
        .previousElementSibling.previousElementSibling.previousElementSibling
        .previousElementSibling !=
        document.querySelector(`${Elem} .listing .index:first-child`)
    ) {
      document
        .querySelector(`${Elem} .listing .hover`)
        .previousElementSibling.previousElementSibling.previousElementSibling
        .previousElementSibling.previousElementSibling.previousElementSibling
        .classList.add(
          `hover`
        );
      document
        .querySelector(`${Elem} .listing .hover`)
        .nextElementSibling.nextElementSibling.nextElementSibling
        .nextElementSibling.nextElementSibling.nextElementSibling
        .classList.remove(
          `hover`
        );
    } else {
      document
        .querySelector(`${Elem} .listing .hover`)
        .classList.remove(`hover`);
      document.querySelector(`${Elem} .listing .index`).classList.add(`hover`);
    }
  } else if (keycode === 34) {
    if (
      !document.body.contains(document.querySelector(`${Elem} .listing .hover`))
    ) {
      document
        .querySelector(`${Elem} .listing .index`)
        .nextElementSibling.nextElementSibling.nextElementSibling
        .nextElementSibling.nextElementSibling.nextElementSibling
        .classList.add(
          `hover`
        );
    } else if (
      document.querySelector(`${Elem} .listing .hover`) !=
        document.querySelector(`${Elem} .listing .index:last-child`) &&
      document.querySelector(`${Elem} .listing .hover`).nextElementSibling !=
        document.querySelector(`${Elem} .listing .index:last-child`) &&
      document.querySelector(`${Elem} .listing .hover`).nextElementSibling
        .nextElementSibling !=
        document.querySelector(`${Elem} .listing .index:last-child`) &&
      document.querySelector(`${Elem} .listing .hover`).nextElementSibling
        .nextElementSibling.nextElementSibling !=
        document.querySelector(`${Elem} .listing .index:last-child`) &&
      document.querySelector(`${Elem} .listing .hover`).nextElementSibling
        .nextElementSibling.nextElementSibling.nextElementSibling !=
        document.querySelector(`${Elem} .listing .index:last-child`) &&
      document.querySelector(`${Elem} .listing .hover`).nextElementSibling
        .nextElementSibling.nextElementSibling.nextElementSibling
        .nextElementSibling !=
        document.querySelector(`${Elem} .listing .index:last-child`)
    ) {
      document
        .querySelector(`${Elem} .listing .hover`)
        .nextElementSibling.nextElementSibling.nextElementSibling
        .nextElementSibling.nextElementSibling.nextElementSibling
        .classList.add(
          `hover`
        );
      document
        .querySelector(`${Elem} .listing .hover`)
        .classList.remove(`hover`);
    } else {
      document.querySelector(`${Elem} .listing .index:last-child`).focus();
      document
        .querySelector(`${Elem} .listing .hover`)
        .classList.remove(`hover`);
      document
        .querySelector(`${Elem} .listing .index:last-child`)
        .classList.add(`hover`);
    }
  } else if (keycode === 38) {
    if (
      !document.body.contains(document.querySelector(`${Elem} .listing .hover`))
    ) {
      document
        .querySelector(`${Elem} .listing .index:first-child`)
        .classList.add(`hover`);
    } else if (
      document.body.contains(
        document.querySelector(`${Elem} .listing .hover`).previousElementSibling
      )
    ) {
      document
        .querySelector(`${Elem} .listing .hover`)
        .previousElementSibling.classList.add(`hover`);
      document
        .querySelector(`${Elem} .listing .hover`)
        .nextElementSibling.classList.remove(`hover`);
    }
  } else if (keycode === 27) {
    document.querySelector(Elem).style.display = `none`;
    _label.style.visibility = `visible`;
    _quick.style.visibility = `visible`;
    _show.style.visibility = `visible`;
    _link.style.visibility = `visible`;
    _just.style.visibility = `visible`;
  }
  if (
    document.body.contains(document.querySelector(`${Elem} .listing .hover`))
  ) {
    document
      .querySelector(`${Elem} .listing .hover`)
      .setAttribute(`tabindex`, -1);
    document.querySelector(`${Elem} .listing .hover`).focus();
    if (Elem == `#first`) _guest.focus();
    else if (Elem == `#match`) _view.focus();
  }
};
