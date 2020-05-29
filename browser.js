var random
var op = 0
var animate
var request
var ost = 0
var closing
var opening
var request
var quit = 12
var visual = 1
var former = -1
var object = []
var filter = []
var reverse = 0
var contrast = false
var operation = false
var re = /(\b[a-z](?!\s))/g
var cors = 'https://acktic-github-io.herokuapp.com/'
document.title = 'RSS-Browser`'
$(document).ready(function() {
    $('#container, input[type=text], #arm, #bottom').show()
    if (location.href.match('\\+1')) {

		applyVisual(!op)
		contrast = true
		$('#main #placeholder').attr('src','images/visual.png')

    } else {
		applyVisual(op)
		$('#main #placeholder').attr('src','images/wall.png')
	}

	if (location.search.split('?')[1] && !location.href.match('\\?\\+1')) {
		var n = location.search.split('?')[1]
		if (n.match(/(\+1)/)) n = n.replace(/(\+1)/, '') 
        filterResponse(1, n)

	} else $('#main #visit').show()

	$('#main').on('scroll touchmove', function(){

		$('svg circle').css({
			"stroke-dashoffset": 131 - (131 * Math.max(0, Math.min(1, $('#main').scrollTop() / ($('#main')[0].scrollHeight - $('#main').innerHeight() ))))
		})

	})

	$('input[type=text]').on('touch click', function(e) {

		$(this).attr('placeholder','').css({
			'caret-color': 'rgba(128,128,128,.7)',
			'text-align': 'left'
		}).val('')

	}).on('focusout blur', function(e) {

		$(this).attr('placeholder','Search').css({
			'caret-color': 'rgba(128,128,128,.7)',
			'text-align': 'center'
		})

	}).attr('tabindex', -1).focus()

	reverseResponse(menu.reverse())

}).on('touch click', '#main .item a, #main .result a', function(e) {

	window.open($(this).attr('ext'), '_blank', 'noopener')
	e.stopPropagation()

}).on('touch click', '#main #visit #info li a', function(e) {

	$('#main #visit').remove()
	filterResponse(0, $(this).text())
	e.stopPropagation()

}).on('submit', '#search', function(e){

	$('#main #visit').remove()
	history.replaceState(null, null, window.location.href.replace(/\?.+/, ''))
	var sanitize = $('input[type=text]').val().replace(/(\/|\.)/g, ' ')
	sanitize = sanitize.replace(re, function(e) {
		return e.toUpperCase()
	})
	document.title = sanitize
	filterResponse(0, $('input[type=text]').val())
	$('#main').attr('tabindex', -1).focus()
	e.preventDefault()

}).on('touch click scroll focus', 'svg circle', function(e){

	$('#progressBar').removeClass('response').width(0)
	setTimeout(function() {
		$('#progressBar').addClass('response').css('width','100%')
	}, 250)
	$('#main').scrollTop(0)
	$('#main .item, #main .result').remove()
	populateResponse()
	history.replaceState(null, null, window.location.href.replace(/\?.+/, ''))
	document.title = 'RSS-Browser`'
	$('#main').attr('tabindex',-1).focus()	

}).on('touch click', '#home', function(e){

	location.href = window.location.origin

}).on('touch click', '.item', function(e){

	$(this).find('.fa-bookmark-o, .fa-bookmark').toggleClass('fa-bookmark-o fa-bookmark')
	e.stoppropagation()

}).on('touch click', '.filter, .populate', function(e) {

	if (contrast == true) window.location.assign('?' + $(this).attr('response') + '+1')
    else window.location.assign('?' + $(this).attr('response'))

}).on('mouseover mouseout', '.pub', function(e){

	$(this).parent().find('.fa-at').toggleClass('animate')
	e.stopPropagation()

}).on('touch click', '.fa-heart-o, .fa-heart', function(e){

	$(this).toggleClass('fa-heart-o fa-heart')
	e.stopPropagation()

}).on('touch click', '.fa-ellipsis-h', function(e){

	$(this).siblings('.url').select()
	document.execCommand('copy')
	$(this).removeClass('fa-ellipsis-h').addClass('fa-ellipsis-v')
	setTimeout(function() {
		$('.item .copy').removeClass('fa-ellipsis-v').addClass('fa-ellipsis-h')
	}, 250)
	e.stopPropagation()

}).on('touch click', '.img', function(e) {

	if ($(this).hasClass('expand min') || $(this).hasClass('expand full')) expandImage($(this).attr('id'))
	else $(this).parent().find('.fa-heart-o, .fa-heart').toggleClass('fa-heart-o fa-heart')
	e.stopPropagation()
	
})


