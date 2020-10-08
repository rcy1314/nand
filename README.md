# RSS-Browser` <img src='https://img.shields.io/github/license/acktic/acktic.github.io?style=social'>

  - Really Simple Syndicate.
  - Rich Site Summary.

### Known Issues

* Nearly half XML responses have no images attached use onlyImages.
* cors-anywhere first response ~10s (mitigated).
* File size 12mb compressed 80mb uncompressed.

### Config in base.js

* category
>&emsp; translations array in base.js<br>
 &emsp;&emsp;['Social', 'News', 'Entertainment', 'Sports', 'Technology', 'World', 'Youtube']<br>

* op boolean<br>
>&emsp; invert = 0 [day]<br>
 &emsp; opposite = 1 [night]

* buffer integer<br>
>&emsp; listing total suggestions.

* contrast /?+1<br>
>&emsp; Opposite of op applies contrast.

* onlyImages boolean<br>
>&emsp; filter feeds with Images.

* quickFeeds boolean<br>
>&emsp; Display quick feeds on visit.

* loading string<br>
>&emsp; percent or dots used by loading, unloading in core.js, and progress base.js.

* expand boolean<br>
>&emsp; overrides groupType to set list [<b>true</b>] and blocks [<b>false</b>].

* groupType string<br>
>&emsp; used as a toggle with sidebar and option in main.js

* onScreen boolean<br>
>&emsp; display sidebar on visit.

* showOption boolean<br>
>&emsp; displays arm option icons.

* topBar boolean<br>
>&emsp; shows or hides topBar for group and feed.

* centerFeeds<br>
>&emsp; display first quick feeds in xml feed, toggle in sidebar.

* translations array<br>
>&emsp; Reorder option.

* reader boolean<br>
>&emsp; responsive to onlyImages, translations, scrollTop.


### Init.js Unique URI Identifying.

  Init.js does some handling of location.

  * Contrast Example
  > /?+1 [<b>root</b>]<br>
    /[<b>uri</b>]+1

  * Translation Example
  > /?q=[<b>translations</b>]<br>
    /?q=technology

  * Query Example
  > /?q=example+query<br>
    &ensp;&ensp;filter response without passthrough from init.js fails to bing search results.

  * Hash Example
  > /?[<b>hash</b>] in head.js<br>
    &emsp;/?uX <br>
    &emsp;Used in Copy Post appends time converted to base 36.<br>
    &emsp;/?uX<b>aZjk1</b> &emsp; &emsp;loads guide with progress and guideImage in base.js<br>
    &emsp;/?<b>uXaZjk1+1</b> &emsp;loads guide with contrast to op.

  * Feed Example
  > /?q=&unique-identifier<br>
    &emsp;fallback to query fails to bing search.<br>
    &emsp;/?q=&[<b>hash</b>] not supported filter response.<br>
    &emsp;/?q=&tech menu objects found filter response.<br>
    &emsp;/?q=&technology translation found populate.<br>
    &emsp;/?q=&abc-technology found one, unique passthrough.<br>
    &emsp;/?q=&jquery not found pass through xml search.<br>

    * Query Feed Example
    > /?q=example+query&unique-identifier<br>
    > /?q=california&abc-fresno<br>
    will load feed return in bottom will filter response of query.


### Head.js has multiple indices for objects.

  * These need to be fufilled to add an object.<br>
  > id: unique stripped to plain text [<b>indexed</b>]<br>
    cat: translation [<b>indexed</b>]<br>
    des: plain text [<b>indexed</b>].<br>
    uri: endpoint used in xml in base.js<br>
    ext: external blank exit to new tab legacy.<br>
    hash: unique two char alphanumeric indexed by init.js [<b>indexed</b>]<br>
    media: xml with images boolean indexed by onlyImages.<br>

>> [indexed] filtered by response in base.js

### Invert

<p align='center'><img src='http://acktic.github.io/screenshots/invert.jpg'></p>

<p align='center'><img src='http://acktic.github.io/screenshots/air.jpg'></p>

<p align='center'><img src='http://acktic.github.io/screenshots/visual.jpg'></p>

Want to Contribute?
----

Submit a feed!<br>
File and issue!<br>

License
----

MIT
