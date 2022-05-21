// set Home document.title
let doc = `n@nd`


// initial theme
let set = `Light`;

/*
    backgroundImage [array]

      Applications
        main, container

      Result
        set background
        element: container / main

*/

// backgroundImage path can be
// overwritten in themes files, see Example.js

let backgroundImage = [{
  // note: path begins in index.html folder use ../../ to exit project folder
  path: "",
  element: "container",
  position: "center",
  size: "cover",
}, ];

//  {
//    obFn: `Object Function (in example file in js/themes)`,
//    class: `class click Event (generated from this array)`,
//    icon: https://fontawesome.com/cheatsheet
//  }

let themes = [{
    obFn: `Light`,
    class: `Light`,
    icon: `fa-terminal`
  },
  {
    obFn: `Night`,
    class: `Night`,
    icon: `fa-code`
  }
];

const favorites = [
  `Reddit/Wallpaper`,
  `Reddit/Wallpapers`,
  `Reddit/Los Angeles`,
  `Reddit/San Francisco`,
]

/*
    bootup [boolean/integer]

      Applications
        Init.js

      Result
        pretty bootup

*/

let bootup = false;

/*
    pretty [boolean/integer]

      Applications
        pretty.js

      Result
        pretty wallpaper

*/

let pretty = false;

/*
    topBar [boolean/integer]

      Applications
        sideBarDisplay

      Result
        toggle hidden in guide

*/

let topBar = true;

/*
    showOption [boolean/integer]

      Applications
        guide, group, xml

      Result
        toggle option icons in topBar

*/

let showOption = true;

/*
    display [boolean/integer]

      Applications
        display/Sidescroll
        display/Legacy
        display/Flex

      Result
        `sideScroll`,
        `flexBox`,
        `legacy`,
        `duo`

*/

let display = `flexBox`;

/*
    display [boolean/integer]

      Applications
        xml/Request.js
        init.js

      Result
        `sideScroll`,
        `legacy`,

*/

let defaultText = `legacy`;

/*
    Reader [boolean/integer]

      Applications
        main/Events
        xml/Events

      Result
        scroll call anyRandomMenuObject

*/

let Reader = false;

/*
    readPrevious [boolean/integer]

      Applications
        main/Helpers
        xml/Request

      Result
        random array reset category switch

*/

let readPrevious = true;

/*
    assetRefresh [boolean/integer]

      Applications
        xml/Request
        xml/Append

      Result
        refresh status/suggestions every number

*/

let assetRefresh = 5;

/*
    assetVisibility [boolean/integer]

      Applications
        xml/Append

      Result
        greater then hidden

*/

let assetVisibility = 5;

/*
    onScreen [boolean/integer]

      Applications
        sideBar/Display
        xml/Append
        main/Init

      Result
        show sideBar

*/

let onScreen = false;


/*
    sideBarDock [boolean/integer]

      Applications
        sideBar/Display

      Result
        dock sideBar

*/

let sideBarDock = false;

/*
    sideBarLock [boolean/integer]

      Applications
        sideBar/Display
        sideBar/Events

      Result
        lock sideBar onScreen

*/

let sideBarLock = false;

/*
    expand [boolean/integer]

      Applications
        css/Class
        group

      Result
        false `blocks`
        true `list`

*/

let expand = true;

/*
    showSplash [boolean/integer]

      Applications
        display
        group
        xml

      Result
        Show Loading Splash.

*/

let showSplash = true;

/*
    sideBarCenter [boolean/integer]

      Applications
        Init

      Result
        center sidebar

*/

let sideBarCenter = true;

/*
    sideBarBackdrop [boolean/integer]

      Applications
        Init

      Result
        add backdrop sidebar

*/

let sideBarBackdrop = true;

/*
    sideBarMousewheel [boolean/integer]

      Applications
        sidebar/Events

      Result
        display sideBar with Mouse.

*/

let sideBarMouse = true;

/*
    sideBarMousewheel [boolean/integer]

      Applications
        sideBar/Events

      Result
        display sideBar with Mousewheel.

*/

let sideBarMousewheel = false;

/*
    topBarBackdrop [boolean/integer]

      Applications
        Init

      Result
        add backdrop filter to top bar.

*/

let topBarBackdrop = false;

