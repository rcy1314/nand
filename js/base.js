var op = 0 //1 invert, 0 opposite
var buffer = 7 //input suggest length
var contrast = false //opposite of op
var quickFeeds = true //show or hide
var loading = 'dots' //or 'percent'
var category = 'Social' //legacy set by xml
var onlyImages = false //grep, random, populate
var expand = true // filter populate list display
var cors = 'https://acktic-github-io.herokuapp.com/' // cors-anywhere
var translations =
  ['Social', 'News', 'Entertainment', 'Sports', 'Technology', 'World', 'Youtube'] // reorder option

/* Feel free to edit the above. */

var id //feed indexOf menu
var post //from init.js timestamp
var tap = 0 //used in main.js for images
var complete //core.js interval for progress
nextAngle = 0 //core.js animateRotate for quick
var random = [] //core.js random feed in category
var filter = [] //response array for menu indexes
var stop = false //main.js scroll reader stop reload
var first = true //reader append feed center channel
var reader = false //main scroll category reader xml
var randomDuplicate = [] //core.js random duplicate xml

var stage =
  "<div id='feed'>" +
  "  <div class='center'>" +
  "    <div class='quick'>" +
  "      <div class='left' style='display:none'>" +
  "        <div class='fa-angle-left'></div></div>" +
  "      <div class='right'>" +
  "        <div class='fa-angle-right'></div></div>" +
  "      <div class='feed'></div>" +
  "    </div>" +
  "    <div class='channel'></div>" +
  "  </div>" +
  "  <div class='content'>" +
  "    <div class='status'></div>" +
  "    <div class='suggestions'>" +
  "    </div>" +
  "  </div>" +
  "</div>"


var tag = "<div class='tag'>" +
          "  <div class='images fa-heart-o'></div>" +
          "  <div class='images fa-sticky-note-o' title='Copy Post'></div>" +
          "  <div class='images fa-bookmark-o' title='Copy Source'></div>" +
          "</div>"

var notify = function(n) {
  $('html body #wrapper #container #main #notification').show().html(n)
    $('html body #wrapper #container #main #notification').animate({
      right: '1.5em'
    }, 500)
  setTimeout(function () {
    $('html body #wrapper #container #main #notification').animate({
      right: '-16em'
    }, 500)
  }, 2000)
}

var display = function(n) {
  if (n == true) {
    $('#group .filter .hash, ' +
      '#group .filter .media, ' +
      '#group .filter .description, ' +
      '#group .populate .hash, ' +
      '#group .populate .media, ' +
      '#group .populate .description')
      .css('display','inline-flex')
      $('#group .filter, #group .populate').addClass('expand').css('align-items','center')
      if (op == 0) $('#group .filter, #group .populate').addClass('invert')
    $('#group .filter .title, #group .populate .title').hide()
  } else if (n == false){
    $('#group .filter .hash, ' +
      '#group .filter .media, ' +
      '#group .filter .description, ' +
      '#group .populate .hash, ' +
      '#group .populate .media, ' +
      '#group .populate .description')
      .hide()
    $('#group .filter, #group .populate').removeClass('expand').css('display','inline-flex')
    if (op == 0) $('#group .filter, #group .populate').removeClass('invert')
    $('#group .filter .title, #group .populate .title').show()
  }
  $('html body #wrapper #container #main').scrollTop($('.air').outerHeight())
}

var toggle = function(n) {
  nextAngle -= -180
  if (nextAngle <= -180) nextAngle = 0
  if (n == true) {
      $('html body #wrapper #container #main #visit #page .quick')
        .addClass('visible').removeClass('invisible')
      $('html body #wrapper #container #main #visit #page #front').addClass('toggleHidden').removeClass('toggle')
      $('html body #wrapper #container #main #visit #page #front .fa-angle-up').animateRotate(nextAngle, 500, 'swing')
      $('html body #wrapper #container #main #visit #page #front .link').addClass('slideRight')
      $('html body #wrapper #container #main #visit #page #front .show')
        .removeClass('visible').addClass('invisible')
      quick(7)
    } else if (n == false){
      $('html body #wrapper #container #main #visit #page .quick')
        .addClass('invisible').removeClass('visible')
      $('html body #wrapper #container #main #visit #page #front').addClass('toggle').removeClass('toggleHidden')
      $('html body #wrapper #container #main #visit #page #front .fa-angle-up').animateRotate(nextAngle, 500, 'swing')
      $('html body #wrapper #container #main #visit #page #front .link').removeClass('slideRight')
      $('html body #wrapper #container #main #visit #page #front .show')
        .removeClass('invisible').addClass('visible')
      $('html body #wrapper #container #main #visit #page .quick .feed').empty()
    }
}

var footer = function() {
  $('html body #wrapper #container #main .center').append(
    "<div id='bottom'>" +
    "  <div class='back btn' aria-item='" + $.back() + "''>" +
    "      <span class='front'></span>" +
    "      <span class='flip-front'>Previous</span>" +
    "      <span class='flip-back'>" + String(menu[$.back()].id.match(/[^\/]+$/g)).substring(0,9) + "...</span>" +
    "  </div>" +
    "  <div class='bottom'>Return</div>" +
    "  <div class='next btn' aria-item='" + $.next() + "'>" +
    "      <span class='front'></span>" +
    "      <span class='flip-front'>Next</span>" +
    "      <span class='flip-back'>" + String(menu[$.next()].id.match(/[^\/]+$/g)).substring(0,9) + "...</span>" +
    "  </div>" +
    "</div>"
  )
}

