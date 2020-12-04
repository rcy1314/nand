var init = function () {
  if (document.body.contains(document.getElementById(`group`)))
    document.querySelector(`#group`).remove();
  if (loading == `dots`) {
    document
      .querySelectorAll(`#dots .fill`)
      .forEach((a) => (a.style.zIndex = `11`));
    document
      .querySelectorAll(`#dots .fill`)
      .forEach((a) => a.classList.add(`dots`));
    document
      .querySelectorAll(`#dots .fill`)
      .forEach((a) => (a.style.visibility = `visible`));
  } else if (loading == `percent`) {
    document
      .querySelectorAll(`#dots .fill`)
      .forEach((a) => (a.style.zIndex = `-12`));
    width = _main.clientWidth / 7;
    complete = setInterval(function () {
      if (_progress.clientWidth >= _main.clientWidth - 17) {
        setTimeout(function () {
          clearInterval(complete);
          _progress.style.transition = `all 750ms ease-in-out`;
          _progress.style.opacity = `0`;
          setTimeout(function () {
            _progress.style.transition = `0`;
            _progress.style.width = `0%`;
          }, 750);
        }, 250);
      } else {
        _progress.style.opacity = `1`;
        _progress.style.transition = `all 1000ms ease-in-out`;
        _progress.style.width = _progress.clientWidth + width;
      }
    }, 1000);
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
    _progress.style.transition = `0`;
    _progress.style.width = `0%`;
    progressBackDrop(true);
  }
};

var truncate = function (i, n, useWordBoundary) {
  if (i.length <= n) return i;
  let subString = i.substr(0, n - 1);
  return (
    (useWordBoundary
      ? subString.substr(0, subString.lastIndexOf(` `))
      : subString) + `...`
  );
};

var anyRandomMenuObject = function () {
  for (i = 1; i <= menu.length - 1; i++) {
    if (onlyImages == true) {
      if (menu[i] && menu[i].category == category && menu[i].media == true)
        random.push(menu.indexOf(menu[i]));
    } else if (onlyImages == false) {
      if (menu[i].category == category) random.push(menu.indexOf(menu[i]));
    }
  }
  if (justRead == false)
    var randomObject = random[Math.floor(Math.random() * random.length - 1)];
  else if (justRead == true)
    var randomObject = menu[Math.floor(Math.random() * menu.length - 1)];
  if (menu[randomObject]) randomDuplicate.push(randomObject);
  if (menu[randomObject] && !randomDuplicate.includes(menu[randomObject]))
    randomObject = menu.indexOf(randomObject);
  else if (justRead == false)
    randomObject = random[Math.floor(Math.random() * random.length - 1)];
  else if (justRead == true)
    randomObject = menu[Math.floor(Math.random() * menu.length - 1)];
  randomObject = menu.indexOf(randomObject);
  return randomObject;
};

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

String.prototype.grep = function (string) {
  var string = this;
  let count = [];
  if (onlyImages == true) {
    return menu.filter((a) => a.category == string && a.media == true).length;
  } else if (onlyImages == false) {
    return menu.filter((a) => a.category == string).length;
  }
};

String.prototype.space = function () {
  return this.toLowerCase().replace(/%20|\-|\_|\s|\+|\/|\.|\+1/g, ` `);
};

String.prototype.image = function () {
  return `images/webp/${this}.webp`;
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
  history.replaceState(null, null, this);
};

String.prototype.blank = function () {
  window.open(this, `_blank`, `noreferrer noopener`);
};

String.prototype.exit = function () {
  window.location.assign(this);
};
