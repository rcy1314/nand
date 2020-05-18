var op = 0
var animate
var request
var ost = 0
var closing
var opening
var quit = 11
var former = 0
var object = []
var events = true
var operation = false
var cor = 'https://acktic-github-io.herokuapp.com/'
$(document).ready(function() {
    $('#wrapper').css('display', 'block')
	document.title = 'RSS-Browser`'
    if (location.href.match('\\?op=1')) {

        applyVisual(1)

    } else applyVisual(0)

    populateResponse()
    precedeResponse()
    displayAnimate('#pop')

    $('input[type=text]').on('keyup', function(e) {
		events = true
        opening = '.+' + $(this).val().toLowerCase().match(/^\w+/g) + '.+'
        closing = '.+' + $(this).val().toLowerCase().match(/\w+$/g) + '.+'
        if (e.keyCode <= 90 && e.keyCode >= 48 || e.keyCode == 8 || e.keyCode == 32) {
            if (e.keyCode == 8 && $(this).val() == '' && $('#output #pop').length) return false
            else if ($(this).val().length <= 1) {
                $('#output').empty()
                populateResponse()
                precedeResponse()
            } else {
                filterResponse($(this).val().toLowerCase().replace(/ /g, ''), $(this).val().toLowerCase().replace(/ /g, '.+'), opening + closing, closing + opening)
                displayAnimate('#pop')
            }
            e.preventDefault()
        }
    })

    $('#output').on('scroll touchmove focusin', function(e) {

		if (e.type == 'focusin') $('input[type=text]').hide()

        if (e.type == 'scroll') {
            var n = Math.max(0, Math.min(1, $('#output').scrollTop() / ($('#output')[0].scrollHeight - $('#output').innerHeight() + 20)));
            $('svg circle').css({
                "stroke-dashoffset": 131 - (131 * n)
            })
        }
        if (e.type == 'scroll' || e.type == 'touchmove') {
            if ($('#output').scrollTop() != 0 && $('#output').scrollTop() != $('#air').outerHeight()) operation = false
            if ($('#output').scrollTop() + $('#output').innerHeight() >= $('#output')[0].scrollHeight - 10)
                if (operation == false && $('input[type=text]').val().length > 2) {
                    filterResponse($('input[type=text]').val().toLowerCase().replace(/ /g, ''),
						$('input[type=text]').val().toLowerCase().replace(/ /g, '.+'),
						opening + closing,
						closing + opening
					)
                    populateResponse()
                } else if (operation == false) populateResponse()
        }
    }).attr('tabindex', -1).focus()

}).on('touch click', 'a', function(e) {

    externalURL($(this).attr('ext'))

}).on('touch click', '.pop, .air', function(e) {

	$('input[type=text]').hide()
    xmlResponse($(this).attr('get'))

}).on('touch click', '.item', function(e) {

	externalURL($(this).attr('ext'))	

}).on('touch click', '.fa-heart-o, .fa-heart', function(e){

	$(this).toggleClass('fa-heart-o fa-heart')
	e.stopPropagation()

}).on('touch click', '.fa-bookmark-o, .fa-bookmark', function(e){

	$(this).toggleClass('fa-bookmark-o fa-bookmark')
	e.stopPropagation()

}).on('touch click', '.img', function(e) {

	if ($(this).hasClass('expand min')) expandImage($(this).attr('id'))
	else if ($(this).hasClass('expand full')) expandImage($(this).attr('id'))
	else $(this).parent().find('.fa-heart-o, .fa-heart').toggleClass('fa-heart-o fa-heart')
	e.stopPropagation()
	
})

