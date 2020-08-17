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
    if (!$('#main #visit #page #front input[type=text]').is(':focus')) {
      $('#main #visit #page #front #first').css('visibility','hidden')
      if ($('#main #visit #page #front input[type=text]').val().length == 0 ||
          $('#main #visit #page #front input[type=text]').val() == 'Search')
      $('#main #visit #page #front .icon').removeClass('search')
    }
   })
   .on('touch click', '#main .translation .select', function(e) {
     filter = []
     category = $(this).attr('response')
     populate($(this).attr('response'))
     var uri = '?q=' + $(this).attr('response').toLowerCase()
     progress(true, 100)
     uri.define().state()
   })
  .on('touch click', '#main #visit #placeholder', function(e) {
    filter = []
    var uri = '?q=' + category.toLowerCase()
    uri.define().exit()
  })
  .on('touch click', '#arm #search #input .icon, ' +
      '#arm #search #input .icon .fa-search', function(e) {
        $(this).addClass('slide')
    $('#arm #search #input input[type=text]').val('')
    .css({
      'caret-color': '#e4e4e4',
      'padding-left': '30px',
      'text-align': 'left',
    }).focus()
  })
  .on('touch click', '#main #visit #page #front .icon', function(e) {
    $('#main #visit #page #front input[type=text]').focus()
  })
  .on('touch click', '#main #visit #page #front .buttonSearch', function(e) {
    if ($('#main #visit #page #front input[type=text]').val().length > 0 &&
        $('#main #visit #page #front input[type=text]').val() != 'Search')
      $('#main #visit #page #front').submit()
    e.preventDefault()
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
    .on('touch click', '#main .stats img', function(e) {
      $(this).parent().find('svg circle').addClass('mask')
      setTimeout(function() {
      $('#main .translation, #main .center, #main .stats, #main .suggestions')
      .remove()
      var uri = location.search.split('?q=')[1]
      uri = uri.replace(/\?\+1|\+1/, '')
      uri = (uri.match(/[^&]+/g))
      if (!uri[1]) response(true, false, uri[0], true, post)
      else if (uri[1]) response(true, uri[0], uri[1], false, post)
    }, 750)
    })
