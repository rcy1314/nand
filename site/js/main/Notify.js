let notifyOption = function(String, Icon) {
  let div = document.createElement(`div`);
  div.setAttribute(`id`, 'notify');
  div.innerHTML =
    `
    ${String} <div class='notifyIcon fa ${Icon}'></div>
    `;
  div.style.display = `flex`;
  div.classList.add(`notify`);
  if (
    document
    .body
    .contains(
      _container.querySelector(`#notify`)
    )
  ) {
    _container.querySelectorAll(`#notify`).forEach((a) => a.classList.add(`notifyEnd`))
    _container.querySelectorAll(`#notify`)[0].classList.remove(`notify`);

  }


  _container.appendChild(div);

  var transitionEvent = whichTransitionEvent();
  transitionEvent && div.addEventListener(transitionEvent, function() {
    console.log(`transition`);
    if (
      document
      .body
      .contains(
        _container.querySelector(`.notifyEnd`)
      )
    )
      _container.querySelectorAll(`.notifyEnd`).forEach(
        (a) => a.remove()
      )
  });
}

function whichTransitionEvent() {
  var t;
  var transitions = {
    'animation': 'animationend',
    'transition': 'transitionend',
    'OTransition': 'oTransitionEnd',
    'MozTransition': 'transitionend',
    'WebkitTransition': 'webkitTransitionEnd'
  }

  for (t in transitions) {
    if (
      document
      .body
      .contains(
        _container.querySelectorAll(`#notify`)[0]
      ) &&
      _container.querySelectorAll(`#notify`)[0].style[t] !== undefined ||
      _container.querySelectorAll(`.notifyEnd`)[0].style[t] !== undefined
    ) {
      return transitions[t];
    }
  }
  /* Listen for a transition! */
}
