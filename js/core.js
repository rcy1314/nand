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

var escape = function (n) {

    return n
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")

}

var exit = function (n) {

    window.location.assign(n)

}

var grep = function (array, n) {

	var numOccurences = $.grep(array, function (elem) {
	    return elem.cat === n;
	}).length;
	return numOccurences

}

var moment = function(n) {

    var age = new Date()
    var utc = new Date(n)
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

var state = function (n) {

    history.replaceState(null, null, n)

}


var zulu = function (n) {

    var opt = {
        weekday: 'long',
        day: '2-digit',
        month: 'short',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    }
    var dmz = []
    dmz.push(moment(n))
    var utc = new Date(n)
    var gmt = utc.toLocaleString('en-US', opt)
    dmz.push(gmt)

    return dmz

}
