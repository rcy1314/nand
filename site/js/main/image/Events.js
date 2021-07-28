_container
  .addEventListener('click',
    (evt) =>
      {
        if (
          evt.target.classList.contains(`filterBlur`) ||
          evt.target.classList.contains(`img`)
        ) {
          let cid = evt.target.closest(`.item`).getAttribute(`aria-object`)
          if (
            loading == `percent`
          )
            _progress.style.width = `100%`;
          if (
            tap === 0
          ) {
            tap = new Date().getTime();
            setTimeout(
              function () {
                if (
                  new Date().getTime() - tap >= 350 &&
                  new Date().getTime() - tap < 400
                )
                if (
                  !evt
                    .target
                      .closest(`.item`)
                        .querySelector(`.img`)
                          .classList.contains(`guide`) &&
                  evt
                    .target
                      .closest(`.item`)
                        .querySelector(`.img`)
                          .classList.contains(`default`)
                ) {
                  count = [];
                  let sticky = [];
                  if (
                    showSplash
                  )
                    _check.style.display = `block`;

                  sticky.push(
                    {
                      courtesy:
                        evt
                          .target
                            .closest(`.item`)
                              .querySelector(`.header`)
                                .innerHTML,
                      element:
                        evt
                          .target
                            .closest(`.item`)
                              .getAttribute(`aria-item`),
                      image:
                        menu[
                          evt
                            .target
                              .closest(`.item`)
                                .getAttribute(`aria-object`)
                            ]
                          .image
                            .image(),
                      title:
                        evt
                          .target
                            .closest(`.item`)
                              .querySelector(`.pub`)
                                .getAttribute(`text`),
                      share:
                        evt
                          .target
                            .closest(`.item`)
                              .querySelector(`.share`)
                                .value,
                      dst:
                        evt
                          .target
                            .closest(`.item`)
                              .querySelector(`.ago:last-child`)
                                .innerHTML,
                      src:
                        evt
                          .target
                            .closest(`.item`)
                              .querySelector(`.source`)
                                .value,
                      externalURI:
                        evt
                          .target
                            .closest(`.item`)
                              .getAttribute(`ext`),
                      menuObject:
                        evt
                          .target
                            .closest(`.item`)
                              .getAttribute(`aria-object`),
                      pubIndex:
                        evt
                          .target
                            .closest(`.item`)
                              .getAttribute(`aria-item`),
                    }
                  );
                  if (
                    showSplash
                  )
                    _check.style.display = `block`;
                  Guide(sticky);
                }
                else if (
                  evt
                    .target
                      .closest(`.item`)
                        .querySelector(`.img`)
                          .classList
                            .contains(`guide`)
                )
                  evt
                    .target
                      .closest(`.item`)
                        .getAttribute(`ext`)
                          .blank();
                else if (
                  !evt
                    .target
                      .closest(`.item`)
                        .querySelector(`.img`)
                          .classList.contains(`default`)
                )
                  evt
                    .target
                      .closest(`.item`)
                        .getAttribute(`ext`)
                          .blank();
                tap = 0;
              }, 350
            );
          }
          else {
            if (
              new Date().getTime() - tap < 350
            ) {
              if (
                evt
                  .target
                    .classList
                      .contains(`leave`)
              ) {
                evt
                  .target
                    .closest(`.item`)
                      .getAttribute(`ext`)
                        .blank();
                return false;
              }
              else if (
                !evt
                  .target
                    .classList
                      .contains(`blur`)
              ) {
                evt
                  .target
                    .closest(`.image`)
                    .querySelector(`.fa-heart`)
                      .style
                        .animation =
                          `scale .7s ease-in-out .1s both`;
                evt
                  .target
                    .closest(`.image`)
                      .querySelector(`.fa-heart`)
                        .style
                          .display =
                            `block`;
                evt
                  .target
                    .closest(`.image`)
                      .querySelector(`.fa-heart`)
                        .style
                          .zIndex =
                            `12`;
                setTimeout(
                  function () {
                    evt
                      .target
                        .closest(`.image`)
                          .querySelector(`.fa-heart`).style
                            .animation =
                              `none`;
                    evt
                      .target
                        .closest(`.image`)
                          .querySelector(`.fa-heart`)
                            .style
                              .display =
                                `none`;
                    evt
                      .target
                        .closest(`.image`)
                          .querySelector(`.fa-heart`)
                            .style
                              .zIndex =
                                `0`;
                  }, 1500
                );
              }
              tap = 0;
            }
          }
          evt.stopPropagation();
        }
      },
      {
        passive:
        false
      }
);
