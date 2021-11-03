let Feed = function (Value) {
  if (
    Value
  ) {
    _quick.style.zIndex = `1`;
    _quick
      .querySelectorAll(
        `.feed`
      )
        .forEach((a) =>
          a.style.display =
          `block`
        )

    _link.querySelector(`.fa-angle-up`).classList.remove(`rotateReverse`);
    _link.querySelector(`.fa-angle-up`).classList.add(`rotate`);

    _quick.classList.remove(`invisible`);
    _front.classList.add(`toggleHidden`);
    _options.classList.add(`invisible`);
    _front.classList.remove(`toggle`);
    _quick.classList.add(`visible`);
    _show.style.visibility=`hidden`;
    _under.style.display = `none`;

    if (
      window.innerWidth <= 425
    )
    _sb.style.top = `-10px`;
  }

  else if (
    !Value
  ) {

    _options.classList.remove(`invisible`);
    _quick.style.zIndex = `-1`;

    _quick
      .querySelectorAll(
        `.feed`
      )
        .forEach((a) =>
          a.style.display =
          `none`
        )

    _link.querySelector(`.fa-angle-up`).classList.add(`rotateReverse`);
    _link.querySelector(`.fa-angle-up`).classList.remove(`rotate`);
    _sb.style.top = `10px`;

    if (
      !onlySearch
    )
      _under.style.display = `inline-flex`;

    _front.classList.remove(`toggleHidden`);
    _quick.classList.remove(`visible`);
    _quick.classList.add(`invisible`);
    _show.style.visibility=`visible`;
    _front.classList.add(`toggle`);

  }
};
