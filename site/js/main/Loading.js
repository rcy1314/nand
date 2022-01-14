setTimeout(
  () => {
    if (imageLoader == `v-bars`) {
      notifyOption(`Vertical Bars`, `fa-check-circle`);
      circleloader = false;
      ringloader = false;
      verticalbars = true;
      loadinganim = false;
      loaderfalse = false;
    } else if (imageLoader == `double-circle`) {
      notifyOption(`Double Circle`, `fa-check-circle`);
      verticalbars = false;
      ringloader = false;
      circleloader = true;
      loadinganim = false;
      loaderfalse = false;
    } else if (imageLoader == `ring-circle`) {
      notifyOption(`Ring Circle`, `fa-check-circle`);
      circleloader = false;
      verticalbars = false;
      ringloader = true;
      loadinganim = false;
      loaderfalse = false;
    } else if (imageLoader == `loading`) {
      notifyOption(`Loading Animation`, `fa-check-circle`);
      circleloader = false;
      verticalbars = false;
      loaderfalse = false;
      ringloader = false;
      loadinganim = true;
    } else if (imageLoader == false) {
      notifyOption(`No Animations`, `fa-check-circle`);
      circleloader = false;
      verticalbars = false;
      ringloader = false;
      loaderfalse = true;
      loadinganim = false;
    }

    if (display == `legacy`) {
      notifyOption(`Mobile`, `fa-check-circle`);
      dual = false;
      legacy = true;
      sscroll = false;
      flex = false;
    } else if (display == `duo`) {
      notifyOption(`Duo`, `fa-check-circle`);
      dual = true;
      legacy = false;
      sscroll = false;
      flex = false;
    } else if (display == `sideScroll`) {
      notifyOption(`Side Scroll`, `fa-check-circle`);
      dual = false;
      legacy = false;
      sscroll = true;
      flex = false;
    } else if (display == `flexBox`) {
      notifyOption(`Flex Box`, `fa-check-circle`);
      dual = false;
      legacy = false;
      sscroll = false;
      flex = true;
    }

    if (loading == `percent`) {
      notifyOption(`Percent`, `fa-check-circle`);
      Dots = false;
      Percent = true;
    } else {
      notifyOption(`Dots`, `fa-check-circle`);
      Dots = true;
      Percent = false;
    }
    if (expand == true) {
      notifyOption(`List`, `fa-check-circle`);
      Blocks = false;
      List = true;
    } else {
      notifyOption(`Blocks`, `fa-check-circle`);
      Blocks = true;
      List = false;
    }
    /*
    notifyOption(`${settings.length} Settings`, `fa-check-circle`);
    notifyOption(`${exclude.length} Filters`, `fa-check-circle`);
    notifyOption(`${view.length} Views`, `fa-check-circle`);
    notifyOption(`${themes.length} Themes`, `fa-check-circle`);
    */
  }, 500
)
