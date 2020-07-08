var id
var op = 0
var object = []
var filter = []
var contrast = false
var category = 'Social'
var cors = 'https://acktic-github-io.herokuapp.com/'
var translations = ['Social', 'News', 'Media', 'Sports', 'Technology', 'World', 'Youtube']

var visual = function (n) {

    if (n == 'op')
        op = op != true
    else if (n == 1 || n == 0) op = n
    if (op == 1 || contrast == true) {
        $('#main, #arm, #home, #option, #bottom, .fa-home, .fa-code, .fa-terminal, .fa-git, .fa-globe, .fa-circle, .fa-circle-notch, input[type=text], #visit, .result, .air, .filter, .populate, .feed, .comment, .channel, .suggestions, .combine, .listing, .index, .title, .category, .description, .type, .item, .item .pub, .ago, a')
            .css({
                'background-color': '#000',
                'color': '#fff',
                'border': 'none',
                'box-shadow': 'none'
            })
        $('#arm, .description, .comment').css({
            'border-bottom': '1px solid #333',

        })

		$('#progressBar').removeClass('responseInvert').addClass('responseOpposite')
    	$('.fa-bookmark, .fa-comments, .fa-sticky-note').css('color', '#fff')
        $('.more').css('color', '#333')
        $('svg circle').css('stroke', 'url(#gradientOpposite)')
        $('.right, .left').css({
			'background-color': 'rgba(0,0,0,.5)',
		})
        $('.fa-angle-double-left, .fa-angle-double-right').css({
			'color': '#fff'
		})
        $('.hover').css('background-color', '#333')
        $('#main, .listing').addClass('opposite').removeClass(
            'invert')
        $('.bottom').attr('src', 'images/opposite.png').css('filter', 'none')
        $('#favicon').attr('href', 'images/opposite.png')
        $('#option .fa-circle-notch').toggleClass('fa-circle-notch fa-circle')
    } else if (op == 0 || contrast == false) {
        $('.suggestions, .combine, .comment, .channel, .air, .result, .filter, .populate, .feed, .title, .item, .item .pub, .type, .ago, a')
            .css({
                'background-color': '#fff',
                'color': '#666',
                'border': 'none'
            })
        $('input[type=text], .category, .listing')
            .css({
                'background-color': '#fafafa',
                'border': '1px solid #ddd',
                'color': '#aaa'
            })
        $('#arm, #option, .index').css({
            'background-color': '#fff',
            'border': 'none',
            'color': '#666'
        })
        $('#main, #visit, #bottom, .filter, .populate, .description, .channel, #bottom')
            .css({
                'background-color': '#fafafa',
                'color': '#666'
            })
        $('#home, .fa-home, .fa-code, .fa-globe, .fa-git, .fa-terminal, .fa-circle-notch, .fa-circle')
            .css({
                'background-color': 'transparent',
                'color': '#222'
            })
		$('#progressBar').removeClass('responseOpposite').addClass('responseInvert')
    	$('.fa-bookmark, .fa-comments, .fa-sticky-note').css('color', '#000')
        $('svg circle').css('stroke', 'url(#gradientInvert)')
        $('.right, .left').css({
			'background-color': 'rgba(255,255,255,.5)',
		})
        $('.fa-angle-double-left, .fa-angle-double-right').css({
			'color': '#666'
		})
        $('.feed, .item, .title, .suggestions').css('border', '1px solid #ddd')
        $('.hover').css('background-color', '#fafafa')
        $('.description, .index').css({
            'border-bottom': '1px solid #ccc'
        })
        $('.listing, .item, .feed, .suggestions').css('box-shadow',
            '1px 1px 6px #eee')
        $('#main, .listing').addClass('invert').removeClass(
            'opposite')
        $('.bottom').attr('src', 'images/transparent.png').css({
            'filter': 'brightness(50%) saturate(20%) invert(90%)'
        })
        $('#favicon').attr('href', 'images/invert.png')
        $('#arm').css({
            'border-bottom': '1px solid #ddd'
        })
        $('#option .fa-circle').toggleClass('fa-circle-thin fa-circle')
    }
    $('.fa-gratipay').css('color', 'lightcoral')

}

