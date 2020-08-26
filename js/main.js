$(document)
  .ready(function() {
    $('#input').css('display', 'block')
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
    if (contrast == true && !location.href.match('\\+1')) uri = uri + '?+1'
    else if (contrast == true) uri = uri + '?+1'
    uri.exit()
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
  .on('touch click', '#option .fa-home', function(e) {
    var uri = '?q=' + category.toLowerCase()
    uri.define().exit()
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
    id = 0
    category = $(this).attr('response')
    var uri = '?q=' + $(this).attr('response').toLowerCase()
    $('#handle image').css('visibility','visible')
    progress(true, 100)
    uri.define().exit()
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
    .on('touch click', '#main .center .channel .item', function(e) {
      $(this).attr('ext').blank()
      e.stopPropagation()
    })
    .on('touch click', '#main .center .channel .item .header .fa-ellipsis-h, ' +
      '#container .sticky .header .fa-ellipsis-h',
      function(e) {
        $(this).parents('.item, .wrap').find('.url').select()
        document.execCommand('copy')
        $(this).removeClass('fa-ellipsis-h').addClass('fa-ellipsis-v')
        setTimeout(function() {
          $('#main .center .channel .item .copy, #guide .sticky .header .copy')
            .removeClass('fa-ellipsis-v')
            .addClass('fa-ellipsis-h')
        }, 250)
        notify('URL Copied to Clipboard')
        e.stopPropagation()
      })
    .on('mousedown', '#main .feed .asset', function(e) {
      if (e.which == 1){
        dragStartX = 0;
        enableDrag = true;
        dragStartX = e.pageX;
        feed('page', 40)
        feed('center', 40)
        tap = new Date().getTime();
        mouseasset = $(this).attr('response')
        marginLeftStart = parseInt($(this).parents('.feed').scrollLeft());
    if ($(this).parents('.feed').scrollLeft() >= 3300)
        for (i = 0; i < 40; i++)
          $(this).parents('.feed').find('.asset:first').empty()
      }
      $(this).unbind("mousemove")
      e.preventDefault();
    })
    .on('mousemove', '#main .feed .asset', function(e) {
          if (enableDrag) {
              var delta = e.pageX - dragStartX;
              $(this).parents('.feed').scrollLeft(marginLeftStart - delta);
          }
          $(this).unbind("mouseup");
          e.preventDefault();
    })
    .on('mouseup', document, function(e) {
        if (enableDrag)
            enableDrag = false;
        else mouseasset = false
        if (((new Date().getTime()) - tap) < 150) {
              enableDrag = false;
              if (mouseasset){
                  var uri = '?q=&' + mouseasset
                  uri.define().exit()
              }
          }
          e.preventDefault();
    })
    .on('touchmove', '#main .page .quick .feed', function(e) {
      feed('page', 40)
      if ($(this).scrollLeft() >= 3300)
        for (i = 0; i < 40; i++)
          $('#main .page .quick .feed .asset:first').remove()
    })
    .on('touchmove', '#main .center .quick .feed', function(e) {
      feed('page', 40)
      if ($(this).scrollLeft() >= 3300)
        for (i = 0; i < 40; i++)
          $('#main .center .quick .feed .asset:first').remove()
    })
    .on('touch click', '#main .quick .right, #main .center .right, .fa-angle-double-right', function(e) {
      feed('page', 9)
        var leftPos = $(this).parents('.quick').find('.feed').scrollLeft()
        $(this).parents('.quick').find('.feed').animate({
            scrollLeft: leftPos + 620
          }, 'fast')
          if (leftPos >= $(this).parents('.quick').find('.feed')[0]
              .scrollWidth - $(this).parents('.quick').find('.feed').width() - 616)
              $(this).hide()
        if ($(this).parents('.quick').find('.feed')
          .scrollLeft() >= 0) $(this).parents('.quick').find('.left').show()
    })
    .on('touch click', '#main .page .quick .left, #main .center .left, .fa-angle-double-left', function(e) {
        var leftPos = $(this).parents('.quick').find('.feed').scrollLeft()
        $(this).parents('.quick').find('.feed').animate({
            scrollLeft: leftPos - 385
          }, 'slow')
        if ($(this).parents('.quick').find('.feed')
          .scrollLeft() <= 385) {
            $(this).parents('.quick').find('.left').hide()
            $(this).parents('.quick').find('.right, .fa-angle-double-right').show()
        }
        else $(this).parents('.quick').find('.left').show()
    })
    .on('touch click', '#guide, #container .checkmark', function (e) {
      $('#main').removeClass('guide')
      $('#guide, #container .checkmark').fadeOut(250)
    })
    .on('touch click', '#wrapper #container #guide .sticky .item .image .img',
      function (e) {
            $('#main').removeClass('guide')
            $('#guide').hide()
      e.stopPropagation()
      visual()
    })
    .on('touch click', '#main .center .channel .item .image .img', function(e) {
      if (tap == 0) {
          $this = $(this)
          // set first click
          tap = new Date().getTime();
          img = $(this).attr('id')
          setTimeout(function () {
            if (((new Date().getTime()) - tap) > 300 && ((new Date().getTime()) - tap) < 350)
              $this.parents('.item').attr('ext').blank()
            tap = 0
          }, 325)
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
          }
      }
      e.stopPropagation()
      visual()
    })
    .on('touch click', '.tag .fa-heart-o, .tag .fa-gratipay',
      function(e) {
        $(this).toggleClass('fa-heart-o fab fa-gratipay')
        e.stopPropagation()
        visual()
      })
    .on('touch click', '.tag .fa-bookmark-o, .tag .fa-bookmark', function(e) {
        $(this).parents('.item, .wrap').find('.source').select()
        document.execCommand('copy')
        if (!$(this).hasClass('fa-bookmark'))
          $(this).toggleClass('fa-bookmark-o fa-bookmark')
          notify('Source Copied to Clipboard')
        e.stopPropagation()
        visual()
      })
    .on('touch click', '.tag .fa-sticky-note-o, .tag .fa-sticky-note',
      function(e) {
        if (contrast == true)
          if (!$(this).parents('.item').find('.share').val().match(/\+1/g))
            $(this).parents('.item').find('.share')
            .val($(this).parents('.item').find('.share').val() + '+1')
        if (contrast == false && $(this).parents('.item').find('.share').val()
          .match(/\+1/g))
          $(this).parents('.item').find('.share').val(
            $(this).parents('.item').find('.share').val().replace(/\+1/g, '')
          )
        $(this).parents('.item').find('.share').select()
        document.execCommand('copy')
        if (!$(this).hasClass('fa-sticky-note'))
          $(this).toggleClass('fa-sticky-note-o fa-sticky-note')
        e.stopPropagation()
        visual()
      })
    .on('touch click', '.tag .fa-sticky-note-o, .tag .fa-sticky-note',
    function(e) {
      if (contrast == true)
        if (!$(this).parents('.item').find('.share').val().match(/\+1/g))
          $(this).parents('.item').find('.share')
          .val($(this).parents('.item').find('.share').val() + '+1')
      if (contrast == false && $(this).parents('.item').find('.share').val()
        .match(/\+1/g))
        $(this).parents('.item').find('.share').val(
          $(this).parents('.item').find('.share').val().replace(/\+1/g, '')
        )
      $(this).parents('.item').find('.share').select()
      document.execCommand('copy')
      if (!$(this).hasClass('fa-sticky-note'))
        $(this).toggleClass('fa-sticky-note-o fa-sticky-note')
      notify('Post Copied to Clipboard')
      e.stopPropagation()
      visual()
    })
    .on('touch click', '#main .center .channel .item .pub .more', function(e) {
      $(this).parent().html($(this).parent().attr('text'))
      $(this).parent().animate({
          width: '85%',
        }, 'slow', function() {
          $(this).parent().height('auto')
        })
      e.stopPropagation()
      $(this).hide()
    })
    .on('submit', '#main .center .channel .item .classic .addComment', function(e) {
      if ($(this).children('.comment').val() != '')
        item = $(this).parents('.item').attr('item')
      if ($('.' + item + ' .add').length >= 3)
        $('.' + item + ' .add:last').remove()
        $('.' + item + ' .pub:last').after("<div class='add'><b>" + $('.' + item +
              ' .addComment .comment')
            .val() + "</div>")
      $(this).parents('.item').find('.fa-comment-o').removeClass('fa-comment-o')
        .addClass('fas fa-comments')
      $('.' + item + ' .addComment .comment').val('')
      e.preventDefault()
      visual()
    })
    .on('touch click', '#main .center .channel .item .post', function(e) {
      $(this).siblings('.comment').focus().submit()
      e.stopPropagation()
    })
    .on('touch click', '#main #bottom .previous, #main #bottom .next', function(e) {
      $('#main .center, #main .content, #main .translation').remove()
      var uri = menu[$(this).attr('index')].id.toLowerCase().replace(/\s|\.|\//g, ' ')
      response(true, false, uri, false)
      uri = '?q=&' + uri.replace(/\s/g, '-')
      uri.define().state()
    })
    .on('touch click', '#main .center #bottom .bottom', function(e) {
      $('#top, #main .center, #main .content, #main .translation').remove()
      if (location.href.match('\\?q=')) {
        var uri = location.search.split('?q=')[1].match(/[^&]+/g)
        if (location.href.match('\\+1'))
          var res = uri[0].replace(/\+1/g, '')
        else var res = uri[0]
        response(false, false, uri, true)
        uri = '?q=' + res.replace(/\-/g, '+')
        uri.define().exit()
      }
      else {
        if (location.href.split('?')[1].match(/^[a-z0-9\+1]+$/i))
            var id = location.href.split('?')[1].slice(0, 2)
            var i = menu.findIndex((item) => item.hash === id)
            response(false, false,
              menu[i].id.toLowerCase().replace(/\s|\/|\./g, ' '),
              true
            )
      }
    })
    .on('touch click', '#main .suggestions .combine div', function(e) {
      $('#main .center, #main .content, #main .translation').remove()
      var uri = '?q=' + '&' + $(this).attr('response')
      response(true, false, $(this).attr('response').replace(/\-/g, ' '), false)
      uri.define().state()
    })
    .on('touch click', '#main .content .stats .asset', function(e) {
      $('#main .center, #main .content, #main .translation').remove()
      var uri = '?q=' + '&' + $(this).parents('.asset').attr('response')
      response(true, false, $(this).attr('response').replace(/\-/g, ' '), false)
      uri.define().state()
    })
