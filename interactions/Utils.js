
function Utils() { } // constructor

// add http to URLs if missing
Utils.fixURL = function (url) {
    return (url.indexOf("http") !== 0) ? "http://" + url : url;
};

// Stop event from bubbling - includes special treatment for IE
Utils.stopPropagation = function (e) {

    // code for IE
    if (!e) {
        e = window.event;
    }

    if (e.cancelBubble) {
        e.cancelBubble = true;
    } else {
        e.stopPropagation();
    }

};

// Returns the version of Internet Explorer or a -1 (indicating the use of another browser).
Utils.getInternetExplorerVersion = function () {
    var rv = -1; // Return value assumes failure.
    if (navigator.appName == 'Microsoft Internet Explorer') {
        var ua = navigator.userAgent;
        var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null) {
            rv = parseFloat(RegExp.$1);
        }
    }
    return rv;
};