function expand(n) {

    if ($('#' + n).hasClass('expand min')) {
        object.push({
            element: n,
            item: $('#' + n).parents('.item').width(),
            parent: $('#' + n).parent().width(),
            less: $('#' + n).width()
        })
        $('#' + n).removeClass('min').addClass('full')
            .width('100%').parent().width('100%')
    } else if ($('#' + n).hasClass('expand full')) {
        object.forEach(function(e) {
            if (n == e.element && e.less) $('#' + n)
                .removeClass('full').addClass('min').width(e
                    .less).parent().width(e.less)
        })
    }

}


function feed(n) {

    if (n == 0) n = menu.indexOf(menu[Math.floor(Math.random() * menu
        .length - 1)])
    else if (n >= menu.length - 13) n = 1
    for (var i = n; i <= n + 13; i++) {
		if (menu[i])
        var img = 'images/png/' + menu[i].img + '.png'
        $('#main .center .feed').append(
            "<div class='asset'>" +
            "<svg>" +
            "<defs>" +
            "<linearGradient id='gradientOpposite'>" +
            "<stop offset='0%' stop-color='#ef4063' />" +
            "<stop offset='99%' stop-color='#e557c6' />" +
            "</linearGradient>" +
            "<linearGradient id='gradientInvert'>" +
            "<stop offset='0%' stop-color='#F7797d' />" +
            "<stop offset='99%' stop-color='#fbd786' />" +
            "</linearGradient>" +
            "</defs>" +
            "<circle cx='36' cy='36' r='28' class='border'></circle></svg>" +
            "<img src='" + img + "' class='id " + menu.indexOf(menu[i]) +
            "' response='" + menu[i].id.toLowerCase().replace(
                /[\/|\.|\s|\-]/g, '-') + "' search='" + menu[i].cat
            .toLowerCase() + "'> " +
            "<a style='left:0;width:100%' ext='" + menu[i].ext +
            "' rel='nofollow'>" + String(menu[i].id.match(/[^\/]+$/g))
            .substring(0, 9) + '...' +
            "</a>" +
            "</div>"
        )
    }
}

var response =  function (passthrough, n, post) {
    filter = []
    $('#main .result, #main .air, #main .center, #main .suggestions').remove()
    $('#main #visit').show()
    if ($('#main .result').length < 1) $('#main').append(
        "<div class='result' style='display:none'></div>")
    var n = n.replace(/(%20|\-|\_|\s|\+)/g, ' ')
    $('#main').scrollTop(0)
	$(document).ready(function() {
    for (var i = menu.length - 1; i >= 1; i--) {
        if (menu[i].hash == n) {
            filter.push(menu.indexOf(menu[i]))
            write(menu.indexOf(menu[i]))
			exact = i
            id = i
			break
        } else if (menu[i].id.toLowerCase().replace(/(\/|\.)/g, ' ') == 
			n.toLowerCase()) {
            filter.push(menu.indexOf(menu[i]))
            write(menu.indexOf(menu[i]))
            var exact = i
            id = i
            break
        } else if (menu[i].id.toLowerCase().replace(/(\/|\.)/g, ' ')
            .match(n.toLowerCase())) {
            filter.push(menu.indexOf(menu[i]))
            write(menu.indexOf(menu[i]))
            id = i
        } else if (menu[i].des.toLowerCase().replace(/(\/|\.)/g, ' ')
            .match(n.toLowerCase())) {
            filter.push(menu.indexOf(menu[i]))
            write(menu.indexOf(menu[i]))
        } else if (menu[i].cat.toLowerCase().match(n)) {
            filter.push(menu.indexOf(menu[i]))
            write(menu.indexOf(menu[i]))
        }
    }
    if (!id) id = filter[filter.length - 1]
	if (passthrough == true) {
	    if ($.isNumeric(exact)) {
	        xml(null, null, exact, post)
	        return false
	    } else if ($.isNumeric(id) && filter.length == 1) {
	        xml(null, null, id, post)
	        return false
	    } else if (!$.isNumeric(exact) && filter.length == 0) {
	        xml('search', n, 0, null)
	        return false
	    }
	}
	populate(id)
	air(id)
	progress(true, 100)

})

}

