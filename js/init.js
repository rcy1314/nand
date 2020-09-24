if (location.href.split('?')[1] && !location.search.split('?q=')[1]) {

  var uri = location.href.split('?')[1]
  if (uri.match('\\+1')) {
    uri = uri.replace(/\?\+1|\+1/, '')
    if (!uri.match(/^[a-zA-Z0-9]+$/i)) {
      contrast = contrast != true
      op = op != true
      i = -1
      $(document)
        .ready(function() {
            visual()
      })
    } else {
      contrast = contrast != true
      op = op != true
      visual()
    }

  }

    if (uri.match(/^[a-zA-Z0-9]+$/i)){

      var id = uri.slice(0, 2)
      var i = menu.findIndex((item) => item.hash === id)
      post = parseInt(uri.slice(2), 36)

    }

      if (i === -1)

        $(document)
          .ready(function() {
            $('html body #wrapper #container #main #visit').css('visibility','visible')
        })

      else {
        $(document)

          .ready(function() {
            $('html body #wrapper #container #main #option').hide()
            $('html body #wrapper #container #main #top #arm #option').show()
            response(true,
                     false,
                     menu[i].id.space(),
                     false)

        })

      }

}

if (location.href.match('\\+1') && !i) {

  contrast = contrast != true
  op = op != true

}

if (location.search.split('?q=')[1]) {

  var uri = location.search.split('?q=')[1]
  uri = uri.replace(/\?\+1|\+1/, '')
  uri = uri.match(/[^&]+/g)
  if (location.hash.substr(1).match(/\+1/g))

    post = location.hash.substr(1).replace(/\+1/g, '')

  else post = location.hash.substr(1)

  $(document)
    .ready(function() {

        $('html body #wrapper #container #main #top').show()
        var width = $('html body #wrapper #container #main').width() / 30
        complete = setInterval(function() {
          $('#progressBar').css({
            '-webkit-transition-delay': '0s',
            '-webkit-transition': '.95s',
            '-moz-transition-delay': '0s',
            '-moz-transition': '.95s'
          }).width($('#progressBar').width() + Math.floor(Math.random() * (100 - width) + width))
        }, 750)

        if (!uri[1] && location.href.match('\\&')) response(true, false, uri[0], false)
        else if (!uri[1]) response(true, false, uri[0], true)
        else if (uri[1]) response(true, uri[0], uri[1], false)

    })

} else if (!location.search.split('?')[1]) {

        $(document)
          .ready(function() {

            $('html body #wrapper #container #main #visit').css('visibility','visible')

        })

}