var guide = function(heart, array) {

  if (heart == true) var fa = 'fa-heart'
  else var fa = 'fa-heart-o'
  $('html body #wrapper #container #guide').css('display','flex').append(
    "<svg class='checkmark' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'>" +
    "  <circle class='checkmark__circle' cx='26' cy='26' r='25' fill='none' />" +
    "  <path class='checkmark__check' fill='none' d='M16 16 36 36 M36 16 16 36' />" +
    "</svg>" +
    "<div class='blur'></div>" +
    "<div class='sticky'>" +
    "  <div class='fill'></div>" +
    "  <div class='item " + array[0].id + "' item='" + array[0].id + "' ext='" + array[0].re + "'>" +
    "    <div class='image'>" +
    "      <div class='fa fa-heart'></div>" +
    "      <img id='" + array[0].element + "' class='img guide " + array[0].element + "'>" +
    "    </div>" +
    "  </div>" +
    "  <div class='wrap'>" +
    "    <div class='header'>" + array[0].courtesy + "</div>" +
    "    <div class='pub'>" + array[0].title + "</div>" +
    "    <div class='ago'>" + array[0].dst + "</div>" +
    "    <input class='url' value='" + array[0].re + "'>" +
    "    <input class='share' value='" + array[0].share + "'>" +
    "    <input class='source' value='" + array[0].src + "'>" +
/*
    "    <div class='tag'>" +
    "      <div class='images " + fa + "'></div>" +
    "      <div class='images fa-sticky-note-o' title='Copy Post'></div>" +
    "      <div class='images fa-bookmark-o' title='Copy Source'></div>" +
    "      </div>" +
*/
    "  </div>" +
    "</div>"
  )
  $('html body #wrapper #container #main #top').hide()
  guideImage(array[0].src)
  visual()
}

var content = function(n, recent, oldest, posts) {

  $('html body #wrapper #container #main #feed .status').append(
    "<div class='filter' " +
    "  aria-item='" + menu.indexOf(menu[n]) + "'>" +
    "  <div class='display'>" +
    "    <img src='" + menu[n].img.image() + "'> " +
    "  </div>" +
    "  <a class='title' ext='" + menu[n].ext + "'" +
    "    title='" + menu[n].id + "'>" +
         menu[n].id.match(/[^\/]+$/g) +
    "  </a>" +
    "</div>" +
    "<div class='info'>" +
    "  <div class='description'>&emsp;" + menu[n].des + "</div><br>" +
    "  Most recent<div style='float:right'>" + recent +"</div><br>" +
    "  Oldest post<div style='float:right'>" + oldest + "</div><br>" +
    "  Posts&ensp;<div style='float:right'>" + posts + "</div>" +
    "</div>"
  )

}

var base = function(n) {

  var suggest = []
  $('html body #wrapper #container #main #visit #page #front #first .listing').empty()
  $('html body #wrapper #container #main #visit #page #front #first').show()
  if (n != '')
  for (var i = menu.length - 1; i >= 1; i--) {
    if (menu[i].des.toLowerCase().match(n) ||
        menu[i].cat.toLowerCase().match(n)) {
      $('html body #wrapper #container #main #visit #page #front #first .listing').prepend(
        "<div class='index " + i + "' aria-item='" + menu.indexOf(menu[i]) + "'" + " tabIndex='-1'>" +
        "  <div class='detail'>" +
        "    <img src='" + menu[i].img.image() + "'>" +
        "    <div class='text'>&emsp;<b>" + menu[i].cat + "</b>" +
        "    <br>&emsp;" + menu[i].id.match(/[^\/]+$/g) + "</div>" +
        "  </div>" +
        "</div>"
      )
      suggest.push(i)
    } else suggest.push(0)
  }
  if((menu.length - 2) == (suggest.length - 1) || n == '') {
    var suggest = []
    suggest.push(menu.indexOf(menu[Math.floor(Math.random() * menu.length - 1)]))
  }
    for (i = 1; i <= menu.length - 1; i++) {
      var e = menu.indexOf(menu[Math.floor(Math.random() * menu.length - 1)])
      if ($('html body #wrapper #container #main #visit #page #front #first .listing .' + e).length == 0 &&
        $.inArray(e, suggest) == -1 && menu[e] && menu[e].media == true)
      $('html body #wrapper #container #main #visit #page #front #first .listing').append(
        "<div class='index " + i + "' aria-item='" + menu.indexOf(menu[e]) + "'" + " tabIndex='-1'>" +
        "  <div class='detail'>" +
        "    <img src='" + menu[e].img.image() + "'>" +
        "    <div class='textSuggest'>&emsp;<b>" + menu[e].cat + "</b>" +
        "      <br>&emsp;" + menu[e].id.match(/[^\/]+$/g) +
        "    </div>" +
        "    <div class='buffer'>suggested..</div>" +
        "  </div>" +
        "</div>"
      )
      if ($('html body #wrapper #container #main #visit #page #front #first .listing .index').length >= buffer)
        return false
    }

}