var image = function (n, src) {

    var mobile = 1480
    var minimum = 299
    var maximum = 799
    $('#' + n).on('error', function () {
		$(this).parents('.classic')
		.find('.tag, .header')
		.css('display','none') })
        .on('load', function() {
            if ($('#' + n).get(0).naturalHeight > mobile) {
                $('#' + n).addClass('expand min')
					.width('100%')
                    .parent().css({
                        'margin': '0 auto',
                        'width': '45%'
                    })
            } else if ($('#' + n).get(0).naturalWidth >
                minimum) {
                $('#' + n).width('100%')
            } else if ($('#' + n).get(0).naturalWidth <
                maximum) {
                $('#' + n).width(99).css({
						'margin': '5px'
                }).parents('.classic').css({
					'display': 'flex',
					'align-items': 'center'
				}).find('.header, .tag, .addComment')
					.css('display','none')
            }
            $('#' + n).css('display', 'block')
        }).attr('src', src)
}

var list = function (n) {

	$('#arm #search #match .listing').empty()
    for (var i = menu.length - 1; i >= 1; i--) {
        if (menu[i].des.toLowerCase()
            .match(n) || menu[i].cat.toLowerCase().match(n)) {
            $('#arm #search #match .listing').prepend(
                "<div class='index " +
                menu.indexOf(menu[i]) + "' tabIndex='-1' response='" +
                menu[i].id.toLowerCase().replace(/\s|\/|\./g, '-') +
                "' search='" + menu[i].cat.toLowerCase() + "'>" +
                "<img class='type' src='" +
                "images/png/" + menu[i].img + '.png' + "'>" +
                "<div class='text'>&emsp;<b>" + menu[i].cat + "</b>" +
                "<br>&emsp;" + menu[i].id.match(/[^\/]+$/g) + "</div>" +
                "</div>"
            )
            if ($('#search .listing .' + i).length > 1) $(
                '#search .listing .' + i + ':last').remove()
        }
    }
    if (!$('#arm #search #match').is(':visible')) {
        setTimeout(function() {
            $('#arm #search #match')
                .show()
        }, 50)
    }
}

var populate = function (n) {

	if (!$.isNumeric(n)) var cat = n
	else cat = menu[id].cat
	$('#main .air, #main .center, #main .suggestions').remove()
    if ($('#main .result').length < 1) $('#main').append(
        "<div class='result' style='display:none'></div>")
    for (var i = 1; i <= menu.length - 1; i++) {
        if (menu.indexOf(menu[id]) != menu.indexOf(menu[i]) &&
			cat == menu[i].cat) {
            var tag = menu[i].id.match(/[^\/]+$/g)
            var hilight = menu[i].des.replace(tag,
                "<b>" + tag + '</b>')
            var img = 'images/png/' + menu[i].img + '.png'
            $('#main .result').append(
                "<div class='populate " + menu.indexOf(menu[n]) +
                "' response='" + menu[i].id.toLowerCase()
                .replace(/[\/|\.|\s|\-]/g, '-') + "'> " +
                "<div class='pub'><div class='category'>" + menu[
                    i].cat + "</div><a class='title' ext='" +
                menu[i]
                .ext + "'>" + menu[i].id.match(/[^\/]+$/g) +
                "</a></div>" +
                "<div class='description'>&emsp;" + hilight +
                "</div>" +
                "<img class='id' style='top:10px' src='" + img + "'>" +
                "</div>"
            )
        }
    }
}

