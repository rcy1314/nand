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
var translations =
  ['Social', 'News', 'Media', 'Sports', 'Technology', 'World', 'Youtube']

var tag = "  <div class='tag' style='display:none'>" +
          "    <div class='images fa-heart-o'></div>" +
          "    <div class='images fa-comment-o'></div>" +
          "    <div class='images fa-sticky-note-o' title='Copy Post'></div>" +
          "    <div class='images fa-bookmark-o' title='Copy Source'></div>" +
          "  </div>"

var fill ="<div class='loader quantum-spinner'></div>"

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

var guide = function(n, re, element, courtesy, title, dst, share, src) {

  $('#guide').empty().css('display','flex').append(
    "<svg class='checkmark' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'>" +
    "  <circle class='checkmark__circle' cx='26' cy='26' r='25' fill='none' />" +
    "  <path class='checkmark__check' fill='none' d='M16 16 36 36 M36 16 16 36' />" +
    "</svg>" +
    "<div class='blur'></div>" +
    "<div class='sticky'>" +
    "  <div class='fill'></div>" +
    "  <div class='item " + n + "' item='" + n + "' ext='" + re + "'>" +
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
    "  <input class='url' value='" + re + "'>" +
    "  <input class='share' value='" + share + "'>" +
    "  <input class='source' value='" + src + "'>" +
        tag +
    "</div>"
  )
}

var content  = function(n, recent, oldest, posts) {

    var images = 0
    $('#main .stats').append(
      "<div class='asset' response='" + menu[n].id.response() + "'>" +
      "  <div class='radial'></div>" +
      "  <img src='" + menu[n].img.image() + "'" +
      "  class='id " + menu.indexOf(menu[n]) + "'>" +
      "</div>" +
      "<div class='info'>" +
      "  <a ext='" + menu[n].ext + "'>" + menu[n].id.match(/[^\/]+$/g) +
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
    if (menu[i].des.toLowerCase().match(n) ||
        menu[i].cat.toLowerCase().match(n)) {
      $('#' + e + ' .listing').prepend(
        "<div class='index' index='" + menu.indexOf(menu[i]) + "'" +
        "  tabIndex='-1'" +
        "  response='" + menu[i].id.toLowerCase().response() + "'" +
        "  search='" + menu[i].cat.toLowerCase() + "'>" +
        "<div class='detail'>" +
        "<div class='radial'></div>" +
        "<img class='type' src='" + menu[i].img.image() + "'>" +
        "<div class='text'>&emsp;<b>" + menu[i].cat + "</b>" +
        "<br>&emsp;" + menu[i].id.match(/[^\/]+$/g) + "</div>" +
          "</div>" +
        "</div>"
      )
      if ($('#' + e + ' .listing .' + i).length > 1)
        $('#search .listing .' + i + ':last').remove()
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
        $('#main .' + l + ' .feed').append(
          "<div class='asset' " +
          "response='" + menu[e].id.response() + "'>" +
          "  <div class='radial'></div>" +
          "<img src='" + menu[e].img.image() + "' " +
          "  class='id " + menu.indexOf(menu[e]) + "'" +
          "  search='" + menu[e].cat.toLowerCase() + "'> " +
          "<a style='left:0;width:100%' ext='" + menu[e].ext + "'>" +
             String(menu[e].id.match(/[^\/]+$/g)).substring(0,9) + '...' +
          "</a>" +
          "</div>"
       )
     }
  }
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
          $('.translation').css('visibility', 'visible')
          $('.content').css('visibility', 'visible')
          $('#top').css('visibility', 'visible')
          $('#main .result').show()
          $('#main .center').show()
          $('#main #visit').hide()
          $('#main .air').show()
          $('#main').scrollTop($('.air').outerHeight())
          $('#main').attr('tabindex', -1).focus()
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
    if (menu[e] && e != 0 && $.inArray(duplicate, e) == -1){
      $('#main .suggestions').append(
        "<div class='combine'>" +
        "  <div class='radial'></div>" +
        "  <img src='" + menu[e].img.image() + "' " +
        "    class='id " + menu.indexOf(menu[n]) + "'>" +
        "  <div response='" + menu[e].id.response() + "'" +
        "    search='" + menu[e].cat.toLowerCase() + "'>" +
             menu[e].id.match(/[^\/]+$/g) +
        "    <br>" + "<b>" + menu[e].cat + "</b>" +
        "  </div>" +
        "</div>"
      )
    }
    if (i == 9) return false
  }

}

