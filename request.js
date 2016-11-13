/**
 * Vanilla js for http requests
 * GET | POST
 * @constructor
 */
var Request = function () {
    this.onReadyStateChange = function (request, callback) {
        request.onreadystatechange = function () {
            if (request.readyState == 4 && request.status == 200)
                callback(request.responseText);
        }
    };
}

/**
 * Get Request
 * @param url
 * @param callback
 */
Request.prototype.get = function (url, callback) {
    request = new XMLHttpRequest();
    this.onReadyStateChange(request, callback);
    request.open('GET', url, true);
    request.send(null);
}

/**
 * Post Request
 * @param url
 * @param data
 * @param callback
 */
Request.prototype.post = function (url, data, callback) {
    request = new XMLHttpRequest();
    this.onReadyStateChange(request, callback);
    request.open('POST', url, true);
    request.send(JSON.stringify(data));
};