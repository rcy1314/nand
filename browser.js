var gif
var op = 0
var request
var ost = 0
var his = 0
var obj = []
var min = 249
var evt = true
var job = false
var sel = 'Social'
$(document).ready(function() {
    $('.wrapper').css('display', 'block')

    if (location.href.match('\\?op=1')) {

        apply(1)

    } else apply(op)

    populate(sel)
    prepend(sel)
    scr('#pop:last')

    $('.random').on('touchstart click', function(e) {

        random(sel)

        e.preventDefault()

    })

    $('.opposite').on('touchstart click', function(e) {

        apply('op')

        e.preventDefault()

    })

    $('.category').on('touchstart click', function(e) {

        his = 0
        evt = true
        $('#pop, #air, .arm, .get').remove()
        prepend($(this).attr('id'))
        populate($(this).attr('id'))
        scr('#pop:last')
        setTimeout(function() {
            evt = false
        }, 250)
        e.preventDefault()

    })

    $('.external').on('touchstart click', function(e) {

        window.open($(this).attr('ext'), '_blank')
        e.stopPropagation()

    })

    $('.fav').on('touchstart click mouseover', function(e) {

        if (e.type == 'mouseover') {
            $('.fav').css({
                'transition': 'all .2s linear',
                'opacity': '1',
                'visibility': 'visible'
            });
        } else {
            evt = true
            prepend(sel)
            populate(sel)
            scr('#pop:last')
            setTimeout(function() {
                evt = false
            }, 250)
        }
        e.preventDefault()

    })

    $('.attach').on('mousemove', function(e) {

        $('.attach').css({
            'transition': 'all .2s linear',
            'opacity': '1',
            'visibility': 'visible'
        })

    })

    $('.output').on('scroll touchmove focusout', function(e) {

        if (e.type == 'scroll' || e.type == 'touchmove') {
            manifest($(this).scrollTop())
            if ($(this).scrollTop() != 0 && $(this).scrollTop() != $('#air').outerHeight()) job = false
            if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight - 100 && job == false) populate(sel)
        } else if (e.type == 'focusout') setTimeout(function() {
            $('.output').focus()
        }, 100)

    }).attr('tabindex', -1).focus()

    $('.rss').on('click', function(e) {

        external('https://github.com/acktic/acktic.github.io')

    })

})

String.prototype.truncate =

    function(n, e) {

        if (this.length <= n) return this
        var subString = this.substr(0, n - 1)
        return (e ? subString.substr(0, subString.lastIndexOf(' ')) : subString) + "&hellip;"

    }

