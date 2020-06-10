var id
var list
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

        $('#arm #search #match').show()
        $(this).attr('placeholder', '').css({
            'text-align': 'left'
        })

    }).on('focusout blur', function(e) {

        $(this).attr('placeholder', 'Search').css({
            'text-align': 'center'
        })

    }).attr('tabIndex', -1).focus()

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
        if (uri[1] && uri[0]) {
            $('input[type=text]').val(uri[0].replace(/(\-|\+|\%20)/g, ' '))
            filterResponse(false, uri[1], false)
        } else if (!uri[1] && uri[0]) {
            $('input[type=text]').val(uri[0].replace(/(\-|\+|\%20)/g, ' '))
            filterResponse(false, uri[0], false)
        }
    }

    $('#main').on('scroll touchmove', function() {

        $('svg circle').css({
            "stroke-dashoffset": 131 - (131 * Math.max(0, Math.min(1, $('#main')
                .scrollTop() / ($('#main')[0].scrollHeight - $('#main')
                    .innerHeight()))))
        })

    })

}).on('touch click', '#main, #arm', function(e) {

    $('#arm #search #match').hide()

}).on('touch click', '#main .item a, #main u', function(e) {

    window.open($(this).attr('ext'), '_blank', 'noreferrer')
    e.stopPropagation()

}).on('keyup', '#search input[type=text]', function(e) {

    if ($('#arm #search #match .listing .index').length) $('#arm #search #match').show()
    if (e.keyCode == 13) {
        $('#arm #search #match').hide()
        return false
    } else if (e.type == 'keyup' && $(this).val().length >= 2 && e.keyCode >= 65 && e.keyCode <= 90) {
        filterResponse(true, $(this).val(), true)
    } else if ($(this).val().length < 2 && e.keyCode == 8) {
        $('#arm #search #match').hide()
    } else if (e.keyCode == 40 || e.keyCode == 34) {
        if (!$('#arm #search #match .listing .hover').length) $('#search .listing .index:first').addClass('hover').removeClass('index')
        else {
            $('#arm #search #match').show()
            $('#arm #search #match .listing .hover').next().focus().attr('class', 'hover')
            $(this).attr('tabIndex', -1).focus()
            $('#arm #search #match .listing .hover').prev().attr('class', 'index')
        }
    } else if (e.keyCode == 38 || e.keyCode == 33) {
        $('#arm #search #match .listing .hover').prev().focus().attr('class', 'hover')
        $(this).attr('tabIndex', -1).focus()
        $('#arm #search #match .listing .hover').next().attr('class', 'index')
    } else if (e.keyCode == 27) {
        $('#arm #search #match').hide()
    }
    applyVisual()
    e.preventDefault()

}).on('submit', '.addComment', function(e) {

    if ($(this).parent().find('.add').length >= 3) {
        $(this).parent().find('.add:last').remove()
        $(this).parent().find('.add:first').before("<div class='add'>" + $(this).children('.comment').val() + "</div>")
    } else {
        $(this).parent().find('.pub').append("<div class='add'>" + $(this).children('.comment').val() + "</div>")
    }
    $(this).children('.comment').val('')
    e.preventDefault()

}).on('submit', '#search', function(e) {

    if ($('#search .listing .hover').length) {
        if (contrast == true) window.location.assign('?q=' + $('input[type=text]').val().replace(/\s/g, '+') + '&' +
            menu[$('#arm #search #match .hover').attr('response')].id.toLowerCase().replace(/[\/|\.|\s]/g, '-') + '+1')
        else window.location.assign('?q=' + $('input[type=text]').val().replace(/\s/g, '+') + '&' +
            menu[$('#arm #search #match .hover').attr('response')].id.toLowerCase().replace(/[\/|\.|\s]/g, '-'))
        $('#search .listing .hover').removeClass('hover').addClass('index')
        $('#arm #search #match').hide()
        return false
    } else {
        if ($('input[type=text]').val().length) {
            document.title = $(
                'input[type=text]').val().replace(/(\/|\.)/g, ' ').capitalize()
            history.replaceState(null, null, '?q=' + $(
                'input[type=text]').val().replace(/\s/g, '+'))
            filterResponse(false, $('input[type=text]').val(), false)
        }
    }
    applyVisual()
    e.preventDefault()

}).on('touch click', '#placeholder', function(e) {

    $('#main #visit, #main #placeholder').hide()
    filterResponse(false, $('input[type=text]').val(), false)

}).on('touch click', '.item', function(e) {

    window.open($(this).attr('ext'), '_blank', 'noreferrer')
    e.stopPropagation()

}).on('touch click', '.feed .id', function(e) {

    if (contrast == true) window.location.assign('?q=' + $(this).attr('response').replace(/\-/g, '+') + '&' + $(this).attr(
        'response') + '+1')
    else window.location.assign('?q=' + $(this).attr('response').replace(/\-/g, '+') + '&' + $(this).attr('response'))

}).on('wekitAnimationEnd oanimationend msAnimationEnd animationend', '.overlay', function(e) {

            $(this).removeClass('overlay')
            void this.clientWidth
            $(this).addClass('overlay')

}).on('mouseenter mouseleave', '.filter, .populate', function(e) {

    if (e.type == 'mouseenter') {
        $(this).toggleClass('overlay')
        $(this).on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
            $(this).removeClass('overlay')
            void this.clientWidth
            $(this).addClass('overlay')
        })
    }
    if (e.type == 'mouseleave') $(this).removeClass('overlay')

}).on('touch click', '.filter, .populate', function(e) {

    if (contrast == true) window.location.assign('?q=' + $('input[type=text]').val() + '&' + $(this).attr(
        'response') + '+1')
    else window.location.assign('?q=' + $('input[type=text]').val().replace(/\s/g, '+') + '&' + $(this).attr('response'))

}).on('touch click mouseenter mouseleave', '.index, .hover', function(e) {

    if (e.type == 'mouseenter') {
        $('#search .listing .hover').removeClass('hover').addClass('index')
        $(this).attr('class', 'hover')
    } else if (e.type == 'mouseleave') {
        $('#search .listing .hover').removeClass('hover').addClass('index')
    } else if (e.type == 'touch' || e.type == 'click') {
        if (contrast == true) window.location.assign('?q=' + $('input[type=text]').val().replace(/\s/g, '+') + '&' +
            menu.indexOf($(this).attr('response')) + '+1')
        else window.location.assign('?q=' + $('input[type=text]').val().replace(/\s/g, '+') + '&' + menu[$(this).attr('response')].id.toLowerCase().replace(/[\/|\.|\s]/g, '-'))
    }
    e.preventDefault()
    applyVisual()

}).on('touch click', '.fa-bookmark-o, .fa-bookmark', function(e) {

    $(this).toggleClass('fa-bookmark-o fa-bookmark')
    e.stopPropagation()

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
        $('body, #container, #main, #arm, #info, input[type=text], .comment, .result, .listing, .index, .title, .category, .description, .type, .item, .item .pub, #image, a')
            .css({
                'color': '#fff',
                'background-color': '#000',
                'border': 'none'
            })
        $('input[type=text], .index, .hover, .description, .comment').css({
            'border-bottom': '1px solid #333',

        })
        $('.hover').css('background-color', '#333')
        $('#progressBar').removeClass('responseInvert').addClass('responseOpposite')
        $('#main, .listing').addClass('opposite').removeClass('invert')
        $('#ago, .ago, .attr').css('color', '#eee')
        $('.indicator, .bottom').attr('src', 'images/opposite.png').css('filter', 'none')
        $('#favicon').attr('href', 'images/opposite.png')
        $('a, .hilight').css('color', '#F7426B')
    } else if (op == 0) {
        $('#arm, input[type=text], .comment, .channel, #air, .result, .title, .item, .item .pub, .type, a')
            .css({
                'background-color': '#fff',
                'color': '#666',
                'border': 'none'
            })
        $('#main, input[type=text], .category, .feed, .listing, .filter, .populate, #image').css({
            'border': '.3px solid #ddd',
            'background-color': '#fcfcfc',
            'color': '#666'
        })
        $('.type').css('color', '#fff')
        $('.hover').css('background-color', '#f5f5f5')
        $('#progressBar').removeClass('responseOpposite').addClass('responseInvert')
        $('#bottom, .index').css('background-color', '#fcfcfc')
        $('.comment').css('border-top', '.3px solid #ddd')
        $('.description, .index').css({
            'border-bottom': '.3px solid #ccc'
        })
        $('.listing, .item, .feed').css('box-shadow', '1px 1px 6px #eee')
        $('#main, .listing').addClass('invert').removeClass('opposite')
        $('.item, .title').css('border', '.3px solid #ddd')
        $('.bottom').attr('src', 'images/transparent.png').css({
            'filter': 'brightness(50%) saturate(20%) invert(90%)'
        })
        $('#favicon').attr('href', 'images/invert.png')
        $('.hilight').css('color', '#F7426B')
    }
    if ($('#main .result').length && op == 0) {
        $('#arm').css('background-color', '#fafafa')
        $('input[type=text], #main').css('background-color', '#fff')
    }

}

