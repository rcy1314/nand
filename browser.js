var id
var op = 0
var request
var quit = 15
var object = []
var filter = []
var channel = []
var reverse = false
var contrast = false
var cors = 'https://acktic-github-io.herokuapp.com/'
document.title = 'acktic'
$(document).ready(function() {
    $('#container, input[type=text], #arm').show()
    $('input[type=text]').on('touch click', function(e) {

        $(this).attr('placeholder', '').css({
            'caret-color': 'rgba(128,128,128,.7)',
            'text-align': 'left'
        }).val('')

    }).on('focusout blur', function(e) {

        $(this).attr('placeholder', 'Search').css({
            'text-align': 'center'
        })

    }).attr('tabindex', -1).focus()

    if (location.href.match('\\+1')) {

        applyVisual(!op)
        contrast = true

    } else {
        applyVisual(op)
    }

    if (location.search.split('?q=')[1] && !location.href.match('\\?\\+1')) {
        var uri = location.search.split('?q=')[1]
        if (uri.match(/(\+1)/)) uri = uri.replace(/(\+1)/, '')
        if (uri.match(/[^&]+/g)) uri = (uri.match(/[^&]+/g))
        $('#main #visit').hide()
        if (uri[1] && uri[0]) {
            $('input[type=text]').val(uri[0].replace(/(\-|\+|\%20)/g, ' '))
            filterResponse(true, uri[1])
        } else if (!uri[1] && uri[0]) {
            $('input[type=text]').val(uri[0].replace(/(\-|\+|\%20)/g, ' '))
            filterResponse(true, uri[0])
		}
    } else $('#main #visit').show()

    $('#main').on('scroll touchmove', function() {

        $('svg circle').css({
            "stroke-dashoffset": 131 - (131 * Math.max(0, Math.min(1, $('#main')
                .scrollTop() / ($('#main')[0].scrollHeight - $('#main')
                    .innerHeight()))))
        })

    })

}).on('touch click', '#main .item a, #main .result a', function(e) {

    window.open($(this).attr('ext'), '_blank', 'noopener')
    e.stopPropagation()

}).on('submit', '#search', function(e) {

    $('#main #visit, #main .center, #main .result, #main #air').remove()
    if ($('input[type=text]').val().length){ document.title = $(
		'input[type=text]').val().replace(/(\/|\.)/g, ' ').capitalize()
    	history.replaceState(null, null, '?q=' + $(
        	'input[type=text]').val().replace(/\s/g, '+'))
	} else document.title = 'acktic'
	progressResponse(true, 100)
    filterResponse(false, $('input[type=text]').val())
    e.preventDefault()

}).on('touch click', '#placeholder', function(e) {

	$('main #visit, #main #placeholder').remove()
	filterResponse(false, $('input[type=text]').val())

}).on('touch click', '.item', function(e) {

    $(this).find('.fa-bookmark-o, .fa-bookmark').toggleClass('fa-bookmark-o fa-bookmark')
    e.stoppropagation()

}).on('touch click', '.filter, .populate, .feed .id', function(e) {

    if (contrast == true) window.location.assign('?q=' + $('input[type=text]').val() + $(this).attr(
        'response') + '+1')
    else window.location.assign('?q=' + $('input[type=text]').val().replace(/\s/g, '+') + $(this).attr('response'))

}).on('touch click', '.fa-heart-o, .fa-heart', function(e) {

    $(this).toggleClass('fa-heart-o fa-heart')
    e.stopPropagation()

}).on('touch click', '.fa-ellipsis-h', function(e) {

    $(this).parent().find('.url').select()
    document.execCommand('copy')
    $(this).removeClass('fa-ellipsis-h').addClass('fa-ellipsis-v')
    setTimeout(function() {
        $('.item .copy').removeClass('fa-ellipsis-v').addClass('fa-ellipsis-h')
    }, 250)
    e.stopPropagation()

}).on('touch click', '.img', function(e) {

    if ($(this).hasClass('expand min') || $(this).hasClass('expand full')) expandImage($(this).attr(
        'id'))
    else $(this).parent().find('.fa-heart-o, .fa-heart').toggleClass('fa-heart-o fa-heart')
    e.stopPropagation()

})

	String.prototype.capitalize = function() {

    	return this.replace(/(\b[a-z](?!\s))/g, function(n) {
        	return n.toUpperCase()
    	})
	
	}

