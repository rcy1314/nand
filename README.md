# RSS-Browser` <img src='https://img.shields.io/github/license/acktic/acktic.github.io?style=social'>

  - Really Simple Syndicate.
  - Rich Site Summary.

### Known Issues

* Nearly half XML responses have no images attached (use onlyImages).
* Heroku cors-anywhere first response ~7s.
* Copy post not returning local location.
* File size 12mb compressed.

### Config in base.js

* category
>&emsp; translations array

* op boolean<br>
>&emsp; invert = 0 [default]<br>
 &emsp; opposite = 1 [contrast]

* buffer integer<br>
>&emsp; listing (total) suggestions with response.

* contrast [/?+1]<br>
>&emsp; Opposite of op (applies contrast).

* onlyImages boolean<br>
>&emsp; filter feeds with Images.

* quickFeeds boolean<br>
>&emsp; Display quick feeds on visit.

* loading string<br>
>&emsp; percent or dots used by loading, $.unloading in core.js, and progress base.js.

* translations array<br>
>&emsp; Choice to reorder.

### Init.js Unique URI Identifying.

  Init.js does some handling of location.

  * Contrast Example
  > /?+1 [root]<br>
    /uri+1

  * Translation Example
  > /?q=[translation]</b> in base.js<br>
    /?q=technology

  * Query Example
  > /?q=example+query<br>
    &ensp;&ensp;filter response no passthrough from init.js (fails to bing search results).

  * Hash Example
  > /?[hash] in head.js<br>
    &emsp;/?uX <br>
    &emsp;Used in Copy Post appends time converted to base 36.<br>
    &emsp;/?uX<b>aZjk1</b> &emsp; &emsp;loads guide with progress and image in base.js<br>
    &emsp;/?<b>uXaZjk1+1</b> &emsp;loads guide with contrast to op.

  * Feed Example
  > /?q=&unique-identifier<br>
    &emsp;falls back to query, fails to xml search.<br>
    &emsp;/?q=&[hash] (not supported filter response).<br>
    &emsp;/?q=&tech (menu objects found filter response).<br>
    &emsp;/?q=&technology (translation found populate).<br>
    &emsp;/?q=&abc-technology (found one, unique passthrough).<br>
    &emsp;/?q=&jquery (not found pass through xml search).<br>

    * Query Feed Example
    > /?q=example+query&unique-identifier<br>
    > /?q=wall&imgur-wallpaper<br>
    will load feed and return at bottom will filter response to query.


### Head.js has multiple indices for objects.

  * These need to be fufilled to add an object.<br>
  > id: unique (stripped to plain text) (indexed).<br>
    cat: translation (indexed).<br>
    des: plain text (indexed).<br>
    uri: endpoint used by xml in base.js<br>
    ext: external blank exit to new tab (a href)<br>
    hash: unique alphanumeric two characters indexed by init.js (indexed).<br>
    media: xml parsing for images (boolean) indexed by onlyImages.<br>

>> (indexed) by response in base.js

### Invert

<p align='center'><img src='http://acktic.github.io/screenshots/invert.jpg'></p>

<p align='center'><img src='http://acktic.github.io/screenshots/air.jpg'></p>

<p align='center'><img src='http://acktic.github.io/screenshots/visual.jpg'></p>

### Opposite

<p align='center'><img src='http://acktic.github.io/screenshots/opposite.jpg'></p>

<p align='center'><img src='http://acktic.github.io/screenshots/result.jpg'></p>

<p align='center'><img src='http://acktic.github.io/screenshots/contrast.jpg'></p>

Want to Contribute?
----

File and issue!<br>
Submit a feed!<br>

License
----

MIT