function applyVisual(n) {

    if (n == 'op') {
        op = op != true
    } else if (n == 1 || n == 0) op = n

    if (op == 1) {
        $('html, body, #wrapper, #container, input[type=text], #output, .home, .pop, .pop .pub, .air, .air .pub, .des').css({
            'color': 'rgba(255,255,255,.9)',
            'background-color': '#000',
            'border': 'none'
        })
        $('.item, .item .pub').css({
            'border-bottom': '1px solid rgba(255,255,255,.1)',
            'color': 'rgba(255,255,255, .7)',
            'background-color': 'rgba(10,10,10,1)'
        })
        $('input[type=text]').css({
            'border': '1px solid rgba(255,255,255,.2)',
        })
        $('#output').removeClass('invert').addClass('opposite')
        $('a, #air .air .pub').css('color', '#F7426B')
        $('#favicon').attr('href', 'favicon/opposite.png')
        $('#animate').attr('src', 'favicon/opposite.png')
        $('.icon').attr('src', 'favicon/opposite.png');
        $('svg .ring').css('stroke', '#F74268')
        animate = 'opposite.png'
    } else if (op == 0) {
        $('input[type=text], #output, .home, .pop, .pop .pub, .pop .des, .air, .air .pub, .air .des, .item, .item .pub').css({
            'background-color': '#fff',
            'color': 'rgba(0,0,0,.7)'
        })
        $('html, body, input[type=text]').css({
			'background-color': '#fafafa',
            'border': '1px solid rgba(0,0,0,.1)'
        })
        $('.item .pub').css('border-bottom', '1px solid rgba(0,0,0,.1)')
        $('#output').removeClass('opposite').addClass('invert')
        $('#favicon').attr('href', 'favicon/invert.png')
        $('#animate').attr('src', 'favicon/invert.png')
        $('a, #air .air .pub').css('color', '#337ab7')
        $('.icon').attr('src', 'favicon/invert.png');
        $('svg .ring').css('stroke', '#0A74DA')
        animate = 'invert.png'
    }
}

function expandImage(n) {

    if ($('#' + n).hasClass('expand min')) {
        object.push({
            element: n,
            item: $('#' + n).parents('.item').width() + 10,
            less: $('#' + n).width(),
            parent: $('#' + n).parent().width()
        })
        $('#' + n).removeClass('min').addClass('full').width('100%').parent().width("100%")
    } else if ($('#' + n).hasClass('expand full')) {
        object.forEach(function(e) {
            if (n == e.element && e.less) $('#' + n).removeClass('full').addClass('min').width(e.less).parents('.item').width(e.item)
        })
    }

}

function displayAnimate(n) {

    $('#output').animate({
        scrollTop: $(n + ':last').offset().top - $('#output').offset().top + $('#output').scrollTop()
    }, 350);
    setTimeout(function() {
        events = false
    }, 1500)

}

function externalURL(n) {

    window.open(n, '_blank')

}

function filterResponse(k, n, o, p) {

    if ($('#output #get').length && $('#output #pop').length) $('#output').empty()
    if (operation == true) {
        $('#arm').remove()
        operation = false
        request.abort()
    }
    if (!$('#output #get').length) $('#output').empty().append("<div id='pop'></div>")
    else if ($('#output #get').length) $('#output').append("<div id='pop'></div>")
    else {
        $('#output #pop').remove()
        $('#output').append("<div id='pop'></div>")
    }
    for (var i = former + 1; i < menu.length; i++) {
        if (menu[i].des.toLowerCase().match(n) || menu[i].des.toLowerCase().match(o) || menu[i].des.toLowerCase().match(p) || menu[i].cat.toLowerCase().match(n)) {
            var id = sanitizeID(menu[i].id, menu[i].ext)
            $('#pop').append("<div class='pop' get='" + i + "'><div class='pub'><a ext='" + menu[i].ext + "'>" + id + "</a></div><div class='des'>" + menu[i].des + "</div></div>")
        }
    }
    applyVisual()

}

function imageResolution(n) {

	var mobile = 1440
	var minimum = 299
	var maximum = 799
    if ($('#' + n).attr('src')) {
        $('#' + n).one('load', function() {
            if ($('#' + n).get(0).naturalHeight > mobile) {
                var expand = "<a style='cursor:pointer;text-transform:lowercase'>expand</a>"
                $('#' + n).addClass('expand min').width('45%').css('margin','0 auto')
            } else if ($('#' + n).get(0).naturalWidth > minimum) {
                $('#' + n).width('100%')
            } else if ($('#' + n).get(0).naturalWidth < minimum) {
                $('#' + n).width($('#' + n).get(0).naturalWidth).css('margin-left','10px')
            }
    		$('#' + n).css('display', 'block')
            $('#' + n).siblings('.attr').html(expand)
        })
    }

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

    if ($('#output #pop').length > 1) $('#output #pop').remove()
    if (operation == true) {
        $('#arm').remove()
        request.abort()
        operation = false
    }
    $('#output').append("<div id='pop'></div>")
    for (var i = former; i < menu.length; i++){
            var id = sanitizeID(menu[i].id, menu[i].ext)
            $('#pop').append("<div class='pop' get='" + i + "'><div class='pub'><a ext='" + menu[i].ext + "'>" + id + "</a></div><div class='des'>" + menu[i].des + "</div></div>")
	}
    applyVisual()
    former = 0

}

