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
    _container.querySelectorAll(`#notify`)[0].classList.add(`notifyEnd`);
    _container.querySelectorAll(`#notify`)[0].classList.remove(`notify`);

  }

  notifyArray.push(div.innerHTML)
  if (notifyArray.length === 1)
    _container.appendChild(div);
  var transitionEvent = whichTransitionEvent();
  transitionEvent && div.addEventListener(transitionEvent, function() {
    if (
      document
      .body
      .contains(
        _container.querySelector(`.notifyEnd`)
      )
    )
      _container.querySelectorAll(`.notifyEnd`)[0].remove()
    if (
      notifyArray.length > 1
    ) {
      div.innerHTML = notifyArray[1]
      setTimeout(function() {
        _container.appendChild(div)

      }, 1000)
    }
    notifyArray.shift()
    if (
      document
      .body
      .contains(
        _container.querySelector(`#notify`)
      )
    ) {
      _container.querySelectorAll(`#notify`)[0].classList.add(`notifyEnd`);
      _container.querySelectorAll(`#notify`)[0].classList.remove(`notify`);
    }
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
      _container.querySelectorAll(`#notify`)[0].style[t] !== undefined
    ) {
      return transitions[t];
    }
  }
  /* Listen for a transition! */
}
