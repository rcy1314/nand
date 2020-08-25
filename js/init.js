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
          $('#top').css('visibility', 'hidden')
          $('#main #visit .page #front input[type=text], ' +
            '#main #visit .page #front .icon, ' +
            '#main #visit .page .button')
            .css('visibility','visible')
          $('.loader').css('visibility','hidden')
            feed('page', 40)
      })
      visual()
    } else {
      contrast = contrast != true
      op = op != true
      visual()
    }

  }

    if (uri.match(/^[a-zA-Z0-9]+$/i)){

      var id = uri.slice(0, 2)
      var i = menu.findIndex((item) => item.hash === id)
      var post = parseInt(uri.slice(2), 36)

    }

      if (i === -1)

        $(document)
          .ready(function() {
            $('#top').css('visibility', 'hidden')
            $('#main #visit .page #front input[type=text], ' +
              '#main #visit .page #front .icon, ' +
              '#main #visit .page .button')
              .css('visibility','visible')
              feed('page', 40)
        })

      else {

        $(document)
          .ready(function() {
          $('#toggle, #handle img, #main .quick').css('visibility','hidden')
          $('#main #visit .page #front input[type=text], ' +
            '#main #visit .page #front .icon, ' +
            '#main #visit .page .button')
              .css('visibility','hidden')
          $('.loader').css('visibility','visible')

        })

        response(true,
                 false,
                 menu[i].id.response(),
                 true)

      }

}

if (location.href.match('\\+1') && !i) {

  contrast = contrast != true
  op = op != true

  $(document)
    .ready(function() {

      $('#toggle, #handle img, #main .quick').css('visibility','visible')
      $('#main #visit .page #front input[type=text], ' +
        '#main #visit .page #front .icon, ' +
        '#main #visit .page .button')
          .css('visibility','visible')
      $('.loader').css('visibility','hidden')

      feed('page', 40)

  })

}

if (location.search.split('?q=')[1]) {

  var uri = location.search.split('?q=')[1]
  uri = uri.replace(/\?\+1|\+1/, '')
  uri = (uri.match(/[^&]+/g))
  if (location.hash.substr(1).match(/\+1/g))

    post = location.hash.substr(1).replace(/\+1/g, '')

  else post = location.hash.substr(1)

  $(document)
    .ready(function() {

        $('#toggle, #handle img, #main .quick').css('visibility','hidden')
        $('#main #visit .page #front input[type=text], ' +
          '#main #visit .page #front .icon, ' +
          '#main #visit .page .button')
          .css('visibility','hidden')
        $('.loader').css('visibility','visible')

    })

  if (!uri[1]) response(true, false, uri[0], true)

  else if (uri[1]) response(true, uri[0], uri[1], false)

} else if (!location.search.split('?')[1]) {

        $(document)
          .ready(function() {

            $('#toggle, #handle img, #main .quick').css('visibility','visible')
            $('#main #visit .page #front input[type=text], ' +
              '#main #visit .page #front .icon, ' +
              '#main #visit .page .button')
                .css('visibility','visible')
            $('.loader').css('visibility','hidden')

            feed('page', 40)

        })

}
