var op = 0
var contrast = false
var category = 'Social'
var cors = 'https://acktic-github-io.herokuapp.com/'
var translations =
  ['Social', 'News', 'Media', 'Sports', 'Technology', 'World', 'Youtube']

/* Feel free to edit the above. */

var id
var img
var post
var tap = 0
var mouseAsset
var filter = []
var object = []
var enableDrag = false

var tag = "<div class='tag' style='display:none'>" +
          "  <div class='images fa-heart-o'></div>" +
          "  <div class='images fa-comment-o'></div>" +
          "  <div class='images fa-sticky-note-o' title='Copy Post'></div>" +
          "  <div class='images fa-bookmark-o' title='Copy Source'></div>" +
          "</div>"

var notify = function(n) {
  $('html body #wrapper #container #main #notification').show().html(n)
    $('html body #wrapper #container #main #notification').animate({
      bottom: '0px'
      }, 1000)
  setTimeout(function () {
    $('html body #wrapper #container #main #notification').animate({
      bottom: '-200px'
    }, 1000)
  }, 2000)
}

var select = function(n) {

  $.each(translations, function(i) {
  $('html body #wrapper #container #main .translation')
    .append(
      "<div class='select' response='" + translations[i] + "'>" +
      "  <div class='radial'></div>" +
      "  <img class='type' src='images/" + translations[i] + '.webp' + "'>" +
      "  <div class='text'>&emsp;<b>" + translations[i] + "</b>" +
      "    <br>&emsp;" + translations[i].grep() + " feeds" +
      "  </div>" +
      "</div>"
    )
  })

}