function applyVisual(n) {

    if (n == 'op') {
        op = op != true
    } else if (n == 1 || n == 0) op = n
    if (op == 1) {
        $('body, #container, #main, #arm, #info, input[type=text], .comment, .result, .title, .category, .description, .type, .item, .item .pub, #ago, a')
            .css({
                'color': '#fff',
                'background-color': '#000',
				'border': 'none'
            })
        $('input[type=text], .description, .comment').css({
            'border-bottom': '1px solid #333',

        })
        $('#main').addClass('opposite').removeClass('invert')
        $('#progressBar').addClass('responseOpposite').removeClass('responseInvert')
        $('#ago, .ago, .attr').css('color', '#eee')
        $('.indicator').attr('src', 'images/opposite.png').css('filter', 'none')
        $('#favicon').attr('href', 'images/opposite.png')
        $('a').css('color', '#F7426B')
    } else if (op == 0) {
        $('#arm, input[type=text], .comment, .channel, .result, .title, .category, .description, .item, .item .pub, .type, #ago, a')
            .css({
                'background-color': '#fff',
                'color': '#666',
				'border': 'none'
            })
        $('#main, input[type=text], .category, .feed').css({
            'border': '.3px solid #ddd',
            'background-color': '#fafafa'
        })
		$('#bottom').css('background-color','#fafafa')
		$('.comment').css('border-top','.3px solid #ddd')
		$('.description').css({'border-bottom': '.3px solid #ccc'})
        $('.item, .feed').css('box-shadow', '.7px .7px 4px #eee')
        $('#progressBar').addClass('responseInvert').removeClass('responseOpposite')
        $('#main').addClass('invert').removeClass('opposite')
        $('.item, .title').css('border', '.3px solid #ddd')
        $('.indicator').attr('src', 'images/transparent.png').css({
			'filter': 'saturate(50%) invert(90%)'
		})
        $('#favicon').attr('href', 'images/invert.png')
    }
    if ($('#main .result').length && op == 0) {
        $('#arm').css('background-color', '#fafafa')
        $('input[type=text], #main').css('background-color', '#fff')
    }

}

function bottomResponse(n) {

    $('#main .center').remove()
	if ($('input[type=text]').val() != '') {
		filterResponse(false, $('input[type=text]').val())
		setTimeout(function() {
			precedeResponse()
		}, 300)
	    history.replaceState(null, null, '?q=' + $('input[type=text]').val().replace(/\s/g, '+'))
	} else {
		populateResponse(n)
		precedeResponse()
	    history.replaceState(null, null, '?')
		document.title = 'acktic'
	}
	progressResponse(true, 100)
	$('#main').attr('tabindex', -1).focus()
	applyVisual()
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
            if (n == e.element && e.less) $('#' + n).removeClass('full').addClass('min').width(e.less)
                .parents('.item').width(e.item)
        })
    }

}

function feedResponse(n) {

	if (n == 0) n = menu.indexOf(menu[Math.floor(Math.random() * menu.length - 1)])
	else if (n >= menu.length - 4) n = 1
	console.log(n)
    for (var i = n + 1; i <= n + 4; i++) {
            $('#main .center .feed').append(
		        "<div class='id " + menu.indexOf(menu[i]) + "' response='&" + menu[i].id.toLowerCase().replace(/[\/|\.|\s|\-]/g, '-') + "'> " +
        		"<a class='title' ext='" + menu[i].ext + "' rel='nofollow'>" + menu[i].id.match(/[^\/]+$/g) + "</a>" +
        		"</div>"
            )
    }
    applyVisual()
}

