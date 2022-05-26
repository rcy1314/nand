let Pretty = function() {
    let httpRequest;
    let pub = [];
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {

        if (
            httpRequest.readyState == 4
        ) {
            // 4 = `loaded`
            if (
                httpRequest.status == 200 &&
                this.responseXML
            ) {
                    // 200 = OK
                let xhr = this.responseXML;
                if (
                    xhr
                    .getElementsByTagName(
                        `entry`
                    )
                    .length >
                    0
                )
                    var channel = `entry`;

                else
                    var channel = `item`;
                for (
                    let i = 0; i <= xhr.getElementsByTagName(channel).length - 1; i++
                ) {
                    let data =
                        xhr
                        .getElementsByTagName(
                            `entry`
                        )[i];
                    let src = Source(data);

                    pub.push({
                        src: src,
                    });
                }
                if (
                    Array.isArray(pub)
                )
                    for (i = 0; i < pub.length - 1; i++) {
                        if (pub[i].src.match(/i\.redd\.it/g)) {
                            let newImg;
                            newImg = new Image();
                            newImg.setAttribute(`src`, pub[i].src);
                            newImg.onload = function() {
                                if (
                                    newImg.naturalWidth > 400
                                ) {
                                    _container.style.backgroundImage = `url(${pub[i].src})`;
                                    break
                                }
                            }
                        }
                    }
            }
        }
    }
    httpRequest.open(`GET`, `https://acktic-github-io.herokuapp.com/https://reddit.com/r/natureisfuckinglit/.rss`);
    httpRequest.setRequestHeader(`Content-Type`, `text/html; charset=utf-8`);
    httpRequest.setRequestHeader(`Accept`, `text/html; charset=utf-8`);
    httpRequest.setRequestHeader(`Access-Control-Allow-Origin`, `*`);
    httpRequest.setRequestHeader(`X-Requested-With`, `*`);
    httpRequest.send();
}
