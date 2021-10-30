var Title = function (xhr) {
  if (
    xhr
      .getElementsByTagName(
        `title`
      )[0]
        .childNodes[1]
  )
    var title =
      xhr
        .getElementsByTagName(
          `title`
        )[0]
          .childNodes[1]
            .nodeValue;

  else if (
    xhr
      .getElementsByTagName(
        `title`
      )[0]
        .childNodes[0]
  )
    var title =
      xhr
        .getElementsByTagName(
          `title`
        )[0]
          .childNodes[0]
            .nodeValue;

  if (
    !title
    )
    var title = ``;

  else if  (
      xhr
        .getElementsByTagName(
          `title`
        )[0]
          .childNodes[0]
      &&
      title.length == 7
  )
    var title =
      xhr
        .getElementsByTagName(
          `title`
        )[0]
          .childNodes[0]
            .nodeValue;
  return title.replace(/<.>/g, ``);
};
