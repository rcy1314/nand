var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
};

var loadStyles = function() {
  let directory = "css/";
  let extension = ".css";
  let files = [
    "animationRules",
    "classRules",
    "mediaRules",
    "fontIcons",
  ];
  for (var file of files) {
    let path = directory + file + extension;
    let script = document.createElement("link");
    script.type = "text/css";
    script.rel = "stylesheet";
    script.href = path;
    document.styleSheet = script;
    document.getElementsByTagName("head")[0].appendChild(script);
  }
}

var loadScripts = function() {
  let directory = "js/";
  let extension = ".js";
  let files = [
    "settings",
    "init",
    "visualAttributes",
    "baseFunctions",
    "headXML",
    "baseReturnStrings",
    "sideBarEvents",
    "inputEvents",
    "mainEvents",
    "xmlFunctions"
  ];
  for (var file of files) {
    let path = directory + file + extension;
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = path;
    document.getElementsByTagName("head")[0].appendChild(script);
  }
}

function whichTransitionEvent() {
  let transition;
  let Elem = document.createElement("fakeelement");
  let transitions = {
    transition: "transitionend",
    OTransition: "oTransitionEnd",
    MozTransition: "transitionend",
    WebkitTransition: "webkitTransitionEnd",
  };

  for (transition in transitions) {
    if (Elem.style[transition] !== undefined) {
      return transitions[transition];
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
    let width = document.getElementById("main").clientWidth / 50;
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
  return n.replace(/<.>/g, "")
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;")
  .replace(/'/g, "&#039;")

};

var truncate = function (i, n, useWordBoundary) {
  if (i.length <= n) {
    return i;
  }
  let subString = i.substr(0, n - 1);
  return (
    (useWordBoundary
      ? subString.substr(0, subString.lastIndexOf(" "))
      : subString) + "..."
  );
};

var anyRandomMenuObject = function () {
  for (i = 1; i <= menu.length - 1; i++) {
    if (onlyImages == true) {
      if (menu[i].cat == category && menu[i].media == true)
        random.push(menu.indexOf(menu[i]));
    } else if (onlyImages == false) {
      if (menu[i].cat == category) random.push(menu.indexOf(menu[i]));
    }
  }
  let randomObject = random[Math.floor(Math.random() * random.length - 1)];
  if (menu[randomObject]) randomDuplicate.push(randomObject);
  if (random.length == randomDuplicate.length && reader == true) {
    let randomDuplicate = [];
    let reader = false;
    footerBuild();
  } else if (random.length == randomDuplicate.length) randomDuplicate = [];
  else
    for (i = 0; i < random.length; i++) {
      if (menu[randomObject] || !randomDuplicate.includes(n))
        randomObject = randomObject;
      else
        randomObject =
          random[Math.floor(Math.random() * random.length - 1)];
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
  var uri = this;
  if (contrast == true && !location.href.match("\\+1")) var uri = uri + "+1";
  else if (contrast == true) var uri = uri + "+1";
  return uri;
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
  let dmz = [];
  let utc = new Date(this);
  dmz.push(this.moment());
  var gmt = utc.toLocaleString("en-US", opt);
  dmz.push(gmt);

  return dmz;
};

String.prototype.capitalize = function () {
  return this.replace(/(\b[a-z](?!\s))/g, function (string) {
    return string.toUpperCase();
  });
};

String.prototype.grep = function (string) {
  var string = this;
  let count = [];
  if (onlyImages == true) {
    return menu.filter((a) => a.cat == string && a.media == true).length;
  } else if (onlyImages == false) {
    return menu.filter((a) => a.cat == string).length;
  }
};

String.prototype.moment = function () {
  let age = new Date();
  let utc = new Date(this);
  let dis = age.getTime() - utc.getTime();
  if (dis < 0) dis = -dis;
  let sec = dis / 1000;
  if (sec < 60)
    return parseInt(sec) + " second" + (parseInt(sec) > 1 ? "s" : "");
  let min = sec / 60;
  if (min < 60)
    return parseInt(min) + " minute" + (parseInt(min) > 1 ? "s" : "");
  let h = min / 60;
  if (h < 24) return parseInt(h) + " hour" + (parseInt(h) > 1 ? "s" : "");
  let d = h / 24;
  if (d < 30) return parseInt(d) + " day" + (parseInt(d) > 1 ? "s" : "");
  let m = d / 30;
  if (m < 12) return parseInt(m) + " month" + (parseInt(m) > 1 ? "s" : "");
  let y = m / 121;

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
