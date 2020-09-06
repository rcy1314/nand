var visual = function(n) {
  if (n == 'op') op = op != true
  else if (n == 1 || n == 0) op = n
  if (op == 1) {
    $('html body #wrapper #container, ' +
      'html body #wrapper #container #guide .blur, ' +
      'html body #wrapper #container #main, ' +
      'html body #wrapper #container #main #top, ' +
      'html body #wrapper #container #main #top #arm, ' +
      'html body #wrapper #container #main #visit, ' +
      'html body #wrapper #container #main #visit #page, ' +
      'html body #wrapper #container #main #visit #page #front #label .link, ' +
      'html body #wrapper #container #main #visit #page #front .quick .feed, ' +
      'html body #wrapper #container #main .center .channel .item .classic, ' +
      'html body #wrapper #container #main .center .channel .item, ' +
      'html body #wrapper #container #main #visit #page #front #first .listing .index, ' +
      'html body #wrapper #container #main #top #arm #search #match .listing .index, ' +
      'html body #wrapper #container #main .group, ' + 'html body #wrapper #container #main .group .air, ' +
      'html body #wrapper #container #main .group .air .populate, ' +
      'html body #wrapper #container #main .group .result .filter, ' +
      'html body #wrapper #container #main .group .result .populate, ' +
      'html body #wrapper #container #main .group .result, ' +
      'html body #wrapper #container #main #top #arm #search input[type=text], ' +
      'html body #wrapper #container #main #visit #page #front .focus input[type=text], ' +
      'html body #wrapper #container #main #top #arm #search #match .listing .background, ' +
      'html body #wrapper #container #main #visit #page #front #first .listing .background, ' +
      'html body #wrapper #container #main .status .asset, ' +
      'html body #wrapper #container #main #visit #page #front .quick .feed .asset, ' +
      'html body #wrapper #container #main .center .quick .feed, ' +
      'html body #wrapper #container #main .center .quick .feed .asset a, ' +
      'html body #wrapper #container #main .status .asset a, ' +
      'html body #wrapper #container #main #visit #page #front .quick .feed .asset a').css({
        'background-color': '#000',
        'box-shadow': 'none',
        'border': 'none',
        'color': '#fff'
    })
    $(
      'html body #wrapper #container #guide, ' +
      'html body #wrapper #container #main #top, ' +
      'html body #wrapper #container #main #notification, ' +
      'html body #wrapper #container #main #top #arm, ' +
      'html body #wrapper #container #main #top #arm #search #home a, ' +
      'html body #wrapper #container #main #top #arm #option, ' +
      'html body #wrapper #container #main #visit #page #front .focus input[type=text], ' +
      'html body #wrapper #container #main #visit #page #front .quick .right, ' +
      'html body #wrapper #container #main #visit #page #front .quick .left, ' +
      'html body #wrapper #container #main .center .quick .right, ' +
      'html body #wrapper #container #main .center .quick .left').css({
        'background-color': '#0e0e0e',
        'box-shadow': 'none',
        'color': '#fff'
    })
    $(':root').css({
      '--loader-color-primary': '#f7426C',
      '--loader-color-secondary': '#e86d8a'
    })
    $('html body #wrapper #container #main #visit #page #front #label .link, ' +
      'html body #wrapper #container #main #visit #page #front .quick .feed .asset, ' +
      'html body #wrapper #container #main #visit #page #front .quick .left, ' +
      'html body #wrapper #container #main #visit #page #front .quick .right, ' +
      'html body #wrapper #container #main .center .quick .feed .left, ' +
      'html body #wrapper #container #main .center .quick .feed .right')
      .addClass('oppositeOverBorderless').removeClass('invertOverBorderless')
    $('html body #wrapper #container #main .group .air .populate, ' +
      'html body #wrapper #container #main .group .result .filter, ' +
      'html body #wrapper #container #main .group .result .populate, ' +
      'html body #wrapper #container #main #top #arm #search #match .listing .background, ' +
      'html body #wrapper #container #main #visit #page #front #first .listing .background')
      .removeClass('invertOverBorderless').css('border','.3px solid #0e0e0e')
    $('html body #wrapper #container #main .center .channel .item .classic .header .radial, ' +
      'html body #wrapper #container #guide .sticky .wrap .header, ' +
      'html body #wrapper #container #main .content .suggestions .radial')
      .removeClass('suggestInvert').addClass('suggestOpposite')
    $('html body #wrapper #container #main #top #arm #search #match .listing .hover .detail .radial, ' +
      'html body #wrapper #container #main #top #arm #search #match .listing .index .detail .radial, ' +
      'html body #wrapper #container #main #visit #page #front #first .listing .index .detail .radial, ' +
      'html body #wrapper #container #main #visit #page #front #first .listing .hover .detail .radial, ' +
      'html body #wrapper #container #main .translation .select .radial')
      .removeClass('selectInvert').addClass('selectOpposite')
    $('html body #wrapper #container #main #visit #page #front .quick .feed .radial, ' +
      'html body #wrapper #container #main .center .quick .feed .radial, ' +
      'html body #wrapper #container #main .content .status .radial')
      .removeClass('feedInvert').addClass('feedOpposite')
    $('html body #wrapper #container #guide .sticky .item, ' +
      'html body #wrapper #container #main .center .channel .item, ' +
      'html body #wrapper #container #main .group .air .populate, ' +
      'html body #wrapper #container #main .group .result .filter, ' +
      'html body #wrapper #container #main .group .result .populate')
      .addClass('oppositeOver').removeClass('invertOver')
    $('html body #wrapper #container #main #progressBar').removeClass('responseInvert').addClass('responseOpposite')
    $('html body #wrapper #container #main #visit #page #front .focus')
      .removeClass('pageinput pageInputOut').css('box-shadow','none')
    $('html body #wrapper #container #main #visit #page #front .focus .button')
      .removeClass('buttonInvert').addClass('buttonOpposite')
    $('html body #wrapper #container #main #top #arm #search #match .listing .index, ' +
      'html body #wrapper #container #main #visit #page #front #first .listing .index')
      .removeClass('visual').addClass('contrast')
    $('html body #wrapper #container #main .translation .select .type, ' +
      'html body #wrapper #container #main #visit #page #front .quick .feed .asset .idTranslation, ' +
      'html body #wrapper #container #main #top #arm #search #match .listing .index .detail .typeTranslation, ' +
      'html body #wrapper #container #main #top #arm #search #match .listing .hover .detail .typeTranslation, ' +
      'html body #wrapper #container #main #visit #page #front #first .listing .index .detail .typeTranslation, ' +
      'html body #wrapper #container #main #visit #page #front #first .listing .hover .detail .typeTranslation')
      .css('filter','hue-rotate(110deg)')
    $('html body #wrapper #container #main #top #arm #search #match .listing, ' +
      'html body #wrapper #container #main #visit #page #front #first .listing')
      .addClass('opposite').removeClass('invert')
    $('html body #wrapper #container #main #top').css('border-bottom', '.3px solid #333')
    $('html body #wrapper #container #main #visit #page .fill').css('background-color','#ffffff')
    $('html body #wrapper #container #main #top #arm #search #home, .fas, .images').css('color','#fff')
    $('html body #wrapper #container #main #top #arm #search #match .listing .hover')
    .addClass('contrast.hover').removeClass('visual.hover')
    $('#favicon').attr('href', 'images/Opposite.ico')
  } else if (op == 0) {
    $('html body #wrapper #container #main, ' +
      'html body #wrapper #container #main .status .asset, ' +
      'html body #wrapper #container, ' +
      'html body #wrapper #container #main #top, ' +
      'html body #wrapper #container #main .group, ' +
      'html body #wrapper #container #main #top #arm, ' +
      'html body #wrapper #container #main #notification, ' +
      'html body #wrapper #container #main #top #arm #option, ' +
      'html body #wrapper #container #main #visit #page #front #first .listing .index, ' +
      'html body #wrapper #container #main #top #arm #search #match .listing .index, ' +
      'html body #wrapper #container #main .center .channel .item .classic, ' +
      'html body #wrapper #container #main .center .channel .item, ' +
      'html body #wrapper #container #main .center .quick .feed, ' +
      'html body #wrapper #container #main #visit #page #front .focus input[type=text], ' +
      'html body #wrapper #container #main .group .air, ' +
      'html body #wrapper #container #main .group .result, ' +
      'html body #wrapper #container #main #visit #page #front #first .listing .background, ' +
      'html body #wrapper #container #main #top #arm #search #match .listing .background').css({
        'background-color': '#fff',
        'border': 'none',
        'color': '#888888'
    })
    $('html body #wrapper #container #main #visit, ' +
      'html body #wrapper #container #guide .blur, ' +
      'html body #wrapper #container #main #visit #page, ' +
      'html body #wrapper #container #main #visit #page #front #label .link, ' +
      'html body #wrapper #container #main #visit #page .quick .feed, ' +
      'html body #wrapper #container #main #visit #page .quick .right, ' +
      'html body #wrapper #container #main #visit #page .quick .left, ' +
      'html body #wrapper #container #main .center .quick .right, ' +
      'html body #wrapper #container #main .center .quick .left, ' +
      'html body #wrapper #container #main .group .air .populate, ' +
      'html body #wrapper #container #main .group .result .filter, ' +
      'html body #wrapper #container #main .group .result .populate, ' +
      'html body #wrapper #container #main .group .air .populate .display .title, ' +
      'html body #wrapper #container #main .group .result .filter .display .title, ' +
      'html body #wrapper #container #main .group .result .populate .display .title, ' +
      'html body #wrapper #container #main #top #arm #search input[type=text]').css({
        'background-color': '#f7f7f7',
        'border': 'none',
        'color': '#888888'
    })
    $(':root').css({
      '--loader-color-primary': '#0078D4',
      '--loader-color-secondary': '#5baff0',
    })
    $('html body #wrapper #container #main .group .air .populate, ' +
      'html body #wrapper #container #main .group .result .filter, ' +
      'html body #wrapper #container #main .group .result .populate, ' +
      'html body #wrapper #container #main #visit #page #front #label .link, ' +
      'html body #wrapper #container #main #visit #page #front .quick .feed .asset, ' +
      'html body #wrapper #container #main #visit #page #front .quick .left, ' +
      'html body #wrapper #container #main #visit #page #front .quick .right, ' +
      'html body #wrapper #container #main .center .quick .feed .left, ' +
      'html body #wrapper #container #main .center .quick .feed .right')
      .addClass('invertOverBorderless').removeClass('oppositeOver oppositeOverBorderless')
    $('html body #wrapper #container #main .center .channel .item .classic .header .radial, ' +
      'html body #wrapper #container #guide .sticky .wrap .header, ' +
      'html body #wrapper #container #main .content .suggestions .radial')
      .removeClass('suggestOpposite').addClass('suggestInvert')
    $('html body #wrapper #container #main #top #arm #search #match .listing .hover .detail .radial, ' +
      'html body #wrapper #container #main #top #arm #search #match .listing .index .detail .radial, ' +
      'html body #wrapper #container #main #visit #page #front #first .listing .index .detail .radial, ' +
      'html body #wrapper #container #main #visit #page #front #first .listing .hover .detail .radial, ' +
      'html body #wrapper #container #main .translation .select .radial')
      .removeClass('selectOpposite').addClass('selectInvert')
    $('html body #wrapper #container #main #visit #page #front .quick .feed .radial, ' +
      'html body #wrapper #container #main .center .quick .feed .radial, ' +
      'html body #wrapper #container #main .content .status .radial')
      .removeClass('feedOpposite').addClass('feedInvert')
    $('html body #wrapper #container #main .translation .select .type, ' +
      'html body #wrapper #container #main #visit #page #front .quick .feed .asset .idTranslation, ' +
      'html body #wrapper #container #main #top #arm #search #match .listing .index .detail .typeTranslation, ' +
      'html body #wrapper #container #main #top #arm #search #match .listing .hover .detail .typeTranslation, ' +
      'html body #wrapper #container #main #visit #page #front #first .listing .index .detail .typeTranslation, ' +
      'html body #wrapper #container #main #visit #page #front #first .listing .hover .detail .typeTranslation')
      .css('filter','hue-rotate(0deg)')
    $('html body #wrapper #container #main #visit #page .focus .button').removeClass('buttonOpposite').addClass('buttonInvert')
    $('html body #wrapper #container #main #progressBar').removeClass('responseOpposite').addClass('responseInvert')
    $('html body #wrapper #container #main #top #arm #search #match .listing .hover, ' +
      'html body #wrapper #container #main #visit #page #front #first .listing .hover')
      .addClass('visual.hover').removeClass('contrast.hover')
    $('#search input[type=text], .background').css('border', '.3px solid #eaeaea')
    $('html body #wrapper #container #main #top #arm #search #match .listing .index, ' +
      'html body #wrapper #container #main #visit #page #front #first .listing .index')
      .addClass('visual').removeClass('contrast')
    $('html body #wrapper #container #guide .sticky .item, #wrapper #container #main .center .channel .item')
      .addClass('invertOver').removeClass('oppositeOver')
    $('html body #wrapper #container #main .center .feed, ' +
      'html body #wrapper #container #main .center .channel .item').css('border','.3px solid #ddd')
    $('html body #wrapper #container #main #top #arm #search #match .listing, ' +
      'html body #wrapper #container #main #visit #page #front #first .listing')
      .addClass('invert').removeClass('opposite')
    $('html body #wrapper #container #main #visit #page .fill').css('background-color','#383838')
    $('html body #wrapper #container #main #top').css('border-bottom', '.3px solid #ccc')
    $('html body #wrapper #container #guide .wrap, ' +
      'html body #wrapper #container #main #visit #page #front .focus input[type=text], ' +
      'html body #wrapper #container #main .center .channel .item, ' +
      'html body #wrapper #container #main #visit #page #front .quick .left, ' +
      'html body #wrapper #container #main #visit #page #front .quick .right, ' +
      'html body #wrapper #container #main .center .quick .feed .left, ' +
      'html body #wrapper #container #main .center .quick .feed .right, ' +
      'html body #wrapper #container #main #visit #page #front .quick .feed .asset .id').
      css('box-shadow', '1px 1px 1px #eee')
    $('html body #wrapper #container #main #top #arm #search #home, .fas, .images').css('color','#000')
    $('#favicon').attr('href', 'favicon.ico')
  }
}
