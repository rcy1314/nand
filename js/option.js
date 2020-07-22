$(document).ready()
.on('touch click', '#arm #home', function(e) {
  window.location.href = window.location.origin
})
.on('touch click', '#option .fa-git', function(e) {
  window.location.href = 'https://github.com/acktic/acktic.github.io'
})
.on('touch click', '.fa-times-circle', function(e) {
  $('#guide').remove()
})
.on('touch click', '.fa-globe', function(e) {
  window.location.href = 'maintenance/rip.txt'
})
.on('touch click', '#option .fa-home', function(e) {
  $('#main .center, #main .content, #main .result, #main .air')
    .remove()
  $('#main #visit')
    .show()
  var uri = '?q=' + category.toLowerCase()
  if (contrast == true && !location.href.match('\\+1')) uri = uri + '+1'
  else if (contrast == true) uri = uri + '+1'
  exit(uri)
})
.on('touch click', '#option .fa-circle-notch, #option .fa-circle', function(e) {
  $(this)
    .toggleClass('fa-circle-notch fa-circle')
  if (!location.href.match('\\?q=') && !location.href.match('\\?\\+1') &&
    contrast == false) {
    var init = document.location.href + '?+1'
    state(init)
    contrast = contrast != true
  } else if (location.href.match('\\?q=') && !location.href.match('\\+\\1') &&
    contrast == false) {
    var opposite = document.location.href + '+1'
    state(opposite)
    contrast = contrast != true
  } else if (location.href.match('\\?\\+1') || location.href.match('\\+1') ||
    contrast == false) {
    var invert = document.location.href
    invert = invert.replace(/\?\+1|\+1/g, '')
    history.replaceState(null, null, invert)
    contrast = true
  }
  visual('op')
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
if (!id) id = category
else id = menu[id].cat
  var array = []
  for (i = 1; i <= menu.length - 1; i++) {
    if (menu[i].cat == id) array.push(menu.indexOf(menu[i]))
  }
  var n = array[Math.floor(Math.random() * array.length)]
  var uri = '?q=&' + menu[n].id.toLowerCase()
    .replace(/(\s|\.|\/)/g, '-')
  if (contrast == true && !location.href.match('\\+1')) uri = uri + '+1'
  else if (contrast == true) uri = uri + '+1'
  exit(uri)
  return false
})