function filterResponse(passthrough, n) {

    var n = n.toLowerCase().replace(/(\+|%20|\-|\_|\s|\.)/g, ' ')
    filter = []
    $('#main').scrollTop(0)
    $('#main .result, #main .center').remove()
    if ($('#main .result').length < 1) $('#main').append("<div class='result'></div>")
    if (reverse) reverseResponse(menu.reverse())
    for (var i = menu.length - 1; i >= 1; i--) {
        if (menu[i].id.replace(/(\/|\.)/g, ' ').toLowerCase() == n) {
            writeResponse(menu.indexOf(menu[i]))
            filter.push(menu.indexOf(menu[i]))
            var exact = i
            break
        } else if (menu[i].id.replace(/(\/|\.)/g, ' ').toLowerCase().match(n)) {
            writeResponse(menu.indexOf(menu[i]))
            filter.push(menu.indexOf(menu[i]))
			id = i
        } else if (menu[i].des.replace(/(\/|\.)/g, ' ').toLowerCase().match(n)) {
            writeResponse(menu.indexOf(menu[i]))
            filter.push(menu.indexOf(menu[i]))
        } else if (menu[i].cat.toLowerCase().match(n)) {
            writeResponse(menu.indexOf(menu[i]))
            filter.push(menu.indexOf(menu[i]))
        }
    }
	if (passthrough == false) progressResponse(true, 100)
    if (n == 'random') {
        xmlResponse(null, null, menu.indexOf(menu[Math.floor(Math.random() * menu.length)]))
        return false
    } else if ($.isNumeric(exact)) {
        xmlResponse(null, null, exact)
		id = exact
        return false
    } else if (!$.isNumeric(exact) && filter.length == 1) {
        xmlResponse(null, null, filter[0])
        return false
 	} else if (!$.isNumeric(exact) && !filter.length) {
        filter = menu[0]
        xmlResponse('search', $('input[type=text]').val().replace(/\s/g, '+'), 0)
        return false
    } else if (filter.length <= 9) {
        setTimeout(function() {
            populateResponse(filter[filter.length - 1] + +1)
        }, 300)
	}
	$('#main').attr('tabindex', -1).focus()
    applyVisual()

}

function imageResolution(n) {

    var mobile = 1680
    var minimum = 299
    var maximum = 799
    if ($('#' + n).attr('src')) {
        $('#' + n).one('load', function() {
            if ($('#' + n).get(0).naturalHeight > mobile) {
                var expand = "<a onclick='event.stopPropagation();expandImage(" + n +
                    ")' style='cursor:default;text-transform:capitalize'>expand</a>"
                $('#' + n).addClass('expand min').width('45%').css('margin', '0 auto')
            } else if ($('#' + n).get(0).naturalWidth > minimum) {
                expand = ''
                $('#' + n).width('100%')
            } else if ($('#' + n).get(0).naturalWidth < minimum) {
                expand = ''
                $('#' + n).width($('#' + n).get(0).naturalWidth).css('margin', '10px')
            }
            $('#' + n).css('display', 'block')
            $('#' + n).siblings('.attr').html(Math.round($('#' + n).get(0).naturalWidth) + 'x' + Math
                .round($('#' + n).get(0).naturalHeight) + '&ensp;' + expand)
        })
    } else $('#' + n).parent().find('.border').css({'margin-bottom': '10em'})

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

    if ($('#main .result').length < 1) $('#main').append("<div class='result'></div>")
    for (var i = 1; i <= menu.length - 1; i++) {
        if ($.inArray(menu.indexOf(menu[i]), filter) == -1 && menu[n].cat == menu[i].cat) {
            $('#main .result').append(
		        "<div class='populate " + menu.indexOf(menu[i]) + "' response='&" + menu[i].id.toLowerCase()
        		.replace(/[\/|\.|\s|\-]/g, '-') + "'> " +
        		"<div class='pub'><div class='category'>" + menu[i].cat + "</div><a class='title' ext='" + menu[i]
        		.ext + "' rel='nofollow'>" + menu[i].id.match(/[^\/]+$/g) + "</a></div>" +
        		"<div class='description'>" + menu[i].des + "</div>" +
        		"<div class='type'>filter</div></div>"
            )
        }
    }
    progressResponse(true, 100)
    applyVisual()
}

function precedeResponse(n) {


    if ($('#main #air').length < 1) $('#main').prepend("<div id='air'></div>")
    if (reverse == true) reverseArray(menu.reverse())
    for (var i = 1; i < menu.length - 1; i++) {
		if (menu[id].cat == menu[i].cat) {
            $('#main #air').append(
		        "<div class='populate " + menu.indexOf(menu[i]) + "' response='&" + menu[i].id.toLowerCase()
        		.replace(/[\/|\.|\s|\-]/g, '-') + "'> " +
        		"<div class='pub'><div class='category'>" + menu[i].cat + "</div><a class='title' ext='" + menu[i]
        		.ext + "' rel='nofollow'>" + menu[i].id.match(/[^\/]+$/g) + "</a></div>" +
        		"<div class='description'>" + menu[i].des + "</div>" +
        		"<div class='type'>air</div></div>"
			)
		}
    }
    $('#main').scrollTop($('#main').scrollTop() + $('#air:first').outerHeight())
    applyVisual()

}

