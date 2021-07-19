let translationBuild = function (translation) {
  let object = document.createElement(`div`);
  object.classList.add(`translation`);
  object.setAttribute(`aria-object`, translation);
  let ahref = document.createElement(`a`);
  ahref.setAttribute(`ext`, translation);
  ahref.classList.add(`category`);
  ahref.innerHTML = translation;
  object.append(ahref);
  return object;
};
