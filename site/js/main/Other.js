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
    topBarBackdrop
  )
    _top.style.cssText = `backdrop-filter: blur(10px)`

  setTimeout(
    function () {

      Display();
      Background() ;
      Bootup();

    }, 300
  )

  if (
    onlySearch
  ) {
    _under.style.display = `none`;
    _show.style.display = `none`;
    _link.style.display = `none`;
  }

}
