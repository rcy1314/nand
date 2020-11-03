var Example = function() {
  //global box shadow color
  document.documentElement.style.setProperty(
    "--box-shadow",
    "8px 8px 16px rgba(45, 38, 54, .2)"
  );
  // Input listing suggested, Visit button, Feed suggestions
  document.documentElement.style.setProperty(
    "--loader-color-primary",
    "linear-gradient(-45deg, rgba(106, 66, 194, 1) 50%," +
    "rgba(253, 115, 136, 1) 100%)"
  );
  //Visit button hover
  document.documentElement.style.setProperty(
    "--loader-color-secondary",
    "linear-gradient(45deg, rgba(106, 66, 194, 1) 50%," +
    "rgba(253, 115, 136, 1) 100%)"
  );
  //General Text Color
  document.documentElement.style.setProperty(
    "--fill-color-primary",
    "#eeeeee"
  );
  //Scrollbar thumb, a href, copy post attribute
  document.documentElement.style.setProperty(
    "--fill-color-secondary",
    "rgba(253, 115, 136, 1)"
  );
  //Inputs color, List view, Feed items, Input Listings, Guide Wrap, XML Status
  document.documentElement.style.setProperty(
    "--bg-color-primary",
    "linear-gradient(right, rgba(106, 66, 194, .4) 50%," +
    "rgba(253, 115, 136, .4) 100%)"
  );
  //HTML, Body, Container, Blocks view bg
  document.documentElement.style.setProperty(
    "--bg-color-secondary",
    "linear-gradient(45deg, rgba(106, 66, 194, 1) 50%," +
    "rgba(253, 115, 136, 1) 100%)"
  );
  //Sidebar, Home toggles, Categories, Quick feeds, Feed item/copy, Feed Status
  document.documentElement.style.setProperty(
    "--hover-background-color",
    "rgba(63, 92, 136, .4)"
  );
  //Used in legacy to keep dimensions when hovered with border
  document.documentElement.style.setProperty(
    "--not-hover-border-color",
    ".3px solid transparent"
  );
  //Used in Legacy to highlight hover
  document.documentElement.style.setProperty(
    "--hover-border-color",
    ".3px solid #eeeeee"
  );
  //Inputs, Home toggles
  document.documentElement.style.setProperty(
    "--borderless-hover-color",
    "rgba(63, 92, 136, .5)"
  );
  //Percent color
  document.documentElement.style.setProperty(
    "--progress-background",
    "rgba(63, 92, 136, .3)"
  );
  //Guide blur color
  document.documentElement.style.setProperty(
    "--sticky-background",
    "rgba(63, 92, 136, .4)"
  );
  //Rotate Categories, sidebar, quick feeds, topBar input listing
  document.documentElement.style.setProperty(
    "--hue-rotate",
    "hue-rotate(110deg)"
  );
  //General overwrites
  document.querySelectorAll("#container, #visit")
    .forEach(
      (a) => (a.style.backgroundImage = "var(--bg-color-secondary)"))
  document.querySelectorAll("#sidebar, #content")
    .forEach(
      (a) => (a.style.backgroundImage = "var(--bg-color-primary)"))
  document.querySelector('#hide').style.background =
  "var(--progress-background)"

}
