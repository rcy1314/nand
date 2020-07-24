$(document)
  .ready()
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
  }, 750)
})

.on('touch click', '#main .center .channel .item', function(e) {
  window.open($(this)
    .attr('ext'), '_blank', 'noreferrer')
  e.stopPropagation()
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
  '#main .center .channel .item .image .tag .fa-sticky-note-o, ' +
  '#main .center .channel .item .image .tag .fa-sticky-note',
  function(e) {
    if (contrast == true)
      if (!$(this).parents('.item').find('.share').val()
        .match(/\+1/g))
        $(this).parents('.item').find('.share')
        .val($(this).parents('.item').find('.share').val() + '+1')
    if (contrast == false && $(this).parents('.item').find('.share').val()
      .match(/\+1/g))
      $(this).parents('.item').find('.share').val(
        $(this).parents('.item').find('.share').val().replace(/\+1/g, ''))
    $(this).parents('.item').find('.share').select()
    document.execCommand('copy')
    if (!$(this).hasClass('fa-sticky-note'))
      $(this).toggleClass('fa-sticky-note-o fa-sticky-note')
    e.stopPropagation()
    visual()
  })
.on('touch click',
'#container .sticky .wrap .tag .fa-sticky-note-o, ' +
'#container .sticky .wrap .tag .fa-sticky-note',
function(e) {
  if (contrast == true)
    if (!$(this).parents('.wrap').find('.share').val()
      .match(/\+1/g))
      $(this).parents('.wrap').find('.share')
      .val($(this).parents('.wrap').find('.share').val() + '+1')
  if (contrast == false && $(this).parents('.wrap').find('.share').val()
    .match(/\+1/g))
    $(this).parents('.wrap').find('.share').val(
      $(this).parents('.wrap').find('.share').val().replace(/\+1/g, ''))
  $(this).parents('.wrap').find('.share').select()
  document.execCommand('copy')
  if (!$(this).hasClass('fa-sticky-note'))
    $(this).toggleClass('fa-sticky-note-o fa-sticky-note')
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
.on('touch click', '#main .center .channel .item .post', function(e) {
  $(this)
    .siblings('.comment')
    .focus()
    .submit()
  e.stopPropagation()
})
.on('touch click', '#main .center #bottom .previous', function(e) {

  var uri = menu[$(this).attr('index')].id.toLowerCase().replace(/\s|\.|\//g, '-')
  if (contrast == true && !location.href.match('\\+1')) uri = uri + '+1'
  else if (contrast == true) uri = uri + '+1'
  exit('?q=&' + uri)

})
.on('touch click', '#main .center #bottom .next', function(e) {

  var uri = menu[$(this).attr('index')].id.toLowerCase().replace(/\s|\.|\//g, '-')
  if (contrast == true && !location.href.match('\\+1')) uri = uri + '+1'
  else if (contrast == true) uri = uri + '+1'
  exit('?q=&' + uri)

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
  var uri = '?q=' + '&' + $(this)
    .attr('response')
  if (contrast == true && !location.href.match('\\+1')) uri = uri + '+1'
  else if (contrast == true) uri = uri + '+1'
  exit(uri)
})
