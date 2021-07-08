document.addEventListener('click', (evt) => {
    if (
      event.target.classList.contains(`buttonSearch`) ||
      event.target.classList.contains(`button`)
    ) {
      if (_guest.value.length > 0) {
        filterInputResponse(_guest.value);
        topMenuBarDisplay(topBar);
      }
    }
    event.preventDefault();
  },
  false
);
_view.addEventListener('keyup', (evt) => {
      if (event.target.value.length >= 1 && event.target.value != `Search`)
      return false
      else {
        _match.style.display = `none`;
        while (_match.querySelector(".listing").firstChild) {
          _match
            .querySelector(".listing")
            .removeChild(_match.querySelector(".listing").lastChild);
        }
        document.querySelector(`#input .icon`).classList.add(`slide`);
        _view.setAttribute(`placeholder`, `Search`);
        event.target.style.paddingLeft = `25px`;
        event.target.style.textAlign = `left`;
        event.target.value = ``;
      }
    event.preventDefault();
  },
  false
);
_top.addEventListener('click', (evt) => {
    if (event.target.id == `view`) {
      _match.style.display = `none`;
      while (
        _match.querySelector(".listing").firstChild
      ) {
        _match
          .querySelector(".listing")
          .removeChild(_match.querySelector(".listing").lastChild);
      }
      _main.querySelector(`#input .icon`).classList.add(`slide`);
      _view.setAttribute(`placeholder`, `Search`);
      event.target.style.paddingLeft = `20px`;
      event.target.style.textAlign = `left`;
      event.target.value = ``;
    }
    event.preventDefault();
  },
  false
);
document.addEventListener('click', (evt) => {
    if (event.target.classList.contains(`sideFilter`))
      event.target.value = ``;
    if (
      event.target.classList.contains(`textMatch`) ||
      event.target.classList.contains(`buffer`) ||
      event.target.classList.contains(`detail`) ||
      event.target.classList.contains(`input`) ||
      event.target.classList.contains(`hover`)
  ) {
    if (
      document.body.contains
      (
        document.querySelector(`[aria-object='${_match.querySelector(`.hover`).getAttribute(`aria-item`)}']`)
      ) || flexBox == false
    )
      _main.querySelector(`#xml`).remove();
        if (
          document.body.contains(
            _main.querySelector(`#group`)
          )
        )
          _main.querySelector(`#group`).remove();
        xmlRequestParsing(
          event.target.closest(`.index`).getAttribute(`aria-item`)
        );
        touchmove = true;
        _visit.style.display = `none`;
        topMenuBarDisplay(topBar);
      _match.style.display = `none`;
      _first.style.display = `none`;
    }
    event.preventDefault();
  },
  false
);
_main.addEventListener('mouseout', (evt) => {
    if (event.target.classList.contains(`detail`))
      _main
        .querySelectorAll(`.listing .index, .listing .index`)
        .forEach(
          (a) => a.classList.remove(`hover`)
        );
  },
  false
);
_main.addEventListener('mouseover', (evt) => {
    if (event.target.classList.contains(`detail`))
      event.target.closest(`.index`).classList.add(`hover`);
  },
  false
);
_main.addEventListener('keyup', (evt) => {
      if (event.target.id == `guest`) inputListingKeyup(`#first`, event.keyCode);
    if (event.target.id == `view`) inputListingKeyup(`#match`, event.keyCode);
    event.preventDefault();
  },
  false
);
document.addEventListener('submit', (evt) => {
  _toggle.style.display = `none`
    if (
      event.target.classList.contains(`min`)
    ) {
      if (
        _sidebar.querySelector(`.excludeInput`).value.length
      ) {
        exclude.push(
          _sidebar.querySelector(`.excludeInput`).value
        );
        const has = exclude.map((a) => a.toLowerCase());
        if (
          document.body.contains(
            _main.querySelector(`#xml`)
          )
        ) {
          _main.querySelectorAll(`.pub`).forEach(
            (a) => has.filter(
              function (obj) {
                if (
                  a.innerHTML.toLowerCase().match(obj)
                )
                  a.closest(`.item`).remove();
              }
            )
          );
        }
        if (
          !_sidebar.querySelector(`.option`)
        ) {
          let option = document.createElement(`div`);
          option.classList.add(`option`);
          option.innerHTML = _sidebar.querySelector(`.excludeInput`).value;
          event.target.parentNode.insertBefore(option, event.target);
        } else {
          let option = document.createElement(`div`);
          option.innerHTML = _sidebar.querySelector(`.excludeInput`).value;
          option.classList.add(`option`);
          parse.parentNode.insertBefore(
            option, document.querySelector(`.option`)
          );
        }
        _sidebar.querySelector(`.excludeInput`).value = ``;
        _sidebar.querySelector(`.exclude`).style.height =
        `
        ${
          exclude.length * 35 + 70
        }px`;
      }
    } else if (
      event.target.classList.contains(`url`)
    ) {
      if (
        _sidebar.querySelector(`.imageURL`).value.length
      ) {
        if (
          _sidebar
            .querySelector(`.imageURL`)
            .value.match(
              /\b(?:png|jpe?g|gif|webp)/g
            )
        ) {
          if (backgroundImage[0].element == `container`) {
            _container.style.backgroundImage =
            `url(
              ${
              _sidebar.querySelector(`.imageURL`).value
              }
            )`;
            _main.style.backgroundImage = `url()`;
          } else if (backgroundImage[0].element == `main`) {
            _main.style.backgroundImage = `
            url(
              ${
              _sidebar.querySelector(`.imageURL`).value
              }
            )`;
            _container.style.backgroundImage = `url()`;
          }
        }
      }
    } else if (
      event.target.classList.contains(`sideBasic`)
    ) {
      if (
        _sidebar.querySelector(`.sideFilter`).value.length
      ) {
        if (
          document.body.contains(
            _main.querySelector(`#xml`)
          )
        )
          _main.querySelector(`#xml`).remove();
      if (
        document.body.contains(
          _main.querySelector(`#group`)
        )
      )
        _main.querySelector(`#group`).remove();
        filterInputResponse(
          _sidebar.querySelector(`.sideFilter`).value.space(),
        );
        _toggle.style.display = `none`;
        topMenuBarDisplay(topBar);
      }
    } else if (event.target.id == `search`) {
      if (
        document.body.contains(
          _match.querySelector(`.hover`)
        ) &&
        translations.includes(
          _match.querySelector(`.hover`).getAttribute(`aria-item`)
        )
      ) {
        if (
          document.body.contains(
            _main.querySelector(`#xml`)
          )
        )
          _main.querySelector(`#xml`).remove();
        if (
          document.body.contains(
            _main.querySelector(`#group`)
          )
        )
          document.querySelector(`#group`).remove();
        category = _match.querySelector(`.hover`).getAttribute(`aria-item`);
        if (expand == true) var groupType = `list`;
        else var groupType = `blocks`;
        populateCategoryGroup(category);
        _match.style.display = `none`;
        displayExpand(expand);
      } else if (
        document.body.contains(
          _match.querySelector(`.hover`)
        )
      ) {
        if (
          document.body.contains
          (
            document.querySelector(`[aria-object='${_match.querySelector(`.hover`).getAttribute(`aria-item`)}']`)
          ) || flexBox == false
        )
          _main.querySelector(`#xml`).remove();
        else if (
            document.body.contains(
              _main.querySelector(`#group`)
            )
          )
            _main.querySelector(`#group`).remove();
          touchmove = true;
          xmlRequestParsing(
            _match.querySelector(`.hover`).getAttribute(`aria-item`)
          )
        _match.style.display = `none`;
      } else if (_view.value.length) {
        if (location.href.split(`?`)[0]) location.href.split(`?`)[0].state();
        if (
          document.body.contains(
            _main.querySelector(`#xml`)
          )
        )
          _main.querySelector(`#xml`).remove();
        if (
          document.body.contains(
            _main.querySelector(`#group`)
          )
        )
          _main.querySelector(`#group`).remove();
        filterInputResponse(_view.value);
      }
      _match.style.display = `none`;
    } else if (event.target.id == `front`) {
      if (_guest.value == ``) inputListingIndex(``, `#first`);
      if (
        document.body.contains(
          _first.querySelector(`.hover`)
        )
      ) {
        _label.style.visibility = `visible`;
        _quick.style.visibility = `visible`;
        _show.style.visibility = `visible`;
        _link.style.visibility = `visible`;
        _first.style.display = `none`;
        xmlRequestParsing(
          _first.querySelector(`.hover`).getAttribute(`aria-item`)
        );
      } else if (_guest.value.length > 0) filterInputResponse(_guest.value);
      _options.style.visibility = `visible`;
      _social.style.visibility = `visible`;
      _label.style.visibility = `visible`;
      _quick.style.visibility = `visible`;
      _show.style.visibility = `visible`;
      _link.style.visibility = `visible`;
      _first.style.display = `none`;
    }
    event.preventDefault();
  },
  false
);
/*
  nextElementSibling and previousElementSibling uses [pg] up, and [pg] down
  I found no other way of checking for errors in the function on these keys
*/

