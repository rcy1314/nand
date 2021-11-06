var Guide = function(pubArray) {
  _guide.innerHTML = `
  <svg class='checkmark' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'>
    <circle class='checkmark__circle' cx='26' cy='26' r='25' fill='none' />
    <path class='checkmark__check' fill='none' d='M16 16 36 36 M36 16 16 36' />
  `;
  _guide.append(
    guideBuild(
      pubArray[0]
    )
  );
  Sticky(
    pubArray[0]
  );


  _guide.classList.add(`blur`);
  _guide.style.zIndex = `11`;
  _sb.style.display = `none`;
};
