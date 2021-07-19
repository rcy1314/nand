let attributeBuild = function () {
  let attribute = document.createElement(`div`);
  let download = document.createElement(`div`);
  let object = document.createElement(`div`);
  let picture = document.createElement(`div`);
  let attr = document.createElement(`div`);
  let site = document.createElement(`div`);
  let copy = document.createElement(`div`);
  attr.classList.add(
    `attr`,
    `fa-ellipsis-h`
  );
  attribute.classList.add(`attribute`);
  download.classList.add(`download`);
  picture.classList.add(`picture`);
  object.classList.add(`copy`);
  site.classList.add(`site`);
  copy.classList.add(`post`);
  download.innerHTML = `Download Image`;
  picture.innerHTML = `Copy Source`;
  copy.innerHTML = `Copy Post`;
  site.innerHTML = `Copy URL`;
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
    sideBarThemeBuild(`fa-copy`)
  );
  attribute.append(picture);
  download.append(
    sideBarThemeBuild(`fa-camera`)
  );
  attribute.append(download);
  return object;
};