var inputListingKeyup = function (
  Elem,
  keycode
) {
  if (keycode === 13) return false;
  if (event.target.value.length >= 0) {
    _options.style.visibility = `hidden`;
    _social.style.visibility = `hidden`;
    _label.style.visibility = `hidden`;
    _quick.style.visibility = `hidden`;
    _show.style.visibility = `hidden`;
    _link.style.visibility = `hidden`;
  }
  if (
    event.target.value.length > 2 &&
    keycode !== 40 &&
    keycode !== 34 &&
    keycode !== 33 &&
    keycode !== 38 &&
    keycode !== 27
  )
    inputListingIndex(
      event.target.value.toLowerCase(),
      Elem
    );
  else if (
    event.target.value.length > 2 &&
    keycode === 8
  )
    inputListingIndex(
      event.target.value.toLowerCase(),
      Elem
    );
  else if (
    event.target.value.length < 2 &&
    keycode === 8
  ) {
    _main.querySelector(Elem).style.display = `none`;
    _options.style.visibility = `visible`;
    _social.style.visibility = `visible`;
    _label.style.visibility = `visible`;
    _quick.style.visibility = `visible`;
    _show.style.visibility = `visible`;
    _link.style.visibility = `visible`;
  } else if (keycode === 40) {
    if (
      !document.body.contains(
        _main.querySelector(
          `${Elem} .listing .hover`
        )
      )
    ) {
      _main
        .querySelector(
          `${Elem} .listing .index:first-child`
        )
        .classList.add(`hover`);
    } else if (
      document.body.contains(
        _main.querySelector(
          `${Elem} .listing .hover`
        ).nextElementSibling
      )
    ) {
      _main
        .querySelector(
          `${Elem} .listing .hover`
        ).nextElementSibling.classList.add(`hover`);
      _main
        .querySelector(
          `${Elem} .listing .hover`
        ).classList.remove(`hover`);
    }
  } else if (keycode === 33) {
    if (
      document.body.contains(
        _main.querySelector(
          `${Elem} .listing .hover`
        )
      ) &&
      _main.querySelector(
        `${Elem} .listing .hover`
      ) !=
        _main.querySelector(
          `${Elem} .listing .index:first-child`
        ) &&
      _main.querySelector(
        `${Elem} .listing .index:first-child`
      ) &&
      _main.querySelector(
        `${Elem} .listing .hover`
      ).previousElementSibling !=
        _main.querySelector(
          `${Elem} .listing .index:first-child`
        ) &&
      _main.querySelector(
        `${Elem} .listing .hover`
      ).previousElementSibling.previousElementSibling !=
        document.querySelector(
          `${Elem} .listing .index:first-child
          `
        ) &&
      _main.querySelector(
        `${Elem} .listing .hover`
      ).previousElementSibling.previousElementSibling.previousElementSibling !=
        document.querySelector(
          `${Elem} .listing .index:first-child`
        ) &&
      _main.querySelector(
        `${Elem} .listing .hover`
      ).previousElementSibling.previousElementSibling.previousElementSibling
        .previousElementSibling !=
      _main.querySelector(
        `${Elem} .listing .index:first-child`
      ) &&
      _main.querySelector(
        `${Elem} .listing .hover`
      ).previousElementSibling.previousElementSibling.previousElementSibling
        .previousElementSibling.previousElementSibling !=
        _main.querySelector(
          `${Elem} .listing .index:first-child`
        )
    ) {
      _main
        .querySelector(
          `${Elem} .listing .hover`
        )
          .previousElementSibling.previousElementSibling.previousElementSibling
          .previousElementSibling.previousElementSibling.previousElementSibling
          .classList.add(
            `hover`
          );
      _main
        .querySelector(
          `${Elem} .listing .hover`
        )
          .nextElementSibling.nextElementSibling.nextElementSibling
          .nextElementSibling.nextElementSibling.nextElementSibling
          .classList.remove(
            `hover`
          );
    } else {
      _main
        .querySelector(
          `${Elem} .listing .hover`
        ).classList.remove(`hover`);
      _main.querySelector(
        `${Elem} .listing .index`
      ).classList.add(`hover`);
    }
  } else if (keycode === 34) {
    if (
      !document.body.contains(
        _main.querySelector(
          `${Elem} .listing .hover`
        )
      )
    ) {
      _main
        .querySelector(
          `${Elem} .listing .index`
        )
          .nextElementSibling.nextElementSibling.nextElementSibling
          .nextElementSibling.nextElementSibling.nextElementSibling
          .classList.add(
            `hover`
          );
    } else if (
      _main.querySelector(
        `${Elem} .listing .hover`
      ) !=
        _main.querySelector(
          `${Elem} .listing .index:last-child`
        ) &&
      _main.querySelector(
        `${Elem} .listing .hover`
      ).nextElementSibling !=
        _main.querySelector(
          `${Elem} .listing .index:last-child`
        ) &&
      _main.querySelector(
        `${Elem} .listing .hover`
      ).nextElementSibling.nextElementSibling !=
        _main.querySelector(
          `${Elem} .listing .index:last-child`
        ) &&
      _main.querySelector(
        `${Elem} .listing .hover`
      ).nextElementSibling.nextElementSibling.nextElementSibling !=
        _main.querySelector(
          `${Elem} .listing .index:last-child`
        ) &&
      _main.querySelector(
        `${Elem} .listing .hover`
      ).nextElementSibling.nextElementSibling.nextElementSibling
        .nextElementSibling !=
        _main.querySelector(
          `${Elem} .listing .index:last-child`
        ) &&
      _main.querySelector(
        `${Elem} .listing .hover`
      ).nextElementSibling.nextElementSibling.nextElementSibling
      .nextElementSibling.nextElementSibling !=
        _main.querySelector(
          `${Elem} .listing .index:last-child`
        )
    ) {
      _main
        .querySelector(
          `${Elem} .listing .hover`
        )
          .nextElementSibling.nextElementSibling.nextElementSibling
          .nextElementSibling.nextElementSibling.nextElementSibling
          .classList.add(
            `hover`
          );
      _main
        .querySelector(
          `${Elem} .listing .hover
          `)
        .classList.remove(`hover`);
    } else {
      _main.querySelector(
        `${Elem} .listing .index:last-child`
      ).focus();
      _main
        .querySelector(
          `${Elem} .listing .hover`
        )
        .classList.remove(`hover`);
      _main
        .querySelector(
          `${Elem} .listing .index:last-child`
        )
        .classList.add(`hover`);
    }
  } else if (keycode === 38) {
    if (
      !document.body.contains(
        _main.querySelector(
          `${Elem} .listing .hover`
        )
      )
    ) {
      _main
        .querySelector(
          `${Elem} .listing .index:first-child`
        )
        .classList.add(`hover`);
    } else if (
      document.body.contains(
        _main.querySelector(
          `${Elem} .listing .hover`
        ).previousElementSibling
      )
    ) {
      _main
        .querySelector(
          `${Elem} .listing .hover`
        ).previousElementSibling.classList.add(`hover`);
      _main
        .querySelector(
          `${Elem} .listing .hover`
        ).nextElementSibling.classList.remove(`hover`);
    }
  } else if (keycode === 27) {
    document.querySelector(Elem).style.display = `none`;
    _options.style.visibility = `visible`;
    _social.style.visibility = `visible`;
    _label.style.visibility = `visible`;
    _quick.style.visibility = `visible`;
    _show.style.visibility = `visible`;
    _link.style.visibility = `visible`;
  }
  if (
    document.body.contains(
      _main.querySelector(
        `${Elem} .listing .hover`
      )
    )
  ) {
    document
      .querySelector(
        `${Elem} .listing .hover`
      ).setAttribute(
        `tabindex`,
        -1
      );
    document.querySelector(
      `${Elem} .listing .hover`
    ).focus();
    if (Elem == `#first`) _guest.focus();
    else if (Elem == `#match`) _view.focus();
  }
};
