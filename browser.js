var gif
var op = 0
var request
var ost = 0
var obj = []
var min = 299
var max = 799
var former = 0
var evt = true
var job = false
var sel = 'Social'
var cor = 'https://acktic-github-io.herokuapp.com/'
$(document).ready(function() {
    $('.wrapper').css('display', 'block')

    if (location.href.match('\\?op=1')) {

        apply(1)

    } else apply(op)

    populate(sel)
    prepend(sel)
    display('#pop:last')

    $('.output').on('scroll touchmove focusout', function(e) {

        if (e.type == 'scroll' || e.type == 'touchmove') {
            manifest($(this).scrollTop())
            if ($(this).scrollTop() != 0 && $(this).scrollTop() != $('#air').outerHeight()) job = false
            if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight - 10)
                if (job == false) populate(sel)
        } else if (e.type == 'focusout') setTimeout(function() {
            $('.output').focus()
        }, 100)

    }).attr('tabindex', -1).focus()

}).on('touch click', 'a', function(e) {

    e.stopPropagation()

    external($(this).attr('ext'))

}).on('touch click', '.pop, .air', function(e) {

    get($(this).attr('get'))

})


String.prototype.truncate =

    function(n, e) {
        if (this.length <= n) return this
        var subString = this.substr(0, n - 1)
        return (e ? subString.substr(0, subString.lastIndexOf(' ')) : subString) + "&hellip;"
    }

function category(n) {

    former = 0
    evt = true
    $('#pop, #air, .arm, .get').remove()
    populate(n)
    prepend(n)
    display('#pop:last')

}

function external(n) {

    window.open(n, '_blank')

}

function display(n) {

    $('.output').animate({
        scrollTop: $(n + ':last').offset().top - $('.output').offset().top + $('.output').scrollTop()
    }, 100);
    setTimeout(function() {
        evt = false
    }, 500)

}

function abbreviate(n, e) {

    e = Math.pow(10, e);
    var a = ["k", "m", "b", "t"]

    for (var i = a.length - 1; i >= 0; i--) {
        var size = Math.pow(10, (i + 1) * 3)
        if (size <= n) {
            n = Math.round(n * e / size) / e
            if ((n == 1000) && (i < a.length - 1)) {
                n = 1
                i++
            }
            n += a[i]
        }
    }

    return n

}

