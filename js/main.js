$(document)
  .ready(function() {
    $('#input')
      .css('display', 'block')
  })
  .on('touch click', 'a', function(e) {
    window.open($(this)
      .attr('ext'), '_blank', 'noreferrer')
    e.stopPropagation()
  })
  .on('touch click', '#arm, #option, #main, #visit, #container', function(e) {
    if (!$('#arm #search input[type=text]')
      .is(':focus')) {
      $('#arm #search #match')
        .hide()
      $('#arm #search #input .icon')
        .removeClass('slide')
    }
   })
  .on('touch click', '#main #visit #placeholder', function(e) {
      $('#front .icon, #front #option').css('visibility','hidden')
      $('#main #visit #page #front input[type=text]')
        .css('visibility','hidden')
      if ($('#arm #search #match .listing')
        .is(':visible')) $('#arm #search #match')
        .hide()
      else {
        filter = []
        var uri = '?q=' + category.toLowerCase()
        if (contrast == true && !location.href.match('\\+1')) uri = uri + '+1'
        else if (contrast == true) uri = uri + '+1'
        document.title = category
        populate(category)
        air(category)
        state(uri)
        progress(true, 100)
      }
    $('#main #visit #page #front .icon')
      .removeClass('search')
    $('#main #visit #page #front #first').css('visibility','hidden')
  })
  .on('touch click', '#arm #search #input .icon', function(e) {
    $('#arm #search #input input[type=text]')
      .focus()
  })
  .on('touch click mouseenter mouseleave',
    '.air .filter, .result .filter, .air .populate, .result .populate',
    function(e) {
      if (op == 0)
        if (e.type == 'mouseenter') {
          $(this)
            .toggleClass('overlay')
          $(this)
            .on('webkitAnimationEnd oanimationend msAnimationEnd animationend',
              function(e) {
                $(this)
                  .removeClass('overlay')
                void this.clientWidth
                $(this)
                  .addClass('overlay')
              })
        }
      if (e.type == 'mouseleave') $(this)
        .removeClass('overlay')
      if (e.type == 'touch' || e.type == 'click') {
        var uri = location.search.split('?q=')[1].replace(/\+|\?\+1|\+1/g, ' ')
          .match(/[^&]+/g)[0]
        if ($(this)
          .attr('response')
          .match(uri)) {
          uri = '?q=' + uri.replace(/\s/g, '+') + '&' + $(this)
            .attr('response')
        } else uri = '?q=&' + $(this)
          .attr('response')
        '&' + $(this)
          .attr('response')
        if (contrast == true && !location.href.match('\\+1')) uri = uri + '+1'
        else if (contrast == true) uri = uri + '+1'
        exit(uri)
      }
    })
