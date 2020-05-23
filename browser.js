var random
var op = 0
var animate
var request
var ost = 0
var closing
var opening
var quit = 12
var visual = 1
var former = -1
var object = []
var filter = []
var reverse = 0
var contrast = false
var operation = false
var cors = 'https://acktic-github-io.herokuapp.com/'
document.title = 'RSS-Browser`'
$(document).ready(function() {
    $('#container').show()
    if (location.href.match('\\+1')) {

		applyVisual(!op)
        refreshResponse()
		contrast = true

    } 

	else applyVisual(op)

	if (location.search.split('?')[1] && !location.href.match('\\?\\+1')) {
		var n = location.search.split('?')[1]
		if (n.match(/(\+1)/)) n = n.replace(/(\+1)/, '') 
   	    opening = '.+' + n.toLowerCase().replace(/(\+|%20|\-|\_)/g, '') + '.+'
        closing = '.+' + n.toLowerCase().replace(/(\+|%20|\-|\_)/g, '.+') + '.+'
                    filterResponse(1, n.toLowerCase().replace(/(\+|%20|\-|\_)/g, ''),
						n.toLowerCase().replace(/(\+|%20|\-|\_)/g, '.+'),
						opening + closing,
						closing + opening
					)
		$('input[type=text]').blur().hide()

	} else refreshResponse()


    $('input[type=text]').on('keyup', function(e) {
		window.scrollTo(0, 0)
		document.body.scrollTop = 0
        opening = '.+' + $(this).val().toLowerCase().match(/^\w+/g) + '.+'
        closing = '.+' + $(this).val().toLowerCase().match(/\w+$/g) + '.+'
        if (e.keyCode <= 90 && e.keyCode >= 48 ||
			e.keyCode == 8 ||
			e.keyCode == 32 ||
			e.keyCode == 13 ||
			e.keyCode == 27 ||
			e.keyCode == 38 ||
			e.keyCode == 40
		) {
			if (e.keyCode == 27 || e.keyCode == 38 || e.keyCode == 40) {
				$('input[type=text]').hide().blur()
				$('#main').attr('tabindex', -1).focus()
			}
            else {
                filterResponse(0, $('input[type=text]').val().toLowerCase(),
					$('input[type=text]').val().toLowerCase().replace(/ /g, '.+'),
					opening + closing,
					closing + opening
				)
            }
        }
    })

    $('#main').on('scroll touchmove', function(e) {
        if (e.type == 'scroll') {
            $('svg circle').css({
                "stroke-dashoffset": 131 - (131 * Math.max(0, Math.min(1, $('#main').scrollTop() / ($('#main')[0].scrollHeight - $('#main').innerHeight() ))))
            })
        }
        if (e.type == 'scroll' || e.type == 'touchmove') {
            if ($('#main').scrollTop() != 0) $('input[type=text]').hide().blur()
            if ($('#main').scrollTop() + $('#main').innerHeight() >= $('#main')[0].scrollHeight)
                if (operation == false && $('input[type=text]').val().length >= 2) {
                    filterResponse(0, $('input[type=text]').val().toLowerCase().replace(/ /g, ''),
						$('input[type=text]').val().toLowerCase().replace(/ /g, '.+'),
						opening + closing,
						closing + opening
					)
                } else if (operation == false) {
					populateResponse()
				}
        }
    }).attr('tabindex', -1).focus()

	reverseResponse(menu.reverse())

}).on('touchstart click', 'a', function(e) {

	window.open($(this).attr('ext'), '_blank')
	e.stopPropagation()

}).on('submit', '#search', function(e){

	$('input[type=text]').hide().blur()
	e.preventDefault()

}).on('touchstart click focus', '#arm, circle, .progress', function(e){

	refreshResponse()

}).on('touchstart click', '.item', function(e){

	$(this).find('.fa-bookmark-o, .fa-bookmark').toggleClass('fa-bookmark-o fa-bookmark')
	e.stopPropagation()

}).on('touchstart click', '.filter, .populate', function(e) {

	if (contrast == true) window.location.assign('?' + $(this).attr('response') + '+1')
    else window.location.assign('?' + $(this).attr('response'))

}).on('touchstart click', '.fa-heart-o, .fa-heart', function(e){

	$(this).toggleClass('fa-heart-o fa-heart')
	e.stopPropagation()

}).on('touchstart click', '.img', function(e) {

	if ($(this).hasClass('expand min') || $(this).hasClass('expand full')) expandImage($(this).attr('id'))
	else $(this).parent().find('.fa-heart-o, .fa-heart').toggleClass('fa-heart-o fa-heart')
	e.stopPropagation()
	
})


