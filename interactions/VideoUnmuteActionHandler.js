

function VideoUnmuteActionHandler() {
    VideoUnmuteActionHandler.prototype.id = 'unmute';
    VideoUnmuteActionHandler.prototype.displayName = 'Unmute';
    VideoUnmuteActionHandler.prototype.targetable = true;
}

VideoUnmuteActionHandler.prototype = new ActionHandler();

VideoUnmuteActionHandler.prototype.play = function (params, target) {
    var videoList = $('#' + target + ' video');
    if (videoList && videoList[0]) {
        videoList[0].muted = false;
    }
};