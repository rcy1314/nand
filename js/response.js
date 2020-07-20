var response = function(passthrough, uri, n, bloat, post) {

  filter = []
  $('#main .result, #main .air, #main .center, #main .content').remove()
  $('#main #visit').show()
  if ($('#main .result').length < 1)
    $('#main').append(
      "<div class='result' style='display:none'></div>"
    )
  if (n) var n = n.replace(/%20|\-|\_|\s|\+/g, ' ')
  if (uri) uri = uri.replace(/%20|\-|\_|\s|\+/g, ' ')
  else uri = n
  $(document).ready(function() {
    for (var i = 1; i <= menu.length - 1; i++) {
      if (menu[i].hash == n) {
        filter.push(menu.indexOf(menu[i]))
        write(menu.indexOf(menu[i]))
        exact = i
        id = i
      } else if (menu[i].id.toLowerCase().replace(/(\/|\.)/g, ' ') == n.toLowerCase() ||
          menu[i].id.toLowerCase().replace(/(\/|\.)/g, ' ') == uri.toLowerCase()) {
            filter.push(menu.indexOf(menu[i]))
            write(menu.indexOf(menu[i]))
            var exact = i
            id = i
      } else if (menu[i].id.toLowerCase().replace(/(\/|\.)/g, ' ').match(n.toLowerCase()) ||
          menu[i].id.toLowerCase().replace(/(\/|\.)/g, ' ').match(uri.toLowerCase())) {
            filter.push(menu.indexOf(menu[i]))
            write(menu.indexOf(menu[i]))
            id = i
      } else if (menu[i].des.toLowerCase().replace(/(\/|\.)/g, ' ').match(n.toLowerCase()) ||
          menu[i].des.toLowerCase().replace(/(\/|\.)/g, ' ').match(uri.toLowerCase())) {
            filter.push(menu.indexOf(menu[i]))
            write(menu.indexOf(menu[i]))
      } else if (menu[i].cat.toLowerCase().match(n) || menu[i].cat.toLowerCase().match(uri)) {
        filter.push(menu.indexOf(menu[i]))
        write(menu.indexOf(menu[i]))
      }
    }
    if (!id) id = filter[filter.length - 1]
    if (passthrough == true) {
      if ($.isNumeric(exact)) {
        xml(null, null, exact, post)
        return false
      } else if ($.isNumeric(id) && filter.length == 1) {
        xml(null, null, id, post)
        return false
      } else if (!$.isNumeric(exact) && filter.length == 0) {
        xml('search', n, 0, null)
        return false
      }
    }
    if (bloat == true) {
      populate(id)
      air(id)
    }
    progress(true, 100)
  })

}
