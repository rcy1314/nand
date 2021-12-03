let URI = function() {
  if (
    !location.href.match(`\\?fbclid`) &&
    !location.search.split(`?q=`)[1] &&
    !location.href.match(`\\?\\+1`) &&
    !location.href.match(`\\?\\#`) &&
    !location.href.match(`\\?mB`) &&
    location.href.split(`?`)[1]
  ) {
    let i;
    let uri = location.href.split(`?`)[1];
    id =
      uri.slice(
        uri.length - 16,
        uri.length
      );
    if (
      uri.match(
        /^[a-zA-Z0-9]+$/g)
    ) {
      if (
        Reader == true
      )
        onlyImages = true;
      id =
        uri.slice(
          0,
          2
        );
      post =
        parseInt(
          uri.slice(2),
          36
        );
      setTimeout(
        () => {
          if (
            menu
            .findIndex(
              (item) =>
              item.hash ===
              id
            )
          )
            i = menu
            .findIndex(
              (item) =>
              item.hash ===
              id
            );
          if (
            i !== -1
          )
            Request(i);
          else
            Filter(uri)
        },
        250);
    } else if (
      uri.slice(
        uri.length - 16,
        uri.length
      ).match(/[a-z0-9]/g)
    ) {
      id =
        uri.slice(
          uri.length - 16,
          uri.length
        );
      post =
        uri.slice(
          0,
          uri.length - 17
        );
      setTimeout(
        () => {
          if (
            menu
            .findIndex(
              (item, i) =>
              cyrb53(item.description) == id ||
              cyrb53(i.toString()) == id ||
              cyrb53(item.hash) == id ||
              cyrb53(item.uri) == id ||
              cyrb53(item.id) == id
            )
          )
            i =
            menu
            .findIndex(
              (item, i) =>
              cyrb53(item.description) == id ||
              cyrb53(i.toString()) == id ||
              cyrb53(item.hash) == id ||
              cyrb53(item.uri) == id ||
              cyrb53(item.id) == id
            )
            console.log(i)
          if (
            i !== -1
          )
            Request(i);
          else if (
            i === -1
          )
            Filter(
              location.href.split(`?`)[1]
            );
          _visit.style.display = `none`;
          guideOnScreen = onScreen;
        },
        250);
    }
  } else if (
    location.search.split(`?q=`)[1]
  ) {
    let uri = location.search.split(`?q=`)[1];
    guideOnScreen = onScreen;
    setTimeout(
      () => {
        if (
          showSplash
        )
          _check.style.display = `block`;
        Topbar(topBar);
        Filter(uri);
      }, 250
    );
  } else if (
    isNaN(
      parseFloat(
        post
      )
    ) &&
    !isFinite(
      post
    )
  ) {
    setTimeout(
      () => {
        if (
          Reader
        ) {
          onlyImages = true;
          Request(anyRandomMenuObject());
        }
      },
      250);
  }
  if (
    !isNaN(
      parseFloat(
        post
      )
    ) &&
    isFinite(
      post
    ) &&
    showSplash
  )
    _check.style.display = `block`;

  if (
    !location.href.split(`?`)[1] &&
    !document
    .body
    .contains(
      _group
      .querySelector(
        `.select`
      )
    ) &&
    !document
    .body
    .contains(
      _xml
      .querySelector(
        `.item`
      )
    )
  )
    _sb.style.display = `block`;
  else
    _sb.style.display = `none`;
}
