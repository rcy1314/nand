let contentBuild = function (
  oldestPost,
  recentPost,
  postsCount,
  menuIndex
) {
  let display = document.createElement(`div`);
  let filter = document.createElement(`div`);
  let select = document.createElement(`div`);
  let object = document.createElement(`img`);
  object.src = menu[menuIndex].image.image();
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
