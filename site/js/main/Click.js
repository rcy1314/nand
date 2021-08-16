_container
  .addEventListener(
    'click', (evt) =>
    {
      if (
        evt.target.classList.contains(`construct`) ||
        evt.target.classList.contains(`download`) ||
        evt.target.classList.contains(`picture`) ||
        evt.target.classList.contains(`source`) ||
        evt.target.classList.contains(`bottom`) ||
        evt.target.classList.contains(`header`) ||
        evt.target.classList.contains(`select`) ||
        evt.target.classList.contains(`result`) ||
        evt.target.classList.contains(`center`) ||
        evt.target.classList.contains(`post`) ||
        evt.target.classList.contains(`site`) ||
        evt.target.classList.contains(`wrap`) ||
        evt.target.classList.contains(`pub`) ||
        evt.target.classList.contains(`ago`) ||
        evt.target.classList.contains(`cat`) ||
        evt.target.classList.contains(`sel`) ||
        evt.target.classList.contains(`btn`) ||
        evt.target.id == `container` ||
        evt.target.id == `search` ||
        evt.target.id == `option` ||
        evt.target.id == `visit` ||
        evt.target.id == `group` ||
        evt.target.id == `main` ||
        evt.target.id == `hide` ||
        evt.target.id == `page` ||
        evt.target.id == `xml` ||
        evt.target.id == `air` ||
        evt.target.id == `top` ||
        evt.target.id == `arm`
      ) {
        if (
          _view.getAttribute(`placeholder`) == `Search` ||
          _match.style.display === `block`
        ) {
          _main.querySelector(`#input .icon`).classList.remove(`slide`);
          _view.setAttribute(`placeholder`, ``);
          _view.style.paddingLeft = `10px`;
          _view.style.textAlign = `center`;
          _match.style.display = `none`;
          _view.value = `Search`;
          _view.blur();
          return false;
        }
        else if (
          _first.style.display === `block`
        ) {
          if (!quickFeeds) _show.style.visibility = `visible`;
          _options.style.visibility = `visible`;
          _social.style.visibility = `visible`;
          _under.style.visibility = `visible`;
          _label.style.visibility = `visible`;
          _quick.style.visibility = `visible`;
          _link.style.visibility = `visible`;
          _first.style.display = `none`;
          _guest.blur();
          return false;
        }
        else if (
          !_container
            .querySelectorAll(
              `.attribute`
            )
              .forEach(
                (a) => a.style.display = `none`
              )
        ) {
          _container
            .querySelectorAll(
              `.attribute`
            )
              .forEach(
                (a) => a.style.display = `none`
              );
          let attribute = _main.querySelectorAll(`.fa-ellipsis-v`);
          for (
            i = 0;
            i < attribute.length;
            i++
          ) {
            attribute[i].classList.remove(`fa-ellipsis-v`);
            attribute[i].classList.add(`fa-ellipsis-h`);
          }
          _container
            .querySelectorAll(
              `.fa-ellipsis-v`
            )
              .forEach(
                (a) => a.classList.add(`fa-ellipsis-h`)
            );
          _container
            .querySelectorAll(
              `.fa-ellipsis-v`
            )
              .forEach(
                (a) => a.classList.remove(`fa-ellipsis-v`)
            );
        evt.stopPropagation();
        return false;
        }
      }
      else if (
        evt.target.id === `mobileHome` ||
        evt.target.id === `home`
      ) {
        xml();
        Group();
        Visit();

        done = true
        document.title = doc;
        _top.style.display = `none`;
        if (
          _progress.clientWidth !== 0
        ) {
          _progress.style.transition = `none`;
          _progress.style.width = `100%`;
        }

        _channel.style.height = `0`;

        if (
          location.href.split(`?`)[0]
        )
          location.href.split(`?`)[0].state();
        if (
          _sidebar.offsetLeft == `-280` ||
          _sidebar.offsetLeft == `-250`
        )
          _sb.style.display = `block`;

        if (!quickFeeds)
          _show.style.visibility = `visible`;

        _options.style.visibility = `visible`;
        _social.style.visibility = `visible`;
        _under.style.visibility = `visible`;
        _label.style.visibility = `visible`;
        _quick.style.visibility = `visible`;
        _visit.style.visibility = `visible`;
        _link.style.visibility = `visible`;
        _toggle.style.display = `block`;
        _first.style.display = `none`;
        _visit.style.display = `flex`;
        _top.style.display = `none`;
        _feed.scrollLeft = 0;
        Feed(quickFeeds);
      }
      else if (
        evt.target.classList.contains(
          `notify`
        )
      ) {
        _notify.classList.remove(`notify`);
        _notify.style.display = `none`;
      }
      else if (
        evt.target.classList.contains(`fa-sun`) ||
        evt.target.id == `toggle`
      ) {
        let iteration =
          themes
            .findIndex(
              (item) => item.obFn == set
            );

        if (
          iteration == themes.length - 1
        )
          iteration = -1;

        iteration = iteration + 1;
        notifyOption(themes[iteration].obFn, `fa-check-circle`);
        set = themes[iteration].obFn;
        window[set]();
      }
      else if (
        event.target.classList.contains(
          `fa-user-cog`
        )
      ) {
        safeSearch = safeSearch != true;
        if (
          safeSearch
        )
          notifyOption(`Safe Search`, `fa-check-circle`);
        else if (
          !safeSearch
        )
          notifyOption(`Safe Search`, `fa-times-circle`);
      }
      else if (
        evt.target.classList.contains(
          `fa-git`
        )
      )
        repository.blank();
      else if (
        evt.target.classList.contains(
          `fa-amazon`
        )
      )
        amazon.blank();
      else if (
        evt.target.classList.contains(
          `fa-reddit-alien`
        )
      )
        reddit.blank();
      else if (
        evt.target.classList.contains(
          `fa-twitter`
        )
      )
        twitter.blank();
      else if (
        evt.target.classList.contains(
          `fa-pinterest`
        )
      )
        pinterest.blank();
      else if (
        evt.target.classList.contains(
          `fa-instagram`
        )
      )
        instagram.blank();
      else if (
        evt.target.classList.contains(
          `fa-facebook-f`
        )
      )
        facebook.blank();
      else if (
        evt.target.classList.contains(
          `fa-youtube`
        )
      )
        youtube.blank();
      else if (
        evt.target.classList.contains(
          `fa-wordpress`
        )
      )
        wordpress.blank();
      else if (
        evt.target.classList.contains(
          `fa-github`
        )
      )
        repository.blank();

      evt.stopPropagation();
      evt.preventDefault();

    },
    {
      passive:
      false
    }
  );
