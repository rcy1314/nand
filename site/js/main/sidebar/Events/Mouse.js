_sidebar
  .addEventListener(
    'mousemove', (evt) =>
    {
      onScreen = true;
    },
    {
      passive:
      true
    }
);

if (
  window.innerWidth > 768 &&
  sideBarMouse
)
  _container
    .addEventListener(
      'mousemove', (evt) =>
      {
        if (
          event.pageX <= 100 &&
          !onScreen
        ) {
          onScreen = true;
          _min.style.display = `block`;
          _sb.style.display = `none`;
          setTimeout(
            function () {
              Sidebar(onScreen);
            }, 300
          )
        }
        if (
          event.pageX >= 280 &&
          !sideBarLock &&
          onScreen
        ){
          onScreen = false;
          setTimeout(
            function() {
              Sidebar(onScreen);
              if (
                !document
                  .body
                    .contains(
                      _xml
                        .querySelector(
                          `.item`
                        )
                    )
                  &&
                  !document
                    .body
                      .contains(
                        _group
                          .querySelector(
                            `.populate`
                          )
                      )
              )
              _sb.style.display = `block`;
            }, 750
          )
        }
      },
      {
        passive: true
      }
    );
