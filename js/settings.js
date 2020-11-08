/*
    op [boolean/integer]

      Applications
        contrast, visual, sideBarDisplay

      Result
        1 Opposite [Night]
        0 Invert   [Day]

*/

let op = 0;

/*
    topBar [boolean/integer]

      Applications
        sideBarDisplay

      Result
        toggle hidden in guide

*/

let topBar = true;

/*
    reader [boolean/integer]

      Applications
        sideBarDisplay, options

      Result
        scroll call anyRandomMenuObject

*/

let reader = false;

/*
    onScreen [boolean/integer]

      Applications
        mainevents.js, onload, hide

      Result
        show sideBar

*/

let onScreen = true;

/*
    expand [boolean/integer]

      Applications
        sideBarDisplay, option, displayExpand

      Result
        false `blocks`
        true `list`

*/

let expand = true;

/*
    showOption [boolean/integer]

      Applications
        sideBar

      Result
        toggle topBar option

*/

let showOption = true;

/*
    quickFeeds [boolean/integer]

      Applications
        mainEvents.js, onLoad, clientWidth

      Result
        toggle quickFeedDisplay

*/

let quickFeeds = true;

/*
    quickFeedsTranslations [boolean/integer]

      Applications
        mainEvents.js, onload

      Result
        translations in quick feeds

*/

let quickFeedsTranslations = true;

/*
    loading [string]

      Applications
        init, progress, sideBar, unloading

      Result
        `percent`
        `dots`

*/

let scrollIntoView = false;

/*
    loading [boolean/integer]

      Applications
        progressBackdrop

      Result
        group, xml paddingTop scrolls intoView

*/

let loading = "percent";

/*
    titleTruncate [integer]

      Applications
        xmlRequestParsing

      Result
        trim xhr title

*/

let titleTruncate = 125;

/*
    category [translations/legacy]

      Applications
        populateCategoryGroup, reverseCategoryGroup, sideBar, reader,
        quickFeedAsset, topBar

      Result
        Social, News, Entertainment, Sports, Technology, World, Youtube
        display, read, random

*/

let category = "Social";

/*
    onlyImages [boolean/integer]

      Applications
        populateCategoryGroup, reverseCategoryGroup, sideBar, reader

      Result
        display, read, random

*/

let onlyImages = false;

/*
    suggestiongBuffer [integer]

      Applications
        inputFilterIndex

      Result
        input response buffered to [integer]

*/

let suggestionBuffer = 7;

/*
    contentStatusBuffer [integer]

      Applications
        xmlStatusSuggestions, xmlRequestParsing

      Result
        random generated

*/

let contentStatusBuffer = 5;

/*
    safeSearch [integer]

      Applications
        xmlImageAttributes

      Result
        blur filter

*/

let safeSearch = true;

/*
    safeSearchScore [string]

      Applications
        xmlImageAttributes

      Result
        less than string filtered

*/

let safeSearchScore = "0.4279794991016388"


/*
    safeSearchCategory [array]

      Applications
        xmlImageAttributes

      Result
        category applied searchSearch (faster)

*/

let safeSearchCategory =
  [
    "Social"
  ]


/*
    cors [string]

      Applications
        xmlRequestParsing, httpRequest

      Result
        cors-anywhere instance

      Fail
        ABC in cloudflare worker

*/

const cors = "https://acktic-github-io.herokuapp.com/";

/*
    api [string]

      Applications
        xmlImageAttributes

      Result
        filter nsfw feeds

*/

const api = "https://acktic-github-io-api.herokuapp.com/?url=";

/*  translations [array]

      Applications
        populateCategoryGroup, reverseCategoryGroup, quickFeedAsset, sideBarDisplay

      Result
        menu array filtered and shown

      Option
        Reorder.

*/

const translations = [
  "Social",
  "News",
  "Entertainment",
  "Sports",
  "Technology",
  "World",
  "Youtube",
];

/* Feel free to edit the above. */

let post; //from init.js global timestamp for guide
let id = 0; //feed indexOf menu
let tap = 0; //used in mainEvents.js for images
let complete; //coreHelpers.js interval for progress
let httpRequest; //uri xml httpRequest
let random = []; //core.js random feed in category
let filter = []; //response array for menu objects
let first = true; //reader append feed center channel
let contrast = false; //opposite of op +1
let sideBarFirst = true; //first click show
let imageDuplicate = []; //image src duplicate catch
let randomDuplicate = []; //core.js random duplicate xml
let guideOnScreen; //temporarly store onScreen for guide

const selections = [
  //sideBar sel options

  { name: "Home", class: "sideHome", icon: "fa-home" },
  { name: "Reader", class: "Reader", icon: "fa-heart" },
  { name: "List", class: "List", icon: "fa-th-large" },
  { name: "Blocks", class: "Blocks", icon: "fa-list-ul" },
  { name: "Percent", class: "Percent", icon: "fa-signal" },
  { name: "Dots", class: "Dots", icon: "fa-ellipsis-h" },
  { name: "Images", class: "toggleImages", icon: "fa-camera-retro" },
  { name: "Top Bar", class: "TopBar", icon: "fa-edit" },
  { name: "Show Option", class: "ShowOption", icon: "fa-puzzle-piece" },
  { name: "Random", class: "Random", icon: "fa-chart-pie" },
  { name: "Random Image", class: "RandomImages", icon: "fa-tablet-alt" },
  { name: "Random in Category", class: "RandomCategory", icon: "fa-sliders-h" },
  { name: "Repository", class: "Info", icon: "fa-exclamation-circle" },
];

const repository = "https://github.com/acktic/acktic.github.io"