function bottomResponse(n) {

    $('#main .center').remove()
    if ($('input[type=text]').val().toLowerCase() == menu[id].cat.toLowerCase()) {
        history.replaceState(null, null, '?q=' + menu[id].cat.toLowerCase())
        document.title = 'acktic'
        populateResponse(id)
        precedeResponse(id)
    } else {
        history.replaceState(null, null, '?q=' + $('input[type=text]').val().replace(/\s/g, '+'))
        filterResponse(false, $('input[type=text]').val(), false)
    }
    progressResponse(true, 100)
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
        $('#' + n).removeClass('min').addClass('full').width('100%')
    } else if ($('#' + n).hasClass('expand full')) {
        object.forEach(function(e) {
            if (n == e.element && e.less) $('#' + n).removeClass('full').addClass('min').width(e.less)
        })
    }

}

function feedResponse(n) {

    if (n == 0) n = menu.indexOf(menu[Math.floor(Math.random() * menu.length - 1)])
    else if (n >= menu.length - 5) n = 0
    for (var i = n + 1; i <= n + 4; i++) {
        $('#main .center .feed').append(
            "<div class='id " + menu.indexOf(menu[i]) + "' response='" + menu[i].id.toLowerCase().replace(/[\/|\.|\s|\-]/g, '-') + "'> " +
            "<a class='title' ext='" + menu[i].ext + "' rel='nofollow'>" + menu[i].id.match(/[^\/]+$/g) + "</a>" +
            "</div>"
        )
    }
    applyVisual()
}

