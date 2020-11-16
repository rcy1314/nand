//cheatsheet https://fontawesome.com/cheatsheet
//not all icons work, free version...

let directory = `js/themes/`;
let extension = `.js`;

for (var visual of visuals) {
  let path = directory + visual + extension;
  let script = document.createElement(`script`);
  script.type = `text/javascript`;
  script.src = path;
  document.getElementsByTagName(`head`)[0].appendChild(script);
}

for (i = 0; i <= themes.length - 1; i++) {
  (function (i) {
    var theme = themes[i].name;
    document.addEventListener(
      `click`,
      function (event) {
        if (event.target.classList.contains(theme)) {
          initial = theme;
          window[theme]();
        }
      },
      false
    );
  })(i);
}
