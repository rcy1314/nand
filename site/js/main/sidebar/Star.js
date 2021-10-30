let Star = function (Elem, Value) {
  if (
    Value
  ) {
    Elem.nextElementSibling.classList.remove(`fa-minus`)
    Elem.nextElementSibling.classList.add(`fa-plus`)
  }
  else if (
    !Value
  ) {
    Elem.nextElementSibling.classList.remove(`fa-plus`)
    Elem.nextElementSibling.classList.add(`fa-minus`)
  }
}
