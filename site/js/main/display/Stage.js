let cleanup = function () {
  while (_air.firstChild)
    _air.removeChild(_air.lastChild);
  while (_result.firstChild)
    _result.removeChild(_result.lastChild);
  while (_channel.firstChild)
    _channel.removeChild(_channel.lastChild);
  while (_status.firstChild)
    _status.removeChild(_status.lastChild);
  while (_suggestions.firstChild)
    _suggestions.removeChild(_suggestions.lastChild);
}

let stageVisit = function () {
  _visit.style.display = `block`;
  _group.style.display = `none`;
  _xml.style.display = `none`;
  _group.style.zIndex = `-1`;
  _visit.style.opacity = `1`;
  _visit.style.zIndex = '1';
  _xml.style.zIndex = `-1`;
  cleanup();
}

let stageGroup = function () {
  _group.style.display = `block`;
  _visit.style.display = `none`;
  _xml.style.display = `none`;
  _group.style.zIndex = `1`;
  _xml.style.zIndex = `-1`
  cleanup();
}

let stageXML = function () {
  _visit.style.display = `none`;
  _group.style.display = `none`;
  _xml.style.display = `block`;
  _group.style.zIndex = `-1`
  _xml.style.zIndex = `1`;
  cleanup();
}
