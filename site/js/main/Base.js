let handleSwipe = function () {
  if (
    touchendX - 75 >
    touchstartX
  ) {
    onScreen = true;
    sideBarDisplay(onScreen);
  } else if (
    touchendX + 75 <
    touchstartX
  ) {
    onScreen = false;
    if (sideBarLock == false) sideBarDisplay(onScreen);
  }
}

let handleGuide = function () {
  if (
    touchendX - 75 > touchstartX ||
    touchendX + 75 < touchstartX ||
    touchendY - 75 > touchstartY ||
    touchendY + 75 < touchstartY
  ) {
    if (
      Array.isArray(pub)
    )
      xmlAppendPublication(id);
    setTimeout(function () {
      if (complete) _progress.style.width = `100%`;
      _main.classList.remove(`guide`);
      while (_guide.lastChild)
        _guide.removeChild(_guide.lastChild);
      _guide.style.display = `none`;
      _check.style.display = `none`;
      topMenuBarDisplay(topBar);
      if (sideBarLock)
        onScreen = true;
      sideBarDisplay(onScreen);
      guideOnScreen = true;
      pub = null;
    }, 750)
  }
}

let sideBarStar = function (Elem, Value) {
  if (Value) {
    Elem.nextElementSibling.classList.remove(`fa-minus`)
    Elem.nextElementSibling.classList.add(`fa-splotch`)
  } else if (!Value) {
    Elem.nextElementSibling.classList.remove(`fa-splotch`)
    Elem.nextElementSibling.classList.add(`fa-minus`)
  }
}

let cleanup = function () {
  while (_air.firstChild)
    _air.removeChild(_air.lastChild);
  while (_result.firstChild)
    _result.removeChild(_result.lastChild);
  while (_channel.firstChild)
    _channel.removeChild(_channel.lastChild);
  while (_status.firstChild)
    _status.removeChild(_status.lastChild);
  while (_suggestions.firstChild)
    _suggestions.removeChild(_suggestions.lastChild);
}

let stageVisit = function () {
  _visit.style.display = `block`;
  _group.style.display = `none`;
  _xml.style.display = `none`;
  _group.style.zIndex = `-1`;
  _visit.style.opacity = `1`;
  _visit.style.zIndex = '1';
  _xml.style.zIndex = `-1`;
  cleanup();
}

let stageGroup = function () {
  _group.style.display = `block`;
  _visit.style.display = `none`;
  _xml.style.display = `none`;
  _group.style.zIndex = `1`;
  _xml.style.zIndex = `-1`
  cleanup();
}

let stageXML = function () {
  _visit.style.display = `none`;
  _group.style.display = `none`;
  _xml.style.display = `block`;
  _group.style.zIndex = `-1`
  _xml.style.zIndex = `1`;
  cleanup();
}

let displayLegacy = function () {
  _center.style.cssText = `justify-content:center !important`;
  _center.classList.add(`sideChannel`);
  _center.style.display = `inline-block`;
  _channel.classList.remove(`sideChannel`);
  _channel.style.height = `fit-content`;
  _channel.classList.remove(`flexbox`);
  _channel
    .querySelectorAll(`.item`)
    .forEach(
      (a) => a.classList.remove(`sideItem`)
    );
  _channel
    .querySelectorAll(`.item`)
    .forEach(
      (a) => a.classList.remove(`flexbox`)
    );
  _channel
    .querySelectorAll(`.item`)
    .forEach(
      (a) => a.style.width = `425px`
    );
  _xml.style.top = `60px`;
}

let displayFlex = function () {
  var height = 0;
  var second = 0;
  var groups = 0;
  var column = _channel.querySelectorAll(`.item:nth-child(3n+1)`);
  for (i = 0; i < column.length - 1; i++) height += column[i].clientHeight;
  var column = _channel.querySelectorAll(`.item:nth-child(3n+2)`);
  for (i = 0; i < column.length - 1; i++) second += column[i].clientHeight;
  var column = _channel.querySelectorAll(`.item:nth-child(3n+3)`);
  for (i = 0; i < column.length - 1; i++) groups += column[i].clientHeight;
  var max = Math.max(height, second, groups);
  var min = Math.min(height, second, groups);
  if (height == min) var min = `left:-310px;order:1`;
  else if (second == min) var min = `left:-310px;order:2`;
  else if (groups == min) var min = `left:-310px;order:3`;
  _channel.querySelector(`#bottom`).style.cssText = min;
  _channel.style.height = `${(max + 1000).toString()}px`
  _center.classList.remove(`sideChannel`);
  _center.style.cssText = `display:inline-flex;width:930px;left:320px`;
  _channel.classList.remove(`sideChannel`);
  _channel.classList.add(`flexbox`);
  _channel
    .querySelectorAll(`.item`)
    .forEach(
      (a) => a.classList.add(`flexbox`)
    );
  _channel
    .querySelectorAll(`.item`)
    .forEach(
      (a) => a.style.marginLeft = `0`
    );
  if (_main.clientWidth > 1280) {
    _display.style.display = `inline-block`;
  }
}

