$(document)
  .ready()
  .on('touch click', 'html body #container #sidebar #hide', function(e) {
      onScreen = onScreen != true
      sidebar(onScreen)
  })
  .on('touch click', 'html body #container #sidebar #content #select .Day',
    function(e) {
      op = 0
      contrast = false
      if (op == 0 && groupType != 'blocks')
        $('html body #container #main #group .air .populate, ' +
          'html body #container #main #group .result .filter, ' +
          'html body #container #main #group .result .populate').addClass('invert')
      if (location.href.match('\\?\\+1') && location.href.match('\\+1'))
        var uri = window.location.href.replace(/\?\+1|\+1/g, '')
      else uri = window.location.origin
      notify('Invert Visual Applied.')
      uri.state()
      visual()
  })
  .on('touch click', 'html body #container #sidebar #content #select .Night',
    function(e) {
      contrast = false
      op = 1
      if (!location.href.match('\\?\\+1') && !location.href.match('\\+1'))
        uri = window.location.href + '?+1'
      notify('Opposite Visual Applied.')
      uri.state()
      visual()
  })
  .on('touch click', 'html body #container #sidebar #content #select .Blocks',
    function(e) {
      expand = false
      groupType = 'blocks'
      $('html body #container #main #visit').css('visibility','hidden').hide()
      $('html body #container #main #feed, ' +
        'html body #container #main #group').remove()
      populate(category)
      menubar(topBar)
  })
  .on('touch click', 'html body #container #sidebar #content #select .List',
    function(e) {
      expand = true
      groupType = 'list'
      $('html body #container #main #visit').css('visibility','hidden').hide()
      $('html body #container #main #feed, ' +
        'html body #container #main #group').remove()
      populate(category)
      menubar(topBar)
  })
  .on('touch click', 'html body #container #sidebar #content #select .Dots',
    function(e) {
      loading = 'dots'
      $('html body #container #main #dots .fill').addClass('dots')
      setTimeout(function() {
        $('html body #container #main #dots .fill').removeClass('dots')
      },3150)
  })
  .on('touch click', 'html body #container #sidebar #content #select .Percent',
    function(e) {
      loading = 'percent'
      $.unloading()
  })
  .on('touch click', 'html body #container #sidebar #content #select .Info',
    function(e) {
      var uri = 'https://github.com/acktic/acktic.github.io'
      uri.blank()
  })
  .on('touch click', 'html body #container #sidebar #content #select .TopBar',
    function(e) {
      topBar = topBar != true
      notify('TopBar set to ' + topBar.toString().capitalize())
      menubar(topBar)
  })
  .on('touch click', 'html body #container #sidebar #content #select .ShowOption',
    function(e) {
      showOption = showOption != true
      notify('Option set to ' + showOption.toString().capitalize())
      if (showOption == false) $('html body #container #main #top #arm #option').hide()
      else if (showOption == true) $('html body #container #main #top #arm #option').show()
  })
  .on('touch click', 'html body #container #sidebar #content #select .CenterFeeds',
    function(e) {
      centerFeeds = centerFeeds != true
      if ($('.center').length > -1) centerQuick(centerFeeds)
      notify('Center Feeds are now ' + centerFeeds.toString().capitalize())
  })
  .on('touch click',
    'html body #container #sidebar #content #category .cat, ' +
    'html body #container #main #visit #page .quick .feed .translation',
    function(e) {
      id = 0
      $.loading()
      location.pathname.state()
      $('html body #container #sidebar #content #category .selected')
        .removeClass('selected')
      $('html body #container #main #toggle').hide()
      $('html body #container #main #visit').hide()
      category = $(this).attr('aria-item')
      populate($(this).attr('aria-item'))
      $(this).addClass('selected')
      menubar(topBar)
      visual()
  })
  .on('mousemove',
    'html body #container #sidebar #content #select .sel, ' +
    'html body #container #sidebar #content #category .cat',
    function(e) {
      var x = e.pageX
      var p = (x / $(this).width() * 100)
      $(this).css({
        'border-image': 'linear-gradient(to right,  rgba(0,0,0,0) 0%,rgba(147,147,147,.5) '+ parseInt(p) + '%,rgba(0,0,0,0) 100%)',
        'border-width': '.3px 0 .3px',
        'border-image-slice': '9',
        'border-style': 'solid',
      })
  })
  .on('mouseleave',
    'html body #container #sidebar #content #select .sel, ' +
    'html body #container #sidebar #content #category .cat',
    function(e) {
      $(this).css({
        'border-image': 'linear-gradient(to right,  rgba(0,0,0,0) 0%,rgba(0,0,0,0) 100%)',
      })
    })
  .on('touch click',
    'html body #container #main #visit #page .quick .feed .translation a',
    function(e) {
      uri = '?q=' + $(this).attr('aria-item').toLowerCase()
      uri.define().exit()
  })
  .on('touch click', 'html body #container #sidebar #content #select .RandomCategory',
  function(e) {
    $.loading()
    var code = []
    $('html body #container #main #visit').hide()
    for (i = 1; i <= menu.length - 1; i++) {
      if (onlyImages == true){
        if (menu[i].cat == category && menu[i].media == true) code.push(menu.indexOf(menu[i]))
      } else if (onlyImages == false){
        if (menu[i].cat == category) code.push(menu.indexOf(menu[i]))
      }
    }
    var n = code[Math.floor(Math.random() * code.length - 1)]
    xml(null, null, n)
  })
  .on('touch click', 'html body #container #sidebar #content #select .RandomImages',
  function(e) {
    $.loading()
    var code = []
    $('html body #container #main #visit').hide()
    for (i = 1; i <= menu.length - 1; i++) {
        if (menu[i].media == true) code.push(menu.indexOf(menu[i]))
      }
    var n = code[Math.floor(Math.random() * code.length - 1)]
    xml(null, null, n)
  })
  .on('touch click', 'html body #container #sidebar #content #select .Random',
  function(e) {
    $.loading()
    $('html body #container #main #visit').hide()
    xml(null, null, $.random())
  })
  .on('touch click', 'html body #container #main #option .fa-expand-alt',
  function(e) {
    expand = expand != true
    display(expand)
    if (expand == true) var group = 'List'
    else var group = 'Block'
    notify('Display feeds as ' + group + '.')
    visual()
  })
