

function VideoMuteActionHandler() {
    VideoMuteActionHandler.prototype.id = 'mute';
    VideoMuteActionHandler.prototype.displayName = 'Mute';
    VideoMuteActionHandler.prototype.targetable = true;
}

VideoMuteActionHandler.prototype = new ActionHandler();

VideoMuteActionHandler.prototype.play = function (params, target) {
    var videoList = $('#' + target + ' video');
    if (videoList && videoList[0]) {
        videoList[0].muted = true;
    }
};
