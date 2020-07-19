$(document)
  .ready(function() {
    $('#input')
      .css('display', 'block')
  })
  .on('touch click', '#arm, #option', function(e) {
    if (!$('#arm #search input[type=text]')
      .is(':focus')) {
      $('#arm #search #match')
        .hide()
      $('#arm #search #input .icon')
        .removeClass('slide')
    }
  })
  .on('touch click', '#main, .background', function(e) {
    $('#arm #search #match')
      .hide()
    $('#arm #search #input .icon')
      .removeClass('slide')
  })
  .on('touch click', '#arm #home', function(e) {
    window.location.href = window.location.origin
  })
  .on('touch click', '#option .fa-git', function(e) {
    window.location.href = 'https://github.com/acktic/acktic.github.io'
  })
  .on('touch click', '#arm #search #input .icon', function(e) {
    $('#arm #search #input input[type=text]')
      .focus()
  })
  .on('touch click', '.fa-times-circle', function(e) {
    $('#guide').remove()
  })
  .on('touch click', '.fa-globe', function(e) {
    window.location.href = 'maintenance/rip.txt'
  })
  .on('touch click', 'a', function(e) {
    window.open($(this)
      .attr('ext'), '_blank', 'noreferrer')
    e.stopPropagation()
  })
  .on('touch click', '#main .center .channel .item', function(e) {
    window.open($(this)
      .attr('ext'), '_blank', 'noreferrer')
    e.stopPropagation()
  })
  .on('touch click', '#main .center .channel .item .post', function(e) {
    $(this)
      .siblings('.comment')
      .focus()
      .submit()
    e.stopPropagation()
  })
  .on('touch click', '#main #visit', function(e) {
    if ($('#arm #search #match .listing')
      .is(':visible')) $('#arm #search #match')
      .hide()
    else {
      filter = []
      $('#main #visit')
        .hide()
      var uri = '?q=' + category.toLowerCase()
      if (contrast == true && !location.href.match('\\+1')) uri = uri + '+1'
      else if (contrast == true) uri = uri + '+1'
      document.title = category
      populate(category)
      air(category)
      state(uri)
      progress(true, 100)
    }
  })
  .on('touch click', '#main .center #bottom .previous', function(e) {

    exit('?q=&' + menu[$(this).attr('index')].id.toLowerCase().replace(/\s|\.|\//g, '-'))

  })
  .on('touch click', '#main .center #bottom .next', function(e) {

    exit('?q=&' + menu[$(this).attr('index')].id.toLowerCase().replace(/\s|\.|\//g, '-'))

  })
  .on('touch click', '#main .center #bottom', function(e) {
    $('#main .center, #main .content')
      .remove()
    if (location.href.match('\\?q=')) {
      var uri = location.search.split('?q=')[1].match(/[^&]+/g)
      if (location.href.match('\\+1'))
        var res = uri[0].replace(/\+1/g, '')
      else var res = uri[0]
      res = res.replace(/\-|\+/g, ' ')
      response(false, false, res, true, null)
      if (contrast == true && !location.href.match('\\+1')) uri = uri[0] + '+1'
      state('?q=' + uri[0].replace(/\-/g, '+'))
    }
  })
  .on('keyup touch click focusin focusout blur',
    '#arm #search input[type=text]',
    function(e) {
      $this = $(this)
      if (e.type == 'focusin') {
        $(this)
          .val('')
        if ($('#arm #search #input .icon')
          .hasClass('slide')) {
          $(this)
            .css({
              'caret-color': '#e4e4e4',
              'padding-left': '30px',
              'text-align': 'left'
            })
        } else if (!$('#arm #search #input .icon')
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
        return false
      }
      if (e.type == 'touch' || e.type == 'click' || $(
          '#arm #search input[type=text]')
        .val()
        .length == -1) {
        $('#arm #search #match')
          .show()
        $('#arm #search #match .listing')
          .empty()
        $.each(translations, function(i) {
          $('#arm #search #match .listing')
            .append("<div class='index' tabIndex='-1' response='" +
              translations[i] + "'>" + "<img class='type' src='" +
              "images/" + translations[i] + '.png' + "'>" +
              "<div class='text'>&emsp;<b>" + translations[i] + "</b>" +
              "<br>&emsp;" + grep(menu, translations[i]) + " feeds</div>" +
              "</div>")
        })
        $(this)
          .val('')
        if ($('#arm #search #input .icon')
          .hasClass('slide')) {
          $(this)
            .css({
              'caret-color': '#e4e4e4',
              'padding-left': '30px',
              'text-align': 'left'
            })
        } else if (!$('#arm #search #input .icon')
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
      if (e.type == 'focusout' || e.type == 'blur') $(this)
        .css({
          'caret-color': 'transparent',
          'padding': '0',
          'text-align': 'center'
        })
        .val('Search')
        .siblings('.icon')
      if ($(this)
        .val() != 'Search') var keyup = $(this)
        .val()
      if (e.type == 'keyup' && e.keyCode == 13) {
        $('#arm #search #match')
          .hide()
        return false
      } else if (e.type == 'keyup' && $(this)
        .val()
        .length >= 3 && e.keyCode >= 65 && e.keyCode <= 90) {
        list($(this)
          .val())
      } else if ($(this)
        .val()
        .length >= 2 && e.keyCode == 8) {
        list($(this)
          .val())
      } else if ($(this)
        .val()
        .length <= 2 && e.keyCode == 8) {
        $('#arm #search #match')
          .hide()
        $('#main .result, #main .air, #main .center, #main .suggestions')
          .show()
      } else if (e.keyCode == 40 || e.keyCode == 34) {
        if (!$('#arm #search #match .listing .hover')
          .length) {
          $('#search .listing .index:first')
            .addClass('hover')
            .removeClass('index')
        } else {
          $('#arm #search #match .listing .hover')
            .next()
            .focus()
            .attr('class', 'hover')
          $(this)
            .val(keyup)
          $(this)
            .attr('tabIndex', -1)
            .focus()
          $('#arm #search #match .listing .hover')
            .prev()
            .attr('class', 'index')
        }
      } else if (e.keyCode == 38 || e.keyCode == 33) {
        $('#arm #search #match .listing .hover')
          .prev()
          .focus()
          .attr('class', 'hover')
        $(this)
          .val(keyup)
        $(this)
          .focus()
        $('#arm #search #match .listing .hover')
          .next()
          .attr('class', 'index')
      } else if (e.keyCode == 27) {
        $('#arm #search #match')
          .hide()
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
  .on('submit', '#main .center .channel .item .classic .addComment', function(e) {
    if ($(this)
      .children('.comment')
      .val() != '') item = $(this)
      .parents('.item')
      .attr('item')
    if ($('.' + item + ' .add')
      .length >= 3) {
      $('.' + item + ' .add:last')
        .remove()
    }
      $('.' + item + ' .pub:last')
        .after("<div class='add'><b>" + $('.' + item +
            ' .addComment .comment')
          .val() + "</div>")
    $(this)
      .parents('.item')
      .find('.fa-comment-o')
      .removeClass('fa-comment-o')
      .addClass('fas fa-comments')
    $('.' + item + ' .addComment .comment')
      .val('')
    e.preventDefault()
    visual()
  })
  .on('submit', '#arm #search', function(e) {
    $('#main .air, #main .result, #main .center, #main .content')
      .remove()
    $('#arm #search #match')
      .hide()
    if ($('#arm #search .listing .hover')
      .length) {
      if (translations.indexOf($('#arm #search #match .listing .hover')
          .attr('response')) > -1) {
        category = $('#arm #search #match .listing .hover')
          .attr('response')
        populate($('#arm #search #match .listing .hover')
          .attr('response'))
        var uri = '?q=' + $('#arm #search #match .listing .hover')
          .attr('response')
          .toLowerCase()
        air(id)
        state('?q=' + $('#arm #search #match .listing .hover')
          .attr('response')
          .toLowerCase())
        document.title = $('#arm #search #match .listing .hover')
          .attr('response')
        progress(true, 100)
      } else {
        var uri = '?q=' + $('#arm #search input[type=text]')
          .val()
        if (contrast == true && !location.href.match('\\+1')) uri = uri +
          '+1'
        else if (contrast == true) uri = uri + '+1'
        state('?q=&' + $('#arm #search #match .listing .hover')
          .attr('response'))
        response(true, false, $('#arm #search #match .listing .hover')
          .attr('response'), true, null)
        document.title = $('#arm #search #match .listing .hover')
          .attr('response')
      }
    } else {
      if ($('#arm #search input[type=text]')
        .val()
        .length) {
        var uri = '?q=' + $('#arm #search input[type=text]')
          .val()
          .toLowerCase()
          .replace(/\s/g, '+')
        if (contrast == true && !location.href.match('\\+1')) uri = uri +
          '+1'
        else if (contrast == true) uri = uri + '+1'
        response(true, false, $('#arm #search input[type=text]')
          .val(), true, null)
        state(uri)
      }
    }
    $('#arm #search input[type=text]')
      .val('Search')
      .blur()
    e.preventDefault()
    visual()
  })
  .on('touch click', '#main .center .quick .feed .asset .id', function(e) {
    var $this = $(this)
    $(this)
      .parent()
      .find('svg circle')
      .addClass('mask')
    setTimeout(function() {
      var uri = '?q=' + '&' + $this.attr('response')
      if (contrast == true && !location.href.match('\\+1')) uri = uri +
        '+1'
      else if (contrast == true) uri = uri + '+1'
      exit(uri)
    }, 550)
  })
  .on('touch click', '#main .suggestions .combine div', function(e) {
    var uri = '?q=' + '&' + $(this)
      .attr('response')
    if (contrast == true && !location.href.match('\\+1')) uri = uri + '+1'
    else if (contrast == true) uri = uri + '+1'
    exit(uri)
  })
  .on('touch click', '#main .center .quick .right', function(e) {
    var leftPos = $('#main .center .quick .feed')
      .scrollLeft()
    $('#main .center .quick .feed')
      .animate({
        scrollLeft: leftPos + 360
      }, 'slow')
    if ($('#main .center .quick .feed')
      .scrollLeft() >= $('#main .center .quick .feed')
      .width() - 359) $(this)
      .hide()
    if ($('#main .center .quick .feed')
      .scrollLeft() >= 0) $('#main .center .quick .left')
      .show()
  })
  .on('touch click', '#main .center .quick .left', function(e) {
    var leftPos = $('#main .center .quick .feed')
      .scrollLeft()
    $('#main .center .quick .feed')
      .animate({
        scrollLeft: leftPos - 360
      }, 'slow')
    if ($('#main .center .quick .feed')
      .scrollLeft() <= 360) $(this)
      .hide()
    $('#main .center .quick .right')
      .show()
  })
  .on('touch click mouseenter mouseleave',
    '.air .filter, .result .filter, .air .populate, .result .populate',
    function(e) {
      if (contrast == false)
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
  .on('touch click mouseenter mouseleave',
    '#arm #search #match .listing .index, #arm #search #match .listing .hover',
    function(e) {
      if (e.type == 'mouseenter') {
        $('#arm #search #match .listing .hover')
          .attr('class', 'index')
        if (contrast == true) $(this)
          .addClass('hover contrast')
        else $(this)
          .addClass('hover visual')
      }
      if (e.type == 'mouseleave') {
        if (contrast == true) $('#arm #search #match .listing .hover')
          .attr('class', 'index contrast')
      }
      if (e.type == 'touch' || e.type == 'click')
        if (translations.indexOf($('#arm #search #match .listing .hover')
            .attr('response')) > -1) {
          category = $('#arm #search #match .listing .hover')
            .attr('response')
          $('#main .air, #main .result, #main .center, #main .suggestions')
            .remove()
          populate($('.hover')
            .attr('response'))
          var uri = '?q=' + $('#arm #search #match .listing .hover')
            .attr('response')
            .toLowerCase()
          if (contrast == true && !location.href.match('\\+1')) uri = uri +
            '+1'
          else if (contrast == true) uri = uri + '+1'
          air($('#arm #search #match .listing .hover')
            .attr('response'))
          state(uri)
          document.title = $('#arm #search #match .listing .hover')
            .attr('response')
          progress(true, 100)
        } else {
          var uri = '?q=' + $(this)
            .attr('search') + '&' + $(this)
            .attr('response')
          if (contrast == true && !location.href.match('\\+1')) uri = uri +
            '+1'
          else if (contrast == true) uri = uri + '+1'
          exit(uri)
        }
      e.preventDefault()
    })
  .on('touch click', '#option .fa-home', function(e) {
    $('#main .center, #main .content, #main .result, #main .air')
      .remove()
    $('#main #visit')
      .show()
    var uri = '?q=' + category.toLowerCase()
    if (contrast == true && !location.href.match('\\+1')) uri = uri + '+1'
    else if (contrast == true) uri = uri + '+1'
    exit(uri)
  })
  .on('touch click', '#option .fa-circle-notch, #option .fa-circle', function(e) {
    $(this)
      .toggleClass('fa-circle-notch fa-circle')
    if (!location.href.match('\\?q=') && !location.href.match('\\?\\+1') &&
      contrast == false) {
      var init = document.location.href + '?+1'
      state(init)
      contrast = true
    } else if (location.href.match('\\?q=') && !location.href.match('\\+\\1') &&
      contrast == false) {
      var opposite = document.location.href + '+1'
      state(opposite)
      contrast = true
    } else if (location.href.match('\\?\\+1') || location.href.match('\\+1') ||
      contrast == false) {
      var invert = document.location.href
      invert = invert.replace(/\?\+1|\+1/g, '')
      history.replaceState(null, null, invert)
      contrast = false
    }
    visual()
  })
  .on('touch click', '#option .fa-code', function(e) {
    var re = menu.indexOf(menu[Math.floor(Math.random() * menu.length)])
    var uri = '?q=' + menu[re].cat.toLowerCase() + '&' + menu[re].id.toLowerCase()
      .replace(/\s|\.|\//g, '-')
    if (contrast == true && !location.href.match('\\+1')) uri = uri + '+1'
    else if (contrast == true) uri = uri + '+1'
    exit(uri)
    return false
  })
  .on('touch click', '#option .fa-terminal', function(e) {
  if (!id) id = category
  else id = menu[id].cat
    var array = []
    for (i = 1; i <= menu.length - 1; i++) {
      if (menu[i].cat == id) array.push(menu.indexOf(menu[i]))
    }
    var n = array[Math.floor(Math.random() * array.length)]
    var uri = '?q=&' + menu[n].id.toLowerCase()
      .replace(/(\s|\.|\/)/g, '-')
    if (contrast == true && !location.href.match('\\+1')) uri = uri + '+1'
    else if (contrast == true) uri = uri + '+1'
    exit(uri)
    return false
  })
  .on('touch click',
    '#main .center .channel .item .image .tag .fa-bookmark-o, #main .center .channel .item .image .tag .fa-bookmark, #main .center .channel #yt .tag .fa-bookmark, #main .center .channel #yt .tag .fa-bookmark-o, #container .sticky .wrap .tag .fa-bookmark, #container .sticky .wrap .tag .fa-bookmark-o',
    function(e) {
      $(this)
        .parents('.item, .wrap')
        .find('.source')
        .select()
      document.execCommand('copy')
      $(this)
        .toggleClass('fa-bookmark-o fa-bookmark')
      e.stopPropagation()
      visual()
    })
  .on('touch click',
    '#main .center .channel .item .image .tag .fa-heart-o, #main .center .channel .item .image .tag .fa-gratipay, #container .sticky .wrap .tag .fa-heart-o, #container .sticky .wrap .tag .fa-gratipay',
    function(e) {
      $(this)
        .toggleClass('fa-heart-o fab fa-gratipay')
      e.stopPropagation()
      visual()
    })
  .on('touch click', '#main .center .channel .item .header .fa-ellipsis-h, #container .sticky .header .fa-ellipsis-h',
    function(e) {
      $(this).parents('.item, .wrap')
        .find('.url')
        .select()
      document.execCommand('copy')
      $(this)
        .removeClass('fa-ellipsis-h')
        .addClass('fa-ellipsis-v')
      setTimeout(function() {
        $('#main .center .channel .item .copy, #container .sticky .header .copy')
          .removeClass('fa-ellipsis-v')
          .addClass('fa-ellipsis-h')
      }, 250)
      e.stopPropagation()
    })
  .on('touch click',
    '#main .center .channel .item .image .tag .fa-sticky-note-o, #main .center .channel .item .image .tag .fa-sticky-note',
    function(e) {
      if (contrast == true)
        if (!$(this)
          .parents('.item')
          .find('.share')
          .val()
          .match(/\+1/g)) $(this)
          .parents('.item')
          .find('.share')
          .val($(this)
            .parents('.item')
            .find('.share')
            .val() + '+1')
      if (contrast == false && $(this)
        .parents('.item')
        .find('.share')
        .val()
        .match(/\+1/g)) $(this)
        .parents('.item')
        .find('.share')
        .val($(this)
          .parents('.item')
          .find('.share')
          .val()
          .replace(/\+1/g, ''))
      $(this)
        .parents('.item')
        .find('.share')
        .select()
      document.execCommand('copy')
      $(this)
        .toggleClass('fa-sticky-note-o fa-sticky-note')
      e.stopPropagation()
      visual()
    })
  .on('touch click', '#main .center .channel .item .image .img, #wrapper #container #guide .sticky .item .image .img', function(e) {
    if (tap == 0) {
        // set first click
        tap = new Date().getTime();
        img = $(this).attr('id')
        setTimeout(function () {
          tap = 0
        }, 800)
    } else {
        // compare first click to this click and see if they occurred within double click threshold
        if (((new Date().getTime()) - tap) < 300) {
            // double click occurred
            $(this)
              .parents('.item, .sticky')
              .find('.fa-heart-o, .fa-gratipay')
              .toggleClass('fa-heart-o fab fa-gratipay')
            e.stopPropagation()
            visual()
            tap = 0;
        } else if (img == $(this).attr('id')){
          if ($(this)
            .hasClass('expand min') || $(this)
            .hasClass('expand full')) expand($(this)
            .attr('id'))
          else if ($(this)
                .hasClass('expand')) window
                .open($(this)
                  .parents('.item')
                  .attr('ext'),
                    '_blank',
                    'noreferrer')
            // not a double click so set as a new first click
            tap = 0;
            img = $(this).attr('id')
        }
    }
    e.stopPropagation()
    visual()
  })
  .on('touch click', '#main .center .channel .item .pub .more', function(e) {
    $(this)
      .parent()
      .html($(this)
        .parent()
        .attr('text'))
    $(this)
      .parent()
      .animate({
        width: '85%',
      }, 'slow', function() {
        $(this)
          .parent()
          .height('auto')
      })
    e.stopPropagation()
    $(this)
      .hide()
  })
