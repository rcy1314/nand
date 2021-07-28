/*
  nextElementSibling and previousElementSibling uses [pg] up, and [pg] down
  I found no other way of checking for errors in the function on these keys
*/

var Listing = function (
  Elem,
  keycode
) {
  if (keycode === 13) return false;
  if (event.target.value.length >= 0) {
    _options.style.visibility = `hidden`;
    _social.style.visibility = `hidden`;
    _under.style.visibility = `hidden`;
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
    Input(
      event.target.value.toLowerCase(),
      Elem
    );
  else if (
    event.target.value.length > 2 &&
    keycode === 8
  )
    Input(
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
    _under.style.visibility = `visible`;
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
}
