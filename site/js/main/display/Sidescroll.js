let Sidescroll = function() {
  display == `sideScroll`;
  offset = 1000;
  scrollIntoViewBuffer = scrollIntoView;
  scrollIntoView = false;

  _channel.classList.add(`sideChannel`);
  _xml.style.justifyContent = `center`;
  _center.classList.add(`sideChannel`);
  _channel.style.height = `fit-content`;

  if (
    window.innerWidth >= 768
  )

    _center.style.right = `130px`;
  _center.style.width = `35vw`;
  _xml.style.display = `flex`;
  _center.style.left = `0`;
  _xml.style.top = `0`;

  _channel
    .querySelectorAll(
      `.header`
    )
    .forEach(
      (a) => {
        setTimeout(
          () => {
            a
              .style
              .position =
              `relative`
            a.closest(`.item`).classList.add(
              `sideItem`
            );
            a.closest(`.item`).classList.remove(
              `flex`
            );
          }, 50
        )
      }
    );
  if (
    document.body.contains(
      _center.querySelector(`.bottom`)
    )
  )
    _center.querySelector(`.bottom`).style.left = `0`;

  _channel.classList.remove(`flexbox`)
  _channel.classList.remove(`duo`)

}
