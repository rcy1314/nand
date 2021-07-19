var Suggest = function () {
  let duplicate = [];
    for (
      let i = 1;
      i <= contentStatusBuffer;
      i++
    ) {
      let randomMenuObject = menu.indexOf(
        menu[
          Math.floor(
            Math.random() * menu.length - 1
          )
        ]
      );
      if (
        !duplicate.includes(randomMenuObject) &&
        menu[randomMenuObject] &&
        randomMenuObject !== 0
      ) {
        if (
          menu[
            randomMenuObject
          ].media == true
        )
          var media = `feed contains images`;
        else if (
          menu[
            randomMenuObject
          ].media == false
        )
          var media = `feed might not contain images`;
        duplicate.push(randomMenuObject);
        _suggestions.append(
          suggestBuild(
            media,
            menu.indexOf(menu[randomMenuObject]),
            menu[randomMenuObject].image.image(),
            menu[randomMenuObject].id,
            menu[randomMenuObject].category
          )
        );
      }
    }
  };
