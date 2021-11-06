let contentBuild = function(
  oldestPost,
  recentPost,
  postsCount,
  menuIndex
) {
  let display = document.createElement(`div`);
  let filter = document.createElement(`div`);
  let select = document.createElement(`div`);
  let object = document.createElement(`img`);
  var src =
    `https://raw.githubusercontent.com/acktic/xml-publishers-images/master/${menu[menuIndex].image.image()}`
  var request = new XMLHttpRequest();
  request.open("GET", cors + src, true);
  request.setRequestHeader(`Access-Control-Allow-Origin`, `*`);
  request.setRequestHeader(`X-Requested-With`, `*`);
  request.responseType = "blob";
  request.onload = function() {
    object.src = src;
  }
  request.onloadend = function() {
    if (request.status == 404) {
      object.src = `site/images/webp/${menu[menuIndex].image.image()}`
    }
  }
  request.setRequestHeader(`Content-Type`, `text/html; charset=utf-8`);
  request.setRequestHeader(`Accept`, `text/html; charset=utf-8`);
  request.setRequestHeader(`Access-Control-Allow-Origin`, `*`);
  request.setRequestHeader(`X-Requested-With`, `*`);
  request.send();
  let info = document.createElement(`div`);
  let des = document.createElement(`div`);
  let ahref = document.createElement(`a`);
  ahref.innerHTML = menu[menuIndex].id.match(/[^\/]+$/g);
  ahref.setAttribute(`title`, menu[menuIndex].id);
  let construct = document.createElement(`div`);
  construct.classList.add(`construct`);
  display.classList.add(`display`);
  filter.classList.add(`filter`);
  select.classList.add(`select`);
  object.classList.add(`webp`);
  ahref.classList.add(`tag`);
  info.classList.add(`info`);
  des.classList.add(`about`);
  des.innerHTML = `&emsp;${menu[menuIndex].description}<br>`;
  des.innerHTML += `<br>Most Recent<div style='float:right'>${recentPost}</div>`;
  des.innerHTML += `<br>Oldest post<div style='float:right'>${oldestPost}</div>`;
  des.innerHTML += `<br>Posts<div style='float:right'>${postsCount}</div>`;
  des.innerHTML += `<br>Hash<div style='float:right'>${menu[id].hash}</div>`;
  filter.append(object);
  filter.append(ahref);
  info.append(des);
  construct.append(filter);
  construct.append(info);
  return construct;
};
