$(document)
  .ready()
  .on('touch click',
    'html body #container #main #visit #page #front .focus .button .buttonSearch',
    function(e) {
      if ($('html body #container #main #visit #page #front input[type=text]').val().length > 0 &&
          $('html body #container #main #visit #page #front input[type=text]').val() != '')
            $('html body #container #main #visit #page #front').submit()
      e.preventDefault()
  })
  .on('keyup',
    'html body #container #main #visit #page #front .focus input[type=text]',
    function(e) {
      var keyup = $(this).val()
      if (e.keyCode == 13) return false
      else if (e.type == 'keyup' && $(this).val().length >= 3 && e.keyCode >= 65 && e.keyCode <= 90) base($(this).val())
      else if ($(this).val().length >= 2 && e.keyCode == 8) base($(this).val())
      else if ($(this).val().length <= 2 && e.keyCode == 8) $('html body #container #main #visit #page #front #first').hide()
      if (e.keyCode == 40) {
        if (!$('html body #container #main #visit #page #front #first .listing .hover').length)
          $('html body #container #main #visit #page #front #first .listing .index:first').addClass('hover').removeClass('index')
        else {
          $('html body #container #main #visit #page #front #first .listing .hover').next().focus().removeClass('index').addClass('hover')
          $('html body #container #main #visit #page #front #first .listing .hover').prev().removeClass('hover').addClass('index')
          $(this).attr('tabIndex', -1).focus()
          $(this).val(keyup)
          visual()
        }
      } else if (e.keyCode == 34) {
          if (!$('html body #container #main #visit #page #front #first .listing .hover').length)
            $('html body #container #main #visit #page #front #first .listing .index:first').addClass('hover').removeClass('index')
          else {
            $('html body #container #main #visit #page #front #first .listing .hover')
              .next().next().next().next().next().next().focus()
              .removeClass('index').addClass('hover')
            $(this).val(keyup)
            $(this).attr('tabIndex', -1).focus()
            $('html body #container #main #visit #page #front #first .listing .hover')
              .prev().prev().prev().prev().prev().prev().removeClass('hover').addClass('index')
          }
      } else if (e.keyCode == 33) {
          $('html body #container #main #visit #page #front #first .listing .hover')
            .prev().prev().prev().prev().prev().prev().focus()
            .removeClass('index').addClass('hover')
          $(this).val(keyup)
          $(this).focus()
          $('html body #container #main #visit #page #front #first .listing .hover')
            .next().next().next().next().next().next().removeClass('hover').addClass('index')
      } else if (e.keyCode == 38) {
        $('html body #container #main #visit #page #front #first .listing .hover')
          .prev().focus()
          .removeClass('index').addClass('hover')
        $(this).val(keyup)
        $(this).focus()
        $('html body #container #main #visit #page #front #first .listing .hover')
          .next().removeClass('hover').addClass('index')
      } else if (e.keyCode == 27) $('html body #container #main #visit #page #front #first').hide()
    visual()
  })
  .on('touch click',
    'html body #container #main #visit #page #front .focus input[type=text]',
    function(e) {
      $('html body #container #main #visit #page #front #first .listing').empty()
      $(this).css({
        'caret-color': '#e4e4e4',
        'padding-left': '40px',
        'text-align': 'left'
      }).val('')
      $('html body #container #main #visit #page #front .icon').addClass('search')
      base('')
    visual()
  })
  .on('focusin',
    'html body #container #main #visit #page #front .focus input[type=text]',
    function(e) {
      $(this).css({
        'caret-color': '#e4e4e4',
        'padding-left': '40px',
        'text-align': 'left'
      }).val('').attr('placeholder', 'Search feeds')
      $('html body #container #main #visit #page #front .icon').addClass('search')
  })
  .on('keyup', 'html body #container #top #arm #search #input input[type=text]',
    function(e) {
      $(this).attr('placeholder','')
      if ($(this).val() != '') var keyup = $(this).val()
      if (e.keyCode == 13) return false
      else if ($(this).val().length >= 3 && e.keyCode >= 65 && e.keyCode <= 90) list($(this).val())
      else if ($(this).length >= 2 && e.keyCode == 8) list($(this).val())
      else if ($(this).val().length <= 2 && e.keyCode == 8) $('html body #container #main #top #arm #search #match').hide()
      if (e.keyCode == 40) {
        if (!$('html body #container #main #top #arm #search #match .listing .hover').length)
          $('html body #container #main #top #arm #search .listing .index:first').addClass('hover').removeClass('index')
        else {
          $('html body #container #main #top #arm #search #match .listing .hover')
            .next().focus()
            .addClass('hover').removeClass('index')
          $(this).val(keyup)
          $(this).attr('tabIndex', -1).focus()
          $('html body #container #arm #search #match .listing .hover')
            .prev().addClass('index').removeClass('hover')
        }
      } else if (e.keyCode == 34) {
          if (!$('html body #container #main #top #arm #search #match .listing .hover').length)
            $('html body #container #main #top #arm #search .listing .index:first')
              .addClass('hover')
              .removeClass('index')
          else {
            $('html body #container #main #top #arm #search #match .listing .hover')
              .next().next().next().next().next().next().focus()
              .addClass('hover').removeClass('index')
            $(this).val(keyup)
            $(this).attr('tabIndex', -1)
              .focus()
            $('html body #container #arm #search #match .listing .hover')
              .prev().prev().prev().prev().prev().prev().addClass('index').removeClass('hover')
          }
      } else if (e.keyCode == 38) {
          $('html body #container #main #top #arm #search #match .listing .hover')
            .prev().focus()
            .addClass('hover').removeClass('index')
          $(this).val(keyup)
          $(this).focus()
          $('html body #container #main #top #arm #search #match .listing .hover')
            .next()
            .addClass('index').removeClass('hover')
      } else if (e.keyCode == 33) {
        $('html body #container #main #top #arm #search #match .listing .hover')
          .prev().prev().prev().prev().prev().prev().focus()
          .addClass('hover').removeClass('index')
        $(this).val(keyup)
        $(this).focus()
        $('html body #container #main #top #arm #search #match .listing .hover')
          .next().next().next().next().next().next()
          .addClass('index').removeClass('hover')
      } else if (e.keyCode == 27) $('html body #container #main #top #arm #search #match').hide()
    visual()
  })
  .on('touch click', 'html body #container #top #arm #search #input input[type=text]', function(e) {
      $('html body #container #arm #search #match').show()
      $('html body #container #arm #search #match .listing').empty()
      $.each(translations, function(i) {
        $('html body #container #arm #search #match .listing')
          .append(
            "<div class='index' tabIndex='-1' aria-item='" + translations[i].toLowerCase() + "'>" +
            "  <div class='detail'>" +
            "    <img src='images/" + translations[i] + '.webp' + "'>" +
            "    <div class='text'>&emsp;<b>" + translations[i] + "</b>" +
            "      <br>&emsp;" + translations[i].grep() + " sites" +
            "    </div>" +
            "  </div>" +
            "</div>")
      })
      $(this).css({
        'caret-color': '#e4e4e4',
        'padding-left': '30px',
        'text-align': 'left',
      }).val('')
      $('html body #container #arm #search #input .icon').addClass('slide')
    visual()
  })
  .on('submit', 'html body #container #top #arm #search', function(e) {
    $('html body #container #main .air, #main .result, #main #feed .center, #main .content').remove()
    $('html body #container #arm #search #match').hide()
    if ($('html body #container #arm #search .listing .hover').length) {
      if ($('html body #container #arm #search .listing .hover').is('[aria-item]') &&
            $.inArray($('html body #container #arm #search .listing .hover').attr('aria-item').capitalize(), translations) > -1){
        $.loading()
        $('html body #container #main #visit').hide()
        menubar(topBar)
        category = $('html body #container #arm #search .listing .hover').attr('aria-item').capitalize()
        populate($('html body #container #arm #search .listing .hover').attr('aria-item').capitalize())
      } else if (reader == true) {
        $('html body #container #main .channel').empty()
        category = $(this).attr('response')
        randomDuplicate = []
        first = false
        xml(null, null, $.random())
        notify('Switched to now reading ' + category + '.')
      } else {
    filter = []
        $.loading()
        var uri = '?q=' + menu[$('html body #container #arm #search .listing .hover').attr('aria-item')].cat.toLowerCase()
    uri.define().state()
        xml(null, null, $('html body #container #arm #search .listing .hover').attr('aria-item'))
      }
    } else {
      if ($('html body #container #arm #search input[type=text]').val().length) {
        var uri = '?q=' + $('html body #container #arm #search input[type=text]').val()
          .toLowerCase()
          .replace(/\s/g, '+')
        uri.define().exit()
      }
    }
    $('html body #container #main #top #arm #search #match').hide()
    $('html body #container #arm #search input[type=text]').blur()
    e.preventDefault()
    visual()
  })
  .on('touch click', 'html body #container #sidebar #content #basic .filter input[type=text]', function(e) {
    $(this).val('')
  })
  .on('keyup', 'html body #container #sidebar #content #basic .filter input[type=text]', function(e) {
    if (e.keyCode == 13) return false
  })
  .on('submit', 'html body #container #sidebar #content #basic .filter', function(e) {
    if ($('html body #container #sidebar #content #basic .filter input[type=text]').val().length) {
      $.loading()
      menubar(topBar)
      $('html body #container #main #visit').hide()
      $('html body #container #main #toggle').hide()
      response(
               false,
               false,
               $('html body #container #sidebar #content #basic .filter input[type=text]').val(),
               true
              )
      var uri = '?q=' + $('html body #container #sidebar #content #basic .filter input[type=text]').val().replace(/\s/g, '+')
      uri.define().state()
      e.preventDefault()
      visual()
    }
  })
  .on('submit', 'html body #container #main #visit #page #front', function(e) {
    $('html body #container #main #toggle').hide()
      if ($('html body #container #main #visit #page #front #first .listing .hover').length) {
        if ($('html body #container #main #visit #page #front #first .listing .hover').is('[aria-item]') &&
              $.inArray($('html body #container #main #visit #page #front #first .listing .hover').attr('aria-item').capitalize(), translations) > -1){
          $.loading()
          $('html body #container #main #visit').hide()
          menubar(topBar)
          category = $('html body #container #main #visit #page #front #first .listing .hover').attr('aria-item').capitalize()
          populate($('html body #container #main #visit #page #front #first .listing .hover').attr('aria-item').capitalize())
        } else if (reader == true) {
          $('html body #container #main .channel').empty()
          randomDuplicate = []
          category = $(this).attr('response')
          first = false
          xml(null, null, $.random())
          notify('Switched to now reading ' + category + '.')
        } else {
          $.loading()
          $('html body #container #main #visit').hide()
          menubar(topBar)
          xml(null, null, $('html body #container #main #visit #page #front #first .listing .hover').attr('aria-item'))
        }
      } else {
        if ($('html body #container #main #visit #page #front .focus input[type=text]').val().length) {
          $.loading()
          menubar(topBar)
          $('html body #container #main #visit').hide()
          response(
                   false,
                   false,
                   $('html body #container #main #visit #page #front .focus input[type=text]').val(),
                   true
                  )
          var uri = '?q=' + $('html body #container #main #visit #page #front .focus input[type=text]').val().replace(/\s/g, '+')
          uri.define().state()
        }
      }
      e.preventDefault()
      visual()
  })
  .on('mouseenter',
  'html body #container #main #visit #page #front #first .index, ' +
  'html body #container #main #visit #page #front #first .hover, ' +
  'html body #container #main #top #arm #search #match .listing .index, ' +
  'html body #container #main #top #arm #search #match .listing .hover',
  function(e) {
    $('html body #container #main #visit #page #front #first .index, ' +
      'html body #container #main #visit #page #front #first .hover, ' +
      'html body #container #main #top #arm #search #match .listing .index, ' +
      'html body #container #main #top #arm #search #match .listing .hover')
        .removeClass('hover visual.hover contrast.hover').addClass('index')
    $(this).addClass('hover')
  })
  .on('touch click',
    'html body #container #main #visit #page #front #first .index, ' +
    'html body #container #main #visit #page #front #first .hover, ' +
    'html body #container #main #top #arm #search #match .listing .index, ' +
    'html body #container #main #top #arm #search #match .listing .hover',
    function(e) {
      if (reader == true) {
        $('html body #container #main .channel').empty()
        category = $(this).attr('response')
        randomDuplicate = []
        first = false
        xml(null, null, $.random())
        notify('Switched to now reading ' + category + '.')
      } else {
        menubar(topBar)
        if ($(this).is('[aria-item]') && $.inArray($(this).attr('aria-item').capitalize(), translations) > -1){
          id = 0
          $.loading()
          $('html body #container #main #visit').hide()
          menubar(topBar)
          category = $(this).attr('aria-item').capitalize()
          populate($(this).attr('aria-item').capitalize())
        } else {
          $.loading()
          category = menu[$(this).attr('aria-item')].cat
          xml(null, null, $(this).attr('aria-item'))
        }
      }
  })
