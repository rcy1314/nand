var id
var op = 0
var request
var quit = 15
var object = []
var filter = []
var channel = []
var reverse = false
var contrast = false
var category = 'Social'
var cors = 'https://acktic-github-io.herokuapp.com/'
document.title = 'acktic'
$(document).ready(function() {
	$('#search input[type=text]').css('display','block')

	if (location.href.match('\\+1')) {

		applyVisual(!op)
		contrast = true

	} else applyVisual(op)

	if (location.search.split('?q=')[1] && !location.href
		.match('\\?\\+1')) {
		var uri = location.search.split('?q=')[1]
		if (uri.match(/\+1/)) uri = uri.replace(/\+1/, '')
		if ($.isNumeric(location.hash.substr(1))){
			var post = location.hash.substr(1)
			uri = uri.replace(/\#\d+/g, '')
		} else var post = false
		if (uri.match(/[^&]+/g)) uri = (uri.match(/[^&]+/g))
		if ($.isNumeric(post) && uri[0] && uri[1]) {
			filterResponse(false, uri[1], post)
			applyVisual()
		} else if (!$.isNumeric(post) && uri[0] && uri[1]) {
			filterResponse(false, uri[1], post)
			applyVisual()
		} else if (!$.isNumeric(post) && uri[0] && !uri[1]) {
			filterResponse(false, uri[0], post)
			applyVisual()
		} 
	} else {
	/*	filterResponse(false, category, false, false)
		precedeResponse() */
	}

}).on('touch click', 'a', function(e) {

	window.open($(this).attr('ext'), '_blank', 'noreferrer')
	e.stopPropagation()

}).on('touch click', '#search', function(e) {

	if ($('#arm #search #match').is(':visible')) $('#arm #search #match').hide()

}).on('touch click', '#visit, #placeholder', function(e) {

	$('#main #visit, #main #placeholder').hide()
	history.replaceState(null, null, '?q=' + category.toLowerCase())
	filterResponse(false, category, false)
	precedeResponse()
	progressResponse(true, 100)

}).on('touch click', '.item', function(e) {

	window.open($(this).attr('ext'), '_blank', 'noreferrer')
	e.stopPropagation()

}).on('keyup touch click focusout blur', '#search input[type=text]', function(e) {

	if ($(this).val() == 'random') return false

	if (e.type == 'touch' || e.type == 'click')
 
       $(this).css({
            'text-align': 'center',
        }).val('').attr('tabindex', -1)

	if (e.type == 'focusout' || e.type == 'blur')

        $(this).css({
			'caret-color': '#e4e4e4',
        }).val('Search')

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
		$('#main .result, #main #air, #main .center, #main .suggestions').show()
	} else if (e.keyCode == 40 || e.keyCode == 34) {
		if (!$('#arm #search #match .listing .hover').length) {
			$('#search .listing .index:first').addClass(
				'hover').removeClass('index')
		} else {
			$('#arm #search #match .listing .hover').next()
				.focus().attr('class', 'hover')
		$('input[type=text]').val($('#arm #search .listing .hover')
			.attr('search'))
			$(this).attr('tabIndex', -1).focus()
			$('#arm #search #match .listing .hover').prev()
				.attr('class', 'index')
		}
	} else if (e.keyCode == 38 || e.keyCode == 33) {
		$('#arm #search #match .listing .hover').prev()
			.focus().attr('class', 'hover')
		$('input[type=text]').val($('#arm #search .listing .hover')
			.attr('search'))
		$(this).attr('tabIndex', -1).focus()
		$('#arm #search #match .listing .hover').next().attr(
			'class', 'index')
	} else if (e.keyCode == 27) {
		$('#main #visit, #main #placeholder, #arm #search #match').hide()
		$('#main .result, #main #air, #main .center, #main .suggestions').show()
	}
	e.preventDefault()
	applyVisual()

}).on('submit', '.addComment', function(e) {

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

}).on('submit', '#search', function(e) {

	$('#arm #search #match').hide()
	if ($('#search .listing .hover').length) {
		exitResponse('?q=' +
			$('#arm #search #match .hover').attr('search') +
				 '&' +
			$('#arm #search #match .hover').attr(
				'response'))
		$('#search .listing .hover').removeClass('hover')
			.addClass('index')
		$('#arm #search #match').hide()
		return false
	} else {
		if ($('input[type=text]').val().length) {
			document.title = $(
				'input[type=text]').val().replace(
				/(\/|\.)/g, ' ').capitalize()
			history.replaceState(null, null, '?q=' + $(
				'input[type=text]').val().replace(
				/\s/g, '+'))
			filterResponse(false, $('input[type=text]')
				.val().toLowerCase(), false)
		}
	}
	$('input[type=text]').val('Search').blur()
	e.preventDefault()
	applyVisual()

}).on('touch click', '#asset .id', function(e) {

	var $this = $(this)
	$(this).parent().find('svg circle').addClass('mask').on(
		'wekitAnimationEnd oanimationend msAnimationEnd animationend',
		function() {
		$this.parent().find('svg circle').css({
			'transform': 'rotate(270deg)',
			'stroke-dasharray': '8'
		}).animate({
			'stroke-dasharray': 191,
			'stroke-dashoffset':-191
			},{easing: 'swing', duration: 750, complete: function() {
				exitResponse('?q=' +
					'&' + $this.attr('response'))
			}
		})
	})
}).on('touch click', '.combine div', function(e) {

		exitResponse('?q=' +
			'&' + $(this).attr('response'))

}).on('touch click', '#main .center .quick .right', function(e) {

		var leftPos = $('#main .center .quick .feed').scrollLeft()
		console.log(leftPos + ' ' + $('#main .center .quick .feed').width())
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

}).on('touch click mouseenter mouseleave', '.filter, .populate', function(e) {

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
		var uri = location.search.split('?q=')[1].match(/[^&]+/g)
		exitResponse('?q=' + uri + '&' + 
				$(this).attr('response'))
	}

}).on('touch click mouseenter mouseleave', '.index, .hover',
	function(e) {

		if (e.type == 'mouseenter') {
			$('#search .listing .hover').removeClass('hover')
				.addClass('index')
			$(this).attr('class', 'hover')
		} else if (e.type == 'mouseleave') {
			$('#search .listing .hover').removeClass('hover')
				.addClass('index')
		} else if (e.type == 'touch' || e.type == 'click')
			exitResponse('?q=' +
				$(this).attr('search') +
					'&' + $(this)
					.attr('response'))
		e.preventDefault()
		applyVisual()

}).on('touch click', '.fa-bookmark-o, .fa-bookmark', function(
	e) {

	$(this).parent().parent().find('.source').select()
	document.execCommand('copy')
	$(this).toggleClass('fa-bookmark-o fa-bookmark')
	e.stopPropagation()
	applyVisual()

}).on('touch click', '.fa-heart-o, .fa-heart', function(e) {

	$(this).toggleClass('fa-heart-o fa-heart')
	e.stopPropagation()
	applyVisual()

}).on('touch click', '.fa-comment-o, .fa-comment', function(e) {

	$(this).toggleClass('fa-comment-o fa-comment')
	e.stopPropagation()
	applyVisual()

}).on('touch click', '.fa-ellipsis-h', function(e) {

	$(this).siblings('.url').select()
	document.execCommand('copy')
	$(this).removeClass('fa-ellipsis-h').addClass(
		'fa-ellipsis-v')
	setTimeout(function() {
		$('.item .copy').removeClass('fa-ellipsis-v')
			.addClass('fa-ellipsis-h')
	}, 250)
	e.stopPropagation()

}).on('touch click', '.fa-sticky-note-o, .fa-sticky-note', function(e) {

	$(this).parent().parent().find('.share').select()
	document.execCommand('copy')
	$(this).toggleClass('fa-sticky-note-o fa-sticky-note')
	e.stopPropagation()
	applyVisual()

}).on('touch click', '.img', function(e) {

	if ($(this).hasClass('expand min') || $(this).hasClass(
			'expand full')) expandImage($(this).attr(
		'id'))
	else $(this).parent().find('.fa-heart-o, .fa-heart')
		.toggleClass('fa-heart-o fa-heart')
	e.stopPropagation()
	applyVisual()

}).on('touch click', '.more', function(e) {

	$(this).siblings('.pub').html($(this)
		.siblings('.pub').attr('text'))
	$(this).siblings('.pub').animate({
		width: '85%',
	},'slow', function() {
		$(this).siblings('.pub').height('auto')
	})
	e.stopPropagation()
	$(this).hide()

})

