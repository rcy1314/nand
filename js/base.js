var id
var img
var op = 0
var tap = 0
var object = []
var filter = []
var contrast = false
var category = 'Social'
var cors = 'https://acktic-github-io.herokuapp.com/'
var translations = ['Social', 'News', 'Media', 'Sports', 'Technology', 'World',
  'Youtube'
]
var fill ="<svg width='51px' height='50px' viewBox='0 0 51 50'>" +
          "    <rect class='first' y='0' width='2' height='50'>" +
          "        <animate attributeName='height' values='20;5;20' begin='0s' dur='1s' repeatCount='indefinite' />" +
          "        <animate attributeName='y' values='0;20;0' begin='0s' dur='1s' repeatCount='indefinite' />" +
          "    </rect> " +
          "    <rect class='second' x='19' y='0' width='2' height='50'>" +
          "        <animate attributeName='height' values='20;5;20' begin='0.4s' dur='1s' repeatCount='indefinite' />" +
          "        <animate attributeName='y' values='0;20;0' begin='0.2s' dur='1s' repeatCount='indefinite' />" +
          "    </rect>" +
          "<rect class='third' x='38' y='0' width='2' height='50'>" +
          "<animate attributeName='height' values='20;5;20' begin='0.6s' dur='1s' repeatCount='indefinite' />" +
          "<animate attributeName='y' values='0;20;0' begin='0.4s' dur='1s' repeatCount='indefinite' />" +
          "</rect>" +
          "</svg>"

var visual = function(n) {
  if (n == 'op') op = op != true
  else if (n == 1 || n == 0) op = n
  if (op == 1 || contrast == true) {
    $(
      '#container, .wrap, .fa-times-circle, .background, #main, #arm, #home, #option, #bottom, .fas,  #visit, .result, .air, .feed, .comment, .channel, .suggestions, .combine, .index, a'
    ).css({
      'background-color': '#000',
      'color': '#fff',
      'border': 'none',
      'box-shadow': 'none'
    })
    $('#top, .description, .comment').css({
      'border-bottom': '1px solid #333',
    })
    $('.index, .hover').addClass('contrast').removeClass('visual')
    $('#progressBar').removeClass('responseInvert').addClass(
      'responseOpposite')
    $('.fa-bookmark, .fa-comments, .fa-sticky-note').css('color', '#fff')
    $('.more').css('color', '#333')
    $('svg circle').css('stroke', 'url(#gradientOpposite)')
    $('.right, .left').css({
      'background-color': 'rgba(0,0,0,.4)',
    })
    $('.fa-angle-double-left, .fa-angle-double-right').css({
      'color': '#fff'
    })
    $('#top, #arm, input[type=text], .filter, .populate, .stats, .suggestions, .combine, .title, .category, .description, .type, .item, .ago').css({
      'background-color': '#0e0e0e',
      'border': '1px solid #000',
      'box-shadow': 'none',
      'color': '#fff'
    })
    $('.fas, input[type=text], .item .pub').css({
      'background-color': '#0e0e0e',
      'border': 'none'
    })
    $('.category').css('border','1px solid #000')
    $('.hover').addClass('contrast.hover')
    $('.first').css('cssText','fill: #ef4063 !important')
    $('.second').css('cssText','fill: #e557c6 !important')
    $('.third').css('cssText','fill: #ff6289 !important')
    $('#main, .listing').addClass('opposite').removeClass('invert')
    $('.bottom').attr('src', 'images/icon/opposite.png').css('filter', 'none')
    $('#favicon').attr('href', 'images/icon/opposite.png')
    $('#option .fa-circle-notch').toggleClass('fa-circle-notch fa-circle')
  } else if (op == 0 || contrast == false) {
    $(
      '#top, #arm, #container, .wrap, .fa-times-circle, .comment, .channel, .feed, .title, .item, .item .pub, .type, .ago, a'
    ).css({
      'background-color': '#fff',
      'color': '#666',
      'border': 'none'
    })
    $('input[type=text], .category').css({
      'background-color': '#fafafa',
      'border': '1px solid #ddd',
      'color': '#aaa'
    })
    $('#arm, #option, .index').css({
      'background-color': '#fff',
      'color': '#666'
    })
    $('.index, .hover').addClass('visual').removeClass('contrast')
    $('.background, #main, #visit, .air, .result, #bottom, .hover, .description, .channel, .stats, .suggestions, .combine, #bottom').css({
      'background-color': '#fafafa',
      'border': 'none',
      'color': '#666'
    })
    $(
      '#home, .fa-home, .fa-code, .fa-globe, .fa-git, .fa-terminal, .fa-circle-notch, .fa-circle'
    ).css({
      'background-color': 'transparent',
      'color': '#222'
    })
    $('.hover').addClass('visual.hover')
    $('.first').css('cssText','fill: #1fa2ff !important')
    $('.second').css('cssText','fill: #12d8fa !important')
    $('.third').css('cssText','fill: #06ffcb !important')
    $('#progressBar').removeClass('responseOpposite').addClass(
      'responseInvert')
    $('.fa-bookmark, .fa-comments, .fa-sticky-note').css('color', '#000')
    $('svg circle').css('stroke', 'url(#gradientInvert)')
    $('.right, .left').css({
      'background-color': 'rgba(255,255,255,.5)',
    })
    $('.fa-angle-double-left, .fa-angle-double-right').css({
      'color': '#666'
    })
    $('.filter, .populate, .description').css('background-color', '#efefef')
    $('.filter, .populate').css('border','1px solid #ddd')
    $('.feed, .item, .title').css('border', '1px solid #ddd')
    $('#top, .description, .index').css({
      'border-bottom': '1px solid #ccc'
    })
    $('.filter, .populate, .item, .feed').css('box-shadow', '1px 1px 6px #eee')
    $('#main, .listing').addClass('invert').removeClass('opposite')
    $('.bottom').attr('src', 'images/icon/transparent.png').css({
      'filter': 'brightness(50%) saturate(20%) invert(90%)'
    })
    $('#favicon').attr('href', 'images/icon/invert.png')
    $('#option .fa-circle').toggleClass('fa-circle-thin fa-circle')
  }
  $('.fa-gratipay').css('color', 'lightcoral')
}

