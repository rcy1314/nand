$(document).ready()
.on('touch click', '#main #visit #page input[type=text]', function(e) {
  e.stopPropagation()
})
.on('keyup',
   '#main #visit #page input[type=text]', function(e) {
     $('#main #visit #page #front #first').css('visibility','visible')
     if ($(this).val() != '') var keyup = $(this).val()
     if (e.type == 'keyup' && e.keyCode == 13)
       return false
     else if (e.type == 'keyup' && $(this).val()
       .length >= 3 && e.keyCode >= 65 && e.keyCode <= 90)
       base($(this).val())
     else if ($(this).val().length >= 2 && e.keyCode == 8)
       base($(this).val())
     else if ($(this).val().length <= 2 && e.keyCode == 8) {
       $('#main #visit #page #front #first').css('visibility','hidden')
       $('#main .result, #main .air, #main .center, #main .suggestions').show()
     } else if (e.keyCode == 40 || e.keyCode == 34) {
       if (!$('#main #visit #page #front #first .listing .hover').length)
         $('#main #visit #page #front #first .listing .index:first')
           .addClass('hover')
           .removeClass('index')
       else {
         $('#main #visit #page #front #first .listing .hover')
           .next().focus()
           .attr('class', 'hover')
         $(this).val(keyup)
         $(this).attr('tabIndex', -1).focus()
         $('#main #visit #page #front #first .listing .hover')
           .prev().attr('class', 'index')
       }
     } else if (e.keyCode == 38 || e.keyCode == 33) {
       $('#main #visit #page #front #first .listing .hover')
         .prev().focus()
         .attr('class', 'hover')
       $(this).val(keyup)
       $(this).focus()
       $('#main #visit #page #front #first .listing .hover')
         .next().attr('class', 'index')
     } else if (e.keyCode == 27) {
       $('#main #visit #page #front #first').hide()
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
.on('touch click focusin focusout blur',
  '#main #visit #page #front input[type=text]',
  function(e) {
    $this = $(this)
    if (e.type == 'focusin') {
      $(this).val('')
      if ($('#main #visit #page #front .icon').hasClass('search'))
        $(this)
          .css({
            'caret-color': '#e4e4e4',
            'padding-left': '30px',
            'text-align': 'left'
          })
      else if (!$('#main #visit #page #front .icon').hasClass('search')) {
        setTimeout(function() {
          $this.css({
            'caret-color': '#e4e4e4',
            'padding-left': '30px',
            'text-align': 'left',
          })
        }, 500)
        $('#main #visit #page #front .icon')
          .addClass('search')
      }
      return false
    }
    if (e.type == 'touch' || e.type == 'click') {
        $('#main #visit #page #front #first').css('visibility','visible')
        $('#main #visit #page #front #first .listing').empty()
        $.each(translations, function(i) {
          $('#main #visit #page #front #first .listing')
            .append(
              "<div class='index' tabIndex='-1' response='" + translations[i] + "'>" +
              "  <img class='type' src='images/" + translations[i] + '.png' + "'>" +
              "  <div class='text'>&emsp;<b>" + translations[i] + "</b>" +
              "    <br>&emsp;" + grep(menu, translations[i]) + " feeds" +
              "  </div>" +
              "</div>")
        })
      $(this).val('')
      if ($('#main #visit #page #front .icon').hasClass('search'))
        $(this)
          .css({
            'caret-color': '#e4e4e4',
            'padding-left': '30px',
            'text-align': 'left'
          })
      else if (!$('#main #visit #page #front .icon').hasClass('search')) {
        setTimeout(function() {
          $this.css({
            'caret-color': '#e4e4e4',
            'padding-left': '30px',
            'text-align': 'left',
          })
        }, 500)
        $('#main #visit #page #front .icon')
          .addClass('search')
      }
    }
    if (e.type == 'focusout' || e.type == 'blur')
    $(this)
      .css({
        'caret-color': 'transparent',
        'padding': '0',
        'text-align': 'center'
      })
      .val('Search')
    visual()
})
.on('keyup touch click focusin focusout blur',
  '#arm #search input[type=text]',
  function(e) {
    $this = $(this)
    if (e.type == 'focusin') {
      $(this).val('')
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
    }
    if (e.type == 'touch' || e.type == 'click') {
      $('#arm #search #match').show()
      $('#arm #search #match .listing').empty()
      $.each(translations, function(i) {
        $('#arm #search #match .listing')
          .append(
            "<div class='index' tabIndex='-1' response='" + translations[i] + "'>" +
            "  <img class='type' src='images/" + translations[i] + '.png' + "'>" +
            "  <div class='text'>&emsp;<b>" + translations[i] + "</b>" +
            "    <br>&emsp;" + grep(menu, translations[i]) + " feeds" +
            "  </div>" +
            "</div>")
      })
      $(this).val('')
      if ($('#arm #search #input .icon').hasClass('slide'))
        $(this)
          .css({
            'caret-color': '#e4e4e4',
            'padding-left': '30px',
            'text-align': 'left'
          })
      else if (!$('#arm #search #input .icon')
        .hasClass('slide')) {
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
    }
    if (e.type == 'focusout' || e.type == 'blur')
    $(this)
      .css({
        'caret-color': 'transparent',
        'padding': '0',
        'text-align': 'center'
      })
      .val('Search')
    if ($(this).val() != 'Search') var keyup = $(this).val()
    if (e.type == 'keyup' && e.keyCode == 13) {
      $('#arm #search #match').hide()
      return false
    } else if (e.type == 'keyup' && $(this).val()
      .length >= 3 && e.keyCode >= 65 && e.keyCode <= 90)
      list($(this).val())
    else if ($(this)
      .length >= 2 && e.keyCode == 8) {
      list($(this).val())
    } else if ($(this).val().length <= 2 && e.keyCode == 8) {
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
  .on('submit', '#arm #search', function(e) {
    $('#main .air, #main .result, #main .center, #main .content').remove()
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
        var uri = '?q=' + $('#arm #search input[type=text]').val()
        if (contrast == true && !location.href.match('\\+1')) uri = uri + '+1'
        else if (contrast == true) uri = uri + '+1'
        state('?q=&' + $('#arm #search #match .listing .hover')
          .attr('response'))
        response(true, false, $('#arm #search #match .listing .hover')
          .attr('response'), true, null)
        document.title = $('#arm #search #match .listing .hover')
          .attr('response')
      }
    } else {
      if ($('#arm #search input[type=text]').val().length) {
        var uri = '?q=' + $('#arm #search input[type=text]').val()
          .toLowerCase()
          .replace(/\s/g, '+')
        if (contrast == true && !location.href.match('\\+1')) uri = uri + '+1'
        else if (contrast == true) uri = uri + '+1'
        response(true, false, $('#arm #search input[type=text]').val(), true, null)
        state(uri)
      }
    }
    $('#arm #search input[type=text]').val('Search').blur()
    e.preventDefault()
    visual()
  })
  .on('submit', '#main #visit #page #front', function(e) {
    $('#main #visit #page #front .icon').css('visibility','hidden')
    if ($('#main #visit #page #front #first .listing .hover').length) {
      if (translations.indexOf($('#main #visit #page #front #first .listing .hover')
          .attr('response')) > -1) {
        category = $('#main #visit #page #front #first .hover')
          .attr('response')
        populate($('#main #visit #page #front #first .hover')
          .attr('response'))
        var uri = '?q=' + $('#main #visit #page #front #first .hover')
          .attr('response')
          .toLowerCase()
        air(id)
        state('?q=' + $('#main #visit #page #front #first .hover')
          .attr('response')
          .toLowerCase())
        document.title = $('#main #visit #page #front #first .hover')
          .attr('response')
        $('#top').css('visibility','visible')
        progress(true, 100)
      } else {
        var uri = '?q=&' + $('#main #visit #page #front #first .listing .hover')
          .attr('response')
        if (contrast == true && !location.href.match('\\+1')) uri = uri + '+1'
        else if (contrast == true) uri = uri + '+1'
        exit(uri)
      }
    } else {
      if ($('#main #visit #page #front input[type=text]').val().length)
      var uri = '?q=&' + $('#main #visit #page #front input[type=text]').val()
        .toLowerCase()
        .replace(/\s/g, '+')
      if (contrast == true && !location.href.match('\\+1')) uri = uri + '+1'
      else if (contrast == true) uri = uri + '+1'
      exit(uri)
    }
    e.preventDefault()
  })
  .on('touch click mouseenter mouseleave',
    '#arm #search #match .listing .index, #arm #search #match .listing .hover, ' +
    '#main #visit #page #front #first .listing .index, ' +
    '#main #visit #page #front #first .listing .hover',
    function(e) {
      if (e.type == 'mouseenter') {
        $('#arm #search #match .listing .hover, ' +
          '#main #visit #page #front #first .listing .hover')
          .attr('class', 'index')
        if (op == 0) $(this)
          .addClass('hover contrast.hover')
        else $(this)
          .addClass('hover visual.hover')
      }
      if (e.type == 'mouseleave') {
        if (op == 1) $('#arm #search #match .listing .hover, ' +
          '#main #visit #page #front #first .listing .hover')
          .attr('class', 'index contrast')
        else $('#arm #search #match .listing .hover, ' +
          '#main #visit #page #front #first .listing .hover')
          .attr('class','index visual')
      }
      if (e.type == 'touch' || e.type == 'click') {
        if (translations.indexOf($('#arm #search #match .listing .hover, ' +
            '#main #visit #page #front #first .listing .hover')
            .attr('response')) > -1) {
          $('#main .result, #main .air').remove()
          category = $('#arm #search #match .listing .hover, ' +
            '#main #visit #page #front #first .listing .hover')
            .attr('response')
          populate($('#arm #search #match .listing .hover, ' +
            '#main #visit #page #front #first .listing .hover')
            .attr('response'))
          var uri = '?q=' + $('#arm #search #match .listing .hover, ' +
            '#main #visit #page #front #first .listing .hover')
            .attr('response')
            .toLowerCase()
          if (contrast == true && !location.href.match('\\+1')) uri = uri + '+1'
          else if (contrast == true) uri = uri + '+1'
          air($('#arm #search #match .listing .hover, ' +
            '#main #visit #page #front #first .listing .hover')
            .attr('response'))
          state(uri)
          document.title = $('#arm #search #match .listing .hover, ' +
            '#main #visit #page #front #first .listing .hover')
            .attr('response')
          progress(true, 100)
        } else {
          var uri = '?q=' + $(this).attr('search') + '&' + $(this)
            .attr('response')
          if (contrast == true && !location.href.match('\\+1')) uri = uri + '+1'
          else if (contrast == true) uri = uri + '+1'
          exit(uri)
        }
        visual()
      e.preventDefault()
    }
    })
