let footerBuild = function (id) {
  let backward = document.createElement(`span`);
  let object = document.createElement(`div`);
  object.id = `bottom`;
  backward.setAttribute(`aria-object`, back(id));
  backward.classList.add(`btn`);
  backward.innerHTML = `${String(menu[back(id)].id.match(/[^\/]+$/g)).substring(
    0,
    7
  )}...`;
  let bottom = document.createElement(`div`);
  let index = document.createElement(`span`);
  index.setAttribute(`aria-object`, forward(id));
  bottom.classList.add(`bottom`);
  bottom.innerHTML = `Return`;
  index.innerHTML = `${String(menu[forward(id)].id.match(/[^\/]+$/g)).substring(
    0,
    7
  )}...`;
  index.classList.add(`btn`);
  object.append(backward);
  object.append(bottom);
  object.append(index);
  return object;
};
