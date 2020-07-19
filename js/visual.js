var visual = function(n) {
  if (n == 'op') op = op != true
  else if (n == 1 || n == 0) op = n
  if (op == 1 || contrast == true) {
    $(
      '#container, .wrap, .fa-times-circle, .background, #main, #arm, #home, #option, #bottom, .fas,  #visit, .result, .air, .feed, .comment, .channel, .suggestions, .combine, .index, a'
    ).css({
      'background-color': '#000',
      'color': '#fff',
      'border': 'none',
      'box-shadow': 'none'
    })
    $('#top, .description, .comment').css({
      'border-bottom': '1px solid #333',
    })
    $('.index, .hover').addClass('contrast').removeClass('visual')
    $('#progressBar').removeClass('responseInvert').addClass(
      'responseOpposite')
    $('.fa-bookmark, .fa-comments, .fa-sticky-note').css('color', '#fff')
    $('.more').css('color', '#333')
    $('svg circle').css('stroke', 'url(#gradientOpposite)')
    $('.right, .left').css({
      'background-color': 'rgba(0,0,0,.4)',
    })
    $('.fa-angle-double-left, .fa-angle-double-right').css({
      'color': '#fff'
    })
    $('#top, #arm, input[type=text], .filter, .populate, .wrap, .header, .pub, .tag, .stats, .suggestions, .combine, .title, .category, .description, .type, .item, .ago').css({
      'background-color': '#0e0e0e',
      'border': '1px solid #0e0e0e',
      'box-shadow': 'none',
      'color': '#fff'
    })
    $('.fas, input[type=text], .item .pub').css({
      'background-color': '#0e0e0e',
      'border': 'none'
    })
    $('.category').css('border','1px solid #000')
    $('.hover').addClass('contrast.hover')
    $('.first').css('cssText','fill: #ef4063 !important')
    $('.second').css('cssText','fill: #e557c6 !important')
    $('.third').css('cssText','fill: #ff6289 !important')
    $('#main, .listing').addClass('opposite').removeClass('invert')
    $('.bottom').attr('src', 'images/icon/opposite.png').css('filter', 'none')
    $('#favicon').attr('href', 'images/icon/opposite.png')
    $('#option .fa-circle-notch').toggleClass('fa-circle-notch fa-circle')
  } else if (op == 0 || contrast == false) {
    $(
      '#top, #arm, #container, .wrap, .fa-times-circle, .comment, .channel, .feed, .title, .item, .item .pub, .type, .ago, a'
    ).css({
      'background-color': '#fff',
      'color': '#666',
      'border': 'none'
    })
    $('input[type=text], .category').css({
      'background-color': '#fafafa',
      'border': '1px solid #ddd',
      'color': '#aaa'
    })
    $('#arm, #option, .index').css({
      'background-color': '#fff',
      'color': '#666'
    })
    $('.index, .hover').addClass('visual').removeClass('contrast')
    $('.background, #main, #visit, .air, .result, #bottom, .hover, .description, .channel, .stats, .suggestions, .combine, #bottom').css({
      'background-color': '#fafafa',
      'border': 'none',
      'color': '#666'
    })
    $(
      '#home, .fa-home, .fa-code, .fa-globe, .fa-git, .fa-terminal, .fa-circle-notch, .fa-circle'
    ).css({
      'background-color': 'transparent',
      'color': '#222'
    })
    $('.hover').addClass('visual.hover')
    $('.first').css('cssText','fill: #1fa2ff !important')
    $('.second').css('cssText','fill: #12d8fa !important')
    $('.third').css('cssText','fill: #06ffcb !important')
    $('#progressBar').removeClass('responseOpposite').addClass(
      'responseInvert')
    $('.fa-bookmark, .fa-comments, .fa-sticky-note').css('color', '#000')
    $('svg circle').css('stroke', 'url(#gradientInvert)')
    $('.right, .left').css({
      'background-color': 'rgba(255,255,255,.5)',
    })
    $('.fa-angle-double-left, .fa-angle-double-right').css({
      'color': '#666'
    })
    $('.filter, .populate, .description').css('background-color', '#efefef')
    $('.filter, .populate').css('border','1px solid #ddd')
    $('.feed, .item, .title').css('border', '1px solid #ddd')
    $('#top, .description, .index').css({
      'border-bottom': '1px solid #ccc'
    })
    $('.filter, .populate, .item, .feed').css('box-shadow', '1px 1px 6px #eee')
    $('#main, .listing').addClass('invert').removeClass('opposite')
    $('.bottom').attr('src', 'images/icon/transparent.png').css({
      'filter': 'brightness(50%) saturate(20%) invert(90%)'
    })
    $('#favicon').attr('href', 'images/icon/invert.png')
    $('#option .fa-circle').toggleClass('fa-circle-thin fa-circle')
  }
  $('.fa-gratipay').css('color', 'lightcoral')
}