function applyVisual(n) {

    if (n == 'op') {
        op = op != true
    } else if (n == 1 || n == 0) op = n

    if (op == 1) {
        $('body, #container, #main, #arm, input[type=text], .populate, .populate .pub, .populate .des, .item, .item .pub').css({
            'color': 'rgba(255,255,255,1)',
            'background-color': '#000',
            'border': 'none'
        })
        $('input[type=text]').css({
	        'border-bottom': '1px solid rgba(255,255,255,.1)',
   			'background-color': 'rgba(0,0,0,.9)',
            'color': 'rgba(255,255,255, 1)'
        })
		$('#ago, .ago, .attr').css('color', 'rgba(255,255,255,.7)')
        $('#home, .progress').attr('src', 'images/opposite.png')
        $('svg .progress').css('stroke', '#F74268')
        $('#favicon').attr('href', 'images/opposite.png')
        $('a').css('color', '#F7426B')
        animate = 'opposite.png'
    } else if (op == 0) {
        $('input[type=text], #main, .populate, .populate .pub, .populate .des, .item, .item .pub, .pub, a').css({
            'background-color': '#fff',
            'color': 'rgba(0,0,0,.7)',
			'border': 'none'
        })
        $('input[type=text], .item .pub').css({
	        'border-bottom': '1px solid rgba(0,0,0,.1)',
		})
		$('#ago, .ago, .attr').css('color', 'rgba(10,10,10,.7)')
        $('#favicon').attr('href', 'images/invert.png')
        $('svg .progress').css('stroke', '#08bd93')
        $('#home, .progress').attr('src', 'images/invert.png')
        animate = 'invert.png'
    }
}

function expandImage(n) {

    if ($('#' + n).hasClass('expand min')) {
        object.push({
            element: n,
            item: $('#' + n).parents('.item').width(),
            parent: $('#' + n).parent().width(),
            less: $('#' + n).width()
        })
        $('#' + n).removeClass('min').addClass('full').width('100%').parent().width("100%")
    } else if ($('#' + n).hasClass('expand full')) {
        object.forEach(function(e) {
            if (n == e.element && e.less) $('#' + n).removeClass('full').addClass('min').width(e.less).parents('.item').width(e.item)
        })
    }

}

function filterResponse(random, k, n, o, p) {
    console.log(reverse)
	filter = []
	$('#main #arm').remove()
	$('#main .filter').remove()
	$('#main .populate').remove()
	 if (operation == true) {
        operation = false
        $('#arm').hide()
        request.abort()
    }
    if (reverse == true) reverseResponse(menu.reverse())
	for (var i = menu.length - 1; i >= 0; i--) {
        if (menu[i].id.toLowerCase().match(n) || menu[i].cat.toLowerCase().match(k) || menu[i].des.toLowerCase().match(o) || menu[i].des.toLowerCase().match(p)) {
	    	$('#main').prepend(
				"<div class='filter " + menu.indexOf(menu[i]) + "' response='" + menu[i].id.replace(/[\/|\.|\s|\-]/, '+') + "'> " +
				"<div class='pub'>filter&ensp;" + menu.indexOf(menu[i]) + "&ensp;<a ext='" + menu[i].ext + "'>" + menu[i].id.match(/[^\/]+$/g) + "</a></div>" +
				"<div class='des'>" + menu[i].des + "</div>" +
				"</div>"
			)
				filter.push(menu.indexOf(menu[i]))
				former = menu.indexOf(menu[i])
        }
    }
	if (random == 1) {
		var x = filter[Math.floor(Math.random()*filter.length)]
		console.log(x - +1)
		if (filter === undefined || filter == 0) xmlResponse(menu.indexOf(menu[Math.floor(Math.random() * menu.length)]))
		else xmlResponse(x + +1)
		return false
	}
	setTimeout(function() {
		populateResponse()
	}, 500)
	applyVisual()

}

function imageResolution(n) {

	var mobile = 1280
	var minimum = 299
	var maximum = 799
    if ($('#' + n).attr('src')) {
        $('#' + n).one('load', function() {
            if ($('#' + n).get(0).naturalHeight > mobile && $('#' + n).get(0).naturalWidth > maximum) {
                var expand = "<a onclick='event.stopPropagation();expandImage(" + n + ")' style='cursor:default;text-transform:capitalize'>expand</a>"
                $('#' + n).addClass('expand min').width('45%').css('margin','0 auto') } else if ($('#' + n).get(0).naturalWidth > minimum) {
				expand = ''
                $('#' + n).width('100%')
            } else if ($('#' + n).get(0).naturalWidth < minimum) {
				expand = ''
                $('#' + n).width($('#' + n).get(0).naturalWidth).css('margin-left','10px')
            }
    		$('#' + n).css('display', 'block')
            $('#' + n).siblings('.attr').html(Math.round($('#' + n).get(0).naturalWidth) + 'x' + Math.round($('#' + n).get(0).naturalHeight) + '&ensp;' + expand)
        })
    } else $('#' + n).parent().css('padding-bottom','7em')

}

