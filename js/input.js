$(document)
  .ready()
.on('mouseenter mouseleave',
    '#main #visit .page #front input[type=text], .button', function(e) {
    if (op == 0)
      if (e.type == 'mouseenter')
        $('.focus').removeClass('pageInputOut').addClass('pageInput')
      else if (e.type == 'mouseleave')
        $('.focus').removeClass('pageInput').addClass('pageInputOut')
})
.on('touch click', '#main #visit .page #front .icon', function(e) {
    $('#main #visit .page #front input[type=text]').focus()
})
.on('touch click', '#main #visit .page #front .buttonSearch', function(e) {
    if ($('#main #visit .page #front input[type=text]').val().length > 0 &&
        $('#main #visit .page #front input[type=text]').val() != 'Search')
      $('#main #visit .page #front').submit()
    e.preventDefault()
})
.on('touch click', '#arm #search #input .icon', function(e) {
    $(this).addClass('slide')
    $('#arm #search #input input[type=text]').val('')
    .css({
      'caret-color': '#e4e4e4',
      'padding-left': '30px',
      'text-align': 'left',
    }).focus()
})
.on('keyup', '#main #visit .page input[type=text]', function(e) {
     $('#main #visit .page #front #first').css('visibility','visible')
     $('#main #visit .page #front #first .listing').css('z-index', '3')
     var keyup = $(this).val()
     if (e.type == 'keyup' && e.keyCode == 13)
       return false
     else if (e.type == 'keyup' && $(this).val()
       .length >= 3 && e.keyCode >= 65 && e.keyCode <= 90)
       list('visit', $(this).val())
     else if ($(this).val().length >= 2 && e.keyCode == 8)
       list('visit', $(this).val())
     else if ($(this).val().length <= 2 && e.keyCode == 8) {
       $('#main #visit .page #front #first').css('visibility','hidden')
       $('#main .result, #main .air, #main .center, #main .suggestions').show()
     } else if (e.keyCode == 40 || e.keyCode == 34) {
       if (!$('#main #visit .page #front #first .listing .hover').length)
         $('#main #visit .page #front #first .listing .index:first')
           .addClass('hover')
           .removeClass('index')
       else {
         $('#main #visit .page #front #first .listing .hover')
           .next().focus()
           .removeClass('index').addClass('hover')
         $(this).val(keyup)
         $(this).attr('tabIndex', -1).focus()
         $('#main #visit .page #front #first .listing .hover')
           .prev().removeClass('hover').addClass('index')
       }
     } else if (e.keyCode == 38 || e.keyCode == 33) {
       $('#main #visit .page #front #first .listing .hover')
         .prev().focus()
         .removeClass('index').addClass('hover')
       $(this).val(keyup)
       $(this).focus()
       $('#main #visit .page #front #first .listing .hover')
         .next().removeClass('hover').addClass('index')
     } else if (e.keyCode == 27) {
       $('#main #visit .page #front #first .listing').css('z-index', '0')
       $('#main #visit .page #front #first').hide()
       $(this)
         .css({
           'caret-color': 'transparent',
           'text-align': 'center',
           'padding': '0'
         })
         .val('Search')
         .siblings('.icon')
         .removeClass('slide')
     }
     visual()
})
.on('touch click', '#main #visit .page #front input[type=text]', function(e) {
    $('#main #visit .page #front #first .listing').css('z-index', '3')
    $('#main #visit .page #front #first').css('visibility', 'visible')
    $('#main #visit .page #front #first .listing').empty()
    $.each(translations, function(i) {
      $('#main #visit .page #front #first .listing').append(
        "<div class='index' tabIndex='-1' response='" + translations[i].toLowerCase() + "'>" +
        "  <div class='detail' response='" + translations[i].toLowerCase() + "'>" +
        "  <div class='radial'></div>" +
        "  <img class='typeTranslation' src='images/" + translations[i] + '.png' + "'>" +
        "  <div class='text'>&emsp;<b>" + translations[i] + "</b>" +
        "    <br>&emsp;" + translations[i].grep() + " feeds" +
        "  </div>" +
        "  </div>" +
        "</div>"
      )
    })
    $('#main #visit .page #front #first .listing')
      .append("<div class='background'></div>")
    $(this).val('')
      $(this).css({
            'caret-color': '#e4e4e4',
            'padding-left': '40px',
            'text-align': 'left'
      })
      $('#main #visit .page #front .icon').addClass('search')
    visual()
})
.on('focusin', '#main #visit .page #front input[type=text]', function(e) {
    $(this).val('')
      $(this).css({
            'caret-color': '#e4e4e4',
            'padding-left': '40px',
            'text-align': 'left'
      })
      $('#main #visit .page #front .icon').addClass('search')
})
.on('focusout blur', '#main #visit .page #front input[type=text]', function(e) {
    if ($(this).val().length == 0)
    $(this).css({
        'caret-color': 'transparent',
        'padding-left': '40px',
        'text-align': 'center'
      })
      .val('Search')
})
.on('keyup', '#arm #search input[type=text]', function(e) {
    if ($(this).val() != 'Search') var keyup = $(this).val()
    if (e.keyCode == 13) {
      $('#arm #search #match').hide()
      return false
    } else if ($(this).val().length >= 3 && e.keyCode >= 65 && e.keyCode <= 90)
        list('match', $(this).val())
    else if ($(this).length >= 2 && e.keyCode == 8)
        list('match', $(this).val())
    else if ($(this).val().length <= 2 && e.keyCode == 8) {
      $('#arm #search #match').hide()
      $('#main .result, #main .air, #main .center, #main .suggestions').show()
    } else if (e.keyCode == 40 || e.keyCode == 34) {
      if (!$('#arm #search #match .listing .hover').length)
        $('#search .listing .index:first')
          .addClass('hover')
          .removeClass('index')
      else {
        $('#arm #search #match .listing .hover')
          .next().focus()
          .attr('class', 'hover')
        $(this).val(keyup)
        $(this).attr('tabIndex', -1)
          .focus()
        $('#arm #search #match .listing .hover')
          .prev().attr('class', 'index')
      }
    } else if (e.keyCode == 38 || e.keyCode == 33) {
      $('#arm #search #match .listing .hover')
        .prev().focus()
        .attr('class', 'hover')
      $(this).val(keyup)
      $(this).focus()
      $('#arm #search #match .listing .hover')
        .next()
        .attr('class', 'index')
    } else if (e.keyCode == 27) {
      $('#arm #search #match').hide()
      $(this)
        .css({
          'caret-color': 'transparent',
          'padding': '0',
          'text-align': 'center'
        })
        .val('Search')
        .siblings('.icon')
        .removeClass('slide')
    }
    visual()
})
.on('touch click', '#arm #search input[type=text]', function(e) {
      $('#arm #search #match').show()
      $('#arm #search #match .listing').empty()
      $.each(translations, function(i) {
        $('#arm #search #match .listing')
          .append(
            "<div class='index' tabIndex='-1' response='" + translations[i].toLowerCase() + "'>" +
            "<div class='detail' response='" + translations[i].toLowerCase() + "'>" +
            "  <div class='radial'></div>" +
            "  <img class='typeTranslation' src='images/" + translations[i] + '.png' + "'>" +
            "  <div class='text'>&emsp;<b>" + translations[i] + "</b>" +
            "    <br>&emsp;" + translations[i].grep() + " feeds" +
            "  </div>" +
            "  </div>" +
            "</div>")
      })
      $('#arm #search #match .listing')
        .append("<div class='background'></div>")
      $(this).val('')
      $this = $(this)
          $this.css({
            'caret-color': '#e4e4e4',
            'padding-left': '30px',
            'text-align': 'left',
          })
        $('#arm #search #input .icon').addClass('slide')
    visual()
})
.on('focusout blur', '#arm #search input[type=text]', function(e) {
  $this = $(this)
      if ($('#arm #search #input .icon').hasClass('slide'))
        $(this)
          .css({
            'caret-color': '#e4e4e4',
            'padding-left': '30px',
            'text-align': 'left'
          })
      else if (!$('#arm #search #input .icon').hasClass('slide')) {
        setTimeout(function() {
          $this.css({
            'caret-color': '#e4e4e4',
            'padding-left': '30px',
            'text-align': 'left',
          })
        }, 500)
        $('#arm #search #input .icon')
          .addClass('slide')
      }
      return false
})
.on('focusout blur', '#arm #search input[type=text]', function(e) {
  $(this).css({
    'caret-color': 'transparent',
    'text-align': 'center',
    'padding': '0'
  }).val('Search')
})
.on('submit', '#arm #search', function(e) {
  $('#main .air, #main .result, #main .center, #main .content, #main .translation').remove()
  $('#arm #search #match').hide()
  if ($('#arm #search .listing .hover').length) {
    if (translations.indexOf($('#arm #search #match .listing .hover')
        .attr('response')) > -1) {
      category = $('#arm #search #match .listing .hover')
        .attr('response')
      populate($('#arm #search #match .listing .hover')
        .attr('response'))
      var uri = '?q=' + $('#arm #search #match .listing .hover')
        .attr('response').toLowerCase()
      air(id)
      state('?q=' + $('#arm #search #match .listing .hover')
        .attr('response').toLowerCase())
      document.title = $('#arm #search #match .listing .hover')
        .attr('response')
      progress(true, 100)
    } else {
      var uri = '?q=' + $('#arm #search #match .listing .hover')
      .attr('response')
      .toLowerCase()
      uri.define().exit()
      document.title = $('#arm #search #match .listing .hover')
        .attr('response')
    }
  } else {
    if ($('#arm #search input[type=text]').val().length) {
      var uri = '?q=' + $('#arm #search input[type=text]').val()
        .toLowerCase()
        .replace(/\s/g, '+')
      uri.define().exit()
    }
  }
  $('#arm #search input[type=text]').val('Search').blur()
  e.preventDefault()
  visual()
})
.on('submit', '#main #visit #front', function(e) {
  $('#main #visit .page #front .icon, #main .page #visit .button').css('visibility','hidden')
  if ($('#main #visit .page #front #first .listing .hover').length) {
      var uri = '?q=&' + $('#main #visit .page #front #first .listing .hover')
        .attr('response')
      uri.define().exit()
  } else {
    var uri = '?q=' + $('#main #visit .page #front input[type=text]').val()
      .toLowerCase()
      .replace(/\s/g, '+')
    uri.define().exit()
  }
  e.preventDefault()
})
.on('mouseenter', '.index, .hover', function(e) {
  $('#arm #search #match .listing .hover, ' +
    '#main #visit .page #front #first .listing .hover')
      .attr('class', 'index')
  if (op == 0) $(this).addClass('hover contrast.hover')
  else $(this).addClass('hover visual.hover')
})
.on('mouseleave', '.index, .hover', function(e) {
  if (op == 1) $('#arm #search #match .listing .hover, ' +
    '#main #visit .page #front #first .listing .hover')
      .attr('class', 'index contrast')
  else $('#arm #search #match .listing .hover, ' +
    '#main #visit .page #front #first .listing .hover')
      .attr('class','index visual')
})
.on('touch click', '.index, .hover', function(e) {
  $('#main .result, #main .air, #main .translation, #main .center, #main .content').remove()
  category = $(this).attr('response')
  uri = '?q=' + $(this).attr('response')
  document.title = category.capitalize()
  uri.define().exit()
  progress(true, 100)
  visual()
  e.preventDefault()
})
