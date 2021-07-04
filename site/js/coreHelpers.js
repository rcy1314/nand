var init = function () {
  if (document.body.contains(document.getElementById(`group`)))
    document.querySelector(`#group`).remove();
  if (loading == `dots`) {
    _progress.style.width = `0%`;
    document.querySelector(`#dots`).style.zIndex = `12`;
    document
      .querySelectorAll(`#dots .fill`)
      .forEach((a) => (a.style.zIndex = `12`));
    document
      .querySelectorAll(`#dots .fill`)
      .forEach((a) => a.classList.add(`dots`));
    document
      .querySelectorAll(`#dots .fill`)
      .forEach((a) => (a.style.visibility = `visible`));
  } else if (loading == `percent`) {
    progressBackDrop(false);
  }
};

var unloading = function () {
  if (loading == `dots`) {
    document
      .querySelectorAll(`#dots .fill`)
      .forEach((a) => a.classList.remove(`dots`));
    document
      .querySelectorAll(`#dots .fill`)
      .forEach((a) => (a.style.visibility = `hidden`));
    progressBackDrop(true);
  } else if (loading == `percent`) {
    progressBackDrop(true);
  }
};

const cyrb53 = function(str, seed = 0) {
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for (let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1>>>16), 2246822507) ^ Math.imul(h2 ^ (h2>>>13), 3266489909);
    h2 = Math.imul(h2 ^ (h2>>>16), 2246822507) ^ Math.imul(h1 ^ (h1>>>13), 3266489909);
    return (h2>>>0).toString(16).padStart(8,0)+(h1>>>0).toString(16).padStart(8,0);
};

var truncate = function (i, n, useWordBoundary) {
  if (i.length <= n) return i;
  let subString = i.substr(0, n - 1);
  return (
    (useWordBoundary
      ? subString.substr(0, subString.lastIndexOf(` `))
      : subString)
  );
};

var randomizeAssets = function (array) {
  let adjusted = [];
  // Fisher-Yates (aka Knuth) Shuffle
  var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
    array[randomIndex], array[currentIndex]];

  }

  return array;
}

var anyRandomMenuObject = function () {
  let random = []
  for (i = 1; i <= menu.length - 1; i++) {
    if (
      onlyImages == true &&
      justRead == false
    ) {
      if (
        menu[i]
      )
        random.push(menu.indexOf(menu[i]));
    } else if (
      onlyImages == true &&
      justRead == true
    ) {
      if (
        menu[i] &&
        menu[i].media == true
      )
        random.push(menu.indexOf(menu[i]));
    } else if (onlyImages == false) {
      random.push(menu[i]);
    }
  }
  var randomObject = random[Math.floor(Math.random() * random.length - 1)];
  while (
    menu[randomObject] &&
    !randomDuplicate.includes(randomObject)
  )
  randomObject = randomObject;
  if (justRead == false) {
    randomDuplicate.push(randomObject);
    return randomObject
  } else if (
    justRead == true &&
    onlyImages == false
  ) {
    var randomObject =
      menu.indexOf(menu[Math.floor(Math.random() * menu.length - 1)]);
    randomDuplicate.push(randomObject);
    return randomObject;
  } else if (
    justRead == true &&
    onlyImages == true
  ) {
    randomDuplicate.push(randomObject);
    return randomObject;
}
};

function scrollToElm(touch, container, elm, duration){
  var pos = getRelativePos(elm);
  scrollTo( touch, container, pos.top , 10);  // duration in seconds
}

function sideScrollToElm(touch, container, elm, duration){
  var pos = getRelativePos(elm);
  sideScrollTo( touch, container, pos.left , 50);  // duration in seconds
}

function getRelativePos(elm){
  var pPos = elm.parentNode.getBoundingClientRect(), // parent pos
      cPos = elm.getBoundingClientRect(), // target pos
      pos = {};

  pos.top    = cPos.top    - pPos.top + elm.parentNode.scrollTop,
  pos.right  = cPos.right  - pPos.right,
  pos.bottom = cPos.bottom - pPos.bottom,
  pos.left   = elm.scrollLeft - elm.parentNode.scrollLeft + elm.parentNode.clientWidth;

  return pos;
}