var list = function(n) {

  var suggest = []
  $('html body #wrapper #container #main #top #arm #search #match').show()
  $('html body #wrapper #container #main #top #arm #search #match .listing').empty()
  for (var i = menu.length - 1; i >= 1; i--) {
    if (menu[i].des.toLowerCase().match(n) ||
        menu[i].cat.toLowerCase().match(n)) {
      $('html body #wrapper #container #main #top #arm #search #match .listing').prepend(
        "<div class='index " + i + "' aria-item='" + menu.indexOf(menu[i]) + "'" + " tabIndex='-1'>" +
        "  <div class='detail'>" +
        "    <img src='" + menu[i].img.image() + "'>" +
        "    <div class='text'>&emsp;<b>" + menu[i].cat + "</b>" +
        "      <br>&emsp;" + menu[i].id.match(/[^\/]+$/g) +
        "    </div>" +
        "  </div>" +
        "</div>"
      )
      suggest.push(i)
    } else suggest.push(0)
  }
  if((menu.length - 2) == (suggest.length - 1)) {
    var suggest = []
    suggest.push(menu.indexOf(menu[Math.floor(Math.random() * menu.length - 1)]))
  }
  if (suggest.length < 1) suggest.push(0)
    for (i = 1; i <= menu.length - 1; i++) {
      var e = menu.indexOf(menu[Math.floor(Math.random() * menu.length - 1)])
      if ($.inArray(e, suggest) == -1 && menu[e] && menu[e].cat == menu[suggest[suggest.length - 1]].cat && menu[e].media == true)
      $('html body #wrapper #container #main #top #arm #search #match .listing').append(
        "<div class='index " + i + "' aria-item='" + menu.indexOf(menu[e]) + "'" + " tabIndex='-1'>" +
        "  <div class='detail'>" +
        "    <img src='" + menu[e].img.image() + "'>" +
        "    <div class='text'>&emsp;<b>" + menu[e].cat + "</b>" +
        "      <br>&emsp;" + menu[e].id.match(/[^\/]+$/g) +
        "    </div>" +
        "    <div class='buffer'>suggested..</div>" +
        "  </div>" +
        "</div>"
      )
      if ($('html body #wrapper #container #main #top #arm #search #match .listing .index').length >= buffer)
        return false
    }

}

var feed  = function(n) {

  var dupe = []
  for (var i = 1; i <= n; i++) {
    var e = menu.indexOf(menu[Math.floor(Math.random() * menu.length - 1)])
    if (onlyImages == true) {
    if (menu[e] && e != 0 && menu[e].media == true && $.inArray(e, dupe) == -1){
      dupe.push(e)
        $('html body #wrapper #container #main .center .quick .feed').append(
          "<div class='asset' aria-item='" + menu.indexOf(menu[e]) + "'>" +
          "  <img src='" + menu[e].img.image() + "'> " +
          "  <a style='left:0;width:100%' ext='" + menu[e].ext + "'" +
               "title='" + menu[e].id + "'>" +
               String(menu[e].id.match(/[^\/]+$/g)).substring(0,9) + '...' +
          "  </a>" +
          "</div>"
       )
     }
   } else if (onlyImages == false){
     if (menu[e] && e != 0 && $.inArray(e, dupe) == -1){
       dupe.push(e)
         $('html body #wrapper #container #main .center .quick .feed').append(
           "<div class='asset' aria-item='" + menu.indexOf(menu[e]) + "'>" +
           "  <img src='" + menu[e].img.image() + "'> " +
           "  <a style='left:0;width:100%' ext='" + menu[e].ext + "'" +
                "title='" + menu[e].id + "'>" +
                String(menu[e].id.match(/[^\/]+$/g)).substring(0,9) + '...' +
           "  </a>" +
           "</div>"
        )
      }
   }
  }
  visual()
}

var quick  = function(n) {

  var dupe = []
  if (n == 7)
  for (var i = 0; i <= translations.length - 1; i++){
    $('html body #wrapper #container #main #visit #page .quick .feed').append(
      "<div class='translation' aria-item='" + translations[i] + "'>" +
      "  <img src='images/" + translations[i] + ".webp'> " +
      "  <a title='" + translations[i] + "' aria-item='" + translations[i] + "'>" +
           translations[i].substring(0,9) + '...' +
      "  </a>" +
      "</div>"
   )
  }
  else for (var i = 1; i <= n; i++) {
    var e = menu.indexOf(menu[Math.floor(Math.random() * menu.length - 1)])
    if (menu[e] && e != 0 && $.inArray(e, dupe) == -1){
      dupe.push(e)
        $('html body #wrapper #container #main #visit #page .quick .feed').append(
          "<div class='asset' aria-item='" + menu.indexOf(menu[e]) + "'>" +
          "  <img src='" + menu[e].img.image() + "' " + "'> " +
          "  <a title='" + menu[e].id + "'>" +
               String(menu[e].id.match(/[^\/]+$/g)).substring(0,9) + '...' +
          "  </a>" +
          "</div>"
       )
     }
  }
  visual()
}

