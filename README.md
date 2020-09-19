# RSS-Browser` <img src='https://img.shields.io/github/license/acktic/acktic.github.io?style=social'>

  - Really Simple Syndicate.
  - Rich Site Summary.

### Known Issues

* Nearly half XML responses have no images attached.
* Heroku cors-anywhere first response ~7s.
* File size 12mb compressed.

### Config in base

* op
  -invert = 1
  -opposite = 0

* category Legacy
* contrast
  -Sets as Opposite of op

* onlyImages boolean
  -filter Only feeds with Images

* quickFeeds boolean
  -Display feeds on first visit

* translations array
  -Choice to reorder


### Init Unique URI Identifier

  Init.js does some handling of location.

  * Category Example
  > /?q=category

  * Query Example
  > /?q=example+query

  * Hash Example
  > /?hash

  * Feed Example
  > /?q=&unique-identifier



### Invert

<p align='center'><img src='http://acktic.github.io/screenshots/invert.jpg'></p>

<p align='center'><img src='http://acktic.github.io/screenshots/air.jpg'></p>

<p align='center'><img src='http://acktic.github.io/screenshots/visual.jpg'></p>

### Opposite

<p align='center'><img src='http://acktic.github.io/screenshots/opposite.jpg'></p>

<p align='center'><img src='http://acktic.github.io/screenshots/result.jpg'></p>

<p align='center'><img src='http://acktic.github.io/screenshots/contrast.jpg'></p>

License
----

MIT
