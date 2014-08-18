

function VideoStopActionHandler() {
    VideoStopActionHandler.prototype.id = 'stop';
    VideoStopActionHandler.prototype.displayName = 'Stop';
    VideoStopActionHandler.prototype.targetable = true;
}

VideoStopActionHandler.prototype = new ActionHandler();

VideoStopActionHandler.prototype.play = function (params, target) {
    var videoList = $('#' + target + ' video');
    if (videoList && videoList[0]) {
        videoList[0].pause();
        videoList[0].currentTime = 0;
    }
};