function precedeResponse(n) {

    reverseArray(menu.reverse())
    $('#output').prepend("<div id='air'></div>")
    for (var i = menu.reverse().length - 1; i >= 0; i--) {
            var id = sanitizeID(menu[i].id, menu[i].ext)
            $('#air').prepend("<div class='air' get='" + i + "'><div class='pub'<a ext='" + menu[i].ext + "'>" + id + "</a></div><div class='des'>" + menu[i].des + "</div></div>")
    }
    $('#output').scrollTop($('#output').scrollTop() + $('#air:first').outerHeight())
    applyVisual()

}

function randomResponse(n) {

    var n = menu[Math.floor(Math.random() * menu.length)]
    xmlResponse(menu.indexOf(n))

}

function refreshResponse(n) {

    events = true
	$('input[type=text]').css('display','block').animate({'bottom':'64px'},2000).focus()
    $('#output').empty()
    $('input[type=text]').val('')
    populateResponse()
    precedeResponse()
    displayAnimate('#pop')
    former = 0
}

function reverseArray(Object) {

    var newObject = {}
    var keys = []
    for (var key in Object) keys.push(key)
    for (var i = keys.length - 1; i >= 0; i--) {

        var value = Object[keys[i]]
        newObject[keys[i]] = value

    }

    return newObject

}