var progress = function(done, n) {

  if (!location.href.match('\\?+1') &&
      !location.href.match('\\?q=') &&
      !location.href.match('\\+1') &&
      !location.href.match('\\?') &&
      contrast == true) {
    var uri = window.location.href + '?+1'
    uri.state()
  }
  $(document).ready(function() {
    if (done == true) {
      $('#progressBar').css({
        '-webkit-transition-delay': '0s',
        '-webkit-transition': '.55s',
        '-moz-transition-delay': '0s',
        '-moz-transition': '.55s'
      }).width(n + '%')
      $('#progressBar').on(
        'transitionend webkitTransitionEnd oTransitionEnd',
        function(e) {
          $('#progressBar').css({
            '-webkit-transition-delay': 'none',
            '-webkit-transition': 'none',
            '-moz-transition-delay': 'none',
            '-moz-transition': 'none'
          }).width(0)
          $('html body #wrapper #container #main #group').show()
          $('html body #wrapper #container #main #feed').show()
          if (onlyImages == false)
            $('html body #wrapper #container #main').scrollTop($('.air').outerHeight())
            if (reader == true && stop == true && first == true){
                if ($('html body #wrapper #container #main').innerHeight() >=
                    $('html body #wrapper #container #main #feed .channel').innerHeight()){
                      if ($.active <= 0){
                        first = false
                        xml(null, null, $.random())
                      }
                } else first = false
            }
        })
      visual()
    }
  })

}

var suggest = function(n) {

      var duplicate = []
      for (var i = 0; i <= 4; i++) {
        var e = menu.indexOf(menu[Math.floor(Math.random() * menu.length - 1)])
        duplicate.push(e)
        if (menu[e] && e != 0 && $.inArray(duplicate, e) == -1){
          if (menu[e].media == true) var contains = 'feed contains images'
          else if (menu[e].media == false) var contains = 'feed might not contain images'
          $('html body #wrapper #container #main .suggestions').append(
            "<div class='combine'>" +
            "  <img src='" + menu[e].img.image() + "'>" +
            "  <div class='suggest' aria-item='" + menu.indexOf(menu[e]) + "'" +
            "    title='" + menu[e].id + "'><b>" +
                 String(menu[e].id.match(/[^\/]+$/g)).substring(0,18) + "</b>..." +
    		    "    <br><div>" + contains + "</div>" +
            "  </div>" +
            "  <a style='float:right' aria-item='" + menu[e].cat + "'" +
    		    "	   title='" + menu[e].cat + "'>" +
                 menu[e].cat +
    		    "  </a>"
          )
        }
      }

}

var populate = function(n) {

    $(document).ready(function() {
      $('html body #wrapper #container #main').append(
        "<div id='group'>" +
        "  <div class='result'>" +
        "  </div>" +
        "</div>"
      )
    if (id && !location.href.match('\\?q=') && id != 0){
      if (menu[id].media == true) var media = "<div class='media' style='display:none'>Images</div>"
      else var media = "<div class='blank'></div>"
      $('html body #wrapper #container #main #group .result').append(
        "<div class='populate'" +
        "  aria-item='" + menu.indexOf(menu[id]) + "'>" +
        "  <div class='display'>" +
        "    <img src='" + menu[id].img.image() + "'> " +
        "    <a class='title' ext='" + menu[id].ext + "'" +
        "      title='" + menu[id].id +  "'>" +
               String(menu[id].id.match(/[^\/]+$/g)).substring(0,9) + "..." +
        "    </a>" +
        "  </div>" +
        "  <div class='hash' style='display:none'>" + menu[id].hash + "</div>" +
           media +
        "  <div class='description' style='display:none'>" + menu[id].des + "</div>" +
        "</div>"
      )
    }
    for (var i = 1; i <= menu.length - 1; i++) {
      if (menu[i].media == true) var media = "<div class='media' style='display:none'>Images</div>"
      else var media = "<div class='blank'></div>"
      if (onlyImages == true){
        if (id != menu.indexOf(menu[i]) && menu[i].media == true && n == menu[i].cat)
          $('html body #wrapper #container #main #group .result').append(
            "<div class='populate'" +
            "  aria-item='" + menu.indexOf(menu[i]) + "'>" +
            "  <div class='display'>" +
            "    <img src='" + menu[i].img.image() + "'> " +
            "  <a class='title' ext='" + menu[i].ext + "'" +
            "    title='" + menu[i].id + "'>" +
                 String(menu[i].id.match(/[^\/]+$/g)).substring(0,9) + "..." +
            "  </a>" +
            "  </div>" +
            "  <div class='hash' style='display:none'>" + menu[i].hash + "</div>" +
               media +
            "  <div class='description' style='display:none'>" + menu[i].des + "</div>" +
            "</div>"
          )
      } else if (onlyImages == false){
          if (id != menu.indexOf(menu[i]) && n == menu[i].cat)
            $('html body #wrapper #container #main #group .result').append(
              "<div class='populate'" +
              "  aria-item='" + menu.indexOf(menu[i]) + "'>" +
              "  <div class='display'>" +
              "    <img src='" + menu[i].img.image() + "'> " +
              "  <a class='title' ext='" + menu[i].ext + "'" +
              "    title='" + menu[i].id + "'>" +
                   String(menu[i].id.match(/[^\/]+$/g)).substring(0,9) + "..." +
              "  </a>" +
              "  </div>" +
              "  <div class='hash' style='display:none'>" + menu[i].hash + "</div>" +
                 media +
              "  <div class='description' style='display:none'>" + menu[i].des + "</div>" +
              "</div>"
            )
        }
    }
    display(expand)
    if (onlyImages == false) air(category)
    else if (onlyImages == true) $.unloading()
  })
}