function applyVisual(n) {

    if (n == 'op') {
        op = op != true
    } else if (n == 1 || n == 0) op = n
    if (op == 1) {
        $('body, #container, #main, #arm, #info, input[type=text], .result, .title, .category, .description, .type, .item, .item .pub, #ago, #ago a, a').css({
            'color': 'rgba(255,255,255,1)',
            'background-color': '#000',
            'border': 'none'
        })
        $('input[type=text]').css({
	        'border-bottom': '1px solid rgba(255,255,255,.1)',
   			'background-color': 'rgba(0,0,0,.9)',
            'color': 'rgba(255,255,255, 1)'
        })
		$('#main').addClass('opposite').removeClass('invert')
		$('#progressBar').addClass('responseOpposite').removeClass('responseInvert')
		$('#ago, .ago, .attr').css('color', 'rgba(255,255,255,.7)')
        $('#home, .indicator').attr('src', 'images/opposite.png')
        $('svg .progress').css('stroke', '#F74268')
        $('#favicon').attr('href', 'images/opposite.png')
        $('a').css('color', '#F7426B')
    } else if (op == 0) {
        $('#arm, input[type=text], .result, .title, .category, .description, .type, .item, .item .pub, #ago, a').css({
            'background-color': '#fff',
            'color': 'rgba(0,0,0,.7)',
			'border': 'none'
        })
        $('#main, input[type=text], .category').css({
	        'border': '.3px solid rgba(0,0,0,.1)',
			'background-color': '#fafafa'
		})
		$('#placeholder, #info, .item').css('box-shadow', '.7px .7px 4px rgba(0,0,0,.1)')
		$('#progressBar').addClass('responseInvert').removeClass('responseOpposite')
		$('#main').addClass('invert').removeClass('opposite')
		$('.item, .title').css('border','.3px solid rgba(128,128,128,.3)')
		$('.pub').css('color','rgba(0,0,0,.8)')
		$('#ago, .ago, .attr').css('color', 'rgba(10,10,10,.7)')
        $('#home').attr('src', 'images/transparent.png')
		$('.indicator').attr('src', 'images/invert.png')
        $('#favicon').attr('href', 'images/invert.png')
        $('svg .progress').css('stroke', '#08bd93')
    }
	if ($('#main .result').length && op == 0) {
		$('#arm').css('background-color','#fafafa')
		$('input[type=text]').css('background-color','#fff')
	}
	
}

function changeTimeZone(date, n) {

	var invdate = new Date(date.toLocaleString('en-US', {
    	timeZone: n
 	}))

	var diff = date.getTime() - invdate.getTime()

	return new Date(date.getTime() + diff)

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

function filterResponse(random, x) {

	var n = x.toLowerCase().replace(/(\+|%20|\-|\_|\s|\.)/g, ' ')
	filter = []
	$('#bottom').show()
	$('#main').scrollTop(0)
	$('#main .item, #main .result').remove()	
	$('#progressBar').removeClass('response').width(0)
	setTimeout(function() {
		$('#progressBar').addClass('response').css('width','100%')
	}, 250)
	if ($('#main .result').length < 1) $('#main').append("<div class='result'></div>")
    if (reverse == true) reverseResponse(menu.reverse())
	for (var i = menu.length - 1; i >= 0; i--) {
		if (menu[i].id.replace(/(\/|\.)/g, ' ').toLowerCase() == n || menu[i].cat.toLowerCase().match(n) || menu[i].id.replace(/(\/|\-|\.)/g, ' ').toLowerCase().match(n)) {
			if (random == 0) {
		    	$('#main .result').prepend(
					"<div class='filter " + menu.indexOf(menu[i]) + "' response='" + menu[i].id.toLowerCase().replace(/[\/|\.|\s|\-]/g, '-') + "'> " +
					"<div class='pub'><div class='category'>" + menu[i].cat + "</div><a class='title' ext='" + menu[i].ext + "' rel='nofollow'>" + menu[i].id.match(/[^\/]+$/g) + "</a>" +
					"&ensp;<div class='description'>" + menu[i].des + "</div>" +
					"</div><div class='type'>filter</div></div>"
				)
			}
			filter.push(menu.indexOf(menu[i]))
			former = filter[0] + +1
        }
    }
	if (x == 'random') {
		xmlResponse(menu.indexOf(menu[Math.floor(Math.random() * menu.length)]))
		return false
	}
	if (random == 1) {
		var r = filter[Math.floor(Math.random()*filter.length)]
		if (filter == -1) xmlResponse(menu.indexOf(menu[Math.floor(Math.random() * menu.length)]))
		else xmlResponse(r + +1)
		return false
	}
	setTimeout(function() {
		populateResponse(former)
	}, 350)
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
    } else $('#' + n).parent().css('padding-bottom','1.5em')

}

