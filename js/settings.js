// initial theme
let set = `Day`;

/*
    backgroundImage [array]

      Applications
        main, container

      Result
        set background

*/

let backgroundImage = [
  {
    path: "images/ffe869c642be33cbb2c3e609e27beb29.webp",
    element: "container", //container or main
    position: "center",
    size: "cover",
  },
];

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
    expandVisual [boolean/integer]

      Applications
        sidebar, onload

      Result
        Visual expanded

*/

let expandVisual = false;

/*
    expandBackground [boolean/integer]

      Applications
        sideBar

      Result
        Background expanded

*/

let expandBackground = false;

/*
    showOption [boolean/integer]

      Applications
        sideBar, topBar

      Result
        toggle icons in topBar

*/

let showOption = true;

/*
    showRipple [boolean/integer]

      Applications
        sideBar, populate

      Result
        ripple coloring effect.

*/

let showRipple = true;

/*
    showRipple [boolean/integer]

      Applications
        sideBar, populate

      Result
        ripple coloring effect.

*/

let showDescription = true;

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
    scrollIntoView [string]

      Applications
        xml, group

      Result
        adds padding-top and animates out

*/

let scrollIntoView = false;

/*
    fadeIntoView [string]

      Applications
        xml, progressBackdrop

      Result
        fades img in with scaling

*/

let fadeIntoView = false;

/*
    loading [boolean/integer]

      Applications
        progressBackdrop

      Result
        group, xml paddingTop scrolls intoView

*/

let loading = `percent`;

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

let category = `Social`;

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
        random generated integer

*/

let contentStatusBuffer = 5;

/*
    safeSearch [integer]

      Applications
        xmlImageAttributes

      Result
        blur filter nsfw

*/

let safeSearch = true;

/*
    safeSearchScore [string]

      Applications
        xmlImageAttributes

      Result
        less than string filtered

*/

let safeSearchScore = `0.3369845151901245`;

/*
    safeSearchCategory [array]

      Applications
        xmlImageAttributes

      Result
        category applied searchSearch (faster)

*/

let safeSearchIDs =
  [
    `Imgur/Celebs`,
    `Reddit/Celebs`,
    `Imgur/Celebhub`,
    `Reddit/Celebhub`,
    `Imgur/Goddesses`,
    `Reddit/Goddesses`,
    `4Chan/HR High Resolution`,
    `4Chan/Wallpapers General`
  ];

/*
    cors [string]

      Applications
        xmlRequestParsing, httpRequest

      Result
        cors-anywhere instance

      Fail
        ABC in cloudflare worker

*/

const cors = `https://acktic-github-io.herokuapp.com/`;

/*
    api [string]

      Applications
        xmlImageAttributes

      Result
        filter nsfw feeds

*/

const api = `https://acktic-github-io-api.herokuapp.com/?url=`;

/*  translations [array]

      Applications
        populateCategoryGroup, reverseCategoryGroup, quickFeedAsset, sideBarDisplay

      Result
        menu array filtered and shown

      Option
        Reorder.

*/

const translations = [
  `Social`,
  `News`,
  `Entertainment`,
  `Sports`,
  `Technology`,
  `World`,
  `Youtube`,
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
let touchendX = 0; //
let touchstartX = 0; // swipe variables
let contrast = false; //opposite of op +1
let sideBarFirst = true; //first click show
let imageDuplicate = []; //image src duplicate catch
let randomDuplicate = []; //core.js random duplicate xml
let guideOnScreen; //temporarly store onScreen for guide

let faRipple
if (showRipple == true)
  faRipple = `fa-check`
else faRipple = `fa-circle-notch`

const selections = [
  //sideBar sel options

  { name: `Home`, class: `sideHome`, icon: `fa-home` },
  { name: `Reader`, class: `Reader`, icon: `fa-heart` },
  { name: `List`, class: `List`, icon: `fa-th-large` },
  { name: `Blocks`, class: `Blocks`, icon: `fa-list-ul` },
  { name: `Percent`, class: `Percent`, icon: `fa-signal` },
  { name: `Dots`, class: `Dots`, icon: `fa-ellipsis-h` },
  { name: `Images`, class: `toggleImages`, icon: `fa-camera-retro` },
  { name: `Top Bar`, class: `TopBar`, icon: `fa-edit` },
  { name: `Use Ripples`, class: `showRipple`, icon: faRipple },
  { name: `Fade in Images`, class: `fadeElement`, icon: `fa-paint-brush` },
  { name: `Scroll Into View`, class: `scrollView`, icon: `fa-level-up-alt` },
  { name: `Show Option`, class: `ShowOption`, icon: `fa-puzzle-piece` },
  { name: `Show Description`, class: `showDescription`, icon: `fa-splotch` },
  { name: `Random`, class: `Random`, icon: `fa-chart-pie` },
  { name: `Random Image`, class: `RandomImages`, icon: `fa-tablet-alt` },
  { name: `Random in Category`, class: `RandomCategory`, icon: `fa-sliders-h` },
  { name: `Repository`, class: `Info`, icon: `fa-exclamation-circle` },
];

const background = [
  { name: `Fit`, class: `fitBackground`, icon: `fa-crop-alt` },
  { name: `Cover`, class: `coverBackground`, icon: `fa-expand` },
  { name: `Set`, class: `setBackground`, icon: `fa-user` },
  { name: `Save`, class: `saveBackground`, icon: `fa-download` },
  { name: `Reset Path`, class: `resetBackground`, icon: `fa-cloud` },
  { name: `Remove`, class: `removeBackground`, icon: `fa-certificate` },
  { name: `Choose Main`, class: `mainBackground`, icon: `fa-book-open` },
  {
    name: `Choose Container`,
    class: `containerBackground`,
    icon: `fa-layer-group`,
  },
];

const repository = `https://github.com/acktic/acktic.github.io`;
