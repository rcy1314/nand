var id
var img
var op = 0
var tap = 0
var object = []
var filter = []
var contrast = false
var category = 'Social'
var cors = 'https://acktic-github-io.herokuapp.com/'
var translations = ['Social', 'News', 'Media', 'Sports', 'Technology', 'World', 'Youtube']

var fill ="<svg width='51px' height='50px' viewBox='0 0 51 50'>" +
          "    <rect class='first' y='0' width='2' height='50'>" +
          "        <animate attributeName='height' values='20;5;20' begin='0s' dur='1s' repeatCount='indefinite' />" +
          "        <animate attributeName='y' values='0;20;0' begin='0s' dur='1s' repeatCount='indefinite' />" +
          "    </rect> " +
          "    <rect class='second' x='19' y='0' width='2' height='50'>" +
          "        <animate attributeName='height' values='20;5;20' begin='0.4s' dur='1s' repeatCount='indefinite' />" +
          "        <animate attributeName='y' values='0;20;0' begin='0.2s' dur='1s' repeatCount='indefinite' />" +
          "    </rect>" +
          "    <rect class='third' x='38' y='0' width='2' height='50'>" +
          "        <animate attributeName='height' values='20;5;20' begin='0.6s' dur='1s' repeatCount='indefinite' />" +
          "        <animate attributeName='y' values='0;20;0' begin='0.4s' dur='1s' repeatCount='indefinite' />" +
          "    </rect>" +
          "</svg>"

var expand = function(n) {

  if ($('#' + n).hasClass('expand min')) {
    object.push({
      item: $('#' + n).parents('.item').width(),
      parent: $('#' + n).parent().width(),
      less: $('#' + n).width(),
      element: n
    })
    $('#' + n).removeClass('min').addClass('full').width('100%').parent()
      .css({
        'width': '100%',
        'left': '0'
      })
  } else if ($('#' + n).hasClass('expand full')) {
    object.forEach(function(e) {
      if (n == e.element && e.less)
        $('#' + n).removeClass('full').addClass('min').width(e.less).parent().width(e.less)
    })
  }

}

var feed  = function(n) {

  if (n == 0) n = menu.indexOf(menu[Math.floor(Math.random() * menu.length - 1)])
  else if (n >= menu.length - 13) n = 1
  for (var i = n + 1; i <= n + 13; i++) {
    if (menu[i]) var img = 'images/png/' + menu[i].img + '.png'
    $('#main .center .feed').append(
      "<div class='asset'>" +
      "<svg>" +
      "  <defs>" +
      "    <linearGradient id='gradientOpposite'>" +
      "      <stop offset='0%' stop-color='#ef4063' />" +
      "      <stop offset='99%' stop-color='#e557c6' />" +
      "    </linearGradient>" +
      "    <linearGradient id='gradientInvert'>" +
      "      <stop offset='0%' stop-color='#F7797d' />" +
      "      <stop offset='99%' stop-color='#fbd786' />" +
      "    </linearGradient>" +
      "  </defs>" +
      "  <circle cx='36' cy='36' r='28' class='border'></circle>" +
      "</svg>" +
      "<img src='" + img + "' class='id " + menu.indexOf(menu[i]) + "'" +
      "  response='" + menu[i].id.toLowerCase().replace(/\/|\.|\s|\-/g, '-') + "'" +
      "  search='" + menu[i].cat.toLowerCase() + "'> " +
      "<a style='left:0;width:100%' ext='" + menu[i].ext + "'>" +
        String(menu[i].id.match(/[^\/]+$/g)).substring(0,9) +
        '...' +
      "</a>" +
      "</div>"
    )
  }

}

var content  = function(n, recent, oldest, images, posts, queue) {

    var img = 'images/png/' + menu[n].img + '.png'
    $('#main .stats').append(
      "<img src='" + img + "' class='id " + menu.indexOf(menu[n]) + "'>" +
      "<div class='info'>" +
      "  <a ext='" + menu[n].ext + "'>" +
        menu[n].id.match(/[^\/]+$/g) +
      "  </a>" +
      "  <br><br>" +
      "  <b>Most recent</b> " + recent +"<br><br>" +
      "  <b>Oldest post </b> " + oldest + "<br><br>" +
      "  <b>Images</b> " + images + "<br><br>" +
      "  <b>Posts</b> " + posts + "<br><br>" +
      "  <b>Queue</b> <div class='queue'>" + queue + "</div>" +
      "</div>"
    )

}

