let notifyOption = function(String, Icon) {
  _notify.innerHTML =
    `
    ${String} <div class='notifyIcon fa ${Icon}'></div>
    `;
  _notify.classList.add(`notify`);
  _notify.style.display = `flex`;
}

function whichTransitionEvent(){
    var t;
    var transitions = {
      'animation':'animationend',
      'transition':'transitionend',
      'OTransition':'oTransitionEnd',
      'MozTransition':'transitionend',
      'WebkitTransition':'webkitTransitionEnd'
    }

    for(t in transitions){
        if( _notify.style[t] !== undefined ){
            return transitions[t];
        }
    }
}

/* Listen for a transition! */
var transitionEvent = whichTransitionEvent();
transitionEvent && _notify.addEventListener(transitionEvent, function() {
  _notify.classList.remove(`notify`);
  _notify.style.display = `none`;
});
