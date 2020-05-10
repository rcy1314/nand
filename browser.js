var op = 0
var animate
var request
var ost = 0
var former = 0
var object = []
var events = true
var minimum = 299
var maximum = 799
var operation = false
var designate = 'Social'
var cor = 'https://acktic-github-io.herokuapp.com/'
$(document).ready(function() {
    $('#wrapper').css('display', 'block')

    if (location.href.match('\\?op=1')) {

        apply(1)

    } else apply(op)

    populate(designate)
    precede(designate)
    display('#pop')

    function updateProgress(n){
        $('svg circle').css({
            "stroke-dashoffset" : 131 - (131 * n)
        });
    }

	(function(){
    	$('#output').on('scroll', function(){
        	var n = Math.max(0, Math.min(1, $('#output').scrollTop() / ($('#output')[0].scrollHeight - $('#output').innerHeight() + 20) ));
        	updateProgress(n);
    	})

	}())

    $('#' + designate).css('border-bottom','1px solid rgba(128,128,128,.5')

    $('.category').on('touch click mouseenter mouseout', function (e) {
            if (e.type == 'mouseenter') $(this).css('border-bottom','1px solid rgba(128,128,128,.5)')
            if (e.type == 'mouseout') $('.category').css('border-bottom','none')
            if (e.type == 'touch' || 'click'){
                $('.category').css('border-bottom','none')
                $(this).css('border-bottom','1px solid rgba(128,128,128,.5)')
            }
    })
    $('#attach').on('mouseout', function () { 
                $('.category').css('border-bottom','none')
                $('#' + designate).css('border-bottom','1px solid rgba(128,128,128,.5)')
    })


    $('#output').on('scroll touchmove focusout', function(e) {

        if (e.type == 'scroll' || e.type == 'touchmove') {
            manifest($(this).scrollTop())
            if ($(this).scrollTop() != 0 && $(this).scrollTop() != $('#air').outerHeight()) operation = false
            if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight - 10)
                if (operation == false) populate(designate)
        } else if (e.type == 'focusout') setTimeout(function() {
            $('#output').focus()
        }, 100)

    }).attr('tabindex', -1).focus()

}).on('touch click', 'a', function(e) {

    external($(this).attr('ext'))

    e.stopPropagation()

}).on('touch click', '.pop, .air', function(e) {

    response($(this).attr('get'))

})

String.prototype.truncate =

    function(n, e) {
        if (this.length <= n) return this
        var subString = this.substr(0, n - 1)
        return (e ? subString.substr(0, subString.lastIndexOf(' ')) : subString) + "&hellip;"
    }

function apply(n) {

	if (n == 'op') {
		op = op != true
	} else if (n == 1 || n == 0) op = n

	if (op == 1) {
		$('html, body, #wrapper, #container, #output, .pop, .pop .pub, .air, .air .pub, .des').css({
			'border': 'none',
			'background-color': '#000',
			'color': 'rgba(255,255,255,.9)'
		})
        $('#attach, .item, .item .pub').css({
			'border-bottom':'1px solid rgba(255,255,255,.1)',
            'color': 'rgba(255,255,255, .7)',
            'background-color': '#0a0a0a'
        })
        $('#random, #apply').css('border-bottom', '1px solid rgba(128,128,128,.5)')
		$('#output').removeClass('invert').addClass('opposite')
		$('a, #air .air .pub, .acktic').css('color', '#F7426B')
		$('.img, iframe').css('filter', 'brightness(80%)')
        $('#favicon').attr('href','favicon/opposite.png')
		$('#animate').attr('src', 'favicon/favico.png')
		$('.icon').attr('src','favicon/opposite.png');
		$('svg .ring').css('stroke','#F74268')
		animate = 'opposite.png'
	} else if (op == 0) {
        $('html, body, #wrapper, #container, #output, .pop, .pop .pub, .pop .des, .air, .air .pub, .air .des').css({
            'background-color': '#fafafa',
            'color': 'rgba(0,0,0,.7)',
            'border': 'none'
        })
        $('#attach, .item, .item .pub').css({
            'border-bottom':'1px solid rgba(0,0,0,.1)',
            'background-color':'#fff',
            'color': 'rgba(0,0,0,.7)'
        })
        $('#output').removeClass('opposite').addClass('invert').css('border-left', '.3px solid rgba(128,128,128,.5)')
        $('#random, #apply').css('border-bottom', '1px solid rgba(128,128,128,.5)')
        $('a, #air .air .pub, .acktic').css('color', '#337ab7')
        $('.img, iframe').css('filter', 'brightness(100%)')
        $('#favicon').attr('href','favicon/invert.png')
        $('#animate').attr('src', 'favicon/invert.png')
        $('.icon').attr('src','favicon/invert.png');
		$('svg .ring').css('stroke','#0A74DA')
        animate = 'invert.png'
	}
}

