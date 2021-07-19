let footerBuild = function (id) {
  let backward = document.createElement(`span`);
  let previous = document.createElement(`div`);
  let object = document.createElement(`div`);
  let front = document.createElement(`span`);
  let span = document.createElement(`span`);
  object.id = `bottom`;
  previous.setAttribute(`aria-object`, back(id));
  previous.classList.add(`btn`, `back`);
  front.classList.add(`flip-front`);
  span.classList.add(`front`);
  front.innerHTML = `Previous`;
  backward.classList.add(`flip-back`);
  backward.innerHTML = `${String(menu[back(id)].id.match(/[^\/]+$/g)).substring(
    0,
    13
  )}...`;
  previous.append(span);
  previous.append(front);
  previous.append(backward);
  let ahead = document.createElement(`span`);
  let bottom = document.createElement(`div`);
  let flip = document.createElement(`span`);
  let next = document.createElement(`div`);
  let index = document.createElement(`span`);
  next.setAttribute(`aria-object`, forward(id));
  next.classList.add(`btn`, `next`);
  flip.classList.add(`flip-front`);
  bottom.classList.add(`bottom`);
  index.classList.add(`flip-back`);
  ahead.classList.add(`front`);
  bottom.innerHTML = `Return`;
  flip.innerHTML = `Next`;
  next.append(ahead);
  next.append(flip);
  index.innerHTML = `${String(menu[forward(id)].id.match(/[^\/]+$/g)).substring(
    0,
    13
  )}...`;
  next.append(index);
  object.append(previous);
  object.append(bottom);
  object.append(next);
  return object;
};
