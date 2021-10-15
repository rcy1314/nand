let init = function () {
  if (
    loading === `dots`
  ) {
    _progress.style.width = `0%`;
    _dots.style.zIndex = `12`;
    _dots
      .querySelectorAll(
        `.fill`
      )
      .forEach(
        (a) =>
          a.style.zIndex =
            `12`
      );
    _dots
      .querySelectorAll(
        `.fill`
      )
      .forEach(
        (a) =>
          a.classList.add(
            `dots`
          )
      );
    _dots
      .querySelectorAll(
        `.fill`
      )
      .forEach(
        (a) =>
          a.style.visibility =
          `visible`
      );
  }
  else if (
    loading === `percent`
  )
    Progress(false);
};

let unloading = function () {
  if (
    loading === `dots`
  ) {
    _dots
      .querySelectorAll(
        `.fill`
      )
      .forEach(
        (a) =>
        a.classList.remove(
          `dots`
        )
      );
    _dots
      .querySelectorAll(
        `.fill`
      )
      .forEach(
        (a) =>
          a.style.visibility =
          `hidden`
      );
    Progress(true);
  }
  else if (
    loading === `percent`
  )
    Progress(true);
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

let truncate = function (
  i,
  n,
  useWordBoundary
) {
  if (
    i.length <= n
  )
    return i;
  let subString = i.substr(0, n - 1);
  return (
    (useWordBoundary
      ? subString.substr(0, subString.lastIndexOf(` `))
      : subString)
  );
};

let randomizeAssets = function (Array) {
  // Fisher-Yates (aka Knuth) Shuffle
  var currentIndex = Array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex =
      Math.floor(
        Math.random() * currentIndex
      );

    currentIndex--;

    // And swap it with the current element.
    [Array[currentIndex], Array[randomIndex]] = [
    Array[randomIndex], Array[currentIndex]];

  }
  return Array;
}

let anyRandomMenuObject = function () {
  let random = [];
  let randomObject;
  for (
    i = 0;
    i <= menu.length - 1;
    i++
  ) {
    if (
      menu[i] &&
      onlyImages &&
      menu[i].media
    )
      random.push(
        menu.indexOf(
          menu[i]
        )
      );
    else if (
      !onlyImages
    )
      random.push(
        menu[i]
      );
  }
  randomObject =
    random[
      Math.floor(
        Math.random() * random.length - 1
      )
    ];
  console.log(`
    ${randomObject}
    ${menu[randomObject].id}
  `)
  while (
    !randomDuplicate.includes(randomObject) &&
    menu[randomObject]
  ) {
    randomDuplicate.push(randomObject);
    return randomObject;
  }
};

let scrollToElm = function (
  touch,
  container,
  elm,
  duration
){
  let pos = getRelativePos(elm);
  scrollTo(
    touch,
    container,
    pos.top,
    10
  );  // duration in seconds
}

let sideScrollToElm = function (
  touch,
  container,
  elm,
  duration
){
  let pos = getRelativePos(elm);
  sideScrollTo(
    touch,
    container,
    pos.left,
    50);  // duration in seconds
}

let getRelativePos = function (elm){
  var pPos = elm.parentNode.getBoundingClientRect(), // parent pos
      cPos = elm.getBoundingClientRect(), // target pos
      pos = {};

  pos.top    = cPos.top    - pPos.top + elm.parentNode.scrollTop,
  pos.right  = cPos.right  - pPos.right,
  pos.bottom = cPos.bottom - pPos.bottom,
  pos.left   =
    elm.scrollLeft - elm.parentNode.scrollLeft + elm.parentNode.clientWidth;

  return pos;
}

let scrollTo = function (
  touchmove,
  element,
  to,
  duration,
  onDone
) {
  if (
    touchmove
  ) {
    let start = element.scrollTop,
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

let sideScrollTo = function (
  touchmove,
  element,
  to,
  duration,
  onDone
) {
  if (
    touchmove
  ) {
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

let easeInOutQuad = function (t) {
  return t<.5 ? 2*t*t : -1+(4-2*t)*t
};

let forward = function (id) {
  let next = parseInt(id) + +1
  if (menu[next])
    return parseInt(next);
  else return 1
};

let back = function (id) {
  let back = parseInt(id) - +1
  if (menu[back])
    return parseInt(back);
  else return menu.length - 1
};