var air = function (n) {

	if (!$.isNumeric(n)) var cat = n
	else if (!n) cat = menu[id].cat
	else cat = menu[n].cat
    if ($('#main .air').length < 1) $('#main').prepend(
        "<div class='air' style='display:none'></div>")
    for (var i = 1; i < menu.length - 1; i++) {
        if (cat == menu[i].cat) {
            var tag = menu[i].id.match(/[^\/]+$/g)
            var hilight = menu[i].des.replace(tag,
                "<b>" + tag + '</b>')
            var img = 'images/png/' + menu[i].img + '.png'
            $('#main .air').append(
                "<div class='populate " + menu.indexOf(menu[i]) +
                "' response='" + menu[i].id.toLowerCase()
                .replace(/[\/|\.|\s|\-]/g, '-') + "'> " +
                "<div class='pub'><div class='category'>" + menu[
                    i].cat + "</div><a class='title' ext='" +
                menu[i]
                .ext + "' rel='nofollow'>" + menu[i].id.match(
                    /[^\/]+$/g) + "</a></div>" +
                "<div class='description'>&emsp;" + hilight +
                "</div>" +
                "<img class='id' style='top:10px' src='" + img + "'>" +
                "</div>"
            )
        }
    }
}

var progress = function (complete, n) {

	$(document).ready(function() {
    $('#progressBar').addClass('response').width(n + '%')
    if (complete == true) {
        $('#progressBar').on(
            'transitionend webkitTransitionEnd oTransitionEnd',
            function(e) {
                $(this).removeClass('response').width(0)
                $('#main #visit, #arm #search #match')
                    .hide()
                if ($('#main .suggestions').length == 1) $(
                    '#main .suggestions').css('visibility', 'visible')
                if ($('#main .result').length == 1) $(
                    '#main .result').show()
                if ($('#main .center').length == 1) $(
                    '#main .center').show()
                if ($('#main .air').length == 1) {
                    $('#main .air').show()
                    $('#main').scrollTop($('.air').outerHeight())
                } 
				$('#main').attr('tabindex', -1).focus()
            })
		visual()
    }
  })
}

