let sideBarStar = function (Elem, Value) {
  if (
    Value
  ) {
    Elem.nextElementSibling.classList.remove(`fa-minus`)
    Elem.nextElementSibling.classList.add(`fa-splotch`)
  }
  else if (
    !Value
  ) {
    Elem.nextElementSibling.classList.remove(`fa-splotch`)
    Elem.nextElementSibling.classList.add(`fa-minus`)
  }
}
