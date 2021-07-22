let notifyOption = function (String, Icon) {
  _notify.innerHTML =
    `
    ${String} <div class='notifyIcon fa ${Icon}'></div>
    `;
  _notify.classList.add(`notify`);
  _notify.style.display = `flex`;
  setTimeout(
    function() {
      _notify.classList.remove(`notify`);
      _notify.style.display = `none`;
    }, 4250
  )
}
