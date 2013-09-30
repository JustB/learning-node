var http = require("http");
var url = require("url");

function start(route, handle) {
    function onRequest(request, response) {
        // Retrieve the pathname. http://localhost:8888/pathname
        //                                              ^^^^^^^^
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        route(handle, pathname, response, request);

    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;