function sanitizeID(n, o) {

    if (n == 'Reddit' || n == 'Youtube' && !o.match(/channel/)) return o.match(/\b(\w+)$/)[0]
    else return n

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
        $('#arm').remove()
        operation = false
        request.abort()
    }
    obj = []
    former = n
    var pub = []
    events = true
    operation = true
    $('#output').empty()
    var id = sanitizeID(menu[n].id, menu[n].ext)
    $('#output').append("<div id='arm'></div><div id='get'></div>")
    $('#arm').html("<img id='animate' src='favicon/" + animate + "'>")
    request = $.get({
            url: cor + menu[n].uri,
			method: 'GET',
			dataType: 'XML',
			contentType: 'text/html; charset=utf-8',
 			headers: {          
				Accept: 'text/html; charset=utf-8',         
						'Content-Type': 'text/html; charset=utf-8',
						'X-Requested-With': '*',   
			}

        })
        .fail(function() {
            $('#arm').remove();
            $('#get').append("<div class='pop' onclick='external(\"" + menu[n].ext + "\")'><div class='pub'><a>" + id + "</a></div><div class='des'>" + menu[n].des + "</div></div>")
            operation = false
            applyVisual()
        })
        .done(function(data) {
            $('#arm').remove()
            $('#get').append("<div class='pop' get='" + n + "'><div class='pub'><a ext='" + menu[n].ext + "'>" + id + "</a></div><div class='des'>" + menu[n].des + "</div></div>")
            if ($(data).find('entry').length > 0) var channel = "entry"
            else var channel = 'item'
            if ($(data).find(channel).length < quit) {
                quit = $(data).find(channel).length
            }
            $(data).find(channel).each(function(i) {
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
                    if ($(this).find('link').attr('href').match(/youtube/)) {
						src = 'https://www.youtube.com/embed/' + String($(this).find('link').attr('href').split('=')[1])
					} else src = String($(this).find('link').attr('href'))
                } else if ($(this).find('media\\:thumbnail, thumbnail').attr('url')) {
                    src = String($(this).find('media\\:thumbnail, thumbnail').attr('url'))
                } else if ($(this).find('link').text().match(/https:\/\/.+?(gif|png|jpg)/)) {
                    src = String($(this).find('link').text().match(/https:\/\/.+?(gif|png|jpg)/)[0])
                } else if ($(this).find('image').find('link, url').text().match(/https:\/\/.+?(gif|png|jpg)/)) {
                    src = String($(this).find('image').find('link, url').text().match(/https:\/\/.+?(gif|png|jpg)/)[0])
                } else if ($(this).find('enclosure').attr('url')) {
                    src = String($(this).find('enclosure').attr('url'))
                } else if ($(this).find('media\\:content, content').attr('url')) {
                    if (menu[n].id.match(/Yahoo/) && $(this).find('media\\:content, content').attr('url').match(/https.*/)) {
						src = String($(this).find('media\\:content, content').attr('url').match(/https.*/))
                    } else src = String($(this).find('media\\:content, content').attr('url'))
                } else if ($(this).find('content\\:encoded').text().match(/img.+src=['"](.*?)['"]/)) {
                    if (menu[n].id == 'TIME') src = String($(this).find('content\\:encoded').text().match(/https:\/\/api\..+[^'"]/))
                    else src = String($(this).find('content\\:encoded').text().match(/img.+src=['"](.*?)['"]/)[1])
                } else if ($(this).find('description').text().toLowerCase().match(/src=['"](.*?)['"]/)) {
                    if (menu[n].id == '4chan') {
                        src = String($(this).find('description').text().match(/https:\/\/.+?(gif|png|jpg)/))
                        if (!src.match(/\.jpg/)) src = String($(this).find('description').text().match(/href=['"](.*?)['"]/)[1])
                        else src = String($(this).find('description').text().toLowerCase().match(/src=['"](.*?)(s\.jpg)['"]/)[1]) + '.jpg'
                    } else src = String($(this).find('description').text().toLowerCase().match(/src=['"](.*?)['"]/)[1])
                } else if ($(this).find('image').text()) {
                    src = String($(this).find('image').text())
                } else src = ''
				console.log(src)
                if (src.match(/app-icon|assets|comments|dmpxsnews|feedburner|footer|smilies|twitter|undefined|vidible/)) src = ''
                if (src == '') courtesy = ''
                else courtesy = "<div id='ago' style='text-transform:capitalize'>Courtesy " +
								"<a onclick='window.open(\"" + menu[n].ext + "\")'>" + menu[n].id + "</a></div>"
                if (src.match(/mp4|twitch|youtube/)) {
                    if ($(this).find('media\\:statistics, statistics').attr('views')) {
						views = "<div class='ago views' style='left:0em'><b>Views</b> " + 
						$(this).find('media\\:statistics, statistics').attr('views').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "</div>"
                    }
					else views = ''
                    html = "<div id='yt' class='item'>" +
						/* "<div id='pub'><a ext='" + menu[i].ext + "'>" + id + "</a></div>" + */
                        "<div class='pub'>" + $(this).find('title:first').text() + "</div>" +
                        "<div id='ago'>" + dst[0] +
                        /* "<br>" + dst[1] + "</div>" + */
                        "</div><div class='yt'><iframe src='" + src + "'></iframe>" + views +
                        "<div class='ago views' style='right:0em;text-transform:capitalize'>" +
						"Courtesy <a onclick='window.open(\"" + menu[n].ext + "\")'>" + menu[n].id + "</a></div></div>"
                } else {
                    html = "<div class='item' ext='" + ref.trim() + "'>" +
						/* <div id='pub'><a ext='" + menu[i].ext + "'>" + id + "</a></div>" + */
						"<div class='pub'>" + $(this).find('title:first').text() + "</div>" +
                        "<div id='ago'>" + dst[0] + "</div>" +
						"<div class='ago attr' onclick='expandImage(" + i + ")'></div>" +
						"<img id='" + i + "' style='display:none' src='" + src + "' class='img'>" + courtesy + 
						"<div class='fa' style='float:right'><i class='ago fa fa-heart-o'></i>" +
						"<i class='ago fa fa-bookmark-o'></i>" +
						"</div>"
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
            for (var i = 0; i <= quit - 1; i++) {
                $('#get').append(pub[i].post)
                if ($('#' + pub[i].element).length) imageResolution(pub[i].element)
            }
			precedeResponse()
            displayAnimate('#get')
            applyVisual()
        })
}