function random(n) {

    var obj = []
    menu.forEach(function(e) {
        if (n == e.cat) obj.push(e)
    })
    var n = obj[Math.floor(Math.random() * obj.length)]
    get(menu.indexOf(n))

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

function manifest(n) {

    if (n < ost - 5) {
        $('.icon').css({
            'transition': 'all .2s linear',
            'visibility': 'visible'
        })
        $('.attach').css({
            'transition': 'all .2s linear',
            'visibility': 'visible'
        })
    } else if (n > ost + 5 && evt == false && job == false) {
        $('.icon').css({
            'transition': 'all .2s linear',
            'visibility': 'hidden'
        })
        $('.attach').css({
            'transition': 'all .2s linear',
            'visibility': 'hidden'
        })
    }

    ost = n

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
    dmz.push(ago(n))
    var utc = new Date(n)
    var gmt = utc.toLocaleString('en-US', opt)
    dmz.push(gmt)

    return dmz

}

function ago(n) {

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

function apply(n) {

    if (n == 'op') {
        op = op != true
    } else if (n == 1 || n == 0) op = n

    if (op == 1) {
        $('html, body, .wrapper, .container, .attach, .category, .output, .pop, .air, .item, .des').css({
            'border': 'none',
            'background-color': '#000',
            'color': 'rgba(255,255,255,.9)'
        })
        $('.random, .opposite, .item, #' + sel).css('border-bottom', '1px solid rgba(255,255,255,.2)')
        $('.output').removeClass('invert').addClass('default')
        $('.img, iframe').css('filter', 'brightness(80%)')
        $('.gif').attr('src', 'favicon/favico.png')
        $('a').css('color', '#F7426B')
        $('#invert').hide();
        $('#favico').show()
        gif = 'favico.png'
    } else if (op == 0) {
        $('.container, .attach, .category, .output, .pop, .air, .des').css({
            'background-color': 'rgba(255, 255, 255, .7)',
            'color': 'rgba(0,0,0,.7)',
            'border': 'none'
        })
        $('.random, .opposite, #' + sel).css('border-bottom', '1px solid rgba(0,0,0,.1)')
        $('html, body, .wrapper, .item').css({
            'background-color': '#fafafa',
            'color': 'rgba(0,0,0,.7)'
        })
        $('.output').removeClass('default').addClass('invert')
        $('.wrapper, .item').css('border', '1px solid #eee')
        $('.gif').attr('src', 'favicon/invert.png')
        $('.img').css('filter', 'brightness(100%)')
        $('a').css('color', '#08BD94')
        $('#favico').hide();
        $('#invert').show()
        gif = 'invert.png'
    }

}

function prepend(n) {

    reverse(menu.reverse())
    $('.output').prepend("<div id='air'></div>")
    for (var i = menu.reverse().length - 1; i >= 0; i--) {
        if (n == menu[i].cat) {
            if (menu[i].id == 'Reddit' || menu[i].id == 'Youtube' && !menu[i].ext.match(/channel/)) var id = menu[i].ext.match(/\b\w+$/)
            else var id = menu[i].id
            $('#air').prepend("<div class='air' get='" + i + "'><div class='pub'><a ext='" + menu[i].ext + "'>" + id + "</a></div><div class='des'>" + menu[i].des + "</div></div>")
        }
    }
    $('.output').scrollTop($('.output').scrollTop() + $('#air:first').outerHeight())
    apply()

}

function populate(n) {

    if (job == true) {
        $('.arm').remove()
        request.abort()
        job = false
    }
    document.title = n + ' ack'
    if (n != sel) former = 0
    sel = n
    $('.output').append("<div id='pop'></div>")
    for (var i = former; i < menu.length; i++)
        if (n == menu[i].cat) {
            if (menu[i].id == 'Reddit' || menu[i].id == 'Youtube' && !menu[i].ext.match(/channel/)) var id = menu[i].ext.match(/\b\w+$/)
            else var id = menu[i].id
            $('#pop').append("<div class='pop' get='" + i + "'><div class='pub'><a ext='" + menu[i].ext + "'>" + id + "</a></div><div class='des'>" + menu[i].des + "</div></div>")
        }
    former = 0
    apply()

}


function resolution(n) {

    $('#' + n).one('load', function() {
        if ($('#' + n).get(0).naturalHeight > max && $('#' + n).get(0).naturalWidth > max) {
            var expand = '[<u>expand</u>]'
            $('#' + n).addClass('expand min').width(Math.random() * (50 - 35 + 1) + 35 + '%').parent().width($('#' + n).siblings('.attr').width() + 75)
        } else if ($('#' + n).get(0).naturalWidth > min) {
            var expand = '[<u>expand</u>]'
            $('#' + n).addClass('expand min').width(Math.random() * (55 - 35 + 1) + 35 + '%').parent().width($('#' + n).width() + 75)
        } else {
            var expand = '';
            $('#' + n).width($('#' + n).get(0).naturalWidth).parent().width($('#' + n).siblings('.pub').width())
        }
        $('#' + n).siblings('.attr').html('(' + Math.round($('#' + n).get(0).naturalWidth) + 'x' + Math.round($('#' + n).get(0).naturalHeight) + ') ' + expand)

        $('#' + n).css('display', 'block')

    })

}

function expand(n) {

    if ($('#' + n).hasClass('expand min')) {
        obj.push({
            element: n,
            less: $('#' + n).width(),
            parent: $('#' + n).parent().width()
        })
        $('#' + n).removeClass('min').addClass('full').width('100%').parent().width("100%")
    } else if ($('#' + n).hasClass('expand full')) {
        obj.forEach(function(e) {
            if (n == e.element && e.less) $('#' + n).removeClass('full').addClass('min').width(e.less).parent().width(e.parent)
        })
    }

}

function get(n) {
    if (job == true) {
        request.abort()
        job = false
    }
    obj = []
    former = n
    evt = true
    job = true
    var pub = []
    $('#pop, #air, .arm, .get').remove()
    if (sel == 'Youtube') {
        var quit = 5
    } else {
        var quit = 11
    }
    $('.output').append("<div class='arm'></div><div class='get'></div>")
    $('.arm').html("<div style='display:inline-block'><img class='gif' src='favicon/" + gif + "'></div>")
    if (menu[n].id == 'Reddit' || menu[n].id == 'Youtube' && !menu[n].ext.match(/channel/)) var id = menu[n].ext.match(/\b(\w+)$/)[0]
    else var id = menu[n].id
    request = $.get({
            url: cor + menu[n].uri
        })
        .fail(function() {
            $('.arm').remove();
            $('.get').append("<div class='pop' onclick='window.open(\"" + menu[n].ext + "\")'><div class='pub'><a>" + id + "</a></div><div class='des'>" + menu[n].des + "</div></div>")
            job = false
        })
        .done(function(data) {
            $('.arm').remove()
            $('.get').append("<div class='pop' onclick='window.open(\"" + menu[n].ext + "\")'><div class='pub'><a>" + id + "</a></div><div class='des'>" + menu[n].des + "</div></div>")
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
                else if ($(this).find('link').attr('href')) {
                    if ($(this).find('link').attr('href').match(/youtube/)) src = 'https://www.youtube.com/embed/' + String($(this).find('link').attr('href').split('=')[1])
                    else {
                        src = String($(this).find('link').attr('href'))
                    }
                } else if ($(this).find('media\\:thumbnail, thumbnail').attr('url')) {
                    src = String($(this).find('media\\:thumbnail, thumbnail').attr('url'))
                } else if ($(this).find('content').text().match(/src=['"](.*?)['"]/)) {
                    src = String($(this).find('content').text().match(/src=['"](.*?)['"]/)[1])
                } else if ($(this).find('image').find('link, url').text().match(/https:\/\/.+?(gif|png|jpg)/)) {
                    src = String($(this).find('image').find('link, url').text().match(/https:\/\/.+?(gif|png|jpg)/)[0])
                } else if ($(this).find('enclosure').attr('url')) {
                    src = String($(this).find('enclosure').attr('url'))
                } else if ($(this).find('media\\:content, content').attr('url')) {
                    if (menu[n].id.match(/Yahoo/)) src = String($(this).find('media\\:content, content').attr('url').match(/(https.+(.*?))/)[1])
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
                } else src = ''
                if (src.match(/app-icon|assets|comments|dmpxsnews|footer|twitter|undefined/)) src = ''
                if (src == '') courtesy = ''
                else courtesy = "<div class='ago'>Courtesy <a onclick='window.open(\"" + menu[n].ext + "\")'>" + menu[n].id + "</a></div>"
                if (src.match(/mp4|twitch|youtube/)) {
                    if ($(this).find('media\\:statistics, statistics').attr('views')) views = "<div class='ago views' style='left:0em'><b>Views</b> " + abbreviate($(this).find('media\\:statistics, statistics').attr('views'), 2) + "</div>"
                    else views = ''
                    html = "<div id='yt' class='item' style='width: 100%'><div class='pub'>" + $(this).find('title:first').text().trim().truncate(90, true) + "</div>" +
                        "<div class='ago'>" + dst[0] + "<br>" + dst[1] + "</div>" +
                        "<div class='yt'><iframe src='" + src + "'></iframe>" + views +
                        "<div class='ago views' style='right:0em'>Courtesy <a onclick='window.open(\"" + menu[n].ext + "\")'>" + menu[n].id + "</a></div></div>"
                } else {
                    html = "<div class='item' onclick='window.open(\"" + ref.trim() + "\")'><div class='pub'>" + $(this).find('title:first').text().trim().truncate(90, true) + "</div>" +
                        "<div class='ago'>" + dst[0] + "<br>" + dst[1] + "</div>" +
                        "<div class='ago attr'></div>" +
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
            for (var k = 0; k <= quit - 1; k++) {
                $('.get').append(pub[k].post)
                if ($('#' + pub[k].element).length) resolution(pub[k].element)
            }
            populate(sel)
            prepend(sel)
            display('.get')
            apply()
        })
}
