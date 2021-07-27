let suggestBuild = function (
  objectMedia,
  objectIndex,
  objectImage,
  objectId,
  objectCategory
) {
  let suggest = document.createElement(`div`);
  let object = document.createElement(`div`);
  let circle = document.createElement(`img`);
  let define = document.createElement(`div`);
  let category = document.createElement(`a`);
  let bold = document.createElement(`b`);
  category.setAttribute(`aria-item`, objectCategory);
  suggest.setAttribute(`aria-object`, objectIndex);
  suggest.classList.add(`suggest`);
  object.classList.add(`combine`);
  circle.classList.add(`circle`);
  define.classList.add(`random`);
  bold.classList.add(`bold`);
  circle.src = objectImage;
  suggest.title = objectId;
  bold.innerHTML =
  `
    ${
      String(
        objectId.match(/[^\/]+$/g)
      ).substring(
        0,
        19
      )
    }...<br>
  `;
  category.innerHTML = objectCategory;
  category.title = objectCategory;
  define.innerHTML = objectMedia;
  object.append(circle);
  suggest.append(bold);
  object.append(suggest);
  suggest.append(define);
  object.append(category);
  return object;
};
