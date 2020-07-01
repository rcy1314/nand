if (location.href.match('\\+1'))

        contrast = true

if (location.search.split('?q=')[1]) {

        var uri = location.search.split('?q=')[1]

		uri.match(/\+1/)

		uri = uri.replace(/\?\+1|\+1/, '')

		uri = (uri.match(/[^&]+/g))

}

else uri = false

if (location.hash.substr(1).match(/\+1/g))

    var post = location.hash.substr(1).replace(/\+1/g, '')

else var post = location.hash.substr(1)

if (uri.length == 1)

    response(true, uri[1], post)

else if (uri.length = 0) 

    response(true, uri[0], post)

visual()
