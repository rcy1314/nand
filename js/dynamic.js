$(document)
  .ready()
.on('touch click', '.detail svg, #main .center .quick .feed .asset .id, ' +
  '#main #page .quick .feed .asset .id, ' +
  '#main .filter .display .id, #main .populate .display .id', function(e) {
  var $this = $(this)
  $(this).parent().find('svg circle').addClass('mask')
  setTimeout(function() {
      if ($this.parents('.index').find('.detail')){
      var uri = '?q=&' + $this.parents('.index').find('.detail').attr('response')
      uri.define().exit()
      return false
      }
    if (location.href.match('\\?q=')) {
      var uri = location.search.split('?q=')[1].match(/[^&]+/g)
      if (location.href.match(/\+1/g))
        var res = uri[0].replace(/\+1/g, '')
      else var res = uri[0]
      uri = '?q=' + res + '&' + $this.attr('response')
      uri.define().exit()
    } else {
      var uri = '?q=&' + $this.attr('response')
      uri.define().exit()
    }
  }, 750)
  e.stopPropagation()
})

.on('touch click', '#main .center .channel .item', function(e) {
  $(this).attr('ext').blank()
  e.stopPropagation()
})
.on('touch click',
  '#main .center .channel .item .header .fa-ellipsis-h, ' +
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
    e.stopPropagation()
  })
.on('touch click', '#main .quick .right', function(e) {
    var leftPos = $(this).parents('.quick').find('.feed').scrollLeft()
    $(this).parents('.quick').find('.feed').animate({
        scrollLeft: leftPos + 720
      }, 'fast')
      if (leftPos >= $(this).parents('.quick').find('.feed')[0]
          .scrollWidth - $(this).parents('.quick').find('.feed').width() - 720)
          $(this).hide()
    if ($(this).parents('.quick').find('.feed')
      .scrollLeft() >= 0) $(this).parents('.quick').find('.left')
      .show()
})
.on('touch click', '#main #page .quick .left', function(e) {
    var leftPos = $(this).parents('.quick').find('.feed').scrollLeft()
    $(this).parents('.quick').find('.feed').animate({
        scrollLeft: leftPos - 360
      }, 'slow')
    if ($(this).parents('.quick').find('.feed')
      .scrollLeft() <= 360) $(this)
      .hide()
    $(this).parents('.quick').find('.feed').show()
})
.on('touch click', '#guide, #container .checkmark', function (e) {
  $('#main').removeClass('guide')
  $('#guide, #container .checkmark').fadeOut(250)
})
.on('touch click', '#wrapper #container #guide .sticky .item .image .img',
  function (e) {
  id = $(this).attr('id')
  if (tap == 0) {
      // set first click
      tap = new Date().getTime();
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
          $(this)
            .parents('#container')
            .find('#main .' + id + ' .fa-heart-o, ' +
              '#main .' + id + ' .fab, #main .' + id + ' .fa-gratipay')
            .toggleClass('fa-heart-o fab fa-gratipay')
          visual()
          tap = 0
      } else {
        $('#main').removeClass('guide')
        $('#guide').hide()
      }
  }
  e.stopPropagation()
  visual()
})
.on('touch click', '#main .center .channel .item .image .img', function(e) {
  if (tap == 0) {
      // set first click
      if ($(this)
            .hasClass('default'))
            $(this).parents('.item').attr('ext').blank()
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
      } else if (img == $(this).attr('id') && !$(this).hasClass('default')){
        $(this).addClass('guide')
        $('#guide').empty()
        guide(
          $(this).parents('.item').attr('item'),
          $(this).parents('.item').attr('ext'),
          $(this).parents('.item').attr('item'),
          $(this).parents('.item').find('.header').html(),
          $(this).parents('.item').find('.pub').attr('text'),
          $(this).parents('.item').find('.ago').text(),
          $(this).parents('.item').find('.share').val(),
          $(this).parents('.item').find('.source').val()
        )
        $('#guide').find('.copy:first').remove()
        image(false, false,
          $(this).parents('.item').attr('item'),
          $(this).parents('.item').find('.img').attr('src')
        )
        $('#guide, .checkmark').show()
        $('.sticky').hide().fadeIn(1000)
        if ($('.' + $(this).parents('.item').attr('item')).find('.fab').length)
          $('.sticky')
            .find('.fa-heart-o').toggleClass('fa-heart-o fab fa-gratipay')
          // not a double click so set as a new first click
          tap = 0;
          img = $(this).attr('id')
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
    if (!$(this).parents('.wrap').find('.share').val().match(/\+1/g))
      $(this).parents('.wrap').find('.share')
      .val($(this).parents('.wrap').find('.share').val() + '+1')
  if (contrast == false && $(this).parents('.wrap').find('.share').val()
    .match(/\+1/g))
    $(this).parents('.wrap').find('.share').val(
      $(this).parents('.wrap').find('.share').val().replace(/\+1/g, '')
    )
  $(this).parents('.wrap').find('.share').select()
  document.execCommand('copy')
  if (!$(this).hasClass('fa-sticky-note'))
    $(this).toggleClass('fa-sticky-note-o fa-sticky-note')
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
  response(true, false, uri, false, false)
  uri = '?q=&' + uri.replace(/\s/g, '-')
  uri.define().state()
})
.on('touch click', '#main .center #bottom .bottom', function(e) {
  $('#main .center, #main .content, #main .translation').remove()
  if (location.href.match('\\?q=')) {
    var uri = location.search.split('?q=')[1].match(/[^&]+/g)
    if (location.href.match('\\+1'))
      var res = uri[0].replace(/\+1/g, '')
    else var res = uri[0]
    res = res.replace(/\-|\+/g, ' ')
    response(false, false, res, true, null)
    uri = '?q=' + uri[0].replace(/\-/g, '+')
    uri.define().state()
  }
  else {
    if (location.href.split('?')[1].match(/^[a-z0-9\+1]+$/i))
        var id = location.href.split('?')[1].slice(0, 2)
        var i = menu.findIndex((item) => item.hash === id)
        response(false, false,
          menu[i].id.toLowerCase().replace(/\s|\/|\./g, ' '),
          true, false
        )
  }
})
.on('touch click', '#main .suggestions .combine div', function(e) {
  $('#main .center, #main .content, #main .translation').remove()
  var uri = '?q=' + '&' + $(this).attr('response')
  response(true, false, $(this).attr('response').replace(/\-/g, ' '), false, false)
  uri.define().state()
})
