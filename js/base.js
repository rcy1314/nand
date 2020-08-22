var id
var img
var post
var op = 0
var tap = 0
var dupe = []
var mouseasset
var filter = []
var object = []
var contrast = false
var enableDrag = false
var category = 'Social'
var cors = 'https://acktic-github-io.herokuapp.com/'
var translations = ['Social', 'News', 'Media', 'Sports', 'Technology', 'World', 'Youtube']

var tag = "  <div class='tag' style='display:none'>" +
          "    <div class='images fa-heart-o'></div>" +
          "    <div class='images fa-comment-o'></div>" +
          "    <div class='images fa-sticky-note-o' title='Copy Post'></div>" +
          "    <div class='images fa-bookmark-o' title='Copy Source'></div>" +
          "  </div>"

var svg = "<svg>" +
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
          "  <circle></circle>" +
          "</svg>"


var fill ="<svg width='51px' height='50px' viewBox='0 0 51 50'>" +
          "    <rect class='one' y='0' width='2' height='50'>" +
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

var select = function(n) {

  $.each(translations, function(i) {
  $('#main .translation')
    .append(
      "<div class='select' response='" + translations[i] + "'>" +
      "  <div class='radial'></div>" +
      "  <img class='type' src='images/" + translations[i] + '.png' + "'>" +
      "  <div class='text'>&emsp;<b>" + translations[i] + "</b>" +
      "    <br>&emsp;" + translations[i].grep() + " feeds" +
      "  </div>" +
      "</div>"
    )
  })

}

var guide = function(n, ref, element, courtesy, title, dst, share, src) {

  $('#guide').empty().css('display','flex').append(
    "<svg class='checkmark' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'>" +
    "  <circle class='checkmark__circle' cx='26' cy='26' r='25' fill='none' />" +
    "  <path class='checkmark__check' fill='none' d='M16 16 36 36 M36 16 16 36' />" +
    "</svg>" +
    "<div class='blur'></div>" +
    "<div class='sticky'>" +
    "  <div class='fill'></div>" +
    "  <div class='item " + n + "' item='" + n + "' ext='" + ref + "'>" +
    "    <div class='image'>" +
    "      <img class='img guide' style='display:none' id='" + element + "'>" +
    "    </div>" +
    "  </div>" +
    "  <div class='wrap' style='display:none'>" +
    "  <div class='header' style='display:none'>" + courtesy +
    "    <div class='copy fa-ellipsis-h' title='Copy URL'>" +
    "  </div>" +
    "  </div>" +
    "  <div class='pub' style='display:none'>" + title + "</div>" +
    "  <div class='ago' style='display:none'>" + dst + "</div>" +
    "  <input class='url' value='" + ref + "'>" +
    "  <input class='share' value='" + share + "'>" +
    "  <input class='source' value='" + src + "'>" +
        tag +
    "</div>"
  )
}

var content  = function(n, recent, oldest, posts) {

    var images = 0
    var img = 'images/png/' + menu[n].img + '.png'
    $('#main .stats').append(
      "<div class='asset' response='" + menu[n].id.toLowerCase().replace(/\s|\/|\./g, '-') + "'>" +
      "<div class='radial'></div>" +
      "<img src='" + img + "' class='id " + menu.indexOf(menu[n]) + "'>" +
      "</div>" +
      "<div class='info'>" +
      "  <a ext='" + menu[n].ext + "'>" +
        menu[n].id.match(/[^\/]+$/g) +
      "  </a>" +
      "  <br>" +
      "  <b>Most recent</b> " + recent +"<br>" +
      "  <b>Oldest post </b> " + oldest + "<br>" +
      "  <b>Images</b> <div class='images'>" + images + "</div><br>" +
      "  <b>Posts</b> " + posts +
      "</div>"
    )

}

