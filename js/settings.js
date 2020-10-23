/*  Op refers to opposite and invert visual styles.
    1 Opposite [Night]
    0 Invert   [Day]
*/
    var op = 0;


/*  topBar decides to show or hide the transparent
    search and option bar in groups and feeds.
    Hidden in guide events.
*/

    var topBar = true;


/*  Reader is a option for category reading.
    Responsive to onlyImages and translations this will
    respond on scroll event and executes anyRandomMenuObject.
*/

    var reader = false;


/*  onScreen display the sideBar with a couple of conditions
    in mainEvents.js not in viewports less than 768 and
    sideBarDisplay in baseFunctions.js will resize main if
    the viewport is greater than 768.
*/

    var onScreen = true;


/*  groupType is set by expand-alt and block / list in sideBar
    options are `list` and `blocks` referring function is
    displayExpand in baseFunctions.js
*/

    var groupType = "list";


/*  showOption works in conjuction with topBar and will only
    show effect if topBar is true then hiding the arm options.
*/

    var showOption = true;


/*  quickFeeds is another toggle for displaying page visit feeds.
    Viewports less than 425 will call quickFeedAsset in baseFunctions.js
    and set 7 translations [mainEvents.js] with quickFeeds set to true.
*/

    var quickFeeds = true;


/*  quickFeedsTranslations [boolean]

      Applies to
        mainEvents.js onload

      Result
        displays translations in quick feeds.
*/

    var quickFeedsTranslations = true;


/*  loading is string that functions as either `dots` or `percent` */

    var loading = "percent";


/*  titleTruncate trims the xmlRequestParsing tag title in pub to
    givin integer and appends ... more with parent Element [pub]
    containing and attribute text with the full title that is shown
    clicking more
*/

    var titleTruncate = 125


/*  category can be any translation and really just populates or reads
    from said calls. Be sure to capitalize.
*/

    var category = "Social";


/*  onlyImages [boolean]

      Applies to populateCategoryGroup, reader.
*/

    var onlyImages = false;

/*  suggestiongBuffer [integer]

      Applies to
        inputFilterIndex

      Result
        input response less than [integer] will fill to [integer]
*/

    var suggestionBuffer = 7;


/*  contentStatusBuffer [integer]

      Applies to
        xmlStatusSuggestions

      Result
        Random feeds suggested from feed
*/

    var contentStatusBuffer = 5;


/*  cors [string]

      Applies to
        xmlRequestParsing

      Result
        menu[id].uri prepended with cors-anywhere instance
*/

    var cors = "https://acktic-github-io.herokuapp.com/";


/*  translations [array]

      Applies to
        populateCategoryGroup, reverseCategoryGroup, quickFeedAsset, sideBarDisplay

      Result
        headXML.js menu array cat is filtered and shown

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
var post; //from init.js timestamp
var tap = 0; //used in main.js for images
var complete; //core.js interval for progress
var dupe = []; //image src duplicate catch
var local; //used in init.js for guide posts
var expand = true; //filter populate list display
var httpRequest; //uri xml httpRequest
var random = []; //core.js random feed in category
var filter = []; //response array for menu indexes
var first = true; //reader append feed center channel
var sidebarFirst = "true"; //first click show
var expand = true; //filter populate list display
var contrast = false; //opposite of op
var randomDuplicate = []; //core.js random duplicate xml

var selections = [
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