var populate = function(n) {

  $(document).ready(function() {
    for (var i = 1; i <= menu.length - 1; i++) {
      if (id != menu.indexOf(menu[i]) && n == menu[i].cat)
        $('#main .result').append(
          "<div class='populate'" +
          "  response='" + menu[i].id.response() + "'>" +
          "  <div class='display'>" +
          "    <img class='id' src='" + menu[i].img.image() + "'> " +
          "  </div>" +
          "    <a class='title' ext='" + menu[i].ext + "'>" +
                 menu[i].id.match(/[^\/]+$/g) +
          "    </a>" +
          "</div>"
        )
    }
    air(category)
  })
}

var air = function(n) {

  $('#main .result').before("<div class='air' style='display:none'></div>")
  for (var i = 1; i < menu.length - 1; i++) {
    if (id != menu.indexOf(menu[i]) && category == menu[i].cat)
      $('#main .air').append(
        "<div class='populate'" +
        "response='" + menu[i].id.response() + "'>" +
        "  <div class='display'>" +
        "  <img class='id' src='" + menu[i].img.image() + "'> " +
        "  </div>" +
        "    <a class='title' ext='" + menu[i].ext + "'>" +
               menu[i].id.match(/[^\/]+$/g) +
        "    </a>" +
        "</div>"
      )
  }
  visual()
}