function filterResponse(passthrough, n, listing) {

    filter = []
    $('#arm #search #match .listing').empty()
    $('#main .result, #main #air').remove()
    var n = n.toLowerCase().replace(/(\+|%20|\-|\_|\s|\.)/g, ' ')
    $('#main').scrollTop(0)
    if (reverse) reverseResponse(menu.reverse())
    for (var i = menu.length - 1; i >= 1; i--) {
        if (menu[i].id.replace(/(\/|\.)/g, ' ').toLowerCase() == n) {
            filter.push(menu.indexOf(menu[i]))
            if (listing == false) writeResponse(menu.indexOf(menu[i]))
            else listResponse(menu.indexOf(menu[i]))
            var exact = i
            id = i
            break
        } else if (menu[i].id.replace(/(\/|\.)/g, ' ').toLowerCase().match(n)) {
            filter.push(menu.indexOf(menu[i]))
            if (listing == false) writeResponse(menu.indexOf(menu[i]))
            else listResponse(menu.indexOf(menu[i]))
        } else if (menu[i].des.replace(/(\/|\.)/g, ' ').toLowerCase().match(n)) {
            filter.push(menu.indexOf(menu[i]))
            if (listing == false) writeResponse(menu.indexOf(menu[i]))
            else listResponse(menu.indexOf(menu[i]))
        } else if (menu[i].cat.toLowerCase().match(n)) {
            filter.push(menu.indexOf(menu[i]))
            if (listing == false) writeResponse(menu.indexOf(menu[i]))
            else listResponse(menu.indexOf(menu[i]))
        }
    }
    id = filter[filter.length - 1] + +1
    if (n == 'random') {
        xmlResponse(null, null, menu.indexOf(menu[Math.floor(Math.random() * menu.length)]))
        return false
    } else if ($.isNumeric(exact) && listing == false) {
        xmlResponse(null, null, exact)
        return false
    } else if (!$.isNumeric(exact) && filter.length == 1 && listing == false) {
        xmlResponse(null, null, filter[0])
        return false
    } else if (!$.isNumeric(exact) && !filter.length && listing == false) {
        xmlResponse('search', $('input[type=text]').val().replace(/\s/g, '+'), 0)
        return false
    } else if (listing == false) {
        setTimeout(function() {
            populateResponse(filter[filter.length - 1] + +1)
            precedeResponse(id)
        }, 300)
    }
    if (passthrough == false) progressResponse(true, 100)
    $('#main').attr('tabIndex', -1)
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
    	} else $('#' + n).replaceWith("<div id='image' class='overlay'></div>")

}