var suggest = function (n) {
	var dupe = []
    for (var i = 0; i <= 9; i++) {
        var e = menu.indexOf(menu[Math.floor(Math.random() * menu.length - 1)])
		dupe.push(e)
		if (menu[e] && e != 1)
        if ($.inArray(dupe, e) === -1 && menu[e])
            $('#main .suggestions').append(
                "<div class='combine'>" +
                "<div title='" + menu[e].id.replace(/\//g, ' ') + 
				"' response='" + menu[e].id.toLowerCase()
                .replace(/(\/|\.|\s)/g, '-') + "' search='" + menu[e].cat
                .toLowerCase() +
                "'>" + menu[e].id.match(/[^\/]+$/g) +
                "</div>" +
                "</div>"
            )
        if (i == 9) return false
    }
}

var write = function (n) {

    if ($('#main .result').length < 1) $('#main').append(
        "<div class='result' style='display:none'></div>")
    var tag = menu[n].id.match(/[^\/]+$/g)
    var hilight = menu[n].des.replace(tag, "<b>" + tag + '</b>')
	if (n != id || n != filter[filter.length - 1] || filter
		.length >= 1)
    $('#main .result').prepend(
        "<div class='filter " + menu.indexOf(menu[n]) +
        "' response='" + menu[n].id.toLowerCase().replace(
            /[\/|\.|\s|\-]/g, '-') + "' search='" + menu[n].cat
        .toLowerCase() + "'> " +
        "<div class='pub'><div class='category'>" + menu[n].cat +
        "</div><a class='title' ext='" + menu[n]
        .ext + "'>" + menu[n].id.match(/[^\/]+$/g) +
        "</a></div>" +
        "<div class='description'>&emsp;" + hilight + "</div>" +
        "<img class='id' style='top:10px' src='" +
        "images/png/" + menu[n].img + ".png'>" +
        "</div>"
    )

}

var xml = function (e, s, n, post) {
	id = n
    obj = []
    var local
    var pub = []
    var img = 'images/png/' + menu[n].img + '.png'
    if (e == 'search') {
        uri = cors + menu[n].uri + s + '&format=RSS'
    } else uri = cors + menu[n].uri
    document.title = menu[n].id.replace(/(\/|\.)/g, ' ').capitalize()
    progress(false, Math.floor(Math.random() * (55 - 25 + 1) +
        25))
    var complete = setInterval(function() {
        $('#progressBar').width($('#progressBar').width() +
            Math.floor(Math.random() * (5 - 0 + 1) + 0))
    }, 350)
    $('#main .result, #main .center, #main .air, #main .suggestions').remove()
    $.get({
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
            $('#main').append(
                "<div class='center' style='display:none'><div class='quick'><div class='feed'></div>" +
                "<div class='left fa-angle-double-left' style='display:none'></div><div class='right fa-angle-double-right'>" +
                "</div></div><div class='channel'></div></div>" +
                "<div class='suggestions' style='visibility:hidden'><b>suggested</b><br></div>"
            )
            $('#main .channel').html("This site could not be reached.")
            progress(true, 100)
            clearInterval(complete)
            suggest(id)
            feed(id)
            visual()
        })
        .done(function(xhr) {
            if ($(xhr).find('entry').length > 0) var channel =
                "entry"
            else var channel = 'item'
            quit = $(xhr).find(channel).length - 2
            $(xhr).find(channel).each(function(i) {
                if (channel == 'entry') {
                    var ref = $(this).find('link').attr(
                        'href')
                    var dst = zulu($(this).find('updated')
                        .text());
                    var since = new Date($(this).find(
                        'updated').text()).getTime()
                    var gen = $(this).find(
                        'updated').text().toLocaleString()
					gen = parseInt(gen
						.match(/([0-9]+\:[0-9]+\:[0-9]+)/g)
						.toString().replace(/\:/g, ''))
							.toString(36)
                } else if (channel = 'item') {
                    var ref = $(this).find('link').text()
                    if ($(this).find('pubDate').text()
                        .length > 0) {
                        var dst = zulu($(this).find('pubDate')
                            .text());
                        var since = new Date($(this).find(
                                'pubDate').text())
                        var gen = new Date($(this).find(
                                'pubDate').text()).toLocaleString()
						gen = parseInt(gen
							.match(/([0-9]+\:[0-9]+\:[0-9]+)/g)
							.toString().replace(/\:/g, ''))
								.toString(36)
                    } else if ($(this).find(
                            'dc\\:date, date').text()) {
                        var dst = zulu($(this).find(
                                'dc\\:date, date')
                            .text());
                        var gen = new Date($(this).find(
                                'dc\\:date, date').text())
                            .getTime()
                    } else {
                        var dst = []
                        dst.push('')
                    }
                }
                if ($('#search input[type=text]').val() != 'Search')
                    var search = $(
                        '#search input[type=text]').val()
                else var search = menu[n].cat.toLowerCase()
                var share = menu[n].hash 
				var ts = (gen).toString(36)
				share = window.location.origin + '/?' + share + ts
                if ($(this).find('content').text().match(
                        /https:\/\/i\.redd\.it\/.+?(gif|png|jpg)/g
                    )) {
                    src = String($(this).find('content')
                        .text().match(
                            /https:\/\/i\.redd\.it\/.+?(gif|png|jpg)/g
                        ))
                } else if ($(this).find('content').text()
                    .match(
                        /https:\/\/.\.thumbs\.redditmedia\.com\/.+?(gif|png|jpg)/g
                    )) {
                    src = String($(this).find('content')
                        .text().match(
                            /https:\/\/.\.thumbs\.redditmedia\.com\/.+?(gif|png|jpg)/g
                        ))
                } else if ($(this).find('content').text()
                    .match(
                        /src=['"]https:\/\/.+?(gif|png|jpg)['"]/
                    )) {
                    src = String($(this).find('content')
                        .text().match(
                            /src=['"](.*?)['"]/)[1])
                } else if ($(this).find('link').attr(
                        'href')) {
                    if ($(this).find('link').attr('href')
                        .match(/youtube/)) src =
                        'https://www.youtube.com/embed/' +
                        String($(this).find('link').attr(
                            'href').split('=')[1])
                    else src = String($(this).find('link')
                        .attr('href'))
                } else if ($(this).find('content').text()
                    .match(
                        /src=['"]https:\/\/.+?(gif|png|jpg)['"]/
                    )) {
                    src = String($(this).find('content')
                        .text().match(
                            /src=['"](.*?)['"]/)[1])
                } else if ($(this).find('link').attr(
                        'href')) {
                    src = String($(this).find('link')
                        .attr('href'))
                } else if ($(this).find(
                        'media\\:thumbnail, thumbnail')
                    .attr('url')) {
                    src = String($(this).find(
                        'media\\:thumbnail, thumbnail'
                    ).attr('url'))
                } else if ($(this).find('link').text()
                    .match(/https:\/\/.+?(gif|png|jpg)/)
                ) {
                    src = String($(this).find('link')
                        .text().match(
                            /https:\/\/.+?(gif|png|jpg)/
                        )[
                            0])
                } else if ($(this).find('image').find(
                        'link, url').text().match(
                        /https:\/\/.+?(gif|png|jpg)/)) {
                    src = String($(this).find('image')
                        .find('link, url').text()
                        .match(
                            /https:\/\/.+?(gif|png|jpg)/
                        )[0])
                } else if ($(this).find('enclosure').attr(
                        'url')) {
                    src = String($(this).find('enclosure')
                        .attr('url'))
                } else if ($(this).find(
                        'media\\:content, content').attr(
                        'url')) {
                    src = String($(this).find(
                        'media\\:content, content'
                    ).attr('url'))
                } else if ($(this).find(
                        'content\\:encoded').text().match(
                        /img.+src=['"](.*?)['"]/)) {
                    src = String($(this).find(
                            'content\\:encoded')
                        .text().match(
                            /img.+src=['"](.*?)['"]/)[
                            1])
                } else if ($(this).find('description')
                    .text().toLowerCase().match(
                        /src=['"](.*?)['"]/)) {
                    src = String($(this).find(
                            'description').text()
                        .toLowerCase().match(
                            /src=['"](.*?)['"]/)[1])
                } else if ($(this).find('image').text()) {
                    src = String($(this).find('image')
                        .text())
                } else src = ''
                if (src.match(
                        /comments|default|feeds|fsdn|undefined/
                    )) src = ''
                if (!src.match(/https?:\/\//)) src = ''
                if (src == '') courtesy = ''
                else courtesy =
                    "<div class='courtesy' style='float:left'><img class='id' src='" +
                    img + "'>" +
                    "<a onclick='event.stopPropagation();window.open(\"" +
                    menu[n].ext + "\")'><b>" + menu[n].id
                    .match(/([^\/]+)$/g) +
                    "</b></a></div>"
                if ($(this).find('title:first').text().length > 125)
                    var more =
                        "<div class='more'>more</div>"
                else var more = "<div class='more'></div>"
                if (src.match(/youtube/g)) {
                    if ($(this).find(
                            'media\\:statistics, statistics'
                        ).attr('views'))
                        var views =
                            "<div class='ago views'>views " +
                            $(this).find(
                                'media\\:statistics, statistics'
                            ).attr('views')
                            .toString().replace(
                                /\B(?=(\d{3})+(?!\d))/g,
                                ",") + "</div>"
                    else var views = ''
                    html =
                        "<div id='yt' class='item' ext='" + ref.trim() + "'>" +
                        "<div class='header'>" + courtesy +
                        	"<div class='copy fa-ellipsis-h' title='Copy URL'></div>" +
                        "</div>" +
                        "<div class='yt'>" + "<iframe src='" + src + "'></iframe>" + views + "</div>" +
                        "<div class='tag'>" +
                        	"<div class='ago fa-heart-o'></div>" +
                        	"<div class='ago fa-comment-o'></div>" +
                        	"<div class='ago fa-sticky-note-o' title='Copy Post'></div>" +
                        	"<div class='ago fa-bookmark-o' title='Copy Source'></div>" +
                        	"<input class='url' value='" + ref.trim() + "'>" +
                        	"<input class='share' value='" + share + "'>" +
                        	"<input class='source' value='" + src + "'>" +
                        "</div>" +
                        "<div class='pub' " +
                        "text='" + escape($(this).find(
                            'title:first').text()) + "'>" +
                        escape($(this).find('title:first').text().truncate(
                            125, true)) +
                        more + "</div>" +
                        "<div class='ago'>" + dst[0] + "</div>" +
                        "<form class='addComment' action'#'>" +
                        "<input class='comment' onclick='event.stopPropagation()' maxlength='60' placeholder='Add a Comment'>" +
						"<div class='post'><b>Post</b></div>" +
                        "</form>" +
                        "</div>"
                } else {
                    if (e == 'search') {
                        var cat =
                            "<div style='width:98%;font-size:10;margin:10px;text-transform:lowercase'>" +
                            	ref.match(/^(?:http:\/\/|www\.|https:\/\/)([^\/]+)/g) + 
							"</div>"
                    } else var cat = ''
                    html =
                        "<div class='item " + i + "' item='" + i + "' ext='" + ref.trim() + "'>" +
						"<div class='classic'>" +
                        "<div class='header'>" + courtesy +
                        "<div class='copy fa-ellipsis-h' title='Copy URL'></div>" +
                        "</div>" +
                        "<div class='image'>" +
                        	"<img id='" + i + "' style='display:none' class='img'>" +
                        	"<div class='tag'>" +
                        		"<div class='ago fa-heart-o'></div>" +
                        		"<div class='ago fa-comment-o'></div>" +
                        		"<div class='ago fa-sticky-note-o' title='Copy Post'></div>" +
                        		"<div class='ago fa-bookmark-o' title='Copy Source'></div>" +
                        	"</div>" +
                        "</div>" +
						"<div class='wrap'>" +
                        "<div class='pub' text='" + escape($(
                            this).find('title:first').text()) + "'>" +
                        escape($(this).find('title:first').text().truncate(
                            125, true)) + more + "</div>" +
                        "<div class='ago'>" + dst[0] + "</div>" +
						"</div>" +
                        "<input class='url' value='" + ref.trim() + "'>" +
                        "<input class='share' value='" + share + "'>" +
                        "<input class='source' value='" + src + "'>" +
                        cat +
                        "<form class='addComment' action'#'>" +
                        "<input class='comment' onclick='event.stopPropagation()' maxlength='88' placeholder='Add a Comment'>" +
						"<div class='post'><b>Post</b></div>" +
                        "</form>" +
						"</div>" +
                        "</div>"
                }
                pub.push({
                    element: i,
                    since: since,
                    post: html,
					src: src,
					gen: gen
                })
                pub.sort(function(a, b) {
                    return b.since - a.since
                })
                $.each(pub, function(i) {
                    if(parseInt(pub[i].gen, 36) == post)
                        local = i
                })
            })
            $('#main').append(
                "<div class='center' style='display:none'>" +
				"<div class='quick'>" +
					"<div class='feed'></div>" +
        		        "<div class='left' style='display:none'><div class='fa-angle-double-left'></div></div>" +
						"<div class='right'><div class='fa-angle-double-right'></div>" +
					"</div>" +
                "</div>" + 
				"<div class='channel'></div></div>" +
                "<div class='suggestions' style='visibility:hidden'><b>suggested</b>&ensp;...<br></div>"
            )
            if ($.isNumeric(local)) {
                $('#main .center .channel').append(pub[local].post)
                    image(pub[local].element, pub[local].src)
            } else {
                $.each(pub, function(i, k) {
                    if (i == quit) return false
                    $('#main .center .channel').append(pub[i].post)
                        image(pub[i].element, pub[i].src)
                })
            }
            if (!id) id = menu.indexOf(menu[n])
            $('#main .center').append(
                "<div id='bottom'><img class='bottom'></div>")
            clearInterval(complete)
            progress(true, 100)
            suggest(id)
            feed(id)
        })

}