var expand = function(n) {
  if ($('#' + n).hasClass('expand min')) {
    object.push({
      element: n,
      item: $('#' + n).parents('.item').width(),
      parent: $('#' + n).parent().width(),
      less: $('#' + n).width()
    })
    $('#' + n).removeClass('min').addClass('full').width('100%').parent()
      .css({
        'width': '100%',
        'left': '0'
      })
  } else if ($('#' + n).hasClass('expand full')) {
    object.forEach(function(e) {
      if (n == e.element && e.less) $('#' + n).removeClass('full').addClass(
        'min').width(e.less).parent().width(e.less)
    })
  }
}

var feed  = function(n) {
  if (n == 0) n = menu.indexOf(menu[Math.floor(Math.random() * menu.length - 1)])
  else if (n >= menu.length - 13) n = 1
  for (var i = n + 1; i <= n + 13; i++) {
    if (menu[i]) var img = 'images/png/' + menu[i].img + '.png'
    $('#main .center .feed').append("<div class='asset'>" + "<svg>" + "<defs>" +
      "<linearGradient id='gradientOpposite'>" +
      "<stop offset='0%' stop-color='#ef4063' />" +
      "<stop offset='99%' stop-color='#e557c6' />" + "</linearGradient>" +
      "<linearGradient id='gradientInvert'>" +
      "<stop offset='0%' stop-color='#F7797d' />" +
      "<stop offset='99%' stop-color='#fbd786' />" + "</linearGradient>" +
      "</defs>" +
      "<circle cx='36' cy='36' r='28' class='border'></circle></svg>" +
      "<img src='" + img + "' class='id " + menu.indexOf(menu[i]) +
      "' response='" + menu[i].id.toLowerCase().replace(/[\/|\.|\s|\-]/g, '-') +
      "' search='" + menu[i].cat.toLowerCase() + "'> " +
      "<a style='left:0;width:100%' ext='" + menu[i].ext +
      "' rel='nofollow'>" + String(menu[i].id.match(/[^\/]+$/g)).substring(0,
        9) + '...' + "</a>" + "</div>")
  }
}
var content  = function(n, recent, oldest, images, posts) {
    var img = 'images/png/' + menu[n].img + '.png'
    $('#main .stats').append(
      "<img src='" + img + "' class='id " + menu.indexOf(menu[n]) + "'>" +
      "<div class='info'>" +
      "<a ext='" + menu[n].ext +
      "' rel='nofollow'>" + menu[n].id.match(/[^\/]+$/g) + "</a><br><br>" +
        "<b>Most recent</b> " + recent +"<br><br>" +
        "<b>Oldest post </b> " + oldest + "<br><br>" +
        "<b>Images</b> " + images + "<br><br>" +
        "<b>Posts</b> " + posts + "</div>")
}
var response = function(passthrough, uri, n, bloat, post) {
  filter = []
  $('#main .result, #main .air, #main .center, #main .suggestions').remove()
  $('#main #visit').show()
  if ($('#main .result').length < 1) $('#main').append(
    "<div class='result' style='display:none'></div>")
  if (n) var n = n.replace(/(%20|\-|\_|\s|\+)/g, ' ')
  if (uri) uri = uri.replace(/(%20|\-|\_|\s|\+)/g, ' ')
  else uri = n
  $('#main').scrollTop(0)
  $(document).ready(function() {
    for (var i = 1; i <= menu.length - 1; i++) {
      if (menu[i].hash == n) {
        filter.push(menu.indexOf(menu[i]))
        write(menu.indexOf(menu[i]))
        exact = i
        id = i
      } else if (menu[i].id.toLowerCase().replace(/(\/|\.)/g, ' ') == n.toLowerCase() ||
          menu[i].id.toLowerCase().replace(/(\/|\.)/g, ' ') == uri.toLowerCase()) {
        filter.push(menu.indexOf(menu[i]))
        write(menu.indexOf(menu[i]))
        var exact = i
        id = i
      } else if (menu[i].id.toLowerCase().replace(/(\/|\.)/g, ' ').match(
          n.toLowerCase()) ||
          menu[i].id.toLowerCase().replace(/(\/|\.)/g, ' ').match(
              uri.toLowerCase())) {
        filter.push(menu.indexOf(menu[i]))
        write(menu.indexOf(menu[i]))
        id = i
      } else if (menu[i].des.toLowerCase().replace(/(\/|\.)/g, ' ').match(
          n.toLowerCase()) ||
          menu[i].des.toLowerCase().replace(/(\/|\.)/g, ' ').match(
              uri.toLowerCase())) {
        filter.push(menu.indexOf(menu[i]))
        write(menu.indexOf(menu[i]))
      } else if (menu[i].cat.toLowerCase().match(n) || menu[i].cat.toLowerCase().match(uri)) {
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
    if (bloat == true) {
      populate(id)
      air(id)
    }
    progress(true, 100)
  })
}
var image = function(n, src) {
  var large  = 2800
  var mobile = 1281
  var minimum = 299
  var maximum = 799
  $('#' + n).on('error', function() {
    $(this).parents('.classic').find('.tag, .fill, .header').css('display',
      'none').parents('.item').find('.pub, .ago').css('display','block')
  }).on('load', function() {
    if ($('#home').css('display') == 'none'
        && $('#' + n).get(0).naturalWidth > minimum) {
      $('#' + n).width('100%').addClass('expand')
      .parents('.item')
      .find('.ago')
      .css('display','inline-block')
      .parents('.item').find('.fill').html(fill)
      if (category == 'Social')
      comment(n)
   } else if ($('#' + n).get(0).naturalWidth < maximum
      && $('#home').css('display') == 'none') {
    $('#' + n).width(120).addClass('expand').css('margin','10px')
    .parents('.item')
    .find('.classic').css({
      'display': 'flex',
      'align-items': 'center'
    }).find('.header, .tag, .addComment').css('display', 'none')
    .siblings('.fill').css('left', '18px').html(fill)
    .parents('.item').find('.ago').css('display','inline-block')
  } else if ($('#' + n).hasClass('guide') &&
           $('#' + n).get(0).naturalHeight > mobile || $('#' + n)
           .get(0).naturalHeight > maximum && $('#' + n)
           .get(0).naturalWidth < maximum) {
             $('#' + n).width('100%').addClass('expand')
             .parents('.sticky').width('50%')
             $('#' + n).parents('.sticky')
             .find('.fill')
             .html(fill)
   } else if ($('#' + n).get(0).naturalHeight > mobile || $('#' + n)
        .get(0).naturalHeight > maximum && $('#' + n)
        .get(0).naturalWidth < maximum) {
      $('#' + n).addClass('expand min').width('100%').parents('.item')
        .find('.image').css({
        'margin': '0 auto',
        'width': '45%',
        'left': '15px'
      }).siblings('.fill').html(fill)
      .parents('.item').find('.ago').css('display','inline-block')
              if (category == 'Social')
              comment(n)
      } else if ($('#' + n).hasClass('guide') &&
        $('#' + n).get(0).naturalWidth > minimum) {
              $('#' + n).width('100%').addClass('expand')
              .parents('.sticky').width('65%')
              .parents('.item')
              .find('.ago')
              .css('display','inline-block')
              $('#' + n).parents('.sticky').find('.fill')
              .html(fill)
    } else if ($('#' + n).get(0).naturalWidth > minimum) {
      $('#' + n).width('100%').addClass('expand')
      .parents('.item')
      .find('.ago')
      .css('display','inline-block')
      .parents('.item').find('.fill').html(fill)
      if (category == 'Social')
      comment(n)
    } else if ($('#' + n).get(0).naturalWidth < maximum) {
      $('#' + n).width(120).addClass('expand').css('margin','10px')
      .parents('.item')
      .find('.classic').css({
        'display': 'flex',
        'align-items': 'center'
      }).find('.header, .tag, .addComment').css('display', 'none')
      .siblings('.fill').css('left', '18px').html(fill)
      .parents('.item').find('.ago').css('display','none')
    }
    $('#' + n)
    .parents('.item, #guide').find('.image, .img, .header, .pub, .tag').css('display', 'block')
    $('#' + n)
    .parents('.guide').find('.ago, .wrap').css('display', 'inline-block')
    $('#' + n)
    .parents('.item, #guide')
    .find('.fill')
    .remove()
  visual()
}).attr('src', src).parent().siblings('.fill').html(fill)
}
var list = function(n) {
  $('#arm #search #match .listing').empty()
  for (var i = menu.length - 1; i >= 1; i--) {
    if (menu[i].des.toLowerCase().match(n) || menu[i].cat.toLowerCase().match(
        n)) {
      $('#arm #search #match .listing').prepend("<div class='index' index='" +
      menu.indexOf(
          menu[i]) + "' tabIndex='-1' response='" + menu[i].id.toLowerCase()
        .replace(/\s|\/|\./g, '-') + "' search='" + menu[i].cat.toLowerCase() +
        "'>" + "<img class='type' src='" + "images/png/" + menu[i].img +
        '.png' + "'>" + "<div class='text'>&emsp;<b>" + menu[i].cat +
        "</b>" + "<br>&emsp;" + menu[i].id.match(/[^\/]+$/g) + "</div>" +
        "</div>")
      if ($('#search .listing .' + i).length > 1) $('#search .listing .' + i +
        ':last').remove()
    }
  }
  if (!$('#arm #search #match').is(':visible')) {
    setTimeout(function() {
      $('#arm #search #match').show()
    }, 50)
  }
}
var comment = function (n) {
	var emoji = []
	var comment = []
	var e = Math.floor(Math.random() * (3 - 1) + 1)
	for (i = 0; i <= e; i++) {
		comment.push(emojis.indexOf(emojis[Math.floor(Math.random() * emojis.length - 1)]))
	}
	$.each(comment, function(k, i) {
		emoji.push('&ensp;' + emojis[comment[k]] + '&ensp;')
	})
//			$.ajax({
//			  url: cors + 'https://randomuser.me/api/',
//			  dataType: 'json',
//			  success: function(api) {
				$('.' + n + ' .pub:last').html($('.' + n + ' .pub:last').text() +
						//"<div class='add' style='width:100%'><b>" +
//              api.results[0].email.replace(/\@.+/g, '') + '.' +
//							api.results[0].location.state.toLowerCase().replace(/\s/g, '') +
//							Math.floor(Math.random() * (99 - 1 + 1) + 1) + '</b> ' +
							emoji.join('')
						//"</div>"
          )
//				}
//			})
			$('.' + n + ' .addComment .comment').val('')
			visual()
}
var populate = function(n) {
  if (!$.isNumeric(n)) {
    filter = []
    var cat = n
  }
  else cat = menu[id].cat
  $('#main .air, #main .center, #main .content').remove()
  if ($('#main .result').length < 1) $('#main').append(
    "<div class='result' style='display:none'></div>")
  for (var i = 1; i <= menu.length - 1; i++) {
    if ($.inArray(menu.indexOf(menu[i]), filter) == -1 && cat == menu[i].cat) {
      var tag = menu[i].id.match(/[^\/]+$/g)
      var hilight = menu[i].des.replace(tag, "<b>" + tag + '</b>')
      var img = 'images/png/' + menu[i].img + '.png'
      $('#main .result').append("<div class='populate' index='" + menu.indexOf(menu[i]) +
        "' response='" + menu[i].id.toLowerCase().replace(/[\/|\.|\s|\-]/g,
          '-') + "'> " + "<div class='pub'><div class='category'>" + menu[i]
        .cat + "</div><a class='title' ext='" + menu[i].ext + "'>" + menu[i]
        .id.match(/[^\/]+$/g) + "</a></div>" +
        "<div class='description'>&emsp;" + hilight + "</div>" +
        "<img class='id' style='top:10px' src='" + img + "'>" + "</div>")
    }
  }
  air(id)
}
var air = function(n) {
  if (!$.isNumeric(n)) var cat = n
  else if (!n) cat = menu[id].cat
  else cat = menu[n].cat
  if ($('#main .air').length < 1) $('#main').prepend(
    "<div class='air' style='display:none'></div>")
  for (var i = 1; i < menu.length - 1; i++) {
    if (cat == menu[i].cat) {
      var tag = menu[i].id.match(/[^\/]+$/g)
      var hilight = menu[i].des.replace(tag, "<b>" + tag + '</b>')
      var img = 'images/png/' + menu[i].img + '.png'
      $('#main .air').append("<div class='populate' + index='" + menu.indexOf(menu[i]) +
        "' response='" + menu[i].id.toLowerCase().replace(/[\/|\.|\s|\-]/g,
          '-') + "'> " + "<div class='pub'><div class='category'>" + menu[i]
        .cat + "</div><a class='title' ext='" + menu[i].ext +
        "' rel='nofollow'>" + menu[i].id.match(/[^\/]+$/g) + "</a></div>" +
        "<div class='description'>&emsp;" + hilight + "</div>" +
        "<img class='id' style='top:10px' src='" + img + "'>" + "</div>")
    }
  }
}
var progress = function(complete, n) {
  $(document).ready(function() {
    $('#progressBar').addClass('response').width(n + '%')
    if (complete == true) {
      $('#progressBar').on(
        'transitionend webkitTransitionEnd oTransitionEnd',
        function(e) {
          $(this).removeClass('response').width(0)
          $('#main #visit, #arm #search #match').hide()
          if ($('#main .content').length == 1) $(
            '#main .stats').css('visibility', 'visible')
          if ($('#main .content').length == 1) $(
            '#main .stats').css('visibility', 'visible')
          if ($('#main .suggestions').length == 1) $(
            '#main .suggestions').css('visibility', 'visible')
          if ($('#main .result').length == 1) $('#main .result').show()
          if ($('#main .center').length == 1) $('#main .center').show()
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
var suggest = function(n) {
  var dupe = []
  for (var i = 0; i <= 9; i++) {
    var e = menu.indexOf(menu[Math.floor(Math.random() * menu.length - 1)])
    dupe.push(e)
    if (menu[e] && e != 0)
    var img = 'images/png/' + menu[e].img + '.png'
      if ($.inArray(dupe, e) === -1 && menu[e]) $('#main .suggestions').append(
        "<div class='combine'>" +
        "<img src='" + img + "' class='id " + menu.indexOf(menu[n]) + "'>" +
        "<div title='" + menu[e].id.replace(/\//g,
          ' ') + "' response='" + menu[e].id.toLowerCase().replace(
          /(\/|\.|\s)/g, '-') + "' search='" + menu[e].cat.toLowerCase() +
        "'>" + menu[e].id.match(/[^\/]+$/g) + "<br><b>" +
        menu[e].cat + "</b></div>" + "</div>")
    if (i == 9) return false
  }
}
var write = function(n) {
  if ($('#main .result').length < 1) $('#main').append(
    "<div class='result' style='display:none'></div>")
  var tag = menu[n].id.match(/[^\/]+$/g)
  var hilight = menu[n].des.replace(tag, "<b>" + tag + '</b>')
  if (n != id || n != filter[filter.length - 1] || filter.length >= 1) $(
    '#main .result').append("<div class='filter' index='" + menu.indexOf(menu[n]) +
    "' response='" + menu[n].id.toLowerCase().replace(/[\/|\.|\s|\-]/g, '-') +
    "' search='" + menu[n].cat.toLowerCase() + "'> " +
    "<div class='pub'><div class='category'>" + menu[n].cat +
    "</div><a class='title' ext='" + menu[n].ext + "'>" + menu[n].id.match(
      /[^\/]+$/g) + "</a></div>" + "<div class='description'>&emsp;" +
    hilight + "</div>" + "<img class='id' style='top:10px' src='" +
    "images/png/" + menu[n].img + ".png'>" + "</div>")
}
var xml = function(e, s, n, post) {
  id = n
  obj = []
  var local
  var pub = []
  category = menu[n].cat
  var img = 'images/png/' + menu[n].img + '.png'
  if (e == 'search') {
    uri = cors + menu[n].uri + s + '&format=RSS'
  } else uri = cors + menu[n].uri
  if (filter.length > 1) var next = filter.indexOf(menu.indexOf(menu[n]))
  else var next = n
  if (filter[next + +1]) var plus = filter[next + +1]
  else if (n == menu.length - 1) var plus = 1 + +1
  else var plus = n + +1
  if (filter[next - +1]) var back = filter[next - +1]
  else if (n == 1) var back = menu.length - 1
  else var back = n - +1
  document.title = menu[n].id.replace(/(\/|\.)/g, ' ').capitalize()
  progress(false, Math.floor(Math.random() * (55 - 25 + 1) + 25))
  var complete = setInterval(function() {
    $('#progressBar').width($('#progressBar').width() + Math.floor(Math.random() *
      (5 - 0 + 1) + 0))
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
  }).fail(function() {
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
  }).done(function(xhr) {
    if ($(xhr).find('entry').length > 0) var channel = "entry"
    else var channel = 'item'
    quit = $(xhr).find(channel).length - 2
    $(xhr).find(channel).each(function(i) {
      if (channel == 'entry') {
        var ref = $(this).find('link').attr('href')
        var dst = zulu($(this).find('updated').text());
        var since = new Date($(this).find('updated').text()).getTime()
        var gen = $(this).find('updated').text().toLocaleString()
        gen = parseInt(gen.match(/([0-9]+\:[0-9]+\:[0-9]+)/g).toString()
          .replace(/\:/g, '')).toString(36)
      } else if (channel = 'item') {
        var ref = $(this).find('link').text()
        if ($(this).find('pubDate').text().length > 0) {
          var dst = zulu($(this).find('pubDate').text());
          var since = new Date($(this).find('pubDate').text())
          var gen = new Date($(this).find('pubDate').text()).toLocaleString()
          gen = parseInt(gen.match(/([0-9]+\:[0-9]+\:[0-9]+)/g).toString()
            .replace(/\:/g, '')).toString(36)
        } else if ($(this).find('dc\\:date, date').text()) {
          var dst = zulu($(this).find('dc\\:date, date').text());
          var gen = new Date($(this).find('dc\\:date, date').text()).getTime()
        } else {
          var dst = []
          dst.push('')
        }
      }
      if ($('#search input[type=text]').val() != 'Search') var search =
        $('#search input[type=text]').val()
      else var search = menu[n].cat.toLowerCase()
      var share = menu[n].hash
      var ts = (gen).toString(36)
      share = window.location.origin + '/?' + share + ts
      if ($(this).find('content').text().match(
          /https:\/\/i\.redd\.it\/.+?(gif|png|jpg)/g)) {
        src = String($(this).find('content').text().match(
          /https:\/\/i\.redd\.it\/.+?(gif|png|jpg)/g))
      } else if ($(this).find('content').text().match(
          /https:\/\/.\.thumbs\.redditmedia\.com\/.+?(gif|png|jpg)/g)) {
        src = String($(this).find('content').text().match(
          /https:\/\/.\.thumbs\.redditmedia\.com\/.+?(gif|png|jpg)/g
        ))
      } else if ($(this).find('content').text().match(
          /src=['"]https:\/\/.+?(gif|png|jpg)['"]/)) {
        src = String($(this).find('content').text().match(
          /src=['"](.*?)['"]/)[1])
      } else if ($(this).find('link').attr('href')) {
        if ($(this).find('link').attr('href').match(/youtube/)) src =
          'https://www.youtube.com/embed/' + String($(this).find(
            'link').attr('href').split('=')[1])
        else src = String($(this).find('link').attr('href'))
      } else if ($(this).find('content').text().match(
          /src=['"]https:\/\/.+?(gif|png|jpg)['"]/)) {
        src = String($(this).find('content').text().match(
          /src=['"](.*?)['"]/)[1])
      } else if ($(this).find('link').attr('href')) {
        src = String($(this).find('link').attr('href'))
      } else if ($(this).find('media\\:thumbnail, thumbnail').attr(
          'url')) {
        src = String($(this).find('media\\:thumbnail, thumbnail').attr(
          'url'))
      } else if ($(this).find('link').text().match(
          /https:\/\/.+?(gif|png|jpg)/)) {
        src = String($(this).find('link').text().match(
          /https:\/\/.+?(gif|png|jpg)/)[0])
      } else if ($(this).find('image').find('link, url').text().match(
          /https:\/\/.+?(gif|png|jpg)/)) {
        src = String($(this).find('image').find('link, url').text().match(
          /https:\/\/.+?(gif|png|jpg)/)[0])
      } else if ($(this).find('enclosure').attr('url')) {
        src = String($(this).find('enclosure').attr('url'))
      } else if ($(this).find('media\\:content, content').attr('url')) {
        src = String($(this).find('media\\:content, content').attr(
          'url'))
      } else if ($(this).find('content\\:encoded').text().match(
          /img.+src=['"](.*?)['"]/)) {
        src = String($(this).find('content\\:encoded').text().match(
          /img.+src=['"](.*?)['"]/)[1])
      } else if ($(this).find('description').text().toLowerCase().match(
          /src=['"](.*?)['"]/)) {
        src = String($(this).find('description').text().toLowerCase()
          .match(/src=['"](.*?)['"]/)[1])
      } else if ($(this).find('image').text()) {
        src = String($(this).find('image').text())
      } else src = ''
      if (src.match(/comments|default|feeds|fsdn|undefined/)) src =
        ''
      if (!src.match(/https?:\/\//)) src = ''
      if (src == '') courtesy = ''
      else courtesy =
        "<div class='courtesy' style='float:left'><img class='id' src='" +
        img + "'>" +
        "<a onclick='event.stopPropagation();window.open(\"" + menu[n]
        .ext + "\")'><b>" + menu[n].id.match(/([^\/]+)$/g) +
        "</b></a></div>"
      if ($(this).find('title:first').text().length > 125) var more =
        "<div class='more'>more</div>"
      else var more = ""
      if (src.match(/youtube/g)) {
        if ($(this).find('media\\:statistics, statistics').attr(
            'views')) var views = "<div class='ago views'>views " + $(
          this).find('media\\:statistics, statistics').attr(
          'views').toString().replace(/\B(?=(\d{3})+(?!\d))/g,
          ",") + "</div>"
        else var views = ''
        html = "<div id='yt' class='item' ext='" + ref.trim() + "'>" +
          "<div class='header'>" + courtesy +
          "<div class='copy fa-ellipsis-h' title='Copy URL'></div>" +
          "</div>" + "<div class='yt'>" + "<iframe src='" + src +
          "'></iframe>" + views + "</div>" + "<div class='tag'>" +
          "<div class='ago fa-heart-o'></div>" +
          "<div class='ago fa-comment-o'></div>" +
          "<div class='ago fa-sticky-note-o' title='Copy Post'></div>" +
          "<div class='ago fa-bookmark-o' title='Copy Source'></div>" +
          "<input class='url' value='" + ref.trim() + "'>" +
          "<input class='share' value='" + share + "'>" +
          "<input class='source' value='" + src + "'>" + "</div>" +
          "<div class='pub' " + "text='" + escape($(this).find(
            'title:first').text()) + "'>" + escape($(this).find(
            'title:first').text().truncate(125, true)) + more +
          "</div>" + "<div class='ago'>" + dst[0] + "</div>" +
          "<form class='addComment' action'#'>" +
          "<input class='comment' onclick='event.stopPropagation()' maxlength='60' placeholder='Add a Comment'>" +
          "<div class='post'><b>Post</b></div>" + "</form>" +
          "</div>"
      } else {
        if (e == 'search') {
          var cat =
            "<div style='width:98%;font-size:10;margin:10px;text-transform:lowercase'>" +
            ref.match(/^(?:http:\/\/|www\.|https:\/\/)([^\/]+)/g) +
            "</div>"
        } else var cat = ''
        html = "<div class='item " + i + "' item='" + i + "' ext='" +
          ref.trim() + "'>" + "<div class='classic'>" +
          "<div class='header'>" + courtesy +
          "<div class='copy fa-ellipsis-h' title='Copy URL'></div>" +
          "</div><div class='fill'>" +
          "</div>" +
          "<div class='image' style='display:none'>" + "<img id='" + i +
          "' class='img'>" + "<div class='tag'>" +
          "<div class='ago fa-heart-o'></div>" +
          "<div class='ago fa-comment-o'></div>" +
          "<div class='ago fa-sticky-note-o' title='Copy Post'></div>" +
          "<div class='ago fa-bookmark-o' title='Copy Source'></div>" +
          "</div>" + "</div>" + "<div class='wrap'>" +
          "<div class='pub' style='display:none' text='" + escape($(this).find(
            'title:first').text()) + "'>" + escape($(this).find(
            'title:first').text().truncate(125, true)) + more +
          "</div>" + "<div class='ago' style='display:none'>" + dst[0] + "</div>" +
          "</div>" + "<input class='url' value='" + ref.trim() + "'>" +
          "<input class='share' value='" + share + "'>" +
          "<input class='source' value='" + src + "'>" + cat +
          "<form class='addComment' action'#'>" +
          "<input class='comment' onclick='event.stopPropagation()' maxlength='88' placeholder='Add a Comment'>" +
          "<div class='post'><b>Post</b></div>" + "</form>" +
          "</div>" + "</div>"
      }
      pub.push({
        element: i,
        title: escape($(this).find('title:first').text()),
        courtesy: courtesy,
        since: since,
        share: share,
        more: more,
        post: html,
        ref: ref.trim(),
        src: src,
        dst: dst[0],
        gen: gen
      })
      pub.sort(function(a, b) {
        return b.since - a.since
      })
      $.each(pub, function(i) {
        if (parseInt(pub[i].gen, 36) == post) local = i
      })
    })
    $('#main').append("<div class='center' style='display:none'>" +
      "<div class='quick'>" + "<div class='feed'></div>" +
      "<div class='left' style='display:none'><div class='fa-angle-double-left'></div></div>" +
      "<div class='right'><div class='fa-angle-double-right'></div>" +
      "</div>" + "</div>" + "<div class='channel'></div></div>" +
      "<div class='content' style='visibility:hidden'><div class='stats' style='visibility:hidden'></div>" +
      "<div class='suggestions' style='visibility:hidden'><b>suggested</b>&ensp;for you&ensp;...<br></div></div>"
    )
    if ($.isNumeric(local)) {
      $('#guide').append("<div class='fa fa-times-circle'></div><div class='blur'>" +
      "</div><div class='sticky'>" +
      "" +
      "<div class='item " + local + "' item='" + local + "' ext='" + pub[local].ref + "'>" +
      "<div class='image'><div class='fill'></div>" +
      "<img class='img guide' style='display:none' id='" + pub[local].element + "'>" +
      "</div></div>" + "<div class='wrap' style='display:none'>" +
      "<div class='header' style='display:none'>" + pub[local].courtesy +
      "<div class='copy fa-ellipsis-h' title='Copy URL'></div>" +
      "</div>" +
      "<div class='pub' style='display:none' text='" + pub[local].title +
      "'>" + pub[local].title.truncate(125, true) + pub[local].more +
      "</div>" + "<div class='ago ts' style='display:none'>" + pub[local].dst + "</div>" +
      "<input class='url' value='" + pub[local].ref + "'>" +
      "<input class='source' value='" + pub[local].src + "'>" +
      "<div class='tag' style='display:none'>" +
      "<div class='ago fa-heart-o'></div>" +
      "<div class='ago fa-comment-o'></div>" +
      "<div class='ago fa-bookmark-o' title='Copy Source'></div>" +
      "</div>" +
      "</div>")
      image(pub[local].element, pub[local].src)
    } else $('#guide').remove()
      $.each(pub, function(i, k) {
        if (i == quit) return false
        if ($.isNumeric(local) && pub[local].element != pub[i].element) $('#main .center .channel').append(pub[i].post)
        else if (!$.isNumeric(local)) $('#main .center .channel').append(pub[i].post)
        image(pub[i].element, pub[i].src)
      })

    if (!id) id = menu.indexOf(menu[n])
    var posts = pub.length
    var recent = pub[0].dst
    var oldest = pub[pub.length - 2].dst
    var images = $('#main .center .channel .item .image img.img[src!=""]').length
    $('#main .center').append(
      "<div id='bottom'><button class='previous' index='" + menu.indexOf(menu[back]) + "'>Previous</button>&ensp;" +
      menu[back].id.match(/[^\/]+$/g) + "<img class='bottom'>" +
      menu[plus].id.match(/[^\/]+$/g) + "&ensp;<button class='next' index='" + menu.indexOf(menu[plus]) + "'>Next</button></div>")
    content(n, recent, oldest, images, posts)
    clearInterval(complete)
    progress(true, 100)
    suggest(id)
    feed(id)
  })
}
