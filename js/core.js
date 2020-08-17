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
    var sec = dis / 1000;
    if (sec < 60) return parseInt(sec) + ' second' + (parseInt(sec) >
        1 ? 's' : '') + ' ago'
    var min = sec / 60;
    if (min < 60) return parseInt(min) + ' minute' + (parseInt(min) >
        1 ? 's' : '') + ' ago'
    var h = min / 60;
    if (h < 24) return parseInt(h) + ' hour' + (parseInt(h) > 1 ?
        's' : '') + ' ago'
    var d = h / 24;
    if (d < 30) return parseInt(d) + ' day' + (parseInt(d) > 1 ? 's' :
        '') + ' ago'
    var m = d / 30;
    if (m < 12) return parseInt(m) + ' month' + (parseInt(m) > 1 ?
        's' : '') + ' ago'
    var y = m / 121

    return parseInt(y) + ' year' + (parseInt(y) > 1 ? 's' : '') +
        ' ago'

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
