let basicFormBuild = function () {
  let object = document.createElement(`input`);
  object.setAttribute(`placeholder`, `search`);
  object.setAttribute(`autocomplete`, `off`);
  let basic = document.createElement(`div`);
  let form = document.createElement(`form`);
  object.setAttribute(`type`, `text`);
  object.classList.add(`sideFilter`);
  form.setAttribute(`action`, `#`);
  form.classList.add(`sideBasic`);
  object.classList.add(`text`);
  form.append(object);
  basic.id = `basic`;
  basic.append(form);
  return basic;
};
