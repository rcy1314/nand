//cheatsheet https://fontawesome.com/cheatsheet
//not all icons work, free version...

const themes = [

  { name: "Lemon", class: "Lemon", icon: "fa-lemon" },
  { name: "Eggplant", class: "Eggplant", icon: "fa-egg" },

];
//  { name: "Example Theme function", class: "Example Click Event", icon: "fa-example" },

//create js theme file from existing to edit
//example.js function = themes.name
//add above and below
//add icon to js/themes/css/icons.css changing content:

  let directory = "js/themes/";
  let extension = ".js";
  let files = [
    "lemon",
    "eggplant",
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

/* <--------------------------------------------------------------

  var startup = setInterval(function() {
    if (typeof Lemon === "function"){

// *** above and below Replace "Lemon" with themes.name ***

      Lemon()
      setTimeout(function(){
        clearInterval(startup)
      }, 10)
    }
  }, 5)


//uncomment startup to set initial theme

-----------------------------------------------------------------> */
