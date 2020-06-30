$(document).ready(function() {

    $('#search input[type=text]').css('display', 'block')

    if (location.href.match('\\+1')) {

        $('#option .fa-circle-thin').toggleClass(
            'fa-circle-thin fa-circle')
        applyVisual(!op)
        contrast = true

    } else applyVisual(op)

    if (location.search.split('?q=')[1]) {
        var uri = location.search.split('?q=')[1]
        if (uri.match(/\+1/)) uri = uri.replace(/\?\+1|\+1/, '')
        if (uri.match(/[^&]+/g)) uri = (uri.match(/[^&]+/g))
		if (location.hash.substr(1).match(/\+1/g))
			var post = location.hash.substr(1).replace(/\+1/g, '')
		else if ($.isNumeric(location.hash.substr(1)))
			var post = location.hash.substr(1)
		else var post = false
        if ($.isNumeric(post) && uri[0] && uri[1]) {
            filterResponse(true, uri[1], post)
            applyVisual()
        } else if ($.isNumeric(post) && uri[0] && !uri[1]) {
            filterResponse(false, uri[0], post)
            applyVisual()
        } else if (!$.isNumeric(post) && uri[0] && uri[1]) {
            filterResponse(true, uri[1], post)
            applyVisual()
        } else if (!$.isNumeric(post) && uri[0] && !uri[1]) {
            filterResponse(false, uri[0], post)
            applyVisual()
        }
    }

}).on('touch click', 'a', function(e) {

    window.open($(this).attr('ext'), '_blank', 'noreferrer')
    e.stopPropagation()

}).on('touch click', '#main #visit, #main #placeholder', function(e) {

    $('#main #visit, #main #placeholder').hide()
	var uri = '?q=' + category.toLowerCase()
	if (contrast == true) uri = uri + '+1'
    filterResponse(false, category, false)
    stateResponse(uri)
    precedeResponse()
    progressResponse(true, 100)

}).on('touch click', '#main .center .channel .item', function(e) {

    window.open($(this).attr('ext'), '_blank', 'noreferrer')
    e.stopPropagation()

}).on('touch click', '#arm', function(e) {

	if (!$('#arm #search input[type=text]').is(':focus'))$('#arm #search #match').hide()

}).on('touch click', '#main', function(e) {

	$('#arm #search #match').hide()

}).on('keyup touch click focusout blur', '#arm #search input[type=text]',
    function(e) {

        if (e.type == 'touch' || e.type == 'click' || 
			$('#arm #search input[type=text]').val().length == -1){
			$('#arm #search #match').show()
			$('#arm #search #match .listing').empty()
		    $.each(translations, function(i) {
        	    $('#arm #search #match .listing').append(
                	"<div class='index' tabIndex='-1' response='" +
                		translations[i] + "'>" +
                	"<img class='type' src='" +
                	"images/ID/PNG/" + translations[i] + '.png' + "'>" +
                	"<div class='text'>&emsp;<b>" + translations[i] + "</b>" +
                	"<br>&emsp;" + grepResponse(translations[i]) + " feeds</div>" +
                	"</div>"
				)
			})
            $(this).css({
                'text-align': 'center',
            }).val('')
		}
        if (e.type == 'focusout' || e.type == 'blur')
            $(this).css({
                'caret-color': '#e4e4e4',
            }).val('Search')
        if ($(this).val() != 'Search') var keyup = $(
            this).val()
        if (e.type == 'keyup' && e.keyCode == 13) {
            $('#arm #search #match').hide()
            return false
        } else if (e.type == 'keyup' && $(this).val().length >=
            3 && e.keyCode >= 65 && e.keyCode <= 90) {
            listResponse($(this).val())
        } else if ($(this).val().length >= 2 && e.keyCode == 8) {
            listResponse($(this).val())
        } else if ($(this).val().length <= 2 && e.keyCode == 8) {
            $('#arm #search #match').hide()
            $('#main .result, #main .air, #main .center, #main .suggestions')
                .show()
        } else if (e.keyCode == 40 || e.keyCode == 34) {
            if (!$('#arm #search #match .listing .hover').length) {
                $('#search .listing .index:first').addClass(
                    'hover').removeClass('index')
            } else {
                $('#arm #search #match .listing .hover').next()
                    .focus().attr('class', 'hover')
                $(this).val(keyup)
                $(this).attr('tabIndex', -1).focus()
                $('#arm #search #match .listing .hover').prev()
                    .attr('class', 'index')
            }
        } else if (e.keyCode == 38 || e.keyCode == 33) {
            $('#arm #search #match .listing .hover').prev()
                .focus().attr('class', 'hover')
            $(this).val(keyup)
            $(this).focus()
            $('#arm #search #match .listing .hover').next().attr(
                'class', 'index')
        } else if (e.keyCode == 27) {
            $('#arm #search #match').hide()
			$(this).val('Search')
        }
        applyVisual()

}).on('touch click', '#main .center .channel .item .post', function(e) {

	$(this).siblings('.comment').focus().submit()
	e.stopPropagation()

}).on('submit', '#main .center .channel .item .addComment', function(e) {

    if ($(this).children('.comment').val() != '')
        item = $(this).parent().attr('item')
    if ($('.' + item + ' .add').length >= 3) {
        $('.' + item + ' .add:last').remove()
        $('.' + item + ' .add:first').before(
            "<div class='add'><b>" + $('.' + item +
                ' .addComment .comment').val() +
            "</div>")
    } else {
        $('.' + item + ' .ago:last').after(
            "<div class='add'><b>" + $('.' + item +
                ' .addComment .comment').val() +
            "</div>")
    }
    $('.' + item + ' .addComment .comment').val('')
	e.preventDefault()

}).on('submit', '#arm #search', function(e) {

	$('#main .air, #main .result, #main .center').remove()
    $('#arm #search #match').hide()
    if ($('#arm #search .listing .hover').length) {
		if (translations.indexOf($(
			'#arm #search #match .listing .hover').attr('response')) > -1) {
			categoryResponse($(
			'#arm #search #match .listing .hover').attr('response'))
				var uri = '?q=' + $(
					'#arm #search #match .listing .hover').attr('response')
					.toLowerCase()
			if (contrast == true) uri = uri + '+1' 
			stateResponse(uri)
        } else {
			var uri = '?q=' +
            	$('#arm #search input[type=text]').val() +
            		'&' +
            	$('#arm #search #match .listing .hover').attr(
                	'response')
			if (contrast == true) uri = uri + '+1'
			exitResponse(uri)
		}
    } else {
        if ($('#arm #search input[type=text]').val().length) {
            document.title = $(
                '#arm #search input[type=text]').val().replace(
                /(\/|\.)/g, ' ').capitalize()
            uri = '?q=' + $(
                '#arm #search input[type=text]').val()
                .toLowerCase().replace(/\s/g, '+')
			if (contrast == true) uri = uri + '+1'
			stateResponse(uri)
            filterResponse(false, $('#arm #search input[type=text]')
                .val().toLowerCase(), false)
        }
    }
    $('#arm #search input[type=text]').val('Search').blur()
    e.preventDefault()
    applyVisual()

}).on('touch click', '#main .center .quick .feed .asset .id', function(e) {

    var $this = $(this)
    $(this).parent().find('svg circle').addClass('mask').on(
        'wekitAnimationEnd oanimationend msAnimationEnd animationend',
        function() {
            $this.parent().find('svg circle').css({
                'transform': 'rotate(270deg)',
                'stroke-dasharray': '16'
            }).animate({
                'stroke-dasharray': 191,
                'stroke-dashoffset': -191
            }, {
                easing: 'swing',
                duration: 750,
                complete: function() {
                    var uri = '?q=' + '&' + $this.attr('response')
					if (contrast == true) uri = uri + '+1'
					exitResponse(uri)
                }
            })
        })

}).on('touch click', '#main .suggestions .combine div', function(e) {

    var uri = '?q=' + '&' + $(this).attr('response')
	if (contrast == true) uri = uri + '+1'
	exitResponse(uri)

}).on('touch click', '#main .center .quick .right', function(e) {

    var leftPos = $('#main .center .quick .feed').scrollLeft()
    $('#main .center .quick .feed').animate({
        scrollLeft: leftPos + 360
    }, 'slow')
    if ($('#main .center .quick .feed').scrollLeft() >=
        $('#main .center .quick .feed').width() - 359)
        $(this).hide()
    if ($('#main .center .quick .feed').scrollLeft() >= 0)
        $('#main .center .quick .left').show()


}).on('touch click', '#main .center .quick .left', function(e) {

    var leftPos = $('#main .center .quick .feed').scrollLeft()
    $('#main .center .quick .feed').animate({
        scrollLeft: leftPos - 360
    }, 'slow')
    if ($('#main .center .quick .feed').scrollLeft() <= 360)
        $(this).hide()
    $('#main .center .quick .right').show()

}).on('touch click mouseenter mouseleave', 
	'.air .filter, .result .filter, .air .populate, .result .populate', 
	function(e) {

    if (contrast == false)
        if (e.type == 'mouseenter') {
            $(this).toggleClass('overlay')
            $(this).on(
                'webkitAnimationEnd oanimationend msAnimationEnd animationend',
                function(e) {
                    $(this).removeClass('overlay')
                    void this.clientWidth
                    $(this).addClass('overlay')
                })
        }
    if (e.type == 'mouseleave') $(this).removeClass('overlay')
    if (e.type == 'touch' || e.type == 'click') {
        var uri = '?q=' + location.search.split('?q=')[1].match(/[^&+1]+/g) +
			'&' + $(this).attr('response')
		if (contrast == true) uri = uri + '+1'
        exitResponse(uri)
    }

}).on('touch click mouseenter mouseleave', 
	'#arm #search #match .listing .index, #arm #search #match .listing .hover',
    function(e) {

        if (e.type == 'mouseenter') {
            $('#search .listing .hover').removeClass('hover')
                .addClass('index')
            $(this).attr('class', 'hover')
        } else if (e.type == 'mouseleave') {
            $('#search .listing .hover').removeClass('hover')
                .addClass('index')
        } else if (e.type == 'touch' || e.type == 'click')
		if (translations.indexOf($('.hover').attr('response')) > -1) {
			categoryResponse($('.hover').attr('response'))
			var uri = '?q=' + $('.hover').attr('response').toLowerCase()
			if (contrast == true) uri = uri + '+1'
			stateResponse(uri)
        } else {
			var uri = '?q=' +
                $(this).attr('search') +
                '&' + $(this)
                .attr('response')
			if (contrast == true) uri = uri + '+1'
			exitResponse(uri)
		}
        e.preventDefault()
        applyVisual()

}).on('touch click', '#arm #home', function(e) {

	window.location.href = window.location.origin

}).on('touch click', '#option .fa-git', function(e) {

	window.open('https://github.com/acktic/acktic.github.io', '_blank', 'noreferrer')

}).on('touch click', '#option .fa-circle-thin, #option .fa-circle', function(
    e) {

    $(this).toggleClass('fa-circle-thin fa-circle')
    if (!location.href.match('\\?q=') &&
        !location.href.match('\\?\\+1') &&
        contrast == false) {
        var init = document.location.href + '?+1'
        stateResponse(init)
        contrast = true
    } else if (location.href.match('\\?q=') &&
        !location.href.match('\\+\\1') &&
        contrast == false) {
        var opposite = document.location.href + '+1'
        stateResponse(opposite)
        contrast = true
    } else if (location.href.match('\\?\\+1') ||
        location.href.match('\\+1') ||
        contrast == false) {
        var invert = document.location.href
        invert = invert.replace(/\?\+1|\+1/g, '')
        history.replaceState(null, null, invert)
        contrast = false
    }
    applyVisual('op')

}).on('touch click', '#option .fa-user-circle', function(e) {

	var re = menu.indexOf(menu[Math.floor(Math.random() *
		menu.length)])
	var uri = '?q=' + menu[re].cat.toLowerCase() + '&' +
		menu[re].id.toLowerCase().replace(/\s|\.|\//g, '-')
	if (contrast == true) uri = uri + '+1'    
	stateResponse(uri)
	xmlResponse(null, null, re, null)
    return false

}).on('touch click', '#option .fa-terminal', function(e) {

    if (!id) id = translations[current]
    else id = menu[id].cat
    var array = []
    for (i = 1; i <= menu.length - 1; i++) {
        if (menu[i].cat == id)
            array.push(menu.indexOf(menu[i]))
    }
    var n = array[Math.floor(Math.random() * array.length)]
    var re = '?q=' + menu[n].cat.toLowerCase() + '&' +
        menu[n].id.toLowerCase().replace(/(\s|\.|\/)/g, '-')
	if (contrast == true) re = re + '+1'
    stateResponse(re)
    xmlResponse(null, null, n, false)
    return false

}).on('touch click', 
	'#main .center .channel .item .image .tag .fa-bookmark-o, #main .center .channel .item .image .tag .fa-bookmark',
	function(e) {

    $(this).parents('.item').find('.source').select()
    document.execCommand('copy')
    $(this).toggleClass('fa-bookmark-o fa-bookmark')
    e.stopPropagation()
    applyVisual()

}).on('touch click', 
	'#main .center .channel .item .image .tag .fa-heart-o, #main .center .channel .item .image .tag .fa-heart',
	function(e) {

    $(this).toggleClass('fa-heart-o fa-heart')
    e.stopPropagation()
    applyVisual()

}).on('touch click', 
	'#main .center .channel .item .image .tag .fa-comments-o, #main .center .channel .item .image .tag .fa-comments',
	function(e) {

    $(this).toggleClass('fa-comments-o fa-comments')
    e.stopPropagation()
    applyVisual()

}).on('touch click', '#main .center .channel .item .header .fa-ellipsis-h', function(e) {

    $(this).siblings('.url').select()
    document.execCommand('copy')
    $(this).removeClass('fa-ellipsis-h').addClass(
        'fa-ellipsis-v')
    setTimeout(function() {
        $('#main .center .channel .item .copy').removeClass('fa-ellipsis-v')
            .addClass('fa-ellipsis-h')
    }, 250)
    e.stopPropagation()

}).on('touch click', 
	'#main .center .channel .item .image .tag .fa-sticky-note-o, #main .center .channel .item .image .tag .fa-sticky-note',
	function(e) {

	if (contrast == true) 
		if (!$(this).parents('.item').find('.share').val().match(/\+1/g))
			$(this).parents('.item').find('.share').val(
			$(this).parents('.item').find('.share').val() + '+1')
	if (contrast == false && $(this).parents('.item').find('.share').val()
			.match(/\+1/g))
			$(this).parents('.item').find('.share').val(
				$(this).parents('.item').find('.share').val()
				.replace(/\+1/g, ''))
    $(this).parents('.item').find('.share').select()
    document.execCommand('copy')
    $(this).toggleClass('fa-sticky-note-o fa-sticky-note')
    e.stopPropagation()
    applyVisual()

}).on('touch click', '#main .center .channel .item .image .img', function(e) {

    if ($(this).hasClass('expand min') || $(this).hasClass(
            'expand full')) expandImage($(this).attr(
        'id'))
    else $(this).parent().parent().find('.fa-heart-o, .fa-heart')
        .toggleClass('fa-heart-o fa-heart')
    e.stopPropagation()
    applyVisual()

}).on('touch click', '#main .center .channel .item .pub .more', function(e) {

    $(this).parent().html($(this)
        .parent().attr('text'))
    $(this).parent().animate({
        width: '85%',
    }, 'slow', function() {
        $(this).parent().height('auto')
    })
    e.stopPropagation()
    $(this).hide()

}).on('touch click', '#main .center #bottom', function(e) {

    document.title = 'acktic'
    $('#main .center, #main .suggestions').remove()
    var uri = location.search.split('?q=')[1].match(/[^&]+/g)[0]
	if (contrast == true) uri = uri + '+1'
    stateResponse('?q=' + uri)
    document.title = 'acktic'
    filterResponse(false, uri
        .toLowerCase(), false)
	populateResponse(id)
	precedeResponse(id)
    progressResponse(true, 100)
    applyVisual()

})
