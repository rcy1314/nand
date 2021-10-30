let Topbar = function (Value) {
  if (
    Value
  ) {
    _view.style.display = `block`;
    _top.style.display = `block`;
  }
  else if (
    !Value
  )
    _top.style.display = `none`;
};
