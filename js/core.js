String.prototype.space = function() {

  return this.toLowerCase().replace(/(\/|\.)/g, ' ')

}

String.prototype.image = function() {

  return 'images/png/' + this + '.png'

}

String.prototype.response = function() {

  return this.toLowerCase().replace(/\/|\.|\s/g, '-')

}

String.prototype.next = function() {

  if (filter.length > 1)
    var plus = filter.indexOf(menu.indexOf(menu[parseInt(this)]))
  else var plus = parseInt(this)
  if (filter[plus + +1]) var next = filter[plus + +1]
  else if (this == menu.length - 1) var next = 1 + +1
  else var next = parseInt(this) + +1

  return next

}

String.prototype.back = function() {

  if (filter.length > 1)
    var plus = filter.indexOf(menu.indexOf(menu[parseInt(this)]))
  if (filter[plus - +1]) var back = filter[plus - +1]
  else if (this == 0) var back = menu.length - 1
  else var back = parseInt(this) - +1

  return back

}

String.prototype.domain = function() {

  return this.match(/^(?:http:\/\/|www\.|https:\/\/)([^\/]+)/g)

}

String.prototype.define = function() {

  var n = this
  if (contrast == true && !location.href.match('\\+1')) n = n + '+1'
  else if (contrast == true) n = n + '+1'
  return n

}

String.prototype.zulu = function() {

    var opt = {
        weekday: 'long',
        day: '2-digit',
        month: 'short',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    }
    var dmz = []
    var utc = new Date(this)
    dmz.push(this.moment())
    var gmt = utc.toLocaleString('en-US', opt)
    dmz.push(gmt)

    return dmz

}

String.prototype.escape = function() {

    return this.replace(/\&.+\;/g, '')
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")

}

String.prototype.capitalize = function() {

    return this.replace(/(\b[a-z](?!\s))/g, function(n) {
        return n.toUpperCase()
    })

}

String.prototype.truncate = function(n, useWordBoundary) {

        if (this.length <= n) {
            return this;
        }
        var subString = this.substr(0, n - 1);
        return (useWordBoundary ?
            subString.substr(0, subString.lastIndexOf(' ')) :
            subString) + "..."

}

String.prototype.grep = function(n) {

  var n = this
	return $.grep(menu, function (elem) {
	    return elem.cat == n;
	}).length

}

String.prototype.moment = function() {

    var age = new Date()
    var utc = new Date(this)
    var dis = age.getTime() - utc.getTime()
    if (dis < 0) dis = -dis
    var sec = dis / 1000
    if (sec < 60) return parseInt(sec) + ' second' + (parseInt(sec) >
        1 ? 's' : '')
    var min = sec / 60
    if (min < 60) return parseInt(min) + ' minute' + (parseInt(min) >
        1 ? 's' : '')
    var h = min / 60
    if (h < 24) return parseInt(h) + ' hour' + (parseInt(h) > 1 ?
        's' : '')
    var d = h / 24
    if (d < 30) return parseInt(d) + ' day' + (parseInt(d) > 1 ? 's' :
        '')
    var m = d / 30
    if (m < 12) return parseInt(m) + ' month' + (parseInt(m) > 1 ?
        's' : '')
    var y = m / 121

    return parseInt(y) + ' year' + (parseInt(y) > 1 ? 's' : '')

}

String.prototype.state = function() {

    history.replaceState(null, null, this)

}

String.prototype.blank = function() {

  window.open(this, '_blank', 'noreferrer noopener')

}

String.prototype.exit = function() {

    window.location.assign(this)

}
