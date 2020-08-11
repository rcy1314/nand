$(document)
  .ready(function() {
    $('#input').css('display', 'block')
    $('#main input[type=text]').attr('tabindex', -1).focus()
  })
  .on('touch click', 'a', function(e) {
    if ($(this).attr('ext'))
    window.open($(this).attr('ext'), '_blank', 'noreferrer noopener')
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
     if (contrast == true && !location.href.match('\\+1')) uri = uri + '+1'
     else if (contrast == true) uri = uri + '+1'
     progress(true, 100)
     state(uri)
   })
  .on('touch click', '#main #visit #placeholder', function(e) {
      $('#front .icon, #front .button, #front #option, #main .quick').css('visibility','hidden')
      $('#main #visit #page #front input[type=text]').css('visibility','hidden')
      if ($('#main #page #visit #front #first .listing').is(':visible'))
        $('#main #page #visit #front #first').hide()
        filter = []
        var uri = '?q=' + category.toLowerCase()
        if (contrast == true && !location.href.match('\\+1')) uri = uri + '+1'
        else if (contrast == true) uri = uri + '+1'
        document.title = category
        populate(category)
        state(uri)
        progress(true, 100)
        e.preventDefault()
      $('#main #visit #page #front #first').css('visibility','hidden')
      $('#main #visit #page #front .icon').removeClass('search')
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
        if (contrast == true && !location.href.match('\\+1')) uri = uri + '+1'
        else if (contrast == true) uri = uri + '+1'
        exit(uri)
      }
    })