var list = function(n) {

  $('#arm #search #match .listing').empty()
  for (var i = menu.length - 1; i >= 1; i--) {
    if (menu[i].des.toLowerCase().match(n) || menu[i].cat.toLowerCase().match(n)) {
      $('#arm #search #match .listing').prepend(
        "<div class='index' index='" + menu.indexOf(menu[i]) + "'" +
        "  tabIndex='-1'" +
        "  response='" + menu[i].id.toLowerCase().replace(/\s|\/|\./g, '-') + "'" +
        "  search='" + menu[i].cat.toLowerCase() + "'>" +
        "<img class='type' src='" + "images/png/" + menu[i].img + '.png' + "'>" +
        "<div class='text'>&emsp;<b>" + menu[i].cat + "</b>" +
        "<br>&emsp;" +
        menu[i].id.match(/[^\/]+$/g) + "</div>" +
        "</div>"
      )
      if ($('#search .listing .' + i).length > 1) $('#search .listing .' + i + ':last')
        .remove()
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
	$('.' + n + ' .pub:last').html($('.' + n + ' .pub:last').html() + emoji.join(''))
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
  if ($('#main .result').length < 1)
    $('#main').append(
      "<div class='result' style='display:none'></div>"
    )
  for (var i = 1; i <= menu.length - 1; i++) {
    if ($.inArray(menu.indexOf(menu[i]), filter) == -1 && cat == menu[i].cat) {
      var tag = menu[i].id.match(/[^\/]+$/g)
      var hilight = menu[i].des.replace(tag, "<b>" + tag + '</b>')
      var img = 'images/png/' + menu[i].img + '.png'
      $('#main .result').append(
        "<div class='populate' index='" + menu.indexOf(menu[i]) + "'" +
        "  response='" + menu[i].id.toLowerCase().replace(/\/|\.|\s|\-/g, '-') + "'> " +
        "  <div class='pub'>" +
        "    <div class='category'>" + menu[i].cat + "</div>" +
        "    <a class='title' ext='" + menu[i].ext + "'>" +
               menu[i].id.match(/[^\/]+$/g) +
        "    </a>" +
        "  </div>" +
        "  <div class='description'>&emsp;" + hilight + "</div>" +
        "  <img class='id' style='top:10px' src='" + img + "'>" +
        "</div>"
      )
    }
  }
  air(id)

}

var air = function(n) {

  if (!$.isNumeric(n)) var cat = n
  else if (!n) cat = menu[id].cat
  else cat = menu[n].cat
  if ($('#main .air').length < 1)
    $('#main').prepend(
      "<div class='air' style='display:none'></div>"
    )
  for (var i = 1; i < menu.length - 1; i++) {
    if ($.inArray(menu.indexOf(menu[i]), filter) == -1 && cat == menu[i].cat) {
      var tag = menu[i].id.match(/[^\/]+$/g)
      var hilight = menu[i].des.replace(tag, "<b>" + tag + '</b>')
      var img = 'images/png/' + menu[i].img + '.png'
      $('#main .air').append(
        "<div class='populate' + index='" + menu.indexOf(menu[i]) + "'" +
        "  response='" +
             menu[i].id.toLowerCase().replace(/[\/|\.|\s|\-]/g, '-') + "'> " +
        "  <div class='pub'>" +
        "    <div class='category'>" + menu[i].cat + "</div>" +
        "    <a class='title' ext='" + menu[i].ext + "'>" +
               menu[i].id.match(/[^\/]+$/g) +
        "    </a>" +
        "  </div>" +
        "  <div class='description'>&emsp;" + hilight + "</div>" +
        "  <img class='id' style='top:10px' src='" + img + "'>" +
        "</div>"
      )
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
        "  <img src='" + img + "' class='id " + menu.indexOf(menu[n]) + "'>" +
        "  <div title='" + menu[e].id.replace(/\//g, ' ') + "'" +
        "    response='" + menu[e].id.toLowerCase().replace(/(\/|\.|\s)/g, '-') + "'" +
        "    search='" + menu[e].cat.toLowerCase() + "'>" +
             menu[e].id.match(/[^\/]+$/g) +
             "<br>" + "<b>" + menu[e].cat + "</b>" +
        "  </div>" +
        "</div>"
      )
    if (i == 9) return false
  }

}

var write = function(n) {

  if ($('#main .result').length < 1)
    $('#main').append(
      "<div class='result' style='display:none'></div>"
    )
  var tag = menu[n].id.match(/[^\/]+$/g)
  var hilight = menu[n].des.replace(tag, "<b>" + tag + '</b>')
  if (n != id || n != filter[filter.length - 1] || filter.length >= 1)
    $('#main .result').append(
      "<div class='filter' " +
      "  index='" + menu.indexOf(menu[n]) + "'" +
      "  response='" + menu[n].id.toLowerCase().replace(/[\/|\.|\s|\-]/g, '-') + "'" +
      "  search='" + menu[n].cat.toLowerCase() +
      "'> " +
      "  <div class='pub'>" +
      "    <div class='category'>" + menu[n].cat + "</div>" +
      "    <a class='title' ext='" + menu[n].ext + "'>" +
             menu[n].id.match(/[^\/]+$/g) +
      "    </a>" +
      "  </div>" +
      "  <div class='description'>&emsp;" + hilight + "</div>" +
      "<img class='id' style='top:10px' src='" + "images/png/" + menu[n].img + ".png'>" +
      "</div>"
    )

}
