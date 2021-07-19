let excludeFormBuild = function () {
  let object = document.createElement(`input`);
  let form = document.createElement(`form`);
  let min = document.createElement(`div`);
  object.setAttribute(
    `placeholder`,
    `filter`
  );
  object.classList.add("excludeInput");
  object.setAttribute(
    `type`,
    `text`
  );
  form.setAttribute(
    `action`,
    `#`
  );
  min.classList.add("filter");
  form.classList.add(`min`);
  form.append(object);
  min.id = `filter`;
  min.append(form);
  return min;
};
