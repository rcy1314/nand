var visual = function(n) {
  if (n == 'op') op = op != true
  else if (n == 1 || n == 0) op = n
  if (op == 1) {
    $(
      '#container, #arm, #main, #main #option, #visit, #bottom, ' +
      '.feed, .channel, .suggestions, .combine, .index, a, .stats, ' +
      '.result, .air, #main #page, #main #page .id, .blur, ' +
      '.filter, .populate, .filter a, .populate a'
    ).css({
      'background-color': '#000',
      'box-shadow': 'none',
      'border': 'none',
      'color': '#fff'
    })
    $('#top, #arm, #arm #option, .wrap, .translation, ' +
      '.header, .type, .item, .comment, .ago, ' +
      '.pub, .tag, .suggestions, .combine, .right, .left, #guide, ' +
      '.fas, .item .pub, .more, ' +
      '.fas, .fa-bookmark, .fa-comments, .fa-sticky-note, ' +
      '.fa-angle-double-left, .fa-angle-double-right, ' +
      '#home a, .description, .fa-times-circle, .type, ' +
      '.fa-home, .fa-code, .fa-globe, .fa-git, #home, ' +
      '.fa-terminal, input[type=text]'
    ).css({
      'background-color': '#0e0e0e',
      'box-shadow': 'none',
      'border': 'none',
      'color': '#fff'
    })
    $('.buttonSearch').css({
      'background-color': 'transparent',
      'color': '#fff'
    })
    $('.detail svg, .asset svg, .display svg').css('stroke', 'url(#gradientOpposite)')
    $('#progressBar').removeClass('responseInvert').addClass('responseOpposite')
    $('#page .button').removeClass('buttonInvert').addClass('buttonOpposite')
    $('.index, .hover').addClass('contrast').removeClass('visual')
    $('.filter, .populate').css('border','1px solid #0e0e0e')
    $('.listing').addClass('opposite').removeClass('invert')
    $('.typeTranslation').css('filter','hue-rotate(90deg)')
    $('.second').css('cssText','fill: #e557c6 !important')
    $('.third').css('cssText','fill: #ff6289 !important')
    $('.one').css('cssText','fill: #ef4063 !important')
    $('#page input[type=text]').removeClass('pageInput')
    $('#handle img').attr('src', 'images/Opposite.ico')
    $('#favicon').attr('href', 'images/Opposite.ico')
    $('#top').css('border-bottom', '1px solid #333')
    $('.category').css('border','1px solid #000')
    $('.hover').addClass('contrast.hover')
    $('#placeholder').css('color','#fff')
  } else if (op == 0) {
    $('#top, #arm, #container, .wrap, #arm, #arm #option, .index, .item, ' +
      '.comment, .channel, #main .center .feed, .header, .tag, #page input[type=text], ' +
      '.item, .item .pub, .type, .ago, .more, a'
    ).css({
      'background-color': '#fff',
      'color': '#666',
      'border': 'none'
    })
    $('#main, #container,.air, .result, #front #option, #visit, #bottom, .hover, .info a, ' +
      '.channel, .stats, .suggestions, .combine, #bottom, #main #page .id, ' +
      '#main #page .feed, #main #page, .right, .left, #main #page .feed a, ' +
      '.filter, .populate, .translation, .blur, #search input[type=text]'
    ).css({
      'background-color': '#f7f7f7',
      'border': 'none',
      'color': '#666'
    })
    $('#home, .description, .fa-sun, .title, .type, .fa-search, ' +
      '.fa-home, .fa-code, .fa-globe, .fa-git, ' +
      '.fa-terminal, #toggle'
    ).css({
      'background-color': 'transparent',
      'color': '#000'
    })
    $('#guide .wrap, .item, #page input[type=text], .right, .left, #page .id').css('box-shadow', '1px 1px 1px #ddd')
    $('#search input[type=text], .filter, .populate, #main .center .feed').css('border', '1px solid #eaeaea')
    $('#handle a, #placeholder, .fa-angle-double-left, .fa-angle-double-right').css('color', '#666')
    $('.detail svg, .asset svg, .display svg').css('stroke', 'url(#gradientInvert)')
    $('#progressBar').removeClass('responseOpposite').addClass('responseInvert')
    $('#page .button').removeClass('buttonOpposite').addClass('buttonInvert')
    $('.fa-bookmark, .fa-comments, .fa-sticky-note').css('color', '#000')
    $('.index, .hover').addClass('visual').removeClass('contrast')
    $('#top, .index').css('border-bottom', '1px solid #ccc')
    $('.listing').addClass('invert').removeClass('opposite')
    $('.typeTranslation').css('filter','hue-rotate(0deg)')
    $('.second').css('cssText','fill: #12d8fa !important')
    $('.third').css('cssText','fill: #06ffcb !important')
    $('.one').css('cssText','fill: #1fa2ff !important')
    $('#page input[type=text]').addClass('pageInput')
    $('#handle img').attr('src', 'favicon.ico')
    $('#favicon').attr('href', 'favicon.ico')
    $('.hover').addClass('visual.hover')
  }
}