function listResponse(n) {

    var tag = menu[n].id.match(/[^\/]+$/g)
    var hilight = menu[n].des.replace(tag, "<b>" + tag + '</b>')
    $('#arm #search #match .listing').prepend(
        "<div class='index " + menu.indexOf(menu[n]) + "' tabIndex='-1' response='" + n + "'>" +
        "&emsp;" + menu[n].cat + "<br>&emsp;" + menu[n].id.match(/[^\/]+$/g) +
        "</div>"
    )
    if ($('#search .listing .' + n).length > 1) $('#search .listing .' + n + ':last').remove()
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

    if ($('#main .result').length < 1) $('#main').append("<div class='result' style='display:none'></div>")
    for (var i = 1; i <= menu.length - 1; i++) {
        if ($.inArray(menu.indexOf(menu[i]), filter) == -1 && menu[n].cat == menu[i].cat) {
            var tag = menu[i].id.match(/[^\/]+$/g)
            var hilight = menu[i].des.replace(tag, "<a class='hilight'>" + tag + '</a>')
            $('#main .result').append(
                "<div class='populate " + menu.indexOf(menu[n]) + "' response='" + menu[i].id.toLowerCase()
                .replace(/[\/|\.|\s|\-]/g, '-') + "'> " +
                "<div class='pub'><div class='category'>" + menu[i].cat + "</div><u class='title' ext='" + menu[i]
                .ext + "'>" + menu[i].id.match(/[^\/]+$/g) + "</u></div>" +
                "<div class='description'>&emsp;" + hilight + "</div>" +
                "<div class='type'>populate</div></div>"
            )
        }
    }
    applyVisual()
}

function precedeResponse(n) {


    if ($('#main #air').length < 1) $('#main').prepend("<div id='air' style='display:none'></div>")
    if (reverse == true) reverseArray(menu.reverse())
    for (var i = 1; i < menu.length - 1; i++) {
        if ($.inArray(menu.indexOf(menu[i]), filter) == -1 && menu[n].cat == menu[i].cat) {
            var tag = menu[i].id.match(/[^\/]+$/g)
            var hilight = menu[i].des.replace(tag, "<a class='hilight'>" + tag + '</a>')
            $('#main #air').append(
                "<div class='populate " + menu.indexOf(menu[i]) + "' response='" + menu[i].id.toLowerCase()
                .replace(/[\/|\.|\s|\-]/g, '-') + "'> " +
                "<div class='pub'><div class='category'>" + menu[i].cat + "</div><a class='title' ext='" + menu[i]
                .ext + "' rel='nofollow'>" + menu[i].id.match(/[^\/]+$/g) + "</a></div>" +
                "<div class='description'>&emsp;" + hilight + "</div>" +
                "<div class='type'>air</div></div>"
            )
        }
    }
    setTimeout(function() {}, 300)
    applyVisual()

}