function progressResponse(complete, n) {

    $('#progressBar').addClass('response').width(n + '%')
    if (complete == true) {
		$('#progressBar').on('transitionend webkitTransitionEnd oTransitionEnd', function(e) {
    	    $(this).removeClass('response').width(0)
    	})
	}

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

function writeResponse(n) {

    $('#main .result').prepend(
        "<div class='filter " + menu.indexOf(menu[n]) + "' response='&" + menu[n].id.toLowerCase()
        .replace(/[\/|\.|\s|\-]/g, '-') + "'> " +
        "<div class='pub'><div class='category'>" + menu[n].cat + "</div><a class='title' ext='" + menu[n]
        .ext + "' rel='nofollow'>" + menu[n].id.match(/[^\/]+$/g) + "</a></div>" +
        "<div class='description'>" + menu[n].des + "</div>" +
        "<div class='type'>filter</div></div>"
    )

}

function xmlResponse(e, s, n) {
    obj = []
    var pub = []
    if (e == 'search') {
        uri = cors + menu[n].uri + s + '&format=RSS'
    } else uri = cors + menu[n].uri
	filter = menu
    document.title = filter[n].id.replace(/(\/|\.)/g, ' ').capitalize()
	progressResponse(false, Math.floor(Math.random() * (66 - 25 + 1) + 25))
    $('#main .result').remove()
    $('#main').append("<div class='center' style='display:none'><div class='feed'></div><div class='channel'></div></div>")
    request = $.get({
            url: uri,
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
            $('#main #visit').show()
            if ($('input[type=text]').val().length) filterResponse(true, $('input[type=text]').val())
        })
        .done(function(xhr) {
            if ($(xhr).find('entry').length > 0) var channel = "entry"
            else var channel = 'item'
            if ($(xhr).find(channel).length < quit) quit = $(xhr).find(channel).length - 1
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
                if ($(this).find('content').text().match(
                        /https:\/\/i\.redd\.it\/.+?(gif|png|jpg)/g)) {
                    src = String($(this).find('content').text().match(
                        /https:\/\/i\.redd\.it\/.+?(gif|png|jpg)/g))
                } else if ($(this).find('content').text().match(
                        /https:\/\/.\.thumbs\.redditmedia\.com\/.+?(gif|png|jpg)/g)) {
                    src = String($(this).find('content').text().match(
                        /https:\/\/.\.thumbs\.redditmedia\.com\/.+?(gif|png|jpg)/g))
                } else if ($(this).find('content').text().match(
                        /src=['"]https:\/\/.+?(gif|png|jpg)['"]/)) {
                    src = String($(this).find('content').text().match(/src=['"](.*?)['"]/)[1])
                } else if ($(this).find('link').attr('href')) {
                    if ($(this).find('link').attr('href').match(/youtube/)) src =
                        'https://www.youtube.com/embed/' + String($(this).find('link').attr(
                            'href').split('=')[1])
                    else src = String($(this).find('link').attr('href'))
                } else if ($(this).find('content').text().match(
                        /src=['"]https:\/\/.+?(gif|png|jpg)['"]/)) {
                    src = String($(this).find('content').text().match(/src=['"](.*?)['"]/)[1])
                } else if ($(this).find('link').attr('href')) {
                    src = String($(this).find('link').attr('href'))
                } else if ($(this).find('media\\:thumbnail, thumbnail').attr('url')) {
                    src = String($(this).find('media\\:thumbnail, thumbnail').attr('url'))
                } else if ($(this).find('link').text().match(/https:\/\/.+?(gif|png|jpg)/)) {
                    src = String($(this).find('link').text().match(/https:\/\/.+?(gif|png|jpg)/)[
                        0])
                } else if ($(this).find('image').find('link, url').text().match(
                        /https:\/\/.+?(gif|png|jpg)/)) {
                    src = String($(this).find('image').find('link, url').text().match(
                        /https:\/\/.+?(gif|png|jpg)/)[0])
                } else if ($(this).find('enclosure').attr('url')) {
                    src = String($(this).find('enclosure').attr('url'))
                } else if ($(this).find('media\\:content, content').attr('url')) {
                    src = String($(this).find('media\\:content, content').attr('url'))
                } else if ($(this).find('content\\:encoded').text().match(
                        /img.+src=['"](.*?)['"]/)) {
                    src = String($(this).find('content\\:encoded').text().match(
                        /img.+src=['"](.*?)['"]/)[1])
                } else if ($(this).find('description').text().toLowerCase().match(
                        /src=['"](.*?)['"]/)) {
                    src = String($(this).find('description').text().toLowerCase().match(
                        /src=['"](.*?)['"]/)[1])
                } else if ($(this).find('image').text()) {
                    src = String($(this).find('image').text())
                } else src = ''
                if (src.match(/comments|default|feeds|fsdn|undefined/)) src = ''
                if (!src.match(/https?:\/\//)) src = ''
                if (src == '') courtesy = ''
                else courtesy =
                    "<div id='ago' style='text-transform:capitalize'>Courtesy <a onclick='event.stopPropagation();window.open(\"" +
                    filter[n].ext + "\")'>" + filter[n].id.match(/([^\/]+)\/?([^\/]*)/)[1] +
                    "</a></div>"
                if (src.match(/mp4|twitch|youtube/)) {
                    html = "<div id='yt' class='item'>" +
                        /* "<div class='ack'><i class='fa fa-at'></i></div>" + */
                        "<i class='copy fa fa-ellipsis-h' title='Copy URL'></i>" +
                        /* "<div id='ago' style='display:block'>" + dst[1] + "</div>" + */
                        "<div class='yt'><iframe src='" + src + "'></iframe>" +
                        "<div class='ago views'>views " +
                            $(this).find('media\\:statistics, statistics').attr('views')
                            .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "</div>" +
						"<input class='url' value='" + ref.trim() + "'>" +
                        /* "Courtesy <a onclick='window.open(\"" + filter[n].ext + "\")'>" + filter[
                            n].id.match(/([^\/]+)\/?([^\/]*)/)[1] + "</a>" + */
						"</div>" +
                        "<div id='ago' style='display:block;top:3em;'>" + dst[0] + "</div>" +
                        "<div class='pub' onclick='event.stopPropagation();window.open(\"" + ref
                        .trim() + "\", \"_blank\")' style='margin-top:3.5em;margin-bottom:3em;bottom:2em;clear:left'>" + $(this).find('title:first').text() +
                        "</div>" +
						"<input class='comment' onclick='event.stopPropagation()' placeholder='...'>" +
						"</div>"
                } else {
                    if (e == 'search') {
                        var cat =
                            "<div style='width:98%;font-size:10;margin:10px;text-transform:lowercase'>" + ref
                            .match(/^(?:http:\/\/|www\.|https:\/\/)([^\/]+)/g) + "</div>"
                    } else {
                        var cat = ''
                    }
                    html = "<div class='item'>" +
                        /* "<div class='ack'><i class='fa fa-at'></i></div>" + */
                        "<i class='copy fa fa-ellipsis-h' title='Copy URL'></i>" +
                        /* "<div id='ago' style='width:98%;display:block;margin-top:0px'>" + cat + "</div>" + */
                        /* "<div class='ago' style='width:100%;display:block'>" + dst[1] + "</div>" +
                        "<div class='ago attr' style='width:100%;display:block'></div>" + */
                        "<div class='border'></div>" +
						"<img id='" + i + "' style='display:none' src='" + src + "' class='img'>" +
                        "<div class='ago'>" + dst[0] + "</div>" +
						cat +
                        "<div class='pub' onclick='event.stopPropagation();window.open(\"" + ref
                        .trim() + "\", \"_blank\")'>" + $(this).find('title:first').text() +
                        "</div>" +
                        "<div class='fa' style='float:right'><i class='ago fa fa-heart-o'></i>" +
                        "<i class='ago fa fa-bookmark-o'></i>" +
						"<input class='url' value='" + ref.trim() + "'>" +
						"</div>" +
						"<input class='comment' onclick='event.stopPropagation()' placeholder='...'>" +
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
                $('#main .center .channel').append(pub[i].post)
                if ($('#' + pub[i].element).length) imageResolution(pub[i].element)
            }
			$('#main .channel').append("<div id='bottom' onclick='bottomResponse(" + menu.indexOf(menu[id]) + ")'><img class='indicator'></div>")
			$('#main .center').css('display','block')
            progressResponse(true, 100)
			feedResponse(n)
            applyVisual()
        })

}
