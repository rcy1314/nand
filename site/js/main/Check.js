let Check = function() {
  if (
    imageLoader ==
    `double-circle`
  ) {
    _check
      .querySelector(
        `.bars`
      )
      .style.display =
      `none`
    _check
      .querySelector(
        `.animation`
      )
      .style.display =
      `none`
    _check
      .querySelector(
        `.loader`
      )
      .style.display =
      `block`
    _check
      .querySelector(
        `#load`
      )
      .style.display =
      `none`
  } else if (
    imageLoader ==
    `loading`
  ) {
    _check
      .querySelector(
        `#load`
      )
      .style.display =
      `block`
    _check
      .querySelector(
        `.animation`
      )
      .style.display =
      `none`
    _check
      .querySelector(
        `.bars`
      )
      .style.display =
      `none`
    _check
      .querySelector(
        `.loader`
      )
      .style.display =
      `none`
  } else if (
    imageLoader ==
    `v-bars`
  ) {
    _check
      .querySelector(
        `.animation`
      )
      .style.display =
      `none`
    _check
      .querySelector(
        `.bars`
      )
      .style.display =
      `block`
    _check
      .querySelector(
        `.loader`
      )
      .style.display =
      `none`
    _check
      .querySelector(
        `#load`
      )
      .style.display =
      `none`
  } else if (
    imageLoader ==
    `ring-circle`
  ) {
    _check
      .querySelector(
        `.animation`
      )
      .style.display =
      `block`
    _check
      .querySelector(
        `.bars`
      )
      .style.display =
      `none`
    _check
      .querySelector(
        `.loader`
      )
      .style.display =
      `none`
    _check
      .querySelector(
        `#load`
      )
      .style.display =
      `none`
  } else if (
    imageLoader ==
    `false`
  ) {
    _check
      .querySelector(
        `.animation`
      )
      .style.display =
      `none`
    _check
      .querySelector(
        `.bars`
      )
      .style.display =
      `none`
    _check
      .querySelector(
        `.loader`
      )
      .style.display =
      `none`
    _check
      .querySelector(
        `#load`
      )
      .style.display =
      `none`
  }
}