String.prototype.capitalize = function() {

	return this.replace(/(\b[a-z](?!\s))/g, function(n) {
		return n.toUpperCase()
	})

}

String.prototype.truncate =

     function( n, useWordBoundary ){
         if (this.length <= n) { return this; }
         var subString = this.substr(0, n-1);
         return (useWordBoundary 
            ? subString.substr(0, subString.lastIndexOf(' ')) 
            : subString) /* + "&hellip;" */

      }

function applyVisual(n) {

	if (n == 'op') {
		op = op != true
	} else if (n == 1 || n == 0) op = n
	if (op == 1) {
		$('#main, #arm, input[type=text], .suggestions, .combine, .listing, .comment, .index, .title, .category, .description, .type, .item, .item .pub, .ago, a')
			.css({
				'background-color': '#000',
				'color': '#fff',
				'border': 'none'
			})
		$('#arm, .index, .hover, .description, .comment').css({
			'border-bottom': '1px solid #333',

		})
		$('svg circle').css('stroke','url(#gradientOpposite)')
		$('.right, .left').css('background-color','rgba(0,0,0,.5)')
		$('#home').attr('src', 'images/apply.png')
		$('.hover').css('background-color', '#333')
		$('#progressBar').removeClass('responseInvert').addClass(
			'responseOpposite')
		$('#main, .listing').addClass('opposite').removeClass(
			'invert')
		$('.indicator, .bottom').attr('src', 'images/opposite.png')
		$('#favicon').attr('href', 'images/opposite.png')
	} else if (op == 0) {
		$('input[type=text], .suggestions, .combine, .comment, .channel, #air, .result, .feed, .title, .item, .item .pub, .type, .ago, a')
			.css({
				'background-color': '#fff',
				'color': '#666',
				'border': 'none'
			})
		$('.category, .listing, .filter, .populate')
			.css({
				'background-color': '#fafafa',
				'border': '1px solid #ddd',
				'color': '#666'
			})
		$('#main, #visit, .channel, .index, #bottom').css('background-color', '#fafafa')
		$('svg circle').css('stroke','url(#gradientInvert)')
		$('.right, .left').css('background-color','rgba(255,255,255,.5)')
		$('input[type=text], .feed, .item, .title, .suggestions').css('border', '1px solid #ddd'),
		$('#home').attr('src', 'images/acktic.png')
		$('.hover').css('background-color','#e4e4e4')
		$('#progressBar').removeClass('responseOpposite').addClass(
			'responseInvert')
		$('.description, .index').css({
			'border-bottom': '1px solid #ccc'
		})
		$('#home, .listing, .item, .feed, .suggestions').css('box-shadow',
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
	}
	$('.fa-heart').css('color','lightcoral')
	$('.fa-bookmark, .fa-comment, .fa-sticky-note').css('color','black')

}

function bottomResponse(n) {

	document.title = 'acktic'
	$('#main .center, #main .suggestions').remove()
		var uri = location.search.split('?q=')[1].match(/[^&]+/g)
		history.replaceState(null, null, '?q=' + uri[0])
		document.title = 'acktic'
		filterResponse(false, uri[0]
		.toLowerCase(), false)
	progressResponse(true, 100)
	applyVisual()

}

function escapeHtml(n) {
    return n
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
 }

function exitResponse(n) {

	if (contrast == true) window.location.assign(n + '+1')
	else window.location.assign(n)

}

function expandImage(n) {

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

function feedResponse(n) {

	if (n == 0) n = menu.indexOf(menu[Math.floor(Math.random() * menu
		.length - 1)])
	else if (n >= menu.length - 13) n = 1
	for (var i = n; i <= n + 13; i++) {
		if (!menu[i].img) var img = 'images/apply' + '.png'
		else var img = 'images/ID/JPG/' + menu[i].img + '.jpg'
		$('#main .center .feed').append(
			"<div id='asset'>" +
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
			/[\/|\.|\s|\-]/g, '-') + "' search='" + menu[i].cat.
			toLowerCase() + "'> " +
			"<a style='left:0;width:100%' ext='" + menu[i].ext +
			"' rel='nofollow'>" + String(menu[i].id.match(/[^\/]+$/g))
			.substring(0, 9) + '...' +
			"</a>" +
			"</div>"
		)
	}
	applyVisual()
}

function filterResponse(passthrough, n, post) {
	filter = []
	$('#main .result, #main #air, #main .center, #main .suggestions').hide()
	$('#main #visit, #main #placeholder').show()
	var n = n.toLowerCase().replace(/(%20|\-|\_|\s|\+)/g, ' ')
	$('#main').scrollTop(0)
	if (reverse) reverseResponse(menu.reverse())
	for (var i = menu.length - 1; i >= 1; i--) {
		if (menu[i].id.replace(/(\/|\.)/g, ' ').toLowerCase() == n) {
			filter.push(menu.indexOf(menu[i]))
			writeResponse(menu.indexOf(menu[i]))
			var exact = i
			id = i 
			break
		} else if (menu[i].id.replace(/(\/|\.)/g, ' ').toLowerCase()
			.match(n)) {
			filter.push(menu.indexOf(menu[i]))
			writeResponse(menu.indexOf(menu[i]))
			id = i
		} else if (menu[i].des.replace(/(\/|\.)/g, ' ').toLowerCase()
			.match(n)) {
			filter.push(menu.indexOf(menu[i]))
			writeResponse(menu.indexOf(menu[i]))
		} else if (menu[i].cat.toLowerCase().match(n)) {
			filter.push(menu.indexOf(menu[i]))
			writeResponse(menu.indexOf(menu[i]))
		}
	}
	if (!id) id = filter[filter.length - 1] + +1
	if (n == 'random') {
		xmlResponse(null, null, menu.indexOf(menu[Math.floor(Math
			.random() * menu.length)]), post)
		return false
	} else if ($.isNumeric(exact)) {
		xmlResponse(null, null, exact, post)
		return false
	} else if ($.isNumeric(id) && filter.length == 1) {
		xmlResponse(null, null, id, post)
		return false
	} else if (!$.isNumeric(exact) && filter.length == 0) {
		xmlResponse('search', $('input[type=text]').val().replace(
			/\s/g, '+'), 0)
		return false
	} 
	if (passthrough == false) progressResponse(true, 100)
	$('#main').attr('tabindex', -1)
	applyVisual()

}

function imageResolution(n) {

	var mobile = 1480
	var minimum = 299
	var maximum = 799
	if ($('#' + n).attr('src')) {
		$('#' + n).one('load', function() {
			if ($('#' + n).get(0).naturalHeight > mobile) {
				var expand =
					"<a onclick='event.stopPropagation();expandImage(" +
					n +
					")' style='cursor:default;text-transform:capitalize'>expand</a>"
				$('#' + n).addClass('expand min').width('100%')
					.parent().css({
						'margin': '0 auto',
						'width': '45%'
					})
			} else if ($('#' + n).get(0).naturalWidth >
				minimum) {
				expand = ''
				$('#' + n).width('100%').parent().width('100%')
			} else if ($('#' + n).get(0).naturalWidth <
				maximum) {
				expand = ''
				$('#' + n).width($('#' + n).get(0)
					.naturalWidth + 30).css({
						'margin-left':'10px',
						'margin-top': '10px'
					}).parent().width($('#' + n).width() + 20)
			}
			$('#' + n).css('display', 'block')
		 	$('#' + n).parent().parent().find('.copy').css('top','-45px')
		})
	} else {
		 $('#' + n).parent().find('.tag').css('display','none')
	}
}		

function listResponse(n) {

	for (var i = menu.length - 1; i >= 1; i--) {
		if (menu[i].des.toLowerCase()
			.match(n) || menu[i].cat.toLowerCase().match(n)) {
				$('#arm #search #match .listing').prepend(
					"<div class='index " +
					menu.indexOf(menu[i]) + "' tabIndex='-1' response='" + 
					menu[i].id.toLowerCase().replace(/\s|\/|\./g, '-') + 
					"' search='" + menu[i].cat.toLowerCase() + "'>" + 
					"<img class='type' src='" + 
					"images/ID/JPG/" + menu[i].img + '.jpg' + "'>" + 
					"<div class='text'>&emsp;" + menu[i].cat + 
					"<br>&emsp;" + menu[i].id.match(/[^\/]+$/g) + "</div>" +
					"</div>"
				)
				if ($('#search .listing .' + n).length > 1) $(
					'#search .listing .' + n + ':last').remove()
		}
	}
	if (!$('#arm #search #match').is(':visible')) {
		setTimeout(function() {
			$('#main #visit, #main placeholder, #arm #search #match')
				.show()
		}, 50)
	}
}

function momentTimeStamp(n) {

	var age = new Date()
	var utc = new Date(n)
	var dis = age.getTime() - utc.getTime()
	if (dis < 0) dis = -dis
	var sec = dis / 1000;
	if (sec < 60) return parseInt(sec) + ' second' + (parseInt(sec) >
		1 ? 's' : '') + ' ago'
	var min = sec / 60;
	if (min < 60) return parseInt(min) + ' minute' + (parseInt(min) >
		1 ? 's' : '') + ' ago'
	var h = min / 60;
	if (h < 24) return parseInt(h) + ' hour' + (parseInt(h) > 1 ?
		's' : '') + ' ago'
	var d = h / 24;
	if (d < 30) return parseInt(d) + ' day' + (parseInt(d) > 1 ? 's' :
		'') + ' ago'
	var m = d / 30;
	if (m < 12) return parseInt(m) + ' month' + (parseInt(m) > 1 ?
		's' : '') + ' ago'
	var y = m / 121

	return parseInt(y) + ' year' + (parseInt(y) > 1 ? 's' : '') +
		' ago'

}

function populateResponse(n) {

	if (!n) n = 1
	if ($('#main .result').length < 1) $('#main').append(
		"<div class='result' style='display:none'></div>")
	for (var i = 1; i <= menu.length - 1; i++) {
		if ($.inArray(menu.indexOf(menu[i]), filter) == -1 && menu[n]
			.cat == menu[i].cat) {
			var tag = menu[i].id.match(/[^\/]+$/g)
			var hilight = menu[i].des.replace(tag,
				"<b>" + tag + '</b>')
			if (!menu[i].img) var img = 'images/apply' + '.png'
			else var img = 'images/ID/JPG/' + menu[i].img + '.jpg'
			$('#main .result').append(
				"<div class='populate " + menu.indexOf(menu[n]) +
				"' response='" + menu[i].id.toLowerCase()
				.replace(/[\/|\.|\s|\-]/g, '-') + "' search='" +
				menu[i].cat.toLowerCase() + "'> " +
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
	applyVisual()
}

function precedeResponse(n) {
	
	if (!n) n = 1
	if ($('#main #air').length < 1) $('#main').prepend(
		"<div id='air' style='display:none'></div>")
	if (reverse == true) reverseArray(menu.reverse())
	for (var i = 1; i < menu.length - 1; i++) {
		if (menu[n].cat == menu[i].cat) {
			var tag = menu[i].id.match(/[^\/]+$/g)
			var hilight = menu[i].des.replace(tag,
				"<b>" + tag + '</b>')
			if (!menu[i].img) var img = 'images/apply' + '.png'
			else var img = 'images/ID/JPG/' + menu[i].img + '.jpg'
			$('#main #air').append(
				"<div class='populate " + menu.indexOf(menu[i]) +
				"' response='" + menu[i].id.toLowerCase()
				.replace(/[\/|\.|\s|\-]/g, '-') + "' search='" + 
				menu[i].cat.toLowerCase() + "'> " +
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
	applyVisual()

}

function progressResponse(complete, n) {

	$('#progressBar').addClass('response').width(n + '%')
	if (complete == true) {
		$('#main #visit, #main #placeholder').hide()
		$('#progressBar').on(
			'transitionend webkitTransitionEnd oTransitionEnd',
			function(e) {
				$(this).removeClass('response').width(0)
				$('#main #visit, #main #placeholder, #arm #search #match').hide()
				if ($('#main .suggestions').length == 1) $(
					'#main .suggestions').css('visibility','visible')
				if ($('#main .result').length == 1) $(
					'#main .result').show()
				if ($('#main .center').length == 1) $(
					'#main .center').show()
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

function suggestResponse(n) {

	for (var i = 0; i <= 9; i++) {
		var e = menu.indexOf(menu[Math.floor(Math.random() * menu.length - 1)])
		if (menu[e])
		$('#main .suggestions').append(
			"<div class='combine'>" +
			"<div response='" + menu[e].id.toLowerCase()
			.replace(/(\/|\.|\s)/g, '+') + "' search='" + menu[e].cat.toLowerCase() +
			"'>" + menu[e].id.match(/[^\/]+$/g) +
			"</div>" +
			"</div>"
		)
	if (i == 9) return false
	}
	applyVisual()
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

	if ($('#main .result').length < 1) $('#main').append(
		"<div class='result' style='display:none'></div>")
	var tag = menu[n].id.match(/[^\/]+$/g)
	var hilight = menu[n].des.replace(tag, "<b>" + tag + '</b>')
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
		"images/ID/JPG/" + menu[n].img + ".jpg'>" +
		"</div>"
	)

}

function xmlResponse(e, s, n, post) {
	obj = []
	var local
	var pub = []
	var img = 'images/ID/JPG/' + menu[n].img + '.jpg'
	if (e == 'search') {
		uri = cors + menu[n].uri + s + '&format=RSS'
	} else uri = cors + menu[n].uri
	if (reverse) reverseResponse(menu.reverse())
	if (!$.isNumeric(id)) id = menu.length - +1
	document.title = menu[n].id.replace(/(\/|\.)/g, ' ').capitalize()
	progressResponse(false, Math.floor(Math.random() * (55 - 25 + 1) +
		25))
	var complete = setInterval(function() {
		$('#progressBar').width($('#progressBar').width() + 
			Math.floor(Math.random() * (5 - 0 + 1) + 0))
	}, 350)
	$('#main .result, #main .center, #main #air').remove()
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
			$('#main').append(
				"<div class='center' style='display:none'><div class='quick'><div class='feed'></div>" +
				"<div class='left fa fa-angle-double-left' style='display:none'></div><div class='right fa fa-angle-double-right'>" +
				"</div></div><div class='channel'></div></div>" +
				"<div class='suggestions' style='visibility:hidden'><b>suggested</b><br></div>"
			)
			$('#main .channel').html("This site could not be reached.")
			progressResponse(true, 100)
			clearInterval(complete)
			suggestResponse(id)
			feedResponse(id)
			applyVisual()
		})
		.done(function(xhr) {
			if ($(xhr).find('entry').length > 0) var channel =
				"entry"
			else var channel = 'item'
			if ($(xhr).find(channel).length < quit) quit = $(xhr)
				.find(channel).length - 1
			$(xhr).find(channel).each(function(i) {
				if (channel == 'entry') {
					var ref = $(this).find('link').attr(
						'href')
					var dst = uncoordinatedTimeZone($(
							this).find('updated')
						.text());
						var gen = new Date($(this).find(
						'updated').text()).getTime()
				} else if (channel = 'item') {
					var ref = $(this).find('link').text()
					if ($(this).find('pubDate').text()
						.length > 0) {
						var dst = uncoordinatedTimeZone($(
								this).find('pubDate')
							.text());
						var gen = new Date($(this).find(
								'pubDate').text())
							.getTime()
					} else if ($(this).find(
							'dc\\:date, date').text()) {
						var dst = uncoordinatedTimeZone($(
								this).find(
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
				if ($('#search input[type=text]').val() != 'Search') var search = $(
					'#search input[type=text]').val()
				else var search = menu[n].cat.toLowerCase()
				var share = window.location.origin + '/?q=' +
					search + '&' +
					menu[n].id.toLowerCase().replace(/\/|\.|\s/g, '+') + '#'  + gen
				if (contrast == true) share = share + '+1'
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
					"<div class='courtesy'><img class='id' src='" + img + "'>" +
					"<a onclick='event.stopPropagation();window.open(\"" +
					menu[n].ext + "\")'>" + menu[n].id
					.match(/([^\/]+)\/?([^\/]*)/)[2] +
					"</a></div>"
				if ($(this).find('title:first').text().length > 60) var more =
					"<div class='more' script='event.stopPropagation()'>more</div>"
				else var more = "<div class='more'></div>"
				if (src.match(/mp4|youtube/g)) {
					if ($(this).find(
							'media\\:statistics, statistics'
						).attr('views'))
						var views =
							"<div class='ago views' style='margin-bottom:25px'>views " +
							$(this).find(
								'media\\:statistics, statistics'
							).attr('views')
							.toString().replace(
								/\B(?=(\d{3})+(?!\d))/g,
								",") + "</div>"
					else var views = ''
					html =
						"<div id='yt' class='item' ext='" + ref.trim() + "'>" +
							"<i class='copy fa fa-ellipsis-h' style='top:10px;z-index:2' title='Copy URL'></i>" +
							"<div class='yt'>" + "<iframe src='" + src + "'></iframe>" + views + "</div>" +
							"<div class='tag'>" +i
								"<i class='ago fa fa-heart-o'></i>" +
								"<i class='ago fa fa-comment-o'></div>" +
								"<i class='ago fa fa-sticky-note-o' title='Copy Post'></i>" +
								"<i class='ago fa fa-bookmark-o' title='Copy Source'></i>" +
								"<input class='url' value='" + ref.trim() + "'>" +
								"<input class='share' value='" + share + "'>" +
								"<input class='source' value='" + src + "'>" +
							"</div>" +
							"<div class='pub' " +
								"text='" + escapeHtml($(this).find('title:first').text()) + "'>" +
								$(this).find('title:first').text().truncate(60, true) +
							"</div>" +
							more +
							"<div class='ago'>" + dst[0] + "</div>" +
							"<form class='addComment' action'#'>" +
								"<input class='comment' onclick='event.stopPropagation()' maxlength='60' placeholder='Add a Comment'>" +
							"</form>" +
						"</div>"
				} else {
					if (e == 'search') {
						var cat =
							"<div style='width:98%;font-size:10;margin:10px;text-transform:lowercase'>" +
							ref.match(/^(?:http:\/\/|www\.|https:\/\/)([^\/]+)/g) + "</div>"
					} else var cat = ''
					html = 
						"<div class='item " + i + "' item='" + i + "' ext='" + ref.trim() + "'>" +
						courtesy +
						"<i class='copy fa fa-ellipsis-h' title='Copy URL'></i>" +
						"<div class='image'>" +
							"<img id='" + i + "' style='display:none' src='" + src + "' class='img'>" +
							"<div class='tag'>" +
								"<div class='ago fa fa-heart-o'></div>" +
								"<div class='ago fa fa-comment-o'></div>" +
								"<div class='ago fa fa-sticky-note-o' title='Copy Post'></div>" +
								"<div class='ago fa fa-bookmark-o' title='Copy Source'></div>" +
							"</div>" +
							"<input class='url' value='" + ref.trim() + "'>" +
							"<input class='share' value='" + share + "'>" +
							"<input class='source' value='" + src + "'>" +
						"</div>" +
						"<div class='pub' text='" + escapeHtml($(this).find('title:first').text()) + "'>" +
							$(this).find('title:first').text().truncate(60, true) + "</div>" + more +
						"<div class='ago'>" + dst[0] + "</div>" +
						cat +
						"<form class='addComment' action'#'>" +
							"<input class='comment' onclick='event.stopPropagation()' maxlength='88' placeholder='Add a Comment'>" +
						"</form>" +
						"</div>"
				}
				pub.push({
					element: i,
					since: gen,
					post: html
				})
				pub.sort(function(a, b) {
					return b.since - a.since
				})
				$.each(pub, function(i) {
					if (pub[i].since == post)
						local = i
				})
			})
			$('#main').append(
				"<div class='center' style='display:none'><div class='quick'><div class='feed'></div>" +
				"<div class='left fa fa-angle-double-left' style='display:none'></div><div class='right fa fa-angle-double-right'>" +
				"</div></div><div class='channel'></div></div>" +
				"<div class='suggestions' style='visibility:hidden'><b>suggested</b><br></div>"
			)
			if ($.isNumeric(local)) {
				$('#main .center .channel').append(pub[local].post)
				if ($('#' + pub[local].element).length)
					imageResolution(pub[local].element)
			} else {
				$.each(pub, function(i, k) {
					if (i == quit) return false
					$('#main .center .channel').append(pub[i].post)
					if ($('#' + pub[i].element).length) {
						imageResolution(pub[i].element)
					}
				})
			}
			if (!id) id = menu.indexOf(menu[n])
			$('#main .center').append(
				"<div id='bottom' onclick='bottomResponse(" +
				id +
				")'><img class='bottom'></div>")
			$('#main').attr('tabindex', -1)
			progressResponse(true, 100)
			clearInterval(complete)
			suggestResponse(id)
			feedResponse(id)
			applyVisual()
		})

}
