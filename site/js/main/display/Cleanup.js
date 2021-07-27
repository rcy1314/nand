let Cleanup = function () {

  while (
    _air.firstChild
  )
    _air.removeChild(
      _air.lastChild
    );

  while (
    _result.firstChild
  )
    _result.removeChild(
      _result.lastChild
    );

  while (
    _channel.firstChild
  )
    _channel.removeChild(
      _channel.lastChild
    );

  while (
    _status.firstChild
  )
    _status.removeChild(
      _status.lastChild
    );

  while (
    _suggestions.firstChild
  )
    _suggestions.removeChild(
      _suggestions.lastChild
    );

}
