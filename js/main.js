$(document)
  .ready(function() {
    $('#input').css('display', 'block')
    $('#main input[type=text]').attr('tabindex', -1).focus()
  })
  .on('touch click', 'a', function(e) {
    if ($(this).attr('ext'))
    $(this).attr('ext').blank()
    e.stopPropagation()
  })
  .on('touch click', '#arm, #option, #main, #visit, #container', function(e) {
    if (!$('#arm #search input[type=text]').is(':focus')) {
      $('#arm #search #input .icon').removeClass('slide')
      $('#arm #search #match').hide()
    }
    if (!$('#main #visit .page #front input[type=text]').is(':focus')) {
      $('#main #visit .page #front #first').css('visibility','hidden')
      if ($('#main #visit .page #front input[type=text]').val().length == 0 ||
          $('#main #visit .page #front input[type=text]').val() == 'Search')
      $('#main #visit .page #front .icon').removeClass('search')
    }
   })
  .on('touch click', '#main #visit #placeholder', function(e) {
    filter = []
    var uri = '?q=' + category.toLowerCase()
    uri.define().exit()
  })
  .on('touch click', '#arm #home', function(e) {
    var uri = window.location.origin
    uri.define().exit()
    e.preventDefault()
  })
  .on('touch click', '#container #toggle', function(e) {
    if (!location.href.match('\\+1') && !location.href.match('\\?\\+1')) {
      var uri = window.location.href + '?+1'
      contrast = contrast != true
      op = op != true
    } else if (location.href.match('\\?q=') && !location.href.match('\\+1')) {
      var uri = window.location.href + '?+1'
      contrast = contrast != true
      op = op != true
    } else if (location.href.match('\\?\\+1') || location.href.match('\\+1')) {
      var uri = window.location.href.replace(/\?\+1|\+1/g, '')
      contrast = false
      op = op != true
    }
    uri.state()
    visual()
  })
  .on('touch click', '#option .fa-sun', function(e) {
    if (!location.href.match('\\+1') && !location.href.match('\\?\\+1')) {
      var uri = window.location.href + '+1'
      contrast = contrast != true
      op = op != true
    } else if (location.href.match('\\?q=') && !location.href.match('\\+1')) {
      var uri = window.location.href + '+1'
      contrast = contrast != true
      op = op != true
    } else if (location.href.match('\\?\\+1') || location.href.match('\\+1')) {
      var uri = window.location.href.replace(/\?\+1|\+1/g, '')
      contrast = false
      op = op != true
    }
    uri.state()
    visual()
  })
  .on('touch click', '#option .fa-code', function(e) {
    var re = menu.indexOf(menu[Math.floor(Math.random() * menu.length)])
    var uri = '?q=' + menu[re].cat.toLowerCase() + '&' + menu[re].id.toLowerCase()
      .replace(/\s|\.|\//g, '-')
    uri.define().state()
    return false
  })
  .on('touch click', '#option .fa-terminal', function(e) {
    var array = []
    for (i = 1; i <= menu.length - 1; i++) {
      if (menu[i].cat == category) array.push(menu.indexOf(menu[i]))
    }
    var n = array[Math.floor(Math.random() * array.length)]
    var uri = '?q=&' + menu[n].id.toLowerCase()
      .replace(/(\s|\.|\/)/g, '-')
    uri.define().exit()
    return false
  })
  .on('touch click', '#main .translation .select', function(e) {
    filter = []
    category = $(this).attr('response')
    populate($(this).attr('response'))
    var uri = '?q=' + $(this).attr('response').toLowerCase()
    progress(true, 100)
    uri.define().state()
  })
  .on('touch click mouseenter mouseleave',
    '.air .filter, .result .filter, .air .populate, .result .populate',
    function(e) {
      if (op == 0 && e.type == 'mouseenter')
        $(this).toggleClass('overlay')
        $(this)
          .on('webkitAnimationEnd oanimationend msAnimationEnd animationend',
            function(e) {
              $(this).removeClass('overlay')
              void this.clientWidth
              $(this).addClass('overlay')
          })
      if (e.type == 'mouseleave') $(this).removeClass('overlay')
      if (e.type == 'touch' || e.type == 'click') {
        var uri = location.search.split('?q=')[1].replace(/\+|\?\+1|\+1/g, ' ')
          .match(/[^&]+/g)[0]
        if ($(this).attr('response').match(uri)) {
          uri = '?q=' + uri.replace(/\s/g, '+') + '&' + $(this).attr('response')
        } else uri = '?q=&' + $(this).attr('response')
        uri.define().exit()
      }
    })
