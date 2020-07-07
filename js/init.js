const myDecipher = decipher('mySecretSalt')

if (location.href.split('?')[1])
	if (location.href.split('?')[1].match(/^[a-z0-9\+1]+$/i)) {
		var id = myDecipher(location.href.split('?')[1].slice(0, 5))
		var ts = parseInt(location.href.split('?')[1].slice(5, 11), '36')
		var loc = window.location.origin + '?q=&' + id + ts
		if (location.href.match('\\+1')) loc = loc + '+1'
			location.href = loc
	}

if (location.href.match('\\+1'))

	contrast = true

if (location.search.split('?q=')[1]) {

        var uri = location.search.split('?q=')[1]

			uri = uri.replace(/\?\+1|\+1/, '')

			uri = (uri.match(/[^&]+/g))

if (location.hash.substr(1).match(/\+1/g))

    var post = location.hash.substr(1).replace(/\+1/g, '')

else var post = location.hash.substr(1)

if (!uri[1]) 

    response(true, uri[0], post)

else if (uri[1])

    response(true, uri[1], post)

}

visual()
