var HttpClient = function () {
    this.get = function (url, callback) {
        var HttpRequest = new XMLHttpRequest();
        HttpRequest.onreadystatechange = function () {
            if (HttpRequest.readyState == 4 && HttpRequest.status == 200)
                callback(HttpRequest.responseText);
        }
        HttpRequest.open('GET', url, true);
        HttpRequest.send(null);
    };

    this.post = function (url, data, callback) {
        var HttpRequest = new XMLHttpRequest();
        HttpRequest.onreadystatechange = function () {
            if (HttpRequest.readyState == 4 && HttpRequest.status == 200)
                callback(HttpRequest.responseText);
        }
        HttpRequest.open('POST', url, true);
        HttpRequest.send(data);
    };
}