function category(n) {
    
    events = true
    $('#pop, #air, #arm, #get').remove()
    populate(n)
    precede(n)
    display('#pop:last')
	former = 0

}

function display(n) {

    $('#output').animate({
        scrollTop: $(n + ':last').offset().top - $('#output').offset().top + $('#output').scrollTop()
    }, 300);
    setTimeout(function() {
        events = false
    }, 500)

}

function expand(n) {

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

function external(n) {

    window.open(n, '_blank')

}

function manifest(n) {

    if (n < ost) {
    /*    $('#icon').css({                      */
    /*        'transition': 'all .2s linear',   */
    /*        'visibility': 'visible'           */
    /*    })                                    */
        $('#attach').css({
            'transition': 'all .2s linear',
            'visibility': 'visible'
        })
    } else if (n > ost && events == false && operation == false) {
    /*    $('#icon').css({                      */
    /*        'transition': 'all .2s linear',   */
    /*        'visibility': 'hidden'            */
    /*    })                                    */
        $('#attach').css({
            'transition': 'all .2s linear',
            'visibility': 'hidden'
        })
    }

    ost = n

}

function moment(n) {

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

function populate(n) {

	if ($('#pop').length >= 1) return false
    if (operation == true) {
        $('#arm').remove()
        request.abort()
        operation = false
    }
    document.title = n
    if (n != designate) former = 0
    designate = n
    $('#output').append("<div id='pop'><br></div>")
    for (var i = former; i < menu.length; i++)
        if (n == menu[i].cat) {
            if (menu[i].id == 'Reddit' || menu[i].id == 'Youtube' && !menu[i].ext.match(/channel/)) var id = menu[i].ext.match(/\b\w+$/)
            else var id = menu[i].id
            $('#pop').append("<div class='pop' get='" + i + "'><div class='pub'><a ext='" + menu[i].ext + "'>" + id + "</a></div><div class='des'>" + menu[i].des + "</div></div>")
        }
	former = 0
    apply()

}

function precede(n) {

    reverse(menu.reverse())
    $('#output').prepend("<div id='air'></div>")
    for (var i = menu.reverse().length - 1; i >= 0; i--) {
        if (n == menu[i].cat) {
            if (menu[i].id == 'Reddit' || menu[i].id == 'Youtube' && !menu[i].ext.match(/channel/)) var id = menu[i].ext.match(/\b\w+$/)
            else var id = menu[i].id
            $('#air').prepend("<div class='air' get='" + i + "'><div class='pub'<a ext='" + menu[i].ext + "'>" + id + "</a></div><div class='des'>" + menu[i].des + "</div></div>")
        }
    }
    $('#output').scrollTop($('#output').scrollTop() + $('#air:first').outerHeight())
    apply()

}
function random(n) {

    var obj = []
    menu.forEach(function(e) {
        if (n == e.cat) obj.push(e)
    })
    var n = obj[Math.floor(Math.random() * obj.length)]
    response(menu.indexOf(n))

}

function resolution(n) {

	if ($('#' + n).attr('src')){
    $('#' + n).one('load', function() {
        if ($('#' + n).get(0).naturalHeight > maximum && $('#' + n).get(0).naturalWidth > maximum) {
            var expand = "[<u>expand</u>]"
            $('#' + n).addClass('expand min').width(Math.random() * (55 - 35 + 1) + 35 + '%').parent().width($('#' + n).width() + 20)
        } else if ($('#' + n).get(0).naturalWidth > minimum) {
            var expand = "[<u>expand</u>]"
            $('#' + n).addClass('expand min').width(Math.random() * (55 - 35 + 1) + 35 + '%').parent().width($('#' + n).width())
        } else {
            var expand = '';
            $('#' + n).width(Math.random() * (65 - 50 + 1) + 50 + '%').parent().width($('#' + n).width())
        }
        $('#' + n).siblings('.attr').html('(' + Math.round($('#' + n).get(0).naturalWidth) + 'x' + Math.round($('#' + n).get(0).naturalHeight) + ') ' + expand)
        $('#' + n).css('display', 'block')
    })
	} else $('#' + n).parent().width(Math.random() * (95 - 40 + 1) + 40 + '%')

}

function response(n) {
    if (operation == true) {
        request.abort()
        operation = false
    }
    obj = []
    former = n
    events = true
    operation = true
    var pub = []
    $('#pop, #air, #arm, #get').remove()
    if (designate == 'Youtube') {
        var quit = 5
    } else {
        var quit = 11
    }
    $('#output').append("<div id='arm'></div><div id='get'></div>")
    $('#arm').html("<div><img id='animate' src='favicon/" + animate + "'></div>")
    if (menu[n].id == 'Reddit' || menu[n].id == 'Youtube' && !menu[n].ext.match(/channel/)) var id = menu[n].ext.match(/\b(\w+)$/)[0]
    else var id = menu[n].id
    request = $.get({
            url: cor + menu[n].uri
        })
        .fail(function() {
            $('#arm').remove();
            $('#get').append("<div class='pop' onclick='window.open(\"" + menu[n].ext + "\")'><div class='pub'><a>" + id + "</a></div><div class='des'>" + menu[n].des + "</div></div>")
            operation = false
        })
        .done(function(data) {
            $('#arm').remove()
            if ($(data).find('entry').length > 0) var channel = "entry"
            else var channel = 'item'
            if ($(data).find(channel).length < quit) {
                quit = $(data).find(channel).length
            }
            $(data).find(channel).each(function(i) {
                if (channel == 'entry') {
                    var ref = $(this).find('link').attr('href')
                    var dst = utc($(this).find('updated').text());
                    var gen = new Date($(this).find('updated').text()).getTime()
                } else if (channel = 'item') {
                    var ref = $(this).find('link').text()
                    if ($(this).find('pubDate').text().length > 0) {
                        var dst = utc($(this).find('pubDate').text());
                        var gen = new Date($(this).find('pubDate').text()).getTime()
                    } else {
                        var dst = utc($(this).find('dc\\:date, date').text());
                        var gen = new Date($(this).find('dc\\:date').text()).getTime()
                    }
                }
                if ($(this).find('content').text().match(/https:\/\/i\.redd\.it\/.+?(gif|png|jpg)/g)) src = String($(this).find('content').text().match(/https:\/\/i\.redd\.it\/.+?(gif|png|jpg)/g))
                else if ($(this).find('content').text().match(/https:\/\/.\.thumbs\.redditmedia\.com\/.+?(gif|png|jpg)/g)) src = String($(this).find('content').text().match(/https:\/\/.\.thumbs\.redditmedia\.com\/.+?(gif|png|jpg)/g))
                else if ($(this).find('content').text().match(/src=['"]https:\/\/.+?(gif|png|jpg)['"]/)) {
                    src = String($(this).find('content').text().match(/src=['"](.*?)['"]/)[1])
                } else if ($(this).find('link').attr('href')) {
                    if ($(this).find('link').attr('href').match(/youtube/)) src = 'https://www.youtube.com/embed/' + String($(this).find('link').attr('href').split('=')[1])
                    else src = String($(this).find('link').attr('href'))
                } else if ($(this).find('media\\:thumbnail, thumbnail').attr('url')) {
                    src = String($(this).find('media\\:thumbnail, thumbnail').attr('url'))
                } else if ($(this).find('link').text().match(/https:\/\/.+?(gif|png|jpg)/)) {
                    src = String($(this).find('link').text().match(/https:\/\/.+?(gif|png|jpg)/)[0])
                } else if ($(this).find('image').find('link, url').text().match(/https:\/\/.+?(gif|png|jpg)/)) {
                    src = String($(this).find('image').find('link, url').text().match(/https:\/\/.+?(gif|png|jpg)/)[0])
                } else if ($(this).find('enclosure').attr('url')) {
                    src = String($(this).find('enclosure').attr('url'))
                } else if ($(this).find('media\\:content, content').attr('url')) {
                    if (menu[n].id.match(/Yahoo/) && $(this).find('media\\:content, content').attr('url').match(/https.*/)) src = String($(this).find('media\\:content, content').attr('url').match(/https.*/))
                    else src = String($(this).find('media\\:content, content').attr('url'))
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
                }
				if (!src.match(/https:\/\/.+?(gif|png|jpg)/)) src = ''
				console.log(src)
                if (src.match(/app-icon|assets|comments|dmpxsnews|feedburner|footer|smilies|twitter|undefined/)) src = ''
                if (src == '') courtesy = ''
                else courtesy = "<div id='ago'>Courtesy <a onclick='window.open(\"" + menu[n].ext + "\")'>" + menu[n].id + "</a></div>"
                if (src.match(/mp4|twitch|youtube/)) {
                    if ($(this).find('media\\:statistics, statistics').attr('views')) views = "<div class='ago views' style='left:0em'><b>Views</b> " + $(this).find('media\\:statistics, statistics').attr('views').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "</div>"
                    else views = ''
                    html = "<div id='yt' class='item' style='width: 100%'><div class='pub'>" + $(this).find('title:first').text().trim().truncate(90, true) + "</div>" +
                        "<div id='ago'>" + dst[0] + "<br>" + dst[1] + "</div>" +
                        "<div class='yt'><iframe src='" + src + "'></iframe>" + views +
                        "<div class='ago views' style='right:0em'>Courtesy <a onclick='window.open(\"" + menu[n].ext + "\")'>" + menu[n].id + "</a></div></div>"
                } else {
                    html = "<div class='item' onclick='window.open(\"" + ref.trim() + "\")'><div id='pub'><a ext='" + menu[i].ext + "'>" + id + "</a></div><div class='pub'>" + $(this).find('title:first').text().trim().truncate(90, true) + "</div>" +
                        "<div id='ago'>" + dst[0] + "<br>" + dst[1] + "</div>" +
                        "<div class='ago attr' onclick='event.stopPropagation(); expand(" + i + ")'></div>" +
                        "<img onclick='event.stopPropagation(); expand(" + i + ")' id='" + i + "' style='display:none' src='" + src + "' class='img'>" + courtesy + '</div>'
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
                if ($('#' + pub[i].element).length) resolution(pub[i].element)
            }
            populate(designate)
            precede(designate)
            display('#get')
            apply()
        })
}

function reverse(Object) {

    var newObject = {}
    var keys = []
    for (var key in Object) keys.push(key)
    for (var i = keys.length - 1; i >= 0; i--) {

        var value = Object[keys[i]]
        newObject[keys[i]] = value

    }

    return newObject

}

function utc(n) {

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
