/*
    op [boolean/integer]

      Applications
        contrast, visual, sideBarDisplay

      Result
        1 Opposite [Night]
        0 Invert   [Day]

*/

          var op = 0;


/*
    topBar [boolean/integer]

      Applications
        sideBarDisplay

      Result
        toggle hidden in guide

*/

          var topBar = true;


/*
    reader [boolean/integer]

      Applications
        sideBarDisplay, options

      Result
        scroll call anyRandomMenuObject

*/

          var reader = false;


/*
    onScreen [boolean/integer]

      Applications
        mainevents.js, onload, hide

      Result
        show sideBar

*/

          var onScreen = true;


/*
    groupType [string]

      Applications
        sideBarDisplay, option, displayExpand

      Result
        `blocks`
        `list`

*/

          var groupType = "list";


/*
    showOption [boolean/integer]

      Applications
        sideBar

      Result
        toggle topBar option

*/

          var showOption = true;


/*
    quickFeeds [boolean/integer]

      Applications
        mainEvents.js, onLoad, clientWidth

      Result
        toggle quickFeedDisplay

*/

          var quickFeeds = true;


/*
    quickFeedsTranslations [boolean/integer]

      Applications
        mainEvents.js, onload

      Result
        translations in quick feeds

*/

          var quickFeedsTranslations = false;


/*
    loading [string]

      Applications
        init, progress, sideBar, unloading

      Result
        `percent`
        `dots`

*/

          var loading = "percent";


/*
    titleTruncate [integer]

      Applications
        xmlRequestParsing

      Result
        trim xhr title

*/

          var titleTruncate = 125


/*
    category [translations/legacy]

      Applications
        populateCategoryGroup, reverseCategoryGroup, sideBar, reader,
        quickFeedAsset, topBar

      Result
        Social, News, Entertainment, Sports, Technology, World, Youtube
        display, read, random

*/

          var category = "Social";


/*
    onlyImages [boolean/integer]

      Applications
        populateCategoryGroup, reverseCategoryGroup, sideBar, reader

      Result
        display, read, random

*/

          var onlyImages = false;


/*
    suggestiongBuffer [integer]

      Applications
        inputFilterIndex

      Result
        input response buffered to [integer]

*/

          var suggestionBuffer = 7;


/*
    contentStatusBuffer [integer]

      Applications
        xmlStatusSuggestions, xmlRequestParsing

      Result
        random generated

*/

          var contentStatusBuffer = 5;


/*
    cors [string]

      Applications
        xmlRequestParsing, httpRequest

      Result
        cors-anywhere instance

      Fail
        ABC in cloudflare worker

*/

          var cors = "https://acktic-github-io.herokuapp.com/";


/*  translations [array]

      Applications
        populateCategoryGroup, reverseCategoryGroup, quickFeedAsset, sideBarDisplay

      Result
        menu array filtered and shown

      Option
        Reorder.

*/

          var translations = [
            "Social",
            "News",
            "Entertainment",
            "Sports",
            "Technology",
            "World",
            "Youtube",
          ];



/* Feel free to edit the above. */


var id; //feed indexOf menu
var tap = 0; //used in mainEvents.js for images
var post; //from init.js timestamp
var local; //used in init.js for guide posts
var complete; //coreHelpers.js interval for progress
var dupe = []; //image src duplicate catch
var httpRequest; //uri xml httpRequest
var random = []; //core.js random feed in category
var filter = []; //response array for menu objects
var first = true; //reader append feed center channel
var expand = true; //filter populate list display
var contrast = false; //opposite of op +1
var randomDuplicate = []; //core.js random duplicate xml
var sidebarFirst = "true"; //first click show

var selections = [ //sideBar sel options

  { name: "Opposite", class: "Night", icon: "fa-code" },
  { name: "Invert", class: "Day", icon: "fa-terminal" },
  { name: "Home", class: "sideHome", icon: "side fa-home" },
  { name: "Random", class: "Random", icon: "fa-chart-pie" },
  { name: "Random Image", class: "RandomImages", icon: "fa-tablet-alt" },
  { name: "Random in Category", class: "RandomCategory", icon: "fa-sliders-h" },
  { name: "Reader", class: "Reader", icon: "fa-heart continuous" },
  { name: "Contrast", class: "Switch", icon: "fa-adjust" },
  { name: "List", class: "List", icon: "fa-th-large" },
  { name: "Blocks", class: "Blocks", icon: "fa-list-ul" },
  { name: "Percent", class: "Percent", icon: "fa-signal" },
  { name: "Dots", class: "Dots", icon: "sideDots fa-ellipsis-h" },
  { name: "Images", class: "toggleImages", icon: "fa-camera-retro" },
  { name: "Top Bar", class: "TopBar", icon: "fa-edit" },
  { name: "Show Option", class: "ShowOption", icon: "fa-puzzle-piece" },
  { name: "Repository", class: "Info", icon: "fa-exclamation-circle" },

];
