var groupBuild = function () {
  let main = document.querySelector("#main")
  let group = document.createElement("div")
  group.innerHTML = `<div class='result'></div>`
  group.id = `group`
  main.append(group)
}

var stageBuild = function () {
  return `
     <div id='feed'>
       <div class='center'>
         <div class='channel'></div>
       </div>
       <div class='content'>
         <div class='status'></div>
         <div class='suggestions'>
         </div>
       </div>
     </div>
     `;
};

var footerBuild = function () {
  return `
     <div id='bottom'>
       <div class='back btn' aria-item='${back()}'>
           <span class='front'></span>
           <span class='flip-front'>Previous</span>
           <span class='flip-back'>
    ${String(menu[back()].id.match(/[^\/]+$/g)).substring(0, 13)}
     ...</span>
       </div>
       <div class='bottom'>Return</div>
       <div class='next btn' aria-item='${next()}'>
           <span class='front'></span>
           <span class='flip-front'>Next</span>
           <span class='flip-back'>
    ${String(menu[next()].id.match(/[^\/]+$/g)).substring(0, 13)}
     ...</span>
       </div>
     </div>
    `;
};

var guideBuild = function (pubArray) {
  return `
     <svg class='checkmark' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'>
       <circle class='checkmark__circle' cx='26' cy='26' r='25' fill='none' />
       <path class='checkmark__check' fill='none' d='M16 16 36 36 M36 16 16 36' />
     </svg>
     <div class='blur'></div>
     <div class='sticky item'>
       <div class='fill'></div>
       <div class='item src' aria-item='${pubArray[0].id}'
       ext='${pubArray[0].re}'>
         <div class='image'>
           <div class='fa fa-heart'></div>
           <img id='${pubArray[0].element}'
        class='img guide'>
         </div>
       </div>
       <div class='wrap item' ext='${pubArray[0].re}'>
         <div class='header'>
         <div class='courtesy' style='float:left'>
           <img src='${pubArray[0].image}'>
           <a ext='${pubArray[0].re}'>
             <b>
        ${menu[pubArray[0].id].id.match(/([^\/]+)$/g)}
         </b>
           </a>
           <div class='copy'>
           <div class='attr fa-ellipsis-h'></div>
             <div class='attribute' style='height:110px'>
               <div class='site'>Copy Url
                 <div style='float:right' class='fas fa-at'></div>
               </div>
               <div class='post' style='display:block'>Copy Post
                 <div style='float:right;display:block' class='fa fa-share'></div>
               </div>
               <div class='picture' style='display:block'>Copy Source
                 <div style='float:right;display:block' class='fa fa-camera'></div>
               </div>
             </div>
           </div>
         </div>
     </div>
         <div class='pub'>
    ${pubArray[0].title}
     </div>
         <div class='ago'>
    ${pubArray[0].dst}
     </div>
         <input class='url' value='${pubArray[0].re}'>
         <input class='share' value='${pubArray[0].share}'>
         <input class='source' value='${pubArray[0].src}'>
       </div>
     </div>
    `;
};

var contentBuild = function (oldestPost, recentPost, postsCount, menuIndex) {
  let object = document.createElement("div")
  object.classList.add("filter")
  object.setAttribute("aria-item", menu[menuIndex].ext)
  object.innerHTML =
  `<div class='ext'>
    <img class='exit' src='${menu[menuIndex].image.image()}'>
   </div>
   <a class='tag' ext='${menu[menuIndex].ext}' title='${menu[menuIndex].id}'>
    ${menu[menuIndex].id.match(/[^\/]+$/g)}
   </a>
  `
  let info = document.createElement("div")
  info.classList.add("info")
  info.innerHTML =
  `<div class='description'>&emsp;
    ${menu[menuIndex].description}
   </div><br>
    Most recent<div style='float:right'>
    ${recentPost}
   </div><br>
    Oldest post<div style='float:right'>
    ${oldestPost}
   </div><br>
    Posts&ensp;<div style='float:right'>
    ${postsCount}
   </div>
  `;
  let construct = document.createElement("div")
  construct.append(object)
  construct.append(info)
  return (construct)
};

var translationBuild = function (translation) {
  let object = document.createElement("div")
  object.classList.add("translation")
  object.setAttribute("aria-item", translation)
  object.innerHTML =
  `<img class='quickTranslation' src='images/${translation}.webp'>
   <a class='category' ext='${translation}'>
    ${translation}
   </a>
  `;
  return object
};