let displaySideScroll = function () {
  scrollIntoView = false;
  _channel.classList.add(`sideChannel`);
  _center.classList.add(`sideChannel`);
  _xml.style.justifyContent = `center`;
  _center.style.width = `35vw`;
  _xml.style.display = `flex`;
  _center.style.top = `60px`;
  _center.style.left = `0`;
  _xml.style.top = `0`;
  _channel
    .querySelectorAll(`.item`)
    .forEach(
      (a) => a.classList.remove(`flexbox`)
    );
  _channel
    .querySelectorAll(`.item`)
    .forEach((a) => (a.classList.add(`sideItem`)));
  _channel
    .querySelectorAll(`.item`)
    .forEach((a) => (a.classList.add(`sideItem`)));
  _channel
    .querySelectorAll(`.classic`)
    .forEach((a) => (a.style.display = `block`));
  _channel.classList.remove(`flexbox`)
  _display.style.display = `inline-block`;
}

let displayExpand = function (Value) {
  if (Value) {
    groupType = `list`;
    if (
      document.body.contains(
        _group.querySelector(`.populate`)
      )
    ) {
      _group
        .querySelectorAll(`.populate`)
        .forEach(
          (a) => a.classList.add(`expand`)
        );
			_group
        .querySelectorAll(`.populate`)
        .forEach(
          (a) => a.classList.remove(`block`)
        );
    }
  } else if (!Value) {
    groupType = `blocks`;
    if (
      document.body.contains(
        _group.querySelector(`.populate`)
      )
    ) {
			_group
        .querySelectorAll(`.populate`)
        .forEach(
          (a) => a.classList.add(`block`)
        );
      _group
        .querySelectorAll(`.populate`)
        .forEach(
          (a) => a.classList.remove(`expand`)
        );
    }
  }
};

let sideBarDisplay = function (Value) {
  sideBarFirst = true;
  let content = document.querySelector(`#content`);
  if (Value) {
    setTimeout(
      function () {
        _sidebar.style.left = `0`;
      }, 300
    );
    if (
      _main.clientWidth >= 769 &&
      sideBarMouse == false
    )
      _hide.style.display = `none`;
    else if (
        sideBarMouse == false ||
        _main.clientWidth <= 425 &&
        sideScroll == true
      )
      _min.style.cssText = `display: block !important;`
      setTimeout(
        function () {
          _sidebar.querySelector(`.sideFilter`).style.visibility = `visible`;
          _sidebar.querySelector(`#basic`).style.visibility = `visible`;
          _sidebar.style.left = `0`;
        }, 300
      );
  } else if (!Value) {
    if (_main.clientWidth >= 768) {
      _sidebar.querySelector(`.bg`).style.height = `31px`;
      expandBackground = false;
      _sidebar.querySelector(`.set`).style.height = `31px`;
      expandSettings = false;
      _sidebar.querySelector(`.fav`).style.height = `31px`;
      expandFavorites = false;
      _sidebar.querySelector(`.themes`).style.height = `31px`;
      expandVisual = false;
      _sidebar.querySelector(`.exclude`).style.height = `31px`;
      expandFilter = false;
      _sidebar.querySelector(`.sideFilter`).style.visibility = `hidden`;
      _sidebar.querySelector(`#basic`).style.visibility = `hidden`;
      _sidebar.style.left = `-250px`;
      _sb.style.display = `none`;
    } else _sidebar.style.left = `-280px`;
  }
};

let topMenuBarDisplay = function (Value) {
  if (Value) {
    _view.style.display = `block`;
    _top.style.display = `block`;
  } else if (
    !Value
  )
    _top.style.display = `none`;
};

let quickFeedDisplay = function (Value) {
  if (Value) {
    _quick.style.zIndex = `1`;
    _quick
      .querySelectorAll(`.feed`)
      .forEach(
        (a) => a.style.display = `block`
      );
    _link.querySelector(`.fa-angle-up`).classList.remove(`rotateReverse`);
    _link.querySelector(`.fa-angle-up`).classList.add(`rotate`);
    _quick.classList.remove(`invisible`);
    _front.classList.add(`toggleHidden`);
    _options.classList.add(`invisible`);
    _social.classList.add(`invisible`);
    _front.classList.remove(`toggle`);
    _quick.classList.add(`visible`);
    _show.style.visibility=`hidden`;
    _under.style.display = `none`;
    if (
      _main.clientWidth <= 425
    )
    _sb.style.top = `-10px`;
  } else if (!Value) {
    _options.classList.remove(`invisible`);
    _social.classList.remove(`invisible`);
    _quick.style.zIndex = `-1`;
    _quick
      .querySelectorAll(`.feed`)
      .forEach(
        (a) => a.style.display = `none`
      );
    _link.querySelector(`.fa-angle-up`).classList.add(`rotateReverse`);
    _link.querySelector(`.fa-angle-up`).classList.remove(`rotate`);
    _front.classList.remove(`toggleHidden`);
    _under.style.display = `inline-flex`;
    _quick.classList.remove(`visible`);
    _quick.classList.add(`invisible`);
    _show.style.visibility=`visible`;
    _front.classList.add(`toggle`);
    if (
      _main.clientWidth <= 425
    )
      _sb.style.top = `7px`;
  }
};
