var visual = function(n) {
  if (n == 'op') op = op != true
  else if (n == 1 || n == 0) op = n
  if (op == 1) {
    $('div, input[type=text]').css('color','#f7f7f7')
      .removeClass('pageInput buttonInvert visual visual.hover invert invertAlt invertOver invertScrollbar invertOverBorderless')
    $('html body #container .attribute div, ' +
      'html body #container .attribute, ' +
      'html body #container, ' +
      'html body #container #main, ' +
      'html body #container #main #feed .center .quick .feed, ' +
      'html body #container #main #feed .center .channel .item, ' +
      'html body #container #main #feed .center .channel .item .classic, ' +
      'html body #container #main .listing .index, ' +
      'html body #container #main .filter, ' +
      'html body #container #main .populate')
      .addClass('opposite')
    $('html body #container #guide, ' +
      'html body #container #guide .sticky .wrap, ' +
      'html body #container #main #visit #page #front .focus input[type=text], ' +
      'html body #container #main .quick .right, ' +
      'html body #container #main .quick .left')
      .addClass('oppositeAlt')
    $(':root').css({
      '--loader-color-primary': '#f7426C',
      '--loader-color-secondary': '#e86d8a'
    })
    $('html body #container #main .asset, ' +
      'html body #container #main #visit #page .quick .feed .translation, ' +
      'html body #container #main #visit #page #front #label .link, ' +
      'html body #container #main .quick .left, ' +
      'html body #container #main .quick .right, ' +
      'html body #container #main #top #arm #search input[type=text]')
      .addClass('oppositeOverBorderless')
    $('html body #container .attribute div, ' +
      'html body #container .item, ' +
      'html body #container #main .filter, ' +
      'html body #container #main .populate')
      .addClass('oppositeOver')
    $('html body #container #sidebar #content #basic input[type=text], ' +
      'html body #container #main #visit #page #front .focus')
    $('html body #container #main .buffer')
      .css('color','#444444')
    $('html body #container #main .content .suggestions .combine a').css('color','#f7426C')
    $('html body #container #main #visit #page #front .focus .button')
      .addClass('buttonOpposite')
    $('html body #container #main .hover')
      .addClass('contrast.hover')
    $('html body #container #main .index')
      .addClass('contrast')
    $('html body #container #sidebar #content #category .cat img, ' +
      'html body #container #main .translation')
      .css('filter','hue-rotate(110deg)')
    $('html body #container #sidebar #content, ' +
      'html body #container #main .listing')
      .addClass('oppositeScrollbar')
    $('html body #container #main #feed .center .channel .item, ' +
      'html body #container #main #feed .center .quick, ' +
      'html body #container #main .listing').css('box-shadow','none')
    $('html body #container #main #dots .fill').css('background-color','#ffffff')
    $('#favicon').attr('href', 'images/Opposite.ico')
    $('#hide, #sidebar, .cat').css('background-color', '#070707')
    $('html body #container #sidebar #content #category .selected').css('background-color','#0e0e0e')
    $('html body #container #guide .blur').removeClass('blurDay').addClass('blurNight')
  } else if (op == 0) {
    $('div, input[type=text]').css('color','#444444')
      .removeClass('buttonOpposite contrast contrast.hover opposite oppositeAlt oppositeOver oppositeScrollbar oppositeOverBorderless')
    $('html body #container #main #visit #page #front .focus input[type=text], ' +
      'html body #container .attribute div, ' +
      'html body #container .attribute, ' +
      'html body #container #guide .sticky .wrap, ' +
      'html body #container #main #feed .center .quick .feed, ' +
      'html body #container #main #feed .center .channel .item, ' +
      'html body #container #main .listing')
      .addClass('invert')
    $('html body #container, ' +
	    'html body #container #main, ' +
      'html body #container #main .filter, ' +
      'html body #container #main .populate, ' +
      'html body #container #main .quick .feed, ' +
      'html body #container #main .quick .right, ' +
      'html body #container #main .quick .left')
      .addClass('invertAlt')
    $(':root').css({
      '--loader-color-primary': '#0078D4',
      '--loader-color-secondary': '#5baff0',
    })
    $('html body #container #main #visit #page #front #label .link, ' +
      'html body #container #main .asset, ' +
      'html body #container #main #visit #page .quick .feed .translation, ' +
      'html body #container #main .left, ' +
      'html body #container #main .right, ' +
      'html body #container #main #top #arm #search input[type=text]')
      .addClass('invertOverBorderless')
    $('html body #container #sidebar #content #category .cat img, ' +
      'html body #container #main .translation')
      .css('filter','hue-rotate(0deg)')
    $('html body #container #main .hover')
      .addClass('visual.hover')
    $('html body #container #main .index')
      .addClass('visual')
    $('html body #container #main #feed .center .item .header .courtesy .copy .attribute div, ' +
      'html body #container #main #top #arm #search #input input[type=text], ' +
      'html body #container #main .populate, ' +
      'html body #container #main .filter, ' +
      '#container #main #feed .center .channel .item')
      .addClass('invertOver')
    $('html body #container #main .buffer, ' +
      'html body #container #main .content .suggestions .combine a').css('color','steelblue')
    $('html body #container #sidebar #content, ' +
      'html body #container #main .listing')
      .addClass('invertScrollbar')
    $('html body #container #main #visit #page .focus .button').addClass('buttonInvert')
    $('html body #container #main #feed .center .quick, ' +
      'html body #container #main .listing').css('box-shadow','2px 2px 4px #dddddd')
    $('html body #container #main #visit #page #front .focus').addClass('pageInput')
    $('html body #container #main #dots .fill').css('background-color','#555555')
    $('#favicon').attr('href', 'favicon.ico')
    $('#hide, #sidebar, .cat').css('background-color', '#eeeeee')
    $('html body #container #sidebar #content #category .selected').css('background-color','#f7f7f7')
    $('html body #container #guide .blur').addClass('blurDay').removeClass('blurNight')
  }
}