var assetBuild = function (assetIndex, assetImage, assetId) {
  let object = document.createElement("div")
  object.classList.add("asset")
  object.setAttribute("aria-item", assetIndex)
  object.innerHTML =
  `<img class='entity' src='${assetImage}'>
   <a class='query' title='${assetId}'>
    ${String(assetId.match(/[^\/]+$/g)).substring(0, 9)}...
   </a>
  `;
  return object
};

var suggestBuild = function (
  objectMedia,
  objectIndex,
  objectImage,
  objectId,
  objectCategory
) {
  return `
     <div class='combine'>
       <img class='circle' src='${objectImage}'>
       <div class='suggest' aria-item='${objectIndex}'
         title='${objectId}'><b class='bold'>
    ${String(objectId.match(/[^\/]+$/g)).substring(0, 18)}
     </b>...
         <br><div class='random'>
    ${objectMedia}
     </div>
       </div>
       <a style='float:right' aria-item='${objectCategory}'
     	   title='${objectCategory}'>
    ${objectCategory}
       </a>
    `;
};

var categoryBuild = function (
  objectId,
  objectIndex,
  objectImage,
  objectHash,
  objectDescription,
  objectMedia
) {
  let populate = document.createElement("div")
  populate.classList.add("populate")
  populate.setAttribute("aria-item", objectIndex)
  populate.innerHTML =
  `<div class='display'>
    <img class='display' src='${objectImage}'>
   </div>
   <div class='hash' style='display:none'>
    ${objectHash}
   </div>
   ${objectMedia}
   <div class='title'>
    ${objectId}
   </div>
   <div class='description' style='display:none'>
    ${objectDescription}
   </div>
  `;
  return populate
};

var courtesyHeader = function (objectId, objectImage, objectExternal) {
  return `
     <div class='courtesy' style='float:left'>
       <img src='${objectImage}'>
       <a ext='${objectExternal}'>
         <b>
    ${objectId}
     </b>
       </a>
       <div class='copy'>
       <div class='attr fa-ellipsis-h'></div>
         <div class='attribute'>
           <div class='site'>Copy Url
             <div style='float:right' class='fas fa-at'></div>
           </div>
           <div class='post'>Copy Post
             <div style='float:right' class='fa fa-share'></div>
           </div>
           <div class='picture'>Copy Source
             <div style='float:right' class='fa fa-camera'></div>
           </div>
         </div>
       </div>
     </div>
    `;
};

var guideBuildYoutube = function (pubArray) {
  return `
     <svg class='checkmark' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'>
       <circle class='checkmark__circle' cx='26' cy='26' r='25' fill='none' />
       <path class='checkmark__check' fill='none' d='M16 16 36 36 M36 16 16 36' />
     </svg>
     <div class='blur'></div>
     <div class='sticky item yt'>
       <div class='fill'></div>
       <div id='yt' class='src'
       aria-item='${pubArray[0].id}'
       ext='${pubArray[0].re}'
       style='width:60vw'>
       <div class='yt'>
         <iframe src='${pubArray[0].src}'>
       </iframe>
       </div>
       <div class='wrap'>
         <div class='header'>
     <div class='courtesy' style='float:left'>
       <img src='${pubArray[0].image}'>
       <a ext='${pubArray[0].re}'>
         <b>
    ${pubArray[0].title}
     </b>
       </a>
       <div class='copy'>
       <div class='attr fa-ellipsis-h'></div>
         <div class='attribute' style='height:110px'>
           <div class='site'>Copy Url
             <div style='float:right' class='fas fa-at'></div>
           </div>
           <div class='post' style='display:block'>Copy Post
             <div style='float:right' class='fa fa-share'></div>
           </div>
           <div class='picture' style='display:block'>Copy Source
             <div style='float:right' class='fa fa-camera'></div>
           </div>
         </div>
       </div>
     </div>
     </div>
         <div class='pub'>
    ${pubArray[0].title}
     </div>
    ${pubArray[0].views}
         <div class='ago'>
    ${pubArray[0].dst}
     </div>
         <input class='url' value='${pubArray[0].re}'>
         <input class='share' value='${pubArray[0].share}'>
         <input class='source' value='${pubArray[0].src}'>
       </div>
     </div>
    `;
};


