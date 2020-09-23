# RSS-Browser` <img src='https://img.shields.io/github/license/acktic/acktic.github.io?style=social'>

  - Really Simple Syndicate.
  - Rich Site Summary.

### Known Issues

* Nearly half XML responses have no images attached (use onlyImages).
* Heroku cors-anywhere first response ~7s.
* Copy post not returning local location.
* File size 12mb compressed.

### Config in base.js

* category Legacy

* op color scheme<br>
&ensp;&ensp; invert = 0 (default)<br>
&ensp;&ensp; opposite = 1 (contrast)

* buffer integer<br>
&ensp;&ensp; listing (total) suggestions with response.

* contrast (/?+1)<br>
&ensp;&ensp; Opposite of op (applies contrast).

* onlyImages boolean<br>
&ensp;&ensp; filter feeds with Images.

* quickFeeds boolean<br>
&ensp;&ensp; Display quick feeds on visit.

* loading string<br>
&ensp;&ensp; percent or dots used by init.js and core.js.

* translations array<br>
&ensp;&ensp; Choice to reorder.

### Init.js Unique URI Identifying.

  Init.js does some handling of location.

  * Contrast Example
  > /?+1 (root)<br>
    &emsp;/uri+1

  * Translation Example
  > /?q=translation<br>
    &emsp;/?q=technology

  * Query Example
  > /?q=example+query<br>
    &emsp;filter response no passthrough from init.js (fails to bing search results).

  * Hash Example
  > /?hash (in head.js)<br>
    &emsp;/?uX <br>
    &emsp;Used in Copy Post appends time converted to base 36.<br>
    &emsp;example: /?uX<b>aZjk1</b> loads guide with progress.<br>
    &emsp;&emsp;&emsp;&emsp; /?<b>uXaZjk1+1</b> loads guide with contrast to op.
    
  * Feed Example
  > /?q=&unique-identifier<br>
    &emsp;falls back to query, fails to xml search.<br>
    &emsp;/?q=&hash (not found filter response).<br>
    &emsp;/?q=&tech (menu objects found filter response).<br>
    &emsp;/?q=&technology (translation found populate).<br>
    &emsp;/?q=&abc-technology (found one, unique passthrough).<br>
    &emsp;/?q=&jquery (not found pass through xml search).<br>

### Head.js has multiple indices for objects.
 
  * These need to be fufilled to added a object.<br>
  > id: unique (stripped to plain text) (indexed).<br>
    cat: translation (indexed).<br>
    des: plain text (indexed).<br>
    uri: endpoint used by xml in base.js<br>
    ext: external blank exit to new tab (a href)<br>
    hash: unique alphanumeric two characters indexed by init.js<br>
    media: xml parsing for images (boolean) indexed by onlyImages<br>

>> (indexed) by response

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
Give a star!<br>

License
----

MIT
