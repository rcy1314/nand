$(document).ready()
.on('touch click', '#arm #home', function(e) {
  var uri = window.location.origin
  if (contrast == true && !location.href.match('\\+1')) uri = uri + '+1'
  else if (contrast == true) uri = uri + '+1'
  exit(uri)
  e.preventDefault()
})
.on('touch click', '#option .fa-git', function(e) {
  window.location.href = 'https://github.com/acktic/acktic.github.io'
})
.on('touch click', '.fa-globe', function(e) {
  window.location.href = 'maintenance/rip.txt'
})
.on('touch click', '#option .fa-home', function(e) {
  $('#main .result, #main .air, #main .center, #main .content').remove()
  var uri = '?q=' + category.toLowerCase()
  if (contrast == true && !location.href.match('\\+1')) uri = uri + '+1'
  else if (contrast == true) uri = uri + '+1'
  populate(category)
  state(uri)
  progress(true, 100)
})
.on('touch click', '#visit .fa-sun', function(e) {
  if (!location.href.match('\\+1') && !location.href.match('\\?\\+1')) {
    var uri = window.location.href + '?+1'
    contrast = contrast != true
    op = op != true
  } else if (location.href.match('\\?q=') && !location.href.match('\\+1')) {
    var uri = window.location.href + '?+1'
    contrast = contrast != true
    op = op != true
  } else if (location.href.match('\\?\\+1') || location.href.match('\\+1')) {
    var uri = window.location.href.replace(/\?\+1|\+1/g, '')
    contrast = false
    op = op != true
  }
  state(uri)
  visual()
})
.on('touch click', '#option .fa-sun, #option .fa-circle', function(e) {
  if (!location.href.match('\\+1') && !location.href.match('\\?\\+1')) {
    var uri = window.location.href + '?+1'
    contrast = contrast != true
    op = op != true
  } else if (location.href.match('\\?q=') && !location.href.match('\\+1')) {
    var uri = window.location.href + '?+1'
    contrast = contrast != true
    op = op != true
  } else if (location.href.match('\\?\\+1') || location.href.match('\\+1')) {
    var uri = window.location.href.replace(/\?\+1|\+1/g, '')
    contrast = false
    op = op != true
  }
  if ($(this).parents('#main')) state(uri)
  visual()
})
.on('touch click', '#option .fa-code', function(e) {
  var re = menu.indexOf(menu[Math.floor(Math.random() * menu.length)])
  var uri = '?q=' + menu[re].cat.toLowerCase() + '&' + menu[re].id.toLowerCase()
    .replace(/\s|\.|\//g, '-')
  if (contrast == true && !location.href.match('\\+1')) uri = uri + '+1'
  else if (contrast == true) uri = uri + '+1'
  exit(uri)
  return false
})
.on('touch click', '#option .fa-terminal', function(e) {
  var array = []
  for (i = 1; i <= menu.length - 1; i++) {
    if (menu[i].cat == category) array.push(menu.indexOf(menu[i]))
  }
  var n = array[Math.floor(Math.random() * array.length)]
  var uri = '?q=&' + menu[n].id.toLowerCase()
    .replace(/(\s|\.|\/)/g, '-')
  if (contrast == true && !location.href.match('\\+1')) uri = uri + '+1'
  else if (contrast == true) uri = uri + '+1'
  exit(uri)
  return false
})
