_main
  .addEventListener(
    'ontouchmove', (evt) =>
    {
      let isScrolling;
      // Clear our timeout throughout the scroll
    	window.clearTimeout( isScrolling );
      touchmove = false;
      // Set a timeout to run after scrolling ends
    	isScrolling = setTimeout(function() {
      // Run the callback
      touchmove = true;
      }, 2600);
      if (
        (
          _main.scrollHeight - _main.scrollTop - _main.clientHeight <= offset &&
          Reader &&
          !stop
        )
      ) {
        stop = true;
        first = false;
        if (showSplash) _check.style.display = `block`;
        while (
          _air.firstChild
        )
          _air.removeChild(_air.lastChild);
        while (
          _result.firstChild
        )
          _result.removeChild(_result.lastChild);
        while (
          _status.firstChild
        )
          _status.removeChild(_status.lastChild);
        while (
          _suggestions.firstChild
        )
          _suggestions.removeChild(_suggestions.lastChild);
        Request(anyRandomMenuObject());
      }
    },
  {
    passive: true
  }
);

_channel
  .addEventListener(
    'ontouchmove', (evt) =>
    {
      let isScrolling;
      // Clear our timeout throughout the scroll
    	window.clearTimeout( isScrolling );
      touchmove = false;
      // Set a timeout to run after scrolling ends
    	isScrolling = setTimeout(function() {
      // Run the callback
      touchmove = true;
      }, 2600);
      if (
        (
          _channel.scrollWidth -
          _channel.scrollLeft -
          _channel.clientWidth <=
          _channel.clientWidth &&
          Reader &&
          !stop
        )
      ) {
        stop = true;
        first = false;
        if (showSplash) _check.style.display = `block`;
        while (
          _air.firstChild
        )
          _air.removeChild(_air.lastChild);
        while (
          _result.firstChild
        )
          _result.removeChild(_result.lastChild);
        while (
          _status.firstChild
        )
          _status.removeChild(_status.lastChild);
        while (
          _suggestions.firstChild
        )
          _suggestions.removeChild(_suggestions.lastChild);
        Request(anyRandomMenuObject());
      }
    },
  {
    passive: true
  }
);

_main
  .addEventListener(
    'scroll', (evt) =>
    {
      let isScrolling;
      // Clear our timeout throughout the scroll
    	window.clearTimeout( isScrolling );
      touchmove = false;
    	// Set a timeout to run after scrolling ends
    	isScrolling = setTimeout(function() {
      // Run the callback
      touchmove = true;
      }, 7500);
      if (
        (
          _main.scrollHeight - _main.scrollTop - _main.clientHeight <= offset &&
          Reader &&
          !stop
        )
      ) {
        stop = true;
        first = false;
        if (showSplash) _check.style.display = `block`;
        while (
          _air.firstChild
        )
          _air.removeChild(_air.lastChild);
        while (
          _result.firstChild
        )
          _result.removeChild(_result.lastChild);
        while (
          _status.firstChild
        )
          _status.removeChild(_status.lastChild);
        while (
          _suggestions.firstChild
        )
          _suggestions.removeChild(_suggestions.lastChild);
        Request(anyRandomMenuObject());
      }
    },
  {
    passive: true
  }
);

_channel
  .addEventListener(
    'scroll', (evt) =>
    {
      let isScrolling;
      // Clear our timeout throughout the scroll
    	window.clearTimeout( isScrolling );
      touchmove = false;
    	// Set a timeout to run after scrolling ends
    	isScrolling = setTimeout(function() {
      // Run the callback
      touchmove = true;
      }, 7500);
      if (
        (
          _channel.scrollWidth -
          _channel.scrollLeft -
          _channel.clientWidth <=
          _channel.clientWidth &&
          Reader &&
          !stop
        )
      ) {
        stop = true;
        first = false;
        if (showSplash) _check.style.display = `block`;
        while (
          _air.firstChild
        )
          _air.removeChild(_air.lastChild);
        while (
          _result.firstChild
        )
          _result.removeChild(_result.lastChild);
        while (
          _status.firstChild
        )
          _status.removeChild(_status.lastChild);
        while (
          _suggestions.firstChild
        )
          _suggestions.removeChild(_suggestions.lastChild);
        Request(anyRandomMenuObject());
      }
    },
  {
    passive: true
  }
);

