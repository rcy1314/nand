document.addEventListener(
  `click`,
  function (event) {
    if (event.target.classList.contains(`buttonSearch`)) {
      if (
        _guest.value.length > 0 &&
        _guest.value != ``
      )
        _front.submit();
    }
    event.preventDefault();
  },
  false
); //:before pseudo-elements not loaded in DOM
document.addEventListener(
  `click`,
  function (event) {
    if (event.target.id == `view`) {
      _match.style.display = `block`;
      while (_match.querySelector('.listing').firstChild) {
        _match.querySelector('.listing').removeChild(
          _match.querySelector('.listing').lastChild
        );
      }
      for (i = 0; i < translations.length; i++) {
        let index = document.createElement(`div`);
        index.setAttribute(`aria-item`, translations[i]);
        index.setAttribute(`tabindex`, -1);
        index.classList.add(`index`);
        let detail = document.createElement(`div`);
        detail.classList.add(`detail`, `translation`);
        let object = document.createElement(`img`);
        object.classList.add(`hue`);
        object.src = `images/${translations[i]}.webp`;
        detail.append(object);
        let text = document.createElement(`div`);
        text.classList.add(`text`);
        text.innerHTML = `&emsp;${translations[i]}<br>&emsp;${translations[
          i
        ].grep()} sites`;
        detail.append(text);
        index.append(detail);
        _match.querySelector(`.listing`).append(index);
      }
      event.target.style.caretColor = `#e4e4e4`;
      event.target.style.paddingLeft = `30px`;
      event.target.style.textAlign = `left`;
      event.target.value = ``;
      _view.setAttribute(`placeholder`, `Search`);
      document.querySelector(`#input .icon`).classList.add(`slide`);
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
      if (_match.style.display === `block`)
        _match.style.display = `none`;
      if (_first.style.display === `block`)
        _first.style.display = `none`;
      if (
        translations.includes(
          event.target.closest(`.hover`).getAttribute(`aria-item`)
        )
      ) {
        id = 0;
        category = event.target.closest(`.hover`).getAttribute(`aria-item`);
        if (reader == true) {
          if (document.body.contains(document.querySelector(`.channel`)))
            first = false;
          randomDuplicate = [];
          xmlRequestParsing(null, null, anyRandomMenuObject());
          notifyOption(`Switched to now reading ${category}.`);
        } else {
          _top.style.display = `block`;
          if (document.body.contains(document.querySelector(`#xml`)))
            document.querySelector(`#xml`).remove();
          if (document.body.contains(document.querySelector(`#group`)))
            document.querySelector(`#group`).remove();
          populateCategoryGroup(
            event.target.closest(`.hover`).getAttribute(`aria-item`)
          );
          if (expand == true) var groupType = `list`;
          else var groupType = `blocks`;
          displayExpand(expand);
          unloading();
        }
      } else {
        if (document.body.contains(document.querySelector(`#xml`)))
          document.querySelector(`#xml`).remove();
        if (document.body.contains(document.querySelector(`#group`)))
          document.querySelector(`#group`).remove();
        _visit.style.display = `none`;
        topMenuBarDisplay(topBar);
        init();
        category =
          menu[event.target.closest(`.hover`).getAttribute(`aria-item`)]
            .category;
        xmlRequestParsing(
          null,
          null,
          event.target.closest(`.hover`).getAttribute(`aria-item`)
        );
      }
    }
    event.preventDefault();
  },
  false
); //:before pseudo-elements not loaded in DOM
document.addEventListener(
  `mouseout`,
  function (event) {
    if (event.target.classList.contains(`detail`)) {
      document
        .querySelectorAll(`.listing .index, .listing .index`)
        .forEach((a) => a.classList.remove(`hover`));
    }
  },
  false
); //:before pseudo-elements not loaded in DOM
document.addEventListener(
  `mouseover`,
  function (event) {
    if (event.target.classList.contains(`detail`)) {
      event.target.closest(`.index`).classList.add(`hover`);
    }
  },
  false
); //:before pseudo-elements not loaded in DOM
document.addEventListener(
  `keyup`,
  function (event) {
    if (event.target.id == `guest`)
      inputListingKeyup(`#first`, event.keyCode);
    else if (event.target.id == `view`)
      inputListingKeyup(`#match`, event.keyCode);
    event.preventDefault();
  },
  false
); //:before pseudo-elements not loaded in DOM
document.addEventListener(
  `submit`,
  function (event) {
    if (event.target.classList.contains(`url`)) {
      if (document.querySelector(`.imageURL`).value.length) {
        if (
          document.querySelector(`.imageURL`).value
          .match(/\b(https?:\/\/\S*?\.(?:png|jpe?g|gif))/g)
        ) {
          _main.style.backgroundImage =
          `url(${document.querySelector(`.imageURL`).value})`
          backgroundImage = document.querySelector(`.imageURL`).value
        }
      }
    } else if (event.target.classList.contains(`filter`)) {
      if (document.querySelector(`.sideFilter`).value.length) {
        init();
        topMenuBarDisplay(topBar);
        _visit.style.display = `none`;
        _toggle.style.display = `none`;
        filterInputResponse(
          false,
          false,
          document.querySelector(`.sideFilter`).value.space(),
          true
        );
        topMenuBarDisplay(topBar);
        var uri =
          `?q=${document.querySelector(`.sideFilter`).value.replace(/\s/g, `+`)}`;
        displayExpand(groupType);
        uri.state();
        unloading();
      }
    } else if (event.target.id == `search`) {
      if (
        document.body.contains(
          _match.querySelector(`.hover`)
        ) &&
        translations.includes(
            _match.querySelector(`.hover`)
            .getAttribute(`aria-item`)
        )
      ) {
        _match.style.display = `none`;
        if (document.body.contains(document.querySelector(`#xml`)))
          document.querySelector(`#xml`).remove();
        if (document.body.contains(document.querySelector(`#group`)))
          document.querySelector(`#group`).remove();
        category = _match
          .querySelector(`.hover`)
          .getAttribute(`aria-item`);
        document.title = category;
        populateCategoryGroup(category);
        if (expand == true) var groupType = `list`;
        else var groupType = `blocks`;
        displayExpand(expand);
        unloading();
      } else if (
        document.body.contains(_match.querySelector(`.hover`))
      ) {
        id = _match.querySelector(`.hover`).getAttribute(`aria-item`);
        _match.style.display = `none`;
        if (document.body.contains(document.querySelector(`#xml`)))
          document.querySelector(`#xml`).remove();
        if (document.body.contains(document.querySelector(`#group`)))
          document.querySelector(`#group`).remove();
        init();
        xmlRequestParsing(
          null,
          null,
          _match.querySelector(`.hover`).getAttribute(`aria-item`)
        );
      } else if (_view.value.length) {
        setTimeout(function() {
          let query = _view.value.space();
          query.replace(/\s/, `+`);
          let uri = `?q=${query}`;
          uri.exit();
        }, 250)
      }
    } else if (event.target.id == `front`) {
      if (_guest.value == ``)
        inputListingIndex(``, `#first`);
      if (document.body.contains(_first.querySelector(`.hover`))) {
        _first.style.display = `none`;
        if (document.body.contains(document.querySelector(`#xml`)))
          document.querySelector(`#xml`).remove();
        if (document.body.contains(document.querySelector(`#group`)))
          document.querySelector(`#group`).remove();
        id = _first.querySelector(`.hover`).getAttribute(`aria-item`);
        init();
        xmlRequestParsing(
          null,
          null,
          _first.querySelector(`.hover`).getAttribute(`aria-item`)
        );
      } else if (_guest.value.length > 0) {
        setTimeout(function(){
          let query = _guest.value.space();
          query.replace(/\s/, `+`);
          let uri = `?q=${query}`;
          uri.exit();
        }, 250)
      }
    }
    event.preventDefault();
  },
  false
); //:before pseudo-elements not loaded in DOM

