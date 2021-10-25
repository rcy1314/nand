let Other = function() {

  for (
    let i = 0;
    i <= translations.length - 1;
    i++
  )
    _under.append(
      underTranslation(translations[i])
    );

  if (
    onlySearch
  ) {
    _under.style.display = `none`;
    _show.style.display = `none`;
    _link.style.display = `none`;
  }

}
