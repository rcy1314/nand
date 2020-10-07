var visual = function(n) {
  if (n == 'op') op = op != true
  else if (n == 1 || n == 0) op = n
  if (op == 1) {
    $('div, input[type=text]').css('color','#f7f7f7')
      .removeClass('pageInput buttonInvert visual visual.hover invert invertAlt invertOver invertScrollbar invertOverBorderless')
    $('html body #wrapper #container .attribute div, ' +
      'html body #wrapper #container .attribute, ' +
      'html body #wrapper #container, ' +
      'html body #wrapper #container #main, ' +
      'html body #wrapper #container #main #feed .center .quick .feed, ' +
      'html body #wrapper #container #main #feed .center .channel .item, ' +
      'html body #wrapper #container #main #feed .center .channel .item .classic, ' +
      'html body #wrapper #container #main .listing .index, ' +
      'html body #wrapper #container #main .filter, ' +
      'html body #wrapper #container #main .populate')
      .addClass('opposite')
    $('html body #wrapper #container #guide, ' +
      'html body #wrapper #container #guide .sticky .wrap, ' +
      'html body #wrapper #container #main #visit #page #front .focus input[type=text], ' +
      'html body #wrapper #container #main .quick .right, ' +
      'html body #wrapper #container #main .quick .left')
      .addClass('oppositeAlt')
    $(':root').css({
      '--loader-color-primary': '#f7426C',
      '--loader-color-secondary': '#e86d8a'
    })
    $('html body #wrapper #container #main .asset, ' +
      'html body #wrapper #container #main #visit #page .quick .feed .translation, ' +
      'html body #wrapper #container #main #visit #page #front #label .link, ' +
      'html body #wrapper #container #main .quick .left, ' +
      'html body #wrapper #container #main .quick .right, ' +
      'html body #wrapper #container #main #top #arm #search input[type=text]')
      .addClass('oppositeOverBorderless')
    $('html body #wrapper #container .attribute div, ' +
      'html body #wrapper #container .item, ' +
      'html body #wrapper #container #main .filter, ' +
      'html body #wrapper #container #main .populate')
      .addClass('oppositeOver')
    $('html body #wrapper #container #sidebar #content #basic input[type=text], ' +
      'html body #wrapper #container #main #visit #page #front .focus')
    $('html body #wrapper #container #main .buffer')
      .css('color','#444444')
    $('html body #wrapper #container #main .content .suggestions .combine a').css('color','#f7426C')
    $('html body #wrapper #container #main #visit #page #front .focus .button')
      .addClass('buttonOpposite')
    $('html body #wrapper #container #main .hover')
      .addClass('contrast.hover')
    $('html body #wrapper #container #main .index')
      .addClass('contrast')
    $('html body #wrapper #container #sidebar #content #category .cat img, ' +
      'html body #wrapper #container #main .translation')
      .css('filter','hue-rotate(110deg)')
    $('html body #wrapper #container #sidebar #content, ' +
      'html body #wrapper #container #main .listing')
      .addClass('oppositeScrollbar')
    $('html body #wrapper #container #main #feed .center .channel .item, ' +
      'html body #wrapper #container #main #notification, ' +
	    'html body #wrapper #container #main #feed .center .quick, ' +
      'html body #wrapper #container #main .listing').css('box-shadow','none')
    $('html body #wrapper #container #main #dots .fill').css('background-color','#ffffff')
    $('#favicon').attr('href', 'images/Opposite.ico')
    $('#hide, #sidebar, .cat').css('background-color', '#070707')
    $('html body #wrapper #container #sidebar #content #category .selected').css('background-color','#0e0e0e')
    $('html body #wrapper #container #guide .blur').removeClass('blurDay').addClass('blurNight')
  } else if (op == 0) {
    $('div, input[type=text]').css('color','#444444')
      .removeClass('buttonOpposite contrast contrast.hover opposite oppositeAlt oppositeOver oppositeScrollbar oppositeOverBorderless')
    $('html body #wrapper #container #main #visit #page #front .focus input[type=text], ' +
      'html body #wrapper #container .attribute div, ' +
      'html body #wrapper #container .attribute, ' +
      'html body #wrapper #container #guide .sticky .wrap, ' +
      'html body #wrapper #container #main #feed .center .quick .feed, ' +
      'html body #wrapper #container #main #feed .center .channel .item, ' +
      'html body #wrapper #container #main .listing')
      .addClass('invert')
    $('html body #wrapper #container, ' +
	    'html body #wrapper #container #main, ' +
      'html body #wrapper #container #main .filter, ' +
      'html body #wrapper #container #main .populate, ' +
      'html body #wrapper #container #main .quick .feed, ' +
      'html body #wrapper #container #main .quick .right, ' +
      'html body #wrapper #container #main .quick .left')
      .addClass('invertAlt')
    $(':root').css({
      '--loader-color-primary': '#0078D4',
      '--loader-color-secondary': '#5baff0',
    })
    $('html body #wrapper #container #main #visit #page #front #label .link, ' +
      'html body #wrapper #container #main .asset, ' +
      'html body #wrapper #container #main #visit #page .quick .feed .translation, ' +
      'html body #wrapper #container #main .left, ' +
      'html body #wrapper #container #main .right, ' +
      'html body #wrapper #container #main #top #arm #search input[type=text]')
      .addClass('invertOverBorderless')
    $('html body #wrapper #container #sidebar #content #category .cat img, ' +
      'html body #wrapper #container #main .translation')
      .css('filter','hue-rotate(0deg)')
    $('html body #wrapper #container #main .hover')
      .addClass('visual.hover')
    $('html body #wrapper #container #main .index')
      .addClass('visual')
    $('html body #wrapper #container #main #feed .center .item .header .courtesy .copy .attribute div, ' +
      'html body #wrapper #container #main #top #arm #search #input input[type=text], ' +
      'html body #wrapper #container #main .populate, ' +
      'html body #wrapper #container #main .filter, ' +
      '#wrapper #container #main #feed .center .channel .item')
      .addClass('invertOver')
    $('html body #wrapper #container #main .buffer, ' +
      'html body #wrapper #container #main .content .suggestions .combine a').css('color','steelblue')
    $('html body #wrapper #container #sidebar #content, ' +
      'html body #wrapper #container #main .listing')
      .addClass('invertScrollbar')
    $('html body #wrapper #container #main #visit #page .focus .button').addClass('buttonInvert')
    $('html body #wrapper #container #main #notification, ' +
	    'html body #wrapper #container #main #feed .center .quick, ' +
      'html body #wrapper #container #main .listing').css('box-shadow','2px 2px 4px #dddddd')
    $('html body #wrapper #container #main #visit #page #front .focus').addClass('pageInput')
    $('html body #wrapper #container #main #dots .fill').css('background-color','#555555')
    $('#favicon').attr('href', 'favicon.ico')
    $('#hide, #sidebar, .cat').css('background-color', '#dddddd')
    $('html body #wrapper #container #sidebar #content #category .selected').css('background-color','#f7f7f7')
    $('html body #wrapper #container #guide .blur').addClass('blurDay').removeClass('blurNight')
  }
}
