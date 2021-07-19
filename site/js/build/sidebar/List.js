let sideBarListBuild = function (
  Elem,
  Class,
  Icon,
  Text
) {
  let option = document.createElement(`div`);
  option.classList.add(Elem, `mainTransition`);
  option.innerHTML = `
  <div class='${Class}'>
    ${Text}
    <div class='fa ${Icon}'></div>
   </div>
  `;
  _content.append(option);
};