var list = function(e, n) {

  $('#arm #search #match .listing').empty()
  $('#main #visit #front #first .listing').empty()
  for (var i = menu.length - 1; i >= 1; i--) {
    if (menu[i].des.toLowerCase().match(n) || menu[i].cat.toLowerCase().match(n)) {
      $('#' + e + ' .listing').prepend(
        "<div class='index' index='" + menu.indexOf(menu[i]) + "'" +
        "  tabIndex='-1'" +
        "  response='" + menu[i].id.toLowerCase().replace(/\s|\/|\./g, '-') + "'" +
        "  search='" + menu[i].cat.toLowerCase() + "'>" +
        "<div class='radial'></div>" +
        "<div class='detail'></div>" +
        "<img class='type' src='" + "images/png/" + menu[i].img + '.png' + "'>" +
        "<div class='text'>&emsp;<b>" + menu[i].cat + "</b>" +
        "<br>&emsp;" +
          menu[i].id.match(/[^\/]+$/g) + "</div>" +
        "</div>"
      )
      if ($('#' + e + ' .listing .' + i).length > 1) $('#search .listing .' + i + ':last')
        .remove()
    }
  }
  if (!$('#arm #search #match').is(':visible')) {
    setTimeout(function() {
      $('#arm #search #match').show()
    }, 50)
  }

}

