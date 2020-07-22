var visual = function(n) {
  if (n == 'op') op = op != true
  else if (n == 1 || n == 0) op = n
  if (op == 1) {
    $(
      '#container, #arm, #main, #visit, #option, #bottom, ' +
      '.feed, .comment, .channel, .suggestions, .combine, .index, a, ' +
      '.result, .air, .fa-times-circle, .wrap, .fas'
    ).css({
      'background-color': '#000',
      'box-shadow': 'none',
      'border': 'none',
      'color': '#fff'
    })
    $('.fa-bookmark, .fa-comments, .fa-sticky-note, ' +
      '.fa-angle-double-left, .fa-angle-double-right'
    ).css('color', '#fff')
    $(
      '#top, #arm, #home a, .filter, .populate, .wrap, ' +
      '.header, .title, .category, .description, .type, .item, .ago, ' +
      '.pub, .tag, .stats, .suggestions, .combine'
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
      '#home a, ' +
      '.fa-home, .fa-code, .fa-globe, .fa-git, ' +
      '.fa-terminal, .fa-circle-notch, .fa-circle'
    ).css({
      'background-color': '#000',
      'color': '#fff'
    })

    $('#top, .description, .comment').css('border-bottom', '1px solid #333')
    $('#progressBar').removeClass('responseInvert').addClass('responseOpposite')
    $('.filter, .populate, .category, .title').css('border','1px solid #0e0e0e')
    $('.bottom').attr('src', 'images/icon/opposite.png').css('filter', 'none')
    $('#option .fa-circle-notch').toggleClass('fa-circle-notch fa-circle')
    $('#main, .listing').addClass('opposite').removeClass('invert')
    $('.index, .hover').addClass('contrast').removeClass('visual')
    $('.right, .left').css('background-color', 'rgba(0,0,0,.4)')
    $('svg circle').css('stroke', 'url(#gradientOpposite)')
    $('#favicon').attr('href', 'images/icon/opposite.png')
    $('.second').css('cssText','fill: #e557c6 !important')
    $('.first').css('cssText','fill: #ef4063 !important')
    $('.third').css('cssText','fill: #ff6289 !important')
    $('.category').css('border','1px solid #000')
    $('.hover').addClass('contrast.hover')
    $('.more').css('color', '#333')
  } else if (op == 0) {
    $(
      '#top, #arm, #container, .wrap, .fa-times-circle, ' +
      '.comment, .channel, .feed, .title, .header, .tag, ' +
      '.item, .item .pub, .type, .ago, a'
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
    $('#arm, #arm #option, .index').css({
      'background-color': '#fff',
      'color': '#666'
    })
    $(
      '#front #option, #container, #main, #visit, .air, .result, #bottom, .hover, ' +
      '.description, .channel, .stats, .suggestions, .combine, #bottom'
    ).css({
      'background-color': '#fafafa',
      'border': 'none',
      'color': '#666'
    })
    $(
      '#home a, ' +
      '.fa-home, .fa-code, .fa-globe, .fa-git, ' +
      '.fa-terminal, .fa-circle-notch, .fa-circle'
    ).css({
      'background-color': 'transparent',
      'color': '#000'
    })
    $('.bottom')
      .attr('src', 'images/icon/transparent.png')
      .css('filter', 'brightness(50%) saturate(20%) invert(90%)')
    $('.filter .pub, .populate .pub').css({
      'background-color': "#efefef",
      'border': 'none'
    })
    $('.filter, .populate, .feed, .item, .title').css('border', '1px solid #ddd')
    $('#progressBar').removeClass('responseOpposite').addClass('responseInvert')
    $('.filter, .populate, .item, .feed, #page input[type=text]').css('box-shadow', '1px 1px 6px #eee')
    $('.filter, .populate, .description').css('background-color', '#efefef')
    $('.fa-angle-double-left, .fa-angle-double-right').css('color', '#666')
    $('#top, .description, .index').css('border-bottom', '1px solid #ccc')
    $('.fa-bookmark, .fa-comments, .fa-sticky-note').css('color', '#000')
    $('.right, .left').css('background-color', 'rgba(255,255,255,.5)')
    $('#option .fa-circle').toggleClass('fa-circle-thin fa-circle')
    $('#main, .listing').addClass('invert').removeClass('opposite')
    $('.index, .hover').addClass('visual').removeClass('contrast')
    $('.second').css('cssText','fill: #12d8fa !important')
    $('.third').css('cssText','fill: #06ffcb !important')
    $('.first').css('cssText','fill: #1fa2ff !important')
    $('svg circle').css('stroke', 'url(#gradientInvert)')
    $('#favicon').attr('href', 'images/icon/invert.png')
    $('.hover').addClass('visual.hover')
  }
  $('.fa-gratipay').css('color', 'lightcoral')
}
