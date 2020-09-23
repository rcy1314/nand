# RSS-Browser` <img src='https://img.shields.io/github/license/acktic/acktic.github.io?style=social'>

  - Really Simple Syndicate.
  - Rich Site Summary.

### Known Issues

* Nearly half XML responses have no images attached (use onlyImages).
* Heroku cors-anywhere first response ~7s.
* Copy post not returning local location.
* File size 12mb compressed.

### Config in base.js

* op
  invert = 0,
  opposite = 1

* category Legacy

* buffer integer
  listing suggestions

* contrast (/+1)
  Opposite of op

* onlyImages boolean
  filter Only feeds with Images

* quickFeeds boolean
  Display quick feeds on visit

* loading string
  percent or dots

* translations array
  Choice to reorder


### Init Unique URI Identifier

  Init.js does some handling of location.

  * Contrast Example
  > /?+1 (root) /uri+1

  * Translation Example
  > /?q=translation
    &emsp;/?q=technology

  * Query Example
  > /?q=example+query
    &emsp;filter passthrough and bing search results

  * Hash Example
  > /?hash (in head.js)<br>
    &emsp;?uX <br>
    &emsp;Used in Copy Post appends time converted to base 36.<br>
    &emsp;example: /?uX<b>aZjk1</b><br> loads guide with progress.
    
  * Feed Example
  > /?q=&unique-identifier
    &emsp;?q=&abc-technology

### Head has multiple indices for objects
 
  * These need to be fufilled.
  > id:&emsp;&emsp;unique (plain text) indexed.
  > cat:&emsp;&emsp;translation (indexed).
  > des:&emsp;&emsp;plain text (indexed).
  > uri:&emsp;&emsp;endpoint
  > ext:&emsp;&emsp;external blank exit
  > hash:&emsp;&emsp;unique alphanumeric two charcter
  > media:&emsp;&emsp;xml parsing for images (boolean)

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

File and issue!
Submit a feed!
Give a star!

License
----

MIT
