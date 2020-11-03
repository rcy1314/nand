// Uncomment initial theme
let set = "Roses"

//cheatsheet https://fontawesome.com/cheatsheet
//not all icons work, free version...

const themes = [

  { name: "Roses", class: "Roses", icon: "fa-leaf" },
  { name: "Lemon", class: "Lemon", icon: "fa-lemon" },
  { name: "Eggplant", class: "Eggplant", icon: "fa-child" },
  { name: "Solarized", class: "Solarized", icon: "fa-digital-tachograph" },

];
//  { name: "Example function", class: "Class Click Event", icon: "fa-example" },

//create js theme file from existing to edit
//example.js function = themes.name
//add above and below example the themes and files

  let directory = "js/themes/";
  let extension = ".js";
  let files = [
    "lemon",
    "roses",
    "eggplant",
    "solarized",
//  "example file",
  ];

  for (var file of files) {
    let path = directory + file + extension;
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = path;
    document.getElementsByTagName("head")[0].appendChild(script);
  }

for (i = 0; i <= themes.length - 1; i++){
  (function(i){
    var theme = themes[i].name
    document.addEventListener(
      "click",
      function (event) {
        if (
          event.target.classList.contains(theme)
        ) {
                window[theme]()
        }
      },
      false
    )
  })(i);
}
var startup = setInterval(function() {
  if (typeof set === "string"){
    window[set]()
    setTimeout(function(){
      clearInterval(startup)
    }, 10)
  }
}, 5)
