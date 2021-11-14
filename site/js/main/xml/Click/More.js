_container
  .addEventListener(
    'click', (evt) => {
      if (
        evt.target.classList.contains(
          `more`
        )
      ) {
        evt.target.parentNode.innerHTML =
          evt.target.parentNode.getAttribute(
            `text`
          );
        evt.target.style.display = `none`;
        evt.stopPropagation();
      }

    }, {
      passive: false
    }
  );