/*
    onlySearch [boolean/integer]

      Applications
        Init

      Result
        only display page visit search bar

*/

let onlySearch = false;

/*
    quickFeeds [boolean/integer]

      Applications
        Init

      Result
        toggle quickFeedDisplay

*/

let quickFeeds = false;

/*
    scrollIntoView [boolean/integer]

      Applications
        Progress

      Result
        adds padding-top and animates out

*/

let scrollIntoView = true;

/*
    imageLoader [boolean/integer]

      Applications
        xmlHTMLBuild

      Result
        `double-circle`
        `ring-circle`
        `loading`
        `v-bars`
        false

*/

let imageLoader = `ring-circle`;

/*
    fadeIntoView [boolean/integer]

      Applications
        build/xmlHTMLBuild
        Progress

      Result
        fades img in with scaling

*/

let fadeIntoView = false;

/*
    loading [string]

      Applications
        Progress
        Helpers

      Result
        `dots`
        `percent`

*/

let loading = `percent`;

/*
    titleTruncate [integer]

      Applications
        xml/Request

      Result
        trim xhr title

*/

let titleTruncate = 125;

/*
    category [translations/legacy]

      Applications
        none

      Result
        legacy feature

*/

let category = `Reddit`;

/*
    roundedEdge [boolean/integer]

      Applications
        xmlHTMLBuild

      Result
        round image edges

*/

let roundedEdge = false;

/*
    onlyImages [boolean/integer]

      Applications
        helpers
        group
        xml

      Result
        display only images

*/

let onlyImages = true;

/*
    feedImages [boolean/integer]

      Applications
        build/xmlHTMLBuild

      Result
        display images

*/

let feedImages = true;

/*
    suggestionBuffer [integer]

      Applications
        input/Input

      Result
        input response buffered to [integer]

*/

let suggestionBuffer = 36;

/*
    contentStatusBuffer [integer]

      Applications
        xml/Suggest

      Result
        generated suggestions

*/

let contentStatusBuffer = 7;

/*
    omitGuide [boolean/integer]

      Applications
        xml/Append

      Result
        Guide Posts not in feed

*/

let omitGuide = true;

/*
    hash [boolean/integer]

      Applications
        xml/Request
        xml/Hash

      Result
        `long`
        `short`
        `title`

*/

let hash = `title`;

/*
    safeSearch [integer]

      Applications
        image/Attributes

      Result
        blur filter nsfw

*/

let safeSearch = true;

/*
    guideSafeSearch [boolean/integer]

      Applications
        image/Attributes

      Result
        apply safeSearch to guide

*/

let guideSafeSearch = false;

/*
    safeSearchScore [string]

      Applications
        image/Attributes

      Result
        greater than string filtered

*/

let safeSearchScore = `0.013473876751959324`;

/*
    safeSearchIDs [array]

      Applications
        image/Attributes

      Result
        ids applied searchSearch

*/

let safeSearchIDs = [
  `4Chan/High Resolution`,
  `Reddit/Selfie`,
];

/*
    exclude [array]

      Applications
        xml/Request
        xml/Append
        init

      Result
        filter titles excluded

*/

let exclude = [`Buy`, `Sale`, `Save`, `Best`, `Price`, `Shop`];

/*
    cors [string]

      Applications
        image/Attributes
        xml/Request

      Result
        ty heroku (cors-anywhere instance)

*/

const cors = `https://acktic-github-io.herokuapp.com/`;

/*
    api [string]

      Applications
        image/Attributes

      Result
        ty heroku (filter nsfw feeds with score)

*/

const api = `https://acktic-github-io-api.herokuapp.com/?url=`;

/*  translations [array]

      Applications
        build/Build

      Result
        menu array filtered and shown

      Option
        Reorder.

*/

const translations = [
  `Assets`,
  `Reddit`,
  `News`,
  `Media`,
  `Sports`,
  `Tech`,
  `World`,
  `Youtube`,
];

const repository = `https://github.com/acktic/nand`;
const facebook = `https://www.facebook.com/acktic`;
const reddit = `https://www.reddit.com/user/acktic`;
const twitter = `https://www.twitter.com/acktic`;
const pinterest = `https://www.pinterest.com/ackt1c`;
const instagram = `https://www.instagram.com/acktic`;
const youtube = `https://www.youtube.com/channel/UCwac2_RyHP2UneqETNLM6_Q`;
const amazon = `https://www.amazon.com/hz/wishlist/ls/3KMRCG63QLYAC`;
const wordpress = `https://acktics.wordpress.com`;