var response = function(passthrough, uri, n, bloat) {
  filter = []
  $(document).ready(function() {
    $('#main').append("<div class='result' style='display:none'></div>")
  })
    if ($.inArray(n.capitalize(), translations) > -1){
      category = n.capitalize()
      $(document).ready(function() {populate(n.capitalize())})
      progress(true, 100)
      return false
    }
  $('#main #visit').show()
  if (n) var n = n.replace(/%20|\-|\_|\s|\+/g, ' ')
  if (uri) uri = uri.replace(/%20|\-|\_|\s|\+/g, ' ')
  else uri = n
    for (var i = 1; i <= menu.length - 1; i++) {
      if (menu[i].hash == n) {
        filter.push(menu.indexOf(menu[i]))
        if (passthrough == false) write(menu.indexOf(menu[i]))
        exact = i
        id = i
      }
      if (
          menu[i].id.space() == n.toLowerCase() ||
          menu[i].id.space() == uri.toLowerCase()
        ) {
            filter.push(menu.indexOf(menu[i]))
            var exact = i
            if (passthrough == false) write(menu.indexOf(menu[i]))
            id = i
            break
      }
      if (
          menu[i].id.space().match(n.toLowerCase()) ||
          menu[i].id.space().match(uri.toLowerCase())
        ) {
            filter.push(menu.indexOf(menu[i]))
            if (passthrough == false) write(menu.indexOf(menu[i]))
            id = i
      }
      if (
          menu[i].des.match(n.toLowerCase()) ||
          menu[i].des.match(uri.toLowerCase())
        ) {
            filter.push(menu.indexOf(menu[i]))
            if (passthrough == false) write(menu.indexOf(menu[i]))
      }
      if (
          menu[i].cat.toLowerCase().match(n) ||
          menu[i].cat.toLowerCase().match(uri)
        ) {
            filter.push(menu.indexOf(menu[i]))
            if (passthrough == false) write(menu.indexOf(menu[i]))
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
      populate(menu[id].cat)
    }
    progress(true, 100)
}

var write = function(n) {

  $(document).ready(function() {
    $('#main .result').append(
      "<div class='filter' " +
      "response='" + menu[n].id.response() + "'>" +
      "  <div class='display'>" +
      "  <img class='id' src='" + menu[n].img.image() + "'> " +
      "  </div>" +
      "    <a class='title' ext='" + menu[n].ext + "'>" +
             menu[n].id.match(/[^\/]+$/g) +
      "    </a>" +
      "</div>"
    )
  })
}

var image = function(empty, n, src) {

  var maximum = 799
  var minimum = 299
  var small = 120
  var k = 5420

  if (src.match(/https?\:\/\//g)) {
  $('#' + n).on('error', function() {
    $(this).parents('.classic').find('.tag, .fill, .header').remove()
    $('#' + n).parents('.item').find('.ago')
        .css('display', 'inline-block')
        .parents('.item').find('.pub').css('display','block')
        .parents('.item')
        .find('.url, .share, .source, .header, .image, .img, .fill').remove()

  }).on('load', function() {
      $('#main .stats .info .images').html(
        parseInt($('#main .stats .info .images').text()) + 1
      )
    if ($('#home').css('display') == 'none'){
      if ($(this).get(0).naturalWidth > minimum) {
        $(this).width('100%')
      } else if ($(this).get(0).naturalWidth < maximum) {
          $(this).width(99).addClass('expand').css('margin','10px')
          .parents('.item')
          .find('.classic').css({
            'display': 'flex',
            'align-items': 'center'
           }).find('.header, .tag, .addComment').remove()
       }
      if ($(this).hasClass('guide')) {
      $('#main').addClass('guide')
       if ($(this).get(0).naturalWidth >= $(this).get(0).naturalHeight)
         $(this).css('max-width', '100%').parents('.sticky').width('90%')
       else if ($(this).get(0).naturalHeight >= $(this).get(0).naturalWidth)
         $(this).width('100%').css('cssText', 'max-width: 60vh')
         $('#' + n).parents('#guide').find('.image, .img')
          .css('display', 'block')
         $('#' + n).parents('#guide')
          .find('.url, .share, .source, .header, .wrap, .fill').remove()
      }
    } else {
     if ($(this).hasClass('guide')) {
      $('.sticky, .checkmark').show()
      $('#main').addClass('guide')
       if ($(this).get(0).naturalHeight >= $(this).get(0).naturalWidth * 2)
         $(this).css('max-width', '80vh')
     } else if ($(this).get(0).naturalWidth < small) {
         $(this).width('100%').addClass('default').css('margin','10px')
           .parents('.item')
           .find('.classic').css({
             'display': 'flex',
             'align-items': 'center'
           }).find('.header, .tag, .addComment').remove()
     } else if ($(this).get(0).naturalHeight >=
      $(this).get(0).naturalWidth * 2) {
        $(this).width('70%')
          .parents('.item').find('.image').width('100%')
     } else if ($(this).get(0).naturalHeight > k) {
         $(this).parents('.item').find('.ago')
             .css('display', 'inline-block')
             .parents('.item').find('.pub').css('display','block')
             .parents('.item')
             .find('.url, .share, .source, .header, .image, .img, .fill')
             .remove()
         $(this).remove()
       } else if ($(this).get(0).naturalHeight < minimum) {
         $(this).width(120).addClass('default').css('margin','10px')
           .parents('.item')
           .find('.classic').css({
             'display': 'flex',
             'align-items': 'center'
           }).find('.header, .tag, .addComment').remove()
      } else if ($(this).get(0).naturalWidth > minimum) {
        $(this).width('100%')
          .parents('.item').find('.image').width('100%')
      }
    }
    $('#' + n).parents('.item, #guide').find('.image, .img, .pub, .tag')
      .css('display', 'block')
    $('#' + n).parents('.item, #guide').find('.header, .wrap, .ago')
      .css('display', 'inline-block')
    $('#' + n).parents('.item, #guide').find('.fill').remove()
    visual()
  }).attr('src', src).parent().siblings('.fill').html(fill)
  }
  else if (empty == true ){
    $('#' + n).parents('.item').remove()
  } else {
    $('#' + n).parents('.item').find('.ago')
        .css('display', 'inline-block')
        .parents('.item').find('.pub').css('display','block')
        .parents('.item')
        .find('.url, .share, .source, .header, .image, .img, .fill').remove()
    }

}

var xml = function(e, s, n) {

  id = n
  obj = []
  var local
  var pub = []
  var src = ''
  var dupe = []
  category = menu[n].cat
  if (e == 'search') {
    uri = cors + menu[n].uri + s + '&format=RSS'
  } else uri = cors + menu[n].uri
  document.title = menu[n].id.replace(/(\/|\.)/g, ' ').capitalize()
  progress(false, Math.floor(Math.random() * (55 - 25 + 1) + 25))
  var complete = setInterval(function() {
    $('#progressBar').width($('#progressBar').width() +
      Math.floor(Math.random() * (5 - 0 + 1) + 0))
  }, 350)
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
    feed('center', 12)
    progress(true, 100)
    visual()
  }).done(function(xhr) {
    if ($(xhr).find('entry').length > 0) var channel = "entry"
    else var channel = 'item'
    var quit = $(xhr).find(channel).length - 2
    if (quit > 80) quit = 80
    $(xhr).find(channel).each(function(i) {
      if (channel == 'entry') {
        var re = $(this).find('link').attr('href')
        var dst = $(this).find('updated').text().zulu();
        var since = new Date($(this).find('updated').text()).getTime()
        var gen = $(this).find('updated').text().toLocaleString()
        gen = parseInt(
          gen.match(/([0-9]+\:[0-9]+\:[0-9]+)/g).toString()
            .replace(/\:/g, '')
          ).toString(36)
      } else if (channel = 'item') {
        var re = $(this).find('link').text()
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
          var ts_ms = ts * 1000
          var date = new Date(ts_ms)
          var year = date.getFullYear()
          var mon = ("0" + (date.getMonth() + 1)).slice(-2)
          var min = ("0" + date.getMinutes()).slice(-2)
          var sec = ("0" + date.getSeconds()).slice(-2)
          var hour = ("0" + date.getHours()).slice(-2)
          var date = ("0" + date.getDate()).slice(-2)
          var def = year + "-" +
                    mon + "-" +
                    date + " " +
                    hour + ":" +
                    min + ":" +
                    sec
          var dst = def.zulu()
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
      } else if ($(this).find('link').attr('hre')) {
        if ($(this).find('link').attr('hre').match(/youtube\.com/))
          src = 'https://www.youtube.com/embed/' +
            String($(this).find('link').attr('hre').split('=')[1])
        else src = String($(this).find('link').attr('hre'))
      } else if ($(this).find('content').text()
      .match(/src=['"]https:\/\/.+?(gif|png|jpg)['"]/)) {
        src = String($(this).find('content').text()
          .match(/src=['"](.+)['"]/)[1])
      } else if ($(this).find('link').attr('hre')) {
        src = String($(this).find('link').attr('hre'))
      } else if ($(this).find('media\\:thumbnail, thumbnail').attr('url')) {
        src = String($(this).find('media\\:thumbnail, thumbnail').attr('url'))
      } else if ($(this).find('link').text()
        .match(/https:\/\/.+?(gif|png|jpg)/)) {
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
      } else if (
          src.match(
            /comments|default|feeds|fsdn|undefined|[^https?:\/\/]/
          )
        )
        src = ''
      if (src == '') courtesy = ''
      else courtesy =
        "<div class='courtesy' style='float:left'>" +
        "  <div class='radial'></div>" +
        "  <img class='id' src='" + menu[n].img.image() + "'>" +
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
            "  views " + $(this).find('media\\:statistics, statistics')
              .attr('views').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
            "</div>"
        else var views = ''
        html =
          "<div id='yt' class='item' ext='" + re.trim() + "'>" +
          "  <div class='header'>" + courtesy +
          "    <div class='copy fa-ellipsis-h' title='Copy URL'></div>" +
          "  </div>" +
          "  <div class='yt'>" +
          "    <iframe src='" + src + "'></iframe>" +
               views +
          "  </div>" +
              tag +
          "  <div class='pub' " + "text='" +
               $(this).find('title:first').text().escape() + "'>" +
               $(this).find('title:first').text().truncate(125, true).escape() +
               more +
          "  </div>" +
          "  <div class='ago'>" + dst[0] + "</div>" +
          "  <input class='url' value='" + re.trim() + "'>" +
          "  <input class='share' value='" + share + "'>" +
          "  <input class='source' value='" + src + "'>" +
/*
          "  <form class='addComment' action'#'>" +
          "    <input class='comment' " +
          "      onclick='event.stopPropagation()'" +
          "      placeholder='Add a Comment'" +
          "      maxlength='60'>" +
          "    <div class='post'><b>Post</b></div>" +
          "  </form>" +
*/
          "</div>"
      } else {
        if (e == 'search') {
          var cat =
            "<div class='external'>" +
              re.domain() +
            "</div>"
        } else var cat = ''
        html =
          "<div class='item' item='" + i + "' ext='" + re.trim() + "'>" +
          "  <div class='classic'>" +
          "    <div class='header'>" +
                 courtesy +
                 "<div class='copy fa-ellipsis-h' title='Copy URL'></div>" +
          "    </div>" +
          "    <div class='fill'></div>" +
          "    <div class='image' style='display:none'>" +
          "      <img id='" + i + "' class='img' src='" + src + "'>" +
                  tag +
          "    </div>" +
          "    <div class='wrap'>" +
          "      <div class='pub' style='display:none' text='" +
                   $(this).find('title:first').text().escape() + "'>" +
                   $(this).find('title:first').text().truncate(125, true)
                     .escape() +
                   more +
          "      </div>" +
          "      <div class='ago' style='display:none'>" + dst[0] + "</div>" +
          "    </div>" +
          "    <input class='url' value='" + re.trim() + "'>" +
          "    <input class='share' value='" + share + "'>" +
          "    <input class='source' value='" + src + "'>" + cat +
          "    <form class='addComment' action'#'>" +
          "      <input class='comment' " +
          "        maxlength='88' placeholder='Add a Comment'" +
          "         onclick='event.stopPropagation()'>" +
          "      <div class='post'><b>Post</b></div>" +
          "    </form>" +
          "  </div>" +
          "</div>"
      }
      pub.push({
        title: $(this).find('title:first').text().escape(),
        courtesy: courtesy,
        re: re.trim(),
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
      "    <div class='left' style='display:none'>" +
      "      <div class='fa-angle-double-left'></div></div>" +
      "    <div class='right'>" +
      "      <div class='fa-angle-double-right'></div></div>" +
      "    <div class='feed'></div>" +
      "  </div>" +
      "  <div class='channel'></div>" +
      "</div>" +
      "<div class='content' style='visibility:hidden'>" +
      "  <div class='stats'></div>" +
      "  <div class='suggestions'>" +
      "    <b>suggested</b>&ensp;for you&ensp;...<br>" +
      "  </div>" +
      "</div>"
    )
    select()
    if ($.isNumeric(local)) {
      guide(
        i,
        pub[local].re,
        pub[local].element,
        pub[local].courtesy,
        pub[local].title,
        pub[local].dst,
        pub[local].share,
        pub[local].src
      )
      image(true, pub[local].element, pub[local].src)
    } else $('#guide').hide()
      progress(false, Math.floor(Math.random() * (75 - 55 + 1) + 55))
      $.each(pub, function(i, k) {
        if (i == quit) return false
        if ($.isNumeric(local) && pub[local].element != pub[i].element)
          $('#main .center .channel').append(pub[i].post)
        else if (!$.isNumeric(local))
          $('#main .center .channel').append(pub[i].post)
        if (menu[n].id.match(/Imgur/g)) image(true, pub[i].element, pub[i].src)
        else image(false, pub[i].element, pub[i].src)
      })

    var posts = $('#main .center .channel .item').length
    var recent = pub[0].dst
    var oldest = pub[pub.length - 1].dst
    if (e != 'search') $('#main .center').append(
      "<div id='bottom'>" +
      "  <button class='back' index='" +
            menu.indexOf(menu[n.toString().back()]) + "  '>" +
      "     Previous</button>" +
      "     &ensp;" +
      "  <div class='back'>" +
           menu[n.toString().back()].id.match(/[^\/]+$/g) +
      "  </div>" +
      "  <div class='bottom'>acktic</div>" +
      "  <div class='next'>" +
           menu[n.toString().next()].id.match(/[^\/]+$/g) +
      "   </div>" +
      "   &ensp;" +
      "   <button class='next' index='" +
            menu.indexOf(menu[n.toString().next()]) + "'>" +
      "     Next</button>" +
      "</div>"
    )
    content(n, recent, oldest, posts)
    clearInterval(complete)
    feed('center', 40)
    suggest(id)
    progress(true, 100)
  })

}
