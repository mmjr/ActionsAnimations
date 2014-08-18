

function VideoPlayActionHandler() {
    VideoPlayActionHandler.prototype.id = 'play';
    VideoPlayActionHandler.prototype.displayName = 'Play';
    VideoPlayActionHandler.prototype.targetable = true;
}

VideoPlayActionHandler.prototype = new ActionHandler();

VideoPlayActionHandler.prototype.play = function (params, target) {
    var videoList = $('#' + target + ' video');
    if (videoList && videoList[0]) {
        videoList[0].play();
    }
};