function momentTimeStamp(n) {

    var age = new Date()
    var dis = age.getTime() - new Date(n).getTime()
    var sec = dis / 1000;
    if (sec < 60) return parseInt(sec) + ' second' + (parseInt(sec) > 1 ? 's' : '') + ' ago'
    var min = sec / 60;
    if (min < 60) return parseInt(min) + ' minute' + (parseInt(min) > 1 ? 's' : '') + ' ago'
    var h = min / 60;
    if (h < 24) return parseInt(h) + ' hour' + (parseInt(h) > 1 ? 's' : '') + ' ago'
    var d = h / 24;
    if (d < 30) return parseInt(d) + ' day' + (parseInt(d) > 1 ? 's' : '') + ' ago'
    var m = d / 30;
    if (m < 12) return parseInt(m) + ' month' + (parseInt(m) > 1 ? 's' : '') + ' ago'
    var y = m / 121

    return parseInt(y) + ' year' + (parseInt(y) > 1 ? 's' : '') + ' ago'

}

function populateResponse(n) {

    if (operation == true) {
        operation = false
        $('#arm').hide()
        request.abort()
    }
	if (filter === undefined || filter.length == 0 || !former) i = former + 1
	else i = former - 1
    if (reverse == true) reverseResponse(menu.reverse())
	for (i; i <= menu.length - 1; i++) {
			if ($.inArray(menu.indexOf(menu[i]), filter) == -1)
				$('#main').append(
					"<div class='populate '" + menu.indexOf(menu[i]) + "' response='" + menu[i].id.replace(/[\/|\/|\s|\-]/, '+') + "'>" +
					"<div class='pub'>populate&ensp;" + menu.indexOf(menu[i]) + "&ensp;<a ext='" + menu[i].ext + "'>" + menu[i].id.match(/[^\/]+$/g) + "</a></div>" +
					"<div class='des'>" + menu[i].des + "</div>" +
					"</div>"
				)
	}
	former = -1
	filter = []
    applyVisual()

}

function refreshResponse(){

		applyVisual()
		$('#main').empty()
		$('input[type=text').val('').show().focus()
		$('#main').append("<div id='arm'></div>")
    	$('#main #arm').html("<img id='home' src='images/" + animate + "'>")
		$('#main #arm').show().hide().fadeIn('slow')

}

function reverseResponse(Object) {

    var newObject = {}
    var keys = []
    for (var key in Object) keys.push(key)
    for (var i = keys.length - 1; i >= 0; i--) {

        var value = Object[keys[i]]
        newObject[keys[i]] = value

    }
    reverse = !reverse

    return newObject

}

function uncoordinatedTimeZone(n) {

    var opt = {
        weekday: 'long',
        day: '2-digit',
        month: 'short',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    }
    var dmz = []
    dmz.push(momentTimeStamp(n))
    var utc = new Date(n)
    var gmt = utc.toLocaleString('en-US', opt)
    dmz.push(gmt)

    return dmz

}

