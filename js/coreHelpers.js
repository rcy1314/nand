var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
};

function whichTransitionEvent() {
  var t;
  var el = document.createElement("fakeelement");
  var transitions = {
    transition: "transitionend",
    OTransition: "oTransitionEnd",
    MozTransition: "transitionend",
    WebkitTransition: "webkitTransitionEnd",
  };

  for (t in transitions) {
    if (el.style[t] !== undefined) {
      return transitions[t];
    }
  }
}

function hasClass(elem, className) {
  return elem.classList.contains(className);
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

var init = function () {
  if (reader == false) {
    if (document.body.contains(document.getElementById("feed")))
      document.querySelector("#feed").remove();
    if (document.body.contains(document.getElementById("group")))
      document.querySelector("#group").remove();
  }
  if (loading == "dots") {
    document
      .querySelectorAll("#dots .fill")
      .forEach((a) => a.classList.add("dots"));
  } else if (loading == "percent") {
    var width = document.getElementById("main").clientWidth / 30;
    complete = setInterval(function () {
      document.getElementById("progressBar").style.transitionDelay = "0s";
      document.getElementById("progressBar").style.transition =
        "all .95s ease-in-out";
      document.getElementById("progressBar").style.width =
        document.getElementById("progressBar").clientWidth +
        Math.floor(Math.random() * (100 - width) + width);
    }, 750);
  }
};

var unloading = function () {
  if (loading == "dots") {
    document
      .querySelectorAll("#dots .fill")
      .forEach((a) => a.classList.remove("dots"));
    progressBackDrop(true, 0);
  } else if (loading == "percent") {
    clearInterval(complete);
    progressBackDrop(true, 100);
  }
};

var escape = function (n) {
  return n.replace(/<.>/g, "");
};

var truncate = function (i, n, useWordBoundary) {
  if (i.length <= n) {
    return i;
  }
  var subString = i.substr(0, n - 1);
  return (
    (useWordBoundary
      ? subString.substr(0, subString.lastIndexOf(" "))
      : subString) + "..."
  );
};

var next = function () {
  if (filter.length > 1)
    var plus = filter.indexOf(menu.indexOf(menu[parseInt(id)]));
  else var plus = parseInt(id);
  if (filter[plus + +1]) var next = filter[plus + +1];
  else if (id == menu.length - 1) var next = 1 + +1;
  else var next = parseInt(id) + +1;

  return parseInt(next);
};

var back = function () {
  if (filter.length > 1)
    var plus = filter.indexOf(menu.indexOf(menu[parseInt(id)]));
  if (filter[plus - +1]) var back = filter[plus - +1];
  else if (id == 0) var back = menu.length - 1;
  else var back = parseInt(id) - +1;

  return parseInt(back);
};

var anyMenuRandomObject = function () {
  for (i = 1; i <= menu.length - 1; i++) {
    if (onlyImages == true) {
      if (menu[i].cat == category && menu[i].media == true)
        random.push(menu.indexOf(menu[i]));
    } else if (onlyImages == false) {
      if (menu[i].cat == category) random.push(menu.indexOf(menu[i]));
    }
  }
  var randomObject = random[Math.floor(Math.random() * random.length - 1)];
  if (menu[randomObject]) randomDuplicate.push(randomObject);
  if (random.length == randomDuplicate.length && reader == true) {
    randomDuplicate = [];
    reader = false;
    footerBuild();
  } else if (random.length == randomDuplicate.length) randomDuplicate = [];
  else
    for (i = 0; i < random.length; i++) {
      if (menu[randomObject] || !randomDuplicate.includes(n)) randomObject = randomObject;
      else var randomObject = random[Math.floor(Math.random() * random.length - 1)];
    }
  return randomObject;
};

String.prototype.space = function () {
  return this.toLowerCase().replace(/%20|\-|\_|\s|\+|\/|\.|\+1/g, " ");
};

String.prototype.image = function () {
  return "images/webp/" + this + ".webp";
};

String.prototype.hyphen = function () {
  return this.toLowerCase().replace(/\/|\.|\s/g, "-");
};

String.prototype.domain = function () {
  return this.match(/^(?:http:\/\/|www\.|https:\/\/)([^\/]+)/g);
};

String.prototype.define = function () {
  var n = this;
  if (contrast == true && !location.href.match("\\+1")) n = n + "+1";
  else if (contrast == true) n = n + "+1";
  return n;
};

String.prototype.zulu = function () {
  var opt = {
    weekday: "long",
    day: "2-digit",
    month: "short",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  var dmz = [];
  var utc = new Date(this);
  dmz.push(this.moment());
  var gmt = utc.toLocaleString("en-US", opt);
  dmz.push(gmt);

  return dmz;
};

String.prototype.capitalize = function () {
  return this.replace(/(\b[a-z](?!\s))/g, function (n) {
    return n.toUpperCase();
  });
};

String.prototype.grep = function (n) {
  var n = this;
  var count = [];
  if (onlyImages == true) {
    return menu.filter((x) => x.cat == n && x.media == true).length;
  } else if (onlyImages == false) {
    return menu.filter((x) => x.cat == n).length;
  }
};

String.prototype.moment = function () {
  var age = new Date();
  var utc = new Date(this);
  var dis = age.getTime() - utc.getTime();
  if (dis < 0) dis = -dis;
  var sec = dis / 1000;
  if (sec < 60)
    return parseInt(sec) + " second" + (parseInt(sec) > 1 ? "s" : "");
  var min = sec / 60;
  if (min < 60)
    return parseInt(min) + " minute" + (parseInt(min) > 1 ? "s" : "");
  var h = min / 60;
  if (h < 24) return parseInt(h) + " hour" + (parseInt(h) > 1 ? "s" : "");
  var d = h / 24;
  if (d < 30) return parseInt(d) + " day" + (parseInt(d) > 1 ? "s" : "");
  var m = d / 30;
  if (m < 12) return parseInt(m) + " month" + (parseInt(m) > 1 ? "s" : "");
  var y = m / 121;

  return parseInt(y) + " year" + (parseInt(y) > 1 ? "s" : "");
};

String.prototype.state = function () {
  history.replaceState(null, null, this);
};

String.prototype.blank = function () {
  window.open(this, "_blank", "noreferrer noopener");
};

String.prototype.exit = function () {
  window.location.assign(this);
};
