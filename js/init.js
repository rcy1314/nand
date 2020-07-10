if (location.href.split('?')[1])
  if (location.href.split('?')[1].match(/^[a-z0-9\+1]+$/i) && location.href.split(
      '?')[1] != '+1') {
    if (location.href.match('\\+1')) contrast = true
    var id = location.href.split('?')[1].slice(0, 2)
    var i = menu.findIndex((item) => item.hash === id)
    var ts = parseInt(location.href.split('?')[1].slice(2), 36)
    response(true, menu[i].id.toLowerCase().replace(/\s|\/|\./g, ' '), ts)
    visual()
  }
if (location.href.match('\\+1')) contrast = true
if (location.search.split('?q=')[1]) {
  var uri = location.search.split('?q=')[1]
  uri = uri.replace(/\?\+1|\+1/, '')
  uri = (uri.match(/[^&]+/g))
  if (location.hash.substr(1).match(/\+1/g)) var post = location.hash.substr(1)
    .replace(/\+1/g, '')
  else var post = location.hash.substr(1)
  if (!uri[1]) response(true, uri[0], post)
  else if (uri[1]) response(true, uri[1], post)
}
visual()
