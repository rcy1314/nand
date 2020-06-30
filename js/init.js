
    if (location.href.match('\\+1')) {

        applyVisual(!op)
        contrast = true

    }

    if (location.search.split('?q=')[1]) {
        var uri = location.search.split('?q=')[1]
        if (uri.match(/\+1/)) uri = uri.replace(/\?\+1|\+1/, '')
        if (uri.match(/[^&]+/g)) uri = (uri.match(/[^&]+/g))
		if (location.hash.substr(1).match(/\+1/g))
			var post = location.hash.substr(1).replace(/\+1/g, '')
		else if ($.isNumeric(location.hash.substr(1)))
			var post = location.hash.substr(1)
		else var post = false
        if ($.isNumeric(post) && uri[0] && uri[1]) {
            filterResponse(true, uri[1], post)
        } else if ($.isNumeric(post) && uri[0] && !uri[1]) {
            filterResponse(true, uri[0], post)
        } else if (!$.isNumeric(post) && uri[0] && uri[1]) {
            filterResponse(true, uri[1], post)
        } else if (!$.isNumeric(post) && uri[0] && !uri[1]) {
            filterResponse(true, uri[0], post)
        }
    }