var air = function(n) {

  $(document).ready(function () {
  $('html body #wrapper #container #main #group .result').before("<div class='air'></div>")
  for (var i = 1; i < menu.length - 1; i++) {
    if (menu[i].media == true) var media = "<div class='media' style='display:none'>Images</div>"
    else var media = "<div class='blank'></div>"
    if (category == menu[i].cat)
      $('html body #wrapper #container #main #group .air').append(
        "<div class='populate'" +
        "  aria-item='" + menu.indexOf(menu[i]) + "'>" +
        "  <div class='display'>" +
        "    <img src='" + menu[i].img.image() + "'> " +
        "    <a class='title' ext='" + menu[i].ext + "'" +
        "      title='" + menu[i].id + "'>" +
               String(menu[i].id.match(/[^\/]+$/g)).substring(0,9) + "..." +
        "    </a>" +
        "  </div>" +
        "  <div class='hash' style='display:none'>" + menu[i].hash + "</div>" +
           media +
        "  <div class='description' style='display:none'>" + menu[i].des + "</div>" +
        "</div>"
      )
  }
  $('html body #wrapper #container #main #group').attr('tabindex', -1).focus()
  display(expand)
  $.unloading()
  visual()
})
}

var response = function(passthrough, uri, n, bloat) {
  id = false
  filter = []
  exact = false
  $('html body #wrapper #container #main #visit').hide()
    if ($.inArray(n.toString().capitalize(), translations) > -1){
      category = n.capitalize()
      $(document).ready(function() {
        populate(n.capitalize())
        $.unloading()
      })
      return false
    }
  if (n) var n = n.toString().space()
  if (uri) uri = uri.toString().space()
  else uri = n
    for (var i = 1; i <= menu.length - 1; i++) {
      if (menu[i].hash == n) {
        filter.push(menu.indexOf(menu[i]))
        if (passthrough == false) write(menu.indexOf(menu[i]))
        exact = i
        id = i
        break
      } else if (menu[i].id.space() == n.toLowerCase() || menu[i].id.space() == uri.toLowerCase()) {
        filter.push(menu.indexOf(menu[i]))
        var exact = i
        id = i
        break
      } else if (menu[i].id.space().match(n.toLowerCase()) || menu[i].id.space().match(uri.toLowerCase()))
          filter.push(menu.indexOf(menu[i]))
        else if (menu[i].des.match(n.toLowerCase()) || menu[i].des.match(uri.toLowerCase()))
          filter.push(menu.indexOf(menu[i]))
        else if (menu[i].cat.toLowerCase().match(n) || menu[i].cat.toLowerCase().match(uri))
          filter.push(menu.indexOf(menu[i]))
    }
    if (!id) id = filter[0]
    if (filter.length == 0) xml('search', n, 0, null)
    if (passthrough == false) {
      $(document).ready(function() {
        $('html body #wrapper #container #main #visit').hide()
        $('html body #wrapper #container #main').append(
          "<div id='group'>" +
          "  <div class='result'>" +
          "  </div>" +
          "</div>"
        )
        for (i = filter.length - 1; i >= 0; i--) write(filter[i])
        $.unloading()
      })
    } else if (passthrough == true) {
      if ($.isNumeric(exact)) xml(null, null, exact)
      else if ($.isNumeric(id) && filter.length == 1) xml(null, null, id)
    }
    if (passthrough == false && bloat == true && id) populate(menu[id].cat)

}

var write = function(n) {

  if (menu[n].media == true) var media = "<div class='media' style='display:none'>Images</div>"
  else var media = "<div class='blank'></div>"

  $(document).ready(function() {
    $('html body #wrapper #container #main #group .result').prepend(
      "<div class='filter' " +
      "  aria-item='" + menu.indexOf(menu[n]) + "'>" +
      "  <div class='display'>" +
      "    <img src='" + menu[n].img.image() + "'> " +
      "  </div>" +
      "  <a class='title' ext='" + menu[n].ext + "'" +
      "    title='" + menu[n].id + "'>" +
           menu[n].id.match(/[^\/]+$/g) +
      "  </a>" +
      "  <div class='hash' style='display:none'>" + menu[n].hash + "</div>" +
         media +
      "  <div class='description' style='display:none'>" + menu[n].des + "</div>" +
      "</div>"
    )
  })
}

