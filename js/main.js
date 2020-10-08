$(document)
  .ready(function() {
    $('#input').css('display', 'block')
    $('input[type=text]').attr('tabindex', -1).focus()
    $('html body #container #main').on('scroll touchmove', function (){
      if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight - 350 &&
          reader == true && first == false && stop == true){
            $.loading()
            stop = false
            xml(null, null, $.random())
      }
    })
    if (onScreen == true && $('html body #container #main').width >= 768) sidebar(onScreen)
    if (quickFeeds == true && $('html body #container #main').width >= 426) toggle(quickFeeds)
    else if ($('html body #container #main').width() <= 425) toggle(true)
  })
  .on('touch click', 'a', function(e) {
    if ($(this).attr('ext')) $(this).attr('ext').blank()
    e.stopPropagation()
  })
  .on('touch click',
    'html body #container #main #visit #page #front #label .link, ' +
    'html body #container #main #visit #page #front #label .show',
    function(e) {
        quickFeeds = quickFeeds != true
        toggle(quickFeeds)
  })
  .on('touch click',
    'html body #container #sidebar #content #select .Home, ' +
    'html body #container #main #home',
    function(e) {
      id = 0
      $.loading()
      location.pathname.state()
      $('html body #container #main #top').hide()
      $('html body #container #main #toggle').show()
      $('html body #container #main #visit .quick .feed').empty()
      $('html body #container #main #visit #page #front #first').hide()
      $('html body #container #main #visit').css('visibility','visible').show()
      toggle(quickFeeds)
      document.title = ''
      $.unloading()
  })
  .on('touch click',
    'html body #container, ' +
    'html body #container #main, ' +
    'html body #container #main #visit, ' +
    'html body #container #main #top #arm, ' +
    'html body #container #main #top #option' +
    'html body #container #main #feed .center .channel .item .header',
    function(e) {
      if (!$('html body #container #main #top #arm #search input[type=text]').is(':focus')) {
        $('html body #container #main #top #arm #search input[type=text]').css({
          'caret-color': '#e4e4e4',
          'text-align': 'center',
          'padding-left': '0'
        }).blur().val('Search')
        $('html body #container #arm #search #input .icon').removeClass('slide')
        $('html body #container #main #top #arm #search #match').hide()
      }
      if (!$('html body #container #main #visit #page #front .focus input[type=text]').is(':focus')) {
        $('html body #container #main #visit #page #front .focus input[type=text]').blur()
        $('html body #container #main #visit #page #front #first').hide()
      }
      $('html body #container #guide .sticky .header, ' +
        'html body #container #main #feed .center .item .header')
        .find('.fa-ellipsis-v').removeClass('fa-ellipsis-v').addClass('fa-ellipsis-h')
      $('html body #container #guide .sticky .header, ' +
        'html body #container #main #feed .center .item .header').find('.attribute').hide()
    e.stopPropagation()
   })
  .on('touch click',
  'html body #container #main #option .fa-camera-retro, ' +
    'html body #container #sidebar #content #select .Images',
    function(e) {
    $.loading()
    $('html body #container #main #visit').hide()
    $('html body #container #main #toggle').hide()
    menubar(topBar)
    onlyImages = onlyImages != true
    if (onlyImages == true) notify ('Display only Images.')
    if (reader == false) populate(category)
    display(expand)
  })
  .on('touch click',
  'html body #container #toggle, ' +
  'html body #container #sidebar #content #select .Switch',
  function(e) {
    if (location.href.match('\\?\\+1') || location.href.match('\\+1')) {
      var uri = window.location.href.replace(/\?\+1|\+1/g, '')
      contrast = false
      op = op != true
    } else {
      var uri = window.location.href + '?+1'
      contrast = contrast != true
      op = op != true
    }
    if (op == 0 && groupType != 'blocks')
      $('html body #container #main #group .air .populate, ' +
        'html body #container #main #group .result .filter, ' +
        'html body #container #main #group .result .populate').addClass('invert')
    notify('Contrast set to ' + contrast.toString().capitalize())
    uri.state()
    visual()
  })
  .on('touch click',
    'html body #container #main #option .fa-heart, ' +
    'html body #container #main #option .fa-heart-o, ' +
    'html body #container #sidebar #content #select .Reader',
    function(e) {
      $.loading()
      $('html body #container #main #visit').hide()
      $(this).find('fa-heart-o, fa-heart').toggleClass('fa-heart-o fa-heart')
      if (reader == true) {
        id = 0
        reader = false
        first = true
        stop = false
        footer()
        $('html body #container #main #feed').remove()
        populate(category)
      } else if (reader == false) {
        notify('Reading ' + category + ' enabled.')
        reader = true
        if ($('html body #container #main #feed .center').length) first = false
        else first = true
        stop = true
        xml(null, null, $.random())
      }
  })
  .on('touch click', 'html body #container #main #top #arm #option .fa-home',
  function(e) {
    id = 0
    filter = []
    $.loading()
    location.pathname.state()
    document.title = category
    $('html body #container #main #visit').hide()
    menubar(topBar)
    populate(category)
  })
  .on('touch click', 'html body #container #main #option .fa-sun',
  function(e) {
    if (!location.href.match('\\+1') && !location.href.match('\\?\\+1')) {
      var uri = window.location.href + '?+1'
      contrast = contrast != true
      op = op != true
    } else if (location.href.match('\\?\\+1') || location.href.match('\\+1')) {
      var uri = window.location.href.replace(/\?\+1|\+1/g, '')
      contrast = contrast != true
      op = op != true
    }
    if (op == 0) notify('Invert Visual Applied.')
    else if (op == 1) notify('Opposite Visual Applied.')
    display(expand)
    uri.state()
    visual()
  })
  .on('touch click',
    'html body #container #main #group .air .populate, ' +
    'html body #container #main #group .result .filter, ' +
    'html body #container #main .content .status .filter, ' +
    'html body #container #main #group .result .populate',
    function(e) {
      $.loading()
      $('html body #container #main #feed, ' +
        'html body #container #main #group').remove()
      $('html body #containter #visit').hide()
      xml(null, null, $(this).attr('aria-item'))
  })
  .on('mouseenter',
    'html body #container #main .content .status .filter, ' +
    'html body #container #main #group .air .populate, ' +
    'html body #container #main #group .result .filter, ' +
    'html body #container #main #group .result .populate',
    function(e) {
      if (op == 0 && expand == false)
        $(this).toggleClass('overlay')
        $(this).on('webkitAnimationEnd oanimationend msAnimationEnd animationend',
          function(e) {
            $(this).removeClass('overlay')
            void this.clientWidth
            $(this).addClass('overlay')
          })
  })
  .on('mouseleave',
    'html body #container #main #group .air .populate, ' +
    'html body #container #main #group .result .filter, ' +
    'html body #container #main .content .status .filter, ' +
    'html body #container #main #group .result .populate',
    function(e) {
      if (op == 0) $(this).removeClass('overlay')
  })
  .on('touch click',
    'html body #container #guide .sticky .header .fa-ellipsis-h, ' +
    'html body #container #main #feed .center .channel .item .header .fa-ellipsis-h, ' +
    'html body #container #guide .sticky .header .fa-ellipsis-v, ' +
    'html body #container #main #feed .center .channel .item .header .fa-ellipsis-v',
    function(e) {
      if (!$(this).find('.attribute').is(':visible')){
        $(this).find('.attribute').show()
        $(this).removeClass('fa-ellipsis-h').addClass('fa-ellipsis-v')
      } else {
        $(this).find('.attribute').hide()
        $(this).removeClass('fa-ellipsis-v').addClass('fa-ellipsis-h')
      }
      e.stopPropagation()
      visual()
  })
  .on('touch click',
    'html body #container #guide .sticky .header .courtesy .copy .attribute .site, ' +
    'html body #container #main #feed .center .item .header .courtesy .copy .attribute .site',
    function(e) {
      $(this).parents('html body #container #guide .sticky, ' +
          'html body #container #main #feed .center .item')
            .find('.url').select()
      document.execCommand('copy')
      $(this).parents('.fa-ellipsis-v').removeClass('fa-ellipsis-v').addClass('fa-ellipsis-h')
      $(this).parents('.attribute').hide()
      notify('URL Copied to Clipboard.')
      e.stopPropagation()
  })
  .on('touchmove', 'html body #container #main #feed .center .quick .feed', function(e) {
    feed(8)
  })
  .on('touch click',
    'html body #container #main #visit #page .quick .feed .asset, ' +
    'html body #container #main #feed .center .quick .feed .asset',
    function(e) {
      $('html body #container #main #visit #page .quick .feed').empty()
      $('html body #container #main #toggle').hide()
      $.loading()
      $('html body #container #main #visit').hide()
      menubar(topBar)
      if ($.active == 0) xml(null, null, $(this).attr('aria-item'))
  })
  .on('touch click',
    'html body #container #main #visit #page .quick .right, ' +
    'html body #container #main #visit #page .quick .fa-plus, ' +
    'html body #container #main #feed .center .quick .right, ' +
    'html body #container #main #feed .center .quick .fa-plus',
    function(e) {
		  var $this = $(this)
      var leftPos = $(this).parents('html body #container #main .quick').find('.feed').scrollLeft()
      $(this).parents('html body #container #main .quick').find('.feed').animate({
        scrollLeft: leftPos + $this.parents('.quick').width()
      }, 'fast')
      if ($(this).parents('html body #container #main .quick').find('.feed').scrollLeft() >= 0)
          $(this).parents('html body #container #main .quick').find('.left').show()
      quick(8)
      feed(8)
  })
  .on('touch click',
    'html body #container #main #feed .center .quick .left, ' +
    'html body #container #main #feed .center .quick .fa-minus, ' +
    'html body #container #main #visit #page .quick .left, ' +
    'html body #container #main #visit #page .quick .fa-minus',
    function(e) {
		  var $this = $(this)
      var leftPos = $(this).parents('.quick').find('.feed').scrollLeft()
      $(this).parents('.quick').find('.feed').animate({
        scrollLeft: leftPos - $this.parents('.quick').width()
      }, 'slow')
      if ($(this).parents('.quick').find('.feed').scrollLeft() <= 892) {
          $(this).parents('.quick').find('.left').hide()
          $(this).parents('.quick').find('.right, .fa-plus').show()
      }
      else $(this).parents('.quick').find('.left').show()
  })
  .on('touch click',
    'html body #container #guide .blur, ' +
	  'html body #container #guide .checkmark',
    function (e) {
      $('#guide, #container .checkmark').fadeOut(750)
      $('html body #container #guide').empty()
      menubar(topBar)
      $('html body #container #main').removeClass('guide')
  })
  .on('touch click', 'html body #container #main #feed .center .channel .item', function(e) {
      $(this).attr('ext').blank()
      e.stopPropagation()
  })
  .on('touch click', 'html body #container #guide .sticky .item .image .img, ' +
    'html body #container #main #feed .center .channel .item .classic .image .img', function(e) {
      if (tap == 0) {
          $this = $(this)
          // set first click
          tap = new Date().getTime();
          setTimeout(function () {
            if (((new Date().getTime()) - tap) >= 350 && ((new Date().getTime()) - tap) < 400)
              if (category == 'Social' && $this.hasClass('default') && !$this.hasClass('guide') && $('html body #container #main').width() >= 426) {
                  var sticky = []
                  sticky.push({
                    courtesy: $this.parents('.item').find('.header').html(),
                    element: $this.parents('.item').attr('item'),
                    title: $this.parents('.item').find('.pub').attr('text'),
                    share: $this.parents('.item').find('.share').val(),
                    dst: $this.parents('.item').find('.ago:last').text(),
                    src: $this.parents('.item').find('.source').val(),
                    re: $this.parents('.item').attr('ext'),
                    id: $this.attr('id')
                  })
                  guide(sticky)
                } else if ($this.hasClass('guide')) $this.attr('src').blank()
                  else if (!$this.hasClass('default')) $this.parents('.item').attr('ext').blank()
                  else if (category != 'Social')
                    $this.parents('html body #container #guide .sticky .item, ' +
                    'html body #container #main #feed .center .channel .item').attr('ext').blank()
            tap = 0
          }, 350)
      } else {
          // compare first click to this click and see if they occurred within double click threshold
          if (((new Date().getTime()) - tap) < 350) {
              $this = $(this)
              // double click occurred
                  $(this).parents('html body #container #guide .sticky .item .image, ' +
                    'html body #container #main #feed .center .channel .item .classic .image')
                    .find('.fa-heart')
                    .css({
                      'animation': 'scale .7s ease-in-out .1s both',
                      'display': 'block'
                    })
                setTimeout(function() {
                  $this.parents('html body #container #guide .sticky .item .image, ' +
                    'html body #container #main #feed .center .channel .item .classic .image')
                    .find('.fa-heart')
                    .css({
                      'animation': 'none',
                      'display': 'none'
                    })
                }, 1500)
              var item = $(this).parents('.item').attr('item')
              $(this).parents('html body #container #guide')
                .find('.tag .fa-heart, .tag .fa-heart-o')
                .toggleClass('fa-heart-o fa-heart')
              $('html body #container #main #feed .center .channel .' + item)
                .parents('.item')
                .find('.tag .fa-heart, .tag .fa-heart-o')
                .toggleClass('fa-heart-o fa-heart')
              e.stopPropagation()
              visual()
              tap = 0
          }
      }
      e.stopPropagation()
      visual()
  })
  .on('touch click',
    'html body #container #guide .sticky .header .courtesy .copy .attribute .picture, ' +
    'html body #container #main #feed .center .channel .item .courtesy .copy .attribute .picture',
    function(e) {
      $(this).parents('html body #container #guide .sticky, ' +
        'html body #container #main #feed .center .item').find('.source').select()
      document.execCommand('copy')
      if (!$(this).hasClass('fa-bookmark')) $(this).toggleClass('fa-bookmark-o fa-bookmark')
      $(this).parents('.fa-ellipsis-v').removeClass('fa-ellipsis-v').addClass('fa-ellipsis-h')
      $(this).parents('.attribute').hide()
      notify('Source Copied to Clipboard.')
      e.stopPropagation()
      visual()
  })
  .on('touch click',
    'html body #container #guide .sticky .header .courtesy .copy .attribute .post, ' +
    'html body #container #main #feed .center .channel .item .header .courtesy .copy .attribute .post',
    function(e) {
      if (location.href.match('\\+1'))
          $(this).parents('html body #container #guide .sticky, ' +
            'html body #container #main #feed .center .item').find('.share')
          .val($(this).parents('html body #container #guide .sticky, ' +
            'html body #container #main #feed .center .item').find('.share').val() + '+1')
      else if (!location.href.match('\\+1'))
        $(this).parents('html body #container #guide .sticky, ' +
          'html body #container #main #feed .center .item').find('.share').val(
          $(this).parents('html body #container #guide .sticky, ' +
            'html body #container #main #feed .center .item').find('.share').val().replace(/\+1/g, '')
        )
      $(this).parents('html body #container #guide .sticky, ' +
        'html body #container #main #feed .center .item').find('.share').select()
      document.execCommand('copy')
      if (!$(this).hasClass('fa-sticky-note')) $(this).toggleClass('fa-sticky-note-o fa-sticky-note')
      notify('Post Copied to Clipboard.')
      $(this).parents('.fa-ellipsis-v').removeClass('fa-ellipsis-v').addClass('fa-ellipsis-h')
      $(this).parents('.attribute').hide()
      e.stopPropagation()
      visual()
  })
  .on('touch click',
    'html body #container #main #feed .center .channel .item .pub .more', function(e) {
      $(this).parent().html($(this).parent().attr('text'))
      $(this).parent().animate({
          width: '85%',
        }, 'slow', function() {
          $(this).parent().height('auto')
      })
      e.stopPropagation()
      $(this).hide()
  })
  .on('touch click', 'html body #container #main #feed .center #bottom .bottom',
    function(e) {
      $.loading()
      document.title = category
      if (location.href.match('\\?q=')) {
        var uri = location.search.split('?q=')[1].match(/[^&]+/g)
        if (location.href.match('\\+1')) var query = uri[0].replace(/\+1/g, '').space()
        else var query = uri[0].space()
        response(false,
                 false,
                 query,
                 true)
      } else populate(category)
      id = 0
    })
  .on('touch click',
    'html body #container #main #feed .center #bottom .back, ' +
    'html body #container #main #feed .center #bottom .next, ' +
    'html body #container #main .content .status .asset, ' +
    'html body #container #main .content .suggestions .combine div',
    function(e) {
      $.loading()
      xml(null, null, $(this).attr('aria-item'))
  })
  .on('touch click', 'html body #container #main .content .suggestions .combine a', function(e) {
      id = 0
      $.loading()
      populate($(this).attr('aria-item'))
 })