/* Feel free to edit the above. */

let verticalbars;
let circleloader;
let loaderfalse;
let loadinganim;
let ringloader;
let Dots;
let Percent;
let Blocks;
let List;
let dual;
let legacy;
let sscroll;
let flex;
let asset = [];
let assets = [];
let expandAnimations = false;
let expandBackground = false;
let expandFavorites = false;
let expandSettings = false;
let expandVisual = false;
let expandFilter = false;
let notifyArray = []; //notifications queue
let cycleViewport // display viewport index
let viewport = ['legacy', 'duo', 'flexBox', 'sideScroll']
let quit; // xmlRequestParsing pub length
if (Reader == false) quit = 30;
else quit = 16;
let checkPosition // fadeIntoView function
let post; //from init.js global timestamp for guide
let id; //feed indexOf menu
let tap = 0; //used in mainEvents.js for images
let httpRequest; //uri xml httpRequest
let random = []; //core.js random feed in category
let filter = []; //response array for menu objects
let first = true; //reader append feed center channel
let count = []; //progressBackdrop init calls
let pub = []; //raw html of publication
let local; //copy of post in base36
let index; //copy of id used in guide
let offset; //touchmove scroll reader
let adj = []; //menu randomized
let complete; //progressBar interval
let images = []; //array of images in request
let scrollIntoViewBuffer = scrollIntoView // viewports/group
let onlyImagesBuffer = onlyImages; // used in Reader
let sideBarLockBuffer = sideBarLock // used in urlInput
let touchmove = false; // scrollToElements
let touchendY = 0; // handleSwip, handleGuide
let touchstartY = 0; // handleSwip, handleGuide
let touchendX = 0; // handleSwip, handleGuide
let touchstartX = 0; // swipe variables
let contrast = false; //opposite of op +1
let sideBarFirst = true; //first click show
let imageDuplicate = []; //image src duplicate catch
let randomDuplicate = []; //core.js random duplicate xml
let guideOnScreen; //temporarly store onScreen for guide

const animations = [{
    name: `Ring`,
    class: `ringloader`
  },
  {
    name: `Bars`,
    class: `verticalbars`
  },
  {
    name: `Blink`,
    class: `loaderfalse`
  },
  {
    name: `Loading`,
    class: `loadinganim`
  },
  {
    name: `Circles`,
    class: `circleloader`
  },
  {
    name: `Percent`,
    class: `Percent`
  },
  {
    name: `Progress`,
    class: `Progress`
  }
]

const view = [{
    name: `Duo`,
    class: `dual`
  },
  {
    name: `Flex`,
    class: `flex`
  },
  {
    name: `Side`,
    class: `sscroll`
  },
  {
    name: `Mobile`,
    class: `legacy`
  }
]

const settings = [{
    name: `List`,
    class: `List`
  },
  {
    name: `Blocks`,
    class: `Blocks`
  },
  {
    name: `Fade in Images`,
    class: `fadeIntoView`
  },
  {
    name: `Scroll Into View`,
    class: `scrollIntoView`
  },
  {
    name: `Sidebar Backdrop`,
    class: `sideBarBackdrop`
  },
  {
    name: `Sidebar Dock`,
    class: `sideBarDock`
  },
  {
    name: `Only Images`,
    class: `onlyImages`
  },
  {
    name: `Only Search`,
    class: `onlySearch`
  },
];

const background = [{
    name: `Fit Container`,
    class: `fitBackground`,
    icon: `fa-crop-alt`
  },
  {
    name: `Set Background`,
    class: `setBackground`,
    icon: `fa-user`
  },
  {
    name: `Save Path`,
    class: `saveBackground`,
    icon: `fa-download`
  },
  {
    name: `Layer Group`,
    class: `containerBackground`,
    icon: `fa-layer-group`
  },
  {
    name: `Cover Background`,
    class: `coverBackground`,
    icon: `fa-expand`
  },
  {
    name: `Reset Path`,
    class: `resetBackground`,
    icon: `fa-cloud`
  },
  {
    name: `Remove`,
    class: `removeBackground`,
    icon: `fa-certificate`
  },
];
