let sideBarOptionBuild = function (
  name,
  classes
) {
  let sel = document.createElement(`div`);
  sel.classList.add(`sel`, classes);
  sel.innerHTML = name;
  return sel;
};
