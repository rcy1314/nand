let displayExpand = function (Value) {
  if (
    Value
  ) {
      groupType = `list`;
      if (
        document
          .body
            .contains(
              _group.querySelector(
                `.populate`
              )
            )
      ) {
        _group
          .querySelectorAll(
            `.populate`
          )
            .forEach(
              (a) =>
                a.classList.add(
                  `expand`
                )
            );
  			_group
          .querySelectorAll(
            `.populate`
          )
            .forEach(
              (a) =>
                a.classList.remove(
                  `block`
                )
            );
        }
    }

    else if (
      !Value
    ) {
      groupType = `blocks`;
      if (
        document
          .body
            .contains(
              _group.querySelector(
                `.populate`
              )
            )
      ) {
  			_group
          .querySelectorAll(
            `.populate`
          )
            .forEach(
              (a) =>
                a.classList.add(
                  `block`
                )
            );
        _group
          .querySelectorAll(
            `.populate`
          )
            .forEach(
              (a) =>
                a.classList.remove(
                  `expand`
                )
            );
        }
    }
};
