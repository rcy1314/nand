var image = function(n, src) {

  var uhd = 3840
  var large  = 2800
  var mobile = 1281
  var maximum = 799
  var minimum = 299

  if (src.match(/\.gif|\.jpg|\.jpeg|\.png/g))
  $('#' + n).on('error', function() {
    if (!$(this).hasClass('guide'))
      $('#main .stats .info .queue').html(
        parseInt($('#main .stats .info .queue').text()) - 1
      )
    $(this).parents('.classic').find('.tag, .fill, .header').remove()
  }).on('load', function() {
    if ($('#home').css('display') == 'none'
        && $(this).get(0).naturalWidth > minimum) {
      $(this).width('100%').addClass('expand')
   } else if ( $('#home').css('display') == 'none' &&
     $(this).get(0).naturalWidth < maximum) {
       $(this).width(120).addClass('expand').css('margin','10px')
       .parents('.item')
       .find('.classic').css({
         'display': 'flex',
         'align-items': 'center'
        }).find('.header, .tag, .addComment').remove()
   } else if ($(this).hasClass('guide') &&
        $(this).get(0).naturalHeight > uhd) {
          $(this).width('100%').addClass('expand')
          .parents('.sticky').width('35%')
   } else if ($(this).get(0).naturalHeight > uhd) {
      $(this).addClass('expand min').width('100%').parents('.item')
        .find('.image').css({
          'margin': '0 auto',
          'width': '35%'
        })
   } else if ($(this).hasClass('guide') &&
     $(this).get(0).naturalHeight > large) {
       $(this).width('100%').addClass('expand')
       .parents('.sticky').width('50%')
   } else if ($(this).get(0).naturalHeight > large) {
      $(this).addClass('expand min').width('100%').parents('.item')
        .find('.image').css({
          'margin': '0 auto',
          'width': '50%'
        })
    } else if ($(this).hasClass('guide') &&
      $(this).get(0).naturalHeight > mobile) {
        $(this).width('100%').addClass('expand')
        .parents('.sticky').width('70%')
    } else if ($(this).get(0).naturalWidth > mobile) {
      $(this).addClass('expand min').width('100%').parents('.item')
        .find('.image').css({
          'margin': '0 auto',
          'width': '50%'
        })
    } else if ($(this).hasClass('guide') &&
      $(this).get(0).naturalWidth > minimum) {
        $(this).width('100%').addClass('expand')
          .parents('.sticky').width('70%')
    } else if ($(this).get(0).naturalWidth > minimum) {
      $(this).addClass('expand min').width('100%').parents('.item')
        .find('.image').width('100%')
    } else if ($(this).get(0).naturalWidth < maximum) {
      $(this).width(120).addClass('expand').css('margin','10px')
      .parents('.item')
      .find('.classic').css({
        'display': 'flex',
        'align-items': 'center'
      }).find('.header, .tag, .addComment').remove()
    }
    if (!$(this).hasClass('guide'))
      $('#main .stats .info .queue').html(
        parseInt($('#main .stats .info .queue').text()) - 1
    )
    $('#' + n)
      .parents('.item, #guide')
      .find('.image, .img, .pub, .tag')
      .css('display', 'block')
    $('#' + n)
      .parents('.item, #guide')
      .find('.header, .wrap, .ago')
      .css('display', 'inline-block')
    $('#' + n)
      .parents('.item, #guide')
      .find('.fill')
      .remove()
    if (category == 'Social' && $(this).get(0).naturalWidth > minimum) comment(n)
    visual()
  }).attr('src', src).parent().siblings('.fill').html(fill)
  else
    $('#' + n).parents('.item').find('.pub').css('display','block')
      .parents('.item').find('.header, .image, .img, .fill').remove()

}
