let youtubeAttributeBuild = function () {
  let attribute = document.createElement(`div`);
  let picture = document.createElement(`div`);
  let object = document.createElement(`div`);
  let attr = document.createElement(`div`);
  let site = document.createElement(`div`);
  let copy = document.createElement(`div`);
  attr.classList.add(`attr`, `fa-ellipsis-h`);
  attribute.classList.add(`attribute`);
  picture.classList.add(`picture`);
  object.classList.add(`copy`);
  site.classList.add(`site`);
  copy.classList.add(`post`);
  picture.innerHTML = `Copy Source`;
  copy.innerHTML = `Copy Post`;
  site.innerHTML = `Copy URL`;
  attribute.style.height = `115px`
  object.append(attr);
  attr.append(attribute);
  site.append(
    sideBarThemeBuild(`fa-at`)
  );
  attribute.append(site);
  copy.append(
    sideBarThemeBuild(`fa-share`)
  );
  attribute.append(copy);
  picture.append(
    sideBarThemeBuild(`fa-camera`)
  );
  attribute.append(picture);
  return object;
};
