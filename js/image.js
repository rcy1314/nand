var image = function(emoji, empty, n, src) {

  var k = 5420
  var maximum = 799
  var minimum = 299
  var small = 120

  if (src.match(/https?\:\/\//g)) {
  $('#' + n).on('error', function() {
    if (emoji == true && !$(this).hasClass('guide'))
      $('#main .stats .info .queue').html(
        parseInt($('#main .stats .info .queue').text()) - 1
      )
    $(this).parents('.classic').find('.tag, .fill, .header').remove()
    $('#' + n).parents('.item').find('.ago')
        .css('display', 'inline-block')
        .parents('.item').find('.pub').css('display','block')
        .parents('.item')
        .find('.url, .share, .source, .header, .image, .img, .fill').remove()

  }).on('load', function() {
    if (emoji == true && !$(this).hasClass('guide')) {
      $('#main .stats .info .queue').html(
        parseInt($('#main .stats .info .queue').text()) - 1
      )
      $('#main .stats .info .images').html(
        parseInt($('#main .stats .info .images').text()) + 1
      )
    }
    if ($('#home').css('display') == 'none'){
      if ($(this).get(0).naturalWidth > minimum) {
        $(this).width('100%')
      } else if ($(this).get(0).naturalWidth < maximum) {
          $(this).width(99).addClass('expand').css('margin','10px')
          .parents('.item')
          .find('.classic').css({
            'display': 'flex',
            'align-items': 'center'
           }).find('.header, .tag, .addComment').remove()
       }
    } else if ($(this).hasClass('guide')) {
      $('#main').addClass('guide')
       if ($(this).get(0).naturalWidth >= $(this).get(0).naturalHeight)
         $(this).css('max-width', '100%').parents('.sticky').width('90%')
       else if ($(this).get(0).naturalHeight >= $(this).get(0).naturalWidth)
         $(this).width('100%').css('cssText', 'max-width: 60vh')
    } else {
     if ($(this).get(0).naturalHeight > k) {
         $(this).parents('.item').find('.ago')
             .css('display', 'inline-block')
             .parents('.item').find('.pub').css('display','block')
             .parents('.item')
             .find('.url, .share, .source, .header, .image, .img, .fill').remove()
         $('#main .stats .info .queue').html(
           parseInt($('#main .stats .info .images').text()) - 1
         )
         $(this).remove()
       } else if ($(this).get(0).naturalWidth < small) {
         $(this).width('100%').addClass('default').css('margin','10px')
           .parents('.item')
           .find('.classic').css({
             'display': 'flex',
             'align-items': 'center'
           }).find('.header, .tag, .addComment').remove()
       } else if ($(this).get(0).naturalHeight < minimum) {
         $(this).width(120).addClass('default').css('margin','10px')
           .parents('.item')
           .find('.classic').css({
             'display': 'flex',
             'align-items': 'center'
           }).find('.header, .tag, .addComment').remove()
      } else if ($(this).get(0).naturalWidth > minimum) {
        $(this).width('100%')
          .parents('.item').find('.image').width('100%')
      }
    }
    $('#' + n).parents('.item, #guide').find('.image, .img, .pub, .tag')
      .css('display', 'block')
    $('#' + n).parents('.item, #guide').find('.header, .wrap, .ago')
      .css('display', 'inline-block')
    $('#' + n).parents('.item, #guide').find('.fill').remove()
    if (category == 'Social' &&
        emoji == true &&
        !$(this).hasClass('default')) comment(n)
    visual()
  }).attr('src', src).parent().siblings('.fill').html(fill)
  }
  else if (empty == true ){
    $('#' + n).parents('.item').remove()
  } else {
    $(document)
      .ready(function() {
        if (emoji == true && !$(this).hasClass('guide'))
          $('#main .stats .info .queue').html(
            parseInt($('#main .stats .info .queue').text()) - 1
          )
      })
    $('#' + n).parents('.item').find('.ago')
        .css('display', 'inline-block')
        .parents('.item').find('.pub').css('display','block')
        .parents('.item')
        .find('.url, .share, .source, .header, .image, .img, .fill').remove()
    }

}