function progressResponse(complete, n) {

    $('#main #visit, #main #placeholder').show()
    $('#progressBar').addClass('response').width(n + '%')
    if (complete == true) {
        $('#progressBar').on('transitionend webkitTransitionEnd oTransitionEnd', function(e) {
            $(this).removeClass('response').width(0)
            $('#main #visit, #main #placeholder').hide()
            if ($('#main .result').length == 1) $('#main .result').show()
            if ($('#main .center').length == 1) $('#main .center').show()
            if ($('#main #air').length == 1) {
                $('#main #air').show()
                $('#main').scrollTop($('#air').outerHeight())
            }
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

    if ($('#main .result').length < 1) $('#main').append("<div class='result' style='display:none'></div>")
    var tag = menu[n].id.match(/[^\/]+$/g)
    var hilight = menu[n].des.replace(tag, "<b>" + tag + '</b>')
    $('#main .result').prepend(
        "<div class='filter " + menu.indexOf(menu[n]) + "' response='" + menu[n].id.toLowerCase()
        .replace(/[\/|\.|\s|\-]/g, '-') + "'> " +
        "<div class='pub'><div class='category'>" + menu[n].cat + "</div><u class='title' ext='" + menu[n]
        .ext + "'>" + menu[n].id.match(/[^\/]+$/g) + "</u></div>" +
        "<div class='description'>&emsp;" + hilight + "</div>" +
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
    $('#main .result, #main .center, #main #air').remove()
    $('#main #visit, #main #placeholder').show()
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
            populateResponse(id)
            precedeResponse(id)
            $('#main .center .feed').html("This site could not be reached.")
            progressResponse(true, 100)
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
                    } else if ($(this).find('dc\\:date, date').text()) {
                        var dst = uncoordinatedTimeZone($(this).find('dc\\:date, date').text());
                        var gen = new Date($(this).find('dc\\:date').text()).getTime()
                    } else {
                        var dst = []
                        dst.push('')
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
                    if ($(this).find('media\\:statistics, statistics').attr('views'))
                        var views = "<div class='ago views'>views " +
                            $(this).find('media\\:statistics, statistics').attr('views')
                            .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "</div>"
                    else var views = ''
                    html = "<div id='yt' class='item' ext='" + ref.trim() + "'>" +
                        /* "<div class='ack'><i class='fa fa-at'></i></div>" + */
                        "<div class='ago'>" + courtesy + "</div>" +
                        "<i class='copy fa fa-ellipsis-h' title='Copy URL'></i>" +
                        /* "<div id='ago' style='display:block'>" + dst[1] + "</div>" + */
                        "<div class='yt'><iframe src='" + src + "'></iframe>" +
                        views +
                        "<input class='url' value='" + ref.trim() + "'>" +
                        /* "Courtesy <a onclick='window.open(\"" + filter[n].ext + "\")'>" + filter[
                            n].id.match(/([^\/]+)\/?([^\/]*)/)[1] + "</a>" + */
                        "</div>" +
                        "<div id='ago' style='display:block;top:3em;'>" + dst[0] + "</div>" +
                        "<div class='pub' style='margin-top:3.5em;margin-bottom:3em;bottom:2em;clear:left'>" +
                        $(this).find('title:first').text() +
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
                    html = "<div class='item' ext='" + ref.trim() + "'>" +
                        "<div class='ago'>" + courtesy + "</div>" +
                        "<i class='copy fa fa-ellipsis-h' title='Copy URL'></i>" +
                        /* "<div id='ago' style='width:98%;display:block;margin-top:0px'>" + cat + "</div>" + */
                        /* "<div class='ago' style='width:100%;display:block'>" + dst[1] + "</div>" +
                        "<div class='ago attr' style='width:100%;display:block'></div>" + */
                        "<div class='border'></div>" +
                        "<img id='" + i + "' style='display:none' src='" + src + "' class='img'>" +
                        "<div class='ago'>" + dst[0] + "</div>" +
                        cat +
                        "<div class='pub'>" +
                        /* "<div class='ack'><i class='fa fa-at'></i></div>" + */
                        $(this).find('title:first').text() +
                        "</div>" +
                        "<div class='fa' style='float:right'><i class='ago fa fa-heart-o'></i>" +
                        "<i class='ago fa fa-bookmark-o'></i>" +
                        "<input class='url' value='" + ref.trim() + "'>" +
                        "</div>" +
                        "<form class='addComment' action'#'><input class='comment' onclick='event.stopPropagation()' " +
                        "maxlength='88' placeholder='...'></form>" +
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
            $('#main .center').append("<div id='bottom' onclick='bottomResponse(" + id + ")'><img class='bottom'></div>")
            $('#main').attr('tabIndex', -1)
            progressResponse(true, 100)
            feedResponse(id)
            applyVisual()
        })

}
