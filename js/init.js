if (location.href.split('?')[1] &&
  location.href.split('?')[1] != '+1') {
    $(document)
    .ready(function() {
      $('#container .toggle, #main #visit #page #front').css('visibility','hidden')
      $('#main svg').css('visibility','visible')
    })

  if (location.href.split('?')[1].match(/^[a-z0-9\+1]+$/i) &&
    location.href.split('?')[1] != '+1') {
      if (location.href.match('\\+1')){
        op = op != true
        contrast = contrast != true
      }
      var id = location.href.split('?')[1].slice(0, 2)
      var i = menu.findIndex((item) => item.hash === id)
      var ts = parseInt(location.href.split('?')[1].slice(2), 36)
      if (!i) {
        $(document)
          .ready(function() {
            $('#top, #container #toggle').css('visibility', 'hidden')
            $('#main #visit #page .button, ' +
            '#main #visit #page #front input[type=text], ' +
            '#main #visit #page #front .icon')
            .css('visibility','visible')
        })
      }
      else
        response(true, false, menu[i].id.toLowerCase().replace(/\s|\/|\./g, ' '), true, ts)
  }
} else if (location.href.match('\\?\\+1')){
    op = op != true
    contrast = contrast != true
    $(document)
    .ready(function() {
      $('#main #visit #page .button, ' +
      '#main #visit #page #front input[type=text], ' +
      '#main #visit #page #front .icon')
      .css('visibility','visible')
      home()
})

} else if (location.href.match('\\+1')) {
  op = op != true
  contrast = contrast != true
  home()
} else {
    $(document)
    .ready(function() {
      $('#main #visit #page .button, ' +
      '#main #visit #page #front input[type=text], ' +
      '#main #visit #page #front .icon')
      .css('visibility','visible')
      home()
    })
}
  if (location.search.split('?q=')[1]) {
    $(document)
    .ready(function() {
      $('#main svg').css('visibility','visible')
      $('#main #visit #page #front, #toggle').css('visibility','hidden')
    })

    if (location.href.match('\\+1')){
      op = op != true
      contrast = contrast != true
    }
    var uri = location.search.split('?q=')[1]
    uri = uri.replace(/\?\+1|\+1/, '')
    uri = (uri.match(/[^&]+/g))
    if (location.hash.substr(1).match(/\+1/g))
      var post = location.hash.substr(1).replace(/\+1/g, '')
    else var post = location.hash.substr(1)
    if (!uri[1]) response(true, false, uri[0], true, post)
    else if (uri[1]) response(true, uri[0], uri[1], false, post)

}
