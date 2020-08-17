if (location.href.split('?')[1] &&
  location.href.split('?')[1] != '+1') {
    $(document)
    .ready(function() {
      $('#container .toggle, #main #visit .page #front').css('visibility','hidden')
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
      var post = parseInt(location.href.split('?')[1].slice(2), 36)
      if (!i) {
        $(document)
          .ready(function() {
            $('#top, #container #toggle').css('visibility', 'hidden')
            $('#main #visit .page .button, ' +
            '#main #visit .page #front input[type=text], ' +
            '#main #visit .page #front .icon')
            .css('visibility','visible')
        })
      }
      else
        response(true, false, menu[i].id.toLowerCase().replace(/\s|\/|\./g, ' '), true)
  }
} else if (location.href.match('\\?\\+1')){
    op = op != true
    contrast = contrast != true
    $(document)
    .ready(function() {
      $('#main #visit .page .button, ' +
      '#main #visit .page #front input[type=text], ' +
      '#main #visit .page #front .icon')
      .css('visibility','visible')
      feed('page', menu.length - 1)
})

} else if (location.href.match('\\+1')) {
  op = op != true
  contrast = contrast != true
  feed('page', menu.length - 1)
} else {
    $(document)
    .ready(function() {
      $('#main #visit .page .button, ' +
      '#main #visit .page #front input[type=text], ' +
      '#main #visit .page #front .icon')
      .css('visibility','visible')
      feed('page', menu.length - 1)
    })
}
  if (location.search.split('?q=')[1]) {
    if (location.href.match('\\+1')) {
      op = op != true
      contrast = contrast != true
      visual()
    }
    var uri = location.search.split('?q=')[1]
    uri = uri.replace(/\?\+1|\+1/, '')
    uri = (uri.match(/[^&]+/g))
    if (location.hash.substr(1).match(/\+1/g))
      post = location.hash.substr(1).replace(/\+1/g, '')
    else post = location.hash.substr(1)
    $(document)
    .ready(function() {
      if ($.inArray(translations, uri[0].capitalize()))
        $('#toggle, #handle svg').css('visibility','hidden')
    })
    if (!uri[1]) response(true, false, uri[0], true)
    else if (uri[1]) response(true, uri[0], uri[1], false)

}