function xmlResponse(n) {

    if (operation == true) {
        operation = false
        $('#arm').hide()
        request.abort()
    }
    obj = []
    former = n
    var pub = []
    operation = true
	if (filter.length >= 0) {
		filter = reverseResponse(menu.reverse())
		n = menu.length - n
	} else filter = menu.reverse()
	$('#main').prepend("<div id='arm'></div>").scrollTop(0)
	$('#arm').show().css({
		'-webkit-backdrop-filter': 'blur(5px)',
		'filter': 'blur(5px)'
	}).hide().fadeIn('slow')
    $('#arm').html("<img id='animate' src='images/" + animate + "'>")
    request = $.get({
            url: cors + menu[n].uri,
			method: 'GET',
			dataType: 'xml',
			contentType: 'text/html; charset=utf-8',
 			headers: {          
				Accept: 'text/html; charset=utf-8',
						'Content-Type': 'text/html; charset=utf-8',
						'X-Requested-With': '*'
			}
        })
        .fail(function() {
            $('#arm').remove();
            operation = false
            refreshResponse()
        })
        .done(function(xhr) {
            if ($(xhr).find('entry').length > 0) var channel = "entry"
            else var channel = 'item'
            if ($(xhr).find(channel).length < quit) quit = $(xhr).find(channel).length
            $(xhr).find(channel).each(function(i) {
                if (channel == 'entry') {
                    var ref = $(this).find('link').attr('href')
                    var dst = uncoordinatedTimeZone($(this).find('updated').text());
                    var gen = new Date($(this).find('updated').text()).getTime()
                } else if (channel = 'item') {
                    var ref = $(this).find('link').text()
                    if ($(this).find('pubDate').text().length > 0) {
                        var dst = uncoordinatedTimeZone($(this).find('pubDate').text());
                        var gen = new Date($(this).find('pubDate').text()).getTime()
                    } else {
                        var dst = uncoordinatedTimeZone($(this).find('dc\\:date, date').text());
                        var gen = new Date($(this).find('dc\\:date').text()).getTime()
                    }
                }
                if ($(this).find('content').text().match(/https:\/\/i\.redd\.it\/.+?(gif|png|jpg)/g)) {
					 src = String($(this).find('content').text().match(/https:\/\/i\.redd\.it\/.+?(gif|png|jpg)/g))
                } else if ($(this).find('content').text().match(/https:\/\/.\.thumbs\.redditmedia\.com\/.+?(gif|png|jpg)/g)) {
					src = String($(this).find('content').text().match(/https:\/\/.\.thumbs\.redditmedia\.com\/.+?(gif|png|jpg)/g))
                } else if ($(this).find('content').text().match(/src=['"]https:\/\/.+?(gif|png|jpg)['"]/)) {
                    src = String($(this).find('content').text().match(/src=['"](.*?)['"]/)[1])
                } else if ($(this).find('link').attr('href')) {
					src = String($(this).find('link').attr('href'))
                } else if ($(this).find('media\\:thumbnail, thumbnail').attr('url')) {
                    src = String($(this).find('media\\:thumbnail, thumbnail').attr('url'))
                } else if ($(this).find('link').text().match(/https:\/\/.+?(gif|png|jpg)/)) {
                    src = String($(this).find('link').text().match(/https:\/\/.+?(gif|png|jpg)/)[0])
                } else if ($(this).find('image').find('link, url').text().match(/https:\/\/.+?(gif|png|jpg)/)) {
                    src = String($(this).find('image').find('link, url').text().match(/https:\/\/.+?(gif|png|jpg)/)[0])
                } else if ($(this).find('enclosure').attr('url')) {
                    src = String($(this).find('enclosure').attr('url'))
                } else if ($(this).find('media\\:content, content').attr('url')) {
					if ($(this).find('media\\:content, content').attr('url').match(/^(http.+)(https\:\/\/.+)/)) src = String($(this).find('media\\:content, content').attr('url').match(/^(http.+)(https\:\/\/.+)/)[2])
                    else src = String($(this).find('media\\:content, content').attr('url').match(/(https\:\/\/.+)$/))
                } else if ($(this).find('content\\:encoded').text().match(/img.+src=['"](.*?)['"]/)) {
                    src = String($(this).find('content\\:encoded').text().match(/img.+src=['"](.*?)['"]/)[1])
                } else if ($(this).find('description').text().toLowerCase().match(/src=['"](.*?)['"]/)) {
                    src = String($(this).find('description').text().toLowerCase().match(/src=['"](.*?)['"]/)[1])
                } else if ($(this).find('image').text()) {
                    src = String($(this).find('image').text())
                } else src = ''
                if (src.match(/comments|default|undefined/)) src = ''
				if (!src.match(/https?:\/\//)) src = ''
                if (src == '') courtesy = ''
                else courtesy = "<div id='ago' style='text-transform:capitalize'>Courtesy <a onclick='event.stopPropagation();window.open(\"" + filter[n].ext + "\")'>" + filter[n].id.match(/([^\/]+)\/?([^\/]*)/)[1] + "</a></div>"
                 html = "<div class='item'>" +
						"<div class='ack'><i class='fa fa-at'></i></div>" +
						"<div class='pub' onclick='event.stopPropagation();window.open(\"" + ref + "\", \"_blank\")'>" + $(this).find('title:first').text() + "</div>" +
                        "<div id='ago' style='width:100%;display:block'>" + filter[n].cat + "</div>" + 
                        "<div class='ago' style='width:100%;display:block'>" + dst[0] + "</div>" + 
						"<div class='ago' style='width:100%;display:block'>" + dst[1] + "</div>" +
						"<div class='ago attr' style='width:100%;display:block'></div>" +
						"<img id='" + i + "' style='display:none' src='" + src + "' class='img'>" + courtesy + 
						"<div class='fa'style='float:right'><i class='ago fa fa-heart-o'></i>" +
						"<i class='ago fa fa-bookmark-o'></i>" +
						"</div>"
                pub.push({
                    element: i,
                    since: gen,
                    post: html
                })
            })
            pub.sort(function(a, b) {
                return b.since - a.since
            })
            $('#main').empty()
            for (var i = 0; i <= quit - 1; i++) {
                $('#main').append(pub[i].post)
                if ($('#' + pub[i].element).length) imageResolution(pub[i].element)
            }
            populateResponse()
            applyVisual()
        })

}
