$(document)
  .ready(function() {
    $('#input')
      .css('display', 'block')
  })
  .on('touch click', '#arm, #option, #main, #visit, #container', function(e) {
    if (!$('#arm #search input[type=text]')
      .is(':focus')) {
      $('#arm #search #match')
        .hide()
      $('#arm #search #input .icon')
        .removeClass('slide')
    }
    $('#main #visit #page #front .icon')
      .removeClass('search')
    $('#main #visit #page #front #first').css('visibility','hidden')
  })
  .on('touch click', '#arm #search #input .icon', function(e) {
    $('#arm #search #input input[type=text]')
      .focus()
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
  .on('touch click', '#main #visit #placeholder', function(e) {
    $('#top').css('visibility','visible')
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
        scrollLeft: leftPos + 720
      }, 'fast')
      if (leftPos >= $('#main .center .quick .feed')[0]
          .scrollWidth - $('#main .center .quick .feed').width() - 720) $(this)
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
        else $('#arm #search #match .listing .hover').attr('class','index visual')
      }
      if (e.type == 'touch' || e.type == 'click')
        if (translations.indexOf($('#arm #search #match .listing .hover, ' +
            '#main #visit #page #front #first .listing .hover')
            .attr('response')) > -1) {
          $('#top').css('visibility','visible')
          category = $('#arm #search #match .listing .hover, ' +
            '#main #visit #page #front #first .listing .hover')
            .attr('response')
          populate($('.hover')
            .attr('response'))
          var uri = '?q=' + $('#arm #search #match .listing .hover, ' +
            '#main #visit #page #front #first .listing .hover')
            .attr('response')
            .toLowerCase()
          if (contrast == true && !location.href.match('\\+1')) uri = uri +
            '+1'
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
          var uri = '?q=' + $(this)
            .attr('search') + '&' + $(this)
            .attr('response')
          if (contrast == true && !location.href.match('\\+1')) uri = uri +
            '+1'
          else if (contrast == true) uri = uri + '+1'
          exit(uri)
        }
        visual()
      e.preventDefault()
    })
  .on('touch click',
    '#main .center .channel .item .image .tag .fa-bookmark-o, ' +
    '#main .center .channel .item .image .tag .fa-bookmark, ' +
    '#main .center .channel #yt .tag .fa-bookmark, ' +
    '#main .center .channel #yt .tag .fa-bookmark-o, ' +
    '#container .sticky .wrap .tag .fa-bookmark, ' +
    '#container .sticky .wrap .tag .fa-bookmark-o',
    function(e) {
      $(this)
        .parents('.item, .wrap')
        .find('.source')
        .select()
      document.execCommand('copy')
      if (!$(this).hasClass('fa-bookmark'))
        $(this).toggleClass('fa-bookmark-o fa-bookmark')
      e.stopPropagation()
      visual()
    })
  .on('touch click',
    '#main .center .channel .item .image .tag .fa-heart-o, ' +
    '#main .center .channel .item .image .tag .fa-gratipay, ' +
    '#container .sticky .wrap .tag .fa-heart-o, ' +
    '#container .sticky .wrap .tag .fa-gratipay',
    function(e) {
      $(this)
        .toggleClass('fa-heart-o fab fa-gratipay')
      e.stopPropagation()
      visual()
    })
  .on('touch click',
    '#main .center .channel .item .header .fa-ellipsis-h, ' +
    '#container .sticky .header .fa-ellipsis-h',
    function(e) {
      $(this).parents('.item, .wrap')
        .find('.url')
        .select()
      document.execCommand('copy')
      $(this)
        .removeClass('fa-ellipsis-h')
        .addClass('fa-ellipsis-v')
      setTimeout(function() {
        $('#main .center .channel .item .copy, #guide .sticky .header .copy')
          .removeClass('fa-ellipsis-v')
          .addClass('fa-ellipsis-h')
      }, 250)
      e.stopPropagation()
    })
  .on('touch click',
    '#main .center .channel .item .image .tag .fa-sticky-note-o, ' +
    '#main .center .channel .item .image .tag .fa-sticky-note',
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
      if (!$(this).hasClass('fa-sticky-note'))
        $(this).toggleClass('fa-sticky-note-o fa-sticky-note')
      e.stopPropagation()
      visual()
    })
  .on('touch click',
    '#main .center .channel .item .image .img, ' +
    '#wrapper #container #guide .sticky .item .image .img', function(e) {
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
