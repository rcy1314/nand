# RSS-Browser` <img src='https://img.shields.io/github/license/acktic/acktic.github.io?style=social'>

  - Really Simple Syndicate.
  - Rich Site Summary.

### Known Issues

* Nearly half XML responses have no images attached use onlyImages.
* Heroku cors-anywhere offloading, first response ~7s.

### Configurations in settings.js


### Init.js Unique URI Identifying.

  Init.js does some handling of location.

  * Contrast Example
  > /?+1 [<b>root</b>]

  >  /[<b>uri</b>]+1

  * Translation Example
  > /?q=[<b>translations</b>]

  > /?q=technology

  * Query Example
  > /?q=example+query

  >  filter response without passthrough from init.js fails to bing search results.

  * Hash Example
  > /?[<b>hash</b>] in head.js

  > /?uX Used in Copy Post appends time converted to base 36.

  > /?uX<b>aZjk1</b> loads guide with progress and guideImage in base.js

  >  /?<b>uXaZjk1+1</b> loads guide with contrast to op.

  * Feed Example
  > /?q=&unique-identifier fallback to query fails to bing search.

  >/?q=&[<b>hash</b>] not supported filter response.

  >/?q=&tech menu objects found filter response.

  >/?q=&technology translation found populate.

  > /?q=&abc-technology found one, unique passthrough.

  > /?q=&jquery not found pass through xml search.<br>

    * Query Feed Example

     /?q=example+query&unique-identifier

     /?q=california&abc-fresno

      will load feed return to query.


### Head.js has multiple indices for objects.

  * These need to be fufilled to add an object.

  > id: unique stripped to plain text [<b>indexed</b>]

  > cat: translation [<b>indexed</b>]

  > des: plain text [<b>indexed</b>].

  > uri: endpoint used in xml in base.js

  > ext: external blank exit to new tab legacy.

  > hash: unique two char alphanumeric indexed by init.js [<b>indexed</b>]

  > media: xml with images boolean indexed by onlyImages.

 [indexed] filtered by response in base.js

 ### Opposite

 <p align='center'><img src='http://acktic.github.io/screenshots/visit.jpg'></p>

 <p align='center'><img src='http://acktic.github.io/screenshots/result.jpg'></p>

 <p align='center'><img src='http://acktic.github.io/screenshots/wall.jpg'></p>



### Invert

<p align='center'><img src='http://acktic.github.io/screenshots/invert.jpg'></p>

<p align='center'><img src='http://acktic.github.io/screenshots/air.jpg'></p>

<p align='center'><img src='http://acktic.github.io/screenshots/visual.jpg'></p>

Want to Contribute?
----

Submit a feed!<br>
File an issue!<br>

License
----

MIT