function abr(n, e) {

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

function external(n) {
    window.open(n, '_blank')
}

function scr(n) {

    $('.output').animate({
        scrollTop: $(n + ':last').offset().top - $('.output').offset().top + $('.output').scrollTop()
    }, 100);
    setTimeout(function() {
        evt = false
    }, 250)

}

function manifest(n) {

    if (job == true) {
        $('.fav').css({
            'transition': 'all .2s linear',
            'opacity': '1',
        });
        $('.attach').css({
            'transition': 'all .2s linear',
            'opacity': '1',
        })
    }
    if (n < ost - 5 || n == true) {
        $('.fav').css({
            'transition': 'all .2s linear',
            'opacity': '1',
        });
        $('.attach').css({
            'transition': 'all .2s linear',
            'opacity': '1',
        })
    } else if (n > ost + 5 && job == false && evt == false || n == false) {
        $('.fav').css({
            'transition': 'all .2s linear',
            'opacity': '0',
        });
        $('.attach').css({
            'transition': 'all .2s linear',
            'opacity': '0',
        })
    }

    ost = n

}

function random(n) {

    var obj = []
    $.each(menu, function(i, k) {
        if (n == k.cat) obj.push(menu[i])
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

function utc(n) {

    var opt = {
        weekday: 'long',
        day: '2-digit',
        month: 'short',
        hour: 'numeric',
        minute: 'numeric',
        second: '2-digit',
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
    var sec = dis / 1000
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
        $('html, .wrapper, .container, .output, .pop, .air, .box, .rss').css({
            'border': 'none',
            'background-color': '#000',
            'color': 'rgba(255,255,255,.8)'
        })
        $('.pub, .ago, .category').css({
            'border-bottom': 'none',
            'color': 'rgba(255,255,255,.8)'
        })
        $('.random, .opposite, #' + sel).css('border-bottom', '1px solid rgba(255,255,255,.2)')
        $('.attach').css('background-color', 'rgba(0, 0, 0, .7)')
        $('.output').removeClass('invert').addClass('default')
        $('.img, iframe').css('filter', 'brightness(75%)')
        $('.gif').attr('src', 'favicon/favico.png')
        $('#invert').hide();
        $('#favico').show()
        $('a').css('color', '#F7426B')
        gif = 'favico.png'
    } else if (op == 0) {
        $('.container, .output, .pop, .air, .rss').css({
            'background-color': '#fff',
            'color': 'rgba(0,0,0,.7)'
        })
        $('.pub, .ago, .category').css({
            'border-bottom': 'none',
            'color': 'rgba(0,0,0,.7)'
        })
        $('.random, .opposite, #' + sel).css('border-bottom', '1px solid rgba(0,0,0,.1)')
        $('.box').css({
            'border': '1px solid #eee',
            'background-color': '#fafafa',
            'color': 'rgba(0,0,0,.7)'
        })
        $('.attach').css('background-color', 'rgba(255, 255, 255, .9)')
        $('.output').removeClass('default').addClass('invert')
        $('html, .wrapper').css({
            'border': '1px solid #ddd',
            'background-color': '#fafafa'
        })
        $('.gif').attr('src', 'favicon/invert.png')
        $('.img').css('filter', 'brightness(100%)')
        $('#favico').hide();
        $('#invert').show()
        $('a').css('color', '#08BD94')
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
            $('#air').prepend("<div class='air' onclick='get(" + i + ")'><div class='pub' style='text-transform:none'><a class='external' onclick='event.stopPropagation(); external(\"" + menu[i].ext + "\")'>" + id + "</a></div><div class='des'>" + menu[i].des + "</div></div>")
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
    if ($('#pop, #air').length > 2) {
        $('#pop, #air:last, .get').remove()
    }
    document.title = n + ' ack'
    if (n != sel) his = 0
    sel = n
    $('.output').append("<div id='pop'></div>")
    for (var i = his; i < menu.length; i++)
        if (n == menu[i].cat) {
            if (menu[i].id == 'Reddit' || menu[i].id == 'Youtube' && !menu[i].ext.match(/channel/)) var id = menu[i].ext.match(/\b\w+$/)
            else var id = menu[i].id
            $('#pop').append("<div class='pop' onclick='get(" + i + ")'><div class='pub' style='text-transform:none'><a class='external' onclick='event.stopPropagation(); external(\"" + menu[i].ext + "\")'>" + id + "</a></div><div class='des'>" + menu[i].des + "</div></div>")
        }
    manifest(true)
    his = 0
    apply()

}


function resolution(e, n) {

    var element = new Image()
    element.onload = function() {
        if (element.width > min) {
            $('#' + e).width('100%').parent().width(Math.floor(Math.random() * (85 - 35 + 1)) + 35 + '%')
            obj.push({
                element: e,
                width: element.width
            })
        } else $('#' + e).width(element.width).parent().css('width','fit-content')
        $('#' + e).css('display', 'block')

    }

    element.src = n

}

function expand(n) {

    var max
    $.each(obj, function(i, k) {
        if (n == k.element) max = k.width
    })
    if ($('#' + n).parent().width() / $(".output").width() * 100 < 75 && max > min) {
        img = {
            element: n,
            width: $('#' + n).parent().width()
        }
        obj.push(img)
        $('#' + n).parent().width("100%")
    } else {
        $.each(obj, function(i, k) {
            if (n == k.element) $('#' + n).parent().width(k.width)
        })
    }

}

function get(n) {
    obj = []
    if (job == true) {
        request.abort()
        job = false
    }
    his = n
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
    if (menu[n].id == 'Reddit') var id = menu[n].ext.match(/\b(\w+)$/)[0]
    else var id = menu[n].id
    request = $.get('https://acktic-github-io.herokuapp.com/' + menu[n].uri)
        .fail(function() {
            $('.arm').remove();
            $('.get').append("<div class='pop' onclick='window.open(\"" + menu[n].ext + "\")'><div class='pub'><a class='external'>" + id + "</a></div>" + menu[n].des + "</div></div>")
            job = false
        })
        .done(function(data) {
            $('.arm').remove()
            $('.get').append("<div class='pop' onclick='window.open(\"" + menu[n].ext + "\")'><div class='pub'><a class='external'>" + id + "</a></div>" + menu[n].des + "</div></div>")
            if ($(data).find('entry').length > 0) var chn = "entry"
            else var chn = 'item'
            if ($(data).find(chn).length < quit) {
                quit = $(data).find(chn).length
            }
            $(data).find(chn).each(function(i) {
                if (chn == 'entry') {
                    var ref = $(this).find('link').attr('href')
                    var dst = utc($(this).find('updated').text());
                    var gen = new Date($(this).find('updated').text()).getTime()
                } else if (chn = 'item') {
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
                else if ($(this).find('image').find('link, url').text().match(/https:\/\/.+?(gif|png|jpg)/)) src = String($(this).find('image').find('link, url').text().match(/https:\/\/.+?(gif|png|jpg)/)[0])
                else if ($(this).find('link').attr('href'))
                    if ($(this).find('link').attr('href').match(/youtube/)) {
                        src = 'https://www.youtube.com/embed/' + String($(this).find('link').attr('href').split('=')[1])
                    } else {
                        src = String($(this).find('link').attr('href'))
                    }
                else if ($(this).find('media\\:thumbnail, thumbnail').attr('url')) src = String($(this).find('media\\:thumbnail, thumbnail').attr('url'))
                else if ($(this).find('media\\:content, content, enclosure').attr('url'))
                    if (!menu[n].id.match(/Yahoo/)) {
                        src = String($(this).find('media\\:content, content, enclosure').attr('url'))
                    } else {
                        src = String($(this).find('media\\:content, content, enclosure').attr('url').match(/(https:\/\/.+)/)[1].split(','))
                    }
                else if ($(this).find('content\\:encoded:first').text().match(/src=['"](.*?)['"]/)) {
                    src = String($(this).find('content\\:encoded:first').text().match(/src=['"](.*?)['"]/)[1])
                } else if ($(this).find('description').text().toLowerCase().match(/href=['"](.*?)['"]/)) src = String($(this).find('description').text().toLowerCase().match(/href=['"](.*?)['"]/)[1])
                else if ($(this).find('description').text().toLowerCase().match(/src=['"](.*?)['"]/))
                    if (menu[n].id == '4chan') src = String($(this).find('description').text().toLowerCase().match(/src=['"](.*?)(s\.jpg)['"]/)[1]) + '.jpg'
                else src = String($(this).find('description').text().toLowerCase().match(/src=['"](.*?)['"]/)[1])
                else if ($(this).find('image').text()) src = String($(this).find('image').text())
                else src = ''
                if (src.match(/comments|twitter|undefined/) || !src.match(/https|embed|\.gif|\.jpg|\.jpeg|media|\.png/)) src = ''
                if (src == '') courtesy = ''
                else courtesy = "<div class='ago' style='text-align:left'>Courtesy <a onclick='window.open(\"" + menu[n].ext + "\")'>" + menu[n].id + "</a></div>"
                if (src.match(/youtube/)) {
                    if ($(this).find('media\\:statistics, statistics').attr('views')) {
                        views = "<div class='ago pro' style='left:0em'><b>Views</b> " + abr($(this).find('media\\:statistics, statistics').attr('views'), 2) + "</div>"
                    } else {
                        views = ''
                    }
                    post = "<div id='yt' class='box' style='width: 100%'><div class='pub'>" + $(this).find('title:first').text().trim().truncate(90, true) + "</div>" +
                        "<div class='ago'>" + dst[0] + "<br>" + dst[1] + "</div>" +
                        "<div class='yt'><iframe src='" + src + "'></iframe>" + views +
                        "<div class='ago pro' style='right:0em'>Courtesy <a onclick='window.open(\"" + menu[n].ext + "\")'>" + menu[n].id + "</a></div></div>"
                } else {
                    post = "<div class='box' onclick='window.open(\"" + ref.trim() + "\")'><div class='pub'>" + $(this).find('title:first').text().trim().truncate(90, true) + "</div>" +
                        "<div class='ago'>" + dst[0] + "<br>" + dst[1] + "</div>" +
                        "<img onclick='event.stopPropagation(); expand(" + i + ")' id='" + i + "' style='display:none' src='" + src + "' class='img'>" + courtesy + '</div>'
                }
                var select = {
                    element: i,
                    since: gen,
                    post: post
                }
                pub.push(select)
            })
            pub.sort(function(a, b) {
                return b.since - a.since
            })
            for (var k = 0; k <= quit - 1; k++) {
                $('.get').append(pub[k].post)
                if ($('#' + pub[k].element).length) resolution(pub[k].element, $('#' + pub[k].element).attr('src'))
            }
            prepend(sel)
            populate(sel)
            scr('.get')
            apply()
        })
}