var youtubeHTMLBuild = function (htmlArray) {
  return `
     <div id='yt' class='item' aria-object='${htmlArray.menuObject}'
     aria-item='${htmlArray.pubIndex}'
      ext='$htmlArray.{externalURL}'>
       <div class='header'>
     <div class='courtesy' style='float:left'>
       <img src='${htmlArray.image}'>
       <a ext='${htmlArray.externalURI}'>
         <b>
    ${htmlArray.id}
     </b>
       </a>
       <div class='copy'>
       <div class='attr fa-ellipsis-h'></div>
         <div class='attribute' style='height:110px'>
           <div class='site'>Copy Url
             <div style='float:right' class='fas fa-at'></div>
           </div>
           <div class='post' style='display:block'>Copy Post
             <div style='float:right' class='fa fa-share'></div>
           </div>
           <div class='picture' style='display:block'>Copy Source
             <div style='float:right' class='fa fa-camera'></div>
           </div>
         </div>
       </div>
     </div>
     </div>
       <div class='yt'>
         <iframe src='${htmlArray.videoSource}'>
       </iframe>
    ${htmlArray.views}
       </div>
       <div class='pub' text='${htmlArray.title}'>
    ${htmlArray.truncate}
    ${htmlArray.more}
       </div>
       <div class='ago'>
    ${htmlArray.dst}
     </div>
         <input class='url' value='${htmlArray.externalURI}'>
         <input class='share' value='${htmlArray.share}'>
        <input class='source' value='${htmlArray.externalURI}'>
     </div>
    `;
};

var xmlHTMLBuild = function (htmlArray) {
  return `
     <div class='item'
      aria-object='${htmlArray.menuObject}'
      aria-item='${htmlArray.pubIndex}'
       ext='${htmlArray.externalURI}'>
       <div class='header'>
    ${htmlArray.courtesy}
     </div>
       <div class='classic'>
       <div class='pending'><div class='loader double-circle'></div></div>
         <div class='image'>
           <div class='fa fa-heart'></div>
           <img id='${htmlArray.pubIndex}' class='img' style='display:none'>
         </div>
         <div class='wrap'>
           <div class='pub' text='${htmlArray.title}'>
    ${htmlArray.truncate}
    ${htmlArray.more}
           </div>
    ${htmlArray.searchExternal}
           <div class='ago zulu'>
    ${htmlArray.dst}
     </div>
         </div>
         <input class='url' value='${htmlArray.externalURI}'>
         <input class='share' value='${htmlArray.share}'>
         <input class='source' value='${htmlArray.src}'>
       </div>
     </div>
    `;
};

var listingIndexBuild = function (
  indexId,
  indexObject,
  indexImage,
  indexCategory,
  suggested,
  index
) {
  let key = document.createElement("div")
  key.classList.add("index")
  key.setAttribute("aria-item", indexObject)
  if (suggested == true) var contentText = `suggested...`;
  else var contentText = ``;
  key.innerHTML =
  `<div class='detail'>
    <img class='input' src='${indexImage}'>
    <div class='textMatch'>&emsp;
     ${indexCategory}
     <br>&emsp;
     ${indexId}
    </div>
    <div class='buffer'>
     ${contentText}
    </div>
   </div>
  `;
  return key
};

var sideBarThemeListing = function() {
  let list = document.createElement("div")
  list.classList.add("themes", "mainTransition")
  list.innerHTML =
  `<div class='border'>
    Visual
    <div class='fa fa-braille'></div>
   </div>
  `
  return list
}

var basicFormBuild = function() {
  let basic = document.createElement("div")
  basic.id = "basic"
  basic.innerHTML =
  `
  <form class='filter' action='#'>
    <input type='text' class='sideFilter' placeholder='filter'>
  </form>
  `
  return basic
}

var sideBarCategoryBuild = function (translation) {
  var webp = document.createElement("img")
  webp.classList.add("webp")
  webp.src = `images/${translation}.webp`
  return webp
};

var sideBarOptionBuild = function (name, classes) {
  let sel = document.createElement("div")
  sel.classList.add("sel", classes)
  sel.innerHTML = name
  return sel

};

var sideBarThemeBuild = function (icon) {
  let fontawesome = document.createElement("div")
  fontawesome.classList.add("fa", icon)
  return fontawesome;
};
