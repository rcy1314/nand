String.prototype.zulu = function () {
  var opt = {
    minute: `numeric`,
    weekday: `long`,
    hour: `numeric`,
    day: `2-digit`,
    month: `short`,
    hour12: true,
  };
  let dmz = [];
  let utc = new Date(this);
  dmz.push(
    this.moment()
  );
  let gmt =
    utc.toLocaleString(
      `en-US`,
      opt
    );
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

String.prototype.hyphen = function () {
  return this
      .toLowerCase()
        .replace(
          /%20|\-|\_|\s|\+|\/|\.|\+1/g, `-`
        );
};

String.prototype.domain = function () {
  return this
      .match(
        /^(?:http:\/\/|www\.|https:\/\/)([^\/]+)/g
      );
};

String.prototype.capitalize = function () {
  return this
      .replace(
        /(\b[a-z](?!\s))/g,
          function (string) {
            return string
                .toUpperCase();
            }
      );
};

String.prototype.space = function () {
  return this
      .replace(
        /%20|\-|\_|\s|\+|\/|\.|\+1/g, ` `
      );
};

String.prototype.add = function () {
  return this
      .replace(
        /%20|\-|\_|\s|\+|\/|\.|\+1/g, ``
      );
};

String.prototype.image = function () {
  return `site/images/webp/${this}.webp`;
};

String.prototype.blank = function () {
  window
    .open(
      this,
      `_blank`,
      `noreferrer noopener`
    );
};

String.prototype.state = function () {
  history
    .replaceState(
      {},
      '',
      this
    );
};

String.prototype.exit = function () {
  window
    .location
      .assign(
        this
      );
};
