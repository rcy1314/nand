var visual = function(n) {
  if (n == 'op') op = op != true
  else if (n == 1 || n == 0) op = n
  if (op == 1) {
    $(
      '#container, #arm, #main, #main #option, #visit, #bottom, ' +
      '.feed, .channel, .suggestions, .combine, .index, a, .stats, ' +
      '.result, .air, .wrap, #main #page, #main #page .id, .sticky'
    ).css({
      'background-color': '#000',
      'box-shadow': 'none',
      'border': 'none',
      'color': '#fff'
    })
    $('.fas, .fa-bookmark, .fa-comments, .fa-sticky-note, ' +
      '.fa-angle-double-left, .fa-angle-double-right'
    ).css('color', '#fff')
    $(
      '#top, #arm, #arm #option, .filter, .populate, .wrap, .translation, ' +
      '.header, .type, .item, .comment, .ago, .filter a, .populate a, ' +
      '.pub, .tag, .suggestions, .combine, .right, .left'
    ).css({
      'background-color': '#0e0e0e',
      'box-shadow': 'none',
      'border': 'none',
      'color': '#fff'
    })
    $('.fas, input[type=text], .item .pub').css({
      'background-color': '#0e0e0e',
      'box-shadow': 'none',
      'border': 'none'
    })
    $('input[type=text]').css({
      'background-color': '#1a1a1a',
      'color': '#ddd'
    })
    $(
      '#home a, .description, .fa-times-circle, #toggle, .type, ' +
      '.fa-home, .fa-code, .fa-globe, .fa-git, #home, ' +
      '.fa-terminal, .fa-circle-o, .fa-circle, .buttonSearch'
    ).css({
      'background-color': 'transparent',
      'color': '#fff'
    })
    $('#progressBar').removeClass('responseInvert').addClass('responseOpposite')
    $('.asset circle, .display circle').css('stroke', 'url(#gradientOpposite)')
    $('#page .button').removeClass('buttonInvert').addClass('buttonOpposite')
    $('#top, .description').css('border-bottom', '1px solid #333')
    $('#option .fa-circle-o').toggleClass('fa-circle-o fa-circle')
    $('.index, .hover').addClass('contrast').removeClass('visual')
    $('.filter, .populate').css('border','1px solid #0e0e0e')
    $('.listing').addClass('opposite').removeClass('invert')
    $('.blur').css('background-color','rgba(0, 0, 0, 1)')
    $('.second').css('cssText','fill: #e557c6 !important')
    $('.first').css('cssText','fill: #ef4063 !important')
    $('.third').css('cssText','fill: #ff6289 !important')
    $('#handle img').attr('src', 'images/Opposite.ico')
    $('#favicon').attr('href', 'images/Opposite.ico')
    $('.category').css('border','1px solid #000')
    $('.hover').addClass('contrast.hover')
    $('#placeholder').css('color','#fff')
    $('.more').css('color', '#333')
  } else if (op == 0) {
    $(
      '#top, #arm, #container, .wrap, ' +
      '.comment, .channel, #main .center .feed, .header, .tag, ' +
      '.item, .item .pub, .type, .ago, a'
    ).css({
      'background-color': '#fff',
      'color': '#666',
      'border': 'none'
    })
    $('input[type=text]').css({
      'background-color': '#f7f7f7',
      'border': '1px solid #ddd',
      'color': '#aaa'
    })
    $('#arm, #arm #option, .air, .result, .index').css({
      'background-color': '#fff',
      'color': '#666'
    })
    $(
      '#main, #container, #front #option, #visit, #bottom, .hover, .info a, ' +
      '.channel, .stats, .suggestions, .combine, #bottom, #main #page .id, ' +
      '#main #page .feed, #main #page, .right, .left, #main #page .feed a, ' +
      '.filter, .populate, .translation'
    ).css({
      'background-color': '#f7f7f7',
      'border': 'none',
      'color': '#666'
    })
    $(
      '#home, .description, .fa-sun, .title, .type, ' +
      '.fa-home, .fa-code, .fa-globe, .fa-git, ' +
      '.fa-terminal, .fa-circle-o, .fa-circle'
    ).css({
      'background-color': 'transparent',
      'color': '#000'
    })
    $('#page input[type=text]').css({
      'background-color': '#fff',
      'border': 'none'
    })
    $(
      '.item, #page input[type=text], ' +
      '.right, .left, #page .id'
    ).css('box-shadow', '1px 1px 1px #ddd')
    $('#toggle, #handle a, .fa-angle-double-left, .fa-angle-double-right').css('color', '#666')
    $('.filter, .populate, #main .center .feed').css('border', '1px solid #ddd')
    $('#progressBar').removeClass('responseOpposite').addClass('responseInvert')
    $('#page .button').removeClass('buttonOpposite').addClass('buttonInvert')
    $('.asset circle, .display circle').css('stroke', 'url(#gradientInvert)')
    $('#top, .description, .index').css('border-bottom', '1px solid #ccc')
    $('.fa-bookmark, .fa-comments, .fa-sticky-note').css('color', '#000')
    $('#option .fa-circle').toggleClass('fa-circle-thin fa-circle')
    $('.index, .hover').addClass('visual').removeClass('contrast')
    $('.blur').css('background-color','rgba(255, 255, 255, 1)')
    $('.listing').addClass('invert').removeClass('opposite')
    $('.second').css('cssText','fill: #12d8fa !important')
    $('.third').css('cssText','fill: #06ffcb !important')
    $('.first').css('cssText','fill: #1fa2ff !important')
    $('#handle img').attr('src', 'favicon.ico')
    $('#favicon').attr('href', 'favicon.ico')
    $('#placeholder').css('color','#666')
    $('.hover').addClass('visual.hover')
  }
  $('.fa-gratipay').css('color', 'lightcoral')
}
