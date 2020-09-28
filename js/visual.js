var visual = function(n) {
  if (n == 'op') op = op != true
  else if (n == 1 || n == 0) op = n
  if (op == 1) {
    $('div').css('color','#f7f7f7')
    $('html body #wrapper #container, ' +
      'html body #wrapper #container #guide .blur, ' +
      'html body #wrapper #container #main, ' +
      'html body #wrapper #container #main #visit #page #front #label .link, ' +
      'html body #wrapper #container #main #visit #page .quick .feed, ' +
      'html body #wrapper #container #main #feed .center .quick .feed, ' +
      'html body #wrapper #container #main #feed .center .channel , ' +
      'html body #wrapper #container #main #feed .center .channel .item .classic, ' +
      'html body #wrapper #container #main #feed .center .channel .item, ' +
      'html body #wrapper #container #main #visit #page #front #first .listing .index, ' +
      'html body #wrapper #container #main #top #arm #search #match .listing .index, ' +
      'html body #wrapper #container #main #group .air .populate, ' +
      'html body #wrapper #container #main #group .result .filter, ' +
      'html body #wrapper #container #main #group .result .populate, ' +
      'html body #wrapper #container #main .content .status .filter, ' +
      'html body #wrapper #container #main #top #arm #search #input input[type=text], ' +
      'html body #wrapper #container #main #top #arm #search #match .listing, ' +
      'html body #wrapper #container #main #visit #page #front #first .listing')
      .removeClass('invert invertAlt invertOver invertOverBorderless').addClass('opposite')
    $('html body #wrapper #container #guide, ' +
      'html body #wrapper #container #guide .sticky .wrap, ' +
      'html body #wrapper #container #main #visit #page #front .focus input[type=text], ' +
      'html body #wrapper #container #main #visit #page .quick .right, ' +
      'html body #wrapper #container #main #visit #page .quick .left, ' +
      'html body #wrapper #container #main #feed .center .quick .right, ' +
      'html body #wrapper #container #main #feed .center .quick .left')
      .removeClass('invert invertAlt invertOver invertOverBorderless').addClass('oppositeAlt')
    $(':root').css({
      '--loader-color-primary': '#f7426C',
      '--loader-color-secondary': '#e86d8a'
    })
    $('html body #wrapper #container #main #visit #page .quick .feed .asset, ' +
      'html body #wrapper #container #main #visit #page .quick .feed .translation, ' +
      'html body #wrapper #container #main #visit #page #front #label .link, ' +
      'html body #wrapper #container #main #visit #page .quick .left, ' +
      'html body #wrapper #container #main #visit #page .quick .right, ' +
      'html body #wrapper #container #main #feed .center .quick .left, ' +
      'html body #wrapper #container #main #feed .center .quick .right')
      .removeClass('invert invertAlt invertOver invertOverBorderless').addClass('oppositeOverBorderless')
    $('html body #wrapper #container #main .content .status .filter, ' +
      'html body #wrapper #container #main #group .air .populate, ' +
      'html body #wrapper #container #main #group .result .filter, ' +
      'html body #wrapper #container #main #group .result .populate')
      .removeClass('invertOver invertOverBorderless').addClass('oppositeOver')
    $('html body #wrapper #container #guide .sticky .item, ' +
      'html body #wrapper #container #main #feed .center .channel .item, ' +
      'html body #wrapper #container #main #group .air .populate, ' +
      'html body #wrapper #container #main #group .result .filter, ' +
      'html body #wrapper #container #main #group .result .populate')
      .addClass('oppositeOver').removeClass('invertOver')
    $('html body #wrapper #container #main #progressBar').removeClass('responseInvert').addClass('responseOpposite')
    $('html body #wrapper #container #main #visit #page #front .focus').removeClass('pageInput')
    $('html body #wrapper #container #main #top #arm #search #match .listing .index .detail .buffer, ' +
      'html body #wrapper #container #main #top #arm #search #match .listing .hover .detail .buffer, ' +
      'html body #wrapper #container #main #visit #page #front #first .listing .index .detail .buffer, ' +
      'html body #wrapper #container #main #visit #page #front #first .listing .hover .detail .buffer')
      .css('color','#444444')
    $('html body #wrapper #container #main .content .suggestions .combine a').css('color','#f7426C')
    $('html body #wrapper #container #main #visit #page #front .focus .button')
      .removeClass('buttonInvert').addClass('buttonOpposite')
    $('html body #wrapper #container #main #top #arm #search #match .listing .hover, ' +
      'html body #wrapper #container #main #visit #page #front #first .listing .hover')
      .addClass('contrast.hover').removeClass('visual.hover')
    $('html body #wrapper #container #main #top #arm #search #match .listing .index, ' +
      'html body #wrapper #container #main #visit #page #front #first .listing .index')
      .addClass('contrast').removeClass('visual')
    $('html body #wrapper #container #main #visit #page .quick .feed .translation, ' +
      'html body #wrapper #container #main #top #arm #search #match .listing .index .detail .translation, ' +
      'html body #wrapper #container #main #top #arm #search #match .listing .hover .detail .translation, ' +
      'html body #wrapper #container #main #visit #page #front #first .listing .index .detail .translation, ' +
      'html body #wrapper #container #main #visit #page #front #first .listing .hover .detail .translation')
      .css('filter','hue-rotate(110deg)')
    $('html body #wrapper #container #main #top #arm #search #match .listing, ' +
      'html body #wrapper #container #main #visit #page #front #first .listing')
      .removeClass('invertScrollbar').addClass('oppositeScrollbar').css('border', 'none')
    $('html body #wrapper #container #main #top').css('border-bottom', '.3px solid #333')
    $('html body #wrapper #container #main #dots .fill').css('background-color','#ffffff')
    $('.fa, .fas, .images').css('color','#fff')
    $('#favicon').attr('href', 'images/Opposite.ico')
  } else if (op == 0) {
    $('div').css('color','#444444')
    $('html body #wrapper #container #guide .sticky .wrap, ' +
      'html body #wrapper #container #main #visit #page #front #label .link, ' +
      'html body #wrapper #container #main #feed .center .channel .item, ' +
      'html body #wrapper #container #main #feed .center .channel .item .classic, ' +
      'html body #wrapper #container #main #top #arm #search input[type=text], ' +
      'html body #wrapper #container #main #visit #page #front .focus input[type=text], ' +
      'html body #wrapper #container #main #top #arm #search #match .listing, ' +
      'html body #wrapper #container #main #visit #page #front #first .listing')
      .addClass('invert').removeClass('opposite oppositeAlt oppositeOver oppositeOverBorderless')

    $('html body #wrapper #container, ' +
	    'html body #wrapper #container #main, ' +
      'html body #wrapper #container #guide .blur, ' +
      'html body #wrapper #container #main #feed .center .channel , ' +
      'html body #wrapper #container #main #group .air .populate, ' +
      'html body #wrapper #container #main #group .result .filter, ' +
      'html body #wrapper #container #main #group .result .populate, ' +
      'html body #wrapper #container #main .content .status .filter, ' +
      'html body #wrapper #container #main #visit #page #front #label .link, ' +
      'html body #wrapper #container #main #visit #page .quick .right, ' +
      'html body #wrapper #container #main #visit #page .quick .left, ' +
      'html body #wrapper #container #main #feed .center .quick .right, ' +
      'html body #wrapper #container #main #feed .center .quick .left')
      .addClass('invertAlt').removeClass('opposite oppositeAlt oppositeOver oppositeOverBorderless')
    $(':root').css({
      '--loader-color-primary': '#0078D4',
      '--loader-color-secondary': '#5baff0',
    })
    $('html body #wrapper #container #main #visit #page #front #label .link, ' +
      'html body #wrapper #container #main #visit #page .quick .feed .asset, ' +
      'html body #wrapper #container #main #visit #page .quick .feed .translation, ' +
      'html body #wrapper #container #main #visit #page .quick .left, ' +
      'html body #wrapper #container #main #visit #page .quick .right, ' +
      'html body #wrapper #container #main #feed .center .quick .right, ' +
      'html body #wrapper #container #main #feed .center .quick .left, ' +
      'html body #wrapper #container #main #top #arm #search input[type=text], ' +
      'html body #wrapper #container #main #feed .center .quick .feed .left, ' +
      'html body #wrapper #container #main #feed .center .quick .feed .right')
      .addClass('invertOverBorderless').removeClass('oppositeOver oppositeOverBorderless')
    $('html body #wrapper #container #main #visit #page .quick .feed .translation, ' +
      'html body #wrapper #container #main #top #arm #search #match .listing .index .detail .translation, ' +
      'html body #wrapper #container #main #top #arm #search #match .listing .hover .detail .translation, ' +
      'html body #wrapper #container #main #visit #page #front #first .listing .index .detail .translation, ' +
      'html body #wrapper #container #main #visit #page #front #first .listing .hover .detail .translation')
      .css('filter','hue-rotate(0deg)')
    $('html body #wrapper #container #main #progressBar').removeClass('responseOpposite').addClass('responseInvert')
    $('html body #wrapper #container #main #top #arm #search #match .listing .hover, ' +
      'html body #wrapper #container #main #visit #page #front #first .listing .hover')
      .removeClass('contrast.hover').addClass('visual.hover')
    $('html body #wrapper #container #main #top #arm #search #match .listing .index, ' +
      'html body #wrapper #container #main #visit #page #front #first .listing .index')
      .addClass('visual').removeClass('contrast')
    $('html body #wrapper #container #main .content .status .filter, ' +
      'html body #wrapper #container #main #top #arm #search #input input[type=text], ' +
      'html body #wrapper #container #main #group .air .populate, ' +
      'html body #wrapper #container #main #group .result .filter, ' +
      'html body #wrapper #container #main #group .result .populate, ' +
      'html body #wrapper #container #main .content .status .filter, ' +
      'html body #wrapper #container #guide .sticky .item, ' +
      '#wrapper #container #main #feed .center .channel .item')
      .addClass('invertOver').removeClass('oppositeOver')
    $('html body #wrapper #container #main #top #arm #search #match .listing .index .detail .buffer, ' +
      'html body #wrapper #container #main #top #arm #search #match .listing .hover .detail .buffer, ' +
      'html body #wrapper #container #main #visit #page #front #first .listing .index .detail .buffer, ' +
      'html body #wrapper #container #main #visit #page #front #first .listing .hover .detail .buffer, ' +
      'html body #wrapper #container #main .content .suggestions .combine a').css('color','steelblue')
    $('html body #wrapper #container #main #top #arm #search #match .listing, ' +
      'html body #wrapper #container #main #visit #page #front #first .listing')
      .removeClass('oppositeScrollbar').addClass('invertScrollbar').css('border', '.3px solid #ddd')
    $('html body #wrapper #container #main #visit #page .focus .button').removeClass('buttonOpposite').addClass('buttonInvert')
    $('html body #wrapper #container #main #feed .center .item .addComment .post').css('color','dodgerblue')
    $('html body #wrapper #container #main #visit #page #front .focus').addClass('pageInput')
    $('html body #wrapper #container #main #dots .fill').css('background-color','#555555')
    $('html body #wrapper #container #main #top').css('border-bottom', '.3px solid #ccc')
    $('.fa, .fas, .images').css('color','#000')
    $('#favicon').attr('href', 'favicon.ico')
  }
}