var feed  = function(l, n) {

  dupe = []
  if (l == 'center') svg = "<div class='radial'></div>"
  for (var i = 1; i <= n; i++) {
    var e = menu.indexOf(menu[Math.floor(Math.random() * menu.length - 1)])
    if (menu[e] && e != 0 && $.inArray(e, dupe) == -1){
      dupe.push(e)
      if (menu[e]) var img = 'images/png/' + menu[e].img + '.png'
        $('#main .' + l + ' .feed').append(
          "<div class='asset' " +
              "response='" + menu[e].id.toLowerCase().replace(/\/|\.|\s|\-/g, '-') + "'>" +
            "<div class='radial'></div>" +
          "<img src='" + img + "' class='id " + menu.indexOf(menu[e]) + "'" +
          "  search='" + menu[e].cat.toLowerCase() + "'> " +
          "<a style='left:0;width:100%' ext='" + menu[e].ext + "' " +
          "  title='" + menu[e].id + "'>" +
            String(menu[e].id.match(/[^\/]+$/g)).substring(0,9) +
          '...' +
          "</a>" +
          "</div>"
       )
     }
  }
  visual()
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

var progress = function(complete, n) {

  $(document).ready(function() {
    $('#progressBar').addClass('response').width(n + '%')
    if (complete == true) {
      $('#progressBar').on(
        'transitionend webkitTransitionEnd oTransitionEnd',
        function(e) {
          $(this).removeClass('response').width(0)
          $('#main #visit, #arm #search #match').hide()
          if ($('#main .translation').length == 1) $(
            '#main .translation').css('visibility', 'visible')
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
          $('#top').css('visibility','visible')
        })
      visual()
    }
  })

}

var suggest = function(n) {

  var duplicate = []
  for (var i = 0; i <= 7; i++) {
    var e = menu.indexOf(menu[Math.floor(Math.random() * menu.length - 1)])
    duplicate.push(e)
    if (menu[e] && e != 0 && $.inArray(duplicate, e) === -1){
    var img = 'images/png/' + menu[e].img + '.png'
      $('#main .suggestions').append(
        "<div class='combine'>" +
        "  <div class='radial'></div>" +
        "  <img src='" + img + "' class='id " + menu.indexOf(menu[n]) + "'>" +
        "  <div title='" + menu[e].id.replace(/\//g, ' ') + "'" +
        "    response='" + menu[e].id.toLowerCase().replace(/(\/|\.|\s)/g, '-') + "'" +
        "    search='" + menu[e].cat.toLowerCase() + "'>" +
             menu[e].id.match(/[^\/]+$/g) +
             "<br>" + "<b>" + menu[e].cat + "</b>" +
        "  </div>" +
        "</div>"
      )
    }
    if (i == 9) return false
  }

}

var populate = function(n) {
  $('#main .air, #main .translation, #main .center, #main .content').remove()
  if ($('#main .result').length < 1)
    $('#main').append(
      "<div class='result' style='display:none'></div>"
    )
  for (var i = 1; i <= menu.length - 1; i++) {
    if (id != menu.indexOf(menu[i]) && category == menu[i].cat) {
      var tag = menu[i].id.match(/[^\/]+$/g)
      var hilight = menu[i].des.replace(tag, "<b>" + tag + '</b>')
      var img = 'images/png/' + menu[i].img + '.png'
      $('#main .result').append(
        "<div class='populate' index='" + menu.indexOf(menu[i]) + "'" +
        "  response='" + menu[i].id.toLowerCase().replace(/\/|\.|\s|\-/g, '-') + "'> " +
        "  <div class='display'>" +
        "    <img class='id' src='" + img + "' " +
        "       response='" + menu[i].id.toLowerCase().replace(/\/|\.|\s|\-/g, '-') + "'> " +
        "  </div>" +
        "    <a class='title' ext='" + menu[i].ext + "' title='" + menu[i].id + "'>" +
               menu[i].id.match(/[^\/]+$/g) +
        "    </a>" +
        "</div>"
      )
    }
  }
  air(category)
}

var air = function(n) {

  if ($('#main .air').length < 1)
    $('#main .result').before(
      "<div class='air' style='display:none'></div>"
    )
  for (var i = 1; i < menu.length - 1; i++) {
    if (id != menu.indexOf(menu[i]) && category == menu[i].cat) {
      var tag = menu[i].id.match(/[^\/]+$/g)
      var hilight = menu[i].des.replace(tag, "<b>" + tag + '</b>')
      var img = 'images/png/' + menu[i].img + '.png'
      $('#main .air').append(
        "<div class='populate' + index='" + menu.indexOf(menu[i]) + "'" +
        "  response='" +
             menu[i].id.toLowerCase().replace(/[\/|\.|\s|\-]/g, '-') + "'> " +
        "  <div class='display'>" +
        "    <img class='id' src='" + img + "' " +
        "       response='" + menu[i].id.toLowerCase().replace(/\/|\.|\s|\-/g, '-') + "'> " +
        "  </div>" +
        "    <a class='title' ext='" + menu[i].ext + "' title='" + menu[i].id + "'>" +
                    menu[i].id.match(/[^\/]+$/g) +
        "    </a>" +
        "</div>"
      )
    }
  }

}

var response = function(passthrough, uri, n, bloat) {
  filter = []
  $('#main .result, #main .air, #main .center, #main .content').remove()
  if ($('#main .result').length < 1)
    $('#main').append("<div class='result' style='display:none'></div>")
    if ($.inArray(n.capitalize(), translations) > -1){
      category = n.capitalize()
      $(document).ready(function() {
        populate(n.capitalize())
      })
      progress(true, 100)
      return false
    }
  $('#main #visit').show()
  if (n) var n = n.replace(/%20|\-|\_|\s|\+/g, ' ')
  if (uri) uri = uri.replace(/%20|\-|\_|\s|\+/g, ' ')
  else uri = n
  $(document).ready(function() {
    for (var i = 1; i <= menu.length - 1; i++) {
      if (menu[i].hash == n) {
        filter.push(menu.indexOf(menu[i]))
        write(menu.indexOf(menu[i]))
        exact = i
        id = i
      } else if (
          menu[i].id.toLowerCase().replace(/(\/|\.)/g, ' ') == n.toLowerCase() ||
          menu[i].id.toLowerCase().replace(/(\/|\.)/g, ' ') == uri.toLowerCase()
        ) {
            filter.push(menu.indexOf(menu[i]))
            write(menu.indexOf(menu[i]))
            var exact = i
            id = i
            break
      } else if (
          menu[i].id.toLowerCase().replace(/(\/|\.)/g, ' ').match(n.toLowerCase()) ||
          menu[i].id.toLowerCase().replace(/(\/|\.)/g, ' ').match(uri.toLowerCase())
        ) {
            filter.push(menu.indexOf(menu[i]))
            write(menu.indexOf(menu[i]))
            id = i
      } else if (
          menu[i].des.toLowerCase().replace(/(\/|\.)/g, ' ').match(n.toLowerCase()) ||
          menu[i].des.toLowerCase().replace(/(\/|\.)/g, ' ').match(uri.toLowerCase())
        ) {
            filter.push(menu.indexOf(menu[i]))
            write(menu.indexOf(menu[i]))
      } else if (menu[i].cat.toLowerCase().match(n) || menu[i].cat.toLowerCase()
          .match(uri)
        ) {
            filter.push(menu.indexOf(menu[i]))
            write(menu.indexOf(menu[i]))
      }
    }
    if (!id) id = filter[filter.length - 1]
    if (passthrough == true) {
      if ($.isNumeric(exact)) {
        xml(null, null, exact)
        return false
      } else if ($.isNumeric(id) && filter.length == 1) {
        xml(null, null, id)
        return false
      } else if (!$.isNumeric(exact) && filter.length == 0) {
        xml('search', n, 0, null)
        return false
      }
    }
    if (bloat == true) {
      populate(category)
    }
    progress(true, 100)
  })
}

var write = function(n) {

  if ($('#main .result').length < 1)
    $('#main').append(
      "<div class='result' style='display:none'></div>"
    )
  var tag = menu[n].id.match(/[^\/]+$/g)
  var img = 'images/png/' + menu[n].img + '.png'
  var hilight = menu[n].des.replace(tag, "<b>" + tag + '</b>')
  if (n != id || n != filter[filter.length - 1] || filter.length >= 1)
    $('#main .result').append(
      "<div class='filter' " +
      "  index='" + menu.indexOf(menu[n]) + "'" +
      "  response='" + menu[n].id.toLowerCase().replace(/[\/|\.|\s|\-]/g, '-') + "'" +
      "  search='" + menu[n].cat.toLowerCase() +
      "'> " +
      "  <div class='display'>" +
      "    <img class='id' src='" + img + "' " +
      "      response='" + menu[n].id.toLowerCase().replace(/\/|\.|\s|\-/g, '-') + "'> " +
      "  </div>" +
      "    <a class='title' ext='" + menu[n].ext + "' title='" + menu[n].id + "'>" +
             menu[n].id.match(/[^\/]+$/g) +
      "    </a>" +
      "</div>"
    )

}

var xml = function(e, s, n) {

  id = n
  obj = []
  var local
  var pub = []
  var src = ''
  var dupe = []
  category = menu[n].cat
  var img = 'images/png/' + menu[n].img + '.png'
  if (e == 'search') {
    uri = cors + menu[n].uri + s + '&format=RSS'
  } else uri = cors + menu[n].uri
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
      'Content-Type': 'text/html; charset=utf-8',
      Accept: 'text/html; charset=utf-8',
      'X-Requested-With': '*'
    }
  }).fail(function() {
    $('#main').append(
      "<div class='center' style='display:none'>" +
      "  <div class='quick'>" +
      "    <div class='feed'></div>" +
      "    <div class='left fa-angle-double-left' style='display:none'></div>" +
      "    <div class='right fa-angle-double-right'></div>" +
      "  </div>" +
      "  <div class='channel'></div>" +
      "</div>"
    )
    $('#main .channel').html("This site could not be reached.")
    clearInterval(complete)
    progress(true, 100)
    feed('center', 12)
    visual()
  }).done(function(xhr) {
    if ($(xhr).find('entry').length > 0) var channel = "entry"
    else var channel = 'item'
    var quit = $(xhr).find(channel).length - 2
    if (quit > 80) quit = 80
    $(xhr).find(channel).each(function(i) {
      if (channel == 'entry') {
        var ref = $(this).find('link').attr('href')
        var dst = $(this).find('updated').text().zulu();
        var since = new Date($(this).find('updated').text()).getTime()
        var gen = $(this).find('updated').text().toLocaleString()
        gen = parseInt(
          gen.match(/([0-9]+\:[0-9]+\:[0-9]+)/g).toString()
            .replace(/\:/g, '')
          ).toString(36)
      } else if (channel = 'item') {
        var ref = $(this).find('link').text()
        if ($(this).find('pubDate').text().length > 0) {
          var dst = $(this).find('pubDate').text().zulu();
          var since = new Date($(this).find('pubDate').text())
          var gen = new Date($(this).find('pubDate').text()).toLocaleString()
          gen = parseInt(
            gen.match(/([0-9]+\:[0-9]+\:[0-9]+)/g).toString()
              .replace(/\:/g, '')
            ).toString(36)
        } else if ($(this).find('dc\\:date, date').text()) {
          var dst = $(this).find('dc\\:date, date').text().zulu();
          var gen = new Date($(this).find('dc\\:date, date').text()).getTime()
        } else if (menu[n].id.match(/Imgur/g)) {
          var ts = parseInt($(this).find('datetime').text());
          var ts_ms = ts * 1000;
          var date_ob = new Date(ts_ms);
          var year = date_ob.getFullYear();
          var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
          var date = ("0" + date_ob.getDate()).slice(-2);
          var hours = ("0" + date_ob.getHours()).slice(-2);
          var minutes = ("0" + date_ob.getMinutes()).slice(-2);
          var seconds = ("0" + date_ob.getSeconds()).slice(-2);
          var define = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
          var dst = define.zulu()
          var since = new Date(parseInt($(this).find('datetime').text()))
          var gen = parseInt($(this).find('datetime').text()).toString(36)
        } else {
          var dst = []
          dst.push('')
        }
      }
      if ($('#search input[type=text]').val() != 'Search')
        var search = $('#search input[type=text]').val()
      else var search = menu[n].cat.toLowerCase()
      var share = menu[n].hash
      if (gen) var ts = (gen).toString(36)
      if (ts) var share = window.location.origin + '/?' + share + ts
      if ($(this).find('content').text()
      .match(/https:\/\/i\.redd\.it\/.+?(gif|png|jpg)/g)) {
        src = String($(this).find('content').text()
          .match(/https:\/\/i\.redd\.it\/.+?(gif|png|jpg)/g))
      } else if ($(this).find('content').text()
      .match(/https:\/\/.\.thumbs\.redditmedia\.com\/.+?(gif|png|jpg)/g)) {
          src = String($(this).find('content').text()
            .match(/https:\/\/.\.thumbs\.redditmedia\.com\/.+?(gif|png|jpg)/g)
          )
      } else if ($(this).find('content').text()
      .match(/src=['"]https:\/\/.+?(gif|png|jpg)['"]/)) {
        src = String($(this).find('content').text()
          .match(/src=['"](.*?)['"]/)[1])
      } else if ($(this).find('link').attr('href')) {
        if ($(this).find('link').attr('href').match(/youtube\.com/))
          src = 'https://www.youtube.com/embed/' +
            String($(this).find('link').attr('href').split('=')[1])
        else src = String($(this).find('link').attr('href'))
      } else if ($(this).find('content').text()
      .match(/src=['"]https:\/\/.+?(gif|png|jpg)['"]/)) {
        src = String($(this).find('content').text().match(/src=['"](.*?)['"]/)[1])
      } else if ($(this).find('link').attr('href')) {
        src = String($(this).find('link').attr('href'))
      } else if ($(this).find('media\\:thumbnail, thumbnail').attr('url')) {
        src = String($(this).find('media\\:thumbnail, thumbnail').attr('url'))
      } else if ($(this).find('link').text().match(/https:\/\/.+?(gif|png|jpg)/)) {
        src = String($(this).find('link').text()
          .match(/https:\/\/.+?(gif|png|jpg)/)[0])
      } else if ($(this).find('image').find('link, url').text()
      .match(/https:\/\/.+?(gif|png|jpg)/)) {
        src = String($(this).find('image').find('link, url').text()
          .match(/https:\/\/.+?(gif|png|jpg)/)[0])
      } else if ($(this).find('enclosure').attr('url')) {
        src = String($(this).find('enclosure').attr('url'))
      } else if ($(this).find('media\\:content, content').attr('url')) {
        src = String($(this).find('media\\:content, content').attr('url'))
      } else if ($(this).find('content\\:encoded').text()
      .match(/img.+src=['"](.*?)['"]/)) {
        src = String($(this).find('content\\:encoded').text()
          .match(/img.+src=['"](.*?)['"]/)[1])
      } else if ($(this).find('description').text().toLowerCase()
      .match(/src=['"](.*?)['"]/)) {
        src = String($(this).find('description').text().toLowerCase()
          .match(/src=['"](.*?)['"]/)[1])
      } else if ($(this).find('image').text()) {
        src = String($(this).find('image').text())
      } else if (src.match(/comments|default|feeds|fsdn|undefined|[^https?:\/\/]/))
        src = ''
      if (src == '') courtesy = ''
      else courtesy =
        "<div class='courtesy' style='float:left'>" +
        "  <div class='radial'></div>" +
        "  <img class='id' src='" + img + "'>" +
        "  <a ext='" + menu[n].ext + "'>" +
        "    <b>" + menu[n].id.match(/([^\/]+)$/g) + "</b>" +
        "  </a>" +
        "</div>"
      if ($(this).find('title:first').text().length > 125)
        var more = "<div class='more'>more</div>"
      else var more = ""
      if (src.match(/youtube\.com/g)) {
        if ($(this).find('media\\:statistics, statistics').attr('views'))
            var views =
            "<div class='ago views'>" +
            "  views " + $(this).find('media\\:statistics, statistics').attr(
              'views').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
            "</div>"
        else var views = ''
        html =
          "<div id='yt' class='item' item='" + i + "' ext='" + ref.trim() + "'>" +
          "  <div class='header'>" + courtesy +
          "    <div class='copy fa-ellipsis-h' title='Copy URL'></div>" +
          "  </div>" +
          "  <div class='yt'>" +
          "    <iframe src='" + src + "'></iframe>" +
               views +
          "  </div>" +
              tag +
          "  <div class='pub' " + "text='" + $(this).find('title:first').text().escape() + "'>" +
               $(this).find('title:first').text().truncate(125, true).escape() +
               more +
          "  </div>" +
          "  <div class='ago'>" + dst[0] + "</div>" +
          "  <input class='url' value='" + ref.trim() + "'>" +
          "  <input class='share' value='" + share + "'>" +
          "  <input class='source' value='" + src + "'>" +
/*
          "  <form class='addComment' action'#'>" +
          "    <input class='comment' onclick='event.stopPropagation()' maxlength='60' placeholder='Add a Comment'>" +
          "    <div class='post'><b>Post</b></div>" +
          "  </form>" +
*/
          "</div>"
      } else {
        if (e == 'search') {
          var cat =
            "<div class='external'>" +
              ref.domain() +
            "</div>"
        } else var cat = ''
        html =
          "<div class='item " + i + "' item='" + i + "' ext='" + ref.trim() + "'>" +
          "  <div class='classic'>" +
          "    <div class='header'>" +
                 courtesy + "<div class='copy fa-ellipsis-h' title='Copy URL'></div>" +
          "    </div>" +
          "    <div class='fill'></div>" +
          "    <div class='image' style='display:none'>" +
          "      <img id='" + i + "' class='img' src='" + src + "'>" +
                  tag +
          "    </div>" +
          "    <div class='wrap'>" +
          "      <div class='pub' style='display:none' text='" + $(this).find('title:first').text().escape() + "'>" +
                   $(this).find('title:first').text().truncate(125, true).escape() +
                   more +
          "      </div>" +
          "      <div class='ago' style='display:none'>" + dst[0] + "</div>" +
          "    </div>" +
          "    <input class='url' value='" + ref.trim() + "'>" +
          "    <input class='share' value='" + share + "'>" +
          "    <input class='source' value='" + src + "'>" + cat +
          "    <form class='addComment' action'#'>" +
          "      <input class='comment' onclick='event.stopPropagation()' maxlength='88' placeholder='Add a Comment'>" +
          "      <div class='post'><b>Post</b></div>" +
          "    </form>" +
          "  </div>" +
          "</div>"
      }
      pub.push({
        title: $(this).find('title:first').text().escape(),
        courtesy: courtesy,
        ref: ref.trim(),
        since: since,
        share: share,
        dst: dst[0],
        more: more,
        element: i,
        post: html,
        src: src,
        gen: gen
      })
      pub.sort(function(a, b) {
        return b.since - a.since
      })
      $.each(pub, function(i) {
        if (parseInt(pub[i].gen, 36) == post) local = i
      })
    })
    $('#main').append(
      "<div class='translation' style='visibility:hidden'></div>" +
      "<div class='center' style='display:none'>" +
      "  <div class='quick'>" +
      "    <div class='left' style='display:none'><div class='fa-angle-double-left'></div></div>" +
      "    <div class='right'><div class='fa-angle-double-right'></div></div>" +
      "    <div class='feed'></div>" +
      "  </div>" +
      "  <div class='channel'></div>" +
      "</div>" +
      "<div class='content' style='visibility:hidden'>" +
      "  <div class='stats' style='visibility:hidden'></div>" +
      "  <div class='suggestions' style='visibility:hidden'>" +
      "    <b>suggested</b>&ensp;for you&ensp;...<br>" +
      "  </div>" +
      "</div>"
    )
    select()
    if ($.isNumeric(local)) {
      guide(
        i,
        pub[local].ref,
        pub[local].element,
        pub[local].courtesy,
        pub[local].title,
        pub[local].dst,
        pub[local].share,
        pub[local].src
      )
      image(true, true, pub[local].element, pub[local].src)
    } else $('#guide').hide()
      progress(false, Math.floor(Math.random() * (75 - 55 + 1) + 55))
      $.each(pub, function(i, k) {
        if (i == quit) return false
        if ($.isNumeric(local) && pub[local].element != pub[i].element) $('#main .center .channel').append(pub[i].post)
        else if (!$.isNumeric(local)) $('#main .center .channel').append(pub[i].post)
          if (menu[n].id.match(/Imgur/g)) image(true, true, pub[i].element, pub[i].src)
          else image(true, false, pub[i].element, pub[i].src)
      })

    var posts = $('#main .center .channel .item').length
    var recent = pub[0].dst
    var oldest = pub[pub.length - 1].dst
    if (e != 'search') $('#main .center').append(
      "<div id='bottom'>" +
      "  <button class='back' index='" + menu.indexOf(menu[n.toString().back()]) + "'>Previous</button>&ensp;" +
      "  <div class='back'>" + menu[n.toString().back()].id.match(/[^\/]+$/g) + "</div>" +
      "  <div class='bottom'>acktic</div>" +
      "  <div class='next'>" + menu[n.toString().next()].id.match(/[^\/]+$/g) + "</div>" +
      "  &ensp;<button class='next' index='" + menu.indexOf(menu[n.toString().next()]) + "'>Next</button>" +
      "</div>")
    content(n, recent, oldest, posts)
    clearInterval(complete)
    progress(true, 100)
    suggest(id)
    feed('center', 40)
  })

}