var source = function(xhr) {

  if ($(xhr).find('content').text().match(/https:\/\/i\.redd\.it\/.+?(gif|png|jpg|mp4)/g))
    src = String($(xhr).find('content').text().match(/https:\/\/i\.redd\.it\/.+?(gif|png|jpg|mp4)/g))
  else if ($(xhr).find('content').text().match(/https:\/\/.\.thumbs\.redditmedia\.com\/.+?(gif|png|jpg|mp4)/g))
    src = String($(xhr).find('content').text().match(/https:\/\/.\.thumbs\.redditmedia\.com\/.+?(gif|png|jpg|mp4)/g))
  else if ($(xhr).find('content').text().match(/src=['"]https:\/\/.+?(gif|png|jpg|mp4)['"]/))
    src = String($(xhr).find('content').text().match(/src=['"](.*?)['"]/)[1])
  else if ($(xhr).find('link').attr('href')) {
    if ($(xhr).find('link').attr('href').match(/youtube\.com/))
      src = 'https://www.youtube.com/embed/' + String($(xhr).find('link').attr('href').split('=')[1])
    else src = String($(xhr).find('link').attr('href'))
  } else if ($(xhr).find('content').text().match(/src=['"]https:\/\/.+?(gif|png|jpg|mp4)['"]/))
      src = String($(xhr).find('content').text().match(/src=['"](.+)['"]/)[1])
    else if ($(xhr).find('link').attr('href'))
      src = String($(xhr).find('link').attr('href'))
    else if ($(xhr).find('media\\:thumbnail, thumbnail').attr('url'))
      src = String($(xhr).find('media\\:thumbnail, thumbnail').attr('url'))
    else if ($(xhr).find('link').text().match(/https:\/\/.+?(gif|png|jpg|mp4)/))
      src = String($(xhr).find('link').text().match(/https:\/\/.+?(gif|png|jpg|mp4)/)[0])
    else if ($(xhr).find('image').find('link, url').text().match(/https:\/\/.+?(gif|png|jpg|mp4)/))
      src = String($(xhr).find('image').find('link, url').text().match(/https:\/\/.+?(gif|png|jpg|mp4)/)[0])
    else if ($(xhr).find('enclosure').attr('url')) src = String($(xhr).find('enclosure').attr('url'))
    else if ($(xhr).find('media\\:content, content').attr('url')) src = String($(xhr).find('media\\:content, content').attr('url'))
    else if ($(xhr).find('content\\:encoded').text().match(/img.+src=['"](.*?)['"]/))
      src = String($(xhr).find('content\\:encoded').text().match(/img.+src=['"](.*?)['"]/)[1])
    else if ($(xhr).find('description').text().toLowerCase().match(/src=['"](.*?)['"]/))
      src = String($(xhr).find('description').text().toLowerCase().match(/src=['"](.*?)['"]/)[1])
    else if ($(xhr).find('image').text()) src = String($(xhr).find('image').text())
    else src = null
    return src

}

var greenwich = function(channel, datetime) {

  var parse = []
  if (channel == 'entry') {
    var re = $(datetime).find('link').attr('href')
    var dst = $(datetime).find('updated').text().zulu();
    var since = new Date($(datetime).find('updated').text()).getTime()
    var gen = $(datetime).find('updated').text().toLocaleString()
    gen = parseInt(gen.match(/([0-9]+\:[0-9]+\:[0-9]+)/g).toString().replace(/\:/g, '')).toString(36)
    parse.push({
      since: since,
      dst: dst[0],
      gen: gen,
      re: re.trim()
    })
  } else if (channel = 'item') {
    if ($(datetime).find('datetime').text().length > -1) {
      var re = $(datetime).find('link').text()
      var ts = parseInt($(datetime).find('datetime').text());
      var ts_ms = ts * 1000
      var date = new Date(ts_ms)
      var year = date.getFullYear()
      var mon = ("0" + (date.getMonth() + 1)).slice(-2)
      var min = ("0" + date.getMinutes()).slice(-2)
      var sec = ("0" + date.getSeconds()).slice(-2)
      var hour = ("0" + date.getHours()).slice(-2)
      var date = ("0" + date.getDate()).slice(-2)
      var def = year + "-" + mon + "-" + date + " " + hour + ":" + min + ":" + sec
      var dst = def.zulu()
      var since = new Date(parseInt($(datetime).find('datetime').text()))
      var gen = parseInt($(datetime).find('datetime').text()).toString(36)
      parse.push({
        since: since,
        dst: dst[0],
        gen: gen,
        re: re.trim()
      })
    } else if ($(datetime).find('pubDate').text().length > -1) {
      var re = $(datetime).find('link').text()
      var dst = $(datetime).find('pubDate').text().zulu();
      var since = new Date($(datetime).find('pubDate').text())
      var gen = new Date($(datetime).find('pubDate').text()).toLocaleString()
      gen = parseInt(gen.match(/([0-9]+\:[0-9]+\:[0-9]+)/g).toString().replace(/\:/g, '')).toString(36)
      parse.push({
        since: since,
        dst: dst[0],
        gen: gen,
        re: re.trim()
      })
    } else if ($(datetime).find('dc\\:date, date').text().length > -1) {
      var re = $(datetime).find('link').text()
      var dst = $(datetime).find('dc\\:date, date').text().zulu();
      var since = new Date($(datetime).find('dc\\:date, date').text())
      var gen = new Date($(datetime).find('dc\\:date, date').text()).getTime()
      parse.push({
        since: since,
        dst: dst[0],
        gen: gen,
        re: re.trim()
      })
    } else parse.push('')
  }
    return parse[0]

}

var guideImage = function(src) {
  $('#guide').find('.img').attr('src', src)
  .on('load', function() {
      $('html body #wrapper #container #guide .sticky').show()
      $('html body #wrapper #container #main').addClass('guide')
      $('html body #wrapper #container #guide .checkmark').show()
      if ($(this).get(0).naturalWidth >= $(this).get(0).naturalHeight) $(this).css('max-width', '70vw')
      else if ($(this).get(0).naturalHeight >= $(this).get(0).naturalWidth) $(this).width('100%').css({
        'max-height': '90vh',
        'max-width': '40vw'
      })
      $(this).show().fadeIn(750)
  })
}

var image = function(empty, n, item, src) {

  var maximum = 799
  var minimum = 299
  var small = 120
  var k = 5420

  if (src && src.match(/\.mp4/g)) {
    $('.' + n).find(' .' + item).parents('.item, #guide').fadeIn(1000).find('.fill').remove()
    return false
  }
  if (src && src.match(/https?\:\/\//g) && !src.match(/assets|comments|default|feeds|fsdn|undefined/g)) {
  $('.' + n).find(' .' + item).attr('src', src)
  .on('error', function() {
    $(this).parents('.item').css('padding-bottom', '30px').parents('.item').find('.url, .share, .source, .image, .fill').remove()
  }).on('load', function() {
    if ($('html body #wrapper #container #main').width() <= 425) {
      if ($(this).get(0).naturalWidth > minimum){
        $(this).addClass('default').width('100%')
          .parents('.item, #guide').find('.header .attribute').css('height','115px').find('.post, .picture').show()
      }
      else if ($(this).get(0).naturalWidth < maximum)
          $(this).width(99)
          .parents('.image').css({
            'margin': '12px'
          }).parents('.item')
          .find('.classic').css({
            'margin-bottom': '30px',
            'align-items': 'center',
            'display': 'flex'
           }).find('.tag').remove()
      else if ($(this).get(0).naturalHeight >= $(this).get(0).naturalWidth * 2){
        $(this).width('30vh').addClass('default')
          .parents('.item, #guide').find('.header .attribute').css('height','115px').find('.post, .picture').show()
      } else if ($(this).get(0).naturalWidth >= $(this).get(0).naturalHeight ||
        $(this).get(0).naturalHeight >= $(this).get(0).naturalWidth) {
        $(this).width('100%').addClass('default')
          .parents('.item, #guide').find('.header .attribute').css('height','115px').find('.post, .picture').show()
      }
    } else {
      if ($(this).get(0).naturalHeight > k) $(this).parents('.item').find('.image, .fill, .tag').remove()
      else if ($(this).get(0).naturalWidth < minimum)
        $(this).width('100%')
        .parents('.image').css({
          'margin': '12px'
        }).parents('.item')
          .find('.classic').css({
            'margin-bottom': '30px',
            'align-items': 'center',
            'display': 'flex'
          }).find('.tag').remove()
      else if ($(this).get(0).naturalHeight >= $(this).get(0).naturalWidth * 2){
        $(this).addClass('default').width('30vh')
          .parents('.item, #guide').find('.header .attribute').css('height','115px').find('.post, .picture').show()
      } else if ($(this).get(0).naturalWidth >= $(this).get(0).naturalHeight ||
        $(this).get(0).naturalHeight >= $(this).get(0).naturalWidth) {
        $(this).addClass('default').width('100%')
          .parents('.item, #guide').find('.header .attribute').css('height','115px').find('.post, .picture').show()
      }
  }
    $('.' + n).find(' .' + item).parents('.item, #guide').find('.img').show().fadeIn(1000)
    $('.' + n).find(' .' + item).parents('.item, #guide').find('.fill').remove()
    visual()
  })
  } else if (empty == true || onlyImages == true) $('.' + n).find(' .' + item).parents('.item').remove()
    else $('.' + n).find(' .' + item).parents('.item').css('padding-bottom', '30px').find('.image, .tag, .fill').remove()

}

var xml = function(e, s, n) {

  id = n
  obj = []
  var local
  var pub = []
  var src = ''
  var images = []
  if (e == 'search') {
    uri = cors + menu[n].uri + s + '&format=RSS'
    category = category
  } else {
    uri = cors + menu[n].uri
    category = menu[n].cat
  }

  var doc = menu[n].id.space().capitalize()
  document.title = doc
  $('html body #wrapper #container #main #visit').hide()

  if (reader == true && first == true)
    $('html body #wrapper #container #main #group, ' +
      'html body #wrapper #container #main .center, ' +
      'html body #wrapper #container #main .content').remove()

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
    $('html body #wrapper #container #main').append(stage)
    $('html body #wrapper #container #main .channel').html("This site could not be reached.")
    $.unloading()
    visual()
  }).done(function(xhr) {

    if (op == 0 && $('html body #wrapper #container #main').width() <= 425)
      var style = "style='box-shadow:1px 1px 2px #f0f0f0'"
    else var style = ''

    if ($(xhr).find('entry').length > 0) var channel = "entry"
    else var channel = 'item'

    var quit = $(xhr).find(channel).length - 2

    if (menu[n].id.match(/Imgur/g)) quit = 50

    $(xhr).find(channel).each(function(i) {

      var parse = greenwich(channel, $(this))

      var share = menu[n].hash
      var timestamp = (parse.gen).toString(36)
      var share = window.location.origin + '/?' + share + timestamp

      var src = source($(this))

      if (src && src.match(/\.mp4/g)) var video = "<video src='" + src + "' controls>"
      else var video = ''

      if (src && src.match(/ytimg/g)) var yt = 'yt'
      else var yt = ''

      courtesy =
        "<div class='courtesy' style='float:left'>" +
        "  <img src='" + menu[n].img.image() + "'>" +
        "  <a ext='" + menu[n].ext + "'>" +
        "    <b>" + menu[n].id.match(/([^\/]+)$/g) + "</b>" +
        "  </a>" +
        "  <div class='copy fa-ellipsis-h'>" +
        "    <div class='attribute'>" +
        "      <div class='site'>🧲 Copy Url</div>" +
        "      <div class='post'>💌 Copy Post</div>" +
        "      <div class='picture'>🔖 Copy Source</div>" +
        "    </div>" +
        "  </div>" +
        "</div>"

      if ($(this).find('title:first').text().length > 125) var more = "<div class='more'>more</div>"
      else var more = ""

      if (e == 'search') var cat = "<div class='external'>" + parse.re + "</div>"

      if (src && src.match(/youtube\.com/g)) {

        if ($(this).find('media\\:statistics, statistics').attr('views'))
            var views = "<div class='ago views'>" +
                        "  views " + $(this).find('media\\:statistics, statistics').attr('views')
                           .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
                        "</div>"
        else var views = ''

        html = "<div id='yt' class='item' " + style + " ext='" + parse.re + "'>" +
               "  <div class='header'>" + courtesy + "</div>" +
               "  <div class='yt'>" +
               "    <iframe src='" + src + "'></iframe>" +
                    views +
               "  </div>" +
               "  <div class='pub' " + "text='" +
                    $(this).find('title:first').text().escape() + "'>" +
                    $(this).find('title:first').text().truncate(125, true).escape() +
                    more +
               "  </div>" +
               "  <div class='ago'>" + parse.dst + "</div>" +
               "</div>"

      } else {

        if (!cat) cat = ''
        html = "<div class='item " + n + " " + yt + "' " + style + " item='" + i + "' ext='" + parse.re + "'>" +
               "  <div class='header'>" + courtesy + "</div>" +
               "  <div class='classic'>" +
               "    <div class='fill'><div class='loader double-circle'></div></div>" +
               "    <div class='image'>" + video +
               "      <div class='fa fa-heart'></div>" +
               "      <img id='" + i + "' class='" + i + " img' style='display:none'>" +
               "    </div>" +
               "    <div class='wrap'>" +
/*
               tag +
*/
               "      <div class='pub' text='" +
                        $(this).find('title:first').text().escape() + "'>" +
                        $(this).find('title:first').text().truncate(125, true).escape() +
                        more +
               "      </div>" +
               "      <div class='ago zulu'>" + parse.dst + "</div>" +
               "    </div>" +
               "    <input class='url' value='" + parse.re + "'>" +
               "    <input class='share' value='" + share + "'>" +
               "    <input class='source' value='" + src + "'>" + cat +
               "  </div>" +
               "</div>"

      }

      pub.push({
        title: $(this).find('title:first').text().escape(),
        courtesy: courtesy,
        since: parse.since,
        dst: parse.dst,
        gen: parse.gen,
        re: parse.re,
        share: share,
        more: more,
        element: i,
        post: html,
        src: src
      })
      pub.sort(function(a, b) { return b.since - a.since })
      $.each(pub, function(i) { if (parseInt(pub[i].gen, 36) == post) local = i })
    })
    if (first == true) $('html body #wrapper #container #main').append(stage)
    if ($.isNumeric(local)) {
      var sticky = []
      sticky.push({
        courtesy: pub[local].courtesy,
        element: pub[local].element,
        title: pub[local].title,
        share: pub[local].share,
        dst: pub[local].dst,
        src: pub[local].src,
        re: pub[local].re,
        id: n
      })
      guide(false, sticky)
    } else $('#guide').hide()
    $.each(pub, function(i, k) {

      if (i == quit) return false

      if ($.isNumeric(local) && pub[local].element != pub[i].element && pub[i].title != '')
        $('html body #wrapper #container #main #feed .center .channel').append(pub[i].post)
      else if (!$.isNumeric(local) && pub[i].title != '')
        $('html body #wrapper #container #main #feed .center .channel').append(pub[i].post)
      if (menu[n].id.match(/Imgur/g)) image(true, n, pub[i].element, pub[i].src)
      else image(false, n, pub[i].element, pub[i].src)

    })
    var posts = $('html body #wrapper #container #main .center .channel .item').length

    var recent = $('.' + n + '.item .zulu:first').text()
    var oldest = $('.item .ago:last').text()
    if (first == true) stop = true
    else $('html body #wrapper #container #main .content .status, ' +
           'html body #wrapper #container #main .content .suggestions').empty()
    if (reader == false) footer()
    $('html body #wrapper #container #main #feed').attr('tabindex', -1).focus()
    content(n, recent, oldest, posts)
    clearInterval(complete)
    suggest()
    feed(10)
    if (loading == 'percent') progress(true, 100)
    else $.unloading()
  })
}
