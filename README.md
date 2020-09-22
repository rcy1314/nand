# RSS-Browser` <img src='https://img.shields.io/github/license/acktic/acktic.github.io?style=social'>

  - Really Simple Syndicate.
  - Rich Site Summary.

### Known Issues

* Nearly half XML responses have no images attached (use onlyImages).
* Heroku cors-anywhere first response ~7s.
* Copy post not returning local location..
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

  * Category Example
  > /?q=category

  * Query Example
  > /?q=example+query

  * Hash Example
  > /?hash (in head.js)

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

Want to Contribute?
----

File and issue!
Submit a feed!
Give a star!

License
----

MIT