function scrollTo(touch, element, to, duration, onDone) {
  if (touch == true) {

    var start = element.scrollTop,
        change = to - start,
        startTime = performance.now(),
        val, now, elapsed, t;
    function animateScroll(){
        now = performance.now();
        elapsed = (now - startTime)/50;
        t = (elapsed/duration);

        element.scrollTop = start + change * easeInOutQuad(t);

        if( t < 1 )
            window.requestAnimationFrame(animateScroll);
        else
            onDone && onDone();
    };

    animateScroll();
  }
}

function sideScrollTo(touch, element, to, duration, onDone) {
  if (touch == true) {

    var start = element.scrollLeft,
        change = to + start,
        startTime = performance.now(),
        val, now, elapsed, t;
    function animateScroll(){
        now = performance.now();
        elapsed = (now - startTime)/50;
        t = (elapsed/duration);

        element.scrollLeft = start + change * easeInOutQuad(t);

        if( t < 1 )
            window.requestAnimationFrame(animateScroll);
        else
            onDone && onDone();
    };

    animateScroll();
  }
}

function easeInOutQuad(t){ return t<.5 ? 2*t*t : -1+(4-2*t)*t };

String.prototype.zulu = function () {
  var opt = {
    weekday: `long`,
    day: `2-digit`,
    month: `short`,
    hour: `numeric`,
    minute: `numeric`,
    hour12: true,
  };
  let dmz = [];
  let utc = new Date(this);
  dmz.push(this.moment());
  let gmt = utc.toLocaleString(`en-US`, opt);
  dmz.push(gmt);

  return dmz;
};

String.prototype.moment = function () {
  let age = new Date();
  let utc = new Date(this);
  let dis = age.getTime() - utc.getTime();
  if (dis < 0) dis = -dis;
  let sec = dis / 1000;
  if (sec < 60) return `${parseInt(sec)} second${parseInt(sec) > 1 ? `s` : ``}`;
  let min = sec / 60;
  if (min < 60) return `${parseInt(min)} minute${parseInt(min) > 1 ? `s` : ``}`;
  let h = min / 60;
  if (h < 24) return `${parseInt(h)} hour${parseInt(h) > 1 ? `s` : ``}`;
  let d = h / 24;
  if (d < 30) return `${parseInt(d)} day${parseInt(d) > 1 ? `s` : ``}`;
  let m = d / 30;
  if (m < 12) return `${parseInt(m)} month${parseInt(m) > 1 ? `s` : ``}`;
  let y = m / 121;

  return `${parseInt(y)} year ${parseInt(y) > 1 ? `s` : ``}`;
};

String.prototype.space = function () {
  return this.replace(/%20|\-|\_|\s|\+|\/|\.|\+1/g, ` `);
};

String.prototype.add = function () {
  return this.replace(/%20|\-|\_|\s|\+|\/|\.|\+1/g, ``);
};

String.prototype.hyphen = function () {
  return this.toLowerCase().replace(/%20|\-|\_|\s|\+|\/|\.|\+1/g, `-`);
};

String.prototype.image = function () {
  return `https://raw.githubusercontent.com/acktic/xml-publishers-images/master/${this}.webp`;
};

String.prototype.domain = function () {
  return this.match(/^(?:http:\/\/|www\.|https:\/\/)([^\/]+)/g);
};

String.prototype.capitalize = function () {
  return this.replace(/(\b[a-z](?!\s))/g, function (string) {
    return string.toUpperCase();
  });
};

String.prototype.state = function () {
  history.replaceState({}, '', this);
};

String.prototype.blank = function () {
  window.open(this, `_blank`, `noreferrer noopener`);
};

String.prototype.exit = function () {
  window.location.assign(this);
};