var guide = function(n, re, element, courtesy, title, dst, share, src) {

  $('html body #wrapper #container #guide').empty().css('display','flex').append(
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
    "    <div class='header' style='display:none'>" + courtesy +
    "      <div class='copy fa-ellipsis-h' title='Copy URL'>" +
    "    </div>" +
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
    $('html body #wrapper #container #main .status').append(
      "<div class='asset' response='" + menu[n].id.hyphen() + "'>" +
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

var base = function(n) {

  $('html body #wrapper #container #main #visit #page #front #first .listing').empty()
  for (var i = menu.length - 1; i >= 1; i--) {
    if (menu[i].des.toLowerCase().match(n) ||
        menu[i].cat.toLowerCase().match(n)) {
      $('html body #wrapper #container #main #visit #page #front #first .listing').prepend(
        "<div class='index' index='" + menu.indexOf(menu[i]) + "'" +
        "  tabIndex='-1'" +
        "  response='" + menu[i].id.toLowerCase().hyphen() + "'" +
        "  search='" + menu[i].cat.toLowerCase() + "'>" +
        "  <div class='background'></div>" +
        "  <div class='detail'>" +
        "    <div class='radial'></div>" +
        "    <img class='type' src='" + menu[i].img.image() + "'>" +
        "    <div class='text'>&emsp;<b>" + menu[i].cat + "</b>" +
        "    <br>&emsp;" + menu[i].id.match(/[^\/]+$/g) + "</div>" +
        "  </div>" +
        "</div>"
      )
      if ($('html body #wrapper #container #main #visit #page #front #first .listing .' + i).length > 1)
        $('html body #wrapper #container #main #visit #page #front #first .listing .' + i + ':last').remove()
    }
  }
  if (!$('html body #wrapper #container #main #visit #page #front #first').is(':visible')) {
    setTimeout(function() {
      $('html body #wrapper #container #main #visit #page #front #first').show()
    }, 50)
  }

}

var list = function(n) {

  $('html body #wrapper #container #main #top #arm #search #match .listing').empty()
  for (var i = menu.length - 1; i >= 1; i--) {
    if (menu[i].des.toLowerCase().match(n) ||
        menu[i].cat.toLowerCase().match(n)) {
      $('html body #wrapper #container #main #top #arm #search #match .listing').prepend(
        "<div class='index' index='" + menu.indexOf(menu[i]) + "'" +
        "  tabIndex='-1'" +
        "  response='" + menu[i].id.toLowerCase().hyphen() + "'" +
        "  search='" + menu[i].cat.toLowerCase() + "'>" +
        "  <div class='background'></div>" +
        "  <div class='detail'>" +
        "    <div class='radial'></div>" +
        "    <img class='type' src='" + menu[i].img.image() + "'>" +
        "    <div class='text'>&emsp;<b>" + menu[i].cat + "</b>" +
        "    <br>&emsp;" + menu[i].id.match(/[^\/]+$/g) + "</div>" +
        "  </div>" +
        "</div>"
      )
      if ($('html body #wrapper #container #main #top #arm #search #match .listing .' + i).length > 1)
        $('html body #wrapper #container #main #top #arm #search #match .listing .' + i + ':last').remove()
    }
  }
  if (!$('html body #wrapper #container #main #top #arm #search #match').is(':visible')) {
    setTimeout(function() {
      $('html body #wrapper #container #main #top #arm #search #match').show()
    }, 50)
  }

}

var feed  = function(n) {

  var dupe = []
  for (var i = 1; i <= n; i++) {
    var e = menu.indexOf(menu[Math.floor(Math.random() * menu.length - 1)])
    if (menu[e] && e != 0 && $.inArray(e, dupe) == -1){
      dupe.push(e)
        $('html body #wrapper #container #main .center .quick .feed').append(
          "<div class='asset' response='" + menu[e].id.hyphen() + "'>" +
          "  <div class='radial'></div>" +
          "  <img src='" + menu[e].img.image() + "' " +
          "    class='id " + menu.indexOf(menu[e]) + "'" +
          "    search='" + menu[e].cat.toLowerCase() + "'> " +
          "  <a style='left:0;width:100%' ext='" + menu[e].ext + "'" +
               "title='" + menu[e].id + "'>" +
               String(menu[e].id.match(/[^\/]+$/g)).substring(0,9) + '...' +
          "  </a>" +
          "</div>"
       )
     }
  }
  visual()
}

var quick  = function(n) {

  var dupe = []
  for (var i = 1; i <= n; i++) {
    var e = menu.indexOf(menu[Math.floor(Math.random() * menu.length - 1)])
    if (menu[e] && e != 0 && $.inArray(e, dupe) == -1){
      dupe.push(e)
        $('html body #wrapper #container #main #visit #page #front .quick .feed').append(
          "<div class='asset' response='" + menu[e].id.hyphen() + "'>" +
          "  <div class='radial'></div>" +
          "  <img src='" + menu[e].img.image() + "' " +
          "    class='id " + menu.indexOf(menu[e]) + "'" +
          "    search='" + menu[e].cat.toLowerCase() + "'> " +
          "  <a style='left:0;width:100%' ext='" + menu[e].ext + "'" +
               "title='" + menu[e].id + "'>" +
               String(menu[e].id.match(/[^\/]+$/g)).substring(0,9) + '...' +
          "  </a>" +
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
          $('html body #wrapper #container #main .result').show()
          $('html body #wrapper #container #main .center').show()
          $('html body #wrapper #container #main #visit').hide()
          $('html body #wrapper #container #main .air').show()
          $('html body #wrapper #container #main').scrollTop($('.air').outerHeight())
          $('html body #wrapper #container #main').attr('tabindex', -1).focus()
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
      $('html body #wrapper #container #main .suggestions').append(
        "<div class='combine'>" +
        "  <div class='radial'></div>" +
        "  <img src='" + menu[e].img.image() + "' " +
        "    class='id " + menu.indexOf(menu[n]) + "'>" +
        "  <div response='" + menu[e].id.hyphen() + "'" +
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
      if ($('html body #wrapper #container #main .group').length < 1)
      $('html body #wrapper #container #main').append(
        "<div class='group'>" +
        "  <div class='result' style='display:none'>" +
        "  </div>" +
        "</div>"
      )
    for (var i = 1; i <= menu.length - 1; i++) {
      if (id != menu.indexOf(menu[i]) && n == menu[i].cat)
        $('html body #wrapper #container #main .result').append(
          "<div class='populate'" +
          "  response='" + menu[i].id.hyphen() + "'>" +
          "  <div class='display'>" +
          "    <img class='id' src='" + menu[i].img.image() + "'> " +
          "  </div>" +
          "    <a class='title' ext='" + menu[i].ext + "'" +
          "      title='" + menu[i].id + "'>" +
                 menu[i].id.match(/[^\/]+$/g) +
          "    </a>" +
          "</div>"
        )
    }
    air(category)
  })
}

var air = function(n) {

  $('html body #wrapper #container #main .result').before("<div class='air' style='display:none'></div>")
  for (var i = 1; i < menu.length - 1; i++) {
    if (id != menu.indexOf(menu[i]) && category == menu[i].cat)
      $('html body #wrapper #container #main .air').append(
        "<div class='populate'" +
        "response='" + menu[i].id.hyphen() + "'>" +
        "  <div class='display'>" +
        "  <img class='id' src='" + menu[i].img.image() + "'> " +
        "  </div>" +
        "    <a class='title' ext='" + menu[i].ext + "'" +
        "      title='" + menu[i].id + "'>" +
               menu[i].id.match(/[^\/]+$/g) +
        "    </a>" +
        "</div>"
      )
  }
  visual()
}

var response = function(passthrough, uri, n, bloat) {
  id = false
  filter = []
  exact = false
    if ($.inArray(n.toString().capitalize(), translations) > -1){
      category = n.capitalize()
      $(document).ready(function() { populate(n.capitalize()) })
      progress(true, 100)
      return false
    }
  $('html body #wrapper #container #main #visit').show()
  if (n) var n = n.toString().space()
  if (uri) uri = uri.toString().space()
  else uri = n
    for (var i = 1; i <= menu.length - 1; i++) {
      if (menu[i].hash == n) {
        filter.push(menu.indexOf(menu[i]))
        if (passthrough == false) write(menu.indexOf(menu[i]))
        exact = i
        id = i
      } else if (
          menu[i].id.space() == n.toLowerCase() ||
          menu[i].id.space() == uri.toLowerCase()
        ) {
            filter.push(menu.indexOf(menu[i]))
            var exact = i
            id = i
            break
      } else if (
          menu[i].id.space().match(n.toLowerCase()) ||
          menu[i].id.space().match(uri.toLowerCase())
        ) {
            filter.push(menu.indexOf(menu[i]))
      } else if (
          menu[i].des.match(n.toLowerCase()) ||
          menu[i].des.match(uri.toLowerCase())
        ) {
            filter.push(menu.indexOf(menu[i]))
      } else if (
          menu[i].cat.toLowerCase().match(n) ||
          menu[i].cat.toLowerCase().match(uri)
        ) {
            filter.push(menu.indexOf(menu[i]))
      }
    }
    if (!id) id = filter[filter.length - 1]
    if (passthrough == false) {
      $(document).ready(function() {
        $('html body #wrapper #container #main').append(
          "<div class='group'>" +
          "  <div class='result' style='display:none'>" +
          "  </div>" +
          "</div>"
        )
      })
      $.each(filter, function(k, i){
        write(menu.indexOf(menu[i]))
      })
    } else if (passthrough == true) {
      if ($.isNumeric(exact)) {
        xml(null, null, exact)
        return false
      } else if ($.isNumeric(id) && filter.length == 1) {
        xml(null, null, id)
        return false
      }
    }
    if (filter.length == 0) {
      xml('search', n, 0, null)
      return false
    }
    if (bloat == true) {
      populate(menu[id].cat)
    }
    progress(true, 100)
}

var write = function(n) {

  $(document).ready(function() {
    $('html body #wrapper #container #main .group .result').append(
      "<div class='filter' " +
      "response='" + menu[n].id.hyphen() + "'>" +
      "  <div class='display'>" +
      "  <img class='id' src='" + menu[n].img.image() + "'> " +
      "  </div>" +
      "    <a class='title' ext='" + menu[n].ext + "'" +
      "      title='" + menu[n].id + "'>" +
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
    $('#' + n).parents('.item')
        .parents('.item').find('.pub, .ago').css('display','block')
        .parents('.item')
        .find('.url, .share, .source, .header, .image, .img, .fill').remove()

  }).on('load', function() {
      $('html body #wrapper #container #main .status .info .images').html(
        parseInt($('html body #wrapper #container #main .status .info .images').text()) + 1
      )
    if ($('html body #wrapper #container #main #top #arm #search #home').css('display') == 'none'){
      $('.sticky').show()
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
      $('html body #wrapper #container #main').addClass('guide')
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
      $('html body #wrapper #container #main').addClass('guide')
       if ($(this).get(0).naturalHeight >= $(this).get(0).naturalWidth * 2)
         $(this).css('max-width', '80vh')
     } else if ($(this).get(0).naturalWidth < small) {
         $(this).width('100%').addClass('default').css('margin','10px')
           .parents('.item')
           .find('.classic').css({
             'display': 'flex',
             'align-items': 'center'
           }).find('.header, .tag, .addComment').remove()
      } else if ($(this).get(0).naturalHeight < minimum) {
        $(this).width(140).addClass('default').css('margin','10px')
          .parents('.item')
          .find('.classic').css({
            'display': 'flex',
            'align-items': 'center'
       }).find('.header, .tag, .addComment').remove()
     } else if ($(this).get(0).naturalHeight >=
      $(this).get(0).naturalWidth * 2) {
        $(this).width('40vh')
     } else if ($(this).get(0).naturalHeight > k) {
         $(this).parents('.item')
             .parents('.item').find('.pub, .ago').css('display','block')
             .parents('.item')
             .find('.url, .share, .source, .header, .image, .img, .fill')
             .remove()
         $(this).remove()
      } else if ($(this).get(0).naturalWidth > minimum) {
        $(this).width('100%')
      }
    }
    $('#' + n).parents('.item, #guide').find('.image, .img, .pub, .tag, .ago')
      .css('display', 'block')
    $('#' + n).parents('.item, #guide').find('.header, .wrap')
      .css('display', 'inline-block')
    $('#' + n).parents('.item, #guide').find('.fill').remove()
    visual()
  }).attr('src', src)
    .parent().siblings('.fill').css('visibility','visible')
    .html("<div class='loader double-circle'></div>")
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
  category = menu[n].cat
  if (e == 'search') {
    uri = cors + menu[n].uri + s + '&format=RSS'
  } else uri = cors + menu[n].uri
  $('html body #wrapper #container #main .group').remove()
  document.title = menu[n].id.space().capitalize()
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
    $('html body #wrapper #container #main').append(
      "<div class='center' style='display:none'>" +
      "  <div class='quick'>" +
      "    <div class='feed'></div>" +
      "    <div class='left fa-angle-double-left' style='display:none'></div>" +
      "    <div class='right fa-angle-double-right'></div>" +
      "  </div>" +
      "  <div class='channel'></div>" +
      "</div>"
    )
    $('html body #wrapper #container #main .channel').html("This site could not be reached.")
    clearInterval(complete)
    feed(12)
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
          src.match(/comments|default|feeds|fsdn|undefined|[^https?:\/\/]/)
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
        if ($(this).find('media\\:statistics, statistics').attr('views'))
            var views =
            "<div class='ago views'>" +
            "  VIEWS " + $(this).find('media\\:statistics, statistics')
              .attr('views').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
            "</div>"
        else var views = ''
        if (e == 'search') {
          var cat =
            "<div class='external'>" +
              re.domain() +
            "</div>"
        } else var cat = ''
        html =
          "<div class='item " + i + "' item='" + i + "' ext='" + re.trim() + "'>" +
          "  <div class='classic'>" +
          "    <div class='header'>" +
                 courtesy +
                 "<div class='copy fa-ellipsis-h' title='Copy URL'></div>" +
          "    </div>" +
          "    <div class='fill'></div>" +
          "    <div class='image' style='display:none'>" +
          "      <img id='" + i + "' class='img' src='" + src + "'>" + tag +
          "    </div>" +
          "    <div class='wrap'>" +
          "      <div class='pub' style='display:none' text='" +
                   $(this).find('title:first').text().escape() + "'>" +
                   $(this).find('title:first').text().truncate(125, true)
                     .escape() +
                   more +
          "      </div>" + views +
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
    $('html body #wrapper #container #main').append(
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
      "  <div class='status'></div>" +
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
          $('html body #wrapper #container #main .center .channel').append(pub[i].post)
        else if (!$.isNumeric(local))
          $('html body #wrapper #container #main .center .channel').append(pub[i].post)
        if (menu[n].id.match(/Imgur/g)) image(true, pub[i].element, pub[i].src)
        else image(false, pub[i].element, pub[i].src)
      })

    var posts = $('html body #wrapper #container #main .center .channel .item').length
    var recent = pub[0].dst
    var oldest = $('.item .ago:last').text()
    if (e != 'search') $('html body #wrapper #container #main .center').append(
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
    feed(40)
    suggest(id)
    progress(true, 100)
  })

}