_container
  .addEventListener(
    'click', (evt) =>
    {
     if (
        evt.target.classList.contains(
          `joi`
        )
      ) {
          topMenuBarDisplay(topBar);
          Reader = Reader != true;
          if (!Reader) {
            onlyImages = onlyImagesBuffer;
            notifyOption(`Reading`, `fa-times-circle`);
            _main
              .querySelectorAll(`.joi`)
              .forEach(
                (a) => a.classList.remove(`luv`)
              );
            _channel.append(footerBuild(id));
            if (
              flexBox
            )
              displayFlex();
          } else if (Reader) {
            if (
              document.body.contains(
                _channel.querySelector(`.item`)
              )
            )
            first = false;
            else
              first = true;
            touchmove = true;
            onlyImages = true;
            randomDuplicate = [];
            notifyOption(`Reading`, `fa-check-circle`);
            if (showSplash) _check.style.display = `Block`;
            if (
              document.body.contains(
                _center.querySelector(`#bottom`)
              )
            )
              _center.querySelector(`#bottom`).remove();
            if (showSplash) _check.style.display = `block`;
            _sb.style.display = `none`;
            _main
              .querySelectorAll(`.joi`)
              .forEach(
                (a) => a.classList.add(`luv`)
              );
            cleanup();
            Request(anyRandomMenuObject());
          }
        }
        else if (
          evt.target.classList.contains(
            `select`
          )
        ) {
          if (_match.style.display === `block`) {
            _match.style.display = `none`;
            _view.blur();
            return false;
          }
          first = true;
          Request(
            evt.target.closest(`.populate`).getAttribute(`aria-object`)
          );
        }
        else if (
          evt.target.classList.contains(`combine`) ||
          evt.target.classList.contains(`suggest`) ||
          evt.target.classList.contains(`circle`) ||
          evt.target.classList.contains(`random`) ||
          evt.target.classList.contains(`bold`)
        ) {
          if (location.href.split(`?`)[0]) location.href.split(`?`)[0].state();
          first = false;
          while (_status.firstChild)
            _status.removeChild(_status.lastChild);
          while (_suggestions.firstChild)
            _suggestions.removeChild(_suggestions.lastChild);
          Request(
            evt.target.closest(`.suggest`).getAttribute(`aria-item`)
          );
        }
        else if (
          evt.target.classList.contains(
            `detail`
          )
        ) {
          Request(evt.target.closest(`.hover`)
            .getAttribute(`aria-item`));
          _match.style.display = `none`;
        }
        else if (
          evt.target.classList.contains(`btn`)
        ) {
          if (location.href.split(`?`)[0]) location.href.split(`?`)[0].state();
          if (
            document.body.contains(
              _center.querySelector(`#bottom`)
            )
          )
            _center.querySelector(`#bottom`).remove();
          first = false;
          touchmove = true;
          while (_status.firstChild)
            _status.removeChild(_status.lastChild);
          while (_suggestions.firstChild)
            _suggestions.removeChild(_suggestions.lastChild);
          Request(
            evt.target.closest(`.btn`).getAttribute(`aria-object`)
          );
        }
        else if (
          evt.target.getAttribute(`aria-object`) != `Assets` &&
          evt.target.classList.contains(`translation`)
        ) {
          first = true;
          category = evt.target.closest(`.translation`).getAttribute(`aria-object`);
          if (Reader) {
            randomDuplicate = [];
            Request(anyRandomMenuObject());
          } else {
            let target = event;
            populateCategoryGroup(
              evt.target.closest(`.translation`).getAttribute(`aria-object`)
            );
            _toggle.style.display = `none`;
            _visit.style.display = `none`;
            topMenuBarDisplay(topBar);
            displayExpand(expand);
          }
        }
        else if (
          evt.target.classList.contains(`entity`) ||
          evt.target.classList.contains(`asset`) ||
          evt.target.classList.contains(`query`)
        ) {
          init();
          first = true;
          Request(
            evt.target.closest(`.asset`).getAttribute(`aria-object`)
          );
          topMenuBarDisplay(topBar);
          _toggle.style.display = `none`;
          _visit.style.display = `none`;
        }
        else if (
          evt.target.classList.contains(`classic`) ||
          evt.target.classList.contains(`wrap`) ||
          evt.target.classList.contains(`item`) ||
          evt.target.classList.contains(`pub`) ||
          evt.target.classList.contains(`ago`)
        ) {
          evt.target.closest(`.item`).getAttribute(`ext`).blank();
        }
        else if (
          evt.target.classList.contains(
            `bottom`
          )
        ) {
          if (location.href.split(`?`)[0]) location.href.split(`?`)[0].state();
            if (location.href.match(`\\?q=`)) {
              var uri = location.search.split(`?q=`)[1].match(/[^&]+/g);
              let description = menu.filter(function (item) {
                return item.description.space().toLowerCase()
                  .match(uri.toString().toLowerCase().space());
              })
              groupBuild();
              for (i = 0; i <= description.length - 1; i++)
                writeFilterResponse(menu.indexOf(description[i]));
              displayExpand(expand);
              populateCategoryGroup(category)
              unloading();
            } else populateCategoryGroup(category);
            displayExpand(expand);
        }
        else if (
          evt.target.classList.contains(
            `more`
          )
        ) {
          evt.target.parentNode.innerHTML = evt.target.parentNode.getAttribute(
            `text`
          );
          evt.target.style.display = `none`;
          evt.stopPropagation();
        }
        else if (
          evt.target.classList.contains(`exit`) ||
          evt.target.classList.contains(`ext`)
        )
          evt.target.closest(`.courtesy`).getAttribute(`ext`).blank();
        else if (
          evt.target.id == `check`
        )
          repository.blank();
        else if (
          evt.target.classList.contains(
            `construct`
          )
        ) {
          let url = menu[id].uri.match(
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.([a-z]{2,6}){1}/g
          );
          url.toString().blank();
        }
        else if (
          evt.target.classList.contains(`fa-ellipsis-h`) ||
          evt.target.classList.contains(`fa-ellipsis-v`) ||
          evt.target.classList.contains(`copy`)
        ) {
          if (evt.target.closest(`.copy`).querySelector(`.fa-ellipsis-v`)) {
            evt.target
              .closest(`.copy`)
              .querySelector(`.fa-ellipsis-v`)
              .classList.add(`fa-ellipsis-h`);
            evt.target
              .closest(`.copy`)
              .querySelector(`.fa-ellipsis-h`)
              .classList.remove(`fa-ellipsis-v`);
            evt.target
              .closest(`.copy`)
              .querySelector(`.attribute`).style.display = `none`;
          } else if (
            evt.target.closest(`.copy`).querySelector(`.fa-ellipsis-h`)
          ) {
            evt.target
              .closest(`.copy`)
              .querySelector(`.fa-ellipsis-h`)
              .classList.add(`fa-ellipsis-v`);
            evt.target
              .closest(`.copy`)
              .querySelector(`.fa-ellipsis-v`)
              .classList.remove(`fa-ellipsis-h`);
            evt.target
              .closest(`.copy`)
              .querySelector(`.attribute`).style.display = `block`;
          }
          evt.stopPropagation();
        }
        else if (
          evt.target.classList.contains(
            `download`
          )
        ) {
          var menuObject = evt.target.closest(`.item`).getAttribute(`aria-object`);
          var pubIndex = evt.target.closest(`.item`).getAttribute(`aria-item`);
          var xhr = new XMLHttpRequest();
          var url =
          document
            .querySelector(
              `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .source`
            ).value
          xhr.responseType = "arraybuffer";
          xhr.open("GET", cors + url, true);

          xhr.onreadystatechange = function () {
            if (xhr.readyState == xhr.DONE) {
              var file = new Blob([xhr.response], { type: "image" });
              saveAs(
                file,
                _container
                  .querySelector(
                    `[aria-object='${menuObject}'][aria-item='${pubIndex}'] .source`
                  ).value
              )
            }
          };
          xhr.send();
        }
        else if (
          evt.target.classList.contains(`fa-at`) ||
          evt.target.classList.contains(`site`)
        ) {
          evt.target.closest(`.item`).querySelector(`.url`).select();
          document.execCommand(`copy`);
          evt.stopPropagation();
        }
        else if (
          evt.target.classList.contains(`fa-share`) ||
          evt.target.classList.contains(`post`)
        ) {
          evt.target.closest(`.item`).querySelector(`.share`).select();
          document.execCommand(`copy`);
          evt.stopPropagation();
        }
        else if (
          evt.target.classList.contains(`fa-camera`) ||
          evt.target.classList.contains(`picture`)
        ) {
          if (youtubeMedia == true && menu[id].id.match(/Youtube/g)) {
            evt.target.closest(`.item`).querySelector(`.url`).select();
            document.execCommand(`copy`);
          } else {
            evt.target.closest(`.item`).querySelector(`.source`).select();
            document.execCommand(`copy`);
          }
        }
      },
      {
        passive: false
      }
);
