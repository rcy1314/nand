var image = function(n, src) {
  var large = 2800
  var mobile = 1281
  var minimum = 299
  var maximum = 799
  $('#' + n).on('error', function() {
      $(this).parents('.classic')
        .find(
          '.tag, .fill, .header')
        .css('display',
          'none').parents('.item')
        .find('.pub, .ago').css(
          'display', 'block')
    }).on('load', function() {
      if ($('#home').css(
        'display') == 'none' &&
        $('#' + n).get(0)
        .naturalWidth > minimum) {
        $('#' + n).width('100%')
          .addClass('expand')
          .parents('.item')
          .find('.ago')
          .css('display',
            'inline-block')
          .parents('.item').find(
            '.fill').html(fill)
        if (category == 'Social')
          comment(n)
      } else if ($('#' + n).get(0)
        .naturalWidth < maximum &&
        $('#home').css('display') ==
        'none') {
        $('#' + n).width(120)
          .addClass('expand').css(
            'margin', '10px')
          .parents('.item')
          .find('.classic').css({
            'display': 'flex',
            'align-items': 'center'
          }).find(
            '.header, .tag, .addComment'
            ).css('display', 'none')
          .siblings('.fill').css(
            'left', '18px').html(
            fill)
          .parents('.item').find(
            '.ago').css('display',
            'inline-block')
      } else if ($('#' + n)
        .hasClass('guide') &&
        $('#' + n).get(0)
        .naturalHeight > mobile ||
        $('#' + n)
        .get(0).naturalHeight >
        large && $('#' + n)
        .get(0).naturalWidth <
        mobile) {
        $('#' + n).width('100%')
          .addClass('expand')
          .parents('.sticky').width(
            '40%')
        $('#' + n).parents(
            '.sticky')
          .find('.fill')
          .html(fill)
      } else if ($('#' + n).get(0)
        .naturalHeight > mobile ||
        $('#' + n)
        .get(0).naturalHeight >
        maximum && $('#' + n)
        .get(0).naturalWidth <
        maximum) {
        $('#' + n).addClass(
            'expand min').width(
            '100%').parents('.item')
          .find('.image').css({
            'margin': '0 auto',
            'width': '45%',
            'left': '15px'
          }).siblings('.fill').html(
            fill)
          .parents('.item').find(
            '.ago').css('display',
            'inline-block')
        if (category == 'Social')
          comment(n)
      } else if ($('#' + n)
        .hasClass('guide') &&
        $('#' + n).get(0)
        .naturalHeight > minimum) {
        $('#' + n).width('100%')
          .addClass('expand')
          .parents('.sticky').width(
            '70%')
          .parents('.item')
          .find('.ago')
          .css('display',
            'inline-block')
        $('#' + n).parents(
            '.sticky').find('.fill')
          .html(fill)
      } else if ($('#' + n).get(0)
        .naturalWidth > minimum) {
        $('#' + n).width('100%')
          .addClass('expand')
          .parents('.item')
          .find('.ago')
          .css('display',
            'inline-block')
          .parents('.item').find(
            '.fill').html(fill)
        if (category == 'Social')
          comment(n)
      } else if ($('#' + n).get(0)
        .naturalWidth < maximum) {
        $('#' + n).width(120)
          .addClass('expand').css(
            'margin', '10px')
          .parents('.item')
          .find('.classic').css({
            'display': 'flex',
            'align-items': 'center'
          }).find(
            '.header, .tag, .addComment'
            ).css('display', 'none')
          .siblings('.fill').css(
            'left', '18px').html(
            fill)
          .parents('.item').find(
            '.ago, .header').css(
            'display', 'none')
      }
      $('#' + n)
        .parents('.item, #guide')
        .find(
          '.image, .img, .pub, .tag'
          ).css('display', 'block')
      $('#' + n)
        .parents('#guide').find(
          '.header, .ago, .wrap')
        .css('display',
          'inline-block')
      $('#' + n)
        .parents('.item, #guide')
        .find('.fill')
        .remove()
      visual()
    }).attr('src', src).parent()
    .siblings('.fill').html(fill)
}
