var visual = function(n) {
  if (n == 'op') op = op != true
  else if (n == 1 || n == 0) op = n
  if (op == 1) {
    $('#container, #arm, #main, #main #option, #visit, #bottom, ' +
      '.feed, .channel, .combine, .index, a, .stats, ' +
      '.result, .air, #main .page, #main .page .id, .blur, ' +
      '.filter, .populate, .filter a, .populate a, .focus'
    ).css({
      'background-color': '#000',
      'box-shadow': 'none',
      'border': 'none',
      'color': '#fff'
    })
    $('#top, #arm, #arm #option, .wrap, ' +
      '.header, .item, .comment, .ago, ' +
      '.pub, .tag, .suggestions, .right, .left, #guide, ' +
      '.item .pub, .more, .fas, .tag, #home a, .description, .type, ' +
      '#home, input[type=text]'
    ).css({
      'background-color': '#0e0e0e',
      'box-shadow': 'none',
      'border': 'none',
      'color': '#fff'
    })
    $('.buttonSearch, .type, .translation, .suggestions, .combine').css({
      'background-color': 'transparent',
      'box-shadow': 'none',
      'color': '#fff'
    })
    $('.index .radial, .hover .radial, .select .radial').removeClass('selectInvert').addClass('selectOpposite')
    $('.header .radial, .suggestions .radial').removeClass('suggestInvert').addClass('suggestOpposite')
    $('.feed .radial, .stats .radial').removeClass('feedInvert').addClass('feedOpposite')
    $('.detail svg, .asset svg, .display svg').css('stroke', 'url(#gradientOpposite)')
    $('#progressBar').removeClass('responseInvert').addClass('responseOpposite')
    $('.focus').removeClass('pageinput pageInputOut').css('box-shadow','none')
    $('.page .button').removeClass('buttonInvert').addClass('buttonOpposite')
    $('.select .type, .typeTranslation').css('filter','hue-rotate(90deg)')
    $('.index, .hover').removeClass('visual').addClass('contrast')
    $('.filter, .populate').css('border','1px solid #0e0e0e')
    $('.listing').addClass('opposite').removeClass('invert')
    $('.second').css('cssText','fill: #e557c6 !important')
    $('.third').css('cssText','fill: #ff6289 !important')
    $('.one').css('cssText','fill: #ef4063 !important')
    $('#handle img').css('filter','hue-rotate(120deg)')
    $('#favicon').attr('href', 'images/Opposite.ico')
    $('#top').css('border-bottom', '1px solid #333')
    $('.category').css('border','1px solid #000')
    $('.hover').addClass('contrast.hover')
    $('#placeholder').css('color','#fff')
  } else if (op == 0) {
    $('#top, #arm, #container, .wrap, #arm, #arm #option, .index, .item, ' +
      '.comment, .channel, #main .center .feed, .header, .page input[type=text], ' +
      '.item, .item .pub, .type, .ago, .more, a'
    ).css({
      'background-color': '#fff',
      'color': '#666',
      'border': 'none'
    })
    $('#main, #container,.air, .result, #front #option, #visit, #bottom, .hover, .info a, ' +
      '.channel, .stats, .combine, #bottom, #main .page .id, ' +
      '#main .page .feed, #main .page, .right, .left, #main .page .feed a, ' +
      '.filter, .populate, .blur, #search input[type=text], .focus'
    ).css({
      'background-color': '#f7f7f7',
      'border': 'none',
      'color': '#666'
    })
    $('#home, .description, .tag, #option, .fas, .title, .type, .translation, ' +
      '.tag, #option, .fa-double-angle-right, .fa-double-angle-left, #toggle, .suggestions'
    ).css({
      'background-color': 'transparent',
      'box-shadow': 'none',
      'color': '#000'
    })
    $('.index .radial, .hover .radial, .select .radial').removeClass('selectOpposite').addClass('selectInvert')
    $('#guide .wrap, .page input, .item, .right, .left, .page .id').css('box-shadow', '1px 1px 1px #eee')
    $('#search input[type=text], .filter, .populate, .center .feed').css('border', '1px solid #eaeaea')
    $('.header .radial, .suggestions .radial').removeClass('suggestOpposite').addClass('suggestInvert')
    $('.detail svg, .asset svg, .display svg').css('stroke', 'url(#gradientInvert)')
    $('.feed .radial, .stats .radial').removeClass('feedOpposite').addClass('feedInvert')
    $('#progressBar').removeClass('responseOpposite').addClass('responseInvert')
    $('.page .button').removeClass('buttonOpposite').addClass('buttonInvert')
    $('.select .type, .typeTranslation').css('filter','hue-rotate(0deg)')
    $('.index, .hover').addClass('visual').removeClass('contrast')
    $('#top, .index').css('border-bottom', '1px solid #ccc')
    $('.listing').addClass('invert').removeClass('opposite')
    $('.second').css('cssText','fill: #12d8fa !important')
    $('.third').css('cssText','fill: #06ffcb !important')
    $('.one').css('cssText','fill: #1fa2ff !important')
    $('#handle img').css('filter','hue-rotate(0deg)')
    $('#handle a, #placeholder').css('color', '#666')
    $('#favicon').attr('href', 'favicon.ico')
    $('.hover').addClass('visual.hover')
  }
}
