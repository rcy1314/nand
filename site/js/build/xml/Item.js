let xmlHTMLBuild = function (htmlArray) {
  let filterBlur = document.createElement(`div`);
  let original = document.createElement(`div`);
  let publish = document.createElement(`div`);
  let classic = document.createElement(`div`);
  let pending = document.createElement(`div`);
  let loader = document.createElement(`div`);
  let object = document.createElement(`img`);
  let circle = document.createElement(`div`);
  let image = document.createElement(`div`);
  let wrap = document.createElement(`div`);
  let item = document.createElement(`div`);
  let head = document.createElement(`div`);
  let bars = document.createElement(`div`);
  let ago = document.createElement(`div`);
  let loading = document.createElement(`div`);
   let l = document.createElement(`div`);
   let o = document.createElement(`div`);
   let a = document.createElement(`div`);
   let d = document.createElement(`div`);
   let i = document.createElement(`div`);
   let n = document.createElement(`div`);
   let g = document.createElement(`div`);
   loading.setAttribute(`id`, `load`);
   l.innerHTML = `L`;
   o.innerHTML = `O`;
   a.innerHTML = `A`;
   d.innerHTML = `D`;
   i.innerHTML = `I`;
   n.innerHTML = `N`;
   g.innerHTML = `G`;
   loading.append(g);
   loading.append(n);
   loading.append(i);
   loading.append(d);
   loading.append(a);
   loading.append(o);
   loading.append(l);
  circle.classList.add(`circle`);
  original.append(circle.cloneNode(true));
  original.append(circle.cloneNode(true));
  original.append(circle.cloneNode(true));
  original.append(circle.cloneNode(true));
  original.append(circle.cloneNode(true));
  original.classList.add(`animation`);
  bars.classList.add(`bars`);
  if (fadeIntoView) object.classList.add(`hidden`);
  publish.innerHTML = htmlArray.truncate + htmlArray.more;
  item.setAttribute(`aria-object`, htmlArray.menuObject);
  if (!toggleBorders) item.style.border = `none`
  item.setAttribute(`aria-item`, htmlArray.pubIndex);
  if (
    display == `flexBox`
  )
    item.classList.add(`flex`);
  if (
    display == `sideScroll`
  )
    item.classList.add(`sideItem`);
  item.setAttribute(`ext`, htmlArray.externalURI);
  loader.classList.add(`loader`, `double-circle`);
  publish.setAttribute(`text`, htmlArray.title);
  pending.classList.add(`blink`, `pending`);
  filterBlur.classList.add(`filterBlur`);
  classic.classList.add(`classic`);
  ago.classList.add(`ago`, `zulu`);
  object.id = htmlArray.pubIndex;
  publish.classList.add(`pub`);
  head.classList.add(`header`);
  image.classList.add(`image`);
  object.classList.add(`img`);
  if (
    roundedEdge
  ) {
    object.style.borderRadius = `12px`;
    image.style.borderRadius = `12px`;
  }
  item.classList.add(`item`);
  wrap.classList.add(`wrap`);
  ago.innerHTML = htmlArray.dst;
  head.append(htmlArray.courtesy);
  item.append(head);
  if (imageLoader == `double-circle`) {
    original.style.display = `none`;
    loading.style.display = `none`;
    loader.style.display = `block`;
    bars.style.display = `none`;
  } else if (imageLoader == `loading`) {
    original.style.display = `none`;
    loading.style.display = `block`;
    loader.style.display = `none`;
    bars.style.display = `none`;
  } else if (imageLoader == `ring-circle`) {
    original.style.display = `block`;
    loading.style.display = `none`;
    loader.style.display = `none`;
    bars.style.display = `none`;
  } else if (imageLoader == `v-bars`) {
    original.style.display = `none`;
    loading.style.display = `none`;
    loader.style.display = `none`;
    bars.style.display = `block`;
  } else if (!imageLoader) {
    original.style.display = `none`;
    loading.style.display = `none`;
    loader.style.display = `none`;
    bars.style.display = `none`;
  }
  pending.append(original);
  pending.append(loading);
  pending.append(loader);
  pending.append(bars)
  image.append(pending);
  image.append(sideBarThemeBuild(`fa-heart`));
  if (
    safeSearchIDs.includes(
      menu[id].id)
  )
    image.append(filterBlur);
  image.append(object);
  if (feedImages) classic.append(image);
  wrap.append(publish);
  wrap.append(ago);
  classic.append(wrap);
  item.append(classic);
  item.append(
    copyInputAttribute(
      htmlArray.src,
      htmlArray.share,
      htmlArray.externalURI
    )
  );
  return item;
};