function momentTimeStamp(n) {

    var age = changeTimeZone(new Date(), 'America/New_York')
	var utc = changeTimeZone(new Date(n), 'America/New_York')
    var dis = age.getTime() - utc.getTime()
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

	filter = []
	if (former != -1) n = former - 1
	else n = 0
	if (n == menu.length - 1 || former == n + 1) {
	if ($('#main .result').length < 1) $('#main').append("<div class='result'></div>")
	    if (reverse == true) reverseResponse(menu.reverse())
		if ($('#main .result').length < 1) $('#main').append("<div class='result'></div>")
		for (var i = n; i <= menu.length - 1; i++) {
				if ($.inArray(menu.indexOf(menu[i]), filter) == -1) {
					$('#main .result').append(
						"<div class='populate " + menu.indexOf(menu[i]) + "' response='" + menu[i].id.toLowerCase().replace(/[\/|\.|\s|\-]/, '-') + "'> " +
						"<div class='pub'><div class='category'>" + menu[i].cat + "</div><a class='title' ext='" + menu[i].ext + "' rel='nofollow'>" + menu[i].id.match(/[^\/]+$/g) + "</a>" +
						"&ensp;<div class='description'>" + menu[i].des + "</div>" +
						"</div><div class='type'>populate</div></div>"
					)
				filter.push(menu.indexOf(menu[i]))
				former = i
				}
		}
	}
	if (former > menu.length / 2) {
		if ($('#main .result').length < 2) $('#main').append("<div class='result'></div>")
			for (var i = former; i >= 0; i--) {
				if ($.inArray(menu.indexOf(menu[i]), filter) == -1) {
					$('#main .result').append(
					"<div class='populate " + menu.indexOf(menu[i]) + "' response='" + menu[i].id.toLowerCase().replace(/[\/|\.|\s|\-]/, '-') + "'> " +
					"<div class='pub'><div class='category'>" + menu[i].cat + "</div><a class='title' ext='" + menu[i].ext + "' rel='nofollow'>" + menu[i].id.match(/[^\/]+$/g) + "</a>" +
					"&ensp;<div class='description'>" + menu[i].des + "</div>" +
					"</div><div class='type'>reverse</div></div>"
					)
				}
			}
	}
	$('svg .progress, .indicator').show()
	applyVisual()
	filter = []
	former = 1
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
    obj = []
    former = n
    var pub = []
    operation = true
	if (filter.length >= 0) {
		filter = reverseResponse(menu.reverse())
		n = menu.length - n
	} else filter = menu.reverse()
	var sanitize = filter[n].id.replace(/(\/|\.)/g, ' ')
	sanitize = sanitize.replace(re, function(e) {
		return e.toUpperCase()
	})
	document.title = sanitize
	history.replaceState(null, null, window.location.href.replace(/(%20)/g, '-'))
	$('input[type=text]').val(document.title)
	$('#main').attr('tabindex', -1).focus()
	$('#home').addClass('animate')
	$('#main .result').remove()
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
        })
        .done(function(xhr) {
			$('svg circle, .indicator').show()
			$('#home').removeClass('animate')
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
                    if ($(this).find('link').attr('href').match(/youtube/)) src = 'https://www.youtube.com/embed/' + String($(this).find('link').attr('href').split('=')[1])
                    else src = String($(this).find('link').attr('href'))
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
                    src = String($(this).find('media\\:content, content').attr('url'))
                } else if ($(this).find('content\\:encoded').text().match(/img.+src=['"](.*?)['"]/)) {
                    src = String($(this).find('content\\:encoded').text().match(/img.+src=['"](.*?)['"]/)[1])
                } else if ($(this).find('description').text().toLowerCase().match(/src=['"](.*?)['"]/)) {
                    src = String($(this).find('description').text().toLowerCase().match(/src=['"](.*?)['"]/)[1])
                } else if ($(this).find('image').text()) {
                    src = String($(this).find('image').text())
                } else src = ''
                if (src.match(/comments|default|feeds|undefined/)) src = ''
				if (!src.match(/https?:\/\//)) src = ''
                if (src == '') courtesy = ''
                else courtesy = "<div id='ago' style='text-transform:capitalize'>Courtesy <a onclick='event.stopPropagation();window.open(\"" + filter[n].ext + "\")'>" + filter[n].id.match(/([^\/]+)\/?([^\/]*)/)[1] + "</a></div>"
                if (src.match(/mp4|twitch|youtube/)) {
                    if ($(this).find('media\\:statistics, statistics').attr('views')) {
						quit = 5
						views = "<div class='ago views' style='left:0em'><b>Views</b> " +
						$(this).find('media\\:statistics, statistics').attr('views').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "</div>"
                    } else views = ''
                    html = "<div id='yt' class='item'><input class='url' value='" + ref.trim() + "'>" +
						"<div class='ack'><i class='fa fa-at'></i></div>" +
						"<i class='copy fa fa-ellipsis-h' title='Copy URL'></i>" + 
                        "<div class='pub' onclick='event.stopPropagation();window.open(\"" + ref.trim() + "\", \"_blank\")'>" + $(this).find('title:first').text() + "</div>" +
                        "<div id='ago' style='display:block'>" + dst[0] + "</div>" +
                        "<div id='ago' style='display:block'>" + dst[1] + "</div>" +
                        "<div class='yt'><iframe src='" + src + "'></iframe>" + views +
                        "<div class='ago views' style='right:0em;text-transform:capitalize'>" +
						"Courtesy <a onclick='window.open(\"" + filter[n].ext + "\")'>" + filter[n].id.match(/([^\/]+)\/?([^\/]*)/)[1] + "</a></div></div>"
                } else {
				 quit = 12
                 html = "<div class='item'><input class='url' value='" + ref.trim() + "'>" +
						"<div class='ack'><i class='fa fa-at'></i></div>" +
						"<i class='copy fa fa-ellipsis-h' title='Copy URL'></i>" +
						"<div class='pub' onclick='event.stopPropagation();window.open(\"" + ref.trim() + "\", \"_blank\")'>" + $(this).find('title:first').text() + "</div>" +
                        "<div id='ago' style='width:99%;display:block'>" + filter[n].cat + "</div>" + 
                        "<div class='ago' style='width:100%;display:block'>" + dst[0] + "</div>" + 
						"<div class='ago' style='width:100%;display:block'>" + dst[1] + "</div>" +
						"<div class='ago attr' style='width:100%;display:block'></div>" +
						"<div class='border'></div><img id='" + i + "' style='display:none' src='" + src + "' class='img'>" + courtesy + 
						"<div class='fa'style='float:right'><i class='ago fa fa-heart-o'></i>" +
						"<i class='ago fa fa-bookmark-o'></i>" +
						"</div></div>"
				}
                pub.push({
                    element: i,
                    since: gen,
                    post: html
                })
            })
            pub.sort(function(a, b) {
                return b.since - a.since
            })
			$('svg .progress, .indicator').show()
            for (var i = 0; i <= quit - 1; i++) {
                $('#main').append(pub[i].post)
                if ($('#' + pub[i].element).length) imageResolution(pub[i].element)
            }
			applyVisual()
        })

}