var inputListingKeyup = function (Elem, keycode) {
  if (keycode === 13) return false;
  if (event.target.value.length > 1) {
    _label.style.visibility = `hidden`;
    _quick.style.visibility = `hidden`;
  }
  if (
    event.target.value.length > 3 &&
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
    document
      .querySelectorAll(_label , _quick)
      .forEach((a) => (a.style.visibility = `visible`));
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
      document.querySelector(`${Elem} .listing .hover`).focus();
      _guest.focus();
    }
  } else if (keycode === 33) {
    if (
      document.body.contains(
        document.querySelector(`${Elem} .listing .hover`)
      ) &&
      document.querySelector(`${Elem} .listing .hover`) !=
        document.querySelector(`${Elem} .listing .index:first-child`) &&
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
        .focus();
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
      _guest.focus();
    } else {
      document.querySelector(`${Elem} .listing .index`).focus();
      document
        .querySelector(`${Elem} .listing .hover`)
        .classList.remove(`hover`);
      document.querySelector(`${Elem} .listing .index`).classList.add(`hover`);
    }
  } else if (keycode === 34) {
    if (
      !document.body.contains(document.querySelector(`${Elem} .listing .hover`))
    ) {
      document.querySelector(`${Elem} .listing .index`).focus();
      document
        .querySelector(`${Elem} .listing .index`)
        .nextElementSibling.nextElementSibling.nextElementSibling
        .nextElementSibling.nextElementSibling.nextElementSibling.classList.add(
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
        .nextElementSibling.nextElementSibling.nextElementSibling.focus();
      document
        .querySelector(`${Elem} .listing .hover`)
        .nextElementSibling.nextElementSibling.nextElementSibling
        .nextElementSibling.nextElementSibling.nextElementSibling.classList.add(
          `hover`
        );
      document
        .querySelector(`${Elem} .listing .hover`)
        .classList.remove(`hover`);
      _guest.focus();
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
      document.querySelector(`${Elem} .listing .hover`).focus();
      _guest.focus();
    }
  } else if (keycode === 27) {
    _quick.style.visibility = `visible`;
    document.querySelector(Elem).style.display = `none`;
  }
  event.target.setAttribute(`tabIndex`, -1);
  event.target.focus();
};
